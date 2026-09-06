# Phase 5C → 5D Handoff

**Date:** 2026-08-14

> **5D's purpose is not to prove the design is beautiful. It is to determine whether the system works when rendered.**

---

## Build one investigation page, three times

**Same page, three content lengths: ~150, ~800, ~2,500 words.** Placeholder prose is acceptable — but it must be *real sentences of technical reasoning*, not lorem ipsum. Lorem ipsum cannot test rhythm, and it cannot test whether uncertainty reads as prose.

**Required elements, in order:** back link · title · head apparatus (status/date/domain/origin) · question · reasoning · findings · uncertainty statement · artifact list · foot register · related work.

**Two variants of the foot register:** zero revisions (renders nothing) and three revisions.

---

## Viewports

**320 · 375 · 768 · 1024 · 1440 · 2560px.** Plus 200% zoom at 1440.

---

## The ten tests, in priority order

| # | Test | Pass condition | If it fails |
|---|---|---|---|
| **1** | **Movement perception.** Are the four movements perceptible without headings? | A reader can point to where findings begin | Adjust ratio before adding headings |
| **2** | **Character count.** Count ten consecutive lines at 38rem | 62–66 characters | Adjust `max-width`, not size |
| **3** | **Register at 375px.** Prose vs apparatus distinguishable? | Obvious at a glance | Family must carry it; check x-heights |
| **4** | **Is Newsreader bookish or academic?** | Reads contemporary, not scholarly | Swap to Source Serif 4 |
| **5** | **Does uncertainty get missed?** Ask a reader to find what he couldn't determine | Found without hunting | Add an L2 heading — **not** a box, tint or icon |
| **6** | **Warm ground: paper or cream?** | Reads as white paper | Move toward `#FCFBF9` |
| **7** | **Muted contrast at 13.5px** | Comfortable, not merely compliant | Raise to 14px first |
| **8** | **Short page complete or fragmentary?** | Reads as a short record | Move genuinely short work to notes |
| **9** | **Long page structured or monotonous?** | Structured | Permit internal L2 headings |
| **10** | **Dark mode: identity and serif rendering** | Warm, not muddy; strokes not spindly | **Ship light-only** |

---

## Spacing ratios to compare

Render the 800-word page three times: **(0.85 / 2.2)** ← recommended · (1.0 / 2.5) ← 5B original · (0.80 / 2.4).

**Test 1 decides between them.**

---

## Accent comparison

Render the same page with `#2F4A6D` (ink blue) and `#8C3A2B` (oxblood). Compare on: distinctiveness, academic drift, and whether links read as unremarkable-and-legible or as expressive.

**This is an unresolved judgment call**, not a settled decision.

---

## Open questions 5D must settle

1. **Labels or bare values** in the head apparatus? (`Status open` vs `open · 2026-03-14 · …`)
2. **Show the foot register with only a "Published" entry?** Current recommendation: no.
3. **Is the italic file needed?** If fewer than a handful of italics per investigation, drop it — saves a font file.
4. Does an inline inset read as an aside, or as a caption/error?
5. Is L2 needed at all, given most investigations have no headings?
6. Do system-mono metrics vary enough to disturb apparatus alignment?

---

## High-risk assumptions

| # | Assumption | If wrong |
|---|---|---|
| **A1** | Space alone marks the movements | Headings needed — the piece starts reading as a form |
| **A2** | Family contrast survives mobile compression | The two-register system loses its carrier at the most common viewport |
| **A3** | Newsreader reads contemporary, not academic | Serif swap — cheap, but it costs the personality that justified the choice |
| **A4** | 38rem yields 62–66 characters | Cheap to correct |
| **A5** | Warm ground reads as paper on uncalibrated displays | The palette's whole differentiation depends on this being perceptible |
| **A6** | Metric-compatible fallbacks hold CLS near zero | Needs real measurement; cannot be derived |

---

## Must not change without review

Reasoning before artifacts · uncertainty in the main column at body type · one left edge · no side region at any breakpoint · two containers only · status as a colourless word · absence renders nothing · document order = visual order · no accent on index titles · apparatus contrast at full AA.

---

## Not in scope for 5D

The homepage (5E) · interaction and motion (5F) · production build · deployment · real content.
