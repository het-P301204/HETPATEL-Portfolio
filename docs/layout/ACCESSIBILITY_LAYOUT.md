# Accessibility — Layout

**Date:** 2026-08-14 (Phase 5B) · Validating the spatial architecture.

---

## The guarantee

> **Document order = reading order = visual order = focus order, at every viewport.**

Model C′ makes this trivially true because nothing is ever repositioned. There is no side column, no reflow, no order change between breakpoints, and no content that appears or disappears with width.

**This is the single largest accessibility benefit of the chosen model** and it was a decisive factor in selecting it.

---

## Does the apparatus relationship survive when inline?

**The apparatus is always inline.** There is no "when" — Model C′ has one layout.

The relationship is carried by three mechanisms, none width-dependent:

| Mechanism | Survives narrow viewport? | Survives no CSS? | Survives screen reader? |
|---|---|---|---|
| **Proximity** (TIGHT below title, OPEN above question) | ✅ vertical | ✅ source order | ✅ |
| **Type register** (serif vs sans) | ✅ | ◐ lost, but markup carries it | ✅ via `<dl>` |
| **Density** | ✅ | ◐ | n/a |

**With CSS disabled**, the head apparatus is a definition list beneath an `h1` — semantically exactly what it is. Nothing is inferred from position.

---

## Heading hierarchy

```
h1   investigation title          (one per page)
h2   internal headings            (long investigations only)
```

**Movements are not headings.** They are marked by space, so the heading tree stays shallow and accurate — a screen-reader user navigating by heading gets the title and any genuine internal sections, not a list of form labels.

**Consequence:** a screen-reader user cannot jump to "what I couldn't determine". This is the accessibility cost of marking movements with space rather than headings, and it is recorded honestly. **If 5D testing shows this is a real barrier, it strengthens the case for the `UNCERTAINTY_SYSTEM.md` escape hatch — a heading, not a box.**

---

## Zoom to 200%

At 200% on a 1920px display the effective viewport is ~960px — the layout behaves as tablet. Measure holds, margins compress, structure unchanged.

`ch` and `rem` scale correctly with zoom; a viewport-percentage measure would not.

**No horizontal scrolling at 200%** except within code blocks and figures, where it is legitimate.

---

## Text resizing (browser font size, not zoom)

Type-relative spacing means the vertical rhythm scales with the user's chosen text size. Gaps remain proportional rather than becoming cramped.

**This is a direct benefit of the type-relative spacing scale** in `SPACING_RHYTHM.md`.

---

## Narrow viewport

At 320px: measure floors at ~45ch, four navigation links must still fit on one line (validated in 5D), apparatus pairs wrap to three rows, nothing is hidden.

---

## Keyboard

- Single-column structure makes tab order automatic and correct.
- Skip-to-content link before the header.
- Back link above the title is reachable early in the tab order — good for deep-linked users.
- **No focus traps** — no modals, no overlays, no menus.

---

## High contrast and forced colours

Since **no meaning is carried by colour** (status is a word, links are underlined, register is typographic), forced-colours mode loses nothing.

The one or two hairlines must remain perceptible; otherwise the layout is unaffected.

---

## Reduced motion

Near-zero motion baseline, so the reduced-motion layout is identical.

---

## Layout-specific gates for 5D

1. CSS disabled — is the order still correct?
2. Screen reader — does the head apparatus announce as label/value pairs?
3. 200% zoom — no horizontal scroll?
4. 320px — navigation on one line?
5. Keyboard-only traversal of an investigation.
6. **Heading-navigation test** — is the shallow tree a barrier in practice?
