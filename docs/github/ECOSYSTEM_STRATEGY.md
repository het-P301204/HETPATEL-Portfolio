# GitHub Ecosystem Strategy

**Date:** 2026-08-14
**Source:** `Cybersecurity-Portfolio-100-Repository-Roadmap.pdf` and `Cybersecurity-Portfolio-Project-Strategy.pdf`
**Status:** Understanding only. **No visualisation is designed here** (Phase 0 §5).

---

## 1. What these documents actually are

Two distinct planning artefacts, and the difference matters.

**The Roadmap** — *One Hundred Repositories for a Decade of Security Engineering*, Edition 2026, 14 pages. Explicitly stamped **"PLANNING ARTEFACT — CONCEPTS ONLY."** A ten-year menu of 100 repository concepts across 12 tracks. Each entry carries only four things: name, one-sentence description, primary domain, and why it matters. No architecture, no implementation.

**The Strategy** — *Building a Portfolio That Gets You Hired*, Version 1.0, August 2026, ~90 pages. 119 project ideas across 30 domains, scored on ten criteria, re-ranked for eight career tracks, with a comparison matrix.

Both are headed "TECHNICAL ADVISORY BOARD." Neither is a record of work done. **Together they represent roughly 219 project concepts and zero verified built repositories** — the latter now confirmed by direct audit, not assumed. See [`PUBLIC_GITHUB_AUDIT.md`](PUBLIC_GITHUB_AUDIT.md).

### ✅ Authorship — resolved 2026-08-14

Het has confirmed how these documents must be treated:

- They are his **adopted / working strategy and direction.**
- He does **not** claim to have personally authored every idea, framework or piece of prose in them.
- They may be used to understand his **adopted priorities, project-selection philosophy, and long-term security-engineering direction.**
- Externally derived or AI-generated strategy prose must **never** be presented as his original intellectual work.

**Design consequence — this is a real constraint, not a footnote.** Phase 0 had provisionally identified "documented selection judgement" as Het's strongest differentiator *on the assumption it might be his own analysis*. That framing is now **corrected**: the differentiator is not that he wrote the framework, but that he has **deliberately adopted a rigorous one and is executing against it.**

That is still genuinely uncommon — most early-career engineers have no articulated selection strategy at all — but it is a weaker and more honest claim, and the site's language must reflect the difference. Acceptable framing: *"the strategy I'm working to."* Forbidden framing: *"my framework"*, *"I developed"*, or any presentation of its prose as his writing.

If the site quotes these documents, quotations must be visibly attributed as quotations from a strategy he follows.

---

## 2. The ecosystem philosophy — in the documents' own terms

This is the part that matters most for the website, because it is the opposite of what a "100 repositories" headline implies.

**Quality over count, stated explicitly:**
> "Ten finished, maintained, cited projects outperform one hundred abandoned ones — this list is a menu of the strongest available options, not a quota to fill."

**Realistic pace:** "A realistic decade allocates two to four substantial repositories per year, with the rest arriving as focused libraries extracted from them."

**Cohesion is a portfolio property, not a prerequisite:** the 95 non-spine repositories are "deliberately independent. Each stands alone, is understandable without the others, and could be the only repository someone ever reads."

**Why the spine exists:** building the five load-bearing repositories early "turns a standalone tool into evidence of systems thinking, which is the distinction hiring committees use to separate Senior from Staff."

**Where the option value sits:** Tracks VII (AI/LLM/Agent), XI (Post-Quantum/Confidential) and XII (Frontier Surfaces) are flagged highest, because they target "surfaces that are real today but under-tooled, which is the narrow window where an individual contributor can still define a category rather than join one."

**Selection filters applied to every entry:** original (not a renamed existing tool) · enterprise relevant at real scale · production inspired, not tutorial derived · technically ambitious · research oriented where warranted · open-source worthy · future-ready over ten years · commercially viable where appropriate.

---

## 3. The twelve tracks

| # | Track | Repos | Theme |
|---|---|---|---|
| I | Cloud Security & Cloud Detection | 10 | Control planes, drift, blast radius |
| II | Identity, Zero Trust & Authorization | 8 | Human, workload and agent identity |
| III | Supply Chain & Software Integrity | 9 | Provenance beyond the org boundary |
| IV | Kubernetes, Containers & Platform Security | 8 | The paved road and its guardrails |
| V | Detection Engineering & Security Operations | 9 | Detections as a versioned product |
| VI | Security Data & Knowledge Graphs | 8 | Schemas, economics, connective tissue |
| VII | AI, LLM & Agent Security | 12 | The decade's defining surface |
| VIII | Application, API & Developer Security | 9 | Reachability, contracts, behaviour change |
| IX | Governance, Risk, Compliance & Audit | 8 | From spreadsheets to a live control graph |
| X | Digital Forensics & Incident Response | 7 | Evidence when the machine no longer exists |
| XI | Post-Quantum & Confidential Computing | 6 | Migrating trust before it expires |
| XII | Frontier Surfaces & Exposure Management | 6 | Browser, email, mobile, device, edge |

Counts verified: 100.

Tracks are ordered deliberately — "from the infrastructure the rest of the portfolio depends on, through detection and data, into the AI and cryptographic frontiers." **The ordering is itself information** and should not be re-sorted arbitrarily if the tracks are ever displayed.

---

## 4. The spine: independent vs connected

The single most important structural distinction in the roadmap, and the one most likely to be flattened by a careless design.

**Five load-bearing repositories** — the other 95 lean on these:

| Repo | Role | Feeds |
|---|---|---|
| `cloudgraph-core` | Normalised multi-cloud resource and identity graph | Track I, and anything needing cloud topology |
| `threatgraph` | Temporal knowledge graph joining assets, identities, detections, intel | Track VI, connective tissue for the portfolio |
| `secschema` | Versioned telemetry schema contracts | "consumed by every detection repo" |
| `entitlement-algebra` | Shared permission solver | Underpins identity and zero-trust track |
| `provenance-mesh` | Federated attestation layer | Supply-chain and AI tracks both build on it |

**Ninety-five independent repositories** — each stands alone and is understandable in isolation.

So the ecosystem is **not** a uniform mesh. It is a small spine plus a large set of independent tools, a few of which happen to consume the spine. Any future visualisation that renders 100 nodes in a dense web would misrepresent the actual structure — most repositories have no dependency edges at all.

---

## 5. What the strategy document adds

Its executive summary is the sharpest available statement of what the website must achieve, and it converges independently with the Phase 1 research:

> "A port scanner with a colored terminal output. A password generator with a strength meter… These projects are not bad work. They are simply evidence of having completed a tutorial, and the person reviewing them has seen four hundred of them."

Signals it says reviewers actually read for: **problem selection** (called "the single strongest signal in the entire portfolio, because it cannot be faked by effort"), scoping judgment, awareness of prior art, failure handling, communication, and:

> "Honesty about limitations. A documented list of what the tool does not do, and why, is one of the most credible things a portfolio can contain. Overclaiming is the fastest way to lose a technically strong reviewer."

**This independently validates the strongest structural idea from Phase 1 research.** The recommended "Register" concept makes *limitations* a required field on every entry. Het's own strategy document names that as one of the most credible things a portfolio can contain — arrived at from hiring practice, where the research arrived at it from editorial design (Appleton, Distill). Two independent routes to the same conclusion.

Also load-bearing:
> "Choose one idea from this catalog and take it all the way to product. That single repository will outperform five projects taken to the demo stage, in every hiring conversation you will have."

And the project/product distinction — configuration that does not assume the author's directory layout, errors that explain what to do next, a versioning policy, a security policy, runnable tests, documentation for someone who does not already know the problem. "Portfolios that cross this line are rare enough that crossing it is itself a differentiator."

Its eight career tracks: **Internships · Security Engineering · Product Security · Cloud Security · Detection Engineering · GRC and Compliance Engineering · AI and Agent Security · DevSecOps and Supply Chain.** *Which one Het is targeting is an open question and shapes the site's emphasis.*

---

## 5A. The gap between the plan and the account — measured

GitHub was audited on 2026-08-14. The result reframes everything in this document.

| | Planned | Actually public |
|---|---|---|
| Repositories | 219 concepts | 3 |
| Original work | 100 roadmap repos | **0 verified** |
| Spine repositories | 5 | **0** |
| Tracks entered | 12 | **0** |
| Last activity | — | 2025-10-19 (~10 months) |

Of the three public repositories: one is an unmodified fork of an Android stealth keylogger, one is an unmodified fork of another person's portfolio, and one has unresolved provenance (it contains the `gping` workspace, man page and original README).

**This is not a small gap. It is the entire gap.**

Consequences for the website, which supersede the more optimistic reading in §6 below:

1. **The ecosystem cannot be a site feature yet.** There is nothing to visualise. Any "ecosystem" surface today would render an empty structure.
2. **Linking prominently to GitHub is currently harmful.** It routes a visitor from a credible professional story — real CSCRF/IRDAI audit work — to a profile whose most prominent item is a forked keylogger. That trade is strictly negative.
3. **The roadmap's weight problem is worse than §6.5 estimated.** 219 concepts against 0 built repositories, not against 5 modest ones.
4. **This is fixable, and cheaply.** Deleting two forks and resolving one provenance question converts the profile from a liability into a clean slate in under an hour. Publishing one real project converts it into an asset.

---

## 6. How this could eventually influence the website

Observations only. **No visualisation is being designed** (Phase 0 §5, §10).

**6.1 The roadmap is an asset only if it is honestly framed.** 100 concepts with 0 built is a liability if presented as a portfolio and an asset if presented as demonstrated systems thinking. The roadmap's own framing — "a menu, not a quota" — is the honest framing and should be quoted rather than softened.

**6.2 The strategy document is arguably the more interesting artefact.** Every candidate has projects. Almost none has a written, criteria-scored rationale for *why these projects and not others*. Problem selection is the signal reviewers read for first, and these documents are direct evidence of it.

**6.3 A dependency graph would misrepresent the structure.** 5 connected + 95 independent is not a mesh. If any relational view is ever built, it must show that asymmetry, not obscure it.

**6.4 The track taxonomy is a ready-made IA axis** — but only tracks Het has actually entered should become navigation. Empty tracks belong in a roadmap view, clearly marked.

**6.5 There is a real risk of the roadmap swallowing the site.** 219 concepts against ~5 undescribed student projects and one internship. Weighting must favour what exists. The roadmap should be reachable, not dominant.

**6.6 The website should hold itself to the same standard.** The strategy document's project→product criteria (versioning policy, security policy, tests, docs for a stranger) apply to the website itself. Meeting them, and saying so in a colophon, makes the site a first piece of evidence for the thesis it advances.

---

## 7. Open questions

1. Has any code been written toward any of the 219 concepts — **in private repositories**? (Public: confirmed none.)
2. If one were started now, which? *(The strategy document's own advice: pick one, take it to product.)*
3. Which of the eight career tracks is the target?
4. ~~Who authored these documents?~~ **RESOLVED 2026-08-14** — adopted strategy, not authored work. See §1.
5. Should the roadmap be public on the site at all, or remain a private planning instrument? **Now sharper given §5A:** publishing a 219-concept plan alongside an empty GitHub is a materially riskier proposition than it looked before the audit.
6. **New:** will Het clean up the public profile (delete the two forks, resolve `PingMaster`) before the site links to it?
