# Investigation Experience

**Date:** 2026-08-14 (Phase 4) · Three creative approaches to the core unit.

The structure is fixed by Phase 3: **question → what I did and why → what I found → what I couldn't determine → *(artifacts)* → *(what changed)*.** Four required movements, no fixed headings. These approaches differ in how that structure is *experienced*.

---

## Approach A — EDITORIAL NARRATIVE

| Stage | Behaviour |
|---|---|
| **Entry** | Title and one-line framing of the question. Metadata quiet, above or below |
| **Opening moment** | The question, stated in Het's voice, as the first full paragraph |
| **Reading rhythm** | Continuous prose. Headings only where genuinely needed |
| **Reasoning reveal** | Linear — the reader follows the route in the order it happened, including a false start |
| **Findings** | A turn in the prose, not a labelled section |
| **Limitations** | The closing movement, same voice, same weight |
| **Artifact reveal** | A quiet block after the prose ends |
| **Related work** | Below the article |
| **Exit** | Next investigation, or the index |

**Strength:** most natural fit for the reasoned first-person voice. Reads like a person thinking.
**Weakness:** a skimming reader may miss the uncertainty movement entirely — and it is the site's most distinctive move.
**Best at:** 800–2,000 words.
**Fails at:** very short investigations, where article framing feels inflated.

---

## Approach B — DOCUMENT WITH APPARATUS ⭐

| Stage | Behaviour |
|---|---|
| **Entry** | Title, then an apparatus register carrying status, domain, origin, dates |
| **Opening moment** | The question in the main column; the apparatus already answers *when, what kind, how settled* |
| **Reading rhythm** | Prose in the main column; the apparatus accrues alongside — a note on why an approach was chosen, a later correction, a date when something changed |
| **Reasoning reveal** | Main column carries the route; apparatus carries the asides that would otherwise interrupt it |
| **Findings** | In the main column |
| **Limitations** | **Main column, always in the same position** — structurally marked by consistency rather than by a visual device |
| **Artifact reveal** | An apparatus entry after the reasoning concludes |
| **Related work** | Apparatus |
| **Exit** | Index, or a related investigation from the apparatus |

**Strength:** makes *thinking about the work* visible alongside the work — the brand promise as literal structure. It also solves the tension named in `DESIGN_PRINCIPLES.md`: the uncertainty movement gets consistent position rather than decorative emphasis.
**Weakness:** the apparatus must have real content or it reads as an empty gutter. Requires discipline in writing, not just design.
**Best at:** any length — the apparatus scales down to two entries.
**Fails if:** the apparatus becomes decorative, or duplicates the main column.

**Revision handling — the strongest property.** When Het later corrects or extends an investigation, the apparatus records it with a date. The original stays. This is the visible-corrections discipline from `../brand/GROWTH_MODEL.md`, given a native home — and it turns the archive into evidence of consistent judgment rather than a set of frozen claims.

---

## Approach C — PROGRESSIVE TECHNICAL EXPLORATION

| Stage | Behaviour |
|---|---|
| **Entry** | The question alone, deliberately sparse |
| **Opening moment** | A single framing sentence |
| **Reading rhythm** | Staged — each movement revealed as the reader advances |
| **Reasoning reveal** | Sequential disclosure; the reader chooses to continue |
| **Findings** | Revealed after the reasoning is read |
| **Limitations** | A final stage |
| **Artifact reveal** | Terminal stage |
| **Related work** | After completion |
| **Exit** | Explicit next step |

**Strength:** enforces reading order; mirrors how an investigation actually unfolds.
**Weakness:** **fails several Phase 3 requirements.** Progressive disclosure may hide detail, never meaning — and the limitations movement is meaning. Staged reveal typically requires JavaScript, breaking the no-JS requirement. It also makes scanning impossible, which fails the hiring-manager journey (they open the investigation nearest their domain and want to assess quickly).
**Verdict:** conflicts with established UX decisions. **Rejected.**

---

## Comparison

| | A Editorial | **B Apparatus** | C Progressive |
|---|---|---|---|
| Voice fit | **9** | 8 | 5 |
| Uncertainty visibility | 5 | **9** | 7 |
| Works at 150 words | 4 | **9** | 3 |
| Works at 2,000 words | **9** | 9 | 6 |
| Scannability (J2) | 6 | **9** | 2 |
| Revision handling | 4 | **10** | 3 |
| Mobile | **9** | 8 | 5 |
| Accessibility | **9** | 8 | 3 |
| No-JS resilience | **10** | 9 | 2 |
| Gimmick risk (resistance) | **9** | 7 | 3 |
| **Total** | 74 | **86** | 39 |

---

## Recommended: Approach B — Document with Apparatus

It is the only approach that:
- makes the reasoning *and the thinking about the reasoning* visible simultaneously
- works identically at 150 words and 2,000
- gives revisions a native home, so the archive compounds
- solves the uncertainty-visibility problem structurally rather than decoratively

**Absorbs from A:** the prose in the main column stays fully editorial. B is not a form to fill in — it is an article with a working register beside it.

**Rejects from C:** nothing staged, nothing hidden, nothing JavaScript-dependent.

**The execution risk, named now:** an apparatus with nothing in it is worse than no apparatus. At minimum every investigation must carry status, domain, origin and dates — which it does by definition. Anything beyond that must be genuine. **If Het has no aside to make, the apparatus holds only metadata, and that is acceptable.**

**Mobile behaviour:** the apparatus is not a sidebar that collapses into a drawer. Entries fold inline at the point in the prose they relate to — so the reading order is preserved and nothing is hidden behind a control.
