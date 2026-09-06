# Responsive Foundation

**Date:** 2026-08-14 (Phase 5A)

---

## The headline consequence of Model C

**The structure does not change across breakpoints.**

Because the apparatus is distributed (masthead + inline insets) rather than columnar, there is no side column to collapse, no content to reorder, and nothing that appears or disappears with viewport width.

**What changes:** measure, type scale, outer margins, and how index metadata wraps.
**What does not change:** document order, structure, or which content is present.

This was the decisive advantage of Model C over Model A in `TWO_REGISTER_SYSTEM.md`, and it means the mobile experience is not a degraded desktop — it is the same document at a different measure.

---

## By breakpoint

### DESKTOP (wide)

| | |
|---|---|
| Reading column | Fixed at the reading measure; **does not grow with the viewport** |
| Outer margins | Large. Substantial empty space either side — correct, not wasted |
| Masthead | Label/value pairs may run inline across the column width |
| Inline insets | May be marginally narrower than the prose measure |
| Index | May exceed the reading measure; title and metadata fit on one line |
| Navigation | Four links, horizontal, no menu |

### TABLET

| | |
|---|---|
| Reading column | Approaching full available width minus margins |
| Outer margins | Moderate |
| Masthead | Pairs may begin to wrap to two rows |
| Index | Metadata may move to a second line beneath the title |
| Navigation | Unchanged — four links still fit |

### MOBILE

| | |
|---|---|
| Reading column | Full width minus margins |
| Outer margins | Minimal but never absent — text must not touch the edge |
| Masthead | Pairs stack; remains a dense block, not a list of rows with generous spacing |
| Inline insets | Full measure; distinguished by type register alone |
| Index | Title on one line, framing line, metadata beneath. Tight |
| Navigation | **Four links still fit — no hamburger** |

---

## What stays adjacent

| Relationship | Preserved? |
|---|---|
| Title ↔ masthead | ✅ Always — masthead belongs to the heading |
| Inset ↔ the paragraph it qualifies | ✅ Always — it sits in the flow at that point |
| Artifacts ↔ end of reasoning | ✅ Always |
| Index item title ↔ its metadata | ✅ Always, though it may wrap to a second line |

**Nothing separates at any width.** This is the direct benefit of never having placed anything beside anything.

---

## What must never happen on mobile

| Prohibited | Why |
|---|---|
| Apparatus behind a toggle or drawer | Would hide status and origin; VP-4 and accessibility both forbid hiding meaning |
| Content order differing from desktop | Breaks the source-order-equals-reading-order guarantee |
| Content removed at small widths | Every audience gets the same document |
| A hamburger menu | Four links fit. A menu would add an interaction for nothing |
| Horizontal scrolling | Except within code blocks and figures, where it is legitimate |
| Fixed/sticky elements consuming vertical space | Reading space is scarce on a phone |

---

## Type scale across breakpoints

- **The reading size steps down modestly**, not proportionally. Body text on mobile should remain comfortable — mobile readers are not reading less carefully.
- **The title steps down more**, since large display sizes are disproportionate on a narrow measure.
- **The apparatus barely changes.** It is already at the small end; reducing it further would harm legibility, and it is information, not fine print.

**Consequence:** the size *ratio* between prose and apparatus compresses slightly on mobile. `TYPE_CONTRAST.md` must therefore not rely on size alone — the serif/sans register distinction carries the difference at every width.

---

## Measure discipline

The reading measure is the controlling dimension of the entire system, on every device.

- Too wide: the eye loses the line return. This is the most common failure on desktop.
- Too narrow: excessive returns; fragmented reading. The risk on small phones.

**The column is capped on desktop and floors on mobile.** Between those bounds it is fluid.

---

## Test

> **Open the same investigation on a phone and a large monitor. Is it recognisably the same document, in the same order, with nothing added or missing?**

If yes, the responsive foundation is sound. If the mobile version feels like a summary, the desktop version was relying on layout to carry meaning.
