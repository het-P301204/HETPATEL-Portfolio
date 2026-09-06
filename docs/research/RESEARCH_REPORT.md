# Research Report — Het Patel Personal Website

**Date:** 2026-08-14
**Phase:** 1 (Research). No production implementation has begun.
**Companion documents:** `website-corpus.json`, `REFERENCE_SITES.md`, `DESIGN_PATTERNS.md`, `GENERICITY_ANALYSIS.md`, `REJECTED_PATTERNS.md`

---

## 1. Executive Summary

Twenty-one websites were examined across four categories, three of them with runtime inspection that measured actual colour values, typefaces and DOM structure rather than describing them from impression.

**Six findings drive everything that follows.**

**1. The cybersecurity portfolio archetype is real, measurable, and worse than expected.** Independently-authored sites share section order, palette and phrasing. Neon green `rgb(44,214,38)` on black was measured on one; JetBrains Mono applied as the entire body face with `SYSTEM_STATUS: ONLINE` was measured on another. A repository in the sample advertises *"Glassmorphic terminal UI with matrix backdrop"* as a selling point — three items from Het's forbidden list in seven words.

**2. Effects are not what distinguishes great work.** The award-winning creative-developer portfolio inspected (dennissnellenberg.com) contains **zero canvas elements**. No WebGL, no 3D, no particles. Its distinctiveness comes from a custom typeface, a 192px type scale, constant heading weight, and an accent colour used on 8 of roughly 570 elements. The student security sites use *more* visual machinery than the award winner does. This is the empirical answer to brief §27.

**3. Interaction is justified by comprehension, not by impressiveness.** Bruno Simon's drivable 3D portfolio is defensible because he teaches Three.js — the site proves the skill it sells. Ciechanowski's draggable simulations are defensible because removing them would cost understanding. Both pass; only one is available to Het. The resulting test: *does removing this interaction cost the visitor understanding, or only spectacle?*

**4. Three independent editorial sites converge on typed content states; no cybersecurity site does.** Appleton separates Essays ("with an agenda") from Notes ("things I don't entirely understand yet"). Distill labels Peer-reviewed vs Commentary. The Pudding marks pieces as "Updating". This is the proven solution to Het's hardest structural requirement (§6: BUILT / IN PROGRESS / RESEARCH / FUTURE must never blur) — and it is entirely absent from the category he is competing in.

**5. GRC and audit ground is comparatively empty.** Of 20 repositories in the GitHub `cybersecurity-portfolio` sample, SOC/SIEM/Splunk labs dominate; exactly one is compliance-oriented, at one star. Het's CSCRF and IRDAI audit exposure sits in the sparse region — and regulated-sector audit experience is far harder to self-acquire than another Splunk lab.

**6. Precision of language is the cheapest credibility mechanism available.** Trail of Bits names specific techniques in titles. The archetype says "dedicated cybersecurity professional" and "unwavering commitment to excellence". The gap between those two registers costs nothing to close and closes most of the distance.

**Recommended direction (detail in §18 and `/docs/concepts/CONCEPTS.md`):** a domain-clustered, state-honest body of work whose structure is borrowed from the assurance register Het already works with professionally — editorial typography, explanatory interaction reserved for the few places it teaches something. Working title: **The Register**.

---

---

## 1A. CONTINUATION UPDATE — 2026-08-14

A second research session filled the gaps flagged in §15/§18. **Two of the six headline findings above were overturned.** They are retained unedited for history; corrections are recorded here and in the revised documents.

**Corpus:** 21 → **37 entries** (16 added). Categories added: *confidential work presentation* (5). Expanded: cybersecurity (+3), creative developer (+3), information visualisation (+4), return-visit (+1).

**Tooling:** WebSearch, WebFetch and Apify were available. **The browser runtime was not** (blocked by a safety classifier). Consequence: **no new entry carries measured colour or typography.** All craft findings still rest on the three sites measured in the first session.

### What was overturned

