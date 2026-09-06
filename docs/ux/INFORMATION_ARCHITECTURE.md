# Information Architecture

**Date:** 2026-08-14 (Phase 3) · Three genuinely different information models, then a selection.

These differ in **what the site is organised around**, not merely in navigation labels. Navigation options are compared separately in `NAVIGATION_MODELS.md`.

---

## IA-1 — Investigation-centric

**Core idea:** the site is a body of worked problems. Everything else describes or supports them.
**Core unit:** investigation.
**Primary navigation:** Home · Investigations · Notes · About.

**Content hierarchy**
```
Investigation (primary)
├── artifacts        (evidence)
├── field notes      (related, optional)
└── related investigations

Field note (secondary, standalone or attached)
Professional experience → context on About; source of investigations
Roadmap → context page, reached from About
```

**Discovery:** homepage feature → index → filtering by domain and status as volume grows.
**Professional experience:** context. The *question worked out inside* an engagement is the investigation.
**Field notes:** secondary type, reverse chronological.
**Artifacts:** properties of investigations. Never standalone.
**GitHub:** artifact-level evidence channel. Not navigation.
**Future work:** `planned` status, plus the roadmap page.
**Mobile:** excellent — lists and long-form reading.
**Scalability:** excellent. No structural change 3 → 25.

**Strengths:** reasoning is structurally primary, matching the brand promise · works at zero artifacts · VAPT and GRC are symmetric · honest about an intern's actual role.
**Weaknesses:** professional experience is less immediately prominent than a recruiter might expect · relies on Het having enough investigations.
**Risks:** the label outrunning thin content · if investigation volume stays at 1–2, the whole model is a promise unkept.

---

## IA-2 — Experience-anchored

**Core idea:** the site is organised around professional engagements; investigations are evidence within them.
**Core unit:** engagement, containing investigations.
**Primary navigation:** Home · Experience · Investigations · About.

**Content hierarchy**
```
Engagement (primary)
├── role, scope, period
├── investigations   (what was worked out inside it)
└── methodology

Field note (secondary)
Artifacts → under investigations
```

**Discovery:** experience-first, drilling into engagements then investigations.
**Professional experience:** the spine.
**Mobile:** good.
**Scalability:** **poor.** Het has one employer and a handful of engagements. The top level would hold 1–2 items indefinitely, and self-initiated work has no natural home — it would need a parallel structure, fragmenting the site.

**Strengths:** maximum immediate credibility for recruiters and GRC readers · professional work is unmissable · matches how a resume reader expects to navigate.
**Weaknesses:** **a top level with one entry is not a structure** · overstates Het's role by making engagements *his* · personal and academic work becomes second-class · confidentiality pressure increases because the engagement is now the unit of publication.
**Risks:** reads as a resume with extra steps — explicitly rejected in `../brand/ANTI_BRAND.md` · maximum corporate/consultancy drift.

---

## IA-3 — Chronological practice record

**Core idea:** one dated stream of everything — investigations, notes, artifacts — as a continuous record of practice.
**Core unit:** the dated entry (investigations and notes are types of entry).
**Primary navigation:** Home · Record · About.

**Content hierarchy**
```
Entry (primary; typed: investigation | note | update)
├── type
├── date
└── domain

Everything is one stream, filterable by type.
```

**Discovery:** reverse chronological, filter by type.
**Professional experience:** entries within the stream, plus About.
**Mobile:** excellent — a single stream is the most phone-native structure of the three.
**Scalability:** good numerically, **poor qualitatively** — the best work sinks over time. This is precisely the weakness Kettle's thematic clustering exists to solve.

**Strengths:** simplest possible model · one place for everything · return visitors see change immediately · honest about ageing · lowest maintenance.
**Weaknesses:** **the strongest investigation is buried by the newest note within months** · a stream mostly composed of short notes reads as a blog, which brief §35 forbids · implies a cadence.
**Risks:** becomes a blog · a quiet period is highly visible in a chronological stream · flattens the distinction between a substantial investigation and a two-line observation.

---

## Comparison

| | IA-1 Investigation | IA-2 Experience | IA-3 Chronological |
|---|---|---|---|
| Brand alignment | **9** | 5 | 6 |
| Recruiter credibility | 7 | **9** | 5 |
| Honesty about role | **9** | 4 | 8 |
| Confidentiality safety | **9** | 5 | 8 |
| Personal work fit | **9** | 3 | 8 |
| Low-volume resilience | 7 | 4 | **8** |
| Scalability | **9** | 3 | 6 |
| Mobile | 9 | 8 | **10** |
| Return-visit value | 7 | 4 | **9** |
| Genericity resistance | **8** | 3 | 6 |
| **Total** | **83** | 48 | 74 |

---

## Selected: IA-1, with one borrowing from IA-3

**IA-1 is selected.** It is the only model where reasoning is structurally primary, which is the brand promise, and the only one that stays honest about Het's actual role in engagements.

**IA-2 is rejected decisively.** A top-level structure with one employer is not a structure, and making the engagement the unit both overstates his role and increases confidentiality exposure. It is the resume-website failure mode.

**IA-3's best property is borrowed:** field notes are reverse chronological, and dates are visible everywhere. What is *not* borrowed is the single-stream model — burying the strongest investigation under recent notes would defeat the site's purpose.

---

## Professional experience — three models tested (Part 8)

| Model | Description | Verdict |
|---|---|---|
| **A — Experience-first** | A prominent experience section or page leads the site | ❌ Duplicates the resume; makes the site's weakest-differentiated content its most prominent |
| **B — Investigation-first** | Experience appears only as `origin: professional` metadata | ⚠️ Purest, but a recruiter cannot find employment history, and it under-uses the strongest verified asset |
| **C — Hybrid** ✅ | Experience is **context on About** (role, employer, period, method-level responsibilities) **and** metadata on investigations that arose from it | **Selected** |

**Why C:** the recruiter finds employment history exactly where they expect it — About — while the *substance* of the work appears as reasoning inside investigations. Credibility without duplication.

**What About carries:** role, employer, period, method-level responsibilities, education, certifications (listed once, low), contact, GitHub link.
**What About does not carry:** a skills list · certification counts · a timeline graphic · a downloadable-resume-as-the-main-event.

---

## Page inventory

| Page | Purpose | Exists at launch |
|---|---|---|
| Home | Orientation and demonstration | ✅ |
| Investigations (index) | The body of work | ✅ at 3+ |
| Investigation (detail) | The unit | ✅ |
| Notes (index) | Short-form observations | ✅ at 2+ |
| Note (detail) | Possibly inline in the index for very short notes | ✅ |
| About | Identity, experience, education, credentials, contact | ✅ |
| Roadmap | Adopted direction, clearly labelled | ⚠️ optional; low prominence |
| Colophon | How the site was built and hardened | ⚠️ optional |

**Eight page types maximum, five at launch.** Any addition must justify itself against `CONTENT_MODEL.md` §5.
