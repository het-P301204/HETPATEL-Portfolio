# Project Constraints

**Date:** 2026-08-14
**Source:** Master brief; `SOURCE_OF_TRUTH.md`; Phase 1 research.
Only constraints that are actually established are recorded. Nothing is invented.

---

## MUST HAVE

From the master brief, explicitly:

| # | Requirement | Ref |
|---|---|---|
| H1 | A distinctive personal digital identity, not a portfolio template | §0, §2 |
| H2 | Architecture that evolves with Het's career | §7, §44 |
| H3 | Genuine reasons to return | §8 |
| H4 | BUILT / IN PROGRESS / RESEARCH / FUTURE never blurred | §6 |
| H5 | Anonymised structure for professional work | §4, §32 |
| H6 | Content separated from presentation; structured/typed content | §42 |
| H7 | Accessibility: keyboard, focus, semantics, screen readers, contrast, reduced motion | §49 |
| H8 | Intentional responsive design, not a shrunk desktop | §50 |
| H9 | Site threat-modelled and hardened; `SECURITY_MODEL.md` | §45–47 |
| H10 | Performance maintained despite visual complexity | §48 |
| H11 | Semantic HTML, metadata, OG, structured data, sitemap, robots, canonicals | §51 |
| H12 | Decisions documented; drift flagged, never silent | §56, §58 |
| H13 | Information classified VERIFIED / USER INPUT REQUIRED / INFERENCE / PROPOSED | §21 |
| H14 | Het's name is the brand — no invented company | §36 |

---

## MUST AVOID

### Banned by the brief (§24–27)
Generic Hero→About→Skills→Projects→Contact as a default architecture · cards as a default container · neon green · Matrix rain · black+green · hacker terminals · fake command lines · glitch effects · skulls · shields · locks · random hex · binary backgrounds · "ACCESS GRANTED" · "SYSTEM ONLINE" · "INITIALIZING" · fake scans · cyberpunk HUDs · excessive particles · random network nodes · stock hacker imagery · excessive glassmorphism · giant security icons · Three.js/WebGL/shaders/physics/3D used without justification.

### Added by Phase 1 research (measured evidence — see `REJECTED_PATTERNS.md`)
- Percentage skill bars — unfalsifiable; observed on 2 of 2 sites that showed skills
- Tools listed as portfolio items — **especially acute for Het: his toolset is the same list as the archetype's**
- "Services" section — observed on 3 of 3 inspected student portfolios
- Credential-count sections ("COURSES COMPLETED")
- Monospace as body typeface — measured on zyekh.cloud
- SCREAMING_SNAKE_CASE / ALL-CAPS headings
- Marketing filler: "dedicated professional", "proven track record", "unwavering commitment", **"passionate"**
- Outlaw / "beyond legal" framing — repels compliance-adjacent readers
- Appleton's "digital garden" vocabulary — structure adoptable, language not

### Added by Phase 0
- **No seniority claim.** Verified position: recent B.E. graduate, ~7-month internship, with real CSCRF/IRDAI audit involvement
- **Nothing from the unopened VAPT/internship reports** without explicit authorisation
- **No invented project descriptions, outcomes, metrics, functionality or achievements**
- **Roadmap concepts never shown as built work**

### Added after user confirmation (2026-08-14)
- **No client-sensitive detail from CSCRF/IRDAI work.** High-level and anonymised only. No client identity, findings, evidence, internal systems, metrics, or correlatable dates. Anything beyond high level requires Het's explicit clearance.
- **No physical location anywhere public** — not in copy, header, footer, `og:` tags, JSON-LD, or IA. Location is temporary; the site must survive an international move with **zero** structural change.
- **No `.edu` email.** Public contact is `patel.het7996@gmail.com`.
- **No claim of authorship over the strategy/roadmap frameworks.** They are adopted direction, not Het's original intellectual work. Presenting their prose or frameworks as his own is forbidden.
- **No prominent GitHub link or ecosystem visualisation** until the provenance and fork issues in `github/PUBLIC_GITHUB_AUDIT.md` are resolved.
- **`PingMaster` may not be presented as Het's original work** unless he establishes provenance.

---

## MUST REMAIN TRUE

| # | Invariant | Enforcement |
|---|---|---|
| T1 | Every factual claim traceable to `SOURCE_OF_TRUTH.md` | Pre-launch audit |
| T2 | Every item's build state accurate | Audit each state label against its evidence |
| T3 | Zero confidential disclosure — no client identifiers, findings, counts, metrics, system detail, or correlatable dates | Het reviews all professional content |
| T4 | Roadmap presented as intent, never as achievement | Structural, not a disclaimer |
| T5 | Adding a project/note/repo requires no architecture change | Structured content |
| T6 | Full comprehension without motion and without JS-dependent navigation | Tested |
| T7 | No secrets in client-side code or the repository | Pre-deploy audit |
| T8 | Precision over promotion — the Trail of Bits abstract test | Copy review |
| **T9** | **The portfolio must read as a portfolio before it reads as a publication** | `homepage/HOMEPAGE_PORTFOLIO_TEST.md`, run on every surface |

### T9 in full — added 2026-08-15 (Het)

> **THE PORTFOLIO MUST READ AS A PORTFOLIO BEFORE IT READS AS A PUBLICATION.**

