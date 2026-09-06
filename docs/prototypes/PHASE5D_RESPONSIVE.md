# Phase 5D — Responsive

**Date:** 2026-08-14 · **Status: NOT VALIDATED.** Browser tooling blocked. Nothing below was observed.

---

## What was implemented

Two breakpoints, both content-driven, per the 5B model.

| Breakpoint | Trigger | Changes |
|---|---|---|
| **≤ 600px** | Apparatus pairs stop fitting | Body 17px · base 1.754rem · h1 27px · h2 21px · apparatus grid → single column with labels above values · revision grid → single column · apparatus/inset/list text 14.5px |
| **601–1023px** | — | Body 18px · base 1.856rem · h1 31px · h2 23px |
| **≥ 1024px** | Measure reached | Body 19px · text column fixed at 37rem · margins grow, centred |

**Structure does not change at any width.** No reflow, no reordering, no hiding, no hamburger. This is Model C′'s central property.

---

## Implementation detail worth noting

The mobile apparatus switches from a two-column grid (`max-content 1fr`) to a single column with `margin-top` on `dt`. **This is a deliberate choice, not a collapse** — label above value, tightly paired, so the block stays dense rather than becoming a spaced list.

**Whether it actually stays dense is exactly what needs looking at**, and could not be.

---

## Element classification as built

| Element | 375px | Verified? |
|---|---|---|
| Header (name + 3 links) | RETAIN — flex-wrap allows a second line if needed | ❌ |
| Back link | RETAIN | ❌ |
| Title | CONDENSE 34→27px | ❌ |
| Head apparatus | RETAIN + restack | ❌ |
| Question | RETAIN | ❌ |
| Reasoning | RETAIN | ❌ |
| Inline inset | RETAIN, inline | ❌ |
| **Uncertainty** | **RETAIN — untouched at every width** | ❌ |
| Artifacts | RETAIN | ❌ |
| Foot register | RETAIN + restack | ❌ |
| Related | RETAIN | ❌ |
| Footer | RETAIN | ❌ |

**Nothing removed. Nothing reordered.**

---

## The test matrix, unrun

Viewports: **375 · 390 · 430 · 768 · 1024 · 1280 · 1440 · 1920**

| # | Test | Pass condition |
|---|---|---|
| R1 | Character count at 1440 | 62–66 |
| R2 | Character count at 375 | ≥ 45 |
| R3 | **Register distinction at 375** | Prose vs apparatus obvious at a glance |
| R4 | Header on one line at 375 | Name + 3 links fit, or wrap gracefully |
| R5 | Apparatus density at 375 | Reads as a block, not a spaced list |
| R6 | Movement gaps at 375 | Still perceptible with less page visible |
| R7 | Title at 27px with a long title | No awkward break |
| R8 | Revision dates stack legibly at 375 | Date above statement, clearly paired |
| R9 | No horizontal scroll at 320 | — |
| R10 | 200% zoom at 1440 | Behaves as tablet; no overflow |

**R3 is the critical one.** The size ratio between prose and apparatus compresses on mobile (19:15 → 17:14.5, i.e. 1.27:1 → 1.17:1). The spec predicts family contrast carries it. **Unverified.**

---

## Known unknowns

- Whether `flex-wrap` on the header produces an acceptable second line at 320px, or something awkward.
- Whether the single-column apparatus at 375px reads as dense or as a list.
- Whether 17px Newsreader at ~45–52 characters is comfortable.
- Whether the OPEN gap at ~62px feels proportionate on a short mobile viewport.

---
---

# VALIDATED — 2026-08-15

