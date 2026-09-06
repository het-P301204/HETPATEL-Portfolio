# Concept Directions — Phase 1

> ## ⚠️ SCORES SUPERSEDED — see [`CONCEPT_REEVALUATION.md`](CONCEPT_REEVALUATION.md)
>
> This document's concept *descriptions* remain current. Its **ranking table and recommendation are out of date.**
>
> Expanded research on 2026-08-14 overturned two premises: "confidentiality as demonstration" is a professional-services standard, not an opportunity; and the saturation threat moved from cyberpunk cliché to corporate sameness.
>
> **Revised:** The Register 90 → **83** · The Reading Room 75 → **80** · Practice Log 73 → **76** · Scope & Boundary 66 → **48** (collapsed) · Control Surface 59 → **66**.
>
> The Register remains recommended, but at **MEDIUM** confidence with a **3-point margin** (was 15) and a mandatory voice-layer condition.

**Date:** 2026-08-14 · **Status:** All PROPOSED. Nothing approved, nothing implemented.
**Supersedes** the pre-Phase-0 concept draft, which is preserved in `DECISION_LOG.md` history.

**Grounding:** `website-corpus.json` (21 sites; 3 runtime-measured), `DESIGN_OPPORTUNITIES.md`, and Phase 0 source grounding.
⚠️ The Phase 1 corpus expansion was blocked mid-phase (see `DESIGN_OPPORTUNITIES.md`). These concepts rest on the existing evidence base.

**Three facts from Phase 0 constrain every concept below:**
1. **CURRENT** (professional work — VAPT, CSCRF, IRDAI, ISO 27001) is the only tier with verified substance.
2. **EMERGING is empty today.** No verified original public repository exists.
3. **FUTURE** is 219 documented concepts — adopted strategy, not authored work, and never presentable as achievement.

Any concept that requires built work to function fails today. Any concept that can't absorb a strong ecosystem in 6 months fails later.

**Disqualifying test applied to all seven:** *if you delete the metaphor's vocabulary, does the architecture still stand?* A metaphor that reaches only the labels is costume (the zyekh.cloud failure).

---

# Concept 1 — THE REGISTER

**CENTRAL METAPHOR** An assurance register — the structured record an auditor keeps.

**ONE-SENTENCE CONCEPT** Every piece of work Het has done, is doing, or intends to do is an entry in one register, carrying scope, approach, evidence, status and limitations.

**VISITOR JOURNEY** Plain statement of practice → the register itself, dense and readable, every row showing domain and status → open an entry into a full editorial case study → follow evidence outward to repositories or notes.

**NAVIGATION** The register *is* the navigation. Filter by domain, status, or type. Entries are full pages.

**INFORMATION ARCHITECTURE** Security domain × build state, chronology tertiary. One schema for all content types: `scope · approach · evidence · status · limitations`.

**VISUAL LANGUAGE** Documentary and typographic. Tabular structures as considered information design. Annotation and marginalia. Near-monochrome, accent ~2% of elements.

**INTERACTION LANGUAGE** Filtering and sorting that genuinely help. Progressive disclosure from row → entry. Nothing decorative.

**MOTION LANGUAGE** Minimal. State changes and disclosure only. Fully functional with motion disabled.

**CONTENT MODEL** One typed entry schema; five entry types differing only in field emphasis.

**PROFESSIONAL WORK** Its natural home. A register records *"evidence exists — not publishable"* as a first-class value, making confidentiality visible and deliberate (opportunity O2).

**GITHUB RELATIONSHIP** Repositories are entries whose `evidence` field is a repo link. Zero repos today renders honestly; forty renders identically. **Requires no redesign as the ecosystem grows** — satisfies your GitHub instruction exactly.

**RESEARCH / FIELD NOTES** Entries in *Under investigation* state; can update in place.

**RETURN-VISIT MECHANISM** State transitions. Work visibly moving Scoped → In development → Deployed. Costs nothing extra — a by-product of doing the work.

**MOBILE STRATEGY** Native. A register is a list. Rows collapse to stacked cards carrying status and domain.

**SCALABILITY** Excellent — 3 entries or 300, same structure.

