# Exercise images

Drop a photo for each exercise into **this `images/` folder** and I'll wire them
into the Photo button on every plan (with the image-search fallback kept for any
you don't supply).

## How to name each file
Open **`exercise-image-list.csv`** (in the repo root). It has one row per unique
exercise with the exact filename to use, e.g.:

| exercise_name | image_filename |
|---|---|
| BB Bench Press | `bb-bench-press.jpg` |
| Fly, Standing | `fly-standing.jpg` |
| DB Row, Tripod | `db-row-tripod.jpg` |

Save each photo into this folder using **exactly that `image_filename`**.

## Rules of thumb
- **JPG or PNG** are both fine. If you use PNG, keep the same slug but end it
  `.png` (e.g. `bb-bench-press.png`).
- You do **not** have to supply all 148 — add whatever you have. Any exercise
  without a file keeps the image-search button.
- Keep them small (roughly **≤ 200 KB** each, square-ish) so the app loads fast.
- The same image is reused wherever that exercise name appears across phases.

## When you're done (or partway)
Tell me **"update images"**. I'll scan this folder, build the image manifest,
and each matching exercise's **Photo** button will show your embedded image
instead of a search link.
