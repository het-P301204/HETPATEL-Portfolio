# Ultra-Wide Layout

**Date:** 2026-08-14 (Phase 5B)

---

## Behaviour above ~1440px

**Nothing changes.**

- Reading column fixed at 68ch.
- Content region fixed at 46rem.
- Page container caps at 76rem; margins stop growing beyond it.
- Composition stays centred.

At 2560px there is substantial empty space either side. **This is the correct outcome.**

---

## Why the alternatives are worse

| Alternative | Why rejected |
|---|---|
| **Widen the measure** | Above ~75ch the eye loses the line return. The primary activity degrades to fill space |
| **Introduce a sidebar** | Reintroduces the empty-gutter failure and the Tufte resemblance, both eliminated deliberately |
| **Move the apparatus into the margin at wide widths** | Creates a third layout and breaks document-order-equals-visual-order |
| **Multi-column prose** | Requires vertical scroll-and-return; fails at any length |
| **Decorative fills** | Ornament; violates the container and complexity policies |
| **Scale everything up** | Type sized for reading is already correct; enlarging it makes a wall of text |
| **Left-align the column** | Strands content against one edge; asymmetry without function (VP-9) |

**Every option that uses the space makes the reading worse.** That is the whole argument.

---

## Making emptiness read as intentional

Emptiness is only a problem when it looks accidental. Three things prevent that:

1. **The column is precisely centred**, so the space is symmetrical and evidently deliberate.
2. **Nothing floats.** No element drifts toward an edge or sits in the margin, so the margin reads as margin rather than as unfilled area.
3. **The page ends where content ends.** No full-viewport sections forcing scroll on a short page.

**The reference is a well-set book at a large desk** — the page does not grow to fill the desk, and nobody experiences that as waste.

---

## The honest caveat

**On a 34" ultrawide monitor this site will look like a narrow column of text with a great deal of space around it.**

Some visitors will read that as underdesigned. Accepted, for two reasons:

1. The alternative is worse reading, which fails the primary activity.
2. Ultra-wide is a minority context, and the audiences that matter most — recruiters on laptops and phones, practitioners on laptops — are not in it.

**Mitigation is craft, not layout.** With near-zero imagery and motion, the typography must be good enough that a narrow column of well-set text is itself the impression. This is the same craft dependency recorded as R3 in Phase 5A, and ultra-wide is where it is most exposed.

---

## Zoom interaction

At 200% zoom on a 1920px display the effective viewport is ~960px — tablet-like. The measure holds, margins compress, no layout change.

**Fixed measures in `ch` and `rem` scale correctly with zoom.** A viewport-percentage-based measure would not, which is a further argument for the unit choice in `PAGE_WIDTH_SYSTEM.md`.
