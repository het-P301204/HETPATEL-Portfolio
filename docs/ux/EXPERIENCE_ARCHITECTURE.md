# Experience Architecture — SUPERSEDED

> ## ⚠️ This document is obsolete. See [`UX_STRATEGY.md`](UX_STRATEGY.md).
>
> Written before CSCRF/IRDAI was confirmed, before the GitHub audit, and while "The Register" was the recommended concept. **The Register was subsequently rejected** — its evidence half proved occupied by a peer, and it scored 4/10 on corporate-drift resistance.
>
> Retained unedited as a record of the reasoning at that point. Do not build from it.
>
> **Current Phase 3 documents:** `UX_STRATEGY.md` · `INFORMATION_ARCHITECTURE.md` · `CONTENT_MODEL.md` · `CORE_CONTENT_UNIT_ANALYSIS.md` · `INVESTIGATION_MODEL.md` · `CONFIDENTIAL_WORK_MODEL.md` · `FIELD_NOTES_MODEL.md` · `ARTIFACT_MODEL.md` · `GITHUB_RELATIONSHIP.md` · `HOMEPAGE_INFORMATION_ARCHITECTURE.md` · `USER_JOURNEYS.md` · `EMPTY_STATE_AND_GROWTH.md` · `NAVIGATION_MODELS.md` · `ACCESSIBILITY_REQUIREMENTS.md`

**Date:** 2026-08-14
**Status:** SUPERSEDED. Historical record only.

---

## 1. Information architecture

Two primary axes, from the strongest structural finding in research (Kettle's domain clustering × Appleton's epistemic typing):

**Axis 1 — Security domain.** Only domains Het has genuinely entered. Empty roadmap tracks are not shown as navigation; they live in the roadmap view, clearly marked as intent.

**Axis 2 — State.** Every item carries exactly one, always visible, never inferred:

| State | Meaning | Evidence required |
|---|---|---|
| **Deployed** | Implemented and working | Repository, artefact or demonstrable output |
| **In development** | Actively being built now | Repository with recent commits |
| **Under investigation** | Being researched; conclusions not settled | Notes, references, open questions |
| **Scoped** | Intended, defined, not started | A written scope only |

*(Vocabulary is Option A from `BRAND_STRATEGY.md` §4 — Het's choice, pending.)*

**Axis 3 — Chronology.** Secondary view only. Research showed reverse-chronology buries the best work over time (the problem Kettle's clustering solves).

---

## 2. Content types

All types are register entries and share the same fields (scope / approach / evidence / status / limitations). They differ in emphasis, not structure.

| Type | Purpose | Confidentiality |
|---|---|---|
| **Professional case study** | Anonymised regulated work — VAPT, CSCRF, IRDAI, ISO 27001 | **Strictly anonymised.** Shape only, never contents. Requires Het's explicit sign-off. |
| **Project** | Built or in-development repositories | Public |
| **Investigation** | Research in progress, conclusions unsettled | Public |
| **Field note** | Shorter observations and working notes | Public |
| **Roadmap entry** | Scoped future work from the 12 tracks | Public, always marked *Scoped* |

**The confidentiality rule, stated once and applied everywhere:** a professional case study may describe *objective, scope boundaries, role, approach, security domain, deliverable type, and lessons*. It may never contain client identifiers, sector detail specific enough to identify, findings, vulnerability counts, severity distributions, remediation metrics, internal system or architecture detail, dates precise enough to correlate, or document excerpts. Where evidence exists but cannot be shown, the register records exactly that — and the discretion becomes a professional signal.

---

## 3. Primary surfaces

1. **Entry** — who Het is, the two registers he works in, and a way in. Legible in under five seconds to a non-technical reader.
2. **The Register** — the full body of work, filterable by domain and state. The site's spine.
3. **Entry detail** — a full editorial page per item.
4. **Domain view** — everything within one security domain.
5. **Field Notes** — writing, in reverse chronology (the one place chronology is correct).
6. **Roadmap** — the 12 tracks and the spine projects, unambiguously marked as intent.
7. **Now** — current focus. Dated. The cheapest honest return-visit mechanic.
8. **About / Contact** — background, credentials as compact metadata, contact.
9. **Colophon** — how the site was built, threat-modelled and hardened. Per brief §45, the site as its own small piece of evidence.

---

## 4. Visitor journey

Per brief §30.

**First 5 seconds.** Name, discipline, and the dual register — testing and regulated assurance. No puzzle, no animation gate, no scroll required. A recruiter who reads only this must be able to categorise him correctly.

**First 30 seconds.** The register is visible and its logic is obvious: real work, grouped by domain, each item labelled with its state. The visitor understands *what kind of engineer this is* and notices that nothing is being oversold.

**First 2 minutes.** They open one entry. They find scope, approach, evidence — and a limitations section stating what the work does not address. This is the moment the site distinguishes itself: portfolios do not usually admit boundaries.

**First 5 minutes.** They reach a flagship entry with an interactive explanation of a relational security concept, or an anonymised case study showing how regulated assurance work is actually structured. They now understand *how Het thinks*, not merely what he has used.

**Return visit.** *Now* has changed. Items have moved state — Scoped → In development → Deployed. New field notes exist. State transitions are the return mechanic: progress is visible without requiring a new publication every week.

---

## 5. Why people return

Ranked by sustainability at Het's realistic capacity:

1. **State transitions.** Work visibly moving through the register. Costs nothing extra — it is a by-product of doing the work.
2. **Now, dated.** One paragraph, updated periodically.
3. **Field notes.** Cadence over volume (the tl;dr sec principle).
4. **Investigations updating in place.** The Pudding's "Updating" state — an entry can change without becoming a new post.
5. **Flagship explanatory pieces.** Rare, high-effort, high-value.

**Deliberately excluded:** a live GitHub activity feed as a primary device. Commit counts are not accomplishments, and an idle feed broadcasts idleness. Real repository metadata may support *Deployed* claims, but activity is not itself the content.

---

## 6. Scalability

The architecture must survive growth without redesign:

- **3 → 40 entries:** filtering absorbs it; no structural change.
- **0 → 200 field notes:** chronology plus domain tags absorbs it.
- **New domain entered:** a new value on an existing axis, not a new page type.
- **Roadmap grows:** roadmap entries are register entries in the *Scoped* state.

Content must be structured and typed (per brief §42), never hardcoded into page layouts.

---

## 7. Accessibility and degradation

Non-negotiable, per brief §49–50:

- Full comprehension without motion (`prefers-reduced-motion` fully honoured).
- Full comprehension without JavaScript-dependent navigation.
- Mobile is designed, not shrunk. The register is a list — it is mobile-native by construction, which was a significant factor in choosing this concept over Attack Surface.
- Semantic HTML; keyboard navigable; visible focus states.
- No information conveyed by colour alone — **state labels must be readable as text**, never as a colour dot only.

---

## 8. Open dependencies

This architecture cannot be finalised until Het confirms the positioning, provides the source materials, states which repositories are genuinely built, and selects the state vocabulary. All tracked in `USER_INPUT_REQUIRED.md`.
