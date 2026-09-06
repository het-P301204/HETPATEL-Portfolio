# Art Direction — reset

**Date:** 2026-08-15 · **Status: four directions built and rendered. No direction selected yet.**

---

## Why the previous visual system was rejected

Het rejected the rendered homepage. This document does not defend it. The criticisms are
specific and I can support most of them with numbers from the 5G validation.

| His words | What the measurement says |
|---|---|
| "excessive empty space above the identity" | At 1280 the first word sits **131px** down; the hero is one 34px name plus one paragraph, then **125px of nothing** before anything else |
| "excessively sparse" | Text column is **553px in a 1920px viewport — 29% content, 71% void.** The homepage runs **3,831px** to say what four of the alternatives say in half that |
| "weak navigation presence" | Nav is **15px, `#56524A` secondary grey**, no state beyond an underline. I measured it in 5G and called it "quiet" |
| "visually weak / low-impact" | The largest element on a 1280 screen is **34px**. There is no scale contrast anywhere: 34 → 20.8 → 19 → 15 |
| "overly literary serif presentation" | Newsreader is a long-form *reading* face. See `TYPOGRAPHY_DIRECTION.md` |
| "a large paragraph carrying too much responsibility" | Correct. The lede is the only thing in the first viewport that carries meaning |
| "prototype/internal disclaimer content visible in the page" | **True and indefensible.** `[HYPOTHETICAL VALIDATION CONTENT]` renders above the name on every page. I filed it as "scaffolding" in 5G rather than as the first thing a visitor reads |
| "more like a reading website than a portfolio" | The design system was derived from reading-experience research and it succeeded at being that |

**The process failure underneath it.** Roughly 180 documents were produced across phases 1–5G and
the visual result was not seen until 5G. Reasoning that is never rendered converges on what is
easy to argue for — restraint — because restraint is the position that is hardest to attack in
prose. It is not the position that wins in five seconds.

**Correction to method:** build and render first, document what was seen second. This document was
written after the four directions existed.

---

## What is kept

Non-negotiable, carried forward unchanged into every direction:

Personal brand · portfolio-first · cybersecurity identity · VAPT · regulated assurance · CSCRF ·
IRDAI · ISO 27001 · reasoning · investigations · evidence · honesty · attribution ceiling · no
fabricated work · no generic project cards · no cyberpunk clichés · no consultancy template · no
fake metrics · no dashboard.

**Honesty rules that survived the reset intact:**

- "I assisted on that work. I did not scope it, own it or lead it, and I am not an auditor."
- "Seven months is exposure, not expertise."
- No claim that existing investigations have had conclusions changed.
- No "access control" skill claim.
- **No development metadata in the interface.** Every direction below carries its prototype
  disclosure as an HTML comment, never as visible UI. Investigation titles are placeholders
  pending Het's real work and are labelled as such *in documentation only*.

---

## What is reopened

Typography · scale · composition · whitespace · navigation · hero hierarchy · visual anchors ·
graphic systems · interaction · motion · density · information hierarchy · homepage rhythm ·
colour · depth.

---

## The new brief in one line

> A security engineer with a point of view — not a writer who works in security, and not a
> template with his name in it.

### The five-second test

A security engineer at Google, Microsoft, Apple, Cloudflare, Meta or CrowdStrike opens the site.

| Time | Required reaction |
|---|---|
| 5s | "This person has a point of view." |
| 20s | "I understand what he does." |
| 2m | "I want to inspect his work." |
| 5m | "He has real exposure **and** thinks carefully." |

**The 5s and 20s reactions are the ones the previous design failed.** 2m and 5m it already passed —
the investigation page with its revision register was the strongest thing in the 5G validation and
is carried into every direction below.

---

## Mechanisms permitted

Scale contrast · asymmetric composition · typographic tension · controlled grid · subtle technical
geometry · editorial-technical hybrid · directional movement · intentional density change ·
information layering · micro-interaction · distinctive navigation · strong hero composition ·
restrained purposeful motion · depth through scale, plane and density rather than shadow.

## Mechanisms forbidden

Gradients as decoration · glowing borders · glassmorphism · particles · matrix rain · fake
terminals · fake command lines · fake scanning · CVSS dashboards · neon green · 3D objects ·
abstract blobs · stock security imagery · cursor trails · infinite animation · animation on every
element · project cards · fake metrics.

---

## Motion principle — replaces "near-zero motion"

> **PURPOSEFUL MOTION, NEAR-ZERO DECORATION.**

Every animation must answer *why is this moving?* Acceptable answers: reveal hierarchy, establish
continuity, communicate navigation, indicate interaction, reveal information, connect two states,
show revision, create orientation, reinforce identity.

The 5G validation measured the current site at **zero animated properties site-wide** and
`prefers-reduced-motion` therefore had nothing to suppress. All four directions below introduce
motion and all four ship a real `prefers-reduced-motion` branch that reduces movement without
removing information.

---

## The four directions

Built as working HTML/CSS, rendered at 1280. Each is an independent system — its own type,
palette, grid, composition and interaction model — not four skins on one stylesheet.

| | Name | Idea | Type | Ground | Height @1280 |
|---|---|---|---|---|---|
| **A** | **SIGNAL** | Technical instrument. Statement-led hero at display scale, mono coordinate index | Geist + Geist Mono | Near-black | 1,886px |
| **B** | **LEDGER** | Editorial-technical with a persistent left identity rail and hover-expanding index | Instrument Serif + Inter + IBM Plex Mono | Warm paper | 1,858px |
| **C** | **FIELD** | The name *is* the hero — oversized stacked wordmark, refined monochrome | Inter Tight + Geist Mono | Near-white | 2,216px |
| **D** | **CASEFILE** | Evidence-led. Identity compressed to a band; the work is the homepage | Space Grotesk + JetBrains Mono | Cool near-black | 1,490px |

**Every one is roughly half the height of the rejected homepage (3,831px)** while carrying *more*
information. That is the density correction.

Files: `prototype/v2/{a-signal,b-ledger,c-field,d-casefile}.html`
Side-by-side: `prototype/v2/compare.html` — viewport switcher at 375 / 768 / 1024 / 1280 / 1440.

Verdicts: [`DIRECTION_COMPARISON.md`](DIRECTION_COMPARISON.md).
