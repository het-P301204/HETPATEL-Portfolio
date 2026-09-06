# Public GitHub Audit

**Date:** 2026-08-14
**Profile:** https://github.com/het-P301204
**Method:** Read-only inspection of publicly available profile and repository information via the public GitHub interface. No code executed, no systems scanned, no private data accessed, no security testing performed.
**Scope:** Determine which public repositories exist and what their publicly observable status is.

---

## PUBLIC PROFILE

| Field | Value |
|---|---|
| Login | `het-P301204` |
| Name | Het Patel |
| Bio | "Turning curiosity into defense. From bytes to breaches, learning never stops." |
| Company | *(not set)* |
| Blog / website | *(empty)* |
| Location | *(not set)* |
| Public email | *(not set)* |
| Public repositories | **3** |
| Followers / Following | 1 / 1 |
| Account created | 2025-03-10 |
| Profile last updated | 2026-08-06 |

**Observations:**
- The account is ~17 months old.
- Location is not set publicly, which already aligns with Het's instruction not to display physical location.
- The bio is generic in register and would not survive the copy standard established in `PROJECT_CONSTRAINTS.md` (no filler, precision over promotion). Not urgent, but worth revising.
- **No pinned original work, no website link, no organisation.**

---

## REPOSITORIES

### 1. `PingMaster`

| Field | Publicly observed value |
|---|---|
| Description | "Ping, but with a graph. A simple, cross-platform tool for visualizing network latency… lightweight, intuitive, and cross-platform graphical ping…" |
| Language | Rust |
| Fork flag | `false` |
| Size | 889 KB |
| Stars / Forks | 0 / 0 |
| Created | 2025-10-19 17:16:20Z |
| Pushed | 2025-10-19 17:20:03Z |
| Last activity | 2025-10-19 (~10 months ago) |
| License | *(none set)* |
| Releases | **None** |
| Topics | *(none)* |
| Commits | **2** |

**Commit history (public):**
1. `Initial commit` — 2025-10-19 17:16
2. `Add files via upload` — 2025-10-19 17:20

**Top-level contents (public):**
`Cargo.lock` · `Cargo.toml` · `Cross.toml` · `Dockerfile` · `README.md` (209 B) · `Readme.md` (2,304 B) · `gping.1` · `gping/` · `images/` · `pinger/`

#### ⚠️ Provenance concern — requires Het's clarification

Publicly observable facts, stated without inference beyond what is written:

1. `Cargo.toml` declares a workspace with members **`gping`** and **`pinger`**. It contains **no package name, author, license, or repository field.**
2. The repository contains a directory named **`gping`** and a man page named **`gping.1`**.
3. There are **two README files**. `README.md` (209 B) carries the "PingMaster" tagline. `Readme.md` (2,304 B) describes a project called **"gping master"**, states the **MIT License**, and lists installation via Homebrew, Scoop, Cargo and a Releases page.
4. That second README contains the placeholder URL **`https://github.com/your-username/gping-master/`** — an unfilled template placeholder, not a real repository reference.
5. Neither README names an author or maintainer.
6. The entire codebase arrived in a single commit titled `Add files via upload`, four minutes after repository creation. This is the signature of uploading an existing directory through the web interface rather than developing in the repository.
7. The `fork` flag is `false` — which is expected for a web upload, since GitHub only sets that flag when the fork button is used.

**What this means:** the public evidence indicates `PingMaster` contains the source of the existing open-source project **gping** (a well-known Rust tool whose tagline is "Ping, but with a graph"), renamed at the repository level, with a short new `README.md` placed alongside the original documentation.

**What this does NOT establish:** why. There are entirely legitimate explanations — studying the codebase, a coursework exercise, a packaging experiment, or an intended fork made the wrong way. **No conclusion is drawn about intent.**

**What it does establish:** on public evidence alone, this repository **cannot be presented as Het's original work.** Doing so would be the precise overclaiming failure that both Het's own strategy document and the Phase 1 research identify as fatal to credibility — and it would be trivially discoverable by any reviewer who opens `Cargo.toml`.

It also carries a licensing issue independent of the portfolio question: gping is MIT-licensed, and the top level of this repository has **no LICENSE file**, while the original attribution is absent from the visible `README.md`.

**Status: `UNKNOWN` (provenance unresolved) — USER INPUT REQUIRED.**

---

### 2. `pounce-keys`

| Field | Publicly observed value |
|---|---|
| Description | "PounceKey's is a Accessibility Service keylogger for Android 5 to 15! full launcher stealth. choose between receiving logs via IP, Gmail, or…" |
| Language | *(none detected)* |
| **Fork flag** | **`true`** |
| Size | 320,295 KB |
| Stars / Forks | 0 / 0 |
| Created (forked) | 2025-07-19 |
| Upstream last push | 2025-06-17 |
| License | GNU GPL v3.0 |
| Homepage | `https://nullpounce.com` |

**Status: `ARCHIVED` in practice — a fork with no observable modification by Het.** The description, license and homepage are inherited from upstream.

#### ⚠️ Reputational concern for Het's stated positioning

This is a **fork of an Android keylogger advertising "full launcher stealth"** and covert log exfiltration. Three reasons it matters here, stated plainly:

