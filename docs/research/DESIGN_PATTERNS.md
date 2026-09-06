# Design Pattern Taxonomy

**Date:** 2026-08-14
**Basis:** Patterns clustered from `website-corpus.json`. Every pattern below was observed on at least one inspected site; the site is named. Patterns not observed in this research are not listed, however familiar they may be.

Each pattern carries a verdict for this project:
- **ADOPT** — take it
- **ADAPT** — take the principle, change the expression
- **AVOID** — observed and rejected
- **CONDITIONAL** — only under a stated condition

---

## 1. Navigation

| Pattern | Observed on | Verdict |
|---|---|---|
| Single-page anchor scroll, 4–6 fixed links | adharvkt, raifkaya, zyekh | **AVOID.** The archetype's default. Cannot scale to a 12-track ecosystem. |
| Minimal 3-item nav (Work / About / Contact) | dennissnellenberg (MEASURED) | **ADAPT.** The discipline is right; three items is too few for Het's content range. |
| Thematic clustering by domain | jameskettle (research grouped by attack class) | **ADOPT.** Highest-value navigational idea in the corpus. Maps onto the 12 tracks. |
| Multi-axis entry (topic / person / date) | portswigger | **ADOPT** (minus the person axis — Het is one person). Domain + state + chronology. |
| Hub-and-spoke to named projects | danielmiessler | **ADOPT.** Lets named spine projects grow their own homes. |
| Content typed by epistemic status | maggieappleton (Essays / Notes / Patterns) | **ADOPT — structurally decisive.** See §6 below. |
| Large tag taxonomy (100+) | trailofbits | **AVOID for now.** Requires volume Het does not yet have. Revisit at scale. |
| Overlay menu with grouped sections | dennissnellenberg | **CONDITIONAL.** Fine once primary nav exceeds ~5 items. |
| Minimap / overview of a complex structure | observablehq | **ADOPT IF a graph is used.** Mandatory mitigation, not optional polish. |

---

## 2. Project & work presentation

