# Reasoning Flow

**Date:** 2026-08-14 (Phase 5B)

---

## The sequence and its spacing

```
question                          ← first paragraph
  NORMAL
what I did, and why               ← may run several paragraphs
  OPEN
what I found
  OPEN
what I couldn't determine
  MAJOR
artifacts                         (optional)
  MAJOR
foot register                     (optional)
  MAJOR
related work                      (optional)
```

**Movements are marked by space alone.** No headings by default, no rules, no numbering, no cards.

---

## Non-uniform treatment is required

The movements are **not** visually identical, and forcing them to be would produce the template monotony the voice work warns against.

| Movement | Typical extent | Treatment |
|---|---|---|
| Question | 1 paragraph | Prose |
| What I did + why | 1–6 paragraphs | Prose; may contain inline asides, code, a figure |
| What I found | 1–3 paragraphs | Prose |
| What I couldn't determine | **1–2 sentences to 1 paragraph** | Prose, identical treatment |
| Artifacts | A short list | Register change |
| What changed | Rare | Prose or a foot entry |

**Only "what I couldn't determine" has a fixed position.** The others vary in length freely, which is what keeps the shape from becoming a form.

---

## Headings: permitted but not default

At ~1,200 words and above, a long "what I did" movement may take internal headings. Then:

- Headings are **L2, serif**, subordinate to the title.
- They appear **only inside** a movement, never as movement labels.
- **Never** a heading reading "What I found" or "Limitations" — that converts movements into form fields.

**Default: no headings.** Most investigations should have none.

---

## At 150 words

```
title
head apparatus
question                    (1 paragraph)
  OPEN
what I did + found          (1–2 paragraphs, may merge)
  OPEN
what I couldn't determine   (1 sentence)
```

Three movements, ~150 words, complete. **The page ends there.** No artifacts section, no foot register, no related work, no padding.

**Merging "what I did" with "what I found" is permitted at this length** — at 150 words a boundary between them would be artificial.

---

## At 2,500 words

Same structure; "what I did" expands and may carry headings, insets, code and a figure. The OPEN gaps remain the primary structure, and in-page anchors become useful for retrieval.

**The risk at length is monotony** — see `LAYOUT_FAILURE_TEST.md` F10. Mitigated by genuine variation in paragraph length, occasional insets, and the permitted internal headings.

---

## What must never happen

| Prohibited | Why |
|---|---|
| Each movement in a card | Rejected container policy |
| Movement labels as headings | Turns an argument into a form |
| Numbered movements | Same |
| Uniform paragraph counts | Manufactured symmetry |
| A "Limitations" heading | `UNCERTAINTY_SYSTEM.md` — only permitted as a last-resort escape hatch with evidence |
| Extra space before uncertainty | Emphasis by another route |

---

## Recognisable without being repetitive

**Recognisable** comes from: consistent movement order, consistent OPEN gaps, uncertainty always in the same position.

**Non-repetitive** comes from: variable movement lengths, optional merging at short lengths, optional headings at long lengths, insets appearing only where genuinely useful.

**The balance is the point.** A reader should learn where to find things without feeling they are reading a filled-in template.
