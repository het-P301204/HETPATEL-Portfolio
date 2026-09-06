# Future Component Inventory

**Date:** 2026-08-14 (Phase 5A) · Conceptual categories only. **No appearance prescribed.**

**Note on the word "component":** this site is a set of documents, not an interface. These are *recurring content structures*, not UI widgets. The distinction matters — treating them as widgets is how a document becomes a dashboard.

---

## Inventory

| # | Structure | Purpose | Phase | Notes |
|---|---|---|---|---|
| 1 | **Site header / identity** | Name, four navigation links | 5B | Text only. No logo, no menu |
| 2 | **Investigation title** | The L1 element | 5C | One per page |
| 3 | **Masthead apparatus** | Status, date, domain, origin | **5B + 5C** | **The system's signature.** A definition list. No container |
| 4 | **Prose body** | The reasoning | 5C | The baseline; the most important thing to get right |
| 5 | **Inline inset** | Asides and revisions | 5C | Sans register, inline, no container |
| 6 | **Uncertainty statement** | *What I couldn't determine* | 5D | **Not a component.** Prose in a consistent position. Listed only so nobody builds it as one |
| 7 | **Artifact reference** | Evidence links after reasoning | 5D | Absent renders nothing |
| 8 | **Index row** | One investigation in a list | 5B | Title, framing line, metadata. No card, no thumbnail |
| 9 | **Field note** | Short observation | 5D | Very short notes render inline in the index |
| 10 | **Related work** | Manual links below content | 5D | Plain list |
| 11 | **Status value** | One word in the apparatus | 5C | Not a badge. See `STATUS_SYSTEM.md` |
| 12 | **Code block** | Literal code | 5C | One of only two containers |
| 13 | **Figure** | Diagram with caption | 5C | The other container. May exceed reading measure |
| 14 | **Footer** | Contact, GitHub, colophon link | 5B | Utility. One rule permitted above it |
| 15 | **Filter control** | Domain/status filtering | Deferred | Only at ~10 items. Text controls; no-JS fallback |
| 16 | **Skip link** | Accessibility | 5B | Hidden until focused |

**Sixteen structures, three deferred.** For comparison, a conventional portfolio design system would carry forty or more — the difference is the absence of cards, badges, buttons, tooltips, modals, carousels, tabs and accordions.

---

## Explicitly NOT in the inventory

| Not built | Why |
|---|---|
| Card | Rejected as primary container |
| Badge / chip / pill | Status is a word |
| Button | No actions with consequence |
| Tooltip | Hidden content; if a label needs explaining, fix the label |
| Modal / lightbox | Breaks linking and back-button |
| Accordion / tabs | Hides content; forbidden for meaning |
| Carousel | Hides content behind interaction |
| Hero section | Delays content |
| Stat block / counter | Banned metrics |
| Skill display | Banned |
| Timeline graphic | A dated list is more precise |
| Icon set | Nothing for it to serve |
| Breadcrumb | Two levels deep; unnecessary |
| Pagination | Unnecessary below ~50 items |
| Theme toggle | OS preference only |
| Newsletter form | Promises unverified cadence |
| Contact form | Adds abuse surface; a mailto link suffices |

---

## What 5B–5G need from this foundation

**5B — Layout & Spatial System** needs: the space scale (with `space-paragraph` < `space-movement` as a named requirement), reading measure, index density, header and footer structure, and the masthead's block layout.

**5C — Typography & Colour** needs: three families satisfying the coherence requirements in `TYPE_CONTRAST.md`; five type levels; eight colour roles across two schemes; verification of gate 6 (greyscale register distinction).

**5D — Investigation Prototype** needs: everything above, plus a real investigation to test the uncertainty position, apparatus density with genuine content, and whether artifacts are findable without a rule.

**5E — Homepage Prototype** needs: the featured-investigation treatment and the index preview, tested at one and at several investigations.

**5F — Interaction & Motion** needs: focus states, link affordances, filter behaviour, and the two or three permitted state-change transitions.

**5G — Adversarial Review** needs: all eight accessibility gates, the greyscale test, the blur test, and the genericity stress test re-run against real rendered pages.

---

## The three decisions 5D must settle

Carried forward as open, so they are not settled by default:

1. **Does the uncertainty statement need a heading?** Escape hatch in `UNCERTAINTY_SYSTEM.md`. Requires evidence from a real prototype, not a hunch.
2. **Do artifacts need a rule above them?** `CONTAINER_PHILOSOPHY.md` says no at launch; revisit with a long investigation rendered.
3. **Is the L3 → L4 register step sufficient at mobile widths?** `TYPE_CONTRAST.md` predicts family contrast will carry it. Must be verified, not assumed.
