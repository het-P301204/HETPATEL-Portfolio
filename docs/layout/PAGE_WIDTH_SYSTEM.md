# Page Width System

**Date:** 2026-08-14 (Phase 5B)

**Units:** `ch` for reading regions (ties width to the type, not the screen), `rem` elsewhere. Pixel equivalents assume a ~19px body size and are indicative only — they change with the 5C type selection.

---

## The chain

```
VIEWPORT
└── PAGE CONTAINER      max ~76rem — bounds outer margins, not content
    └── CONTENT REGION  max ~46rem — index rows, figures, foot register
        └── READING     68ch preferred — prose
            └── APPARATUS  inherits reading width; never narrower as a block
```

**Only two widths matter:** the reading measure and the content region. Everything else is margin.

---

## Values

| Region | Preferred | Acceptable | Reason |
|---|---|---|---|
| **Reading (prose)** | **68ch** | 62–74ch | Classic 60–75 character measure for sustained reading. Serif at the lower end of that band reads best; 68 leaves margin for the long technical terms this content contains |
| **Content region** | **46rem** (~736px) | 42–52rem | Index rows and figures need more than prose. Wide enough for title + metadata on one line at desktop |
| **Page container** | **76rem** (~1216px) | 68–84rem | Caps outer margin growth. Beyond this the margins stop expanding and the composition stays anchored |
| **Outer margin — mobile** | **1.25rem** (20px) | 16–24px | Text must not touch the edge; more wastes scarce width |
| **Outer margin — tablet** | **2.5rem** (40px) | 32–56px | — |
| **Outer margin — desktop** | auto (centred) | — | Reading column centres within the page container |
| **Minimum useful viewport** | **320px** | — | Below this, reflow is best-effort |

---

## Behaviour by viewport

| Viewport | Reading column | Margins |
|---|---|---|
| < 480px | Fills available width; may drop below 62ch — acceptable | 20px |
| 480–768px | Approaches 62–68ch | 20–32px |
| 768–1024px | Reaches 68ch | 40px+ |
| 1024–1440px | **Fixed at 68ch** | Grow, centred |
| > 1440px | **Fixed at 68ch** | Capped by the 76rem page container |

**The reading column stops growing at ~1024px and never grows again.** This is the single most important width decision — a measure that expands with the viewport becomes unreadable, and resisting that is what distinguishes a reading site from a marketing page.

---

## Alignment: centred column, left-aligned content

The reading column is **centred in the viewport**; everything **inside** it is left-aligned to a single edge.

Considered and rejected: a left-offset column (asymmetry without function, and it strands content against one edge on wide screens), and full centring of text (harms reading).

---

## Ultra-wide

Above ~1440px the composition does not change — the column stays at 68ch, margins stop growing at the page container cap.

**Substantial empty space at 2560px is correct**, not a failure. The alternatives — stretching the measure, adding a sidebar, introducing decorative fills — all make the page worse. See `ULTRA_WIDE_LAYOUT.md`.

---

## Why `ch` for reading and `rem` elsewhere

`ch` binds the measure to the chosen typeface, so the character count stays right when 5C selects a serif with different metrics. `rem` suits structural regions that should not shift with type selection.

**Consequence for 5C:** the serif's average character width directly changes the pixel width of the reading column. `PHASE5B_HANDOFF.md` flags this as a dependency.
