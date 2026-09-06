# Phase 5G — Objective

**Date:** 2026-08-15 · **Status: design complete, VISUAL VALIDATION NOT PERFORMED.**
See [`PHASE5G_FINDINGS.md`](PHASE5G_FINDINGS.md).

---

## 1. What 5G is for

Phases 5D–5F built the three surfaces that carry the work: the investigation, the homepage, the
index. 5G completes the information architecture with the two that carry the *person* — **Notes**
and **About** — and then asks whether the whole thing is **one site or five separately designed
pages.**

---

## 2. The two questions

**Notes:** how does short-form thinking get an honest home *without becoming a blog*?

`FIELD_NOTES_MODEL.md` already answers why the type exists, and it is the best argument in the
project:

> Without them, Het faces a choice between inflating a small observation into an "investigation" or
> not publishing it. Both are bad.

**About:** how does a page answer *who is this* **without becoming a résumé**, when the person is
early-career and the credentials are ordinary?

---

## 3. Constraints inherited, not revisited

| Constraint | Source |
|---|---|
| A note is **one observation that did not need working out**. The distinction from an investigation is not length | `FIELD_NOTES_MODEL.md` §1 |
| Notes render **inline in their index**. The index *is* the content | `NOTES_LAYOUT.md` |
| Notes have **no status and no origin** — one would be meaningless, the other constant | `NOTES_LAYOUT.md` |
| Reverse chronological is **correct for notes** — the one place on the site where it is | `FIELD_NOTES_MODEL.md` §6 |
| A note that turns out wrong is **superseded, not deleted** | `NOTES_LAYOUT.md` |
| **At 0 notes there is no notes section anywhere** | `NOTES_LAYOUT.md` |
| About allocates space **inversely to convention** — identity and what-he-works-on take two-thirds | `ABOUT_LAYOUT.md` |
| Certifications: a plain list, no logos, no badges, no grid, no count as a headline | `ABOUT_LAYOUT.md` |
| About above three screens **has become a résumé dump** | `ABOUT_LAYOUT.md` |
| No contact form, no availability banner, no CTA block | `ABOUT_LAYOUT.md` |
| Navigation stays `Investigations · Notes · About`; nothing added | `NAVIGATION_MODELS.md` |
| Role precision — *participated in*, *assisted with*. Never *led*, *owned* | P5EV-009 |
| T9 — portfolio before publication | `PROJECT_CONSTRAINTS.md` |

**5G's job was to build these, not to re-decide them.** Where 5G departs from an inherited
decision it is recorded in `DECISION_LOG.md`, not overwritten.

---

## 4. The failure modes 5G exists to prevent

| Failure | Why it is likely |
|---|---|
| **Notes becomes a blog** | It is dated, reverse-chronological, short-form and frequent. Structurally it *is* a blog unless something stops it |
| **About becomes a résumé** | It is the only page carrying employment, education and certifications. Gravity pulls it there |
| **Contact becomes a freelancer CTA** | Every portfolio template ends this way |
| **The footer becomes a legal strip** | © / Privacy / Terms is the default and it says nothing |
| **The site becomes five templates** | Each surface was designed in its own phase, against its own tests |
| **Zero notes looks broken** | A nav item pointing at an empty page |

**The last one turned out to be real and already present.** See G-1 in the findings.

---

## 5. Success criteria

1. Notes reads as a **record of observations**, not a feed.
2. About reads as a **person**, not a CV.
3. The site reads as **one site** across all five surfaces.
4. Zero notes produces **no visible gap anywhere**.
5. The site becomes richer as work accrues, **without gamification**.
6. Nothing fabricated; hypothetical content marked.

**Criteria 1, 2 and 3 require rendering to assess and were NOT assessed.** Criterion 4 was
established by inspection (G-1) and required no rendering. Criteria 5 and 6 are structural and hold.

---

## 6. Scope

**In:** Notes index · Note supersession · About · global footer · cross-page navigation ·
zero-note state · return-visit model · growth model.

**Out, explicitly:** Next.js · CMS · backend · deployment · analytics · authentication ·
production contact form · redesigning the visual system · Phase 6.
