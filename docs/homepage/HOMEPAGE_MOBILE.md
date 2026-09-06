# Homepage — Mobile

**Date:** 2026-08-15 (Phase 5E)

MEASURED in the rendered page at ten viewports. Method as 5D: each fixture inlined into an
`<iframe srcdoc>` of an exact pixel width, so media queries evaluate against a genuine viewport.

---

## Measured across all viewports

| Viewport | Body | Prose median | Lede median | Links < 24px | Left edges | Overflow | Doc height* |
|---|---|---|---|---|---|---|---|
| 320 | 17px | 36 | 34 | **0** | 1 | none | 5,029 |
| 375 | 17px | 44 | 41 | **0** | 1 | none | 4,351 |
| 390 | 17px | 47 | 43 | **0** | 1 | none | 4,246 |
| 430 | 17px | 52 | 51 | **0** | 1 | none | 4,007 |
| 768 | 18px | 63 | 54 | **0** | 1 | none | 3,782 |
| 834 | 18px | 63 | 54 | **0** | 1 | none | 3,782 |
| 1024 | 18px | 63 | 54 | **0** | 1 | none | 3,782 |
| 1280 | 19px | 62 | 56 | **0** | 1 | none | 3,919 |
| 1440 | 19px | 62 | 56 | **0** | 1 | none | 3,919 |
| 1920 | 19px | 62 | 56 | **0** | 1 | none | 3,919 |

\* production height — the prototype banner is excluded because it is not production.

**"Left edges = 1"** means the navigation, the name, the lede, the region labels, the work titles
and the footer all share a single left edge, verified to 0.1px. The 5D `--box` system carries
across to the homepage without modification.

**Reading measure holds.** Prose sits at 62–63 characters against the 62–66 target — marginally
below the investigation page's 64 because the homepage prose contains bold runs, which are wider.
The lede, deliberately set larger at 1.3rem, lands at 54–56 characters, which is correct for a
short opening statement.

---

## The first screen at 375

The binding case. Production positions, banner excluded:

| | y |
|---|---|
| Navigation | 0 |
| Name (`h1`) | 112 |
| Identity / lane sentence | 168–396 |
| **"The work" label** | **509** |
| First work paragraph | 545 |
| Fold (≈ 375×812 with browser chrome) | **≈ 660** |

**OBSERVED at 375, rendered:** the reader sees the navigation, the name, the complete lane
sentence including CSCRF, IRDAI and "a financial firm", the "The work" label, and roughly four
lines of the internship paragraph including **Info eShield Cyber Solutions** in bold.

**Three of the four first-screen questions are answered without scrolling** — who, what, and what
work. The fourth, where the evidence is, is answered only by the word "Investigations" in the
navigation.

### The fix that got it there

**MEASURED before:** the identity block ran to 534px and "The work" label sat at **646** — one
pixel-row above a 660px fold. The reader saw a name and two paragraphs of prose and **no evidence
of work at all.**

| | |
|---|---|
| **OLD** | `h1` + two lede paragraphs, the second beginning *"Most of what I publish here…"* |
| **TEST** | Rendered at 375 and measured every block above the fold |
| **RESULT** | 534px of identity; first evidence of work below the fold |
| **NEW** | Second lede paragraph removed; `h1` bottom margin TIGHT rather than NORMAL |

The removed paragraph was doing damage beyond its height. *"Most of what I publish here…"* frames
the site as a **publishing venue** — a T9 violation sitting in the second sentence of the page. Its
idea belongs on the investigation page, where publishing is what is happening.

**MEASURED after:** "The work" at 509, first paragraph at 545, ~115px visible above the fold. E-4.

---

## Structure at mobile

**Nothing is removed, reordered or hidden at any width** — the 5B invariant holds. All six positions
appear in the same order at 320px as at 1920px.

| Element | Mobile behaviour |
|---|---|
| Navigation | Three items on one line at 320px. The name is absent from the header on this page (it is the `h1`), which removes the item that would have forced a wrap |
| Identity | Single column, lede steps to 1.15rem |
| The work | Single column prose |
| Selected investigations | Three stacked lines per item — title, then `status · origin`, then the one-line description. **No reflow: the layout is already vertical at every width**, so mobile is not a compressed desktop |
| One in full | Apparatus stays two-column (5D fix V-5); prose single column |
| Contact | Stacked links at `line-height: 2` |

The selected-work list is the part that would normally break on mobile, and it does not, because it
was never horizontal. This is a consequence of rejecting cards: a card grid would have needed a
breakpoint, and a stacked record does not.

---

## Touch targets

**MEASURED zero links below the 24px WCAG 2.2 minimum at every viewport from 320 to 1920.**

Getting there required a fix wider than 5D's:

| | |
|---|---|
| **OLD** | 5D's V-8 padded `.artifacts li a` and `.related li a` only |
| **TEST** | Measured every visible link's hit rectangle at eight viewports |
| **RESULT** | **5–9 of 12 homepage links under 24px, including the primary navigation at 18px.** V-8 never covered navigation because the investigation page is not nav-heavy |
| **NEW** | `.35em` vertical padding on every **standalone** link — navigation, site name, back link, work titles, featured heading link, contact links, "more" links, artifacts, related |

Links set inline inside a sentence are deliberately excluded: SC 2.5.8 exempts them, and padding
them would disturb the line box in running prose. E-3.

Resulting heights at 1280: navigation 35px, work titles 30px, contact links 36px.

---

## Page length — recorded honestly

`HOMEPAGE_SELECTED_DIRECTION.md` predicted ~3 screens at launch volume. **MEASURED: 4.4 screens at
1280 and 6.6 at 375** (≈ 5.8 at 375 excluding the three prototype placeholder blocks, which
production will not carry).

The prediction was wrong, not the page. Six positions separated by MAJOR gaps (125px each, ~750px
in total) plus three substantial paragraphs of professional experience do not fit in three screens,
and the experience section is the block that P5EV-004 deliberately promoted.

**Not trimmed**, because the content in question is the strongest verified asset on the site.
**Recorded as a pre-production consideration:** if the page needs to come down, the candidate is
"The work" at three paragraphs rather than two — not the removal of a position.

---

## Not tested

- Landscape phone (812×375).
- Real device rendering — everything here is Chrome at a set viewport, not iOS Safari or Android
  Chrome with their own chrome and font rendering.
- Actual touch accuracy, as opposed to measured hit-rectangle size.

---

**Note added 2026-08-15, after these measurements were taken.** The identity sentence was shortened after the attribution clearance (P5EV-009) removed the need to keep the internship and the audit work separate. Re-MEASURED: "The work" label now sits at **517px** (was 509) and the production page is **4,071px at 375** (was 4,351) — the work-section placeholder is gone. **Both conclusions stand:** the first screen still carries evidence of professional work, and the page is still longer than the ~3 screens originally predicted. Measurements left as-taken; deltas recorded here.
