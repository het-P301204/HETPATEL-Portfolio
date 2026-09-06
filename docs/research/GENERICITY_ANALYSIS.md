# Genericity Analysis

**Date:** 2026-08-14
**Sample:** See `website-corpus.json`. Cybersecurity category: 3 sites inspected in depth (2 with measured runtime values, 1 text-only), plus 20 repository self-descriptions from the GitHub `cybersecurity-portfolio` topic, plus 5 professional/practitioner sites (Kettle, Curry, rez0, Miessler, tl;dr sec) and 2 institutional research sites (PortSwigger, Trail of Bits).

---

## 0. A warning about this document

The sample is small and hand-collected. Apify was unavailable, so no large-scale crawl backs these numbers.

Therefore: **scores below are analyst judgements, not measurements.** They are recorded to force explicit reasoning and to be argued with — not to be cited as statistics. Where something *was* actually measured (a colour value, a font stack, an element count), it is marked **MEASURED**.

The brief (§20) warns against inventing precise statistical conclusions the dataset does not support. This document tries to obey that by separating what was counted from what was judged.

---

## 1. What was actually measured

These are hard facts from runtime inspection, not impressions.

| Site | Measured finding |
|---|---|
| adharvkt.github.io | Accent `rgb(44, 214, 38)` — neon green — on `rgb(0,0,0)` black. Green appears on 31 elements, black on 343. Single typeface: Poppins (164/174 sampled elements). |
| zyekh.cloud | Body font `JetBrains Mono` applied document-wide (27/45 sampled elements). Background `rgb(18,19,26)`. Literal strings present: `SYSTEM_STATUS: ONLINE`, `SYSTEM_OVERVIEW`, `CORE_REPOSITORIES`, `TECHNICAL_DOMAIN`, `INITIALIZE CONT[ACT]`. |
| dennissnellenberg.com | **`canvasCount = 0`.** Custom typeface `Dennis Sans`. H1 at 192px, constant weight 450 across all heading levels. Charcoal `rgb(28,29,32)` on 376 elements; blue accent `rgb(69,92,233)` on only 8. |

The single most useful measured fact in this research:

> The award-winning creative-developer portfolio contains **no canvas element at all**, while the student cybersecurity portfolios lean on visual motifs to signal sophistication.

Effects are not what separates the top of the field from the bottom. Craft is.

---

## 2. Structural patterns observed in the cybersecurity sample

Counted where countable.

**Fixed section order.** Both fully-inspected student portfolios use a near-identical sequence:
- adharvkt: About → Skills → Experience → Education → Courses → Internships → Licenses → Services → Projects → Contact
- raifkaya: About → Portfolio → Services → Skills → Experiences → Contact

**"Services" on a personal portfolio: 3 of 3** inspected student/practitioner personal sites (adharvkt, zyekh, raifkaya) include a Services section. rez0 does too, but rez0 is an actual consultancy, so it is legitimate there. On a student site seeking employment, "Services" is inherited template furniture.

**Percentage skill bars: 2 of 2** where skills were presented at all.
- adharvkt: "SOC 99%", "NMap 95%"
- raifkaya: "Network Mapper 90% Professional 5 years experience"

**Tools presented as portfolio items: 1 of 3 explicitly** (raifkaya lists Acunetix, Burp Suite, Nmap, Wireshark, SQLMap under "Portfolio"), with adharvkt's four "projects" (IPGeo, PhoneInfoga, WhatsApp Chat Analyzer, Port Scanner) being tool-usage exercises rather than engineering.

**Self-description vocabulary.** From the 20 GitHub descriptions, "modern, responsive portfolio website" appears verbatim or near-verbatim at least twice. One description reads *"Glassmorphic terminal UI with matrix backdrop"* — three separate forbidden-list items (§26) in seven words.

**Marketing filler in a technical field.** adharvkt: "dedicated cybersecurity professional", "proven track record", "unwavering commitment to excellence". Compare Trail of Bits, whose titles name specific techniques ("polynomial-based cryptanalytic technique", "MBA obfuscation"). The contrast in precision is the contrast in credibility.

---

## 3. Scored dimensions

Scale: 0 = wholly generic, 10 = wholly distinctive. **Analyst judgement.**

### 3.1 The cybersecurity student/junior portfolio archetype