The Investigation page may feel editorial. **The homepage may not.** Within seconds the homepage must answer: who is Het · what security work has he done · what does he actually know how to do · why should a hiring manager care · where can the evidence be inspected. The Investigation system is then *the reason the portfolio is different* — not the reason the site exists.

**Why this became a constraint:** Phase 5D MEASURED the five-second impression of the rendered investigation page as **editorial publication**, resolving to *personal working record* only after a full read. That is acceptable for an investigation and fatal as the site's primary identity. The failure it prevents is a recruiter thinking *"interesting cybersecurity writer"* instead of *"interesting cybersecurity professional with unusually strong evidence and reasoning."*

**Measurable discriminators** (from the 5E research round — these are what the test checks):

| Signal | Reads as publication | Reads as portfolio |
|---|---|---|
| First sentence | content, or a masthead | **person + role + where the work happened** |
| Work ordering | reverse chronological | **grouped by kind of problem** |
| Per-item metadata | date, read time | **status, origin, role, evidence** |
| Employer | absent | **named** |
| What is being offered | the writing | **the person's capability** |

**Consequence for existing decisions:** this revises Phase 4's H1 homepage selection and Phase 3's homepage IA. Both are documented in `DECISION_LOG.md` P5EV-003 and P5EV-004 rather than silently overwritten.

---

## HARD LIMITS

Realities that bound what is achievable, recorded so the design does not assume otherwise.

- **Verified built work: none.** GitHub audited 2026-08-14 — 3 public repos, 0 verified original, 2 unmodified forks, 1 with unresolved provenance, no activity in ~10 months. Any concept requiring a body of built work fails today.
- **The public GitHub is currently a net liability**, not merely empty. It contains a forked stealth keylogger and a fork of another person's portfolio. See the audit.
- **Professional experience: one ~7-month internship, plus confirmed CSCRF/IRDAI audit involvement.** Stronger than previously recorded — but still early-career, and the site cannot imply more.
- **Project descriptions: absent.** Five titles, no detail, no links, none public. Het will supply descriptions separately.
- **Published writing: none confirmed.** Cadence-dependent return mechanics are aspirational until Het commits.
- **Maintenance capacity: unknown.** An evolving system Het cannot sustain decays into a stale site — worse than a modest fresh one.
- **Asset balance has shifted.** Previously assessed as "planning, not output." Now more precisely: **confirmed regulated-assurance professional experience** is the strongest verified asset; adopted strategy is second; built output remains near zero. The professional work, not the roadmap, is the credible core.

---

## OPEN DECISIONS

Deliberately not decided. Recording them prevents accidental settlement.

**Blocked on Het**
- Career track (of eight) · `PingMaster` provenance · whether private repos exist · project descriptions · state vocabulary · writing-section name · tone · domain · photograph · social links · maintenance capacity

**Resolved 2026-08-14** — no longer open: CSCRF/IRDAI reality · contact email · location handling · GitHub identity and public repository state · strategy-document authorship framing.

**Resolved 2026-08-15** — no longer open: **whether Info eShield may be named in connection with the CSCRF/IRDAI work (yes)** · **what is cleared for publication about it** · dark mode (withdrawn, light only) · apparatus fields · font self-hosting (deferred to production). See `DECISION_LOG.md` P5EV-001 and P5EV-009.

**Blocked on later phases**
- Final concept — recommendation stands but is contingent on positioning
- Colour palette, typography, spacing, grid, iconography *(Phase 5 — §38 forbids deciding before concept approval)*
- Navigation mechanics, motion language *(Phase 6)*
- Component inventory *(Phase 7)*
- Technology stack *(follows experience, §43 — order is USER → BRAND → CONTENT → EXPERIENCE → INTERACTION → VISUAL SYSTEM → TECHNOLOGY, never reversed)*
- Whether the roadmap gets any visual treatment beyond a list *(§34 warns against unnecessary complexity)*
- Hosting, CI, budget

---

## CONFLICTS

| ID | Conflict | Status |
|---|---|---|
| C-1 | CSCRF/IRDAI/financial firm in brief, absent from resume | **RESOLVED 2026-08-14** — confirmed real by Het; resume is incomplete, not contradictory |
| C-2 | Resume Gmail vs environment `northeastern.edu` | **RESOLVED 2026-08-14** — use Gmail; location excluded from brand |
| C-3 | Roadmap targets Senior/Staff/Principal; resume is entry-level | Managed: roadmap framed as adopted direction |
| C-4 | Brief §55 vs Phase 0 §11 decision-log path | **Resolved** — `/docs/DECISION_LOG.md` canonical |
| C-5 | "100 repositories" vs "ten finished projects outperform one hundred abandoned" | **Resolved** — roadmap's own words win |
| **C-6** | **Resume lists 5 projects; GitHub shows 0 of them public** | **OPEN** — discoverable inconsistency. Publish them or remove from resume. |
| **C-7** | **`PingMaster` marked `fork: false` but contains the `gping` workspace, man page and original README** | **OPEN — blocking any GitHub presentation** |
| **C-8** | **Public keylogger fork vs confirmed GRC/audit positioning** | **OPEN** — recommend deletion; Het's call |
