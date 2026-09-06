# UX Strategy — Phase 3 Master Document

**Date:** 2026-08-14 · **Status:** Phase 3 complete. No visual design decisions made.
**Supersedes** `EXPERIENCE_ARCHITECTURE.md` (pre-Phase-0 draft, written before CSCRF/IRDAI confirmation and the GitHub audit).

---

## 1. The objective, restated

> A visitor should feel they are **understanding how Het thinks** — not browsing a collection of portfolio projects.

Every decision below is tested against that sentence.

---

## 2. Discovery model (Part 9)

**Dimensions available:** type · domain · status · time · topic · technique · origin · current/future.

**Dimensions used: three.**

| Dimension | Used | Why |
|---|---|---|
| **Type** | ✅ | Investigations and notes are genuinely different reading experiences |
| **Domain** | ✅ from ~10 items | Shows range; maps to how practitioners think |
| **Status** | ✅ from ~10 items | Carries the honesty model — `unresolved` is information |
| Origin | ◐ metadata only | Visible on the item; not a filter. Filtering by "professional" would highlight how few there are |
| Time | ◐ ordering only | Dates visible everywhere; chronology is not a browse axis except for notes |
| Topic / technique | ❌ | Free tags fragment at low volume and duplicate domain |
| Current/future | ❌ | Already expressed by status |

**Principle:** the minimum discovery system that stays useful as content grows. Adding a dimension costs maintenance forever and buys nothing below ~10 items.

**Explicitly avoided:** database-like navigation. No faceted multi-select, no tag clouds, no sort-by dropdowns at launch.

---

## 3. Search and filtering (Part 13)

Each mechanism justified individually.

| Mechanism | Why | Problem solved | Cost | Verdict |
|---|---|---|---|---|
| **Domain filter** | Range becomes visible | Finding relevant work at 10+ items | Small; a filter with 3 options is noise | ✅ **at 10+** |
| **Status filter** | Surfaces open and unresolved work | Return visitors tracking movement | Small | ✅ **at ~15+** |
| **Search** | Titles stop being scannable past ~50 | Retrieval at scale | Index, input, results, empty states, keyboard support | ⚠️ **at 50+ only** |
| Tags | — | Nothing domain doesn't cover | Fragmentation; maintenance | ❌ |
| Sorting | — | Nothing — default order is already correct | Choice paralysis | ❌ |
| Archive page | — | Nothing until volume is large | — | ❌ **at launch**; revisit at 50+ |

**At launch: none of these exist.** Three to eight investigations fit on one screen. **A filter over five items advertises that there are only five.**

---

## 4. Relationships (Part 14)

| Relationship | Improves understanding? | Verdict |
|---|---|---|
| Investigation → artifact | Yes — evidence for a claim | ✅ |
| Investigation → field note | Yes — a detail that deserved its own note | ✅ |
| Field note → investigation *(promotion)* | **Yes, strongly** — a question dated before its answer proves the sequence | ✅ |
| Investigation → related investigation | Yes, when genuinely related | ✅ **manual only** |
| Investigation → professional experience | Yes — `origin` metadata | ✅ as metadata |
| Artifact → artifact | No | ❌ |
| Domain → domain | No | ❌ |

**Manual, not automatic.** Auto-generated "related" links based on shared tags produce false relationships, and a false relationship on a site premised on rigour is worse than no relationship.

**No graph visualisation.** The content has relationships; that is not a reason to draw them. A graph of eight nodes is decoration, and `../research/REJECTED_PATTERNS.md` bans "random network nodes". If a relational view is ever built it needs an overview device and must earn its place — neither is true today.

---

## 5. Content lifecycle (Part 19)

**Five states. Not every investigation passes through all of them.**

| State | Meaning | Typical entry |
|---|---|---|
| **planned** | Scoped, not started. **No conclusions permitted** | From the roadmap or a field note question |
| **open** | Actively being worked on | Direct, or from planned |
| **closed** | Worked through; a conclusion reached | From open — the common path |
| **unresolved** | Investigated; no satisfactory conclusion | From open. **Terminal and legitimate** |
| **archived** | No longer pursued; a stated reason | From any state |

