# Phase 5C — Typography & Colour Specification

**Date:** 2026-08-14 · Complete. No code, no components, no build.

---

## 1. Families

| Role | Family | Licence | Files | Forbidden use |
|---|---|---|---|---|
| **Prose** | **Newsreader** (Text; Display for titles via `opsz`) | OFL | roman + italic (italic conditional) | Apparatus · metadata · navigation |
| **Apparatus** | **Public Sans** (variable) | OFL | 1 | Body prose · titles · question · uncertainty |
| **Literals** | **System mono stack** | — | **0** | Body prose · headings · labels · "looking technical" |

**Two downloaded families. Three files. ~110–180 KB subset.**

**Rationale:** Newsreader was commissioned by Google Fonts and designed by Production Type explicitly for on-screen long-form reading, with three optical sizes. Public Sans is a Franklin-derived grotesque, deliberately neutral, strong at small sizes with tabular figures — the serif's *colleague*, not its sibling. A system mono costs nothing and avoids the category-default JetBrains Mono.

**Fallback pairing** if Newsreader reads academic: **Source Serif 4** + Public Sans (unchanged).

---

## 2. Type scale

| Role | Family | Desktop | Tablet | Mobile | Weight | Leading |
|---|---|---|---|---|---|---|
| Investigation title | Newsreader Display | **34** | 31 | 27 | 400 | 1.2 |
| Section heading (L2) | Newsreader Text | 24 | 23 | 21 | 500 | 1.3 |
| **Body / question / uncertainty** | Newsreader Text | **19** | 18 | **17** | 400 | **1.65** |
| Index item title | Newsreader Text | 21 | 20 | 19 | 400 | 1.35 |
| Index framing line | Newsreader Text | 17 | 17 | 16 | 400 | 1.5 |
| Apparatus value | Public Sans | **15** | 15 | 14.5 | 400 | 1.45 |
| Apparatus label | Public Sans | 13.5 | 13.5 | 13 | 400 | 1.45 |
| Revision statement | Public Sans | 15 | 15 | 14.5 | 400 | 1.5 |
| Revision date | Public Sans tabular | 13.5 | 13.5 | 13 | 400 | 1.5 |
| Site identity | Public Sans | 16 | 16 | 15 | 500 | 1.2 |
| Navigation | Public Sans | 15 | 15 | 14.5 | 400 | 1.2 |
| Code block | system mono | 15 | 15 | 14 | 400 | 1.55 |
| Inline literal | system mono | 0.9em | — | — | 400 | inherit |

**Weights: 400 default · 500 for L2 and identity · 600 for rare inline emphasis. No bold titles.**

---

## 3. Measure — revised from Phase 5B

> **Target 62–66 characters per line. `max-width` 38rem preferred, 36–41rem acceptable.**
> **Verified by counting rendered characters, not by unit arithmetic.**

**Replaces 5B's 68ch.** `ch` measures the `0` advance, which in text serifs is narrower than average lowercase — so 68ch renders *more* than 68 characters. 68 was also above every specific optimum in the research (66 commonly cited; Ruder 50–60; Dyson & Haselgrove ~55).

Net effect: **~10% narrower, nearer the centre of the evidence band.**

---

## 4. Spacing — revised from Phase 5B

Base = body line-height ≈ 31px desktop.

| Level | 5B | **5C** | Desktop |
|---|---|---|---|
| TIGHT | 0.4× | 0.4× | ~12px |
| **NORMAL** | 1× | **0.85×** | ~26px |
| **OPEN** | 2.5× | **2.2×** | ~68px |
| MAJOR | 4.5× | 4× | ~124px |

**Ratio OPEN:NORMAL = 2.59:1** — above the 2.2 minimum, achieved with *smaller* absolute gaps.

**Why both fell:** 5B set the scale before the type existed. At 1.65 leading, a full line-height paragraph gap over-separates. Reducing NORMAL lets OPEN reduce while the ratio *increases* — movements become more distinct and the page less airy, which addresses the F6 "too sparse" risk directly.

---

## 5. Colour — light (canonical)

| Role | Value | Contrast |
|---|---|---|
| Ground | `#FBFAF7` | — |
| Text primary | `#1A1917` | 16.6:1 |
| Text secondary | `#56524A` | 7.4:1 |
| Text muted | `#6E6A60` | **5.3:1** ⚠️ |
| Accent | `#2F4A6D` | 8.2:1 |
| Accent hover | `#1F3452` | 11:1 |
| Rule | `#E4E0D8` | — |
| Code ground | `#F4F2EC` | — |
| Selection | `#DCE4EE` | — |

## 6. Colour — dark (`prefers-color-scheme`, conditional)

Ground `#191816` · primary `#E8E4DC` · secondary `#A9A296` · muted `#8B8478` · accent `#8FB0D9` · rule `#2E2C28` · code `#211F1C`

**Ship only if the warm identity and serif rendering survive. Otherwise light-only.**

---

## 7. Component-level rules

| Element | Rule |
|---|---|
| **Question** | Body type. **No intervention.** OPEN space above is the only marker |
| **Uncertainty** | Body type, primary colour, no italic, no indent, no container, no heading. **Position only** |
| **Status** | Lowercase words, apparatus size, **no colour**, all five identical |
| **Revisions** | Date (tabular) + statement, oldest first, ISO dates, **no colour**, renders only when ≥1 revision exists |
| **Apparatus** | Sentence case, never uppercase. Subordination by size/register/density — **never by low contrast** |
| **Links** | Accent + underline. **Not on index titles** — that keeps accent inside budget |
| **Literals** | Mono only where a proportional setting would mislead |

---

## 8. Confidence

**MEDIUM.**

Lower than 5B, deliberately. The system is coherent and evidence-grounded, and it corrected two 5B assumptions rather than inheriting them.

**But nothing has been rendered**, and five things can only be settled on screen: whether Newsreader reads bookish or academic; the actual character count at 38rem; whether the register survives mobile compression; whether the spacing ratio marks movements without headings; and whether the warm ground reads as paper or cream.

**5D exists to answer exactly these.**