1. **It directly conflicts with the confirmed positioning.** Het performs CSCRF and IRDAI audit work for a financial firm. The GRC, audit and regulated-finance audience is risk-averse by profession. A public keylogger fork on the same profile is the single most damaging item that could sit next to that experience.
2. **His own strategy document names it.** Its executive summary lists "a keylogger, presented as an educational exercise" among the tutorial-portfolio clichés reviewers have "seen four hundred of."
3. **A fork carries no evidence of learning.** Unmodified, it demonstrates nothing except that the repository was copied.

**Recommendation: delete or unfork this repository.** There is no presentational framing that makes it an asset, and it is currently one of only three things a visitor to his profile can see. This is Het's decision, not mine — but he should make it knowingly.

---

### 3. `V15.55-portfolio`

| Field | Publicly observed value |
|---|---|
| Description | "Drainage of thoughts" |
| Language | *(none detected)* |
| **Fork flag** | **`true`** |
| Size | 6,009 KB |
| Stars / Forks | 0 / 0 |
| Created (forked) | 2025-05-15 |
| Upstream last push | 2025-05-13 |
| License | *(none)* |
| Homepage | `https://parthmittal.netlify.app/` |

A fork of another person's portfolio website. The description and homepage both belong to the upstream author. No observable modification by Het.

**Status: `ARCHIVED` in practice — unmodified fork.**

**Note:** the inherited homepage points at a third party's live site. If Het builds his own portfolio, having a fork of someone else's portfolio publicly on his profile is at best confusing and at worst reads as the origin of his own site.

---

## STATUS CLASSIFICATION

| Repository | Classification | Evidence basis |
|---|---|---|
| `PingMaster` | **UNKNOWN** | Provenance unresolved; workspace, man page and second README all reference `gping`. Functionality not assessed — code was not executed. |
| `pounce-keys` | **ARCHIVED** | Fork flag true; no observable modification; upstream push predates the fork. |
| `V15.55-portfolio` | **ARCHIVED** | Fork flag true; no observable modification; upstream metadata intact. |

**No repository qualifies as BUILT, FUNCTIONAL, EXPERIMENT, INCOMPLETE or PLANNED on current public evidence.**

Deliberately **not** inferred:
- That `PingMaster` does or does not work — code was not executed, and functionality was not tested.
- That a short README implies incompleteness.
- Any conclusion about intent behind the upload.

---

## THE CENTRAL FINDING

**None of the five projects listed on Het's resume exist as public repositories.**

| Resume project | Public repository? |
|---|---|
| Network Vulnerability Scanning Lab (Nmap, Nikto, OpenVAS) | **Not found** |
| Phishing Web (Social Engineering Simulation) | **Not found** |
| Cloud Security configuration (IAM, Secure Configurations) | **Not found** |
| Secure Login System (ReactJS, JWT, RBAC) | **Not found** |
| Incident Response Simulation | **Not found** |

Combined with the audit above, the public GitHub position is:

- **0 verified original public repositories**
- **1 repository whose provenance is unresolved**
- **2 unmodified forks, one of which is a stealth keylogger**
- **0 of 5 resume projects publicly visible**
- **No public activity since 2025-10-19 (~10 months)**

**Assessment: the public GitHub profile currently works against Het rather than for him.** This is not a criticism of his ability — it reflects that the work exists offline, or in private repositories, or not yet at all. But as a public artefact visible to any recruiter who clicks the link, it is a net liability today.

**This is the single most important correction to the earlier Phase 0 analysis.** The previous documents recorded "no verified built work." That was accurate but understated: the profile does not merely lack evidence, it currently contains items that actively undercut the confirmed professional positioning.

---

## RECOMMENDED ACTIONS

Het's decisions, not mine — presented with reasoning.

**Immediate, before the website links to GitHub at all:**
1. **Resolve `PingMaster` provenance.** If it is gping, either delete it, or convert it to a proper fork with attribution and the upstream MIT license restored. It must not be presented as original work.
2. **Delete or unfork `pounce-keys`.** Highest-severity item relative to the GRC/audit positioning.
3. **Delete or unfork `V15.55-portfolio`.**
4. **Rewrite the bio** to the precision standard in `PROJECT_CONSTRAINTS.md`.

**Before the site can present a credible ecosystem:**
5. **Publish the resume projects** — if they exist and are publishable — or remove them from the resume. A resume listing five projects and a GitHub showing none is a discoverable inconsistency.
6. **Take one project to product standard**, per Het's own strategy document: "Choose one idea from this catalog and take it all the way to product."

**Sequencing consequence:** until at least items 1–3 are done, the website should **not** prominently link to or visualise the GitHub ecosystem. Doing so would route visitors from a credible professional story to an empty-or-worse profile — actively destroying the credibility the site had just built.

---

## USER INPUT REQUIRED

1. **`PingMaster` — what is it?** Your own work, an upload of gping for study, a coursework exercise, or an intended fork? This determines whether it is deleted, re-forked with attribution, or explained.
2. **Are there private repositories** containing the five resume projects or any roadmap work?
3. **Do the five resume projects exist at all** in a publishable state?
4. **Is `het-P301204` the account you intend to keep**, or would you prefer a fresh account or a renamed one for professional use?
5. **Are you willing to delete the two forks?**
