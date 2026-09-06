# Register Territory Validation — `meidie-security-portfolio`

**Date:** 2026-08-14
**Subject:** `MDP-Studio/meidie-security-portfolio` · live at `meidie.mdpstudio.com.au`
**Method:** Public-source only — GitHub API metadata, public README, and the live site retrieved via Apify. No security testing, no private access, no code executed. WebFetch returned 403; Apify retrieved the rendered page successfully.
**Why it mattered:** flagged in the previous session as the highest-priority remaining check, because "scheduled evidence freshness, artifact trust" sounded adjacent to The Register.

---

## Verdict up front

**The territory is occupied — substantially, and well — by a direct peer.**

This is not a distant competitor. Meidie Fei is an **RMIT Master of Cyber Security student** seeking entry-level security roles. Same career stage as Het, same audience, same goal. And the site already implements several things this project had identified as opportunities.

**But it does not occupy the same ground The Register would occupy, and the difference is instructive rather than fatal.**

---

## Repository facts

| Field | Value |
|---|---|
| Description | "Meidie Fei security portfolio with scheduled evidence freshness, explicit artifact trust boundaries, and public project proofs." |
| Homepage | `https://meidie.mdpstudio.com.au/` |
| Language | HTML · **Size** 1,882 KB · **Stars** 0 |
| Created / Pushed | 2026-04-28 / **2026-07-13** (actively maintained, ~1 month before access) |
| Topics | cybersecurity, portfolio, public-proof, security-evidence, security-labs, static-site, supply-chain-security |
| Fork | false · **License** none |

**Infrastructure (from README):** `artifact-manifest.json` (integrity/provenance), `evidence-registry.json` (reviewed sources with a **45-day expiration window**), GitHub Actions for evidence validation and report generation, `SECURITY.md` / `security.html` / `.well-known/security.txt`, nginx container deploy.

---

## Information architecture

Hero → stat row → "Recruiter view" block → quick links → **Case studies** (filterable) → **Evidence matrix** → Background → Contact → Support.

**Navigation:** single-page anchors with a category filter on projects (All / Detection / Endpoint / AppSec / Crypto / Cloud).

---

## Project presentation

Each project carries: screenshot · tag row · title · one-line description · a bullet list of specific technical claims · an **"About this project"** paragraph · **two headline metrics** · outbound links (Live demo / GitHub / Releases / PyPI).

Eight projects, most with **live deployed demos**: PayShield (payment-scam firewall), PhishAnalyze, RMM Hunter (Windows endpoint triage, published beta releases), SecureVote, CryptoToolkit, AES Secure Vault (published to PyPI), Cloudflare DNS Action, Cyber Command Center.

---

## The Evidence Matrix — the closest thing to a register

A three-column table: **Analyst task | Evidence | Project**. Rows include "Block payment scams", "Triage findings", "Investigate endpoints", "Review secure code", "Understand attack paths", "Support cloud workflows".

Framed as *"the shortcut for hiring managers: what I can help with, where the evidence is, and what to click."*

**This is a capability→evidence mapping — conceptually adjacent to a control→evidence mapping.** It is the single most register-like element found anywhere in the corpus.

---

## Limitations culture — already implemented

This is the finding that most affects our conclusions. **O8 is not an untapped opportunity; a direct peer already practises it.** Observed instances:

- *"Current public Windows builds are unsigned beta artifacts unless a release page says otherwise."*
- *"These are provenance controls, not operating-system code signing or cryptographic certification."*
- *"SecureVote is a secure-software case study rather than a public voting service."*
- *"not a security certification"* (README, on the clean-report system)
- *"...without storing raw lab evidence"*
- A data-free observer rehearsal with *"explicit trust assumptions, stop conditions, non-claims"*

The phrase **"non-claims"** is notable — an explicit vocabulary for what is *not* being asserted.

---

## Site as a security artefact

Also already implemented. Measured CSP header:

```
default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none';
form-action 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'none';
manifest-src 'self'; upgrade-insecure-requests
```

Genuinely strict — `connect-src 'none'`, `object-src 'none'`, `frame-ancestors 'none'`. Plus a public security policy and a private vulnerability-reporting route. Brief §45 ("treat the website as a security engineering project") is **already being done by a peer.**

---

## Voice and personality

