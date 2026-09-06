# Typographic Rhythm

**Date:** 2026-08-14 (Phase 5C) · Testing the Phase 5B spacing ratio against real type metrics.

---

## The base unit

**Base = body line-height = 19px × 1.65 ≈ 31px.**

Spacing is expressed in multiples of this, so the rhythm scales with the type and with user font-size preferences.

---

## ⚠️ Testing the 5B ratio: OPEN : NORMAL ≥ 2.2 : 1

**5B specified NORMAL 1×, OPEN 2.5×.** Tested against the chosen metrics:

| Level | 5B multiple | **5C revised** | Desktop px | Reasoning |
|---|---|---|---|---|
| TIGHT | 0.4× | **0.4×** | ~12px | Label→value. Holds |
| **NORMAL** | 1× | **0.85×** | **~26px** | **Revised down.** At 1.65 leading, a full line-height gap between paragraphs reads as *too* separated — the block loses cohesion. 0.85× keeps paragraphs as one argument |
| **OPEN** | 2.5× | **2.2×** | **~68px** | **Revised down.** With NORMAL reduced, 2.2× preserves the required ratio while avoiding fragmentation |
| MAJOR | 4.5× | **4×** | ~124px | Region boundaries. Reduced proportionally |

**Resulting ratio: 2.2 ÷ 0.85 = 2.59 : 1** — comfortably above the 2.2:1 minimum, achieved with *smaller absolute gaps* than 5B proposed.

### Why both values came down

5B set the scale before the type existed. With generous leading (1.65) already separating lines, **the paragraph gap does less work than it would at tighter leading** — so a full line-height gap over-separates.

Reducing NORMAL then allows OPEN to reduce too while *increasing* the ratio. **The movements become more distinct, not less, and the page becomes less airy.**

This directly addresses the F6 "too sparse" risk: the earlier scale would have produced a page with large gaps and modest content.

**Still a hypothesis.** 5D must test the pair at (0.85 / 2.2), (1.0 / 2.5) and (0.8 / 2.4) with real prose at three lengths.

---

## Mapped relationships

| Relationship | Level | px (desktop) |
|---|---|---|
| Title → head apparatus | TIGHT | ~12 |
| Head apparatus → question | **OPEN** | ~68 |
| Question → reasoning | NORMAL | ~26 |
| Paragraph → paragraph | NORMAL | ~26 |
| Reasoning → findings | **OPEN** | ~68 |
| Findings → uncertainty | **OPEN** | ~68 |
| Uncertainty → artifacts | MAJOR | ~124 |
| Artifacts → foot register | MAJOR | ~124 |
| Foot register → related | MAJOR | ~124 |
| L2 heading → its paragraph | TIGHT | ~12 |
| Paragraph → following L2 | OPEN | ~68 |
| Within apparatus pairs | TIGHT | ~12 |
| Revision entry → entry | TIGHT–NORMAL | ~18 |
| Index row → row | NORMAL | ~26 |

**Uncertainty receives OPEN — identical to every other movement.** Extra space would be emphasis by another route.

---

## Heading spacing asymmetry

Headings sit **close to the text they introduce** (TIGHT below) and **far from what precedes** (OPEN above). This is standard editorial practice and it is what makes a heading read as attached rather than floating.

---

## Mobile

All multiples hold; the base shrinks with the type (17px × 1.65 ≈ 28px). NORMAL ≈ 24px, OPEN ≈ 62px.

**Proportions are preserved automatically** — the direct benefit of a type-relative scale over a fixed pixel scale.

---

## 5D validation

1. Three ratio pairs at 150 / 800 / 2,500 words.
2. **Are the four movements perceptible without headings?** The load-bearing question.
3. Does a 2,500-word page feel structured or monotonous?
4. Does a 150-word page feel complete or fragmentary?
5. Do movements remain perceptible at 375px, where less of the page is visible?
