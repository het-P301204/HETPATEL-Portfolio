# Question Typography

**Date:** 2026-08-14 (Phase 5C)

**Established (5B):** the question is the first paragraph, not a display element. The page must not start twice.

**5C question:** what is the *minimum* intervention that makes it read as the opening?

---

## Options tested

| | Intervention | Starts twice? | Works at 150 words? | Verdict |
|---|---|---|---|---|
| **A** | **Same size, OPEN space above only** | **No** | **Yes** | ✅ **Recommended** |
| B | Slightly larger (21px) | Slight | Marginal | ◐ |
| C | Weight variation (500) | Slight | Yes | ❌ Conflicts with weight discipline |
| D | Italic or other emphasis | Yes | No | ❌ Italic is reserved; also harms readability at length |
| E | Subtle scale increase (20px) + space | Barely | Yes | ◐ Fallback |

---

## Recommendation: A — no typographic intervention at all

**The question is body prose. 19px, weight 400, Newsreader Text, identical to the paragraph after it.**

Its status as the opening is carried entirely by:

1. **Position** — first prose after the apparatus.
2. **The OPEN gap above it** (~68px), which is the largest gap on the page until the artifacts region.
3. **Content** — it is written as a question, so it reads as one.

**Nothing else is needed.** This is the same principle applied at the closing movement in `UNCERTAINTY_TYPE.md`: position over decoration, applied consistently at both ends so the document reads as continuous prose rather than as a sequence of designed components.

---

## Why the "slightly larger" options were not taken

B and E are tempting because they cost little and make the opening feel deliberate.

**But at 150 words they fail.** A 21px opening followed by two 19px paragraphs is top-heavy — the framing outweighs the content, which is the exact failure that eliminated the display-question options in 5B.

**And the gain is small.** The OPEN gap already does the work. Adding 2px buys marginal emphasis at the cost of an inconsistency that has to be maintained everywhere the question appears — including in the homepage feature and the index framing line.

**E is retained as the fallback** if 5D shows the opening reads as undifferentiated.

---

## In other contexts

| Context | Treatment |
|---|---|
| Homepage featured investigation | Identical — body size, OPEN above |
| Index framing line | 17px, derived from the question but not the question itself |
| Notes | No question — a note is an observation |

---

## 5D validation

1. Does the reader recognise where the argument begins, without a heading?
2. At 150 words, does the opening feel proportionate?
3. At 2,500 words, is the question still identifiable as the entry point after scrolling back?
4. Does the page read as starting once?
