# Phase 5G — Validation

**Date:** 2026-08-15 · **Status: VALIDATION PERFORMED.**

This document records a **rendered** validation. Every result below was produced by loading the
prototype in a browser, measuring the live DOM and computed styles, and — where marked OBSERVED —
looking at a screenshot that was actually taken. Nothing here is inferred from HTML or CSS source.

Where a claim rests on my reading of a render rather than on a number, it is marked **JUDGMENT**.

This supersedes the "not validated" status recorded in [`PHASE5G_FINDINGS.md`](PHASE5G_FINDINGS.md)
and [`PHASE5G_SPEC.md`](PHASE5G_SPEC.md) §1.

---

## 1. Tooling status

**Browser rendering: AVAILABLE.** The block described in the previous two sessions is gone.

| Capability | Status | Evidence |
|---|---|---|
| Loading local pages with the stylesheet applied | ✅ | `body` background `rgb(251,250,247)`, family `Newsreader` |
| Web fonts | ✅ | `document.fonts.status === "loaded"`, `check('19px Newsreader') === true`, 18 faces |
| Screenshots | ✅ | see §1.1 for the resolution constraint |
| DOM / computed-style measurement | ✅ | unrestricted |
| `node` for building fixtures | ✅ | volume and genericity fixtures generated |
| Read / Write / Edit / Grep | ✅ | |

Pages were served over HTTP from a local static server on `127.0.0.1:8931` rooted at `prototype/`,
so relative `style.css` resolves normally. This is the failure mode that made the previous session's
`data:` snapshots unstyled and therefore worthless.

### 1.1 The one real constraint, and how it was handled

The preview pane's physical drawing area is **279 × 694 CSS px**. Calling `resize_window` to widths
above roughly 600px puts the capture into a state where the returned image is of a much larger host
surface with the page in one corner — legible measurements, illegible pictures. Restarting the
preview clears it; resizing again reintroduces it.

**Workaround: a scaled-iframe harness.** The target page is loaded in a same-origin `<iframe>` set to
an exact pixel width, and the harness scales the drawn result to the pane. The iframe's CSS viewport
*is* the target width, so every media query, every `em` breakpoint and every layout value resolves
exactly as it would in a real window of that size.

**The harness was validated against a real resized viewport before use.** `about.html` at 375×812
measured identically by both routes — document height 4578px, `.facts` columns `84.4625px /
230.738px`, footer 188px, zero overflow. Numbers in this document therefore describe real viewports.

Two capture modes were used and are distinguished throughout:

| Mode | What it gives | Used for |
|---|---|---|
| **1:1 tile** | a crisp 279px-wide window onto the true viewport, no scaling | typography, colour, focus rings, spacing detail |
| **Fit thumbnail** | the whole page scaled down | gestalt — rhythm, page shape, "does this read as X" |

**What this does not give:** a single full-resolution image of a whole 1920px-wide page. Ultra-wide
composition was assessed from measurement (column width, centring, left edge, overflow) plus 1:1
tiles, not from one legible wide screenshot. Stated here so the evidence is not overclaimed.

### 1.2 Scrollbar effect — a measurement note

At 320px a classic 15px scrollbar reduces the layout width to 305px, narrowing the text column from
280px to 265px and the measure from 37 to 35 characters. Both are real: desktop browsers reserve the
scrollbar, mobile browsers overlay it. **The conservative (scrollbar-present) figures are reported
below.** This accounts for small differences between sweeps and is not a defect — there is no
horizontal overflow in either state.

---

## 2. Viewport results

**45 renders: 5 pages × 9 viewports.** Every page measured at 320 · 375 · 390 · 430 · 768 · 1024 ·
1280 · 1440 · 1920. Prototype banner height excluded from all page heights, because the banner is
not production.

### 2.1 The system-level result

| Check | Result |
|---|---|
| Horizontal overflow | **0 occurrences in 45 renders** |
| Elements breaking the viewport | **0** |
| Tap targets below 24×24 | **0**, across 71 links measured per page-set |
| Text roles below WCAG AA | **0**, 16 roles checked per page |
| Left edge identical across regions | ✅ every page, every viewport |
| Footer nav wrapping | never, down to 320px |

### 2.2 Typography and measure

Body size steps 17 → 18 → 19px across the two breakpoints. `h1` steps 27 → 31 → 34px.

**Median characters per line, body prose:**

