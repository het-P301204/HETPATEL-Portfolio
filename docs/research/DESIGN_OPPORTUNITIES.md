# Design Opportunity Map

**Date:** 2026-08-14
**Evidence base:** the 21-site corpus in `website-corpus.json` (3 runtime-measured, 13 structurally inspected, 2 listings covering 51 further sites), plus Phase 0 source grounding.

⚠️ **Scope limitation.** The Phase 1 corpus expansion (70–120 sites) could not be performed — all external research tooling was blocked mid-phase by a safety classifier reacting to earlier conversation content. Opportunities below are therefore grounded in the **existing** corpus. Confidence ratings reflect that honestly. Several would be strengthened or overturned by the wider sample.

Confidence key: **HIGH** = measured or multiply-observed · **MEDIUM** = observed in a small sample · **LOW** = reasoned, thinly evidenced.

---

## O1 — Epistemic state as a navigational axis

**Evidence:** Three editorial sites independently type content by confidence — Appleton (Essays "with an agenda" vs Notes "things I don't entirely understand yet"), Distill (Peer-reviewed / Commentary / Editorial), The Pudding ("Updating"). **Zero of the nine cybersecurity sites inspected do anything comparable.**

**Confidence: HIGH** (three independent instances; clean absence in the comparison category).

**Het application:** Solves brief §6 structurally rather than cosmetically. Build state becomes a primary axis, not a badge.

**Why it's an opportunity and not just a nicety:** Het's *specific* problem is a large gap between planned and built. Most portfolios can hide that. His can't — 219 concepts against near-zero output. Epistemic typing converts the site's biggest liability into its most distinctive structural feature.

**Risk:** Appleton's vocabulary is strongly hers. Adopt structure, derive security-native labels. Also requires ongoing discipline — labels that drift out of date are worse than no labels.

---

## O2 — Confidentiality as the demonstration — ❌ **REVISED / LARGELY DISCONFIRMED (2026-08-14)**

### PREVIOUS FINDING *(retained for history)*
> **Evidence:** Het performs CSCRF/IRDAI audit work he cannot publish. Phase 1 research found no site in the corpus handling this problem. **Nobody in the corpus is solving "I did significant work I may not describe."**
> **Confidence: MEDIUM.** *"A wider sample of consultancy sites might show prior art."*
> **Het application:** A structure that records *that evidence exists and is withheld* — turning discretion into a visible professional signal.
> **Why this is the strongest genuinely-Het opportunity:** it arises from his actual constraints and cannot be produced by a prompt.

### NEW EVIDENCE

The wider sample was gathered, and it showed exactly the prior art the previous entry warned might exist.

- **Anonymised case studies are a codified practice** with published templates and how-to guides. The standard device is a descriptor label — *"a global logistics provider"*, *"a Series B fintech"*.
- **Bishop Fox** mixes named clients (Google, Amazon, LastPass) with anonymised ones (*"a Fortune 500 utility"*), in a problem → approach → outcome format.
- **Doyensec** anonymises the client (*"a Communication Platform as a Service"*) while publishing substantial technical depth — specific Unicode codepoints, regex flaws, browser-behaviour differences.
- **Include Security** publishes **no case studies at all**, resting entirely on methodology and team credentials — described as *"standard practice in security consulting where discretion itself signals trustworthiness."*
- **Pentest reporting norms** codify redacted previews, `[REDACTED]` markers, and treat the methodology section as the credibility signal. *"A report with no methodology section is a red flag."*

**Confidence: HIGH.** Five independent sources.

### REVISED CONCLUSION

**Presenting confidential work well is a solved, documented problem.** It is the professional-services default, not an opportunity.

**The sharper correction — and the actionable one:** the sector convention is **silent omission plus visible method**. Doyensec withholds endpoints and architecture *without announcing it*. Nobody publishes a ledger of what they cannot say.