**STRENGTHS** Metaphor is a data model, not decoration. Solves §6 structurally. Turns confidentiality into a signal. *Limitations* as a required field is the strongest anti-generic device found (O8, double-validated). Mobile-native. Low maintenance.

**WEAKNESSES** Reads as dry or bureaucratic if the typography isn't genuinely excellent — the whole concept rests on execution quality. "Register" may feel cold on first contact. Density could overwhelm a recruiter before orienting them.

**GIMMICK RISK** Low — *unless* it adopts audit chrome (stamps, "APPROVED" marks, document textures). That would be the zyekh failure in a new costume. The register must be a real structure, never a theme.

**GENERICITY RISK** Very low. Nothing in the corpus resembles it.

**WHY IT FITS HET** It comes from the professional world he actually works in. Most early-career candidates have never seen a register. Passes the disqualifying test: remove the word "register" and the schema still stands.

---

# Concept 2 — PRACTICE LOG

**CENTRAL METAPHOR** A practitioner's logbook kept over years.

**ONE-SENTENCE CONCEPT** The site is a continuous dated record of a security engineer's development, where the *accumulation itself* is the argument.

**VISITOR JOURNEY** Current entry (what Het is working on now) → scroll back through dated entries → depth via linked case studies → the archive's density becomes the credibility.

**NAVIGATION** Time is the spine. Year/month scrubber, with domain as a secondary filter.

**INFORMATION ARCHITECTURE** Chronological primary; domain and type secondary.

**VISUAL LANGUAGE** Editorial-diary. Strong date typography, generous rhythm, restrained.

**INTERACTION LANGUAGE** Scroll and scrub. Jump-to-period.

**MOTION LANGUAGE** Sequential reveal tied to scroll position, nothing more.

**CONTENT MODEL** Dated entries with type and domain tags.

**PROFESSIONAL WORK** Sits as dated milestones — but anonymisation fights chronology, since precise dates are exactly what must be blurred for regulated work. **Real tension.**

**GITHUB RELATIONSHIP** Commits and releases become log entries. Grows naturally.

**RESEARCH / FIELD NOTES** Native — this is what a log is.

**RETURN-VISIT MECHANISM** Strongest of the seven. The log visibly extends.

**MOBILE STRATEGY** Excellent — vertical time is a phone-native pattern.

