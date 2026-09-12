# Performance review

**Date:** 2026-09-12
**Method:** measured on the built output (`.next`), plus source inspection of every animation loop, scroll listener and effect. Part of [Phase 7](../audit/PHASE7_AUDIT.md).

No synthetic score is quoted. Lighthouse was not available in the session, so nothing here is a Lighthouse number.

---

## Built output

| | |
|---|---|
| Prerendered `/` HTML | 196,005 bytes · 2,260 elements |
| CSS (one bundle, all routes) | 104,538 raw · **20,293 gzip** |
| JS chunks | 932,670 raw · **300,630 gzip** |
| Fonts emitted | 13 × woff2 · **143KB total** · largest 34KB |
| Images | **none** — no `public/`, no `<img>`, no `next/image`. Every figure is inline SVG or built at build time by `ImageResponse` |

The desktop world is correctly split: `dynamic(… { ssr: false })` keeps its chunk off `/` entirely, so a visitor who chooses STANDARD never downloads the environment.

---

## Fixed

### The font was carrying an axis it never moved
`app/layout.tsx` requested `axes: ["wdth"]` on Archivo. The width axis materially enlarges a variable font, and the only thing in the entire stylesheet that referenced it asked for `font-variation-settings: "wdth" 100` — **the default value**. The site was paying for an axis it never varied, on the critical path.

Both the axis request and the declaration are gone. **The largest font file fell from ~90KB to 34KB.**

### The most expensive no-op on the page
`components/system/SmoothScroll.tsx` published a damped `--vel` custom property on `<html>` from a scroll handler *and* from an unconditional every-frame `gsap.ticker` callback.

`grep -r -- "--vel"` across `app/`, `styles/` and `components/` returned three writes and **zero reads**. The typography effect it fed had been removed; the signal had not. Writing a custom property on the document element invalidates inherited style for the whole tree, so this was doing real work sixty times a second for nothing.

Deleted: the variable, the ticker callback and both writes.

### Two per-frame scans for elements that are never rendered
`.on-ink` is applied only by `Section`'s `tone="ink"` prop, and **`tone="ink"` is passed nowhere** — the prerendered HTML contains zero occurrences. Yet `Nav`'s scroll handler and `lib/useInverted.ts` each ran `querySelectorAll(".on-ink")` followed by a `getBoundingClientRect` loop on every scroll frame, forever, over an empty NodeList.

Membership is fixed once the document is rendered, so it is now read once. With nothing to track, `useInverted` attaches no listener at all. The primitive still works the moment a section opts in.

`Nav`'s handler was also reading `scrollHeight`, writing a transform, then reading rects — a write between reads. Reads are now batched before the write.

### Loops that ran for the life of the page
| Loop | Was | Now |
|---|---|---|
| Hero pointer instrument | re-scheduled `rAF` unconditionally, twenty screens away from the viewport | gated on an IntersectionObserver |
| Hero discipline auto-advance | re-rendered the largest component every 5.2s forever; checked only `document.hidden`, which covers a backgrounded tab and nothing else | gated on the same observer; hover and focus still hold it |
| Custom cursor | three `style.transform` writes per frame, permanently | settles and stops; any pointer event wakes it |
| `TraceField` canvas | already had a good visibility gate, but redrew identical static geometry at 60fps under reduced motion, where every edge completes in one frame | one pass, then stops; a latch repaints |

### Twelve listeners doing twelve layout reads per mouse move
`MagneticElement` added its own `pointermove` listener to `window` and measured its element on every event. Twelve are mounted on `/` — the wordmark, six navigation links, five contact channels. A pointer device can also emit events faster than the display refreshes, so some of that work was being done more than once per painted frame and discarded.

`lib/pointerField.ts` is now one listener, coalesced to one animation frame. Subscribers run in a single batch with the same coordinates — cheaper, and more correct, since two magnets can no longer act on positions milliseconds apart.

### One React render per scroll frame
`About`'s `ScrollTrigger` used `scrub: true` with an unconditional `setProgress(self.progress)`, re-rendering `About` and `TraceField` — canvas, five node markers and a progress effect — sixty times a second. Nothing downstream resolves finer than a hundredth: the word steps five times across the range and the trace latches five nodes. The update is now quantised.

### `will-change` as a baseline
`app/globals.css` applied `will-change: transform` to `.mask > *` — 36 elements in the delivered HTML, most of them static the moment their one reveal finishes. A permanent compositor-layer hint on all of them is the opposite of what the property is for.

Removed as a blanket, applied to the few elements that are actually scrubbed (`.manifesto__line`), and withdrawn on `.at.is-in .mask > span` once the reveal has run. The 16 manifesto debris fragments keep the hint only inside the media query where something moves them.

### Layout-property animations
Two, both converted to transforms: `.channel` animated `padding-left` on hover, re-laying out a five-row grid every frame; the dock indicator pips grew by animating `height`/`width`.

### Dead code
~290 lines of CSS removed for UI that no longer exists — the deleted 00→100 loader and boot checklist (~190 lines), the experience accordion replaced by the WORK tablist (~100), and `.win.is-opening`/`.is-closing`, which the component never sets (it uses data attributes). Also `useIsDesktop` (no call sites), the `onLeave` prop nothing passed, and the unused `compete` motif figure.

`Experience.tsx` carried `"use client"` with no hooks, no handlers and no browser APIs. It is a server component again.

---

## Known, not fixed

**2,260 DOM elements**, above Lighthouse's ~1,400 advisory. The driver is `ProjectMotif`: 22 SVGs render at once — 17 dossier figures plus 5 ambient reel figures — contributing roughly 665 geometry nodes. The remedy is lazy-rendering the dossier figures on `useInView` and rendering only the reel's active figure. It trades the immediacy of the figures for a number, which is an identity decision rather than a performance one, so it is recorded rather than taken.

**~300KB gzip of JS.** `Certifications` and `Projects` are client components, so `IssuerMark` (~21KB of path data) and `ProjectMotif` ship as JS *and* are inlined in the HTML. Restructuring those lists as server content inside thin client reveal wrappers is the largest remaining win, and a real refactor rather than a polish pass.

---

## Verified clean

- No listener, observer, interval or timeout without a matching cleanup.
- Every `scroll` and `pointermove` listener is `{ passive: true }`. The one non-passive `click` calls `preventDefault` legitimately.
- Every GSAP timeline is inside `gsap.context(…, root)` with `ctx.revert()`, or `gsap.matchMedia()` with `mm.revert()`. No orphaned ScrollTriggers.
- All three context values are memoised; no identity churn.
- No unused runtime dependencies. No barrel imports.
