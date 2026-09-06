# Empty State and Growth

**Date:** 2026-08-14 (Phase 3)

**The governing rule: the site must never require fake content.** Volume is still unknown — the question of how many investigations Het can describe has been asked three times and remains unanswered. This document makes the design independent of that answer.

---

## 1. Growth stages

### 1 investigation

**Appears:** homepage positions 1, 2, 3, 5. The single investigation gets the full Position 3 treatment. About.
**Absent:** investigation index · field notes · filtering · artifact index · Position 4.
**Navigation:** Home · About. Possibly nothing else.
**Honest?** Yes. A site with one substantial piece of work and an About page is complete. It is *small*, not broken.
**Risk:** looks like a landing page. Mitigated if the single investigation is genuinely substantial.

### 3 investigations

**Appears:** Position 4 returns as a short list. An index page becomes marginally useful.
**Absent:** filtering · search · domain grouping.
**Navigation:** Home · Investigations · About.
**Note:** this is the realistic launch minimum. Below three, the index is a list of two links and should not exist.

### 5 investigations

**Appears:** the index earns its place. Field notes likely exist and gain a section. Status becomes visible and meaningful — some open, some closed.
**Absent:** filtering (5 items fit on one screen) · search · tags.
**Navigation:** Home · Investigations · Notes · About.
**This is the first genuinely comfortable state.**

### 10 investigations

**Appears:** domain metadata starts to matter — two or three domains have multiple items. A domain filter becomes *useful* rather than decorative.
**Absent:** search (10 items are scannable) · a separate artifact index.
**Navigation:** unchanged. **Filtering is added inside the index, not to the navigation.**

### 25 investigations

**Appears:** filtering by domain and status becomes necessary. Related-investigation links start carrying real value. An artifact index may be justified if there are 15+ artifacts.
**Search:** still probably unnecessary — 25 titles are browsable.
**Navigation:** still four items. **This is the point that proves the architecture: nothing structural changed between 3 and 25.**

### 50+ investigations

**Appears:** search becomes genuinely useful. Chronological archive view. Domain pages may become destinations rather than filters.
**Navigation:** may grow to five items if a domain-led entry proves valuable.
**Structural change:** minor and additive. No redesign.

---

## 2. What changes, and what never does

| Element | 1 | 3 | 5 | 10 | 25 | 50+ |
|---|---|---|---|---|---|---|
| Homepage position 3 (reasoning) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Investigation index | — | ◐ | ✅ | ✅ | ✅ | ✅ |
| Field notes section | — | ◐ | ✅ | ✅ | ✅ | ✅ |
| Domain filter | — | — | — | ✅ | ✅ | ✅ |
| Status filter | — | — | — | ◐ | ✅ | ✅ |
| Search | — | — | — | — | ◐ | ✅ |
| Artifact index | — | — | — | — | ◐ | ✅ |
| Navigation items | 2 | 3 | 4 | 4 | 4 | 4–5 |

**Never changes:** the investigation structure · the honesty requirement · reasoning before artifacts · status and date on every item · the homepage sequence.

---

## 3. The principle that makes this work

> **Sections disappear rather than showing empty states.**

An empty "Field Notes" heading saying *"coming soon"* is worse than no heading. It advertises a gap, promises a cadence, and dates badly the moment it stays empty for six months.

Applied consistently:
- No investigations in a domain → the domain does not appear
- No field notes → no notes section
- No artifacts → nothing rendered where artifacts would be (`ARTIFACT_MODEL.md` §5)
- No open investigations → no status filter
- EMERGING tier empty → it is simply not shown

**Corollary: the site should look deliberately small rather than aspirationally large.** A complete three-page site reads as confident. A twelve-section site with eight thin sections reads as padding — and padding is the most visible tell of an early-career portfolio.

---

## 4. The EMERGING tier problem

`../brand/BRAND_STRATEGY.md` establishes CURRENT / EMERGING / FUTURE, and notes EMERGING is currently **empty**.

**Handling:** status is metadata, not a section, so an empty EMERGING tier renders as *no open investigations* — which is invisible rather than conspicuous. There is no empty shelf.

**When it fills**, open investigations appear naturally in the index with `open` status. No structural change.

**The risk this does not solve:** if EMERGING stays empty for a year, an attentive reader notices that nothing has moved. **No design fixes that.** It is a content problem, and the honest response is that the archive still shows dated work rather than pretending to currency.

---

## 5. Launch threshold

**Recommended minimum: 3 investigations and 2–3 field notes.**

Reasoning: one investigation cannot demonstrate range or that the honesty discipline is consistent rather than a one-off. Three allows at least one professional, one self-initiated, and one unresolved — which shows the model working across origins.

**Below three, launching is still possible but the site should present as a single-page statement**, not as a portfolio with mostly-empty sections.

**Above ~8, launch is comfortable in any configuration.**

---

## 6. Failure modes

| Risk | Guard |
|---|---|
| Padding thin content to fill sections | Sections disappear; small is acceptable |
| Fake "coming soon" states | Banned outright |
| Filters with nothing to filter | Volume thresholds in §2 |
| Navigation designed for a future that arrives slowly | 2–4 items now; growth is additive |
| Site looks abandoned | Dates visible everywhere — honest ageing beats false currency |
| Redesign needed at scale | Nothing structural changes between 3 and 25 |
