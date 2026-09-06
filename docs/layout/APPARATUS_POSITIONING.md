# Apparatus Positioning

**Date:** 2026-08-14 (Phase 5B) · Model C′ geometry.

---

## Three positions

### 1. HEAD — fixed facts

**Position:** immediately after the title, TIGHT below it, OPEN above the question.
**Contains:** `status` · `date` · `domain` · `origin`
**Form:** compact label/value pairs. A definition list semantically.
**Layout:** pairs run inline across the measure at desktop, wrapping to two or three rows at narrow widths.
**Width:** full reading measure.
**Density:** TIGHT internal spacing. This density is the register signal.
**Never empty** — all four fields exist for every investigation by definition.

### 2. INLINE — asides

**Position:** in the prose flow, at the point of relevance.
**Contains:** a short aside, a note on why an approach was chosen, a pointer to a related investigation.
**Form:** one to three sentences in the apparatus register.
**Layout:** full measure, left edge shared, marginally narrower right edge if any distinction is needed at all.
**Spacing:** NORMAL above, TIGHT below — attaches to what precedes.
**Frequency:** rare. **Zero on most investigations, and that is expected.**

### 3. FOOT — accreting revision register

**Position:** after all prose and artifacts, MAJOR space above.
**Contains:** dated entries recording publication and subsequent revisions.
**Form:** date + short statement, one per line, chronological.
**Layout:** full measure. Dates left-aligned in a consistent column so entries scan vertically.
**Density:** TIGHT.
**Empty at launch on every page — renders as nothing** (VP-7).

---

## Ordering

```
title
head apparatus          status · date · domain · origin
question
reasoning               (inline asides where relevant)
findings
what I couldn't determine
artifacts               (if any)
foot register           (if any revisions)
related work            (if any)
```

**Document order equals reading order equals visual order at every viewport.** Nothing is repositioned.

---

## Alignment

**Everything shares the reading column's left edge.** No indentation, no hanging labels, no offsets, no centring.

Within the head, label and value may align in two soft columns at desktop — a tabular alignment inside the block, not a page-level grid.

---

## Proximity rules

| Pair | Rule |
|---|---|
| Title ↔ head | TIGHT — they read as one unit |
| Head ↔ question | OPEN — a clear boundary before the argument |
| Inset ↔ preceding paragraph | Closer than to the following one |
| Foot ↔ preceding content | MAJOR — clearly page furniture |

---

## When there is almost nothing to put in the apparatus

**The launch condition, and the design must be intentional in it.**

| Position | At launch | Renders as |
|---|---|---|
| Head | Four real fields | A dense, complete block |
| Inline | Usually zero | **Nothing** |
| Foot | Zero revisions | **Nothing** |

**So at launch the apparatus is the head block alone** — which is exactly the "conventional byline" concession made in `TWO_REGISTER_GEOMETRY.md` §1.

**Why this is still intentional rather than thin:**
- The head is genuinely full. It is never a half-empty region.
- The absent positions render nothing at all — no headings, no placeholders, no reserved space.
- A reader encountering their first investigation sees a well-set article with an unusually specific byline. Nothing signals absence.

**What is not done:** padding the head with derived fields (word count, read time, tag counts) to make it look substantial. That is decorative metadata, and it is the failure this model was chosen to avoid.

---

## Mobile

**No change.** Head pairs wrap to more rows; insets and foot entries are already full-measure. The structure is identical because it was never columnar.
