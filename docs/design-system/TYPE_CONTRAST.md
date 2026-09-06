# Typographic Contrast

**Date:** 2026-08-14 (Phase 5A)

**The problem:** the two registers must be instantly distinguishable — *without* rules, boxes, colour, or side-by-side position (constraint 25, and Model C removes position). Typography carries the entire distinction.

**The opposing risk:** if the contrast is too strong, the page reads as two unrelated designs stitched together.

**Objective: find the minimum sufficient contrast.**

---

## Available dimensions, ranked

| Dimension | Strength | Cost | Verdict |
|---|---|---|---|
| **Family (serif ↔ sans)** | **Very strong** | None — inherited from Phase 4 | ✅ **Primary carrier** |
| **Size (L3 ↔ L4)** | Strong | Compresses on mobile | ✅ **Secondary carrier** |
| **Line height** | Moderate | None | ✅ **Supporting** |
| **Letter spacing** | Weak–moderate | Harms legibility if overdone | ◐ Minimal use on labels only |
| **Weight** | Strong | Conflicts with weight discipline | ◐ Labels vs values only |
| **Width / density** | Moderate | Inherent to the content shape | ✅ Free — apparatus is naturally short-line |
| **Colour** | Strong | **Fails greyscale and VP-3** | ❌ Not a carrier |
| **Case** | Strong | All-caps is a measured genericity marker | ❌ Rejected |

---

## The recommended combination

**Three dimensions, layered:**

1. **Family** — serif prose, sans apparatus. Does most of the work and survives every degradation.
2. **Size** — apparatus sits a clear step below body prose. Enough to read as subordinate; not so much that it becomes fine print.
3. **Line height** — apparatus is tighter, producing visible density against the prose's openness.

**That is sufficient.** Nothing further is required, and each addition risks the two-designs failure.

**Deliberately not used:** colour (fails greyscale), all-caps (genericity marker), heavy weight contrast (conflicts with the weight discipline), italics (reserved for genuine emphasis in prose).

---

## Why family must be the primary carrier

It is the only dimension that survives every degradation:

| Condition | Family | Size | Line height | Colour |
|---|---|---|---|---|
| Greyscale | ✅ | ✅ | ✅ | ❌ |
| 200% zoom | ✅ | ◐ compresses | ✅ | ✅ |
| Mobile | ✅ | ◐ compresses | ✅ | ✅ |
| High contrast | ✅ | ✅ | ✅ | ◐ |
| Reader mode | ◐ | ❌ | ❌ | ❌ |

**Size compresses on mobile** — the ratio between prose and apparatus narrows because apparatus cannot shrink below legibility while prose steps down. Family contrast is unaffected, which is why it must lead.

---

## Keeping it one design, not two

The families must belong together. Requirements for 5C selection:

- **Shared or compatible vertical proportions.** Wildly different x-heights would make the registers look pasted together.
- **A shared temperament** — both contemporary, or both traditional. A modern geometric sans against a classical old-style serif would read as a collision.
- **Aligned optical sizing.** The sans must hold up at small sizes, since that is its entire job.

**The binding relationship: the sans must look like the serif's colleague, not its opposite.**

---

## The mobile compression problem

On mobile the size ratio narrows. Two possible responses:

**A. Accept it.** Family and line height still carry the distinction. Simplest, and consistent with the responsive foundation.
**B. Compensate** with slightly more letter spacing or weight on labels at small widths. Adds complexity and a breakpoint-specific rule.

**Recommendation: A.** The distinction should be robust enough to survive compression. If it is not, the contrast was under-specified at desktop — which is the real problem to fix.

---

## Verification for 5C and 5D

1. **Greyscale test.** Registers distinguishable? *(Gate 6, `ACCESSIBILITY_FOUNDATION.md`)*
2. **Squint test.** Two distinct textures visible — open prose, dense apparatus?
3. **Coherence test.** Do the two families look like one design?
4. **Mobile test.** Distinction holds at 375px?
5. **Blur test.** At heavy blur, can you still tell where prose ends and apparatus begins?

**Tests 2 and 5 are the useful ones for the *minimum* question.** If the registers are distinguishable when blurred, the contrast is sufficient — and anything beyond that is excess.

---

## The failure to watch for

**Over-contrast.** The instinct in 5C will be to make the apparatus *very* different so it is unmistakable — smaller, lighter, wider-tracked, all-caps.

That produces a page where the metadata looks like it came from a different website, and it converts the apparatus from *a quieter register* into *a separate component*. **The apparatus should read as the same person's handwriting in a smaller pen** — not as a UI element attached to a document.
