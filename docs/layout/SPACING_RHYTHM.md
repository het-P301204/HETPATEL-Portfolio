# Spacing Rhythm

**Date:** 2026-08-14 (Phase 5B) · Conceptual levels and relationships. Token values in 5C.

---

## Four levels

Expressed as multiples of a base unit tied to body line-height, so the rhythm scales with the type rather than with the screen.

| Level | Multiple | Acceptable | Use |
|---|---|---|---|
| **TIGHT** | **0.4×** | 0.3–0.5 | Label → value in apparatus; date → entry in the foot register |
| **NORMAL** | **1×** | — | Paragraph → paragraph. **The base unit** |
| **OPEN** | **2.5×** | 2.2–3.0 | Movement → movement. **The section marker** |
| **MAJOR** | **4.5×** | 4–6 | Page regions: prose → artifacts → foot register → related |

---

## The critical ratio

> **OPEN : NORMAL must be at least 2.2 : 1**

This is how the four movements of an investigation become perceptible **without headings** (VP-5). It is the load-bearing relationship in the whole spatial system.

- **Below 2.2:1** the piece reads as undifferentiated text and the movements disappear.
- **Above ~3:1** it fragments into sections and starts to feel like a form.

**5D must validate this with real prose at three lengths.** It is the single most likely thing to be wrong in this specification.

---

## Mapped to content relationships

| Relationship | Level | Reason |
|---|---|---|
| Title → head apparatus | **TIGHT** | The apparatus belongs to the heading, not the argument |
| Head apparatus → question | **OPEN** | The argument begins here |
| Question → reasoning | **NORMAL** | Continuous prose; the question *is* the first paragraph |
| Reasoning → findings | **OPEN** | A movement boundary |
| Findings → uncertainty | **OPEN** | **Exactly the same as every other movement gap** |
| Uncertainty → artifacts | **MAJOR** | Prose has ended; register changes |
| Artifacts → foot register | **MAJOR** | Another register change |
| Foot register → related work | **MAJOR** | Page furniture |
| Within apparatus (pairs) | **TIGHT** | Density is the register signal |
| Inline inset → surrounding prose | **NORMAL above, TIGHT below** | Attaches to what precedes it |
| Index row → index row | **NORMAL** | Scanning cadence, not reading |

---

## Uncertainty gets no extra space

Its gap is **OPEN**, identical to every other movement boundary.

Extra space would be emphasis by another route — the exact failure `UNCERTAINTY_SYSTEM.md` exists to prevent. **Position is the marker; spacing is not.**

---

## Why a type-relative base

Space tied to line-height keeps the rhythm proportional when the type scale steps down on mobile. A fixed pixel scale would produce gaps that feel correct on desktop and cramped or cavernous on a phone.

**Consequence:** the spacing scale cannot be finalised until 5C fixes line-height. `PHASE5B_HANDOFF.md` records this dependency.

---

## Density per surface

| Surface | Base rhythm |
|---|---|
| Investigation detail | Full scale as above |
| Index | Compressed — NORMAL between rows, no OPEN |
| Notes index | Compressed |
| Homepage | Full scale at top, compressing downward |
| About | Full scale |
| Apparatus (head and foot) | TIGHT throughout |

---

## What this replaces

Rules, borders, and containers. Per `../design-system/DIVIDER_RULES.md`, if a rule seems necessary the diagnostic is usually that **the rhythm is too flat** — OPEN is not sufficiently larger than NORMAL.

**Fix the ratio, not the borders.**