**Common paths:**
```
open → closed                    most investigations
open → unresolved                honest dead ends
planned → open → closed          roadmap-derived work
(note) → planned → open → closed the promotion path
any → archived                   with a stated reason
```

**`unresolved` is the important state**, and nothing in the Phase 1 corpus had an equivalent. It is only credible if genuinely used — a site where everything is `closed` has quietly abandoned the honesty premise.

**No "in review" or "draft" states.** Unpublished work is simply absent. Publishing a draft state advertises incompleteness without providing content.

**Field notes have no lifecycle.** A note is written once. It may be *superseded* — with the original left in place and a forward link, per the visible-corrections discipline.

---

## 6. Performance implications (Part 18)

Flagging UX decisions that could create technical complexity.

| Decision | Benefit | Cost | Verdict |
|---|---|---|---|
| Long-form prose as primary content | Core to the brand | Essentially none — text is cheap | ✅ Zero risk |
| Static generation | Fast, secure, no runtime | Build step | ✅ Strongly indicated |
| Client-side filtering (10–50 items) | Instant response | Small JS; needs no-JS fallback | ✅ Acceptable |
| Search at 50+ | Retrieval | Index generation, bundle size | ⚠️ Defer; reassess at 50 |
| Live GitHub API | Freshness | Runtime dependency, rate limits, failure states | ❌ Build-time only, if ever |
| Graph visualisation | — | Large library, canvas, accessibility burden | ❌ Rejected |
| Scroll-driven reveal | — | Animation system; fails without JS | ❌ Rejected |
| WebGL / 3D | — | Large bundle, battery, accessibility | ❌ Rejected — `canvasCount = 0` on the award-winning site measured in Phase 1 |
| Heavy client state | — | Complexity for a reading site | ❌ Rejected |
| Screenshots on artifacts | Shows something specific | Image weight | ⚠️ Acceptable if optimised and non-decorative |

**Conclusion: this UX implies a fundamentally cheap site.** Prose, metadata, and modest filtering. **Nothing in the architecture requires a framework-heavy build** — a genuine advantage, given that performance is a stated requirement and the site must remain readable with JavaScript disabled.

**No complexity is rejected automatically; each is rejected because its benefit does not clear its cost for a reading-centred site.**

---

## 7. Mobile strategy (Part 16)

Designed for mobile, not collapsed into it.

| Element | Mobile behaviour |
|---|---|
| Navigation | 4 items — **fits without a hamburger.** No menu overlay needed |
| Homepage | Same sequence, same order. The vertical sequence is already mobile-native |
| Investigation index | List. Title, date, domain, status as text |
| Investigation detail | Long-form reading — the best-supported mobile pattern there is |
| Filters | Deferred below the first items rather than pinned |
| Artifacts | Plain links, not cards |
| About | Linear |
| Long investigations | In-page anchors where length warrants |

**What is deferred on mobile:** filter controls, related-investigation lists (moved below content), the roadmap page.
**What is never deferred:** identity, contact, the reasoning, `what I couldn't determine`, status and dates.

**The architecture is mobile-native by construction** — this was a factor in concept selection. Lists and long-form reading are what phones do best.

---

## 8. Attacking the model (Part 21)

| Challenge | Answer |
|---|---|
| "Investigation" immediately understandable? | **Yes** — non-technical readers need no explanation |
| Fits VAPT? | Yes, natively |
| Fits GRC? | Yes |
| Fits CSCRF/IRDAI? | **With the refinement** — the question worked out inside the engagement, not the engagement |
| Fits personal projects? | **Partially** — build-shaped variant required |
| Fits research? | Best fit of all |
| Fits future engineering? | Yes, as `planned` |
| Practitioner, not consultant? | **Yes** — decisive over "engagement" and "case" |
| Works with very little public work? | **Yes** — the strongest property |
| Scales? | Yes; nothing structural changes 3 → 25 |
| Unnecessary complexity? | **No** — 2 content types, 5 states, 3 discovery dimensions, 4 nav items |
| Recruiter understands without explanation? | Yes |

