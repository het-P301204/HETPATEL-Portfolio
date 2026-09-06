# Phase 5D — Failure Review

**Date:** 2026-08-14

Failures found by **computation and code inspection**. Visual failures could not be found, because nothing was rendered.

---

## F1 — The measure specification was ambiguous, and the implementation disagreed with the intent

**Severity: HIGH** · **Found by:** arithmetic

**5C said:** "`max-width` 38rem, target 62–66 characters."

**What that produces:** with `box-sizing: border-box` and 1.25rem padding either side, `max-width: 38rem` yields a **35.5rem text column (568px)** — not 38rem. A 40px discrepancy between what the spec meant and what the spec says.

**Estimated character counts** (using an average-lowercase-width heuristic of 0.46–0.52em; **not measured Newsreader metrics**):

| Text column | avg 0.46em | 0.48em | 0.50em | 0.52em |
|---|---|---|---|---|
| **568px** (spec as written) | 65.0 | 62.3 | 59.8 | 57.5 |
| **608px** (spec as intended) | 69.6 | 66.7 | 64.0 | 61.5 |

**The uncomfortable finding: neither is clearly right.** 568px risks falling below the 62-character floor; 608px risks exceeding the 66 ceiling. The correct value depends on Newsreader's actual metrics, which cannot be obtained without rendering.

**Correction applied:** `--measure` now names the **text column explicitly** at **37rem (592px)**, with padding outside it. That is the midpoint of the two readings and sits inside 5C's own 36–41rem acceptable band.

**Still unresolved.** 37rem is a reasoned placeholder. **A browser session must count characters and adjust.**

**Spec change required:** 5C must state whether a width refers to the text column or the padded box. This ambiguity would have propagated into every future component.

---

## F2 — Dark-mode muted text had almost no contrast headroom

**Severity: HIGH** · **Found by:** computation

**Specified:** `#8B8478` on `#191816`, claimed ~5.1:1.
**Actual: 4.79:1** — only **0.29 above the 4.5 AA floor**, at 13px.

That is not a margin. Any subsequent darkening of the ground, any anti-aliasing loss, or any display gamma variance puts it under.

**Correction applied:** `#9C9488` → **5.92:1**.

**Related:** dark secondary `#A9A296` computed at **7.01:1** — passing AAA by 0.01, which is effectively sitting on the line. Raised to `#B0A99C` → **7.61:1**.

---

## F3 — Stated contrast values drifted from actual

**Severity: LOW** (all still pass) · **Found by:** computation

| Role | 5C claimed | Actual | Δ |
|---|---|---|---|
| Light primary | 16.6 | **16.83** | +0.23 |
| Light secondary | 7.4 | **7.45** | +0.05 |
| Light muted | 5.3 | **5.17** | **−0.13** |
| Light accent | 8.2 | **8.67** | +0.47 |
| Dark primary | 14.1 | **13.99** | −0.11 |
| Dark secondary | 7.3 | **7.01** | **−0.29** |
| Dark muted | 5.1 | **4.79** | **−0.31** |

**Pattern: every dark-mode value was overstated.** The two that mattered are corrected above.

**Process lesson:** 5C's values were calculated by hand and recorded as fact. They should have been marked as estimates until verified. The corrected values in this document are computed from the actual hex pairs.

---

## F4 — Light muted remains the weakest text role

**Severity: MEDIUM** · **Found by:** computation

`#6E6A60` at **5.17:1**, used at **13.5px** for apparatus labels, dates and captions. Passes AA, fails AAA.

**Not changed**, because 5C's stated first remedy is *size before contrast* — raise 13.5px to 14px. That requires visual judgment, which was unavailable.

**Options, if a rendered check shows it uncomfortable:**

| Option | Value | Ratio | Cost |
|---|---|---|---|
| 1. Raise size to 14px | `#6E6A60` | 5.17 | None |
| 2. Darken | `#66625A` | **5.82** | Weakens label/value distinction |
| 3. Darken further | `#605C53` | **6.38** | Distinction weakens further |

---

## F5 — `!important` on movement spacing

**Severity: LOW (prototype only)** · **Found by:** inspection

`.movement` and `.question` use `!important` to override the general paragraph margin. Expedient for a prototype; **unacceptable in production** — it makes the spacing scale unoverridable and will fight any future component.

**Production fix:** restructure the cascade — scope the base paragraph margin, or use adjacent-sibling selectors, so the movement gap wins on specificity rather than by force.

---

## F6 — An untested typographic choice was introduced

**Severity: LOW** · **Found by:** inspection

`font-variant-numeric: oldstyle-nums` on `body` is an editorial choice **not present in the 5C spec.** Oldstyle figures suit running prose; lining figures suit data.

It may be inert if Newsreader lacks oldstyle figures. It could also interact unpredictably with the `tabular-nums` set on the apparatus.

**Action:** either remove it, or add it to the spec deliberately after a visual check. It should not persist as an undocumented default.

