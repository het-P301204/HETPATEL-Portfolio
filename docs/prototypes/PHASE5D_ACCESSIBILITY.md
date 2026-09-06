# Phase 5D — Accessibility

**Date:** 2026-08-14

**Split status:** contrast was **validated computationally**. Everything requiring rendering or assistive technology was **not tested**.

---

## ✅ Validated — contrast (computed exactly from hex pairs)

### Light (ground `#FBFAF7`)

| Role | Value | Ratio | AA | AAA |
|---|---|---|---|---|
| Primary | `#1A1917` | **16.83** | ✅ | ✅ |
| Secondary | `#56524A` | **7.45** | ✅ | ✅ |
| Muted | `#6E6A60` | **5.17** | ✅ | ❌ |
| Accent | `#2F4A6D` | **8.67** | ✅ | ✅ |
| Accent hover | `#1F3452` | **12.04** | ✅ | ✅ |
| Primary on code ground | `#F4F2EC` | **15.69** | ✅ | ✅ |

### Dark (ground `#191816`) — **after correction**

| Role | Was | Now | Ratio | AA | AAA |
|---|---|---|---|---|---|
| Primary | `#E8E4DC` | unchanged | **13.99** | ✅ | ✅ |
| Secondary | `#A9A296` (7.01) | **`#B0A99C`** | **7.61** | ✅ | ✅ |
| Muted | `#8B8478` (**4.79**) | **`#9C9488`** | **5.92** | ✅ | ❌ |
| Accent | `#8FB0D9` | unchanged | **7.93** | ✅ | ✅ |

**Two corrections applied.** Dark muted at 4.79 sat only 0.29 above the AA floor at 13px — inadequate headroom. Dark secondary at 7.01 sat exactly on the AAA boundary. Both are now comfortable. Detail in `PHASE5D_FAILURE_REVIEW.md` F2.

**Every text role now passes AA in both schemes with margin.** Muted fails AAA in both — accepted, with size-increase as the first remedy if a rendered check shows discomfort.

---

## ✅ Validated — structure (by code inspection)

| Requirement | Status |
|---|---|
| Skip link, first focusable | ✅ |
| One `<h1>` per page | ✅ |
| Landmarks: `header`, `nav`, `main`, `footer`, `article` | ✅ |
| Head apparatus as `<dl>` — semantically label/value | ✅ |
| Revision register as `<dl>` — date/statement | ✅ |
| Sections labelled via `aria-labelledby` | ✅ |
| `aria-current="page"` on active nav | ✅ |
| Document order = visual order (no positioning, no reordering) | ✅ |
| Focus ring: 2px accent, 3px offset, never suppressed | ✅ |
| Links underlined — colour is never the sole affordance | ✅ |
| No hover-dependent information | ✅ |
| No motion, no transitions — reduced-motion is identical by construction | ✅ |
| Status conveyed as a word, no colour | ✅ |
| Uncertainty in the reading flow, no disclosure | ✅ |
| Zero JavaScript — page fully functional with JS disabled | ✅ |

**The `<dl>` choice for both apparatus and revisions is deliberate:** it is semantically what they are, so assistive technology announces label/value pairs correctly without any ARIA.

---

## ❌ Not tested — everything requiring rendering or AT

| Test | Status |
|---|---|
| Keyboard-only traversal | ❌ |
| Screen reader announcement order | ❌ |
| Whether `<dl>` announces usefully in practice | ❌ |
| 200% zoom | ❌ |
| Text-only resize | ❌ |
| Rendering with CSS disabled | ❌ |
| Forced-colours / high-contrast mode | ❌ |
| Greyscale gate (register distinction without colour) | ❌ |
| Touch target sizes | ❌ |
| Muted text legibility at real size | ❌ |

---

## The known structural cost, restated

**Movements are marked by space, not headings.** A screen-reader user navigating by heading gets the title and (on long pages) internal `h2`s — **but cannot jump to "what I couldn't determine".**

