"""
segment_exercises.py

Detects and crops individual exercise illustrations out of rasterized workout-plan
PDF pages, stripping surrounding text/whitespace, and outputs one tight image per
exercise plus a ready-to-paste JS object mapping exercise keys to base64 data URIs.

USAGE
-----
1. Rasterize each PDF page to PNG/JPEG first (see SKILL.md "Step 1").
2. Fill in PAGE_LEAVES below: for each page number, the ordered list of exercise
   keys that appear on that page, top to bottom, matching the order exercises
   appear in your SESSIONS data. Use one key per exercise, even inside supersets
   (e.g. a superset of two exercises = two consecutive keys on that page).
3. Run: python3 segment_exercises.py --pages-dir ./pages --out-dir ./crops
4. Paste the printed JS object into your tracker's EXERCISE_IMAGES constant.

HOW THE CROPPING WORKS
-----------------------
- For each page, we scan a column-slice on the right side of the page (where
  illustrations sit; text/titles sit on the left) and measure, row by row,
  what fraction of pixels are "non-white". Rows with little/no dark content
  are gaps between exercises; rows with content are exercise images.
- We find contiguous non-white row bands (segments) and drop the very first
  one if it's a colored header banner near the top of the page.
- If we don't get exactly as many segments as expected exercises on that page
  (common when a superset's two illustrations sit close together with a small
  gap), we adaptively merge the closest-together segments or split the
  largest one(s) until the segment count matches the expected exercise count.
- For each segment (now representing one exercise), we additionally scan for
  the LEFT edge of the actual illustration (as opposed to the exercise's name/
  set-count text, which sits further left) by requiring a SUSTAINED run of
  non-white columns (not just a thin word), so text doesn't get included in
  the crop. We add a fixed pixel buffer after that so we don't clip barbells,
  limbs, or other features that extend further left than the "dense" torso.
"""

import argparse, base64, json, os
from PIL import Image
import numpy as np

# --- EDIT THIS PER NEW PDF ---
# page number -> ordered list of exercise keys appearing on that page (top to bottom)
PAGE_LEAVES = {
    # 7:  ['s1-e1', 's1-e2', 's1-e3'],
    # 8:  ['s1-e4', 's1-e5', 's1-e6'],
}

# Tune these only if crops look wrong on a new PDF's layout/resolution
SEGMENT_MIN_HEIGHT = 100      # px; filters out thin title-text false positives
SEGMENT_GAP_THRESHOLD = 0.03  # fraction non-white per row to count as "content"
SEGMENT_X_RANGE = (460, None) # column slice used to find top/bottom bands (None = image width)
LEFT_EDGE_THRESHOLD = 0.12    # stricter fraction, avoids triggering on thin text strokes
LEFT_EDGE_RUN = 25            # consecutive columns required above threshold
LEFT_EDGE_SEARCH_START = 300  # don't bother searching left of this x
LEFT_EDGE_PADDING = 65        # extra px kept to the left of detected edge (avoids clipping barbells/limbs)
CROP_PAD_TOP_BOTTOM = 14
OUTPUT_WIDTH = 420
JPEG_QUALITY = 72


def get_segments(arr, x0, x1, min_height, gap_thresh):
    col = arr[:, x0:x1]
    nonwhite = (col < 245).mean(axis=1)
    inband = nonwhite > gap_thresh
    segs, start = [], None
    for i, v in enumerate(inband):
        if v and start is None:
            start = i
        elif not v and start is not None:
            segs.append([start, i]); start = None
    if start is not None:
        segs.append([start, len(inband)])
    segs = [s for s in segs if s[1] - s[0] >= min_height]
    return [s for s in segs if s[0] > 130]  # drop header banner near y=0


def adjust_segments(segs, target):
    segs = [list(s) for s in segs]
    while len(segs) > target:
        gaps = [segs[i+1][0]-segs[i][1] for i in range(len(segs)-1)]
        idx = gaps.index(min(gaps))
        segs[idx] = [segs[idx][0], segs[idx+1][1]]
        del segs[idx+1]
    while len(segs) < target:
        heights = [s[1]-s[0] for s in segs]
        idx = heights.index(max(heights))
        s0, s1 = segs[idx]
        mid = (s0+s1)//2
        segs[idx] = [s0, mid]
        segs.insert(idx+1, [mid, s1])
    return segs


def find_left_edge(arr, y0, y1, w):
    row_band = arr[y0:y1, :]
    nonwhite_col = (row_band < 245).mean(axis=0)
    run = 0
    for x in range(LEFT_EDGE_SEARCH_START, w):
        if nonwhite_col[x] > LEFT_EDGE_THRESHOLD:
            run += 1
            if run >= LEFT_EDGE_RUN:
                return x - LEFT_EDGE_RUN + 1
        else:
            run = 0
    return 460


def process(pages_dir, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    mapping = {}
    for page, keys in PAGE_LEAVES.items():
        path = None
        for ext in ('jpeg', 'jpg', 'png'):
            candidate = os.path.join(pages_dir, f'{page}.{ext}')
            if os.path.exists(candidate):
                path = candidate
                break
        if not path:
            print(f'WARNING: no image found for page {page}, skipping')
            continue

        im = Image.open(path)
        arr_gray = np.array(im.convert('L'))
        h, w = arr_gray.shape
        x1 = SEGMENT_X_RANGE[1] or w
        segs = get_segments(arr_gray, SEGMENT_X_RANGE[0], x1, SEGMENT_MIN_HEIGHT, SEGMENT_GAP_THRESHOLD)
        segs = adjust_segments(segs, len(keys))

        for key, (y0, y1) in zip(keys, segs):
            yy0 = max(0, y0 - CROP_PAD_TOP_BOTTOM)
            yy1 = min(h, y1 + CROP_PAD_TOP_BOTTOM)
            left_edge = find_left_edge(arr_gray, yy0, yy1, w)
            x0 = max(0, left_edge - LEFT_EDGE_PADDING)
            crop = im.crop((x0, yy0, w, yy1))
            cw, ch = crop.size
            scale = OUTPUT_WIDTH / cw
            crop = crop.resize((OUTPUT_WIDTH, max(1, int(ch * scale))))
            out_path = os.path.join(out_dir, f'{key}.jpg')
            crop.save(out_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
            mapping[key] = out_path

    # Emit ready-to-paste JS
    js_path = os.path.join(out_dir, 'exercise_images.js')
    with open(js_path, 'w') as f:
        f.write('const EXERCISE_IMAGES = {\n')
        for key, path in sorted(mapping.items()):
            with open(path, 'rb') as img:
                b64 = base64.b64encode(img.read()).decode('ascii')
            f.write(f'  "{key}": "data:image/jpeg;base64,{b64}",\n')
        f.write('};\n')

    print(f'Cropped {len(mapping)} exercises. JS mapping written to {js_path}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--pages-dir', required=True, help='Folder containing rasterized page images named 1.jpeg, 2.jpeg, etc.')
    parser.add_argument('--out-dir', required=True, help='Folder to write cropped images + exercise_images.js')
    args = parser.parse_args()

    if not PAGE_LEAVES:
        print('EDIT PAGE_LEAVES at the top of this script before running.')
    else:
        process(args.pages_dir, args.out_dir)
