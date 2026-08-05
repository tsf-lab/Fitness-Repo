---
name: fitness-plan-tracker-builder
description: Build a mobile-friendly, self-contained HTML workout tracker app from a workout/exercise plan PDF (like a personal trainer's PDF program), complete with per-set logging, weight/reps/duration tracking, superset grouping, cropped exercise photos pulled straight from the PDF, and equipment defaults. Use this skill whenever the user uploads a workout plan, exercise program, or fitness PDF and wants it turned into a trackable app, or asks to build/update a workout tracker, or wants exercise photos extracted from a fitness PDF. Always use this skill for these requests instead of building a tracker from scratch — it encodes a battle-tested data model, cropping technique, and feature set from prior iteration.
---

# Fitness Plan Tracker Builder

Turns a workout-plan PDF into a single-file, standalone HTML app the user can host anywhere (GitHub Pages, or any static host) and use on their phone to log every workout day-by-day. This skill was distilled from an extended real build — read `assets/template.html` for the full working reference implementation before making changes; don't reinvent the data model.

## When to use this

- User uploads a PDF that looks like a workout/training program (sessions, exercises, sets/reps, illustrations)
- User asks to build, update, or extend a "workout tracker," "fitness tracker," or similar app
- User wants exercise photos/illustrations extracted from a fitness PDF

## Overview of the deliverable

A single `.html` file with everything inline (styles, fonts via CDN links, all JS) — no build step, no server. It:
- Shows one tab per workout session/day, plus a weekly calendar strip (Sun–Sat) you can page through
- Lets the user log actual reps/duration/weight per set, with the plan's target shown as a placeholder
- Tracks weight (and, for cardio, incline/speed) with automatic carry-forward from the last time logged and an up/down comparison badge
- Groups superset exercises into one bundled card with per-exercise subsections
- Shows a cropped photo of each exercise pulled directly from the source PDF
- Supports swapping any exercise for an alternative (from a small built-in database, or a fully custom one), removing exercises, and adding brand-new ones (from the database or blank) — all **scoped to the day they were made**, so the plan itself stays pristine and the next day starts from the original list again
- Keeps weights isolated per equipment (a Cable weight never carries into Machine), tracks a top-set max alongside the working weight, handles barbell plate-vs-bar weight, and signs loadable-bodyweight work (+ added belt / − assisted band on dips and pull-ups)
- Lets the user reorder a session's exercises, log calories, and add extra ad-hoc workouts to any day
- Persists everything client-side (see "Storage" below)

## Step 0 — Check the context

If this is being built inside **Claude.ai chat** (an artifact), use `window.storage` for persistence (see `persistent_storage_for_artifacts` in the system prompt) instead of `localStorage`. If the user says they want to **host it themselves** (GitHub Pages, their own server, download-and-open-locally), use `localStorage` instead — `window.storage` only works inside Claude's own artifact viewer. `assets/template.html` already uses `localStorage`; swap to `window.storage` only if you're building this as a claude.ai artifact instead.

Always add a proper `<!DOCTYPE html><html><head><meta charset="UTF-8">...` wrapper (not just a bare fragment) if the file will be hosted standalone — otherwise special characters (em dashes, etc.) can render as mojibake in some browsers.

## Step 1 — Read the PDF and extract the plan structure

Use the `pdf-reading` skill to rasterize each page to an image (this skill's cropping script expects page images named `1.jpeg`, `2.jpeg`, etc. in one folder) and to extract page text. From the text, build out:

- **Sessions**: one per workout day (e.g. "Legs," "Chest and triceps"), each with a title and a dominant muscle-group "accent" color
- **Exercises per session**, each with: name, target muscle group, number of sets, target reps (or, for timed/cardio work, a target duration + unit), whether it's typically weighted (`w: true/false`), whether it's cardio-style equipment with incline/speed (`cardio: true`), and any coaching note
- **Supersets**: groups of exercises done back-to-back for N rounds — these render as one bundled card (see `assets/template.html`'s `SESSIONS` data and `superset(...)` / `single(...)` helpers for the exact shape)

Ask the user clarifying questions only if the PDF's structure is genuinely ambiguous (e.g. unclear which exercises are grouped). Otherwise proceed — most trainer PDFs follow a consistent "Session X" → exercise list → sets/reps → optional coaching note pattern.

## Step 2 — Crop exercise photos out of the PDF

Most trainer PDFs show two small pose illustrations per exercise, laid out with the exercise's name/sets on the left and the images on the right — with **multiple exercises stacked on one page**, and supersets sometimes packed tightly together with little gap between them.

Use the bundled `scripts/segment_exercises.py` — it automates the row-detection, adaptive segment merge/split (for tightly-packed supersets), and left-edge text-stripping (so exercise names don't bleed into the photo) that this technique depends on. Read the script's own docstring/comments for exactly how it works before running it — don't rebuild this logic from scratch, it took real iteration to get right (particularly: requiring a *sustained* run of non-white columns for the left edge, not just any dark pixel, or thin exercise-name text gets included; and giving generous left-padding after that so barbells/limbs that extend past the "dense" body silhouette don't get clipped).

1. Rasterize PDF pages to `./pages/1.jpeg`, `./pages/2.jpeg`, etc.
2. Fill in `PAGE_LEAVES` at the top of the script: for each page number, the ordered list of exercise keys (matching your `SESSIONS` ids) that appear on that page, top to bottom.
3. Run: `python3 scripts/segment_exercises.py --pages-dir ./pages --out-dir ./crops`
4. Spot-check 4-5 crops with the `view` tool across different pages (especially any page with a superset) before trusting the whole batch — tune the constants at the top of the script if a page's layout doesn't match (e.g. much higher-resolution PDF, different column layout).
5. Paste the generated `exercise_images.js` content in as the tracker's `EXERCISE_IMAGES` constant.

If a "Photo" button is wanted per exercise (recommended — this is in the template already), wire it to a lightbox that looks up `EXERCISE_IMAGES[sessionId + '-' + ex.id]`. Exercises with no cropped image fall back to a Google Images search, same as the "Demo" YouTube link. Both searches run through `searchSubject()`, which prepends the exercise's selected equipment (cable / dumbbell / barbell / machine ...) unless the name already implies it — so if you change the equipment option lists, update the `EQUIP_SEARCH` table alongside them.

## Step 3 — Adapt the template

Start from `assets/template.html` and:
- Replace the `SESSIONS` array with the new plan's structure
- Replace `EXERCISE_IMAGES` with the newly cropped set (an empty `{}` is valid — those exercises fall back to an image search)
- Update `MUSCLE_ALTS` (the swap-suggestion database) to include the new plan's exercise names where relevant, keeping it alphabetized within each muscle group
- Set sensible `equip:` defaults per exercise (see `guessEquipment()` — it heuristically guesses from the name, but explicit `equip:` on the exercise definition always takes precedence and is more reliable — ask the user for a quick equipment pass via CSV export/reimport if precision matters, see "Bulk-editing exercise names/equipment" below). Any label you write is collapsed into the curated toggle set by `normStrength()` / `normCardio()` / `normLoadBW()`, so a plan's own wording ("Free Weights", "Barbell/Rack") is safe to paste in
- Set `PLAN_TITLE` / `PLAN_LABEL` near the top of the script to the new plan's name, and `CACHE_KEY` to something unique per plan (two trackers sharing a key share their logged data)

Keep every existing feature working — don't strip things out. The full feature list (weight/reps/duration tracking with carry-forward, per-equipment weight isolation, max-weight tracking, superset bundling, day-scoped swap/remove/add, exercise reordering, equipment picker, calories, notes, per-day view via the week strip, extra ad-hoc workouts, collapse-on-complete, etc.) should all still function; they're all general-purpose and not tied to the specific plan's content.

### Where the plan-specific bits live

Everything you need to touch is in the first ~370 lines; the rest is generic app code.

| What | Where |
| --- | --- |
| Plan name, storage key | `PLAN_TITLE` / `PLAN_LABEL` / `CACHE_KEY` |
| Muscle groups + colors | `MUSCLE_LABELS`, and the `--legs` / `--chest` / … CSS vars |
| Swap database | `MUSCLE_ALTS` |
| Exercise photos | `EXERCISE_IMAGES` |
| The plan itself | `SESSIONS` (via `single()` / `superset()`) |
| Week-strip tab abbreviations | `SHORT_LABELS` (keys must match session titles) |

## Bulk-editing exercise names/equipment

For large renames or equipment corrections, export a CSV (`session_id, session_title, exercise_id, exercise_name, suggested_equipment`) generated straight from the live `SESSIONS` data (don't hand-transcribe — parse it out with a script, like was done here), hand it to the user to edit, then re-parse their edited CSV back against the same `(session_id, exercise_id)` keys to patch names/equipment in place. This avoids error-prone manual find-and-replace across a large file.

## Step 4 — Deployment guidance

If the user wants to host this themselves (not just use it as a claude.ai artifact):
- GitHub Pages is the simplest free option: create a repo, upload the file renamed to `index.html`, enable Pages in repo Settings, done
- Remind them that `localStorage`-based persistence is per-browser/per-device — it won't sync across devices unless they add their own backend
- Any time you hand them an updated file, tell them plainly: download it, then replace `index.html` in their repo (upload + overwrite, or paste into GitHub's web editor) to see changes live

## Reference

See `assets/template.html` for the complete, working implementation — this is the ground truth for styling conventions (dark theme, muscle-based color coding, Bebas Neue/Inter fonts, mobile-first layout capped at 600px), data shapes, and every feature's exact behavior. When extending the app, match its existing patterns rather than introducing new ones.