**❌ Finding 4 revised — the confidentiality opportunity was wrong.**
The first session claimed no site was solving "I did significant work I may not describe." Five independent sources show it is a **codified professional-services standard**: descriptor-label anonymisation, published templates, Bishop Fox's mixed disclosure, Doyensec's anonymous-client-with-full-technical-depth, Include Security publishing no case studies at all.
Sharper still: the convention is **silent omission plus visible method**. Nobody publishes a ledger of what they cannot say — so "advertise the withholding" is *contrary* to practice and would read as inexperience.
**O2 demoted from #3 opportunity to table stakes.** This collapsed one concept entirely (*Scope & Boundary*, 66 → 48) and removed a pillar from the recommendation.

**❌ Finding 1 revised — the saturation threat moved.**
The first session's 3-site sample implied near-universal cyberpunk aesthetics. Two new inspections found the opposite: bugatsec.dev has *"no terminal aesthetics, matrix-style backgrounds, glitch effects, or hacker stereotypes"*; nikki-65 is *"corporate-ready rather than cyberpunk-influenced."*
**Revised: 2 of 5 use cyberpunk motifs; 3 of 5 are professional.** Avoiding hacker clichés is now **table stakes**. The new sameness is corporate — badges, CVSS labels, framework name-drops, and **zero voice**. bugatsec was characterised as achieving *"intentional genericization through absence of personality markers."*

**⚠️ Finding 5 weakened.** GRC is present in ~4–5 of ~34 effectively independent repositories (~12–15%), not 1 in 20. **Under-represented, not near-absent.** Positioning stays valid but must be stated modestly.

### What strengthened

**✅ Finding 6 (precision) and the limitations principle both strengthened.** Limitations disclosure now has **five independent sources** — Distill, Appleton, R2D3's "Reality check", Our World in Data's stated data shortcomings, and Het's own strategy document. It is the best-evidenced finding in the project.

**✅ New: personality is the scarce differentiator** (O11), and **structured records are compatible with personal voice** — Olivier Larose presents rigid project metadata while sounding unmistakably like a person. This is what rescues the recommended concept from the bugatsec failure mode.

**New opportunities O11–O16** recorded in `DESIGN_OPPORTUNITIES.md`.

### Effect on the recommendation

**The Register remains the recommendation but at MEDIUM confidence, not HIGH, and the margin fell from 15 points to 3.** It now carries a mandatory condition — a first-person voice layer — with **The Reading Room** as a live fallback rather than a formality. Full re-scoring in `../concepts/CONCEPT_REEVALUATION.md`.

---

## 2. Methodology

**What was done.**
1. Attempted Phase 0 source ingestion. `H:\CLAUDE\Het_Portfolio` was **empty** — neither the resume nor the roadmap was present. See §15 and `USER_INPUT_REQUIRED.md`.
2. Candidate discovery via web search and two structured indexes (Awwwards portfolio category, GitHub `cybersecurity-portfolio` topic).
3. Structural analysis by text fetch (21 sites).
4. **Runtime inspection** of 3 high-value sites in a real browser engine, extracting computed colour frequencies, font stacks, heading sizes/weights, DOM structure and canvas presence.
5. Clustering into a pattern taxonomy with an explicit adopt/adapt/avoid verdict per pattern.

**Why runtime inspection mattered.** Text fetching converts pages to markdown and destroys all visual information. Early fetches returned "colour not documented" for sites whose palettes were central to the analysis. Rather than fill those gaps from memory — which would have been fabrication — colour and motion are recorded as `UNKNOWN` for text-fetched sites, and the browser was used where visual facts actually mattered. This asymmetry is visible throughout the corpus and is deliberate.