This is a genuine accessibility cost of the space-marking decision, recorded honestly in 5B and unchanged here. It strengthens the case for the `UNCERTAINTY_SYSTEM.md` escape hatch — **if heading-navigation testing shows it is a real barrier, a heading is the remedy, not a box or a tint.**

**That test was not run.**

---

## Gate list for a browser-enabled session

1. Keyboard traversal of `investigation.html`.
2. Screen reader: does the apparatus `<dl>` announce as pairs?
3. **Heading navigation — is the shallow tree a barrier?**
4. CSS disabled — order still correct?
5. 200% zoom — no overflow?
6. **Greyscale — are the registers still distinguishable?**
7. Forced-colours mode — does the footer rule survive?
8. 320px — no horizontal scroll?

---
---

# VALIDATED — 2026-08-15

**The split status at the top is superseded.** Contrast was re-computed from *rendered* colours
rather than from hex pairs, and everything requiring rendering was tested. Assistive technology
was still unavailable. Method and evidence labelling:
[`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.

## Contrast — recomputed from the rendered DOM

Read out of `getComputedStyle` on the live page and converted via the WCAG relative-luminance
formula. **These are not the hand calculations from 2026-08-14 — they are independent, and they
agree with them exactly.** 5D-14's arithmetic, including its corrections C2 and C3, was right.

### Light — ground `#FBFAF7`

| Role | Size | Colour | Ratio | AA | AAA |
|---|---|---|---|---|---|
| Body prose | 19px | `#1A1917` | **16.83** | ✅ | ✅ |
| h1 | 34px | `#1A1917` | **16.83** | ✅ | ✅ |
| Nav / nav current | 15px | `#1A1917` | **16.83** | ✅ | ✅ |
| Apparatus value · inset · revision text | 15px | `#56524A` | **7.45** | ✅ | ✅ |
| Footer link | 13.5px | `#56524A` | **7.45** | ✅ | ✅ |
| Link (accent) | 15px | `#2F4A6D` | **8.67** | ✅ | ✅ |
| Apparatus label · region label · revision date · footer | 13.5px | `#6E6A60` | **5.17** | ✅ | ✗ |
| Prototype banner | 13px | `#6E6A60` | **5.17** | ✅ | ✗ |

### Dark — ground `#191816`

| Role | Size | Colour | Ratio | AA | AAA |
|---|---|---|---|---|---|
| Body prose · h1 · nav | 19px | `#E8E4DC` | **13.99** | ✅ | ✅ |
| Apparatus value · inset · revision text | 15px | `#B0A99C` | **7.61** | ✅ | ✅ |
| Link (accent) | 15px | `#8FB0D9` | **7.93** | ✅ | ✅ |
| Apparatus label · region label · revision date · footer | 13.5px | `#9C9488` | **5.92** | ✅ | ✗ |

**All 14 roles pass AA in both schemes.** The muted role is the only one below AAA, at 5.17 (light)
and 5.92 (dark) against a 7.0 threshold — with 0.67 and 1.42 of headroom above the 4.5 AA floor
respectively. That is adequate margin, unlike the 0.29 that 5D-14 caught and fixed.

## A-1 — Text resize: the most serious defect of the phase

**Severity: HIGH.** MEASURED with the browser root font size at 100%, 150% and 200% — the setting a
reader with low vision actually uses.

| Root | Body text | Apparatus | Text column | Median chars |
|---|---|---|---|---|
| 100% (16px) | 19px | 15px | 513px | 64 |
| 150% (24px) | **19px — unchanged** | **15px — unchanged** | 770px | ~96 |
| 200% (32px) | **19px — unchanged** | **15px — unchanged** | **1,026px** | **~128** |

Type was specified in absolute `px`; spacing (`--base`) and the column (`--box`) were in `rem`.
So the two halves of the system responded to the setting differently: **the layout grew and the
text did not.**

A reader who asked for larger text received the same 19px type on a column of double the width —
roughly 128 characters per line against a 62–66 target. **The setting made the page materially
worse than ignoring it entirely would have.**

Browser *zoom* satisfies WCAG 1.4.4 regardless, so this was a technical pass. It was also a
straightforward failure of the thing the criterion exists to protect. 5B explicitly states that
the rhythm should scale "with user font-size preferences"; the `px` implementation defeated it.

| | |
|---|---|
| **OLD** | `body { font-size: 19px }` plus 24 further absolute `px` type sizes |
| **TEST** | Rendered at root 16 / 24 / 32px and counted characters per line |
| **RESULT** | Text did not scale; the measure doubled to ~128 characters |
| **NEW** | Every type size converted to `rem`; breakpoints converted to `em` |

MEASURED after the fix:

| Root | Body | Apparatus | Column | Median chars | Overflow |
|---|---|---|---|---|---|
| 100% | 19px | 15px | 513px | **64** | none |
| 150% | 28.5px | 22.5px | 770px | **63** | none |
| 200% | 38px | 30px | 1,026px | **62** | none |

Everything scales together and the measure holds. Rendering at the default root is unchanged.

## A-2 — Touch targets below the WCAG 2.2 minimum

**Severity: LOW-MEDIUM.** MEASURED: the artifact and related-work links rendered **18px** high,
against the 24×24 CSS px minimum of SC 2.5.8.

The inline exception does not clearly apply — these are standalone links in list items, not links
inside a sentence — and on mobile they are the page's primary tap targets. Footer links, being
genuinely inline in a sentence, are exempt.

| | |
|---|---|
| **OLD** | No vertical padding on list links |
| **TEST** | Measured the hit rectangle of every focusable element at 8 viewports |
| **RESULT** | 18px — six pixels short |
| **NEW** | `.artifacts li a, .related li a { padding: .3em 0 }` |

Inline padding grows the hit area without changing the line box, so nothing moved. MEASURED after:
**26px at every viewport from 320 to 1920.**

## Verified by rendering

| Check | Result |
|---|---|
| Language | ✅ `lang="en"` |
| Page title | ✅ Unique, descriptive, title-then-site |
| Headings | ✅ Exactly one `h1`; `h2` only inside long movements; no level skipped |
| Landmarks | ✅ `header`, `nav[aria-label="Primary"]`, `main`, `article`, `footer`, 3 × `section[aria-labelledby]` |
| Keyboard | ✅ 10 focusable elements, DOM order matches visual order |
| Skip link | ✅ Resolves to `#main`, which exists; moves into view on focus |
| **Focus visible** | ✅ **OBSERVED** — 2px accent outline at 3px offset. 8.67:1 against ground, far above the 3:1 required by SC 1.4.11 |
| Link identification | ✅ Underlined, not colour-only |
| Reduced motion | ✅ **Moot** — MEASURED zero transitions, zero animations, zero transforms, zero keyframes. There is nothing to reduce, so no `prefers-reduced-motion` block is required |
| Images | ✅ Zero, so no alt-text surface |
| Zoom to 200% | ✅ No horizontal overflow at any tested width |
| Reflow (SC 1.4.10) | ✅ No horizontal scroll at 320px |

## Recorded trade-off — region labels are not headings

"Artifacts", "Revisions" and "Related" are `<p class="region-label">` elements referenced by
`aria-labelledby`, which exposes each `<section>` as a **named landmark**. They do **not** appear in
the heading outline.

This is deliberate: they are apparatus, not reasoning, and promoting them to `h2` would put them at
the same level as in-article headings, which is semantically wrong and visually inconsistent with
their 13.5px treatment.

The cost is real: a screen-reader user navigating by heading — the most common method — goes from
`h1` to nothing across a 3,098px page. Landmark navigation covers it, but landmark navigation is
less used.

**Not changed here.** It should be settled in 5E, when the index and About pages establish the
site's overall heading model, rather than decided from one page in isolation.

## Still untested

- **Screen readers.** No assistive technology was available. Semantics are correct by inspection
  and by the accessibility tree; the *experience* is unverified.
- **Voice control**, **switch access**, **Windows High Contrast Mode** — none tested. High Contrast
  Mode is the notable gap for a design that carries meaning in colour-free typographic register.
- **Forced-colors media query** — not implemented, not evaluated.
