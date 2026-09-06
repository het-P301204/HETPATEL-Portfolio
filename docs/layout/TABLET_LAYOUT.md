# Tablet Layout

**Date:** 2026-08-14 (Phase 5B) · Treated as its own condition, not a scaled desktop.

---

## The tablet question

At 768–1024px there is enough width for a side region. **Should the apparatus become columnar here?**

**No.** Three reasons:

1. **It would create a third layout** — inline on mobile, side on tablet, side on desktop — meaning two transformation points to design, test and maintain, for a viewport class that is a minority of traffic.
2. **The empty-gutter risk returns.** At launch the apparatus is four fields; a side column holding four fields is 90% empty at any width.
3. **It would break the guarantee** that document order equals visual order at every viewport — the property that makes the accessibility story simple.

**The apparatus stays distributed at every width.** Model C′ has one layout.

---

## What tablet actually gets

| Property | Behaviour |
|---|---|
| Reading measure | Reaches 62–68ch — the first viewport where the intended measure is achievable |
| Outer margins | 2.5rem (40px), acceptable 32–56px |
| Apparatus pairs | Fit on one or two rows rather than three |
| Index rows | Title and metadata may share a line |
| Navigation | Four links, comfortable |
| Type scale | Between mobile and desktop |

**Tablet is where the design first looks the way it is meant to look.** Mobile floors the measure; desktop caps it; tablet sits in the intended band.

---

## Portrait vs landscape

- **Portrait (768×1024):** behaves as a wide phone. Measure near 62–65ch.
- **Landscape (1024×768):** behaves as a small desktop. Measure caps at 68ch; margins grow.

**Handled by width alone.** No orientation-specific rules — orientation queries add complexity for a distinction width already expresses.

---

## Breakpoints

Two, both content-driven rather than device-driven:

| Breakpoint | Trigger | What changes |
|---|---|---|
| **~600px** | Apparatus pairs stop fitting on one row | Pairs wrap; index metadata moves to its own line |
| **~1024px** | Reading measure reaches 68ch | Measure fixes; margins begin to grow |

**Two breakpoints for the whole site.** Anything more suggests the layout is doing more than it should.

---

## Touch on tablet

Tablet is a touch context at desktop-like widths — the case most often missed.

- **No hover-dependent information** at any width, not merely below a breakpoint.
- Touch targets sized adequately even where the viewport is wide.
- Filters usable by touch.

**This is why hover is excluded as an information channel globally** rather than only on small screens.
