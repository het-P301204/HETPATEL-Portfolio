# Navigation Geometry

**Date:** 2026-08-14 (Phase 5B)

---

## Structure

```
Het Patel        Investigations   Notes   About
[home link]
```

Four destinations. The name is the home link — no separate "Home" item.

---

## Placement

| Property | Decision | Reason |
|---|---|---|
| Position | **Top of page, above content** | Conventional and correct. Novelty here costs usability for every audience and buys recognition from none |
| Alignment | Name left; links left or right | Both acceptable. 5C decides on typographic balance |
| Width | Aligned to the **content region**, not the reading measure | The header spans slightly wider than prose, which keeps it reading as page furniture |
| **Sticky** | **No** | See below |
| Height | Minimal — one line at all viewports | Reading space is scarce, especially on mobile |
| Separator | Optional single rule beneath | Only if the header would otherwise float ambiguously into content |

---

## Not sticky

**A sticky header consumes vertical space permanently** on a site whose primary activity is reading long-form prose. On a phone that is a meaningful fraction of the viewport, on every page, forever.

The navigation is four links. A reader who wants them scrolls up. The cost of scrolling up occasionally is lower than the cost of losing reading space always.

**Also avoided:** scroll-direction-aware headers (require scroll listeners — flagged in `PERFORMANCE_LAYOUT.md`), and the layout-shift problems sticky positioning introduces at zoom.

---

## Current-section indication

A persistent, **non-colour** affordance — weight, underline, or a marker.

Required by `../design-system/ACCESSIBILITY_FOUNDATION.md`: colour alone may not carry meaning. Also survives greyscale, high-contrast and reader modes.

---

## Mobile

**Four links fit at 375px.** No hamburger, no drawer, no overlay.

If they do not fit at the 5C type size, the correct responses in order are: reduce the navigation type size, then wrap to a second line, then shorten labels ("Investigations" → "Work" is **not** acceptable — the vocabulary is deliberate). **A menu is the last resort, not the first.**

Verified in 5D at 320px and 375px.

---

## Back navigation from an investigation

A small `← Investigations` link **above the title**, in addition to the header.

**Reason:** journeys 3 and 4 arrive by deep link without having seen the index. The header link works, but an in-context back link at the point of arrival is clearer.

Not a breadcrumb — the site is two levels deep, and a breadcrumb would be scaffolding for a hierarchy that barely exists.

---

## Notes navigation

Notes render inline in their index, so there is usually no "back" to provide. A note's date is its permalink.

Where a long note has its own page, it carries the same `← Notes` treatment.

---

## Footer

Minimal: contact, GitHub, optional colophon link. One rule permitted above it — the site's only guaranteed rule.

**No footer navigation duplicate**, no sitemap, no social wall. Four links do not need repeating.

---

## What is absent

Search in the header (until 50+ items, and then it belongs in the index) · a theme toggle · a language switcher · a CTA button · breadcrumbs · a logo mark · a mega-menu · social icons.
