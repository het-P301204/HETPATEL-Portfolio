# Phase 4 Recommendation

**Date:** 2026-08-14 · **Status:** Creative direction only. No design system, no components, no code.

---

## Primary creative direction: **THE WORKING DOCUMENT** (CD-1)

**Score: 115/130.** Editorial Investigation 105, Field Notebook 93.

**The idea in one line:** every investigation is a working document with a visible apparatus — the main column carries the reasoning, a secondary register carries time, status, uncertainty, asides, and later revisions.

---

## Why it fits Het

**1. It is the only direction that cannot be worn by someone else.**
The Part 23 test was decisive. Applied to a portfolio of finished, confident project descriptions, the apparatus renders a visibly empty gutter — the design would announce the absence. It holds four things: when the work was done, how settled Het considers it, what he could not determine, and what he later changed his mind about. Three of those four are unusual enough that most portfolios have nothing to put there.

**2. Content, structure, voice and visual language reinforce one another.**
CD-2's editorial typography works for any thoughtful writer; CD-3's dated notebook works for anyone who keeps one. Only CD-1's visual system depends on the content behaviour.

**3. It solves the hardest execution problem in the project.**
`DESIGN_PRINCIPLES.md` flagged a genuine conflict: *what I couldn't determine* must be prominent enough not to be skipped, but marking it visually turns it into the boxed widget Principle 3 forbids. The apparatus resolves it — **consistent position, learnable by a returning reader, with no decorative device.**

**4. It works identically at 1 and at 50 investigations.**
Directly answers the volume question. The apparatus scales down to bare metadata and up to a full revision history. Nothing structural changes.

**5. It provides a return-visit mechanism no other direction offers.**
Dated revisions mean a returning visitor sees not just *new work* but *changed thinking*. This is the only mechanism found that does not depend on publishing cadence — which matters because Het's cadence is unverified.

---

## Why the other two lost

**CD-2 Editorial Investigation (105)** — genuinely strong and the safest choice. Rejected because it is **separable**: the visual system would work unchanged for any writer in any field, so differentiation rests entirely on voice. It also has no mechanism for showing changed thinking, and "editorial portfolio" is an increasingly recognised look — moderate genericity risk.
**Retained from it:** the prose in CD-1's main column stays fully editorial. CD-1 is not a form to fill in; it is an article with a working register beside it.

**CD-3 Field Notebook (93)** — the most personable, and personality is the scarce quality. Rejected on three counts: it **undersells verified professional work** (a notebook reads as informal to the GRC audience, which is primary); it has the highest gimmick risk in the set, with a strong skeuomorphic pull toward paper textures and handwriting; and it scales poorly in quality — the strongest investigation sinks beneath recent notes within months.
**Retained from it:** visible corrections, prominent dates, and incompleteness treated as normal rather than awkward.

---

## The supporting decisions

| Element | Decision |
|---|---|
| **Metaphor** | Investigation — **linguistic and structural only, no visual expression.** Passes the disqualifying test: delete the word and the architecture stands |
| **Typography** | Editorial serif (prose) + technical sans (apparatus) + mono (literal values). Three families maximum. Hierarchy by size and space, weight near-constant |
| **Colour** | Warm editorial neutral; one accent at ~2% of elements. Light and dark both first-class; **identity must survive the switch** |
| **Space** | Functional asymmetry — two registers in a constant relationship. Vertical rhythm marks the four movements without headings |
| **Motion** | Near-none. State changes only. No entrance, no scroll reveal, no transitions by default |
| **Interaction** | Documentary. Links, scrolling, filtering at ~10 items, search past ~50. Nothing else |
| **Images** | Near-zero. One optional small portrait on About. 2–3 explanatory diagrams site-wide |
| **Data visualisation** | **No** — seven of eight proposed uses rejected. Only conceptual diagrams inside investigations survive |
| **Complexity** | Functionally zero client JavaScript at launch. Must be fully readable with JS disabled |

---

## Attempting to disprove the winner

**"The apparatus will be empty."**
The strongest objection. If Het has no asides, no revisions and thin uncertainty, the second register is a styled gutter — and `VISUAL_METAPHOR.md` states plainly that if this happens the metaphor has become costume and should be removed.
**Answer:** every investigation carries status, domain, origin and dates by definition, so the apparatus is never truly empty. But the *interesting* content — revisions, asides, changed conclusions — accrues over time and will be sparse at launch. **This is a real risk, accepted, with a stated exit condition.**

**"Two registers is a desktop conceit that dies on mobile."**
Fair. A sidebar collapsing into a drawer would hide the uncertainty content, which Principle 3 forbids.
**Answer:** the apparatus folds *inline* at the point in the prose it relates to. Reading order is preserved, nothing is hidden, and the mobile result is a single well-set column with occasional insets — a good reading experience in its own right, not a degraded desktop one.

**"Marginal apparatus is strongly associated with Tufte-style typography."**
True, and flagged as a copying risk in `CREATIVE_TERRITORIES.md`. The scholarly apparatus is a centuries-old convention, but the specific Tufte CSS execution is recognisable.
**Answer:** adopt the principle, derive the expression independently. Phase 5 must not reproduce that visual language. **Carried forward as a named constraint.**

**"A still, imageless site will look unfinished."**
The honest risk, shared with `MOTION_LANGUAGE.md` and `IMAGE_STRATEGY.md`.
**Answer:** mitigation is craft, and there is nowhere to hide. The measured precedent is real — the award-winning site in the research has `canvasCount = 0` — but restraint only reads as confidence when the remaining elements are excellent. **This raises the typography bar rather than lowering the overall effort.**

**"Is this just The Register returning under a new name?"**
Worth asking, since The Register was rejected in Phase 1 for corporate drift.
**Answer: no, and the difference is precise.** The Register organised the site around *records of work* — inventory, with the corporate-drift score of 4/10. The Working Document organises it around *a document and the thinking beside it*. The unit is prose with an apparatus, not a row in a register. The register's failure was that its schema became the surface; here the schema is metadata and the surface is reasoning in first person.

**Verdict: it survives.**

---

## Biggest creative risk

**The apparatus becomes decoration.**

Every other risk has a mitigation. This one has an exit condition instead: if, six months after launch, the apparatus carries nothing but the metadata every item has by definition, then the two-register structure is not earning its place and should be collapsed into CD-2 (Editorial Investigation) — which is a strong direction and remains available.

**This is not a hedge.** It is the same discipline the site asks of Het: state what would falsify the claim.

## Mitigation

1. **Minimum viable apparatus** — status, domain, origin, dates. Never empty by construction.
2. **The apparatus never duplicates the main column.** If a note belongs in the prose, it goes in the prose.
3. **Revision entries are only added when something actually changed.** No manufactured update history.
4. **Review at six months.** If the apparatus is inert, collapse to CD-2.

---

## Confidence

**MEDIUM-HIGH.**

The direction is well-grounded: it derives from measured research findings, it is the only finalist that passes the differentiation test, and it resolves a conflict that Phase 4 identified independently in the design principles.

Not HIGH for two reasons: **the apparatus's richness depends on content behaviour that does not exist yet**, and the direction has not been prototyped — its mobile folding and its typographic two-register distinction are both execution-dependent in ways that only a real page will settle.

---

## What Phase 5 must not do

- Reproduce Tufte CSS or any recognisable margin-note implementation.
- Add a rule, box or colour to distinguish the registers — type and position only.
- Introduce a second accent.
- Let the apparatus become a sidebar with a collapse control.
- Solve any hierarchy problem with motion.
