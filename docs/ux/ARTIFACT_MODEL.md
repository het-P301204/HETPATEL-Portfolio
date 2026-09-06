# Artifact Model

**Date:** 2026-08-14 (Phase 3)

---

## 1. Definition and the governing rule

> **An artifact is evidence attached to an investigation. It never stands alone.**

This single rule does most of the work in this document. It is what prevents the site becoming a project dump, and it is why repository count can never become the metric — which matters because Phase 1 established that Het loses the artifact-volume comparison today and does not need to enter it later.

---

## 2. Types and states

| Type | Typical location |
|---|---|
| Repository | GitHub |
| Tool / demo | GitHub, or a deployed URL |
| Document | Site-hosted, or PDF |
| Diagram | Site-hosted |
| Public report / writeup | Site-hosted or external |
| Dataset | GitHub, where safe |

| State | Meaning | Shown as |
|---|---|---|
| **working** | Runs; does what it claims | Normal link |
| **partial** | Incomplete or superseded; stated honestly | Link plus a one-line qualifier |
| **archived** | No longer maintained | Link plus a stated reason for stopping |
| **unavailable** | Exists but cannot be published | **Nothing rendered — see §5** |

**State is stated in prose, not as a badge.** A coloured badge is the pattern rejected in `../research/GENERICITY_ANALYSIS.md` §5A as a corporate-sameness marker. *"The scanner works for the two providers I tested and nothing else"* carries the same information with more credibility.

---

## 3. Where artifacts appear

| Location | Treatment |
|---|---|
| Investigation detail | **Primary home.** After the reasoning, near the end |
| Investigation index | A quiet indicator that evidence exists — not a screenshot |
| Homepage | **Only** via a featured investigation. Never a standalone artifact showcase |
| About | A plain sentence naming what has been built. No cards |
| Dedicated artifact index | **Only above ~15 artifacts.** See §6 |

**Artifacts appear after reasoning, never before it.** The order encodes the brand: a visitor should encounter *why* before *what*. Leading with the artifact makes the site a project gallery with commentary — the inversion the concept exists to avoid.

---

## 4. Screenshots

Permitted for tools and demos where safe, with two hard rules:

1. **Never from professional work.** No exceptions — see `CONFIDENTIAL_WORK_MODEL.md`.
2. **A screenshot must show something specific**, not decorate. A dashboard image that conveys nothing is ornament, and ornament is what the corporate-genericity patterns are made of.

**Not a card thumbnail.** Phase 1 found screenshot-card grids to be the dominant convention in both the archetype and the strongest peer portfolio. The index shows text.

---

## 5. When an investigation has no public artifact

**Nothing is rendered.** No placeholder, no empty slot, no "artifact unavailable", no greyed panel.

This matters more than it appears. Most professional investigations will have no artifact, and any visual marker for the absence would:
- draw attention to what is withheld — banned by the confidentiality principle
- imply the investigation is incomplete, which it is not
- create a recurring hole in the layout that reads as a defect

**An investigation without an artifact is complete.** Its evidence is the reasoning. This is precisely what makes the model work at zero repositories.

---

## 6. Growth thresholds

| Artifact count | Treatment |
|---|---|
| 0 | Nothing. The site is coherent — this is the current state |
| 1–5 | Inside investigations only; About names them in a sentence |
| 6–15 | Investigation index gains an "has artifact" filter |
| 16+ | A dedicated artifact index becomes justified — **but it is a view over investigations, not a separate section** |

**Even at 40 artifacts there is no "Projects" section.** An artifact index is a filtered view of investigations that produced something. The relationship stays intact, so the brand does not drift toward artifact-counting as the ecosystem grows.

---

## 7. Failure modes

| Risk | Guard |
|---|---|
| Artifacts become the identity | Rule 1 — never standalone; index is text |
| Repository count becomes the metric | No counters anywhere. Volume is never surfaced as a number |
| Weak artifacts dilute strong reasoning | A weak artifact can be omitted; the investigation stands alone |
| Broken or stale links | State must be maintained. A dead link contradicts the honesty premise directly |
| Screenshot decoration | Rule: must show something specific |

**The last-but-one is the most likely to actually happen.** A site premised on intellectual honesty that links to a repository which no longer runs undermines itself more than a site that never claimed rigour. **Artifact state needs periodic review** — a maintenance cost accepted deliberately, and one reason to keep artifact count modest rather than maximal.