Present, and unforced. First person throughout: *"I am Meidie Fei, an RMIT Master of Cyber Security student…"*, *"I build practical cybersecurity, AI, and automation projects."* Section headings carry a human register — **"Builder, student, and communicator."** The line *"The portfolio is the proof layer"* states a thesis in six words.

Confirms **O11 and N3**: structured, evidence-heavy presentation and personal voice coexist comfortably.

---

## What feels generic

- **Stat counters** — "8 public security projects", "103 SecureVote tests", "10 RMM tool families", "3.3 RMIT program GPA". GPA as a headline stat is weak, and metric-per-project is close to the badge pattern already rejected.
- **"Recruiter view"** block with four numbered capability claims — explicit audience-labelling, which our own journey work rejected in favour of layering.
- **Screenshot card grid** with tag rows — conventional.
- **Transcript table** (subject/grade) — reads as student-stage.
- **"Buy me a coffee"** — sits oddly against the professional framing.
- **Flat project list.** No epistemic state axis, no chronology, no domain × state structure. Everything reads as "done".

---

## Similarities to The Register

| The Register proposed | Meidie implements |
|---|---|
| Evidence as a first-class field | ✅ Evidence matrix; evidence registry with expiry |
| Limitations as a required field | ✅ Extensively, incl. "non-claims" vocabulary |
| Provenance / verifiability | ✅ SHA256, digests, attestations, verifier ceremony |
| Site as a security artefact | ✅ Strict CSP, security.txt, disclosure policy |
| Structured per-item metadata | ✅ Tags, metrics, links per project |
| Capability→evidence mapping | ✅ The Evidence Matrix |

**Six of the Register's distinguishing features already exist in a peer's live site.**

---

## Differences from The Register

| The Register proposed | Meidie |
|---|---|
| **Domain × build-state as primary IA** | ❌ Flat list, category filter only |
| **Epistemic typing (Built / In progress / Research / Planned)** | ❌ Everything presented as complete |
| **CURRENT / EMERGING / FUTURE distinction** | ❌ No temporal or maturity dimension |
| **Roadmap as visible intent** | ❌ Absent |
| **Anonymised professional engagements** | ❌ **None — he has no professional security experience to present** |
| **Judgment/reasoning as content** | ❌ Claims are stated, not reasoned |

---

## The decisive asymmetry

**Meidie's site works because he has eight deployed projects.** Live demos, a PyPI package, published releases with provenance verification, 112 tests. The evidence matrix is persuasive because there is evidence to matrix.

**Het has zero verified original public repositories.**

The strategic conclusion is uncomfortable but important: **Het cannot win the artifact-volume game.** Not today, and not against this standard. A site whose organising principle is "here is my evidence" invites a direct comparison Het loses.

**Conversely: Meidie has no professional security experience.** No client engagements, no regulated work, no audit exposure. His background section lists a web studio, a coding instructor role, and government data-entry.

**Het has the one thing this excellent peer portfolio cannot show: judgment formed inside real regulated engagements** — VAPT on live applications, CSCRF and IRDAI audit work for a financial firm.

That is the asymmetry the concept should be built on.

---

## Consequences for Phase 1 conclusions

1. **O8 (limitations) demoted from "opportunity" to "validated practice."** Still correct, still worth doing — but no longer differentiating. A peer does it better than the plan proposed.
2. **Brief §45 (site as security artefact) is likewise occupied.** Worth doing; not distinctive.
3. **The Register's distinctiveness drops again** — from 7 toward 5–6. Its evidence-centric half is demonstrably occupied.
4. **The Register's structural half remains unoccupied** — nobody in the corpus uses domain × state, epistemic typing, or a current/emerging/future distinction.
5. **Artifact volume is the wrong battlefield for Het.** This is the most actionable finding of the validation.
6. **Meidie's own strongest line is a warning:** *"Projects chosen for security evidence, not volume."* He can say that with eight projects. Het cannot say anything like it yet.

---

## Honest limitations of this validation

- Retrieved once, via Apify markdown extraction. **No runtime measurement** — colour, typography, motion and interaction behaviour are **UNKNOWN** (the browser runtime was unavailable).
- Filter behaviour, responsive design and accessibility were **not** assessed.
- Repository code was not read beyond the README; the evidence-validation Actions were not examined.
- One site by one person. It demonstrates that the territory is occupied; it does not measure how widely.