**One unresolved risk:** the label outrunning thin content. Editorial mitigation — small work goes in field notes.

**The model survives.** It is not protected from Phase 2; it was tested here and two genuine weaknesses (assisted professional work, pure builds) were found and solved.

---

## 9. Final summary

**PRIMARY IA** — IA-1, investigation-centric. Reasoning is structurally primary; everything else supports it.

**PRIMARY NAVIGATION** — `Home · Investigations · Notes · About`. No Projects, Skills, Certifications, Services, or Blog.

**CORE CONTENT UNIT** — the **Investigation**, in two shapes: inquiry-shaped and build-shaped. Secondary unit: the **Field Note**.

**INVESTIGATION STRUCTURE** — four required movements, two optional, **no fixed headings**: the question · what I did and why · what I found · **what I couldn't determine** · *(artifacts)* · *(what changed)*. The proposed 8-section template was rejected as producing monotony.

**FIELD NOTE ROLE** — one observation that did not need working out. Exists so small work has an honest home rather than being inflated. Reverse chronological. Can be promoted to an investigation.

**ARTIFACT ROLE** — evidence attached to an investigation, never standalone, always **after** the reasoning. Absent artifacts render nothing.

**GITHUB ROLE** — artifact-level evidence channel. Not navigation, not a section, no activity graph, no live API. Coherent at 0 repositories and at 40 without structural change.

**PROFESSIONAL EXPERIENCE MODEL** — hybrid. Context on About; `origin: professional` metadata on investigations arising from it. The engagement is context; the question worked out inside it is the investigation.

**HOMEPAGE INFORMATION SEQUENCE** — identity → what he actually does → **reasoning demonstrated** → depth available → connection. Positions collapse rather than showing empty states.

**INVESTIGATION DETAIL EXPERIENCE** — linear long-form reading; metadata visible as text; artifacts after reasoning; related items below; readable with CSS and JavaScript disabled.

**DISCOVERY MODEL** — type, domain, status. Nothing at launch; filters appear at ~10 and ~15; search only past 50.

**MOBILE STRATEGY** — mobile-native by construction. Four nav items fit without a hamburger.

**EMPTY-STATE STRATEGY** — sections disappear rather than emptying. Launch minimum: 3 investigations, 2–3 notes. The site should look deliberately small rather than aspirationally large.

**LONG-TERM GROWTH MODEL** — additive only. Filtering at 10, status filter at 15, artifact index at 16, search at 50. **No redesign between 3 and 25 investigations.**

### MAJOR UX RISKS

1. **Investigation volume** — asked three times, still unanswered. Below ~3 the architecture cannot launch as designed.
2. **The label outrunning the content** — a thin piece called "Investigation" reads as inflated.
3. **Template monotony** — if every investigation follows the same shape, the honesty device becomes noise.
4. **Recruiters looking for "Projects"** and not finding the word.
5. **Stale artifacts** — a dead link contradicts the honesty premise more sharply here than elsewhere.
6. **The EMERGING tier staying empty**, which no design solves.

### MITIGATIONS

1. Field notes absorb small work; three-investigation launch threshold; single-page fallback below that.
2. Editorial discipline — length matched to substance.
3. Required variation in shape and length; no fixed headings.
4. About states plainly what has been built; artifacts are filterable at volume.
5. Periodic artifact-state review; keep artifact count modest rather than maximal.
6. Honest dating throughout — an archive that ages visibly beats one that fakes currency.

### CONFIDENCE

**MEDIUM-HIGH.**

Higher than Phase 2, because the two genuine weaknesses in the investigation model were found and solved here rather than assumed away, and because the architecture was tested against six content volumes rather than one.

Not HIGH, for one reason only: **the volume question remains unanswered.** Everything else is settled and evidence-backed. If Het can describe three or more investigations, this architecture is sound. If he can describe one, the site should launch as a single-page statement and grow into this structure later — which the design already permits.
