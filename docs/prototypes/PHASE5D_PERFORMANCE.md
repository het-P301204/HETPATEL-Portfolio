# Phase 5D — Performance

**Date:** 2026-08-14 · **Status: STRUCTURALLY VERIFIED, NOT MEASURED.** No browser, so no CLS, LCP or transfer figures.

---

## ✅ Verified by inspection

| Property | Value |
|---|---|
| JavaScript | **0 bytes.** No scripts of any kind |
| Images | **0** |
| Stylesheets | **1** (~7 KB unminified) |
| HTML per page | ~4–6 KB |
| Web font families | **2** (Newsreader, Public Sans) |
| Third-party origins | **2** (fonts.googleapis.com, fonts.gstatic.com) — **prototype only** |
| Render-blocking resources | 1 stylesheet + 1 font CSS |
| Layout containers | 0 |
| Shadows, gradients, filters, transforms | **0** |
| Animations, transitions | **0** |

**The page is HTML, one stylesheet, and two fonts.** Nothing else.

---

## ⚠️ Prototype deviation: fonts are CDN-loaded

`FONT_PERFORMANCE.md` specifies **self-hosted, subset WOFF2**. The prototype uses the Google Fonts CDN because subsetting and self-hosting require downloading and processing font binaries, which was out of scope for a validation prototype.

**Consequences of the deviation, all production-relevant:**

| Issue | Impact |
|---|---|
| Two extra origins in the connection chain | Slower first paint |
| No control over subsetting | Larger payload than the ≤200 KB budget assumes |
| A third-party origin in the CSP | Contradicts treating the site as a security engineering artifact |
| No `size-adjust` metric overrides | **CLS risk unmanaged — see below** |

**Production must self-host.** This is not a preference; it follows from the security posture the site is meant to demonstrate.

---

## ⚠️ The unmanaged risk: font-swap layout shift

`display=swap` is set. A fallback renders first, then swaps.

**This matters more here than on most sites** because the reading measure is fixed in `rem` while the *character count* depends on the face. A fallback with different metrics changes lines-per-paragraph and therefore total page height — shifting everything below.

**Not mitigated in the prototype.** `FONT_PERFORMANCE.md` specifies `size-adjust`, `ascent-override` and `descent-override` for metric-compatible fallbacks, but those values **must be derived by measuring both faces**, which requires rendering.

**Current fallbacks:** Newsreader → Georgia; Public Sans → `system-ui`.

Georgia is a genuine reading serif, so an unswapped render is *plainer*, not *broken*. **And because the register split is family-based, the serif/sans distinction survives even in full fallback** — the two-register system works with zero web fonts loaded. That resilience is a design property, not luck.

---

## Not measured

CLS · LCP · FCP · transfer size · font file sizes · time to interactive · Lighthouse.

**All require a browser.** No performance claim is made.

---

## Production checklist carried forward

1. Self-host, subset to Latin, WOFF2.
2. Derive and apply `size-adjust` / metric overrides for both fallbacks.
3. Preload Newsreader roman only.
4. **Decide whether the italic file is needed at all** — if fewer than a handful of italics per investigation, drop it.
5. Measure CLS; target < 0.05.
6. Verify total font payload < 200 KB.
7. Remove the CDN `<link>` and the two `preconnect` hints.
8. Remove the `.proto` banner.
9. Replace the `!important` spacing hack.

---

## The honest headline

**This is an extremely cheap page**, and that is a consequence of the design rather than of optimisation effort. Near-zero imagery, near-zero motion, no containers and no JavaScript were all decided on brand and accessibility grounds; performance is the by-product.

**Fonts are the entire budget** — which is why the system was constrained to two downloaded families with a system mono.

---
---

# MEASURED — 2026-08-15

