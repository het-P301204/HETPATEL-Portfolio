# Mobile Layout

**Date:** 2026-08-14 (Phase 5B)

**The headline:** because the apparatus was never columnar, mobile is **not a transformation**. Model C′ is already the mobile layout.

---

## Element classification

| Element | Classification | Detail |
|---|---|---|
| Header | **RETAIN** | Four links fit at 375px. No hamburger |
| Back link | **RETAIN** | Small, above title |
| Title | **CONDENSE** | Type steps down more than body does — large display sizes are disproportionate on a narrow measure |
| **Head apparatus** | **RETAIN + CONDENSE** | Four pairs wrap from one row to two or three. Stays a dense block, not a spaced list |
| Question | **RETAIN** | Unchanged. First paragraph |
| Reasoning | **RETAIN** | Unchanged; measure floors at ~45–55ch |
| Inline insets | **RETAIN, INLINE** | Already inline. Type register alone distinguishes them |
| Findings | **RETAIN** | Unchanged |
| **Uncertainty** | **RETAIN** | **Never condensed, never moved, never collapsed** |
| Artifacts | **RETAIN** | List; may wrap to two lines per entry |
| Foot register | **RETAIN + CONDENSE** | Date may move above its entry rather than beside it |
| Related work | **RETAIN** | Two to four rows |
| Footer | **CONDENSE** | Stacks |
| Index rows | **CONDENSE** | Title, framing line, metadata each on their own line |
| Filters (at volume) | **MOVE** | Below the first rows rather than pinned above |

**Nothing is REMOVED. Nothing is REORDERED.** Every audience gets the same document in the same order.

---

## Why the reasoning ↔ apparatus relationship survives

Three mechanisms, none of which depends on width:

1. **Proximity** — the head sits TIGHT beneath the title and OPEN above the question, at every viewport. Its attachment is vertical, and vertical relationships do not break when the column narrows.
2. **Type register** — serif prose against sans apparatus. Unaffected by width. This is why `TYPE_CONTRAST.md` requires family to be the primary carrier rather than size.
3. **Density** — the apparatus stays tight while prose stays open. The textural contrast is width-independent.

**The relationship was never spatial in the horizontal sense**, so there is nothing for a narrow viewport to destroy. This was the decisive argument for Model C over a side column.

---

## Type scale on mobile

- **Body steps down modestly.** Mobile readers are not reading less carefully; a large step down would be the wrong trade.
- **Title steps down more.**
- **Apparatus barely changes** — it is already small, and it is information, not fine print.

**Consequence:** the size ratio between prose and apparatus compresses. Accepted — family and line-height carry the distinction. **Validated in 5D at 375px.**

---

## Touch and interaction

- Touch targets adequately sized; links in prose have sufficient line-height not to crowd.
- **No hover-dependent information** — hover does not exist here.
- Filters usable one-handed.
- **No sticky elements** consuming vertical space.

---

## Long investigations on mobile

A 2,500-word piece is a long scroll. Supports:
- In-page anchors where the piece has internal headings.
- Movement spacing does the structural work — **the OPEN:NORMAL ratio matters more on mobile**, where less of the page is visible at once and the reader has fewer cues.

**No pagination, no "load more" within an article, no collapse.**

---

## Validation for 5D

1. 375px and 320px.
2. Does the question appear above the fold?
3. Do four apparatus pairs wrap gracefully?
4. Are prose and apparatus still distinguishable at the compressed size ratio?
5. Four navigation links on one line at 320px?
6. 200% zoom on mobile.