| Page | 320 | 375 | 390 | 430 | 768 | 1024 | 1280 | 1440 | 1920 |
|---|---|---|---|---|---|---|---|---|---|
| Home | 35 | 43 | 44 | 50 | 64 | 64 | 63 | 63 | 63 |
| Investigation | 34 | 43 | 45 | 50 | 65 | 65 | 65 | 65 | 65 |
| About | 38 | 46 | 48 | 54 | 64 | 64 | 64 | 64 | 64 |
| Notes | 35 | 43 | 44 | 51 | 64 | 64 | 64 | 64 | 64 |

**The `em`-based measure works exactly as the stylesheet claims.** From 768 to 1920 the median holds
at 63–65 characters across two body sizes and three container widths, with no per-breakpoint
override. Below 768 the column is viewport-bound and the count falls to 34–54, which
`READING_WIDTH.md` states is correct.

`.ix-framing` on the investigations index runs **71–73 characters** at desktop — it is set at 1rem
inside the same column, so it takes more characters per line than the prose above it. Not new in 5G;
5F accepted it. Recorded as an observation, not a 5G defect.

### 2.3 Page heights (desktop, 1280×800, banner excluded)

| Page | Height | Screens |
|---|---|---|
| Investigations index | 1,661px | 2.08 |
| Notes (6) | 2,395px | 2.99 |
| Investigation | 3,107px | 3.88 |
| Home | 3,831px | 4.79 |
| **About** | **3,951px** | **4.94** |

### 2.4 Spacing and hierarchy

Rendered gap values match the token system with no drift: MAJOR between homepage/About blocks
(112 / 119 / 125px by breakpoint), OPEN between notes (62 / 65 / 69px), NORMAL between index and
worklist rows (24 / 25 / 27px). The three-tier separation MAJOR > OPEN > NORMAL is intact at every
viewport.

**Hierarchy — OBSERVED at 1:1, 1280:** on About the descent runs h1 34px serif → lede 20.8px serif →
region label 15px sans medium secondary → body 19px serif → `.facts` 15px sans. Each level is
distinguishable without rules, boxes or colour. **JUDGMENT: passes.**

### 2.5 Navigation

| Page | Primary nav | Correct for launch state |
|---|---|---|
| index · investigations · investigation · about | `Investigations · About` | ✅ |
| notes.html | `Investigations · Notes · About` | ✅ — documents the post-launch state |

**G-1 holds on every launch page.** Nav header height 59–62px; nav links 35.3px tall (padding
`.35em` doing its job); `aria-current="page"` present and rendering as underline + primary colour.

### 2.6 Mobile layout (320–430)

Body 17px, `--box` 31.1875rem, single column, gutters 20px. Apparatus keeps its two columns as V-5
requires. No stacking failures, no overlap, no clipped text at 320px. Footer 188–238px tall and
never wraps its nav row.

---

## 3. Notes results

### 3.1 Volume test

| Notes | Exists | Height @1280 | Screens | Footer share | Overflow / tap / contrast |
|---|---|---|---|---|---|
| **0** | **no page, no nav item** | — | — | — | — |
| 1 | yes | 951px | 1.19 | 21.1% | 0 / 0 / 0 |
| 3 | yes | 1,585px | 1.98 | 12.7% | 0 / 0 / 0 |
| 6 | yes | 2,395px | 2.99 | 8.0% | 0 / 0 / 0 |
| 10 | yes | 3,288px | 4.11 | 6.1% | 0 / 0 / 0 |

Fixtures `fixture-notes-1.html`, `-3.html`, `-10.html` were generated for this test and fall under
the existing strip-before-ship rule.

**Zero notes — verified by inspection of the rendered launch pages, not by reading the spec.** No
Notes item in any launch page's primary nav or footer nav. One leak found; see F-2.

**One note — OBSERVED:** the page does not read as broken or empty. The lede carries it and the
footer sits at a plausible distance. The heading "The notes" above a single note is faintly odd.
**JUDGMENT: acceptable.**

### 3.2 Portfolio-vs-publication — the list instrument

Run at 6 notes, 1280, OBSERVED at 1:1. Instrument from `WORK_INDEX_PORTFOLIO_TEST.md`.