---

## What could not be assessed

**Every visual failure mode** — whether Newsreader reads bookish or academic; whether the warm ground reads as paper or cream; whether the register survives mobile compression; whether the movements are perceptible; whether the revision register reads as a record or a changelog; whether the short page looks complete; whether the accent looks like document ink or generic link blue.

**These are the failures 5D was commissioned to find, and it did not find them.** The prototype exists so that a session with browser tooling can.

---
---

# FAILURES FOUND BY RENDERING — 2026-08-15

The failures above (F1–F6) were found by computation and code inspection. **The nine below were
found by looking at the rendered page.** Three of them could not have been found any other way.

Method and evidence labelling: [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.
Each carries the full OLD → TEST → RESULT → NEW record.

---

## V-1 — The measure was 15% too wide, and worse on tablet than desktop

**Severity: HIGH** · **Found by:** counting characters in the rendered DOM

**Was:** `--measure: 37rem` (592px), assumed to yield 62–66 characters.

**MEASURED:** median **74** characters at desktop, **80** at tablet. The tablet breakpoint dropped
the body to 18px while leaving the column at 592px — a smaller face in the same width means *more*
characters — so the breakpoint intended to improve reading made it worse.

**Root cause:** not the value, the **unit**. A measure in `rem` is pinned to the root font size,
while the thing it must track is the reading font. Any `rem` measure is correct at exactly one body
size and wrong at every other. This is the same class of error as F1 — a width specified against
the wrong reference — one level deeper.

**Now:** `--measure: 27em`. MEASURED 64 median / 67 p90 at every viewport from 768 to 1920 across
two body sizes, with no per-breakpoint override.

**Lesson:** F1 established that width specs must say *what* they measure. V-1 adds that they must
say **relative to what**.

---

## V-2 — Breakpoint boundaries fell through to desktop

**Severity: MEDIUM** · **Found by:** rendering at the exact boundary values

**Was:** `max-width: 600px` / `min-width: 601px and max-width: 1023px`.

**MEASURED:** at 601px and at 1023px the page rendered at the **desktop** 19px size. At dpr 1.25 an
integer CSS width evaluates fractionally (600.8, 1023.2) and matched neither query.

**Now:** `max-width: 37.5625em` / `min-width: 37.5625em and max-width: 64em`. Identical boundary
values on both sides, so the later rule wins and no width can be unhandled; and in `em`, so the
breakpoints track the reader's font size as content-driven breakpoints should.

**Lesson:** adjacent integer breakpoints are unsafe at fractional device pixel ratios. Use the same
value on both sides and let the cascade resolve it.

---

## V-3 — Three different left edges on one page

**Severity: MEDIUM** · **Found by:** measuring rendered left positions

**MEASURED at 1280:** site name at 347px, prose at 384px, footer at 417px. 5B's first alignment
principle is *"One left edge. Title, apparatus, prose, insets, artifacts, foot, related — all
aligned."*

Two separate causes:

1. 5B specifies navigation and footer at **content width** (46rem) and prose at the measure. Once
   the measure narrowed to 27em, these two 5B instructions openly conflicted.
2. An intermediate fix made it worse: `--content: 33em` in a custom property. **`em` inside a
   custom property resolves at the element that consumes it, not where it is declared** — so a
   13.5px footer computed 33em as 446px while a 19px header computed it as 627px.

**Now:** a single `--box` in `rem`, derived from the measure and restated per breakpoint, used by
header, article and footer alike. The footer's `font-size` was moved off the container onto its
child so nothing re-resolves the unit. MEASURED: one left edge at every viewport, identical to
0.1px.

**Lesson:** structural widths must be font-size independent. `em` is right for the measure and
wrong for the frame. **This modifies a 5B decision and is flagged for reconfirmation when the index
page is built** — the index may genuinely need a wider region.

---

## V-4 — 250px of dead space before the footer

**Severity: MEDIUM** · **Found by:** rendering the 150-word page

`.investigation` carried `padding-bottom: var(--major)` and `.site-footer` carried
`margin-top: var(--major)`. Both applied — a double MAJOR, MEASURED at 250px.

**Why it mattered more than it looks:** on the long page it read as breathing room. On the 150-word
page it read as *"something is missing here."* The defect landed hardest exactly where the system
is most fragile — the short-content case that Test 8 exists to protect.

**Now:** the footer's MAJOR margin alone. MEASURED 125px.

---

## V-5 — The mobile apparatus pushed the investigation off the first screen

**Severity: MEDIUM-HIGH** · **Found by:** rendering at 375 and measuring above-the-fold blocks

**Was:** stacked labels above values at ≤600px — eight lines, MEASURED **202px**, with the question
paragraph starting at y=572. On a 375×812 phone with browser chrome, the reader's first screen
contained banner, nav, back link, title and metadata, and **not one sentence of the investigation.**

**Now:** two columns retained at every width, gap reduced. MEASURED **98px**; the page is 216px
shorter and the first paragraph is fully visible on the first screen.

**Lesson:** the apparatus is an ordinary byline. A byline should not be the largest element above
the fold.

---

## V-6 — The heading hierarchy inverted at length, dissolving the movement structure

**Severity: HIGH** · **Found by:** rendering a 1,755-word fixture

**This is the failure that most justifies the phase.** It is invisible on the canonical 545-word
page, invisible in the source, and fatal to the system's load-bearing mechanism.

`h2` had `margin-top: var(--open)` — **the same 2.2× gap as a movement boundary** — and then added
24px serif type on top of it. On a long page with internal headings, the headings became the
strongest structural signal and the four movements stopped being the spine. A subordinate element
was out-competing the load-bearing one.

**Now:** `h2 { margin-top: calc(var(--base) * 1.5) }`. Hierarchy is movement (2.2×) > heading
(1.5×) > paragraph (0.85×). OBSERVED: the movement gap is visibly larger, and headings read as
belonging inside the section the reader is already in.

**Lesson, and it generalises:** the movement mechanism is a spacing ratio and nothing more. **Any
future component introduced with a comparable gap will compete with it.** Every new element must be
checked against the movement gap before it ships. This is now a standing constraint.

---

## V-7 — The page punished readers who enlarge their text

**Severity: HIGH** · **Found by:** rendering at 150% and 200% root font size

Type was in absolute `px`; spacing and the column were in `rem`. MEASURED at 200%:

| | 100% | 200% |
|---|---|---|
| Body text | 19px | **19px — unchanged** |
| Text column | 513px | **1,026px** |
| Median characters | 64 | **~128** |

**The layout grew and the text did not.** A reader who asked for larger text received the same size
type on a column of double the width. Browser zoom satisfies WCAG 1.4.4 regardless, so this passed
on paper while failing the thing the criterion exists to protect — and 5B explicitly promised that
the rhythm would scale "with user font-size preferences."

**Now:** all 25 type declarations converted to `rem`, breakpoints to `em`. MEASURED at 200%: body
38px, apparatus 30px, column 1,026px, **62 characters**, no overflow. Default rendering unchanged.

---

## V-8 — Touch targets below the WCAG 2.2 minimum

**Severity: LOW-MEDIUM** · **Found by:** measuring rendered hit rectangles

Artifact and related-work links MEASURED **18px** high against the 24px minimum of SC 2.5.8. The
inline exception does not clearly apply — they are standalone links in list items, and on mobile
they are the primary tap targets.

**Now:** `padding: .3em 0`, which grows the hit area without changing the line box. MEASURED 26px
at every viewport.

---

## V-9 — The first fallback font was the worst possible match

**Severity: LOW** · **Found by:** rendering the page in each fallback and comparing geometry

With `display: swap`, the fallback is what the reader sees first. MEASURED at 1280:

| Fallback | h1 | Cumulative shift |
|---|---|---|
| **Georgia** (first in the stack) | **wraps to two lines** | **135px** |
| **Times New Roman** | one line | **0px** |

Newsreader's proportions are close to Times and not to Georgia. The stack was ordered by habit.

**Now:** `"Newsreader", "Times New Roman", Times, serif`. Liberation Serif, the usual Linux `serif`,
is metric-compatible with Times, so the whole chain agrees. A one-word change that removes a
visible reflow on first paint.

---

## Confirmed, not fixed — the apparatus is a byline

**Not a defect. A confirmed prediction.**

5B's own F2 warned that at launch the head apparatus would read as ordinary article metadata.
OBSERVED at 1280, 834 and 375: it does. Four label/value pairs in small grey sans under a title is
the form every publication CMS produces.

**No decoration was added to disguise this**, per the brief's explicit instruction. The finding is
recorded as-is.

The refinement rendering added: the four fields are not equally ordinary. `Status` is load-bearing
— on a short page it is what makes brevity legible as *intent* rather than abandonment. `Origin`
carries real information for this portfolio, because it separates lab work from the confidential
professional work. `Started` and `Domain` do nothing the title and prose do not already do.

---

## What the two rounds of 5D say together

| | 2026-08-14 (no rendering) | 2026-08-15 (rendered) |
|---|---|---|
| Defects found | 6 | 9 |
| Of which contrast/arithmetic | 4 | 0 |
| Of which invisible in source | 0 | **3** (V-1, V-6, V-7) |
| Design confidence | LOW-MEDIUM | MEDIUM-HIGH |

The 2026-08-14 round found every defect that arithmetic can find, and its arithmetic was
independently confirmed correct on 2026-08-15 — including both contrast corrections. It found none
of the three that mattered most, because all three are relationships between rendered things:
characters against a column, a heading against a movement, type against a reader's own setting.

**The standing lesson: a design system cannot be validated by reading its source, however carefully.**