**Limitations, stated plainly.**
- **Apify was not available in this session.** No large-scale crawl was performed. The corpus is hand-collected and modest.
- Sample sizes are small: 3 cybersecurity sites inspected in depth, 1 award-winning portfolio measured. Consistency across them is striking but three is three.
- Selection bias: candidates were reached via search rankings and one topic tag. Excellent sites that rank poorly are invisible to this method.
- No accessibility or performance auditing was performed on corpus sites; no claims are made about either.
- Award-gallery listings are a snapshot of 2026-08-14 and will drift.

**Language discipline.** Claims are scoped to the sample ("observed in this sample", "2 of 3 inspected"). Where a statement is judgement rather than measurement, it says so.

---

## 3. Research Corpus

21 entries in `website-corpus.json`, plus two structured listings recording population context (31 Awwwards portfolio sites; 20 GitHub repositories).

| Category | Inspected | Listed only |
|---|---|---|
| Cybersecurity (practitioner + archetype) | 9 | 20 repos |
| Exceptional digital experience | 1 measured | 32 |
| Editorial / research / information design | 5 | — |
| Technical / engineering | 4 | — |

This is **below** the brief's suggested targets (§15). The shortfall is a direct consequence of Apify being unavailable and of a deliberate choice to inspect fewer sites properly rather than list many superficially. Brief §15 states "quality > quantity"; that trade was taken knowingly and is flagged here rather than hidden.

---

## 4. Cybersecurity Portfolio Landscape

Three tiers emerged, and they behave very differently.

**Tier 1 — The student/junior archetype** (adharvkt, raifkaya, zyekh, and most of the 20 repositories).
Single-page anchor scroll. Fixed section order. Percentage skill bars. Tools listed as projects. "Services" despite seeking employment. Dark palette, either neon-green or monospace-modern. Marketing filler vocabulary.

**Tier 2 — The working practitioner** (Sam Curry, rez0, Daniel Miessler).
Writing-led. Findings stated plainly. Personality present but subordinate to work. Miessler leads with a thesis rather than a title.

**Tier 3 — The research authority** (James Kettle, PortSwigger, Trail of Bits).
Near-zero decoration. Thematic clustering by attack class. Precise technique names in titles. Methodology published alongside results.

**The trap.** Tier 3's austerity is affordable *because the name already carries credibility*. An unknown engineer publishing a bare text page reads as unfinished, not confident. Het must borrow Tier 3's **structure and vocabulary** while supplying, through design craft, the credibility that Tier 3 gets from reputation.

---

## 5. Genericity Analysis

Full detail in `GENERICITY_ANALYSIS.md`. Summary: the archetype scores 1/10 on visual, interaction, IA, copy and brand distinctiveness, and 2/10 on credibility to a security professional — while scoring around 5/10 with a non-technical recruiter, which is why it persists.

Applied against brief §54, the archetype fails all six genericity tests. Those tests are the acceptance criteria for the chosen concept and must be re-run before implementation and again before launch.

---

## 6. Cross-Domain Findings

The most valuable transfers came from outside security entirely.

- **Explanatory interaction** (Ciechanowski): manipulable diagrams placed at the point of confusion. Security is full of relational systems — attack paths, entitlement chains, trust boundaries, detection logic — that static text explains badly.
- **Epistemic honesty as structure** (Appleton, Distill, Pudding): content typed by confidence, ageing surfaced rather than hidden.
- **Multi-axis indexing** (PortSwigger, Observable): several ways into one corpus, with an overview device for complex structures.
- **Progressive complexity** (Ciechanowski, Linear): simple case first, then scale.
- **Reconstruction as content** (nan.fyi): "I rebuilt X to understand it" — publishable value without novel findings, and no client data involved.

---

## 7. Navigation Patterns

Observed: single-page anchor scroll (archetype); minimal 3-item nav (Snellenberg, measured); thematic clustering by domain (Kettle); multi-axis entry (PortSwigger); hub-and-spoke to named projects (Miessler); epistemic typing as navigation (Appleton); large tag taxonomy (Trail of Bits); minimap overview (Observable).