| # | Signal | Rendered Notes | Reads as |
|---|---|---|---|
| 1 | Date form | single point — `2026-07-22` | ❌ **Archive** |
| 2 | Date prominence | **leads every item**, first line of each note | ❌ **Archive** |
| 3 | Default order | newest first | ❌ **Archive** |
| 4 | Ordering language | none; heading is "The notes" | ✅ Body of work |
| 5 | Per-item metadata | date only — no author, no read time, no "published" | ➖ Neutral |
| 6 | Item summary | **full text inline.** Zero excerpts, zero truncation, zero "read more" | ✅ Body of work |
| 7 | Record uniformity | identical, every item | ✅ Body of work |
| 8 | What the title names | **there are no titles** | ✅ anti-blog |

**Score: 3 archive · 3 body-of-work · 1 neutral · 1 anti-blog.**

Compare the investigations index, which scored **7 body-of-work, 1 mixed, 0 archive**.

Signals 1 and 2 are the two that `WORK_INDEX_PORTFOLIO_TEST.md` §"What would break this result"
names first: *"Adding a publication date to the row, or moving the span up. Flips signals 1 and 2
together."* Notes does exactly that, deliberately, per `PHASE5G_SPEC.md` §3.

**Dominant reading — JUDGMENT: a dated running log.** Not a blog *feed*: there are no headlines, no
excerpts, no per-item links out, nothing to click. But it is not a portfolio surface either. At 6
notes the log reading is comfortable. **At 10 notes it hardens** — OBSERVED at full-page fit, the
uniform date-led rhythm becomes the dominant structure of a 3,288px page with no grouping, no year
separators and no other landmark.

`GROWTH_MODEL.md` schedules year separators at 25+ notes. **The rendered evidence says the feed
reading arrives closer to 10.**

**Verdict: Notes does not become a blog, but it is the weakest surface in the phase.** Recorded as
F-3.

### 3.3 Supersession

Two of six notes carry a dated supersession line: sans, 15px, secondary, no strike-through, no
warning colour, no "correction" label.

**OBSERVED at 1:1, 1280 — JUDGMENT: reads as honesty, not clutter.** It is quieter than the note it
follows and the date does the work, as designed. It also surfaced the phase's clearest defect —
see F-1.

### 3.4 Note body size

Note prose renders at the full body size on every viewport (17 / 18 / 19px), identical to
investigation prose. `PHASE5G_SPEC.md` §3 — *"A note is short, not minor"* — **confirmed by
measurement.**

---

## 4. About results

### 4.1 Length — FAIL

`ABOUT_LAYOUT.md` §Geometry: *"Fits comfortably in 1.5–2 screens at desktop. If it exceeds three, it
has become a résumé dump."*

| Desktop viewport | Height | Screens | Over cap |
|---|---|---|---|
| 1280 × 800 | 3,951px | **4.94** | **+65%** |
| 1440 × 900 | 3,951px | **4.39** | **+46%** |
| 1920 × 1080 | 3,951px | **3.66** | **+22%** |

**The cap is exceeded at every desktop height tested.** Breakdown at 1280:

| Component | Height |
|---|---|
| Identity | 164px |
| What I work on | 807px |
| How I write this up | 377px |
| Experience | 583px |
| Where this is going | 272px (incl. 83px placeholder) |
| Background | 331px |
| Contact | 203px |
| **Content subtotal** | **2,738px** |
| 6 × MAJOR inter-block gaps | 750px |
| Footer + its MAJOR gap | 326px |

Even at zero spacing the content alone is 2,738px — **3.4 screens**. This is a content-volume
failure, not a layout failure, and the fix is Het's: see F-4.

### 4.2 `.facts` at narrow viewports — FAILED, FIXED

The block flagged as unmeasured in `PHASE5G_FINDINGS.md` §"Specific risks" item 2. It did not
overflow. It failed in the other direction.

**MEASURED at 320px, before fix:** `grid-template-columns: max-content 1fr` held the label column at
84px, leaving 176px for values. The Certifications entry ran **14 lines at a median of 20
characters**, beside 14 lines of empty label column.

**OBSERVED:** a squeezed two-column résumé table — the exact reading `ABOUT_LAYOUT.md` forbids.

Fixed as **G-5**; see §9.

### 4.3 What About gets right