So "advertise the withholding" is not merely unoriginal — it is **contrary to practice**, and to a sector-literate reader it would signal inexperience rather than discretion.

**Revised Het application:** adopt the convention properly — descriptor-label anonymisation, genuine methodological depth, silent omission of specifics. This signals professional fluency. **It must not be positioned as an original contribution or as a structural centrepiece.**

**Revised rank: from #3 (very high) to TABLE STAKES** — necessary competence, not differentiation.

**Knock-on effects:** removed a pillar from The Register and collapsed the *Scope & Boundary* concept entirely (66 → 48). See `../concepts/CONCEPT_REEVALUATION.md`.

---

## O3 — The three-tier temporal model

**Evidence:** Miessler separates named projects from writing; Pudding marks "Updating"; the roadmap distinguishes spine from independent repos. **No site in the corpus presents a person across present / becoming / intended as one coherent structure.**

**Confidence: MEDIUM.**

**Het application:** CURRENT (verified professional work) → EMERGING (actively building) → FUTURE (roadmap). Directly per your Phase 0 instruction.

**Why it matters now:** the EMERGING tier is currently empty. A site built on this model makes that visible *and* makes filling it the obvious narrative. The site becomes something Het grows into — and each new repository visibly moves the middle tier rather than being appended to a flat list.

**Risk:** if EMERGING stays empty for months, the structure advertises stagnation. The model only works if Het actually ships. That is a feature (accountability) and a hazard (public stall).

---

## O4 — Explanatory interaction for security concepts

**Evidence:** Ciechanowski embeds manipulable simulations at the point of confusion; Comeau and nan.fyi embed explorable examples. **Nothing comparable appeared in any of the nine cybersecurity sites inspected.**

**Confidence: HIGH** on the absence in this corpus; **MEDIUM** on transferability.

**Het application:** Security is full of relational systems that static text explains badly — attack paths, entitlement chains, trust boundaries, control-to-evidence mapping, blast radius. An interactive explanation of *control mapping* would demonstrate GRC understanding without touching a single confidential detail.

**Risk:** very high production cost. Ciechanowski publishes a few times a year and is exceptional at it. A half-finished explorable is worse than prose. **Reserve for two or three flagship pieces; never make it the site's baseline.**

---

## O5 — Domain clustering instead of chronology

**Evidence:** Kettle groups research by attack class; PortSwigger offers three parallel axes. The archetype uses single-page anchor scroll (3 of 3 inspected).

**Confidence: HIGH.**

**Het application:** The roadmap's 12 tracks are a ready-made taxonomy — but only tracks he has actually entered may become navigation. Empty tracks live in the roadmap view, marked as intent.

**Risk:** with few items, clustering advertises sparseness. Show only entered domains; let the taxonomy reveal itself as it fills.

---

## O6 — Precision as the credibility mechanism

**Evidence:** Trail of Bits titles name specific techniques ("polynomial-based cryptanalytic technique", "MBA obfuscation"). The archetype says "dedicated cybersecurity professional", "proven track record", "unwavering commitment to excellence". Het's own resume says "Passionate about protecting digital assets."

**Confidence: HIGH.**

**Het application:** Free, immediate, and the single sharpest separator from the archetype. Every heading must survive: *would this sentence appear in a Trail of Bits abstract?*

**Risk:** none identified. This is the cheapest high-value change available.

---

## O7 — Craft standards in a category that has none

**Evidence:** dennissnellenberg.com — **`canvasCount = 0`**, custom typeface, H1 at 192px, constant weight 450, accent colour on 8 of ~570 elements (~2%). Against: Poppins on 164/174 elements (adharvkt), JetBrains Mono as the entire body face (zyekh). The Awwwards portfolio category listing showed 31 featured sites — **design, film and studio portfolios; security engineering essentially absent.**

**Confidence: HIGH** (measured).

**Het application:** Meeting award-gallery craft standards in a category with none is pure arbitrage. And it costs typography and restraint, not WebGL.

