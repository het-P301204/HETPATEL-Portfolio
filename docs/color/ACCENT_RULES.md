# Accent Rules

**Date:** 2026-08-14 (Phase 5C)

**Accent: `#2F4A6D`** — deep ink blue. One hue. Light-mode value; dark equivalent `#8FB0D9`.

---

## Where the accent appears

| Use | Accent? | Notes |
|---|---|---|
| **Inline prose links** | ✅ | Plus underline. Colour is never the sole affordance |
| **Artifact links** | ✅ | |
| **Related work links** | ✅ | |
| **Navigation links** | ❌ | Inherit text colour. Current state by weight/underline |
| **Focus ring** | ✅ | Transient |
| **Investigation titles (as links in index)** | ❌ | **They inherit text colour.** See below |
| Headings | ❌ | |
| Status values | ❌ | |
| Revision entries | ❌ | |
| Apparatus labels or values | ❌ | |
| Backgrounds | ❌ | |
| Rules and borders | ❌ | |
| Uncertainty statement | ❌ | |
| Decoration of any kind | ❌ | |

---

## Why index titles are not accent-coloured

An index of 25 investigations with accent-coloured titles would put the accent on 25 of the page's most prominent elements — an order of magnitude above the ~2% target, and it would make the index read as a list of links rather than a body of work.

**Titles inherit primary text colour and are underlined on hover.** They are unmistakably interactive by position and context.

**This is the single decision that keeps accent usage inside its budget**, because the index is where links are densest.

---

## The 2% reference, treated as a reference

The measured precedent — accent on 8 of ~570 elements — is a **calibration point, not a law.**

**Estimated actual usage:**

| Page | Accent elements | Approximate share |
|---|---|---|
| Investigation (short) | 0–3 | <1% |
| Investigation (long) | 4–13 | 1–3% |
| Index (25 items) | 0 | 0% |
| Homepage | 2–6 | ~1% |
| About | 3–5 | ~1% |

**Roughly 0–3% across the site** — within the intended band without policing, because the structural decisions (no accent on titles, status, navigation or headings) do the limiting.

**If a future page exceeds ~5%, the cause will be a new accent use case, not link density.** That is the thing to watch.

---

## The accent's job

**Recognition, not decoration.**

A reader should learn within one page that blue means *this goes somewhere*. Because it means nothing else anywhere on the site, that association forms immediately and never needs re-learning.

**This is the argument for a single-purpose accent** over a palette that also encodes status, domains or emphasis: one meaning, learned once.

---

## Never colour alone

Every accent use is accompanied by another affordance:

| Use | Second affordance |
|---|---|
| Prose links | Underline |
| Artifact links | Underline |
| Focus ring | Visible outline geometry |

Required by `../design-system/ACCESSIBILITY_FOUNDATION.md`, and it means greyscale, forced-colours and colour-blind rendering lose nothing.

---

## Hue review in 5D

`#2F4A6D` was chosen because a link should be legible and unremarkable, with distinctiveness carried by typography.

**The counter-argument, recorded honestly:** a blue link is the web's default, so the accent contributes nothing to identity. The alternate — **oxblood `#8C3A2B` (~7.3:1)** — is more distinctive and pushes toward the literary/academic risk.

**Both must be rendered in 5D and compared** on the same page. This is a judgment call, not a settled decision.