| Pattern | Observed on | Verdict |
|---|---|---|
| Tools listed as portfolio items | raifkaya (Acunetix, Burp, Nmap, Wireshark, SQLMap) | **AVOID.** The defining error of the category. Het uses the same tools — he must present them as method, never as inventory. |
| Percentage skill bars | adharvkt, raifkaya | **AVOID.** Unfalsifiable numbers read as decoration. |
| Credential-count sections | adharvkt ("COURSES COMPLETED", "LICENSES ACCQUIRED") | **AVOID.** Accumulation is not capability. |
| Plain linked text under thematic headings, no cards | jameskettle | **ADAPT.** Right structure; needs more scaffolding for an unknown author. |
| Card carrying a real claim (finding stated in the excerpt) | samcurry | **ADOPT.** The legitimate use of a card: it must carry a claim, not a title and a badge. |
| Abstract of 1–2 sentences per item | trailofbits | **ADOPT.** Respects skimming without dumbing down. |
| Technique named precisely in the title | trailofbits | **ADOPT.** Precision *is* the credibility mechanism. |
| Named projects with their own identity | danielmiessler (TELOS, PAI) | **ADOPT.** The roadmap's spine projects are already named entities. |
| Sequential numbering of a body of work | pudding.cool (#224…#198) | **CONDITIONAL.** Powerful once there is a body. Premature at n=3; revisit. |
| Anonymised case study (objective/scope/role/approach/deliverable/lessons) | *Not observed in corpus* | **ADOPT** — per brief §4. Recorded honestly as a brief requirement, not a research finding. |

---

## 3. Content honesty & state

| Pattern | Observed on | Verdict |
|---|---|---|
| Epistemic typing of content | maggieappleton | **ADOPT.** Essays = confident; Notes = "things I don't entirely understand yet". |
| Explicit "Updating" / living state | pudding.cool | **ADOPT.** Both honest and a return hook. |
| Visible ageing ("over 3 years ago") | maggieappleton | **ADOPT.** Most portfolios hide staleness; surfacing it builds trust. |
| Public, linked review process | distill.pub | **ADAPT** → a "how I verified this" convention. Security-native. |
| Article-type labels before the click | distill.pub | **ADOPT.** |
| Co-discoverer credit | samcurry | **ADOPT.** Cheap, and a real maturity signal. |

**Three independent editorial sites converge on typed content states.** No cybersecurity site in the sample did. This is both the strongest cross-domain finding and the direct solution to brief §6 (BUILT / IN PROGRESS / RESEARCH / FUTURE must never blur).

---

## 4. Typography

| Pattern | Observed on | Verdict |
|---|---|---|
| Custom/proprietary typeface | dennissnellenberg ("Dennis Sans", MEASURED) | **ADAPT.** A licensed distinctive face; a bespoke one is out of budget scope but the principle — type as the primary identity asset — holds. |
| Hierarchy by size alone, constant weight | dennissnellenberg (192/78.4/48/41.6px at weight 450, MEASURED) | **ADOPT.** Disciplined and confident. |
| Monospace as the entire body face | zyekh (JetBrains Mono site-wide, MEASURED) | **AVOID.** Per brief §39. Monospace is an accent for code, identifiers and data — never the voice. |
| ALL-CAPS section headings | adharvkt | **AVOID.** Reads as template furniture. |
| SCREAMING_SNAKE_CASE headings | zyekh (`SYSTEM_OVERVIEW`) | **AVOID.** Costume, not architecture. |
| Single ubiquitous Google font | adharvkt (Poppins, 164 elements) | **AVOID.** Zero identity contribution. |
| Lowercase italic headlines | pudding.cool | **AVOID.** Strongly owned by that publication. |

---

## 5. Colour

| Pattern | Observed on | Verdict |
|---|---|---|
| Black + neon green | adharvkt (`rgb(44,214,38)`, MEASURED) | **AVOID.** Explicitly banned, §26 — and now measured in the wild. |
| Dark navy-black + greys, no neon | zyekh (`rgb(18,19,26)`, MEASURED) | **NOTED.** The cyber aesthetic is modernising. Being "dark but not neon" is no longer differentiating. |
| Two-colour system + one scarce accent | dennissnellenberg (accent on 8 of ~570 elements, MEASURED) | **ADOPT.** Accent scarcity is the concrete rule: an accent used everywhere is a theme; used rarely, it is a signal. |
| Colour as semantic labelling inside diagrams | ciechanow.ski | **ADOPT.** Colour earns its place when it encodes meaning. |
| Single brand accent | portswigger (orange) | **ADOPT.** |

---

## 6. Interaction & motion

| Pattern | Observed on | Verdict |
|---|---|---|
| Interaction placed at the point of confusion | ciechanow.ski | **ADOPT — highest-value cross-domain transfer.** |
| Reader-driven motion (sliders, drag), not autoplay | ciechanow.ski | **ADOPT.** Accessible and respectful by default. |
| Progressive complexity (simple case first, then scale) | ciechanow.ski, linear.app | **ADOPT.** |
| Reactive re-computation on input | observablehq | **CONDITIONAL.** Only where a real model is being explored. |
| Explorable code/demo inside an article | joshwcomeau, nan.fyi | **ADOPT.** |
| Drivable 3D world as navigation | bruno-simon (listed only) | **AVOID.** Justified for a Three.js educator; pure decoration for a security engineer. |
| Terminal chrome without terminal function | zyekh | **AVOID.** Promises interactivity it does not deliver. |
| Terminal reference as in-group signal | rez0 (tmux-style footer) | **CONDITIONAL.** The *only* defensible use found: neutral to a recruiter, precise to a practitioner. Never the primary aesthetic. |

**Governing test, derived from Ciechanowski vs Bruno Simon:**

> An interaction earns its place if removing it would cost the visitor *understanding*.
> If removing it would only cost *impressiveness*, remove it.

---

## 7. Return-visit mechanics

| Pattern | Observed on | Verdict |
|---|---|---|
| Sustained cadence as credibility | tldrsec (340+ issues) | **ADOPT.** Available to someone early-career: you cannot fake ten years, you can publish weekly. |
| Recurring dated artefact | portswigger (annual Top 10) | **ADOPT later.** Strong scheduled-return hook once there is standing to publish one. |
| Explicit time contract ("7 min/week") | tldrsec | **ADAPT.** Respecting the reader's budget is rare and effective. |
| Long archive as proof of longevity | danielmiessler (to 1999) | **NOTED.** Unavailable to Het now; argues for dating everything from day one so the archive begins accruing immediately. |
| Curated "start here" entry points | joshwcomeau | **ADOPT.** A visitor landing on the weakest piece may never see the best. |

---

## 7A. Confidential-work presentation *(new category, 2026-08-14)*

| Pattern | Observed on | Verdict |
|---|---|---|
| Descriptor-label anonymisation ("a Fortune 500 utility", "a Series B fintech") | Bishop Fox; codified B2B guidance | **ADOPT.** The sector standard. |
| Anonymous client + full technical depth | Doyensec | **ADOPT — the best model found.** Hide the client, show the engineering. |
| **Strategic silent omission, no disclaimers** | Doyensec | **ADOPT.** Withhold specifics without announcing it. |
| No case studies at all; methodology + team credentials only | Include Security | **NOTED.** Viable for a firm; too austere for an unknown individual. |
| Methodology section as the credibility substitute | Pentest reporting norms | **ADOPT.** Test type, access level, window, standard followed. |
| `[REDACTED]` markers on sample reports | Pentest portfolio norms | **CONDITIONAL.** Legitimate for a report artefact; **not** as a site-wide device. |
| **Advertising a ledger of withheld evidence** | *Not observed anywhere* | **REJECT.** Contrary to sector practice. Would signal inexperience. |
| Role precision on shared work ("lead or sole developer") | Jesper Landberg | **ADOPT.** Directly applicable to team-based audit work. |

**Governing correction:** the previous taxonomy assumed making confidentiality visible was the opportunity. Five independent sources show the opposite — the convention is to be quietly discreet and loudly methodical.

---

## 7B. Corporate-genericity patterns *(new, 2026-08-14)*

The saturation threat has moved. These are the markers of the *professionalised* cybersecurity portfolio.

| Pattern | Observed on | Verdict |
|---|---|---|
| CVSS/severity badge systems as decoration | bugatsec | **AVOID** as ornament; fine inside a real finding. |
| Company logo wall as primary credibility | bugatsec | **AVOID.** Unavailable to Het anyway. |
| Category badges on projects (OPEN SOURCE / SECURITY TOOL) | bugatsec | **AVOID.** Labels without claims. |
| Framework name-dropping (MITRE, NIST) without applied evidence | nikki-65, bugatsec | **AVOID.** |
| Skills as coloured badges | nikki-65 | **AVOID.** The evolved form of the percentage bar. |
| Action-verb bullets ("Built…", "Analyzed…") | nikki-65 | **CONDITIONAL.** Fine sparingly; a wall of them reads as résumé filler. |
| **Direct links to artefacts (PDFs, repos)** | nikki-65 | **ADOPT.** Linking beats describing. |
| Skills grouped into conceptual categories | bugatsec | **ADOPT.** A genuine improvement on flat lists. |
| **Zero first-person voice** | bugatsec | **AVOID — the defining failure.** |

---

## 7C. Voice and evolution *(new, 2026-08-14)*

| Pattern | Observed on | Verdict |
|---|---|---|
| Structured records + personal voice together | Olivier Larose | **ADOPT — critical.** Proves structure ≠ impersonal. |
| Verification link on every project | Olivier Larose | **ADOPT.** |
| Versioned site with browsable archive of past versions | Lynn Fisher | **ADOPT (principle).** Return value without publishing cadence. Do not copy "v. XIX". |
| One deliberately non-strategic personal section | Lynn Fisher ("Gifs") | **ADOPT.** Cheap humanity. |
| Voice in overlooked moments (loading states) | Renaud Rohlinger | **CONDITIONAL.** Principle yes; preloader gate no. |
| Numbered episodic series, one idea each | Setosa | **ADOPT.** Revises the earlier "defer numbering" verdict. |
| Process write-up paired with every artefact | Data Sketches | **ADOPT.** Publishable before results exist. |
| Scroll-driven progressive disclosure | R2D3 | **ADOPT.** Cheaper than simulation, nearly as effective. |
| Explicit "Reality check" arguing against your own result | R2D3 | **ADOPT.** Fifth independent instance supporting limitations disclosure. |
| Layered entry (popular + systematic) | Our World in Data | **ADOPT.** |
| Source attribution on every artefact | Our World in Data | **ADOPT.** |

---

## 8. Credibility signals worth stealing

Ranked by transferability to Het's actual position:

1. **Precise technical language in titles** (Trail of Bits) — free, immediate, and the single sharpest differentiator from the archetype.
2. **Thematic grouping by domain** (Kettle) — turns scattered outputs into a demonstrated field.
3. **Honest uncertainty labelling** (Appleton) — increases credibility; and in security, overclaiming is a cardinal sin.
4. **Showing method, not just result** (Distill, Kettle's methodology writing).
5. **Crediting collaborators** (Curry).
6. **Consistent cadence** (tl;dr sec).

Every one of these costs nothing but discipline. None requires seniority, budget, or a WebGL scene.
