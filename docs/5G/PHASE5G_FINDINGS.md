# Phase 5G — Findings

**Date:** 2026-08-15

---

> **SUPERSEDED 2026-08-15 — validation has since been performed.** Browser tooling was restored in a
> later session and the full matrix was rendered and measured. See
> [`PHASE5G_VALIDATION.md`](PHASE5G_VALIDATION.md). The document below is retained as the record of
> the tooling failure and of the decisions (G-1 to G-4) that were taken without rendering; its
> "unvalidated" lists are now closed except where the validation document records an open failure.

---

## Headline — read this first

**Phase 5G is INCOMPLETE. Tooling failed part-way through and visual validation was not performed.**

Design work was done, Notes and About were built, and a site-wide coherence pass was applied to
every page. **None of it was rendered.** Per the 5G brief's own instruction — *"If browser tooling
is unavailable: STOP visual validation. Document exactly what remains unvalidated"* — visual
validation stopped at the point of failure rather than being substituted with source inspection.

This document records what was done, what was not, and what a resumed session must do first.

---

## Validation continuation attempt — 2026-08-15, second session

**Attempted. Failed. Nothing was validated.**

Tooling was re-tested at the start of the continuation session, as the brief requires:

| Capability | Result |
|---|---|
| Shell / `node` | ✅ **Restored** — self-contained fixtures could be built again |
| `Read` / `Write` / `Edit` / `Grep` | ✅ Working |
| `tabs_context` | ✅ Working |
| `computer{screenshot}` on **pre-existing** tabs | ✅ Working |
| **`preview_start`** — loading any URL | ❌ **Blocked** |
| **`javascript_tool`** — all measurement | ❌ **Blocked** |
| Opening newly written files in the pane | ❌ **Does not work.** The file hook reports "now visible in the Browser pane" but **creates no tab** |

**What this combination allows, and why it is not validation.** Screenshots are possible, but only
of tabs opened *before* the block, and those render as `data:` snapshots in which the relative
`style.css` does not resolve. Every available screenshot is therefore **unstyled** — default serif,
blue links, no warm ground, no spacing system.

An unstyled render answers none of 5G's questions. Typography, spacing, colour, hierarchy, footer
weight, mobile composition and whether Notes reads as a feed are *all* properties of the stylesheet.

**Three routes to a styled render were attempted and all failed:**

1. Rebuild self-contained fixtures with `node` (CSS inlined) into `prototype/_v/`, then trigger the
   file hook with an `Edit` — **hook fired, no tab appeared.**
2. `Write` a new self-contained file so the hook would create a tab as it did earlier in the session
   — **no tab appeared.**
3. A 1 KB inline-style probe to test the path cheaply — **no tab appeared.**

`javascript_tool` being blocked independently removes every quantitative check regardless: no
character counts, no contrast computation, no tap-target rectangles, no page heights, no overflow
detection.

**Per the brief — *"If browser tooling is unavailable: STOP immediately"* — validation stopped
here.** Scratch artefacts (`prototype/_v/`, `prototype/_probe.html`) were removed.

**Two content corrections WERE applied**, because they were explicit instructions rather than
validation: see `ABOUT_CONTENT_MODEL.md`. Both are one-line text changes and neither was rendered.

---

## Tooling status (first session)

| Capability | Status at start of 5G | Status at failure |
|---|---|---|
| Rendering pages in a browser | ✅ Working | ❌ **Blocked** |
| Screenshots | ✅ Working | ❌ **Blocked** |
| DOM / computed-style measurement | ✅ Working | ❌ **Blocked** |
| Running `node` to build test fixtures | ✅ Working | ❌ **Blocked** |
| Reading and editing files | ✅ Working | ✅ Working |

A safety classifier began blocking shell execution and browser access mid-phase, and its message
states the block persists for the remainder of the session and is a reaction to conversation
length/content rather than to any specific action.

**Consequence:** the validation pipeline used successfully in 5D, 5E and 5F — inline the stylesheet
into a self-contained fixture, wrap it in an `<iframe srcdoc>` at an exact pixel width, render,
screenshot, measure — could not be run.