Attribution ceiling present and rendered in the `.inset` register (*"Seven months is exposure, not
expertise"*). No portrait, no skills list, no certification wall, no timeline graphic, no CTA block,
no "available for work" banner. Certifications are one prose run in `.facts`, not a grid — **16 is
stated inside the sentence, never as a headline number.** Contact is two text links.

---

## 5. Footer results

### 5.1 Worst case — the 150-word investigation

`PHASE5G_SPEC.md` §8 item 4 names `short-no-revisions.html` as the case to render.

| Viewport | Page | Main | Footer | Footer + gap | Share |
|---|---|---|---|---|---|
| 320 | 1,586px | 1,236px | 238px | 350px | 22.1% |
| 375 | 1,411px | 1,090px | 209px | 321px | 22.7% |
| 768 | 1,257px | 943px | 195px | 314px | 25.0% |
| 1280 | 1,316px | 990px | 201px | 326px | 24.8% |
| 1920 | 1,316px | 990px | 201px | 326px | 24.8% |

**OBSERVED at fit, 1280: PASS.** The footer occupies a quarter of the shortest page and does not
read as dead space, because three lines of content fill it. This is an improvement on the single
contact line 5D found read as *"something is missing here"* — the risk recorded as item 3 in
`PHASE5G_FINDINGS.md` did not materialise.

### 5.2 Does it read as identity or as a generic strip?

**OBSERVED at 1:1, 1280 — JUDGMENT: identity.** Hairline rule, then the name in primary weight
followed by the positioning sentence in secondary; then a quiet un-underlined nav row; then contact,
underlined. Absent as specified: ©, Privacy, Terms, social icons, newsletter, "built with",
sitemap, back-to-top, any security claim.

### 5.3 Measured

Footer 188–238px depending on breakpoint, 4.1–11.5% of a normal page. Nav row never wraps down to
320px. All footer links 29.7px tall — **the `.foot-nav` tap target flagged as "applied by analogy,
not by measurement" is now measured and passes.** Rule `rgb(228,224,216)`, identical on all pages.

---

## 6. Cross-page results

The phase's central goal. Five pages loaded simultaneously in identical 1280px frames with the
scrollbar eliminated, so the values are directly comparable.

| | index | investigations | investigation | notes | about |
|---|---|---|---|---|---|
| Body font | 19px Newsreader | ✔ same | ✔ same | ✔ same | ✔ same |
| Ground | `rgb(251,250,247)` | ✔ | ✔ | ✔ | ✔ |
| `h1` | 34px | ✔ | ✔ | ✔ | ✔ |
| Container width | 553px | ✔ | ✔ | ✔ | ✔ |
| **Header left edge** | **384px** | **384** | **384** | **384** | **384** |
| **Content left edge** | **384px** | **384** | **384** | **384** | **384** |
| **Footer left edge** | **384px** | **384** | **384** | **384** | **384** |
| Footer lines | 3 | 3 | 3 | 3 | 3 |
| Footer height | 201px | 201 | 201 | 201 | 201 |
| Footer identity line | identical string on all five |
| Footer contact line | identical string on all five |
| Footer rule | `rgb(228,224,216)` 1px on all five |

**One left edge, one measure, one footer, one stylesheet — CONFIRMED by rendering, not by
construction.** Zero drift.

Footer nav correctly tracks content state: `Home · Investigations · About` on launch pages,
`Home · Investigations · Notes · About` on `notes.html`.

---

## 7. Accessibility

### 7.1 Contrast — all roles pass AA

Computed against the resolved background, at the rendered font size.

| Role | Ratio | Size | Required | |
|---|---|---|---|---|
| `h1`, `.lede`, `.site-name`, `.foot-id strong` | 16.83 | 34 / 20.8 / 16 / 13.5px | 4.5 | ✅ |
| `.facts a`, `.contact a` (accent) | 8.67 | 15 / 19px | 4.5 | ✅ |
| `.region-label`, `.nt-super`, `.facts dd`, `.inset`, `.site-nav a`, `.foot-id`, `.foot-nav a`, `.foot-contact a` | 7.45 | 13.5–15px | 4.5 | ✅ |
| `.nt-date`, `.facts dt`, muted body | 5.17 | 13–13.5px | 4.5 | ✅ |

**Zero failures across 16 roles × 5 pages × 9 viewports.** The tightest margin is the muted role at
5.17:1 — 15% of headroom above AA at the smallest size on the site.

Focus indicator: accent on ground = **8.67:1**, well above the 3:1 required by SC 1.4.11 / 2.4.11.

### 7.2 Touch targets — all pass

WCAG 2.2 SC 2.5.8. Inline-in-text links exempted; everything else measured.

| Element | Height | |
|---|---|---|
| `.site-name` | 37.6px | ✅ |
| `.site-nav a` | 35.3px | ✅ |
| `.contact a` | 35.7px | ✅ |
| `.nt-date a` (new in 5G) | 31.7px | ✅ |
| `.foot-nav a` (new in 5G) | 29.7px | ✅ |
| `.foot-contact a` (new in 5G) | 29.7px | ✅ |

**Zero failures.** Both previously-unmeasured 5G additions clear the minimum.

### 7.3 Keyboard

13 focusable elements on About. Tab order is DOM order and logical: skip link → name → nav →
in-content links → footer. No positive `tabindex`, no traps.

**Every focusable element resolves `:focus-visible` with a solid accent outline at a 3px offset —
verified programmatically for all 13 and OBSERVED on the skip link and nav.** The skip link moves
from off-screen to top-left on focus and is clearly legible.

### 7.4 200% zoom — passes both ways

| Condition | Root | Body | Column | Horizontal overflow |
|---|---|---|---|---|
| Baseline, 1280 | 16px | 19px | 513px | none |
| **Text-only 200%, 1280** | 32px | 38px | 1,026px | **none** |
| **Text-only 200%, 640** | 32px | 36px | 545px | **none** |
| **Page zoom 200% (640 CSS)** | 16px | 18px | 486px | **none** |
| **Page zoom 200% mobile (375 CSS)** | 16px | 17px | 320px | **none** |

SC 1.4.4 and SC 1.4.10 both pass. Note that at text-only 200% the column doubles to exactly 27em of
the new body size — **the character count is preserved under zoom.** That is a direct consequence of
expressing the measure in `em` and it is the strongest single result in this section.

### 7.5 Reduced motion — passes trivially

Queried every element on every page: **zero elements with a non-zero transition duration, an
animation name, a transform, or `scroll-behavior: smooth`.** There is no motion on the site, so
`prefers-reduced-motion` has nothing to suppress and its absence is correct rather than an omission.

### 7.6 One finding — heading structure on About

**About exposes exactly one heading (`h1`) across a 3,951px, seven-section page.** The six section
labels are `<p class="region-label">`, with each `<section>` named via `aria-labelledby`.

- **Not a WCAG failure.** SC 1.3.1 is satisfied by the section/label structure; SC 2.4.6 constrains
  headings that exist. Regions are landmark-navigable and correctly named.
- **But heading-based navigation — the most-used screen-reader method — reaches nothing** on the
  longest page on the site.
- **And it is internally inconsistent:** `notes.html` uses `<h2 class="region-label">` for the same
  role. The two pages disagree about what a region label is.

Recorded as F-5. Not fixed here — making it consistent is a decision about the whole system, not a
5G defect.

---

## 8. Performance

Measured on `index.html` via Navigation and Resource Timing.

| Metric | Value |
|---|---|
| Total requests | **6** — 1 HTML, 1 local CSS, 1 Google Fonts CSS, 3 font files |
| **Third-party requests** | **4** (`fonts.googleapis.com` ×1, `fonts.gstatic.com` ×3) |
| Transferred | 33.3 KB |
| Decoded | 262 KB (variable fonts) |
| DOM nodes | 87 |
| Scripts | **0** |
| Images | **0** |
| **Cumulative Layout Shift** | **0** — no `layout-shift` entries recorded at all |
| DOMContentLoaded / load / FCP | 10ms / 15ms / 36ms (localhost; not a network figure) |

**Correction to `PHASE5G_SPEC.md` §6:** third-party requests are **4, not 3**. The stylesheet request
to `fonts.googleapis.com` and three font files from `fonts.gstatic.com`. The target of 0 via
self-hosting is unchanged.

**Font fallback (V-9) confirmed by rendering.** Substituting the Times New Roman fallback for
Newsreader leaves the `h1` on **one line** — zero line-count change, which is the specific failure
the V-9 comment says Georgia caused. Body copy reflows by 3.3% of total page height further down,
below the fold. CLS 0.

---

## 9. Failures and fixes

| # | Finding | Severity | Status |
|---|---|---|---|
| **F-1** | Note-prose links rendered in **browser default blue** | **High** | ✅ **FIXED (G-6)** |
| **F-2** | `investigation.html` advertises a note that does not exist at launch | **High** | ⛔ **OPEN — Het** |
| **F-3** | Notes carries 3 of 8 archive signals; hardens at 10 notes | Medium | ⛔ **OPEN — Het** |
| **F-4** | About exceeds its three-screen cap by 22–65% | **High** | ⛔ **OPEN — Het** |
| **F-5** | About exposes one heading across seven sections; inconsistent with Notes | Medium | ⛔ OPEN |
| **F-6** | `.facts` at ≤600px: 20-character value column beside a dead label column | **High** | ✅ **FIXED (G-5)** |
| **F-7** | Genericity fixtures carry the pre-5G nav and footer | Low | ⛔ OPEN — housekeeping |
| **F-8** | Spec states 3 third-party requests; measured 4 | Low | ✅ corrected in §8 |

### F-1 — the defect only a render could find

**The supersession link on `notes.html` rendered at `rgb(0, 0, 238)`** — the browser's default link
colour — underlined, in the middle of a page whose only link colour is `#2F4A6D`.

Cause: the accent link rule enumerates `.investigation p a`, `.artifacts a`, `.related a` and
others. **No selector claimed a link inside note body text**, because notes did not exist when the
rule was written. It passed contrast at 9:1, so no automated check would have flagged it. It is the
single most visually jarring element rendered in this phase.

**Fix G-5/G-6 applied to `style.css`:**

```css
.notes li > p:not(.nt-date) a { color: var(--accent); … }
```

`:not(.nt-date)` preserves the permalink's own muted, undecorated treatment.

### F-2 — the G-1 leak

`investigation.html` "Related" contains:

> Two scanners disagree on the same TLS configuration — **note, 2026-04**

with `href="#"`. **At launch there are zero notes and no Notes page.** G-1 removed Notes from the
navigation and left this in the body — a dead link that advertises a content type that does not
exist. It is the same failure G-1 was created to fix, one level down, and it confirms G-1's own
lesson: *"a validated page can sit inside an invalid site."*

**Not fixed here** because the correct resolution is a content decision — either Related shows only
investigations at launch, or the item goes. This is the only launch-page occurrence; the rendered
launch pages are otherwise clean.

### F-4 — About length

See §4.1. The fix is content reduction and it is Het's to make: the page is 2,738px of his prose
across seven blocks. Reducing the inter-block gaps from MAJOR to OPEN would recover only 336px and
would make About the only page on the site with its own spacing rule — a system change to solve a
content problem, which is the wrong trade.

### F-6 — `.facts`

**Fix G-5 applied to `style.css`**, inside the existing `@media (max-width: 37.5625em)` block,
mirroring what `.revisions dl` has done since 5D for the identical reason:

```css
.facts { grid-template-columns: 1fr; gap: .15rem 0; }
.facts dt { margin-top: .8rem; }
.facts dt:first-of-type { margin-top: 0; }
```

---

## 10. Regression results

Both fixes re-rendered and re-measured across all five pages × nine viewports.

### G-5 — `.facts` stacking

| Viewport | Columns | `dd` measure | Block height |
|---|---|---|---|
| 320 | ~~84 / 176~~ → **265 single** | ~~20~~ → **32** | 677 → **569px** |
| 375 | ~~84 / 231~~ → **320 single** | ~~29~~ → **41** | 474 → 479px |
| 430 | ~~84 / 286~~ → **375 single** | ~~35~~ → **52** | 407 → 434px |
| 768 | 84 / 382 **unchanged** | 52 | 317px |
| 1280 | 84 / 409 **unchanged** | 52 | 294px |

**OBSERVED at 1:1, 320px:** label above value, full-width values, no dead column, no sliver. Reads
as the compact reference list `ABOUT_LAYOUT.md` specifies. No desktop change whatsoever. About's
desktop height is unchanged at 3,951px; mobile grows 76–104px, which is the correct trade.

### G-6 — note link colour

Computed colour now `rgb(47, 74, 109)`, underlined. `.nt-date` permalinks still `rgb(110,106,96)`,
undecorated. **OBSERVED at 1:1, 1280:** the link now sits inside the note's colour system.

### Full regression sweep — post-fix

| Page | Overflow | Tap failures | Contrast failures |
|---|---|---|---|
| index.html | 0 / 9 | 0 / 9 | 0 / 9 |
| investigations.html | 0 / 9 | 0 / 9 | 0 / 9 |
| investigation.html | 0 / 9 | 0 / 9 | 0 / 9 |
| notes.html | 0 / 9 | 0 / 9 | 0 / 9 |
| about.html | 0 / 9 | 0 / 9 | 0 / 9 |

**No regressions.** Cross-page coherence re-verified after both fixes: all five pages still share
one left edge at 384px, one 553px container, one 201px footer.

---

## 11. Genericity

Same stylesheet, generic early-career content for a fictional Alex Sharma. Rendered, not reasoned.

### 11.1 Homepage — the 5D prediction confirmed visually

**OBSERVED at fit, 1280.** The two homepages are typographically indistinguishable. The differences
that do appear are content-borne and exactly the ones 5D predicted:

| Signal | Het | Alex |
|---|---|---|
| `.wmeta` record line | varies per item | **`closed · self-initiated` ×3 — identical** |
| Titles | interrogative (*"Why an allow-list kept failing open"*) | nominal (*"Network Vulnerability Scanning Lab"*) |
| Revision register | two dated entries, one reversing a conclusion | absent |

**The invariant record line is visible even at thumbnail scale** as three identically-sized grey
runs. 5D's claim that it *"looks filled with constants"* is confirmed.

### 11.2 Notes — the new and worst result

`notes-genericity-test.html` was built for this phase, since none existed.

**Notes is the least diagnostic surface on the site.** The investigation page has a revision
register that vanishes and an apparatus that goes flat; the index has a record line that goes
invariant. **A note is "date + observation" — and a study-diary entry is also "date + observation".**
The format has no structural slot that generic content fails to fill.

The only differentiator is the supersession line: 2 of 6 in Het's notes, 0 of 6 in Alex's. But
supersession is optional, so its absence renders as nothing at all rather than as a visible gap.

**OBSERVED:** the generic version reads as a study log and looks entirely at home in the design.
This compounds F-3 and is the strongest argument for holding Notes back until real notes exist.

### 11.3 F-7

The genericity fixtures still carry the **pre-5G navigation** (`Notes` → `#`) and the **pre-5G
single-line footer**. They are valid for comparing page bodies and invalid for nav or footer. They
are already listed under strip-before-ship, so this is validation hygiene rather than a product
defect — but a future phase comparing footers against them would draw a wrong conclusion.

---

## 12. Hiring tests

Structured walkthroughs against the rendered pages. Not user research. Geometry measured with the
prototype banner excluded.

**Homepage positions (px from top):**

| | 1280 | 375 |
|---|---|---|
| `h1` name | 131 | 121 |
| Lane sentence | 198 | 177 |
| "The work" | 517 | 517 |
| Selected investigations | 1,360 | 1,525 |
| One in full | 2,111 | 2,375 |
| Contact | 3,353 | 3,875 |
| First email | 3,391 | 3,911 |
| **Footer email** | **3,732** | **4,242** |

### TEST A — RECRUITER · 20 seconds

| Question | Answer | Where | Verdict |
|---|---|---|---|
| Who is he? | Name as `h1` | 131 / 121px — first screen | ✅ |
| What does he do? | *"working between technical testing and regulated assurance"* | first sentence | ✅ |
| Real experience? | **Info eShield Cyber Solutions** in bold, and CSCRF / IRDAI named | both inside the first ~900px at 1280 and 375 | ✅ |
| How to contact? | first email at 3,391 / 3,911px; **footer email now on all five pages** | ~4 screens down | ⚠️ **PARTIAL** |

**5G improves finding E-5 without closing it.** Before 5G the email existed only on the homepage;
now `End` from any page lands on a footer containing it. A scanning recruiter who does not scroll
still never sees an address, and there is still no contact item in the navigation. **This is the
rendered evidence bearing on open item 8 in `PHASE5G_SPEC.md` §7.**

### TEST B — ENGINEER · 5 minutes

Reads the investigation. Rendered content confirmed present and reachable:

| Wanted | Found | |
|---|---|---|
| A real question | *"Why an allow-list kept failing open"* | ✅ |
| Method, not tool-listing | three movements; first opens *"My first instinct was to read the configuration, and I deliberately did not"* | ✅ |
| A finding | *"The rule was correct. The ordering was not."* | ✅ |
| Stated limits | *"What I could not determine was whether the ordering was deliberate"* | ✅ |
| Admitted error | `.inset`: *"I had assumed normalisation ran first because that is the order I would have written it in"* | ✅ |
| **Changed mind, dated** | revision register, 2 entries at 2,373px — one reclassifies the conclusion, one **removes an overgeneralisation** | ✅ |
| Artifacts | one entry, marked hypothetical placeholder | ⚠️ placeholder |

**Verdict: PASS.** The revision register is the strongest element rendered in the phase — it is the
one thing on the site a template cannot produce. The artifact link is a placeholder and the Related
entry is F-2.

### TEST C — MANAGER · 10 minutes

| Wanted | Found | |
|---|---|---|
| Can he write? | About and the investigation are continuous prose at 64–65 characters per line | ✅ |
| Does he understand regulated context? | *"a finding and a control are not the same object"* — About, block 2 | ✅ |
| Is he honest about seniority? | *"I assisted on that work — I did not scope it, own it or lead it, and I am not an auditor"* | ✅ |
| Does he overclaim? | `.inset`: *"Seven months is exposure, not expertise… My Splunk experience is TryHackMe lab work, not production"* | ✅ |
| Can he be reached? | Contact block, then footer | ✅ |
| Time cost | **4.94 screens of About** to reach the last of it | ⚠️ **F-4** |

**Verdict: PASS on substance, with F-4 as the cost.** The attribution ceiling renders in the
subordinate `.inset` register rather than as a disclaimer banner, which is the right treatment — it
reads as precision rather than apology. **JUDGMENT.**

---

## 13. Content corrections — both hold

Verified in the rendered pages, not only in source.

| # | Correction | State |
|---|---|---|
| 1 | Remove unsupported **"access control"** language | ✅ **HOLDS.** About's testing list renders *"injection, cross-site scripting, misconfiguration"*. No access-control skill claim on any launch page. Remaining occurrences are the subject matter of a hypothetical investigation and decoy content in genericity fixtures — neither is a claim about Het |
| 2 | Do not claim existing investigations have had conclusions changed | ✅ **HOLDS.** About renders *"When I get something wrong I say so on the page, with a date… Where a conclusion has changed, the page says what it used to be and why it changed"* — conditional practice, no fabricated history. The phrase *"conclusions I have since changed"* appears nowhere |

---

## 14. Confidence

| Area | Confidence | Basis |
|---|---|---|
| Overflow, contrast, tap targets, zoom, reduced motion | **HIGH** | 45 renders, computed values, zero failures, deterministic |
| Measure and type scale | **HIGH** | per-character line counts, cross-checked by a second method, stable 768→1920 |
| Cross-page coherence | **HIGH** | five pages measured simultaneously in identical frames; exact agreement |
| Footer worst case | **HIGH** | measured and observed |
| About length failure | **HIGH** | a number against a written cap |
| `.facts` and note-link fixes | **HIGH** | measured before and after, observed at 1:1, no regressions |
| Notes reading as a log rather than a portfolio | **MEDIUM-HIGH** | the project's own 8-signal instrument, applied to a render; the 5-second impressions are my reading |
| Notes genericity | **MEDIUM-HIGH** | one built variant, rendered and compared |
| Hiring tests | **MEDIUM** | structured walkthroughs against measured geometry, not user research |
| Ultra-wide (1440 / 1920) composition | **MEDIUM** | fully measured; assessed from 1:1 tiles rather than one legible wide screenshot (§1.1) |
| Performance | **MEDIUM** | request counts, CLS and DOM are solid; timings are localhost and say nothing about real-network behaviour |

---

## 15. What must close before Phase 6

1. **F-4 — About length.** A stated hard cap in the project's own layout document, exceeded by
   22–65% at every desktop height. Requires Het to cut.
2. **F-2 — the note reference in `investigation.html` "Related".** A dead link advertising a
   section that does not exist at launch. This is G-1's own failure mode, unresolved.
3. **F-3 — the Notes decision.** Rendered evidence says Notes reads as a dated log, is the site's
   least diagnostic surface, and hardens toward a feed nearer 10 notes than 25. Combined with open
   item 6 in `PHASE5G_SPEC.md` §7 — *"Real notes, or Notes does not launch"* — this is a live
   go/no-go, not a detail.
4. **F-5 — heading structure**, to be settled consistently across About and Notes.

Items 1–3 are content and product decisions that belong to Het. The design system itself measured
clean: **zero overflow, zero contrast failures and zero tap-target failures in 45 renders, before
and after two fixes.**

Phase 6 should not begin on top of a page that fails its own stated cap and a launch state that
still links to a section it does not have.

---

NOT READY FOR PHASE 6
