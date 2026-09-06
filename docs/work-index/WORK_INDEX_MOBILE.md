# Work / Investigation Index — Mobile

**Date:** 2026-08-15 (Phase 5F)

MEASURED in the rendered page. Method as 5D/5E: each fixture inlined into an `<iframe srcdoc>` of
an exact pixel width, so media queries evaluate against a genuine viewport.

---

## Measured

| Viewport | Body | Row height | 3-item doc | 30-item doc | Links < 24px | Left edges | Overflow |
|---|---|---|---|---|---|---|---|
| 320 | 17px | ~185px | 1,810 | — | **0** | 1 | none |
| 375 | 17px | 177px | 1,690 | 6,289 | **0** | 1 | none |
| 390 | 17px | 174px | 1,664 | — | **0** | 1 | none |
| 430 | 17px | 166px | 1,598 | — | **0** | 1 | none |
| 768 | 18px | 130px | 1,594 | — | **0** | 1 | none |
| 1024 | 18px | 130px | 1,594 | — | **0** | 1 | none |
| 1280 | 19px | 136px | 1,576 | 5,114 | **0** | 1 | none |
| 1440 | 19px | 136px | 1,576 | — | **0** | 1 | none |
| 1920 | 19px | 136px | 1,576 | — | **0** | 1 | none |

3 items = **2.6 screens at 375**. 30 items = **9.5 screens at 375**.

---

## Mobile is not a compressed desktop

**The row is vertical at every width, so nothing reflows.** Title, then framing, then record —
stacked at 320px and stacked at 1920px. There is no breakpoint in the index at all.

This is a direct consequence of rejecting cards. A card grid needs a column-count breakpoint and a
decision about what to drop; a stacked record needs neither. **The index has its own intentional
mobile composition because it never had a desktop-only one.**

OBSERVED at 375: titles wrap to two lines and remain clearly dominant over the 16px framing line.
The record line stays on one line at every width — the reason `domain` was removed from it (it was
the field that would have forced a wrap).

---

## What mobile changes

| Element | Behaviour |
|---|---|
| Body | 19 → 18 → 17px at the two content-driven breakpoints |
| Title | 1.25rem, scaling with the root; wraps to 2 lines at 375, 3 at 320 |
| Framing | 1rem; 3–5 lines at 375 |
| Record | 0.84375rem; **one line at every width** |
| Row gap | NORMAL, which scales with the base |
| Navigation | 4 items on one line at 320px |

**Nothing is removed, reordered or hidden at any width.**

---

## Touch targets

**Zero links below 24px at every viewport**, verified from rendered hit rectangles.

The index titles inherit the site-wide standalone-link rule established in 5E (`.35em` vertical
padding), which `.index > li > a` was added to. Because titles wrap to two lines on mobile, their
real target is 50–60px — comfortably the largest tap target on the page, which is correct since they
are the only thing a reader is meant to tap.

The framing sentence and the record line are **not** links, so there is no ambiguity about what is
tappable — one target per row.

---

## The 30-item mobile case

**9.5 screens.** Long, and the longest surface on the site.

Not treated as a defect, for two reasons. It is a fixture state that does not exist yet and may not
for a year or more. And **grouping becomes the default at ~10–12 items** (finding I-3), which
inserts landmarks the reader can scroll between — the mitigation is already specified rather than
outstanding.

**What is not proposed:** pagination, infinite scroll, or a compact mobile-only row. Pagination
hides the size of the corpus, infinite scroll is banned by Het's brief, and a compact mobile row
would break the "identical at every width" invariant that has held since 5B.

---

## Not tested

- Landscape phone (812×375).
- Real device rendering — this is Chrome at a set viewport, not iOS Safari or Android Chrome.
- Actual touch accuracy, as distinct from measured hit-rectangle size.
- 30-item fixture below 375px.