---

## What WAS completed

### Built and shipped into the prototype

| Artefact | File | State |
|---|---|---|
| **About page** | `prototype/about.html` | Complete, unrendered |
| **Notes index** | `prototype/notes.html` | Complete, unrendered — six hypothetical notes, inline rendering, two supersession examples |
| **Notes CSS** | `style.css` | `.notes`, `.nt-date`, `.nt-super` |
| **About facts list** | `style.css` | `.facts` — compact reference block for education and certifications |
| **Global footer** | `style.css` + all 7 pages | `.foot-id`, `.foot-nav`, `.foot-contact` |
| **Launch-state navigation** | all 7 pages | Notes removed from nav |

### Decisions taken (design reasoning, not visual validation)

- **G-1 — Notes leaves the launch navigation.** See below. This is the most consequential finding of the phase and it required no rendering.
- **G-2 — the global footer is three lines that each earn their place**, replacing a single contact line.
- **G-3 — About allocates space inversely to convention**, per 5B, with credentials compact and low.
- **G-4 — Notes carry a date and nothing else.** No status, no origin, no apparatus block, no revision register.

---

## G-1 — Notes was advertising a content type that does not exist

**The one finding that did not need a browser.**

`NOTES_LAYOUT.md` (5B) already states the rule plainly:

> | Notes | Behaviour |
> |---|---|
> | **0** | **No notes section anywhere** |

**Every prototype built in 5D, 5E and 5F carried `Notes` in the primary navigation, pointing at
`#`.** At launch Het has zero notes. The navigation was therefore promising a section that would
either 404 or render empty — the exact failure `EMPTY_STATE_AND_GROWTH.md` §3 forbids:

> An empty "Field Notes" heading saying "coming soon" is worse than no heading. It advertises a
> gap, promises a cadence, and dates badly.

| | |
|---|---|
| **PREVIOUS** | Primary nav on every page: `Het Patel · Investigations · Notes · About` |
| **WHY IT FAILED** | Zero notes exist. The item advertised an empty category and contradicted 5B's own stated rule. It survived three phases because each phase copied the nav from the last without re-checking it against the launch content state |
| **5G EVIDENCE** | Source inspection — no rendering required, and none claimed |
| **NEW** | **Launch navigation is `Het Patel · Investigations · About`.** Notes appears when the first note exists. `notes.html` is built and shows that later state, banner-marked as not-at-launch |
| **CONFIDENCE** | **HIGH** — this follows directly from an existing decision that was being violated |

**The wider lesson, and it is uncomfortable:** the navigation was wrong for three consecutive
phases and no test caught it, because every test rendered a *page* and none checked the *site
against its own content inventory*. A validated page can sit inside an invalid site.

---

## What was NOT validated — the honest list

**Everything visual.** No page below was rendered in 5G.

| Unvalidated | Why it matters |
|---|---|
| **About page, at any viewport** | Its measure, rhythm, length and whether the `.facts` block reads as reference material or as a résumé table are all unknown. `ABOUT_LAYOUT.md` warns that above three screens it has become a résumé dump — **the page length was never measured** |
| **Notes index, at any viewport** | The OPEN gap between notes is a hypothesis. Whether six inline notes read as a record or as a blog feed is **the central question of the Notes design and it is unanswered** |
| **Supersession lines** | Whether a dated correction beneath a note reads as honesty or as clutter |
| **Global footer** | Three lines and a nav row is more than the site has ever carried. Whether it reads as identity or as a generic footer strip is unknown |
| **Cross-page coherence** | The whole point of the phase. Never tested |
| **`.facts` contrast and tap targets** | New CSS, never measured. Previous phases found real defects here every single time |
| **Responsive behaviour** | Not one of the nine viewports was rendered |
| **Genericity test** | Not run. No Alex Sharma variant was built for Notes or About |
| **Hiring tests** | Not run |
| **Portfolio-vs-publication test on Notes** | **The highest-risk test in the phase.** Notes is the surface most likely to read as a blog, and it was not tested |
| **Accessibility** | New elements (`.facts`, `.foot-nav`, `.nt-date`) never measured for contrast, heading order or target size |
| **Performance** | Not measured |

