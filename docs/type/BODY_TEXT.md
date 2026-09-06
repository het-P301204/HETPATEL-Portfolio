# Body Text

**Date:** 2026-08-14 (Phase 5C) · The most important typographic specification.

---

## ⚠️ The measure is revised from Phase 5B

**5B specified 68ch.** Two problems:

1. **`ch` is the advance of the `0` glyph**, not average character width. In most text serifs, figures are narrower than average lowercase — so 68ch commonly renders **more than 68 characters**, pushing past the top of the evidence band.
2. **68 was already at the upper edge** of Bringhurst's 45–75, and above every specific optimum found: ~66 (commonly cited), 50–60 (Ruder), ~55 (Dyson & Haselgrove).

### Revised specification

> **Target: 62–66 characters per line.**
> **Preferred `max-width`: 38rem.** Acceptable **36–41rem**.
> **Verified by counting characters in rendered lines — not by unit arithmetic.**

`rem` rather than `ch` so the column does not silently change width when the typeface changes. At a 16px root, 38rem = 608px, which at Newsreader Text ~19px yields roughly 62–66 characters — **to be confirmed by counting in 5D.**

**Net effect: the column is ~10% narrower than 5B proposed**, and lands nearer the centre of the evidence band rather than its edge.

---

## Specification

| Property | Preferred | Acceptable | Reason |
|---|---|---|---|
| Family | Newsreader, **Text optical size** | — | Display cut is for titles only |
| **Size (desktop)** | **19px** | 18–20px | Serif at 16px is small for sustained reading; above 20px the measure narrows in characters |
| Size (tablet) | 18px | 17–19px | — |
| Size (mobile) | **17px** | 16.5–18px | **Does not shrink proportionally** — mobile readers are not reading less carefully |
| **Line height** | **1.65** | 1.6–1.7 | Serif at this measure needs open leading; below 1.6 the block darkens |
| Weight | 400 | — | Constant. Hierarchy by size and space |
| Tracking | 0 | — | Newsreader Text is spaced for continuous reading |
| Paragraph spacing | **1× line-height** | 0.9–1.1× | See `TYPE_RHYTHM.md` |
| Alignment | **Left, ragged right** | — | Justification without hyphenation produces rivers at this measure |
| Hyphenation | **Off** | — | Browser hyphenation is unreliable across languages and adds visual noise |
| Max-width | **38rem** | 36–41rem | See above |

---

## Inline treatments

| Element | Treatment |
|---|---|
| **Italic** | True italic (Newsreader has one). Genuine emphasis and titles of works only — **never** for uncertainty, asides, or general emphasis |
| **Bold** | Weight 600. **Rare.** Reserved for a term being defined or a genuinely load-bearing phrase. Never for headings — those use size |
| **Inline code** | System mono, ~0.9em, subtle background shift. Must not break the line rhythm |
| **Links** | Underlined, accent colour. See `../color/ACCENT_RULES.md` |
| **Quotations** | Block: indented, no quote marks, no tint panel, no large decorative glyph. Inline: quote marks only |
| **Lists** | Same size and leading as body. Modest indent. **Sparingly** — an argument in prose is stronger than an argument in bullets, and heavy bullet use is a résumé signal |

---

## Why 19px and not 16px

16px is the browser default and suits UI sans. **A serif at 16px reads small**, because serif x-heights are typically lower relative to the em and the fine detail needs size to resolve.

19px with 1.65 leading at 38rem gives a text block that reads as *considered* rather than *dense* — which is the difference between "a working document kept well" and "a blog post."

**Trade acknowledged:** larger type means fewer characters per line at a given width, which is why the max-width and the size were set together rather than independently.

---

## 5D validation

1. **Count characters on ten consecutive lines.** Target 62–66. Adjust `max-width`, not size.
2. Read a full 2,500-word investigation. Fatigue? Adjust leading before size.
3. Read a 150-word investigation. Does it read as complete or as a fragment?
4. 375px: is 17px comfortable at ~45–52 CPL?
5. Windows at 100% and 125% scaling — the harshest rendering case for a text serif.
6. 200% zoom: measure and rhythm hold?