**Risk:** craft without substance invites "where's the work?" — currently Het's real exposure. Craft must not outrun content.

---

## O8 — Limitations as a required field

**Evidence — double-validated, and the strongest finding in the project.** Independently reached from two directions:
- *Editorial research:* Distill's public review threads; Appleton's uncertainty labelling.
- *Het's own strategy document:* "Honesty about limitations. A documented list of what the tool does not do, and why, is one of the most credible things a portfolio can contain. Overclaiming is the fastest way to lose a technically strong reviewer."

**Confidence: HIGH.**

**Het application:** Make *limitations* mandatory on every entry — project, case study, or note.

**Why it defeats genericity specifically:** generated portfolio copy is uniformly confident, because confidence is the default register of generated text. A site that systematically states what its work does *not* address is structurally the opposite of what a prompt produces. It is also, per both sources, what the target reader most wants to see.

**Risk:** could read as self-deprecating if the tone slips. Limitations must sound like engineering rigour, not apology.

---

## O9 — Cadence over volume

**Evidence:** tl;dr sec's 340+ issues; PortSwigger's annual "Top 10"; Miessler's archive to 1999.

**Confidence: HIGH.**

**Het application:** The one credibility mechanism fully available to someone early-career. You cannot fake ten years; you can publish consistently and let the archive accumulate. Date everything from day one so the archive starts compounding immediately.

**Risk:** a cadence promise Het can't sustain is worse than none. **Depends entirely on his honest capacity — still an open question.**

---

## O10 — Architecture designed to be grown into

**Evidence:** Miessler's named projects with their own homes; Pudding's sequential numbering; the roadmap's spine-plus-independent structure.

**Confidence: MEDIUM.**

**Het application:** Per your GitHub instruction — build a system that accommodates a strong ecosystem later without redesign. Adding a repository, a domain, or a track must be a data change, never an architecture change.

**Risk:** over-engineering for a future that may not arrive. The structure must look *complete and honest* at n=1, not like scaffolding awaiting content. This is the hardest constraint in the whole project.

---

---

# NEW OPPORTUNITIES — added 2026-08-14

## O11 — Personality as the scarce differentiator ⭐ *(strongest new finding)*

**Evidence:** The two newly inspected cybersecurity portfolios both **avoid** hacker aesthetics entirely. bugatsec.dev — "no terminal aesthetics, matrix-style backgrounds, glitch effects, or hacker stereotypes"; nikki-65 — "corporate-ready rather than cyberpunk-influenced." bugatsec was characterised as achieving *"intentional genericization through absence of personality markers."*

**Confidence: MEDIUM** (5 inspected sites).

**Revised threat model:** the saturation risk has moved. Avoiding cyberpunk clichés is now **table stakes**. The new sameness is corporate — badges, CVSS labels, framework name-drops, action verbs, zero voice.

**Het application:** voice is now the scarce quality. It is also the one thing no template and no generator supplies.

**Counter-evidence that makes this achievable:** **Olivier Larose** presents rigidly structured project records (Project / Category / Client / Year) *while* sounding unmistakably like a person. Structure and personality are not in tension.

**Risk:** forced personality is worse than none. Voice must be Het's actual register, not a costume.

---

## O12 — The site as a versioned, self-archiving artefact

**Evidence:** **Lynn Fisher** runs at "v. XIX" with a browsable archive of every past version. The site's own evolution is the reason to return.

**Confidence: MEDIUM** (single strong instance).

**Het application:** the **only** return mechanism found that does not depend on publishing cadence — which matters because Het's writing capacity is unconfirmed. It also converts design iteration into content.

**Risk:** requires periodic redesign effort. Closely identified with that site — take the principle, not the "v. XIX" presentation.

---

## O13 — Process as publishable output

**Evidence:** **Data Sketches** treats technical process write-ups as first-class deliverables, documenting each step and showing "there is never just one right answer." **R2D3** includes a "Reality check" section arguing against its own apparent success.