**No claim of visual validation is made anywhere in 5G documentation.** This is the 5D discipline
applied again: the phase that could not look does not get to say what it saw.

---

## Specific risks introduced and left unchecked

These are changes made in 5G that previous phases would have caught with a render, and did not:

1. **`.foot-nav` link targets.** Every previous phase found tap targets under the 24px minimum in
   newly added link groups — 5E found the primary navigation at 18px. `.foot-nav` has `.35em`
   padding applied by analogy, **not by measurement.**
2. **`.facts` two-column grid at 320px.** The `dt` column is `max-content`; the longest label is
   "Certifications". Whether it forces a wrap or an overflow at the narrowest viewport is **not
   known.** 5D found exactly this class of defect in the apparatus grid.
3. **Footer height.** Three lines plus a nav row on every page, including the 150-word short
   investigation, where 5D already found dead space at the page end to be the most damaging defect.
4. **About page length.** Seven sections. `ABOUT_LAYOUT.md` caps it at three screens.
5. **Notes at OPEN spacing.** Six notes × OPEN gaps may read as six separate pages of nothing.

---

## What a resumed session must do first

**In this order. Do not write more documentation before rendering.**

1. **Confirm browser tooling works.** If it does not, stop again.
2. **Render `about.html` and `notes.html`** at 375 and 1280. Measure page height, measure `.facts`
   at 320, measure every new link's hit rectangle, measure contrast on `.facts` and `.foot-nav`.
3. **Run the portfolio-vs-publication test on Notes.** It is the highest-risk surface on the site
   and the instrument already exists (`WORK_INDEX_PORTFOLIO_TEST.md` §"The list instrument").
4. **Render the footer on the short investigation page** — the worst case.
5. **Then** run cross-page coherence, genericity, hiring and responsive validation.
6. **Only then** write the remaining 5G documents.

---

## Deliverables — produced and deferred

The nineteen documents split cleanly by whether they depend on rendering.

**Produced (14).** These are design reasoning, and design reasoning is written *before* the
prototype in every prior phase — 5E and 5F both wrote their objective, research, concepts,
comparison, selected-direction and content-model documents before a line of code:

`5G_OBJECTIVE.md` · `5G_RESEARCH.md` · `NOTES_CONCEPTS.md` · `NOTES_SELECTED_DIRECTION.md` ·
`NOTES_CONTENT_MODEL.md` · `ABOUT_CONCEPTS.md` · `ABOUT_SELECTED_DIRECTION.md` ·
`ABOUT_CONTENT_MODEL.md` · `CROSS_PAGE_FLOW.md` · `FOOTER_SYSTEM.md` · `RETURN_VISIT_MODEL.md` ·
`GROWTH_MODEL.md` · `PHASE5G_SPEC.md` · `PHASE5G_FINDINGS.md`

**Deferred (5).** Each is a *test record*, and there is nothing to record:

`GENERICITY_TEST.md` · `HIRING_TEST.md` · `RESPONSIVE_VALIDATION.md` · `ACCESSIBILITY.md` ·
`PERFORMANCE.md`

**Writing these five would be fabrication.** The 2026-08-14 round of 5D produced a full document
set for a prototype it had never seen and concluded *"its central deliverable is unfulfilled."*
A test document with no test in it is worse than an absent one, because it looks like evidence.

---

## Confidence

**HIGH on G-1** — the navigation fix follows from an existing decision that was being violated, and
required no rendering to establish.

**LOW on everything else.** Notes and About are built, coherent with the design system by
construction, and **entirely unvalidated.** They are a starting point for a validation session, not
a validated result.

**Phase 5G should be re-run.** The prototypes are ready; the test matrix is written; the work is a
few hours of rendering and measuring in a session with working tooling.