**The status line at the top is superseded.** Figures below come from
`PerformanceResourceTiming` on a real network fetch, not from inspection. Method and evidence
labelling: [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.

## Page weight

| Asset | Source | Bytes |
|---|---|---|
| `investigation.html` | local | 5,744 |
| `style.css` | local | 12,599 |
| Google Fonts CSS | `fonts.googleapis.com` | 649 |
| Newsreader roman, variable, latin subset | `fonts.gstatic.com` | **132,000** |
| Newsreader italic, latin subset | `fonts.gstatic.com` | **63,292** |
| Public Sans, latin subset | `fonts.gstatic.com` | **26,832** |
| **Total** | | **~241 KB** |

| Property | Value |
|---|---|
| JavaScript | **0 bytes** — MEASURED, zero `<script>` elements across all nine fixtures |
| Images | **0** |
| SVG | **0** |
| External requests | **4** (1 CSS + 3 woff2) |
| Third-party origins | **2** (`fonts.googleapis.com`, `fonts.gstatic.com`) |

**Fonts are 90% of the page.** The document and stylesheet together are 18 KB uncompressed —
probably 5 KB over the wire with compression. The "extremely lightweight" goal is met decisively
by the markup and missed by the type system.

MEASURED confirmation that subsetting works as intended: Google serves nine `@font-face` blocks
across latin / latin-ext / vietnamese subsets, and the browser fetched **only the three latin
files**. The non-latin subsets stayed `unloaded`. Nothing is being wasted on unused ranges.

Note that Newsreader is a variable font: the 132 KB roman file carries the whole `opsz 6–72` and
weight range in one request, so declaring weights 400, 500 and 600 costs nothing extra. Dropping a
weight would not reduce the payload; only subsetting or self-hosting would.

## Layout shift — measured, not estimated

`display: swap` means the fallback face is what the reader sees first, so the fallback's metrics
determine how far the page jumps when Newsreader arrives. MEASURED at 1280 by rendering the page
in each fallback and comparing element positions against the webfont:

| Fallback | h1 height | Question height | Revisions top | Cumulative shift |
|---|---|---|---|---|
| **Newsreader** (reference) | 41px | 188px | 2,414px | — |
| **Georgia** — was first in the stack | **82px (wraps to two lines)** | 219px | 2,548px | **135px** |
| **Times New Roman** | 41px | 188px | 2,414px | **0px** |

Georgia's larger x-height and wider set make it the **worst** available match. Times New Roman is
a near-exact metric match — Newsreader's proportions are close to Times and not to Georgia.

| | |
|---|---|
| **OLD** | `--serif: "Newsreader", Georgia, "Times New Roman", serif` |
| **TEST** | Rendered the page in each fallback; measured geometry against the webfont |
| **RESULT** | Georgia shifts the page 135px and wraps the h1 onto a second line |
| **NEW** | `--serif: "Newsreader", "Times New Roman", Times, serif` |

Liberation Serif — the usual Linux `serif` — is metric-compatible with Times, so the entire chain
now agrees. This is a one-word change that removes a visible reflow on first paint at no cost.

The sans stack shows **0px** shift when falling back to `system-ui`, because Public Sans is used
only for short apparatus strings whose reflow does not move block positions.

## Recommendation for 5E — self-host and subset

**Not applied in 5D**, because font delivery is a build-and-hosting decision rather than a
stylesheet one. Recorded so it is not lost.

| Action | Expected effect |
|---|---|
| Self-host the woff2 files | Removes 2 third-party origins and the `preconnect` chain; removes a privacy dependency on `fonts.gstatic.com` |
| Subset to the actual character set | INFERRED ~217 KB → roughly 40–60 KB |
| Add `size-adjust` / `ascent-override` / `descent-override` to `@font-face` | Reduces the residual swap shift to zero rather than merely to "small" |
| Keep `display: swap` | Correct choice — text is readable immediately; with metric overrides the swap becomes invisible |

INFERRED total after all four: **under 80 KB**, zero third-party requests, zero layout shift.

## Not measured

- **LCP, FCP, TTFB** — the pane blocked `localhost` and the fixtures were served from `data:`
  URLs, so navigation timing is not representative of a real deployment.
- **CLS as a scored metric** — the font-swap shift above is measured in pixels of element
  displacement, which is the input to CLS but not the score itself. It is the actionable number.
- **Compressed transfer sizes** — the local files were measured uncompressed. Font woff2 files are
  already compressed; HTML and CSS are not, and would shrink substantially.