| Dimension | Score | Reasoning |
|---|---|---|
| Visual distinctiveness | **1 / 10** | Black + neon green, or dark + monospace. Both variants measured directly. |
| Interaction distinctiveness | **1 / 10** | Anchor-scroll on a single page in all inspected cases. No discovery, no state, no exploration. |
| IA distinctiveness | **1 / 10** | Same section order across independent sites by independent authors — evidence of shared template ancestry. |
| Copy distinctiveness | **1 / 10** | "Dedicated professional", "proven track record", "I use [tool] to [action]". |
| Brand distinctiveness | **1 / 10** | Swap the name and nothing breaks. This is precisely the brief's §54 Test 1 failure. |
| Technical credibility *to a security professional* | **2 / 10** | Tool familiarity ≠ engineering. Percentage bars are unfalsifiable and read as decoration. |
| Technical credibility *to a recruiter/HR screen* | **5 / 10** | Legible, keyword-rich, ATS-friendly. This is why the archetype persists: it partially works on the least discerning reader. |

### 3.2 The senior practitioner site (Kettle, Curry, Miessler)

| Dimension | Score | Reasoning |
|---|---|---|
| Visual distinctiveness | **3 / 10** | Deliberately plain. Distinctiveness is not the goal. |
| Interaction distinctiveness | **2 / 10** | Read and navigate. Nothing more. |
| IA distinctiveness | **7 / 10** | Kettle's thematic clustering by attack class; Miessler's named-project spokes. Structure carries real meaning. |
| Copy distinctiveness | **8 / 10** | Precise, specific, technique-named. |
| Brand distinctiveness | **7 / 10** | Miessler's thesis; Kettle's body of research. Identity comes from substance. |
| Technical credibility | **10 / 10** | The work is the argument. |

**The critical asymmetry:** senior sites score *low* on visual distinctiveness and *high* on credibility. Junior sites invert it — and score low on both anyway, because the visual language they choose is itself a template.

### 3.3 What this implies for Het

Het cannot simply copy the senior austerity. Kettle can publish a bare text page because his name carries the credibility; an unknown engineer doing the same reads as unfinished rather than confident. Nor should he copy the junior template, which fails every test in §54.

The gap in the market is the combination almost nobody occupies:

> **Senior-grade structural and linguistic rigour, delivered with genuine design craft.**

Not "a security portfolio that looks nice." A site whose *organisation and vocabulary* are those of a research lab, and whose *typography and restraint* meet the standard of the Awwwards portfolio category — where, per the corpus, security engineering is essentially absent.

---

## 4. Where the field is NOT saturated

From the 20-repository GitHub sample:

- **SOC / SIEM / Splunk / detection labs: heavily saturated.** The default project archetype.
- **GRC / audit / compliance: sparse.** 1 of 20 (`victusIn/enterprise-grc-framework-alignment`, NIST 800-53 / ISO 27001 / COBIT), at 1 star.
- **Interactive explanation of security concepts: absent from the sample entirely.** Nothing resembling Ciechanowski-style explorable diagrams appeared in any cybersecurity site inspected.
- **Honest maturity labelling of work (built / in progress / research): absent from the cybersecurity sample.** It appears only in the editorial category (Appleton, Distill, Pudding).

This is the most actionable finding in the research.

Het's professional experience — **VAPT plus GRC, CSCRF and IRDAI audit work** — sits precisely in the sparse region. The saturated crowd competes on SOC labs. Het has regulated-sector audit exposure, which that crowd does not, and which is much harder to acquire independently.

**Caveat, stated plainly:** this is 20 repositories from a single topic tag. It is suggestive, not conclusive. It should be treated as a hypothesis worth acting on, not a proven market analysis.

---

## 5. The genericity tests (brief §54), applied now as a baseline

Applied to the *archetype*, to establish what the final design must beat:

| Test | Archetype result |
|---|---|
| 1 — Could this belong to 100 other students? | **Fails.** Demonstrably: independent sites share section order, palette and phrasing. |
| 2 — Could a prompt produce this? | **Fails.** "Make me a modern cybersecurity portfolio" would produce it almost exactly. |
| 3 — Without the name, is it still theirs? | **Fails.** Nothing is person-specific. |
| 4 — One distinctive idea remembered? | **Fails.** No idea is presented, only credentials. |
| 5 — Reason to return next month? | **Fails.** Static by construction. |
| 6 — Real engineering vs hacker aesthetic? | **Fails.** Aesthetic substitutes for evidence. |

These six tests must be re-run against the chosen concept before any implementation begins, and again before launch.

---

## 5A. REVISION — 2026-08-14 — the saturation threat has moved

### PREVIOUS FINDING
Based on 3 inspected cybersecurity sites (2 runtime-measured), the analysis implied the cyberpunk aesthetic was close to universal: neon green `rgb(44,214,38)` on black (adharvkt), JetBrains Mono site-wide with `SYSTEM_STATUS: ONLINE` (zyekh).

### NEW EVIDENCE
Two further cybersecurity personal sites inspected:

