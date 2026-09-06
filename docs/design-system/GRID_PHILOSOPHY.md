# Grid Philosophy

**Date:** 2026-08-14 (Phase 5A)

---

## Decision: a single-axis editorial grid, not a column grid

The site has one reading column and no side column (Model C, `TWO_REGISTER_SYSTEM.md`). A multi-column grid would therefore exist without anything to place in it.

**What governs layout is a vertical rhythm and one shared left edge** — not a set of columns.

| Option | Verdict |
|---|---|
| **Strict multi-column grid** | ❌ Nothing needs columns. Would exist to justify itself |
| **Editorial single-axis grid** | ✅ **Selected.** One measure, one left edge, a consistent vertical scale |
| Asymmetric grid | ❌ Asymmetry as style is banned (VP-9). The one functional asymmetry — register distinction — is typographic, not positional |
| Fluid grid | ◐ Partly — measure adapts within bounds, but the structure does not change |
| Hybrid | ◐ The index may use a simple two- or three-part row structure. Not a page grid |

---

## The system

```
ONE LEFT EDGE        every element on a page aligns to it
ONE MEASURE          the reading column controls content width
ONE VERTICAL SCALE   a consistent spacing scale governs all vertical space
```

**Everything shares the left edge.** Title, masthead, prose, insets, artifacts, related links. No indentation, no hanging elements, no offsets.

This is the single decision that most determines whether the page reads as *kept* rather than *composed*. Working documents have one margin. Designed pages have several.

---

## Where the grid flexes

| Surface | Structure |
|---|---|
| Investigation detail | Single column at reading measure |
| Investigation index | Rows: title + framing line + metadata. May exceed reading measure |
| Notes index | Rows, often containing the full note |
| Homepage | Single column; featured investigation at reading measure |
| About | Single column |

**The index is the only place with internal horizontal structure**, and it is row-based rather than grid-based — metadata may sit inline after the title or on a following line, depending on width. It is not a table and not a card grid.

---

## Why not a conventional 12-column grid

Three reasons:

1. **Nothing is placed in columns.** With Model C there is no side content — a 12-column grid would be scaffolding for a building that has one room.
2. **It invites column-filling.** A visible grid creates pressure to place things in the empty columns, which is how sites acquire sidebars, related-content blocks and promotional panels they did not need.
3. **It fights the reading measure.** Reading width is determined by typography, not by a fraction of the viewport.

---

## Responsive behaviour

**The grid does not change across breakpoints.** One column at every width.

What changes: the measure adjusts within readable bounds, outer margins compress, and type scale steps down. **Structure is constant** — see `RESPONSIVE_FOUNDATION.md`.

This is a direct benefit of Model C: because there is no side column, there is no reflow, no ordering change, and no content that appears or disappears with viewport width.

---

## Permitted irregularities

Per VP-9, each must have a documented reason. Currently there are exactly two:

1. **The index may exceed the reading measure.** Reason: it is scanned, not read; a wider row fits title and metadata on one line at larger widths.
2. **Diagrams may exceed the reading measure.** Reason: a diagram constrained to a text column may become illegible. Applies to the 2–3 explanatory diagrams permitted site-wide.

**No other exception exists.** Any proposed third must be added here with its reason before it is implemented.

---

## The test

> **Could a reader draw the layout from memory after reading two investigations?**

If yes, the grid is doing its job — it is consistent enough to become invisible. If each page feels differently composed, the grid has become a canvas.
