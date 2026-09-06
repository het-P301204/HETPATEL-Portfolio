# Phase 5B → 5C / 5D Handoff

**Date:** 2026-08-14

---

## WHAT 5C MUST DECIDE

1. **Serif family for prose** — the highest-stakes decision in the project. A genuine text face; not literary (F4), not display. Must hold at the reading measure across 400–2,500 words.
2. **Sans family for apparatus** — must look like the serif's colleague, not its opposite. Compatible x-height and temperament; must hold at small sizes, which is its entire job.
3. **Mono family** — literals only.
4. **Type scale values** for L1–L5, and whether L2 is needed at all.
5. **Line-height values** — prose, titles, apparatus, code. **Blocks the spacing scale**, which is type-relative.
6. **The base spacing unit**, derived from body line-height, and the four levels from it. **OPEN:NORMAL must be ≥ 2.2:1.**
7. **Colour values** for the eight roles, light and dark. **Greyscale gate must pass.**
8. **Accent hue** — not cool-cyber (cyan, electric blue, neon green, purple).
9. **Whether the head apparatus uses labelled pairs or bare values** — typographic, not spatial.
10. **Font-loading strategy and metric-compatible fallbacks.** The measure is in `ch`, so a fallback with different metrics changes the column width. This is the main layout-stability risk.

---

## WHAT 5D MUST PROTOTYPE

**The investigation page, at three lengths, with real content.**

| # | Test | Why it cannot be settled on paper |
|---|---|---|
| 1 | **OPEN:NORMAL ratio** at 2.2, 2.5, 3.0 | The movement markers are the load-bearing structure. Most likely thing in this spec to be wrong |
| 2 | **Reading measure** at 64/68/72ch | Depends on the 5C serif's metrics |
| 3 | **Register distinction at 375px** | Size ratio compresses; family must carry it |
| 4 | **Does uncertainty get missed?** | Marked by position alone. Escape hatch is a heading — evidence required, not a hunch |
| 5 | **Are artifacts findable** in a 2,000-word piece? | Determines whether a label or hairline is needed |
| 6 | **Four nav links at 320px** | Determines whether a menu is ever needed |
| 7 | **Apparatus pair wrapping** at 480–600px | Must stay a dense block, not become a spaced list |
| 8 | **Short investigation** at 150 words | Does it read as complete or as a fragment? |
| 9 | **Heading-navigation** with a screen reader | Shallow tree means movements are not jumpable. Is that a real barrier? |
| 10 | **Greyscale** | Registers still distinguishable? |

---

## WHAT MUST NOT CHANGE WITHOUT REVIEW

1. **Reasoning before artifacts.**
2. **Uncertainty in the main column**, same type, marked by position only.
3. **One left edge** for everything.
4. **No side region at any breakpoint** — the Tufte guarantee.
5. **Two containers only** — code, figures.
6. **Status as a word**, no colour.
7. **Absence renders nothing** — no placeholders.
8. **Document order = visual order** at every viewport.
9. **Measure capped**; never grows past ~74ch.
10. **No sticky header.**

---

## OPEN QUESTIONS

1. Labelled pairs or bare values in the head? *(5C)*
2. Does the artifact group need a label? *(5D)*
3. Does uncertainty need a heading? *(5D)*
4. Is L2 needed, given most investigations have no headings? *(5C/5D)*
5. Should the foot register show a "published" entry, or only revisions? *(5D — a lone "published" line may look like an empty log)*
6. Does the index framing line sit at L3 or L4? *(5C)*

---

## HIGH-RISK ASSUMPTIONS

| # | Assumption | Risk if wrong |
|---|---|---|
| **A1** | Space alone marks the four movements | If it fails, headings are needed — and the piece starts reading as a form |
| **A2** | Family contrast survives mobile compression | If it fails, the two-register idea has no carrier at the most common viewport |
| **A3** | **The foot register will eventually fill** | If Het never revises anything, the concept's distinctiveness never materialises |
| **A4** | 68ch is right for the chosen serif | Cheap to correct in 5C |
| **A5** | A short investigation reads as complete | If it reads as a fragment, short work must move to notes entirely |
| **A6** | Four nav links fit at 320px | Would force a menu — a small but real concession |

**A3 is the one that cannot be tested in 5D.** It is a bet on content behaviour over twelve months, and it is the reason the exit condition exists.

---

## NEEDS REAL SCREEN VALIDATION

Rhythm ratios · measure with the actual serif · register contrast at 375px · apparatus wrapping · short-page balance · long-page monotony · greyscale · 200% zoom · 320px navigation · CLS on font swap.

**Nothing in the above can be settled by reasoning.** They are all rendering questions.
