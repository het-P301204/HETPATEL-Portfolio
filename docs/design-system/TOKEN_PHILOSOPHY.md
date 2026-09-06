# Token Philosophy

**Date:** 2026-08-14 (Phase 5A) · Categories only. **No values, no CSS, no Tailwind config.**

**Governing constraint:** the system must remain understandable by one developer. Every token is a name to remember and a decision to maintain.

---

## Categories that earn their place

| Category | Approximate count | Why tokenised |
|---|---|---|
| **Colour** | ~8 roles × 2 schemes | Every value appears in both light and dark; hard-coding would guarantee drift |
| **Type family** | 3 | Serif, sans, mono. Referenced constantly |
| **Type scale** | 5 levels | L1–L5. The hierarchy depends on consistency |
| **Space scale** | ~6 steps | The primary structural tool. Must be consistent to mark movements reliably |
| **Measure** | 2–3 | Reading measure, index width, figure width |
| **Line height** | 3–4 | Prose, titles, apparatus, code — a register signal, so it must be systematic |

**Total: roughly 40 tokens.** Small enough to hold in one head.

---

## Categories deliberately NOT tokenised

| Not tokenised | Why |
|---|---|
| **Border / radius** | Two containers exist (code, figures) and one or two rules. Three or four hard-coded values, not a system. Tokenising radius invites rounded things |
| **Shadow** | None exist |
| **Motion** | Near-zero. One or two durations, hard-coded where used |
| **Breakpoints** | Two or three, used in a handful of places. A named scale implies more responsive complexity than exists |
| **Z-index** | Nothing overlaps |
| **Opacity** | Contrast is handled by colour roles; opacity scales invite failing contrast quietly |
| **Component tokens** | No component library yet. Premature |
| **Semantic aliases** (`--color-success`) | The site has no success state. Aliasing creates vocabulary for things that do not exist |

---

## The principle

> **Tokenise what varies systematically. Hard-code what occurs two or three times.**

A token for a value used twice is indirection without benefit — it adds a lookup, a name, and a maintenance obligation for nothing.

**The failure to avoid:** a token system larger than the design it describes. It is common, it feels rigorous, and it produces a design system nobody can hold in mind — which on a one-developer project means it gets bypassed.

---

## Naming

**Functional, not descriptive.**

- ✅ `text-primary`, `text-apparatus`, `space-movement`, `measure-reading`
- ❌ `warm-gray-700`, `space-4`, `text-sm`

Functional names survive a value change; descriptive names become lies the moment a value is adjusted. `warm-gray-700` used for apparatus text is wrong the day the apparatus gets darker.

**Space names carry meaning:** `space-paragraph` and `space-movement` encode *what the gap is for*. This makes VP-5 — the movement gap must be visibly larger than the paragraph gap — a property of the token names rather than a rule someone has to remember.

---

## Scheme handling

Colour tokens resolve per scheme via `prefers-color-scheme`. **One set of names, two sets of values.**

No JavaScript, no data attributes, no class toggling — consistent with `COLOR_ARCHITECTURE.md` (no toggle at launch).

---

## What 5B–5G may add

| Phase | Likely addition |
|---|---|
| 5B | Space scale values; measure values |
| 5C | Colour values; family selections; type scale values |
| 5D/5E | Possibly one or two component-level values |
| 5F | One or two motion durations |

**Any new *category* must be argued against this document.** Adding values to an existing category is routine; adding a category is a structural change.

---

## Test

> **Could a developer returning after six months hold this system in their head?**

If not, it is too large — and the correct response is to remove tokens, not to write documentation explaining them.
