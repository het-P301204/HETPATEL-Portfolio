# Content Model

**Date:** 2026-08-14 (Phase 3) · **Status:** PROPOSED. No visual decisions.

---

## 1. Entity classification

Not everything deserves to be a content type. Most things are properties.

| Entity | Class | Reasoning |
|---|---|---|
| **Investigation** | **PRIMARY CONTENT TYPE** | The unit the brand promise attaches to |
| **Field note** | **SECONDARY CONTENT TYPE** | Short-form; different shape, not a lesser investigation |
| Artifact | **EVIDENCE** (property) | Attaches to an investigation. Never stands alone |
| Professional experience | **CONTEXT** (property + one page) | Frames investigations; is not itself browsable content |
| GitHub | **EVIDENCE CHANNEL** | Where artifacts live. Not a content type |
| Research | **STATE** of an investigation | Not a separate type — an investigation that is still open |
| Future work | **STATE** (`Planned`) | Not a separate type |
| About / identity | **CONTEXT** (one page) | Necessary, not primary |
| Domain | **METADATA** | Cloud, AppSec, GRC, network… |
| Status | **METADATA** | Open / Closed / Unresolved / Planned / Archived |
| Certifications | **METADATA** on About | Never a section |
| Education | **METADATA** on About | Never a section |
| Roadmap | **CONTEXT** (one page) | Adopted direction. Never achievement |

**Two content types. Everything else is metadata, evidence, or context.**

This is the single most important decision in the model. Most portfolios fail by promoting metadata (skills, certifications, tools) to navigation. Each promotion dilutes the primary content and adds a section that must be maintained.

---

## 2. Entity relationships

```
INVESTIGATION  (primary)
├── question            what needed working out           REQUIRED
├── approach+reasoning  what was done, and why            REQUIRED
├── findings            what was established              REQUIRED
├── open ends           what could not be determined      REQUIRED
├── status              open | closed | unresolved | planned | archived
├── domain[]            1–2 max
├── origin              professional | self-initiated | academic
├── date                started; updated
├── artifacts[]         ──────────────► ARTIFACT (0..n)
├── field notes[]       ──────────────► FIELD NOTE (0..n)
└── related[]           ──────────────► INVESTIGATION (0..n)

FIELD NOTE  (secondary)
├── observation         one idea
├── date
├── domain              0–1
├── parent              ──────────────► INVESTIGATION (0..1, optional)
└── may become          ──────────────► INVESTIGATION (promotion path)

ARTIFACT  (evidence — never standalone)
├── type                repository | tool | document | diagram | demo | dataset
├── location            GitHub URL, file, or "not publishable"
├── state               working | partial | archived | unavailable
└── belongs to          ──────────────► INVESTIGATION (1, required)

PROFESSIONAL EXPERIENCE  (context)
├── role, organisation, period
├── responsibilities    method level only
└── gave rise to[]      ──────────────► INVESTIGATION (0..n)
```

---

## 3. The three rules that make this work

**Rule 1 — An artifact cannot exist without an investigation.**
A repository with no reasoning attached is a link, not content. This is what prevents the site becoming a project dump, and it is why repository count can never become the metric.

**Rule 2 — An investigation does not require an artifact.**
Confidential professional work produces no public artifact and is still complete. Research that concluded nothing is still an investigation. **This is what makes the model work at zero repositories.**

**Rule 3 — Status is a property, never a section.**
No "Completed Projects" or "In Progress" navigation. Status is metadata on the item, filterable if volume warrants. This keeps CURRENT / EMERGING / FUTURE distinct without three separate designs.

---

## 4. Where professional experience sits — and why not as content

Tempting to make each CSCRF/IRDAI engagement an investigation. **Rejected**, for an honesty reason.

Het's role was to *assist* on audits as an intern. Framing an engagement as "his investigation" overstates his position — he did not scope or lead it.

**What is honest:** the *questions he personally had to work out* while doing his part. "How do you map an ISO 27001 control to evidence that will satisfy an auditor?" is genuinely his, genuinely reasoned, and exposes nothing confidential.

So: **the engagement is context; the question he worked out inside it is the investigation.** This is more truthful *and* more interesting than a summarised engagement, and it sidesteps most confidentiality risk because the unit of publication is his reasoning rather than the client's work.

---

## 5. Deliberate omissions

| Omitted | Why |
|---|---|
| Skills / tech-stack list | Metadata masquerading as content. Tools appear inside method |
| Certifications section | Accumulation framing; Trust Model ranks these low |
| Services | He seeks employment |
| Testimonials | None exist |
| Blog | Forbidden (§35); field notes serve the purpose without the cadence promise |
| Tags (free-form) | Domain covers it; free tags fragment at low volume |
| Separate Research section | Research is an open investigation |
| Separate Projects section | A project is an investigation with an artifact |

**"Projects" is the significant omission.** Recruiters look for it. Mitigation is in `NAVIGATION_MODELS.md`: investigations with artifacts remain filterable, and the About page states plainly what has been built.

---

## 6. Disagreement with a Phase 2 decision — recorded

Phase 2 (P2-003) stated artifacts are *properties of* investigations, which is retained. But it implied every built thing must be framed as an investigation.

**Tested here and partially rejected.** Forcing a pure build into an inquiry frame is contrived — "Can I build X?" is not a real question.

**Refinement:** an investigation may have a **conclusion** *or* an **artifact** as its outcome. The internal shape flexes:
- *Inquiry-shaped:* question → approach → findings → open ends
- *Build-shaped:* problem → what I built → what it does not do → open ends

Same type, same required honesty fields, different internal emphasis. This avoids both a second content type (fragmentation) and contrived framing (dishonesty).

**Why not a second "Build" type:** at zero artifacts it would be an empty section, and the brand's premise is reasoning, not output. One type keeps the site coherent at every volume.