- **bugatsec.dev** (Ranveer Kohli, "Security Researcher & Bug Bounty Hunter") — *"Notably absent: no terminal aesthetics, matrix-style backgrounds, glitch effects, or hacker stereotypes."* Clean typography, company logos, CVSS severity labels, skills grouped into conceptual categories.
- **nikki-65.github.io** (Junior SOC Analyst) — *"avoids heavy hacker/terminal aesthetics… corporate-ready rather than cyberpunk-influenced."* Badge-style skills, direct links to PDF and repository artefacts.

### REVISED CONCLUSION

**2 of 5 inspected cybersecurity personal sites use cyberpunk motifs. 3 of 5 are professional/corporate.**

**Confidence: MEDIUM** (n=5). The earlier implication of near-universal hacker aesthetics was **overstated** — an artefact of a 3-site sample.

**The threat model changes accordingly:**

| | Previously assumed | Revised |
|---|---|---|
| Primary genericity risk | Neon-green cyberpunk cliché | **Corporate sameness** |
| Avoiding hacker aesthetics | A differentiator | **Table stakes** |
| The scarce quality | Craft | **Personality / voice** |

The professionalised portfolios have their own failure mode, and it is well documented in the sample: bugatsec.dev was characterised as achieving *"intentional genericization through absence of personality markers."* Competent, credible, entirely forgettable.

**New saturation markers to avoid** (the corporate variant):
- CVSS/severity badge systems as decoration
- Company logo walls as the primary credibility device
- Category badges on projects (OPEN SOURCE / SECURITY TOOL / EDUCATION)
- Framework name-dropping (MITRE ATT&CK, NIST) without demonstrated application
- Action-verb bullet lists ("Built…", "Analyzed…", "Developed…")
- Skills-as-coloured-badges
- *"Proactive"*, *"hands-on"*, *"responsible disclosure"* as self-descriptors
- **Zero first-person voice**

**Direct consequence for concept selection:** The Register — a structured, tabular, documentary concept — sits closest to this new failure mode. This is now its principal risk, and it is empirically demonstrated rather than hypothetical. Mitigation (a mandatory voice layer, with Olivier Larose as the worked precedent) is recorded in `../concepts/CONCEPT_REEVALUATION.md`.

### Retained from the previous analysis
The measured findings stand unchanged: neon green and monospace-as-body-face were directly measured and remain banned. Percentage skill bars, tools-as-portfolio and the fixed section order were observed and remain rejected. **What changed is their prevalence, not their undesirability.**

---

## 5B. REVISION — GRC scarcity was overstated

**PREVIOUS FINDING:** "Of 20 repositories in the GitHub `cybersecurity-portfolio` sample, exactly one is compliance-oriented, at one star."

**NEW EVIDENCE:** a second topic sample (`security-portfolio`, 20 repos) shows materially more compliance work — a GRC-named account (`aarondutton-grc`), a Microsoft Purview DLP governance lab, a vulnerability-operations centre with audit workflows, and a portfolio built on *"scheduled evidence freshness, artifact trust."*

**REVISED CONCLUSION:** across ~34 effectively independent repositories, roughly **4–5 (~12–15%) are compliance-oriented.** GRC is **under-represented, not near-absent.**

**Sampling caveat now recorded:** one user (`hkevin01`) accounts for 6 of the 20 in the second sample, several unrelated to security portfolios, which inflates the raw count.

**Consequence:** Het's GRC positioning remains valid but must be stated **more modestly**. "Almost nobody does this" is not supportable. "A minority do this, and regulated-sector audit access remains hard to self-acquire" is.

⚠️ **`MDP-Studio/meidie-security-portfolio` — "scheduled evidence freshness, artifact trust" — was NOT inspected** and may occupy ground adjacent to the register concept. Highest-priority remaining check.

---

## 6. Honest limitations

0. **UPDATE 2026-08-14:** limitations 1 and 5 below were partially addressed by the continuation session (now 5 inspected sites, 40 repository descriptions) — and doing so **overturned** two conclusions. See §5A and §5B. Limitation 2 is now *worse*: the browser runtime was unavailable in the continuation session, so no new entry carries measured colour or typography.

1. **Three cybersecurity sites inspected in depth is a small sample.** The consistency across them is striking, but three is three. *(Now five — and the additional two disconfirmed the pattern. See §5A.)*
2. **Colour and motion are UNKNOWN for every text-fetched site.** Any claim about their visual design would be fabrication and has been withheld.
3. **The 31 Awwwards portfolio sites were not individually inspected.** They establish population context only.
4. **No accessibility or performance auditing was performed** on any corpus site. No claims are made about either.
5. **Selection bias:** sites were reached via search and one GitHub topic tag. Excellent security portfolios that rank poorly or sit outside that tag are invisible to this method.
6. **The `PouyaOS` / `ZUI_OS` observation** in the corpus is inferred from names in a listing, not from inspection. It is a caution flag about the OS metaphor's currency, nothing stronger.
