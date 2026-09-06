# Phase 5D — Investigation Page Prototype

**Date:** 2026-08-14

---

## ⚠️ Validation status — read first

**Browser tooling was blocked for the duration of this phase** by the same safety classifier that intercepted it earlier in the project. It fired on the first render attempt and, per its own message, persists for the remainder of the session.

**Therefore:**

| Claim | Status |
|---|---|
| The page was built | ✅ **Yes** — real HTML/CSS, on disk |
| Contrast was validated | ✅ **Yes** — computed exactly from hex values |
| Spacing arithmetic was validated | ✅ **Yes** — computed |
| Measure arithmetic was validated | ✅ **Yes** — computed |
| Semantic structure was reviewed | ✅ **Yes** — by inspection |
| **The page was rendered and looked at** | ❌ **NO** |
| **Characters per line were counted** | ❌ **NO** |
| **Typography was visually judged** | ❌ **NO** |
| **Responsive behaviour was observed** | ❌ **NO** |
| **Dark mode was seen** | ❌ **NO** |
| **Genericity was visually assessed** | ❌ **NO** |

**No claim of visual quality appears anywhere in Phase 5D documentation.** The prototype is built and ready; a session with working browser tooling can run the full test matrix against it immediately.

---

## What was built

No stack existed — 139 documents, zero code. Per the approved complexity budget (static, functionally zero client JS, fully readable without JavaScript, semantic HTML), the prototype is **plain HTML and CSS with no framework and no build step.** That is the minimum, not a new stack.

| File | Purpose |
|---|---|
| `prototype/style.css` | The Phase 5A/5B/5C system, implemented |
| `prototype/investigation.html` | Canonical: ~600 words, 3 revisions, 1 artifact, 1 related item |
| `prototype/short-no-revisions.html` | ~150 words, **0 revisions**, no artifact — tests sparse content and the empty foot register together |
| `prototype/genericity-test.html` | Identical system, generic student content, fictional person |

**Zero JavaScript. Zero images. Two web fonts via Google Fonts CDN** *(production must self-host — see `PHASE5D_PERFORMANCE.md`)*.

---

## Content provenance

All prototype content is **hypothetical and self-initiated**, labelled as such in a banner on every page.

**No professional claims, no client information, no CSCRF or IRDAI detail, no VAPT results, no fabricated experience.** The two investigations describe a lab allow-list ordering problem and a scanner disagreement — both plausible self-initiated work, neither presented as real.

The revision entries are written to test the *concept*, using the "best" register from the 5C specification: they state what changed in understanding and why, not "updated content".

---

## Implementation against spec

| Spec | Implemented | Note |
|---|---|---|
| Newsreader prose, Public Sans apparatus, system mono | ✅ | Via CDN for prototype |
| Body 19/1.65, mobile 17 | ✅ | |
| Title 34px, weight 400, `opsz` 36 | ✅ | Not bold — per spec |
| Apparatus 15px value / 13.5px label, sentence case | ✅ | Definition list |
| Spacing TIGHT/NORMAL/OPEN/MAJOR = 0.4/0.85/2.2/4× | ✅ | Type-relative via `--base` |
| Question = first paragraph, no special type | ✅ | OPEN space only |
| Uncertainty = body type, no marker | ✅ | Position only |
| Status = lowercase word, no colour | ✅ | `closed`, `unresolved` |
| Revisions = date + statement, oldest first, ISO, no colour | ✅ | |
| Absence renders nothing | ✅ | Short page has no artifact/revision/related markup at all |
| Two containers only | ✅ | Code and figures; none used in these pages |
| One rule | ✅ | Above footer only |
| No accent on titles/status/revisions | ✅ | |
| `prefers-color-scheme` dark, no toggle | ✅ | |
| Skip link, semantic landmarks, one `h1` | ✅ | |

---

## Deviations introduced during build

| Deviation | Reason |
|---|---|
| `.proto` banner on every page | Prototype labelling. **Not production.** |
| `!important` on `.movement` / `.question` | Prototype expedient to guarantee the OPEN gap overrides the paragraph rule. **Production must restructure the cascade instead.** |
| `--measure` redefined as the text column, with padding outside | **A real correction — see F1 in `PHASE5D_FINDINGS.md`** |
| Dark muted and secondary values changed | **Real corrections — F2, F3** |
| `font-variant-numeric: oldstyle-nums` on body | An editorial judgment not in the 5C spec. **Untested; flagged.** Newsreader may not carry oldstyle figures, in which case it is inert |

---

## What a browser-enabled session must run

The full matrix is in `PHASE5D_RESPONSIVE.md`, `PHASE5D_REVISION_TEST.md`, `PHASE5D_ACCESSIBILITY.md` and `PHASE5D_GENERICITY_TEST.md`. The three highest-value tests:

1. **Count characters on ten consecutive lines** at 1440px. Target 62–66.
2. **Ask a reader to locate what he couldn't determine.** Found without hunting, or not.
3. **Do the four movements read as distinct** without headings, at 150 / 600 / 2,000 words.

---

> **SUPERSEDED 2026-08-15.** The prototype has since been rendered. The validation-status table above no longer reflects reality — see [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) for what was measured and observed, and [`PHASE5D_FAILURE_REVIEW.md`](PHASE5D_FAILURE_REVIEW.md) V-1 to V-9 for the nine defects rendering found. This document is retained as the record of what was built.