**Adopted:** thematic domain clustering × epistemic state, with chronology as a third axis. **Rejected:** single-page anchor scroll (cannot scale to 12 tracks); large taxonomy (premature at Het's volume).

---

## 8. Interaction Patterns

The corpus splits cleanly into interaction that **teaches** (Ciechanowski's sliders, Comeau's explorable examples, Observable's reactive cells) and interaction that **decorates** (zyekh's non-functional terminal chrome).

Bruno Simon sits in a third position: interaction as *proof of the advertised skill*. Legitimate for him, unavailable to Het.

**Governing rule adopted:** remove the interaction. If understanding is lost, keep it. If only impressiveness is lost, it stays removed.

---

## 9. Typography Findings

The only site where typography was *measured* is also the only award winner: Snellenberg uses a custom face, a 192px H1, and — notably — **constant weight 450 across every heading level**, creating hierarchy through size alone.

Against this: Poppins on 164/174 elements (adharvkt) contributing nothing to identity, and JetBrains Mono as an entire body face (zyekh) reading as costume.

**Adopted:** typography as the primary identity carrier; a distinctive licensed face; hierarchy by size with restrained weight variation; monospace strictly as an accent for code, identifiers and data.

---

## 10. Motion Findings

Motion was the hardest property to research honestly — text fetching cannot observe it, and it was not measured dynamically. Most motion fields in the corpus are `UNKNOWN`, and no site's motion design is characterised beyond what was directly observable.

What *is* established:
- Reader-driven motion (drag, slider) is more accessible and more respectful than autoplay (Ciechanowski).
- The award-winning portfolio achieves its effect with **no canvas at all**.
- Motion must survive `prefers-reduced-motion` and the site must remain fully comprehensible without it (brief §40, §49).

---

## 11. Storytelling Findings

Security work is inherently narrative — an investigation has a beginning, a turn and a resolution. The archetype discards this entirely, reducing work to labels.

Sam Curry's writeups and Kettle's methodology writing show the alternative. Het's brief already specifies the anonymised structure (§4: objective / scope / role / approach / domain / deliverable / lessons). Research supports it: the *shape* of an investigation can be shown without disclosing any of its contents.

---

## 12. Personal Branding Findings

Miessler is the clearest positive model: he leads with a thesis, not a job title, and that thesis unifies otherwise unrelated outputs. Comeau shows voice as an untemplatable asset. Snellenberg shows identity carried by a typeface bearing his own name.

Meanwhile the archetype's branding is entirely interchangeable — the §54 Test 3 failure, live.

**Implication:** Het's brand must rest on a *point of view about security*, not on a tool list. That point of view is the one thing no generator can produce for him, and the one thing currently missing — because the source materials that would ground it were not provided.

---

## 13. Information Architecture Findings

The strongest IA insight is the intersection of two independently-observed patterns:

- Kettle groups research **by domain** rather than by date.
- Appleton types content **by epistemic status** rather than by format.

Combined, they give a two-dimensional structure that solves Het's specific problem exactly:

> **Security domain × build state** — with chronology available as a third, secondary axis.

This lets a planned repository and a shipped one coexist in the same navigational space without ever being confused for each other, which is precisely what brief §6 demands.

---

## 14. Opportunities

1. **Occupy the GRC/audit gap.** Sparse in the sample; hard to self-acquire; genuinely differentiating.
2. **Bring editorial-grade honesty mechanics into security.** Typed states are absent from the entire cybersecurity sample.
3. **Explain security systems interactively.** Nothing Ciechanowski-like appeared in any security site inspected.
4. **Meet award-gallery craft standards in a category that has essentially none.** Security engineering is absent from the Awwwards portfolio arena.
5. **Publish with cadence.** The one credibility mechanism fully available to someone early-career.
6. **Make the roadmap itself the distinctive artefact** — provided planned work is never presented as built.

---

## 15. Risks

**R1 — The factual foundation is missing (highest severity).** The resume and roadmap were not provided; the project directory is empty. Everything currently known about Het comes from the brief's own prose. No concept can be finalised on that basis without confirmation.

**R2 — Overclaiming.** A site that *looks* like a research authority while backed by a handful of student projects damages credibility more than a plain one. Mitigation: honest state labels, enforced without exception.

**R3 — Confidentiality.** CSCRF/IRDAI work involves a regulated financial firm. Mitigation: anonymised structure only; no findings, counts, metrics, client identifiers or dates. Content requires Het's explicit review before publication.

**R4 — The roadmap reads as fantasy.** 100 planned repositories with few built invites scepticism. Mitigation: lead with built work; present the roadmap as stated direction, visibly subordinate.

**R5 — Concept becomes costume.** The zyekh failure mode: a metaphor that reaches only the vocabulary. Mitigation: the metaphor must determine structure and navigation or be abandoned.

**R6 — Copying risk.** Appleton's epistemic-typing vocabulary and Snellenberg's visual language are both distinctive enough that borrowing would be visible. Mitigation: adopt principles, derive expression independently.

**R7 — Scope collapse.** An ambitious evolving system that Het cannot maintain will decay into a stale site, which is worse than a modest fresh one. Mitigation: choose a concept whose maintenance cost matches his actual available time — an open question for him.

---

## 16. Rejected Patterns

Twenty entries in `REJECTED_PATTERNS.md`, each with the evidence that justified rejection. Headline rejections: black + neon green (measured), monospace body face (measured), percentage skill bars, tools-as-portfolio, "Services" on a job-seeking site, status theatre, terminal chrome without function, marketing filler vocabulary, outlaw framing, WebGL-first navigation, and the fixed generic section order.

Two entries are deliberately *not* rejections: sequential numbering is **deferred** until there is a body of work, and the "personal OS" metaphor is **flagged for caution** because two Awwwards-listed portfolios appear to use it.

---

## 17. Recommended Principles

1. **The work is the spectacle.** Design serves evidence.
2. **Structure over decoration.** Domain clustering and honest states carry more meaning than any effect.
3. **Precision is credibility.** Every heading must survive the Trail of Bits abstract test.
4. **Never blur build state.** Non-negotiable; enforced structurally, not by badge.
5. **Interaction must teach.** If removing it costs only impressiveness, remove it.
6. **Typography carries identity.** Not colour, not motion.
7. **Scarce accent.** ~2% of elements, per the Snellenberg measurement.
8. **Confidentiality is absolute.** Shape of work, never contents.
9. **Cadence over volume.** A reason to return, sustainably.
10. **Degrade gracefully.** Full comprehension without motion, without JavaScript-dependent navigation, on a phone.

---

## 18. Recommended Direction

Full comparison of seven concepts in `/docs/concepts/CONCEPTS.md`.

**Recommended: "The Register"** — the domain × state structure built on the Kettle × Appleton intersection, given a conceptual backbone drawn from the assurance register Het already works with professionally. Every item carries scope, approach, evidence, status and limitations. State honesty becomes the schema rather than a badge, and confidentiality becomes a visible professional signal ("evidence exists, not publishable") rather than an awkward gap.

**Fallback: "The Practice"** — the same structural spine without the audit framing. This becomes the recommendation if Het rejects the GRC-inclusive positioning, since the register metaphor would then be borrowed rather than earned.

**Revision note (per brief §58):** an earlier draft of this section recommended "The Practice" with "Attack Surface" as runner-up. Full concept comparison changed the conclusion — Attack Surface scored poorly on mobile viability, gimmick risk and honesty-when-thin, while The Register outscored The Practice overall. The change is recorded rather than made silently.

The recommendation is provisional in one specific respect: it rests on the brief's own description of Het's experience, because the source documents were not available. It should be confirmed after review of the resume and roadmap.

**Next step:** Het reviews this research and the concept comparison, provides the missing materials, and answers the questions in `USER_INPUT_REQUIRED.md`. No production implementation begins before that.
