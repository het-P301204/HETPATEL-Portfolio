# Performance — Layout

**Date:** 2026-08-14 (Phase 5B)

> **Objective: sophisticated visual architecture, simple technical implementation.**

---

## What this layout requires

**Essentially: normal document flow.**

| Requirement | Mechanism | Cost |
|---|---|---|
| Single centred column | `max-width` + `margin: auto` | Zero |
| Reading measure in `ch` | A width unit | Zero |
| Vertical rhythm | `margin` on block elements | Zero |
| Apparatus head | A definition list, possibly `flex-wrap` for inline pairs | Negligible |
| Inline insets | Block elements in flow | Zero |
| Foot register | A list | Zero |
| Index rows | Block elements | Zero |
| Two breakpoints | Two media queries | Zero |
| Colour scheme | One `prefers-color-scheme` block | Zero |

**No JavaScript is required for any layout behaviour.** The page is readable and correctly structured with JS disabled — a hard requirement, met by construction rather than by effort.

---

## Explicitly avoided, and why

| Approach | Why avoided |
|---|---|
| **Sticky header** | Requires sticky positioning, creates layout-shift and zoom problems, consumes reading space permanently. Rejected in `NAVIGATION_GEOMETRY.md` |
| **Scroll-direction-aware header** | Scroll listener; jank; complexity for a minor convenience |
| **Side apparatus with reflow** | Would need a breakpoint transformation, possibly a resize observer. Eliminated by Model C′ |
| **True margin notes** | Typically require measurement or absolute positioning to align with paragraphs. Also prohibited |
| **Client-side measurement** | Nothing in the layout depends on measured dimensions |
| **Scroll-driven layout** | Rejected in Phase 4 |
| **Canvas / WebGL** | Rejected |
| **Container queries** | Not needed — one column, no context-dependent components |
| **CSS Grid for page layout** | A single column does not need it. May be used *within* the apparatus block for label/value alignment |
| **Masonry / JS grid** | No grid content |

---

## Layout stability (CLS)

Sources of shift, and their handling:

| Source | Handling |
|---|---|
| Images | Explicit dimensions required. Near-zero images anyway |
| Web fonts | **The main risk.** Font-loading strategy is a 5C decision; the layout must tolerate a fallback swap without reflowing structure |
| Late-loading content | None — static generation |
| Filters | Appear at volume; must reserve no space when absent, and must not shift the list on activation |

**The font-swap risk is the significant one.** Because the measure is in `ch`, a fallback font with different metrics changes the column width. **5C must specify metric-compatible fallbacks** — recorded in the handoff.

---

## Rendering cost

- No shadows, no gradients, no filters, no blend modes, no transforms.
- Two containers site-wide (code, figures).
- One or two hairlines.

**Paint cost is close to the floor for a styled document.**

---

## Bandwidth

At launch: HTML, one stylesheet, up to three font families. **No images, no scripts.**

**Fonts are the entire payload budget**, which is a 5C concern and another reason three families is the ceiling.

---

## The trade being made

This layout is **deliberately unambitious technically** so that it can be **ambitious typographically**. Every complexity avoided here is budget preserved for type quality — which, per research, is where the identity actually lives.

**A site that loads instantly and reads beautifully is a stronger outcome than one that does something clever on scroll.**
