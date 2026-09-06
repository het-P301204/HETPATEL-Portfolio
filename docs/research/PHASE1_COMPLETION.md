# Phase 1 Completion Report

**Date:** 2026-08-14 · **Status:** Phase 1 closed. Phase 2 not started.

---

## Phase 1 Objective

Determine what makes personal websites memorable, explorable and worth revisiting; what is saturated in cybersecurity portfolios; what principles transfer from other domains; and which concept direction fits Het Patel specifically.

**Explicitly not:** design, colour, typography, components, or code. None was produced.

---

## Research Completed

**Corpus: 37 entries** (from 21), across three sessions.

| Category | Entries | Notes |
|---|---|---|
| Cybersecurity | 12 | 6 sites inspected in detail + 40 repository descriptions across 2 GitHub topics |
| Confidential work presentation | 5 | New category — Gap 1 |
| Information visualisation | 7 | |
| Creative developer / exceptional | 8 | |
| Editorial / research | 5 | |

**Methods:** runtime browser measurement (3 sites, session 1 only), structural text fetch (majority), Apify rendering (2 sites where fetch was blocked), and structured index sampling.

**Two claims were tested to destruction rather than assumed**: whether confidentiality presentation is distinctive (Gap 1), and whether the register territory was already occupied (`meidie-security-portfolio`). **Both came back negative for the previous recommendation.**

---

## Research Limitations

1. **No runtime measurement after session 1.** The browser tool was blocked by a safety classifier in sessions 2 and 3. All colour and typography findings rest on three sites measured early. Every later entry records colour/typography as `UNKNOWN` rather than guessing.
2. **Creative-developer and exceptional-experience categories remain under-sampled** — 8 against a 30–50 combined target. Motion findings are consequently thin, and the craft conclusions (O7) rest on a single measured site.
3. **Cybersecurity sample is 6 inspected sites.** The saturation revision is MEDIUM confidence.
4. **`meidie.mdpstudio.com.au` retrieved once via markdown extraction** — no interaction, responsiveness, or accessibility assessment.
5. **Sampling bias in GitHub topics:** one user accounted for 6 of 20 repositories in the second sample.
6. **No accessibility or performance auditing of any corpus site.**
7. Several key findings (N3 voice-plus-structure, N4 versioned archive) rest on **single strong instances**.

---

## Strongest Findings

**1. Intellectual honesty is the best-evidenced credibility mechanism.** Six independent sources: Distill's public review, Appleton's uncertainty labelling, R2D3's "Reality check", Our World in Data's stated data shortcomings, Meidie's "non-claims" vocabulary, and Het's own strategy document. **HIGH confidence.**

**2. Effects are not what distinguishes great work.** dennissnellenberg.com — award-winning — measures `canvasCount = 0`. No WebGL, no 3D, no particles. Custom typeface, 192px H1, constant weight 450, accent colour on 8 of ~570 elements. Student security portfolios use *more* visual machinery than the award winner. **HIGH confidence (measured).**

**3. Precision of language is the cheapest differentiator.** Trail of Bits names specific techniques; the archetype says "dedicated cybersecurity professional." Free to close.

**4. Structured presentation and personal voice are compatible.** Olivier Larose runs rigid project metadata alongside an unmistakably personal voice. Meidie confirms it at student stage. **This dissolved the assumed trade-off between rigour and personality.**

**5. Confidential work presentation is a solved problem, not an opportunity.** Five sources. Convention is **silent omission plus visible method** — Doyensec anonymises the client while publishing Unicode codepoints and regex flaws, and never announces what it withheld.

**6. Artifact volume is the wrong battlefield for Het.** A direct peer at the same career stage has eight deployed projects, live demos, a PyPI package and provenance verification. Het has zero verified original repositories.

---

## Cybersecurity Saturation

**Revised during Phase 1.** The initial 3-site sample implied near-universal cyberpunk aesthetics. Expansion to 6 sites showed otherwise.

**Measured cyberpunk instances:** neon green `rgb(44,214,38)` on black (adharvkt); JetBrains Mono as the entire body face with `SYSTEM_STATUS: ONLINE` (zyekh).

**Counter-instances:** bugatsec.dev — *"no terminal aesthetics, matrix-style backgrounds, glitch effects, or hacker stereotypes"*; nikki-65 — *"corporate-ready rather than cyberpunk-influenced"*; meidie — professional throughout.

**Revised: roughly 2 of 6 use cyberpunk motifs.** Avoiding them is **table stakes**, not differentiation.

**The current saturation threat is corporate sameness:** CVSS/severity badges as decoration, logo walls, category badges, framework name-drops without applied evidence, skills-as-badges, stat counters, action-verb bullet walls, and **zero first-person voice**. bugatsec.dev was characterised as achieving *"intentional genericization through absence of personality markers."*

**Also revised:** GRC is present in ~12–15% of sampled repositories — **under-represented, not near-absent.** The earlier "1 of 20" figure was a single-tag artefact.

---

## Cross-Domain Findings