**The status line at the top of this document is superseded. The prototype was rendered.**
Everything above records what was *implemented*; everything below records what was *measured and
observed*. Method and evidence labelling: [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.

Viewports were created inside the document — each fixture inlined into an `<iframe srcdoc>` of an
exact pixel width — because `resize_window` proved unreliable. Media queries therefore evaluated
against a genuine viewport of the stated width.

## Measured, after all fixes

| Viewport | Body | Text column | Median chars | Apparatus h | Movement gap | Doc height | Overflow |
|---|---|---|---|---|---|---|---|
| 320 | 17px | 280px | 36 | 98px | 62px | 3,934px | none |
| 375 | 17px | 335px | 44 | 98px | 62px | 3,471px | none |
| 390 | 17px | 350px | 47 | 98px | 62px | 3,443px | none |
| 430 | 17px | 390px | 52 | 98px | 62px | 3,221px | none |
| 768 | 18px | 486px | 64 | 99px | 65px | 2,967px | none |
| 834 | 18px | 486px | 64 | 99px | 65px | 2,967px | none |
| 1024 | 18px | 486px | 64 | 99px | 65px | 2,967px | none |
| 1280 | 19px | 513px | 64 | 99px | 69px | 3,098px | none |
| 1440 | 19px | 513px | 64 | 99px | 69px | 3,098px | none |
| 1920 | 19px | 513px | 64 | 99px | 69px | 3,098px | none |

**Nothing is removed, reordered or hidden at any width.** MEASURED. No horizontal overflow at any
width including 320px. One shared left edge at every width (site name, title, apparatus, prose,
region labels, footer all identical to 0.1px).

## Three defects found by rendering

### R-1 — The mobile apparatus pushed the investigation off the first screen

**Severity: MEDIUM-HIGH.** MEASURED at 375.

The `≤600px` rule stacked apparatus labels above their values, producing eight lines and a
**202px** block. The question paragraph began at y=572. On a 375×812 phone with browser chrome
(~660px visible), the reader's first screen was banner, nav, back link, title and metadata — and
**not one sentence of the investigation.**

| | |
|---|---|
| **OLD** | `.apparatus { grid-template-columns: 1fr }` at ≤600px |
| **TEST** | Rendered at 375 and measured every block above the first paragraph |
| **RESULT** | 202px of apparatus; first sentence below the fold |
| **NEW** | Two columns retained at every width; gap `.3rem .9rem` |

MEASURED after: **98px**, page 216px shorter. OBSERVED: the whole first paragraph is now visible
on the first screen, and the apparatus reads as a compact keyed note rather than as a form. The
four labels are short enough to sit beside their values even at 320px.

### R-2 — Breakpoint boundaries had a fall-through gap

**Severity: MEDIUM.** MEASURED at exactly 601px and 1023px: both rendered at the **desktop** 19px
size on a tablet-width viewport.

At dpr 1.25 an integer CSS width evaluates fractionally (600.8, 1023.2), so neither
`max-width: 600px` nor `min-width: 601px and max-width: 1023px` matched, and the page silently
fell through to the desktop rules.

| | |
|---|---|
| **OLD** | `max-width: 600px` / `min-width: 601px and max-width: 1023px` |
| **TEST** | Rendered at the exact boundary values |
| **RESULT** | Both boundaries unhandled |
| **NEW** | `max-width: 37.5625em` / `min-width: 37.5625em and max-width: 64em` |

Two things changed. The boundary values are now **identical on both sides**, so at the boundary the
later rule simply wins and no width can be unhandled. And they are in `em`, so they track the
reader's font size — both breakpoints are content-driven (apparatus wrap, measure), both triggers
are properties of the type, so a reader at 200% should reach them at half the device width. At a
16px root they are 601px and 1024px, identical to before.

### R-3 — The measure did not survive the breakpoints

Covered in full in [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §2. In summary: the 18px
tablet step made the measure **longer** (80 median characters) than desktop (74), because the
column was fixed in `rem` while the font size changed. With the measure in `em` the character
count is now 64 at every viewport from 768px to 1920px with no per-breakpoint override.

## Observed

**Mobile feels intentionally designed.** Type steps to 17px, the measure is viewport-bound at a
comfortable 44 characters, the title wraps to two lines at 27px without looking broken, and the
apparatus is compact.

One unexpected result: **the revision register reads better on mobile than on desktop.** The
single-column layout gives each entry the full width, so entries read as paragraphs rather than as
rows beside a date — which is precisely the distinction that separates a record from a changelog
(see [`PHASE5D_REVISION_TEST.md`](PHASE5D_REVISION_TEST.md)).

**Tablet and desktop are unremarkable,** which is the intended result. The column centres, the
margins grow, and nothing else changes. At 1920 the column occupies about a quarter of the width
and the page reads as a narrow measure in a large field — deliberate, and consistent with the
working-document north star.

## Still open

- Rendering above 1920px was not tested. The 5B "page container capped at 76rem" behaviour is
  irrelevant here because every region now derives from `--box`; the cap should be re-examined
  when the index page exists.
- Landscape phone (e.g. 812×375) was not tested.