**Confidence: MEDIUM.**

**Het application:** directly solves "what does Het publish before he has impressive results?" He can publish *how he approached* a problem — including dead ends — without needing an outcome. Pairs naturally with O8.

**Risk:** process writing without any eventual outcome becomes conspicuous.

---

## O14 — Small, numbered, finishable pieces

**Evidence:** **Setosa** runs 10 numbered episodes, one concept each.

**Confidence: MEDIUM.**

**Het application:** **Revises the earlier position** that numbering should be deferred until there is a body of work. Numbering works at n=10 precisely *because* each piece is small and complete. A realistic publishing format for constrained time — the opposite of an open-ended blog that stalls.

---

## O15 — Layered entry paths instead of audience segmentation

**Evidence:** **Our World in Data** serves casual and expert readers via "Popular pages" alongside a systematic taxonomy — no mode toggle. **Confidence: MEDIUM.**

**Het application:** confirms the layering strategy already chosen for the recruiter-vs-practitioner tension.

---

## O16 — Role precision on collaborative work

**Evidence:** **Jesper Landberg** states "lead or sole developer" per project rather than implying sole authorship.

**Confidence: LOW–MEDIUM** (single instance, but a clean one).

**Het application:** unusually relevant. Het's CSCRF/IRDAI work was performed as part of a team; stating his exact contribution is both more honest and more credible than ambiguity. Should be a required field alongside limitations.

---

## Ranked by (value × availability now) — REVISED 2026-08-14

| # | Opportunity | Value | Available today? | Change |
|---|---|---|---|---|
| 1 | **O8** Limitations as required field | Very high | ✅ Free | ↑ now 5 independent sources |
| 2 | **O6** Precision language | Very high | ✅ Free | — |
| 3 | **O11** Personality as differentiator | Very high | ✅ Free | ⭐ NEW |
| 4 | **O1** Epistemic state as navigation | High | ✅ Structural | — |
| 5 | **O3** Three-tier model | High | ✅ Structural | — |
| 6 | **O16** Role precision | High | ✅ Free | ⭐ NEW |
| 7 | **O7** Craft standards | High | ✅ Design investment | — |
| 8 | **O13** Process as output | High | ✅ Immediately | ⭐ NEW |
| 9 | **O12** Versioned self-archive | Medium-high | ✅ Structural | ⭐ NEW |
| 10 | **O14** Numbered finishable pieces | Medium-high | ✅ Format choice | ⭐ NEW |
| 11 | **O15** Layered entry | Medium | ✅ Structural | ⭐ NEW |
| 12 | **O5** Domain clustering | Medium-high | ⚠️ Thin until domains fill | — |
| 13 | **O10** Growth architecture | Medium | ✅ Structural | — |
| 14 | **O9** Cadence | High long-term | ❓ Depends on capacity | — |
| 15 | **O4** Explanatory interaction | High but costly | ⚠️ Cheaper via scrollytelling | ↑ feasibility |
| — | ~~**O2** Confidentiality as demonstration~~ | **Table stakes** | ✅ Competence, not differentiation | ❌ **DEMOTED** |

**Five of the top eight now cost nothing but discipline** — limitations, precision, personality, role precision, and process. None requires budget, seniority, or built work.

---

## What the blocked research would most likely have changed

Stated so the gap isn't silently forgotten:

1. **O2's novelty is the least-tested claim.** A wider sample of security consultancy and Big-4 advisory sites might reveal established conventions for presenting confidential engagement work. **This is the highest-priority target if research resumes.**
2. **O4's absence in cybersecurity** rests on nine sites. A broader sample might find counterexamples.
3. **Genericity counts** ("3 of 3", "2 of 2") are small-sample and would become far more defensible at n=25.
4. **The exceptional/creative-developer and information-visualisation categories are under-sampled** — 1 measured site and 2 respectively, against the 20–30 and 10–20 targets. Motion findings in particular remain thin.