- **Explanatory interaction** (Ciechanowski, R2D3) — absent from every cybersecurity site inspected. Scrollytelling achieves most of the value at far lower cost than manipulable simulation.
- **Epistemic typing** (Appleton, Distill, Pudding) — content classified by confidence rather than format. Absent from the cybersecurity corpus.
- **Multi-axis indexing** (PortSwigger, Our World in Data) — several routes into one body of work; layered entry serves mixed audiences without a mode toggle.
- **Thematic clustering by domain** (Kettle) — converts scattered outputs into a demonstrated field.
- **Process as publishable output** (Data Sketches) — the journey, including dead ends, is content in itself.
- **Small numbered finishable pieces** (Setosa, 10 episodes) — a sustainable format under time constraint.
- **The site as an evolving, self-archiving artefact** (Lynn Fisher, "v. XIX" plus archive) — the only return mechanism found that does not depend on publishing cadence.
- **Role precision** (Jesper Landberg, "lead or sole developer") — states contribution exactly rather than implying sole authorship.

---

## Personal Brand Opportunities

Ranked by value × availability. Five of the top eight cost nothing but discipline.

1. **Intellectual honesty as a practice** — required uncertainty, written as engineering judgment.
2. **Precision of language** — the Trail of Bits abstract test on every heading.
3. **Personality through reasoning** — now the scarce quality in the category.
4. **Judgment from regulated engagements** — the one asset the strongest peer portfolio cannot show.
5. **Role precision** on team-based audit work.
6. **Epistemic state as navigation** — unoccupied in this category.
7. **Process as output** — publishable before results exist.
8. **Craft standards** in a category with essentially none.

**Demoted:** confidentiality handling (table stakes), site-as-security-artefact (already done by a peer), limitations-as-differentiator (validated practice rather than an opening).

---

## Key Rejected Patterns

**Measured and banned:** black + neon green · monospace as body typeface · percentage skill bars · tools-as-portfolio · "Services" on a job-seeking site · credential-count sections · SCREAMING_SNAKE headings · status theatre · terminal chrome without function · marketing filler · outlaw framing · the fixed generic section order.

**Rejected on reasoning:** WebGL/3D-first navigation (`canvasCount = 0` on the award winner) · matrix/glitch/particles · card grids as default containers · large tag taxonomies at low volume · content typed by format rather than status.

**Rejected during Phase 1 revision:** *advertising a ledger of withheld evidence* — contrary to sector practice, would signal inexperience. This collapsed one whole concept.

**Newly rejected (corporate variant):** CVSS badges as decoration · logo walls · category badges · framework name-drops · stat counters · explicit "recruiter view" blocks · zero-voice presentation.

---

## Concept Evolution

| Stage | Recommendation | Confidence |
|---|---|---|
| Initial 7 concepts | The Register (90) — 15-point margin | HIGH |
| After expanded research | The Register (83) — 3-point margin, voice-layer condition | MEDIUM |
| **After final validation** | **Casework (149/180)** | **MEDIUM** |

Two evidence findings drove the change: the confidentiality pillar collapsed (five sources), and the register's evidence half proved occupied by a direct peer (six overlapping features on a live site).

**Concepts eliminated:** Scope & Boundary (premise disproved) · Workbench (fails at n=0) · The Index (Kettle trap) · Control Surface (absorbed) · Practice Log (absorbed).

---

## Final Concept Recommendation

### CASEWORK — organised around decisions rather than artifacts.

**Unit:** a case — context → what had to be decided → how it was approached → what was concluded → **what could not be determined** → what it changed.

**Why it wins:** it is the only direction that survives Scenario A (0–3 written pieces/year), works at zero repositories, centres judgment from regulated engagements, makes VAPT and GRC equal citizens, and solves the personality problem structurally rather than by addition.

**Retained from The Register:** domain × state navigation. **Retained from The Reading Room:** voice, visible reasoning, short numbered pieces.

**Biggest risk:** case volume. Below ~6 cases it reads sparse.

**Confidence: MEDIUM.** Not settled until case volume is confirmed.

---

## Remaining Uncertainties

1. **How many cases can Het actually describe?** The single largest open variable.
2. **Writing capacity** — unknown by instruction; all three scenarios modelled, and the recommendation holds under the weakest.
3. **Motion and craft findings rest on one measured site.**
4. **Creative-developer category under-sampled** against target.
5. **Casework has not been prototyped.** Its monotony risk is theoretical.
6. **Whether "casework" survives as vocabulary** — carries legal/social-work connotations that may need reframing.

---

## Inputs Required Before Phase 2

1. **What CSCRF/IRDAI material is cleared for method-level description?** Determines case volume and therefore the concept's viability.
2. **Roughly how many distinct engagements or investigations could become cases** — professional, academic, or self-initiated? A number, even approximate. **If under six, the recommendation should be reconsidered.**
3. **Does "Casework" sound right to you**, or does it overreach at your career stage? Alternatives: *Working Notes*, *Investigations*, *Practice*.
4. **Which career track** of the strategy document's eight?
5. **GitHub cleanup status** — the profile rebuild was planned for 2–3 days from 2026-08-14.
6. **Confirmation that Phase 1 is closed** and Phase 2 (brand strategy) is authorised.

*No question here is answerable from research. Each requires Het.*
