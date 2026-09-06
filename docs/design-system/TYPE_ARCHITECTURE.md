# Typographic Architecture

**Date:** 2026-08-14 (Phase 5A) · Roles and relationships. **No font families** — those are 5C.

**Inherited (Phase 4):** serif → reasoning/prose · sans → apparatus/interface · mono → literal technical values. Three families maximum.

---

## Role assignment

| Role | Family | Level | Notes |
|---|---|---|---|
| **Site identity** | Sans | L4 | Persistent, small. Prominent only on Home and About |
| **Page / investigation title** | **Serif** | L1 | The largest element on the page; one per page |
| **Section title** *(where used)* | Serif | L2 | Optional — most investigations have none |
| **Body prose** | **Serif** | L3 | The baseline; the reading size |
| **Question** | Serif | L3 | Body size. It is the opening sentence, not a heading |
| **Findings** | Serif | L3 | Prose |
| **Uncertainty** | **Serif, L3, identical to body** | L3 | VP-4. No differentiation whatsoever |
| **Apparatus labels** | Sans | L5 | Smallest; muted |
| **Apparatus values** | Sans | L4 | Small; secondary contrast |
| **Dates** | Sans or **mono** | L5 | Mono if tabular figures aid alignment |
| **Inline insets** | **Sans** | L4 | Prose-shaped content in the apparatus register |
| **Index item title** | Serif | L2–L3 | Carries the index hierarchy |
| **Index metadata** | Sans | L5 | Uniform, subordinate |
| **Links (inline)** | Inherits | — | Underline; accent optional |
| **Code** | **Mono** | L4 | In a container (the only one, with figures) |
| **Literal values inline** | **Mono** | inherits | Identifiers, repo names, hashes, statuses-as-values |
| **Captions** | Sans | L5 | Figures only |
| **Navigation** | Sans | L4 | Four links |
| **Footer** | Sans | L5 | Utility |

---

## The five-level scale

```
L1  Investigation title       serif, largest, once per page
L2  Section / index titles    serif, clearly below L1
L3  Body prose                serif — the page baseline
L4  Apparatus, insets, nav    sans, distinctly smaller
L5  Fine metadata, labels     sans/mono, smallest
```

**The L3 → L4 step is the register boundary** and must read as *a different kind of information*, not merely smaller text. It is the single most important relationship in the system. Specified in `TYPE_CONTRAST.md`.

---

## Weight discipline

**Weight is held near-constant across L1–L3.** Hierarchy comes from size and space.

This follows the measured precedent: the award-winning site in the research holds heading weight at 450 across 192px / 78.4px / 48px / 41.6px. Size alone carries four levels.

**Weight variation is reserved for:**
- Genuine emphasis inside prose (rare)
- Apparatus labels vs values, if needed to distinguish them
- Nothing else

**No bold headings.** A larger serif at the same weight reads as more considered than a bold one, and it keeps bold available for real emphasis.

---

## Line height

| Content | Relationship |
|---|---|
| Prose | Loosest — long-form comfort |
| Titles | Tightest relative to size — large type needs less |
| Apparatus | Tight — part of its density, and part of the register contrast |
| Code | Moderate; must not compress |

**Line-height difference is a legitimate register signal** and does real work alongside the family contrast.

---

## Measure

- **Prose:** the controlling dimension. Set for line-return comfort at 800–2,000 words.
- **Apparatus:** shares the same width as a block but its *lines* are short by nature — label/value pairs, not sentences.
- **Insets:** same left edge, marginally narrower right edge if any distinction is needed.

---

## Mono discipline

Mono is **semantic**, not stylistic. It means *this is a literal value*.

**Permitted:** code blocks · inline identifiers · repository names · file paths · hashes · version strings · possibly dates, for tabular alignment.

**Forbidden:** body prose · headings · navigation · labels-in-general · any use meant to signal "technical".

**Rationale:** JetBrains Mono as an entire body face was measured on zyekh.cloud and reads as costume. Restricting mono to literals makes its appearance informative — when a reader sees mono, they know what kind of thing they are looking at.

---

## Three families is the ceiling

A fourth is decoration. If a need appears that three cannot serve, the answer is a different size or weight within the existing three.

**Risk noted:** three families plus two schemes plus five levels is already a substantial system for one developer to hold. `TOKEN_PHILOSOPHY.md` addresses keeping it tractable.

---

## Open questions for 5C

1. **Serif selection is the highest-stakes decision in the project.** It must be a genuine text face — not a display serif pressed into body service — and it must not read as literary or academic.
2. Whether dates use mono or sans.
3. Whether L2 is needed at all, or whether L1 and L3 suffice given that most investigations have no headings.
4. Whether the sans needs a second weight for the label/value distinction.
