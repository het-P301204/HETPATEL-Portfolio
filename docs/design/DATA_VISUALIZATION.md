# Data Visualisation

**Date:** 2026-08-14 (Phase 4)

---

## Verdict: NO, with one narrow exception

Each proposed use tested for whether real data exists and whether visualising it would inform.

| Proposed use | Real data? | Informs? | Verdict |
|---|---|---|---|
| **Investigation timeline** | Yes — dates exist | ❌ No. With 3–25 items a dated list *is* the timeline, and it is more precise | ❌ **NO** |
| **Relationship graph** | Yes — links exist | ❌ No. A graph of eight nodes is decoration; banned as "random network nodes" | ❌ **NO** |
| **Technical findings charts** | ❌ No — findings are confidential | — | ❌ **NO** |
| **Project evolution** | ❌ No — near-zero artifacts | — | ❌ **NO** |
| **Learning progression** | ❌ No, and it is unmeasurable | ❌ Would be a skill chart in disguise | ❌ **NO** |
| **Domain coverage** | Yes — domain tags exist | ❌ No. It would visualise how *few* domains are covered | ❌ **NO** |
| **Contribution / activity** | Yes, via GitHub | ❌ No. Measures the wrong thing; broadcasts idleness (decision D-010) | ❌ **NO** |
| **Explanatory diagram inside an investigation** | Yes — the concept being explained | ✅ **Yes** — see below | ⚠️ **CONDITIONAL** |

**Seven of eight are rejected**, and the pattern is consistent: either the underlying data does not exist, or a list communicates it better.

---

## The general principle

> **A chart is justified when it reveals a pattern a list would hide.**

At Het's content volume, no such pattern exists. Three to twenty-five dated items are fully comprehensible as text — a visualisation would add machinery, accessibility burden and maintenance while removing precision.

Worse, **most portfolio data visualisation is a disguised metric claim.** Skill radars, learning curves, coverage maps and contribution graphs all assert competence through a picture, which is exactly the unverifiable-metric pattern banned in `../brand/VOCABULARY.md` §5. A chart makes a claim look measured when it is not.

---

## The exception: explanatory diagrams inside investigations

Not data visualisation in the dashboard sense — **conceptual diagrams that explain a relational system.**

Trust boundaries. Control-to-evidence mapping. An entitlement chain. Where data crosses a boundary. These are relationships prose explains poorly, and Phase 1 found them **absent from every cybersecurity site inspected** while Ciechanowski and R2D3 demonstrate their value elsewhere.

**Conditions:** covered in `IMAGE_STRATEGY.md` — explains something prose cannot, readable without colour, text-described, static by default, consistent visual language, expected volume of two or three across the entire site.

**This is the one place `../research/DESIGN_OPPORTUNITIES.md` O4 survives into Phase 4**, and it survives narrowly: as an occasional explanatory device, never as a site-wide visual system.

---

## Revisit conditions

| Trigger | Reconsider |
|---|---|
| 50+ investigations across 8+ domains | A domain distribution view — only if a genuine pattern emerges |
| A published research finding with real data | Charts of the actual data |
| An investigation whose *subject* is data | Visualisation as content, not chrome |

**Not before.** Adding visualisation to make the site look analytical is the fake-dashboard failure with better taste.

---

## What is banned outright

Skill percentages or radars · certification counts as graphics · contribution heatmaps · fake metrics · progress bars · "years of experience" graphics · threat maps · any chart whose underlying numbers cannot be verified by a reader.

**The test:** could a visitor check this number? If not, it must not be drawn.
