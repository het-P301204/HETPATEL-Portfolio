# Navigation Models

**Date:** 2026-08-14 (Phase 3) · Structure only. **No visual design.**

---

## Model A — Investigation-first

**Structure:** `Investigations` (default landing) · `Notes` · `About`
**Entry point:** the investigation index *is* the homepage. No separate marketing page.
**Discovery:** chronological with domain filtering above ~10 items.
**Depth:** index → investigation → artifact.

| | |
|---|---|
| **Scalability** | Excellent — the index absorbs any volume |
| **Mobile** | Excellent — a list is phone-native |
| **Recruiter usability** | **Poor.** Lands on content with no orientation. Must infer who Het is from the work |
| **Technical visitor** | Excellent — straight to substance |
| **Complexity** | Lowest of the three |
| **Genericity risk** | Low |

**Fatal flaw:** it fails Journey 1. A recruiter landing on a list of investigation titles cannot categorise Het in 10 seconds. This is the "Index" failure identified in Phase 1 — austerity reads as confident from a known name and unfinished from an unknown one.

---

## Model B — Work / Notes / About

**Structure:** `Home` · `Investigations` · `Notes` · `About`
**Entry point:** a purpose-built homepage that orients, then demonstrates.
**Discovery:** homepage features one investigation; index lists the rest; filtering appears with volume.
**Depth:** home → index → investigation → artifact.

| | |
|---|---|
| **Scalability** | Excellent — proven from 3 to 25 without structural change |
| **Mobile** | Excellent |
| **Recruiter usability** | **Strong** — homepage answers identity before anything else |
| **Technical visitor** | Strong — one click to the index, or direct deep links |
| **Complexity** | Low. Four items, two content types |
| **Genericity risk** | **Moderate** — the shape resembles a conventional site |

**The genericity concern examined:** four nav items is conventional. But the brief's prohibition is on the *generic structure* — Home / About / **Projects** / **Skills** / **Certifications** / Contact. This is not that. It has no Projects, no Skills, no Certifications, and its primary content type is an investigation. **Conventional shape carrying unconventional content is not genericity; it is restraint.**

---

## Model C — Contextual / progressive discovery

**Structure:** minimal persistent navigation; paths revealed contextually as the visitor reads.
**Entry point:** a single narrative homepage that unfolds.
**Discovery:** related items surfaced at the point of interest rather than through an index.
**Depth:** continuous rather than hierarchical.

| | |
|---|---|
| **Scalability** | **Poor** — contextual discovery degrades badly past ~15 items; some content becomes unreachable |
| **Mobile** | Moderate |
| **Recruiter usability** | **Poor** — no predictable path to facts |
| **Technical visitor** | Moderate — cannot browse systematically |
| **Complexity** | **Highest** — requires a relationship graph and careful surfacing logic |
| **Genericity risk** | Lowest |

**Fatal flaws:** two. Content becomes unreachable at scale without an index — so an index is needed anyway, which collapses it toward Model B with extra machinery. And it fails Journey 1 outright.

**Also:** it is the model most likely to be rescued by animation, which is explicitly forbidden.

---

## Model D — Domain-first *(considered, rejected)*

`Application Security` · `Network` · `Governance` · `Notes` · `About`

Attractive because it mirrors the roadmap's 12 tracks and would show range at a glance.

**Rejected on evidence:** with fewer than ~15 investigations, domain-led navigation **advertises sparseness** — a "Cloud Security" section containing one item is worse than no section. It also fixes navigation to a taxonomy Het's direction may change, and it forces every investigation into exactly one domain when several span two.

**Revisit at 25+ investigations**, where domains could become destinations rather than filters.

---

## Comparison

| | A | **B** | C | D |
|---|---|---|---|---|
| Recruiter (J1) | 3 | **9** | 3 | 6 |
| Hiring manager (J2) | 8 | **9** | 6 | 7 |
| Peer (J3) | 9 | **8** | 6 | 8 |
| GRC (J4) | 6 | **9** | 5 | 8 |
| Return visitor (J5) | 8 | **8** | 5 | 6 |
| Scalability | 9 | **9** | 3 | 5 |
| Mobile | 10 | **9** | 6 | 7 |
| Low-volume resilience | 7 | **9** | 5 | 3 |
| Complexity (lower better) | 9 | **8** | 3 | 6 |
| Genericity resistance | 8 | **6** | 9 | 7 |
| **Total** | 77 | **84** | 51 | 63 |

---

## Selected: MODEL B

**Structure:** `Home` · `Investigations` · `Notes` · `About`

**Why:** the only model that serves all five journeys without failing any. Model A and Model C both fail the recruiter journey, and the recruiter is the gatekeeper to the two primary audiences — failing them costs access to everyone else.

**On its one weakness — genericity of shape:** accepted deliberately. Phase 1's revised finding is that the current saturation threat is *corporate sameness with no authorial presence*, not conventional navigation. The differentiation lives in the content unit, the required uncertainty, and the voice. **Spending distinctiveness on the navigation bar is the wrong place to spend it** — it costs usability for every audience and buys recognition from none.

**Additions as volume grows:** filtering inside the index (10+), search (50+), possible domain entry (25+). All additive. **No structural change between 3 and 25 investigations.**

---

## Naming

| Item | Label | Note |
|---|---|---|
| 1 | *(name only)* | Home is the name, not a "Home" link |
| 2 | **Investigations** | Per `CORE_CONTENT_UNIT_ANALYSIS.md` |
| 3 | **Notes** | Shorter than "Field notes" in nav; full term on the page |
| 4 | **About** | Plain. Carries education, certifications, contact, GitHub |

**Not in navigation:** Projects · Skills · Certifications · Services · Blog · Contact *(lives in About and the footer)* · Roadmap *(reached from About)*.

**Roadmap placement is deliberate.** It is the most impressive-looking and least substantiated asset — 219 concepts against zero built repositories. Reachable, never promoted.
