# Reading Width

**Date:** 2026-08-14 (Phase 5B)

**The most important spatial decision in the system.** The reasoning column is where the brand promise is delivered.

---

## By content type

| Content | Preferred | Acceptable | Reason |
|---|---|---|---|
| **Investigation prose** | **68ch** | 62–74ch | Sustained reading of 400–2,500 words |
| **Field notes** | **68ch** | 62–74ch | Same measure — they belong to the same system. Notes differ in *length*, not in reading conditions |
| **About** | **66ch** | 60–72ch | Slightly tighter; read once, more reference-like |
| **Technical explanations / code context** | **68ch** prose; code may exceed | — | Code blocks are exempt and may scroll horizontally |
| **Apparatus (head/foot)** | Spans the reading measure | — | It is a block, not a paragraph; its *lines* are short by nature |
| **Index rows** | Up to **46rem** | — | Scanned, not read |
| **Figures** | Up to **46rem** | — | A documented grid exception |

**Notes use the same measure as investigations, deliberately.** Narrowing them would signal they are a lesser class of content. They are shorter, not smaller.

---

## Why 68ch

- **Below ~60ch:** too many line returns; reading fragments; long technical terms (`prefers-color-scheme`, `entitlement-algebra`) force awkward breaks.
- **Above ~75ch:** the eye loses the line return. This is the most common failure on desktop reading sites.
- **68ch** sits in the upper-middle of the classic band, which suits a serif at a comfortable size and tolerates this content's unusually long compound terms.

**It is a judgement within an evidence-based range, not an objectively correct number.** The range matters more than the value, and 5D should test 64 / 68 / 72 with real prose before fixing it.

---

## Long investigations

At 2,500 words the measure does not change, but two supports become relevant:

1. **In-page anchors** — retrieval, not progression. Permitted per `../design/INTERACTION_LANGUAGE.md`.
2. **Movement spacing does the structural work** — at length, the difference between paragraph and movement gaps is what prevents the page reading as an undifferentiated wall.

**No column narrowing at length**, and no multi-column. Both harm reading.

---

## Short investigations

At 150 words the measure also does not change. A short piece is a short column.

**The risk is a wide-looking, nearly-empty page.** Mitigation is vertical, not horizontal: the page ends where the content ends, and the head apparatus gives the piece factual substance. **The measure is never narrowed to make short content look fuller** — that would be layout compensating for content, which is forbidden.

---

## Mobile

The measure floors rather than holding. Below ~480px the column may drop to 45–55ch, which is unavoidable and acceptable — mobile readers are habituated to it.

**Body size does not shrink proportionally.** Mobile readers are not reading less carefully, and reducing the size to preserve character count would be the wrong trade.

---

## Validation for 5D

1. Set real prose at 64 / 68 / 72ch and read all three fully.
2. Check the longest technical terms in the content do not force bad breaks.
3. Verify at 200% zoom the measure remains usable.
4. Verify at 375px the column does not fall below ~45ch.