**SCALABILITY** Good, but the best work sinks over time (the exact weakness Kettle's thematic clustering exists to solve).

**STRENGTHS** Turns Het's earliness into an asset — the visitor watches something begin. Honest by construction. Makes the EMERGING tier the protagonist.

**WEAKNESSES** A log that is mostly *future* is a plan, not a portfolio. Foregrounds inexperience to the readers who need current capability. **A visible cadence that stalls broadcasts the stall.** Date-precision conflicts with audit confidentiality.

**GIMMICK RISK** Low. **GENERICITY RISK** Medium — dated-timeline portfolios are common.

**WHY IT FITS HET** Fits the *trajectory* well and the *present* poorly. Better as a secondary surface than a spine.

---

# Concept 3 — CONTROL SURFACE

**CENTRAL METAPHOR** A control surface — the mapping between what a system claims and what actually enforces it.

**ONE-SENTENCE CONCEPT** The site explains security systems through manipulable diagrams, and Het's work appears as evidence inside those explanations.

**VISITOR JOURNEY** A live diagram of a security concept (control → implementation → evidence) → manipulate it → understand the relationship → discover Het's work embedded as worked examples.

**NAVIGATION** By concept, not by project. Diagrams are destinations.

**INFORMATION ARCHITECTURE** Concept-primary; work referenced *from* explanations.

**VISUAL LANGUAGE** Scientific-editorial. Diagram-led, labelled colour used semantically (the Ciechanowski principle).

**INTERACTION LANGUAGE** Substantial and justified — manipulable diagrams at the point of confusion (O4).

**MOTION LANGUAGE** Reader-driven only. Sliders and drags, never autoplay.

**CONTENT MODEL** Explanations as primary artefacts; work as annotations.

**PROFESSIONAL WORK** **Unusually strong fit.** Control-to-evidence mapping is exactly what CSCRF/IRDAI work involves, and it can be explained *generically* — using a worked abstract example — with zero client detail. Demonstrates GRC understanding while disclosing nothing.

**GITHUB RELATIONSHIP** Weak. Repositories don't naturally belong inside conceptual explanations.

**RESEARCH / FIELD NOTES** Natural.

**RETURN-VISIT MECHANISM** New explanations — but they are expensive and therefore rare.

**MOBILE STRATEGY** Difficult. Manipulable diagrams on 375px need bespoke alternatives, not shrinking.

**SCALABILITY** Poor short-term. Each piece is costly.

**STRENGTHS** The most differentiated content strategy available — nothing like it in the cybersecurity corpus. Demonstrates *how Het thinks*, the brief's north star. Solves confidentiality elegantly by abstracting to the general case.

**WEAKNESSES** Very high production cost. A half-built explorable is worse than prose. Risks positioning Het as an educator rather than a practitioner — and teaching authoritatively at intern level invites overclaiming.

**GIMMICK RISK** Low (interaction teaches). **GENERICITY RISK** Very low.

**WHY IT FITS HET** Excellent as a *component*, unwise as the whole site. **Recommendation: absorb into the winner for two or three flagship pieces.**

---

# Concept 4 — THE READING ROOM

**CENTRAL METAPHOR** A small, serious publication.

**ONE-SENTENCE CONCEPT** Het's site is a periodical about security engineering, in which his own work appears as reported material.

**VISITOR JOURNEY** Current issue → read a piece → discover the author's practice through the writing → archive.

**NAVIGATION** Issues and sections, like a journal.

**INFORMATION ARCHITECTURE** Editorial — issue → section → piece. Work is subordinate to writing.

**VISUAL LANGUAGE** Print-derived. Editorial serif, strong hierarchy, columnar discipline.

**INTERACTION LANGUAGE** Reading-first. Minimal.

**MOTION LANGUAGE** Essentially none.

**CONTENT MODEL** Articles with issue/section metadata.

**PROFESSIONAL WORK** As reported case studies — a natural anonymisation vehicle, since journalism routinely describes work without naming sources.

**GITHUB RELATIONSHIP** Repositories become subjects of articles rather than listings. Indirect but durable.

**RESEARCH / FIELD NOTES** The entire premise.

**RETURN-VISIT MECHANISM** Issue cadence — strong *if* sustained.

**MOBILE STRATEGY** Excellent. Reading is phone-native.

**SCALABILITY** Excellent for writing; awkward for tools and repositories.

**STRENGTHS** High craft ceiling. Sidesteps the empty-EMERGING problem by making writing the substance. Distinctive in the category.

**WEAKNESSES** **Requires writing volume Het does not have and has not confirmed he can sustain.** An "issue 1" with three pieces and no issue 2 is a visible failure. Also subordinates his professional experience to his prose, which inverts the actual strength ranking.

**GIMMICK RISK** Low. **GENERICITY RISK** Low-medium.

**WHY IT FITS HET** Fits an aspiration, not a current capacity. Revisit once a writing habit is proven.

---

# Concept 5 — SCOPE & BOUNDARY

**CENTRAL METAPHOR** Scope — the auditor's first and most consequential act: deciding what is in, what is out, and why.

**ONE-SENTENCE CONCEPT** The site is organised by what Het can and cannot say, making the boundary itself the structure and the demonstration.

**VISITOR JOURNEY** A statement of what this site does and does not contain → work presented with its boundary explicit → *in scope* material in full → *out of scope* material named, characterised, and deliberately withheld.

**NAVIGATION** By engagement or domain, each with a visible boundary line.

**INFORMATION ARCHITECTURE** Every item split into disclosed / withheld, with the reason for withholding stated.

**VISUAL LANGUAGE** Documentary with an explicit typographic treatment for the boundary — redaction handled as *design*, not decoration.

**INTERACTION LANGUAGE** Expanding the disclosed side; the withheld side names its category and stays closed.

**MOTION LANGUAGE** Minimal, boundary-focused.

**CONTENT MODEL** Paired disclosed/withheld fields per item.

**PROFESSIONAL WORK** The purest possible expression of opportunity O2. Discretion becomes the entire architecture.

**GITHUB RELATIONSHIP** Awkward — public code has no interesting boundary. The metaphor doesn't extend.

**RESEARCH / FIELD NOTES** Fits weakly; notes have no confidentiality dimension.

**RETURN-VISIT MECHANISM** Weak.

**MOBILE STRATEGY** Fine — it's a list of pairs.

**SCALABILITY** Poor. The metaphor only applies to confidential work, which is a minority of the content.

**STRENGTHS** The most conceptually striking of the seven, and unmistakably Het's. Directly proves trustworthiness to the GRC audience.

**WEAKNESSES** **One-note.** An entire site about what you can't say becomes coy and, eventually, irritating. Risks reading as mystique rather than rigour. And it structurally can't hold the GitHub ecosystem Het is about to build.

**GIMMICK RISK** **High** — redaction-as-aesthetic is one bad decision away from theatre.

**GENERICITY RISK** Very low.

**WHY IT FITS HET** Brilliant insight, wrong scope for a whole site. **Absorb into the winner as the treatment for professional case studies.**

---

# Concept 6 — WORKBENCH

**CENTRAL METAPHOR** A workshop with the work visibly in progress.

**ONE-SENTENCE CONCEPT** The site shows things being built — drafts, dead ends, revisions — rather than only finished output.

**VISITOR JOURNEY** What's on the bench right now → how it's progressing → what was abandoned and why → finished work as the smaller shelf.

**NAVIGATION** By project, each with a visible progress state and working history.

**INFORMATION ARCHITECTURE** Project-primary, with versioned working history.

**VISUAL LANGUAGE** Utilitarian, workshop-like. Unpolished by intention.

**INTERACTION LANGUAGE** Expanding working history; before/after comparison.

**MOTION LANGUAGE** Minimal.

**CONTENT MODEL** Projects with append-only working logs.

**PROFESSIONAL WORK** Poor fit — confidential work cannot be shown in progress.

**GITHUB RELATIONSHIP** The strongest of the seven. Commits, branches and drafts are native content.

**RESEARCH / FIELD NOTES** Natural.

**RETURN-VISIT MECHANISM** Strong — the bench visibly changes.

**MOBILE STRATEGY** Good.

**SCALABILITY** Good.

**STRENGTHS** Makes the EMERGING tier the hero. Showing abandoned work and reasoning is genuinely rare and credible.

**WEAKNESSES** **Fails at n=0.** With no verified original repository, the bench is empty — and an empty workshop is the worst possible first impression. It also relegates Het's only verified substance (professional work) to a poor fit. **This concept is 6–12 months premature.**

**GIMMICK RISK** Low. **GENERICITY RISK** Medium — "build in public" is a well-worn frame.

**WHY IT FITS HET** It fits the Het of next year. It actively misrepresents the Het of today.

---

# Concept 7 — THE INDEX

**CENTRAL METAPHOR** A printed research index.

**ONE-SENTENCE CONCEPT** One dense, beautifully-set sortable table of everything — no hero, no cards, no images.

**VISITOR JOURNEY** Land directly in the index → sort and filter → open an entry.

**NAVIGATION** Sorting and filtering only.

**INFORMATION ARCHITECTURE** Single flat surface, multi-column.

**VISUAL LANGUAGE** Pure typography. Extreme reduction.

**INTERACTION LANGUAGE** Sort, filter, open.

**MOTION LANGUAGE** None.

**CONTENT MODEL** Uniform rows.

**PROFESSIONAL WORK** Compressed to rows — loses the narrative that is its main value.

**GITHUB RELATIONSHIP** Rows. Scales trivially.

**RESEARCH / FIELD NOTES** Rows.

**RETURN-VISIT MECHANISM** Weak — new rows only.

**MOBILE STRATEGY** Excellent. **SCALABILITY** Excellent. **Performance:** unbeatable.

**STRENGTHS** Zero genericity. Extreme confidence. Trivial to maintain.

**WEAKNESSES** **The Kettle trap, named explicitly in research.** Austerity reads as confidence only when the name already carries credibility. From an unknown early-career engineer a bare index reads as unfinished. Gives recruiters nothing to orient on. No room for the case-study narrative that is Het's strongest asset.

**GIMMICK RISK** None. **GENERICITY RISK** Very low.

**WHY IT FITS HET** Right instinct, wrong decade. Revisit in five years.

---

# RANKING

Scored 1–10. Analyst judgement, calibrated against each other.

| Criterion | 1 Register | 2 Practice Log | 3 Control Surface | 4 Reading Room | 5 Scope & Boundary | 6 Workbench | 7 Index |
|---|---|---|---|---|---|---|---|
| Personal fit | **10** | 6 | 8 | 5 | 9 | 4 | 5 |
| Distinctiveness | 9 | 6 | 9 | 7 | **10** | 6 | 8 |
| Credibility | **9** | 6 | 7 | 6 | 8 | 4 | 7 |
| Usability | 8 | 8 | 6 | **9** | 6 | 7 | 3 |
| Scalability | **9** | 7 | 4 | 6 | 3 | 7 | **10** |
| Return value | 8 | **9** | 5 | 8 | 3 | **9** | 4 |
| Technical feasibility | 9 | 8 | 3 | 8 | 7 | 7 | **10** |
| Mobile quality | 9 | 9 | 4 | **10** | 7 | 8 | **10** |
| Performance | 9 | 8 | 5 | 9 | 8 | 8 | **10** |
| Long-term brand value | **10** | 6 | 8 | 7 | 5 | 6 | 6 |
| **TOTAL** | **90** | 73 | 59 | 75 | 66 | 66 | 73 |

---

# TOP 2

**Concept 1 — The Register (90)** and **Concept 4 — The Reading Room (75)**.

They separate on a single axis: **what carries the site's substance.** The Register bets on *structured work*; The Reading Room bets on *writing*. Het has verified professional work today and no confirmed writing habit — which is why the gap is 15 points rather than 2.

Practice Log (73) and The Index (73) tie just behind. Practice Log is the better *secondary* surface; The Index is the better *five-years-from-now* site.

---

# RECOMMENDED PRIMARY DIRECTION

## THE REGISTER — absorbing elements of Concepts 3 and 5

**Why it wins, in order of weight:**

1. **The metaphor is a data model.** `scope · approach · evidence · status · limitations` are audit-native fields that happen to be exactly what Het's content needs. It passes the disqualifying test — delete the word "register" and the architecture stands.

2. **It is the only concept that is honest at n=0 and unchanged at n=40.** With no repositories it renders a real, complete register of professional work. As the ecosystem arrives, repositories become entries. **This directly satisfies your instruction to design for a strong GitHub presence later without building around the current state.**

3. **It solves confidentiality structurally.** A register records *"evidence exists — not publishable"* as a legitimate value. Discretion becomes a visible professional signal — precisely what the GRC audience needs to see, and the correct expression of *verified experience + intentional confidentiality*.

4. **A required `limitations` field is the strongest anti-generic device in the research** — independently validated by editorial practice and by Het's own strategy document. Generated portfolios are uniformly confident; a site that systematically states what its work does not address is structurally the opposite.

5. **It carries the three tiers without three separate designs.** CURRENT, EMERGING and FUTURE are status values on one axis, not different page types — so the tiers stay distinct while the site stays coherent.

6. **It could not belong to another student.** It comes from having sat inside real regulated engagements.

**What it absorbs:**
- From **Control Surface (3):** interactive explanatory diagrams for two or three flagship entries — control-to-evidence mapping explained generically, demonstrating GRC depth with zero client detail.
- From **Scope & Boundary (5):** the explicit disclosed/withheld treatment, applied to professional case studies only, where it is rigour rather than mystique.
- From **Practice Log (2):** a dated *Now* surface.

**Named risks, carried forward:**
- Must be typographically excellent or it reads as bureaucratic. This concept has the least tolerance for mediocre execution of any of the seven.
- Must never adopt audit chrome — no stamps, no fake document textures.
- Must orient a recruiter before it overwhelms them with density.
- Every state label must be audited against its evidence before launch. One "Deployed" on a stub destroys all of them.

**Fallback:** if Het rejects the assurance framing, **The Reading Room** — not Practice Log — becomes the recommendation, since it is the only other concept that functions with zero built repositories.
