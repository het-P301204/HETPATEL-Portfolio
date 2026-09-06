# Phase 5D — Validation

**Date:** 2026-08-15 · **Status: COMPLETE. The prototype was rendered.**

This document supersedes the *validation status* of the 2026-08-14 5D documents. It does not
erase them. Where a 5D-14 conclusion survived, it is marked as surviving; where rendering
overturned it, both the old and new positions are recorded.

---

## Evidence labelling

Every claim below carries one of four labels. They are not interchangeable.

| Label | Means |
|---|---|
| **MEASURED** | A number read out of the rendered DOM (`getBoundingClientRect`, `getComputedStyle`, `Range`, `PerformanceResourceTiming`). Reproducible. |
| **OBSERVED** | Something seen in a rendered screenshot of the actual page. |
| **INFERRED** | Reasoned from measured or observed facts, not directly seen. |
| **JUDGMENT** | Design opinion. Argued, not proven. |

**No claim in this document is labelled OBSERVED unless the page was rendered and looked at.**

---

## 1. Browser tooling — status

**WORKING, with two constraints that shaped the method.**

| Capability | Status |
|---|---|
| Rendering a real page with real webfonts | ✅ Confirmed — Newsreader and Public Sans loaded from `fonts.gstatic.com` and verified visually distinct from Georgia and Arial |
| Reading the live DOM / computed styles / resource timing | ✅ Full access throughout |
| Screenshots | ⚠️ Intermittent — worked for the majority of the session, failed at the start and again near the end (`the Browser pane is not displayed`) |
| `resize_window` to control the layout viewport | ❌ Unreliable — the reported viewport and the composited frame disagreed |
| Loading `http://localhost` in the pane | ❌ Blocked by policy |

**Method adopted.** Because `resize_window` could not be trusted, every viewport was created
*inside the document*: each fixture was inlined into an `<iframe srcdoc>` of an exact pixel
width, inside a wrapper scaled to fit the pane. Media queries evaluate against the iframe, so
375px means 375px. Fixtures were self-contained (stylesheet inlined, fonts still fetched over
the network) so that nothing depended on relative-path resolution.

**This is a real limitation and it is stated rather than hidden:** the pane renders at roughly
276 CSS px, so wide layouts were screenshotted at a reduced scale. Reading-level judgments were
made on crops of the text column at 0.6–0.9 device px per CSS px, which is legible but not
crisp. Macro-balance judgments at 1440 and 1920 were made at ~0.24 px/CSS, which is enough for
margins and proportion and not enough for type.

**What this means for trust:** the character counts, spacings, contrast ratios and byte counts
in this document are exact. The aesthetic judgments were made from real but somewhat soft
renderings, and a review on a full-size display could reasonably differ on matters of taste.
They should not differ on the numbers.

---

## 2. Test 1 — Reading measure

### The headline

**The measure was wrong, and the unit was the reason.**

MEASURED, by walking every character of every reasoning paragraph with `Range` and grouping by
line box — not estimated from `ch`, not estimated from average glyph width:

| Viewport | Body | Column | **Median chars** | p90 | Max |
|---|---|---|---|---|---|
| 1280 / 1440 / 1920 | 19px | 592px | **74** | 78 | 81 |
| 768 / 834 | 18px | 592px | **80** | 82 | 85 |
| 430 | 17px | 390px | 52 | 55 | 60 |
| 375 | 17px | 335px | 44 | 48 | 51 |

Target was 62–66. Desktop overshot by 8–12 characters. **Tablet was worse than desktop**, because
the 601–1023px rule dropped the body to 18px while leaving the column at 592px — a smaller face
in the same width means more characters, so the breakpoint intended to help made the measure
longer.

### Diagnosis

The defect was not the value 37rem. It was that the measure was expressed in **`rem`**, which is
pinned to the root font size, while the thing it must track — the reading font — changes at every
breakpoint. Any `rem` measure is correct at exactly one body size and wrong at all the others.

### Sweep

MEASURED across nine column widths at three body sizes:

| Column @19px | Median | | Column @18px | Median |
|---|---|---|---|---|
| 464px (29rem) | 57 | | 480px (30rem) | 64 |
| 496px (31rem) | 62 | | 496px (31rem) | 66 |
| **512px (32rem)** | **64** | | 512px (32rem) | 68 |
| 528px (33rem) | 66 | | 528px (33rem) | 70 |
| 592px (37rem) | 74 | | 560px (35rem) | 74 |

Note that 512px reads 64 at 19px and 68 at 18px — the same width, a different measure. That is
the `rem` problem stated numerically.

### Change

| | |
|---|---|
| **OLD** | `--measure: 37rem` — a fixed 592px column |
| **TEST** | Character-counted the same prose at 13 viewports from 320 to 1920, and at three body sizes |
| **RESULT** | 74 median desktop, 80 tablet — both far outside 62–66 |
| **NEW** | `--measure: 27em` — 27 em **of the reading font** |

MEASURED after the change:

| Viewport | Body | Column | Median | p90 |
|---|---|---|---|---|
| 768 → 1920 | 18–19px | 486–513px | **64** | 67 |
| 430 | 17px | 390px | 52 | 55 |
| 375 | 17px | 335px | 44 | 48 |
| 320 | 17px | 280px | 36 | 40 |

**64 characters at every viewport from 768px to 1920px, across two body sizes, without a single
per-breakpoint override.** The character count is now a property of the system rather than a
coincidence at each breakpoint.

### Qualitative

OBSERVED. At 592px the reasoning paragraphs read as slabs — the eye had to travel, and returning
to the start of the next line took visible effort in the longer paragraphs. At 513px the same
paragraphs read as blocks of thought. The difference was larger than 12 characters sounds.

Punctuation and long words do **not** distort the experience. `hyphens: none` and left-aligned
(unjustified) text mean no rivers and no hyphenation artefacts; long compound terms
("pre-normalisation", "access-control") simply take a line-break with a slightly short line
before them. MEASURED: the minimum full line is 55 characters against a 64 median, so the
raggedness is mild.

Mobile at 44 characters is short but correct — a 375px screen cannot do better without shrinking
type below comfort, and the prose does not feel choppy at 17px.

---

## 3. Test 2 — Typography

**First, the control.** A probe rendering the same string in Newsreader / Georgia / Public Sans /
Arial confirmed OBSERVED that the webfonts actually loaded and are visibly distinct from their
fallbacks. Every typography judgment below is about Newsreader and Public Sans, not about a
fallback quietly standing in for them.

### Newsreader

| Question | Answer |
|---|---|
| Too bookish? | **No.** Warm and literary, but the moderate stroke contrast and the fairly open counters keep it from reading as a book face. |
| Academic? | **No.** This was the main risk 5D-14 flagged and it does not materialise. Academic would mean high contrast, tight fit, small x-height. Newsreader at 19px/1.65 reads as a considered publication, not a journal. |
| Personal? | **Partly.** It has real character — the italic in particular. But it is a *publication's* character more than an individual's. |
| Comfortable at length? | **Yes.** OBSERVED across the 1,755-word fixture: no fatigue attributable to the face. |
| Enough personality? | **Yes,** and arguably slightly more than the brief wants. |

JUDGMENT: the honest reading is that Newsreader lands closer to **editorial publication** than to
**personal working record**. That is a small drift from the north star, not a failure, and the
brief is explicit that fonts must not be changed on taste alone. **Recommendation: keep
Newsreader.** The gap to "personal" is not a type problem — it is carried by voice and by the
revision register, both of which are content.

### Public Sans

| Question | Answer |
|---|---|
| Differentiates apparatus from reasoning? | **Yes, decisively.** OBSERVED — the register shift between grey sans apparatus and near-black serif prose is unmistakable at every viewport including 375px. This is the clearest success in the type system. |
| Too corporate? | **Mildly.** Public Sans is a government/utility face and reads as such. In apparatus, that is appropriate — it is doing a labelling job. |
| Too neutral? | **Yes, deliberately.** It has no opinion, which is what apparatus should have. |
| Too small? | **No.** MEASURED at 15px (0.9375rem) for values, 13.5px for labels, at 7.45:1 and 5.17:1 contrast. Legible and correctly subordinate. |

### System monospace

**It does not appear on any rendered page.** The `code` and `pre` rules exist in the stylesheet
but no fixture uses them — MEASURED, zero `<code>` and zero `<pre>` elements across all nine
fixtures.

So the two questions the brief asks cannot be answered from what was rendered:

- *Does it appear only where technical precision benefits?* — untested; nothing invoked it.
- *Does it accidentally create a terminal aesthetic?* — untested.

INFERRED from the CSS only: `code` uses a `--code-ground` tint (`#F4F2EC`) at 0.9em with 2px
radius, and `pre` a padded block. Nothing in the styling is terminal-like — no green, no black
ground, no ligature-heavy face. But **this is an open item, not a pass.** A fixture containing a
config excerpt and an inline value should be rendered before the mono register is signed off.

One MEASURED note that matters: `font-variant-numeric: tabular-nums` on the apparatus and the
revision dates does the intended job — the date column aligns exactly. `oldstyle-nums` on body
(flagged as undocumented in 5D-14 as F6) is OBSERVED in the dates and reads as a deliberate
editorial choice rather than an accident. **Recommendation: adopt it into the spec deliberately.**

---

## 4. Test 3 — Investigation opening

OBSERVED at 1280 and 375. The sequence is: back link → title → apparatus → question paragraph.

| Does the question read as… | |
|---|---|
| a hero? | **No.** No large type, no centring, no ornament. |
| a marketing statement? | **No.** |
| a second title? | **No.** It is set in body type at body size with no distinguishing style. |
| a pull quote? | **No.** No indent, no rule, no italic, no quotation mark. |

**The opening works.** The question is simply the first paragraph, and it reads as someone
starting to explain something. This is one of the clearest survivals of the whole phase: the 5A
decision to give the question no special typography is correct and rendering confirms it.

One OBSERVED reservation: the gap between the apparatus and the question is `--open` (69px at
desktop), the same as a movement boundary. It reads fine, but it means the *first* thing the
reader crosses is a full movement-sized gap, which slightly overstates the apparatus's importance
by giving it its own zone. Minor. Not changed.

---

## 5. Test 4 — Apparatus (highest priority)

### Verdict: **B — ordinary article metadata.**

OBSERVED at 1280, 834 and 375. The head apparatus reads as a structured byline. Four label/value
pairs in small grey sans immediately under the title is the form used by every publication CMS,
and nothing about the rendering distinguishes it.

**5B's own F2 predicted exactly this, and it was right.** The prediction is now confirmed by
rendering rather than assumed.

Per the brief, this is recorded, **not decorated around.** No rule, no container, no colour and no
icon was added to make it feel distinctive, because doing so would have manufactured a difference
that is not there.

### The finding that is worth more than the verdict

The four fields are not equally ordinary. OBSERVED on the 150-word fixture:

- **`Status: unresolved` is load-bearing.** On a short page it is the thing that makes the
  shortness legible as *intent* rather than as abandonment. Without it the page could read as a
  stub; with it, the page reads as an open question honestly marked open.
- **`Origin: self-initiated`** carries real information for this specific portfolio, because it
  is what separates lab work from professional work — and given the confidentiality boundary
  around the CSCRF/IRDAI engagements, that distinction has to be visible somewhere.
- **`Started` and `Domain` are pure byline.** They are the two fields doing no work that the
  title and prose do not already do.

JUDGMENT: the apparatus is not distinctive as *typography* and will not become so. Two of its
four fields are distinctive as *information*. The concept therefore needs content-level
differentiation exactly as the brief anticipated — and the honest description of the head
apparatus is "a byline that happens to contain one field that matters."

**Recommendation for 5E (not actioned here):** consider whether `Started`/`Domain` earn their
place, and whether a publication date belongs here rather than in the revision register (see
§13).

---

## 6. Test 5 — Reasoning flow

OBSERVED at 1280 across the canonical 545-word page and the 1,755-word fixture.

**On the medium page the four movements are perceptible.** MEASURED, the mechanism is a 2.59:1
ratio — 69px between movements against 26.6px between paragraphs — and that ratio is visible.
Reading it as a reader rather than as a reviewer, the page moves in stages: the question settles,
the method runs, the finding lands, the uncertainty opens.

They do **not** read as form fields, template sections or case-study headings. There are no
labels at all, which is what saves them. INFERRED: had the movements been titled "Approach /
Findings / Limitations", the page would have become a consultancy case study immediately.

### The failure found at length

On the 1,755-word fixture the mechanism broke down, and rendering is the only way this would have
been caught.

The fixture uses `h2` headings inside long movements — permitted by 5B, and necessary at that
length. MEASURED: `h2` had `margin-top: var(--open)` — **the same 69px gap as a movement
boundary** — and then added 24px serif type on top of it.

OBSERVED result: the headings became the strongest structural signal on the page, and the four
movements stopped being the spine. A subordinate element was out-competing the load-bearing one.

| | |
|---|---|
| **OLD** | `h2 { margin-top: var(--open) }` — 2.2× base, equal to a movement boundary |
| **TEST** | Rendered the 1,755-word fixture at 1280 and compared boundary strengths by eye |
| **RESULT** | Headings read as stronger than movements; the movement structure dissolved at length |
| **NEW** | `h2 { margin-top: calc(var(--base) * 1.5) }` — 47px |

The hierarchy is now movement (2.2×) > heading (1.5×) > paragraph (0.85×). OBSERVED after the
change: the movement gap is visibly the larger of the two, and headings read as belonging inside
the section the reader is already in.

**This matters beyond the fix.** The movement mechanism is not robust on its own — it is a
spacing ratio, and any element introduced with a comparable gap will compete with it. Every
future component needs checking against it.

---

## 7. Test 6 — Uncertainty

**This is the strongest result in the phase.**

OBSERVED at 1280 and 375. "What I could not determine was whether the ordering was deliberate…"
is set in the same serif, at the same size, in the same colour, with the same spacing as every
other paragraph. MEASURED: `#1A1917` at 19px, 16.83:1 — identical to the rest of the prose.

Confirmed absent, MEASURED across all fixtures: no warning box, no red, no badge, no icon, no
grey-out, no reduced size, no disclosure widget.

**Can a reader locate it naturally?** Yes. It sits after a movement boundary and names itself in
its first clause. Nothing signposts it and nothing needs to.

**Does it remain full-strength reasoning?** More than that. MEASURED: at 314px tall it is the
**longest paragraph on the page** — longer than the finding it qualifies. OBSERVED, that gives
the uncertainty genuine weight; it reads as the part the author found most interesting, which is
the correct relationship between a security practitioner and the limits of their evidence.

JUDGMENT: this is the single clearest expression of the brand in the rendered artefact, and it is
achieved entirely by *not* styling something.

---

## 8. Test 7 — Spacing

MEASURED at 1280 (base = 31.35px, derived from 19px × 1.65):

| Level | Spec (5B) | Implemented | Measured | Verdict |
|---|---|---|---|---|
| TIGHT | 0.4× | 0.4× | 12.5px | ✅ matches |
| NORMAL | **1.0×** (the base) | **0.85×** | 26.6px | ⚠️ below spec |
| OPEN | **2.5×** (band 2.2–3.0) | **2.2×** | 69px | ⚠️ at the floor |
| MAJOR | **4.5×** (band 4–6) | **4.0×** | 125.4px | ⚠️ at the floor |
| Movement : paragraph | **≥ 2.2 : 1** | — | **2.59 : 1** | ✅ constraint met |

The implementation took the **minimum of every band**, and NORMAL is outside its band entirely
(5B gives NORMAL no tolerance — it *is* the base). This was not documented as a deviation.

**Is it wrong?** OBSERVED: no. The page does not read as too dense, too loose, fragmented or
monotonous. Paragraphs are clearly separated without floating apart, and the binding constraint
is satisfied with margin — 2.59:1 against a 2.2:1 floor, achieved by tightening NORMAL rather
than by opening OPEN.

JUDGMENT: **keep the implemented values and correct the specification to match.** Reaching 2.5×
OPEN *and* 1.0× NORMAL would give the same ratio at a larger absolute scale, making an already
tall page taller (the canonical page is 3,098px; the long fixture is 7,708px) for no legibility
gain. The prototype's proportions are the ones that were rendered and they work.

**This is a spec change, not a silent deviation, and it is recorded as one.**

### One real spacing defect

MEASURED: 250px of empty space between the last content and the footer rule — `.investigation`
carried `padding-bottom: var(--major)` and `.site-footer` carried `margin-top: var(--major)`, and
both applied.

| | |
|---|---|
| **OLD** | Article bottom padding + footer top margin, both MAJOR = 250px |
| **TEST** | Rendered the canonical page and the 150-word page |
| **RESULT** | On the long page it read as breathing room. On the 150-word page it read as *"something is missing here"* — the failure mode landed precisely where the system is most fragile |
| **NEW** | Article bottom padding removed; the footer's MAJOR margin alone. MEASURED 125px |

---

## 9. Test 8 — Short content (150 words)

**Verdict: intentionally small, not unfinished.** OBSERVED at 1280.

Three paragraphs, ending on "Leaving it open." — a real ending rather than a stop. MEASURED: the
artifacts, revisions and related regions are **absent from the markup entirely**, not hidden, so
there are no empty headings and no "none yet" placeholders. This confirms the 5D-14 "absence
renders nothing" claim by rendering rather than by reading the source.

Two things make the shortness legible as intent, and both are worth recording because they are
not obvious:

1. **`Status: unresolved` in the apparatus.** It tells the reader the page is short because the
   work is open. This is the apparatus doing genuine work (see §5).
2. **The uncertainty paragraph is the longest of the three.** The page spends most of its words
   on what is not known, which reads as deliberate.

The only thing that made it look unfinished was the 250px dead band before the footer, now fixed
(§8). **No filler was added and none is needed.**

---

## 10. Test 9 — Medium content (canonical, 545 words)

OBSERVED at 1280, 834, 375. MEASURED: 3,098px at 1280 — about 3.4 screens.

| Aspect | Assessment |
|---|---|
| Rhythm | Good. Paragraph lengths vary (94–314px), so the page does not pulse. |
| Hierarchy | Title → apparatus → prose → regions is unambiguous. |
| Density | Comfortable. |
| Whitespace | Generous. The MAJOR gaps between artifacts / revisions / related are the loosest part and read as deliberate region separation. |
| Apparatus | Ordinary (§5). |
| Ending | Clean. Related item, rule, one-line footer. No CTA, no "let's work together", no social row. |

This is the length the system is tuned for and it is the best-performing case.

---

## 11. Test 10 — Long content (1,755 words)

Fixture created for this test: `prototype/fixture-long.html`. **Test fixture only** — hypothetical,
self-initiated, clearly banner-marked, not production content.

MEASURED: 7,708px at 1280 (8.6 screens); 8,978px at 375 (10 screens).

| Aspect | Assessment |
|---|---|
| Reading fatigue | **Acceptable, and materially better after the measure fix.** At 74 characters this length would have been punishing; at 64 it is sustainable. |
| Hierarchy | Broke, then fixed — see §6. This was the phase's most valuable rendered finding. |
| Whitespace | Holds. Does not become vacant at length. |
| Repetition | The four-movement shape is more visible at length and starts to feel like a form. Mitigated here by two `h2` sections and by varying paragraph length. 5B's discipline note "vary the shape" is confirmed as necessary, not optional. |
| Movement transitions | Work, once `h2` was subordinated. |
| Page length | 8.6 screens is long but not unreasonable for the content. INFERRED: this is near the practical ceiling — beyond ~2,500 words the absence of any in-page navigation would start to hurt. |

OBSERVED: sentence-shaped `h2` headings ("Why it looked like lateness rather than wrongness",
"What the fix did not cover") hold the working-document register. Nominal headings
("Analysis", "Findings") would collapse the page into a case study. **This should become a
writing rule.**

---

## 12. Tests 11 & 19 — Revision system and return visit

MEASURED across four states of the same investigation:

| State | Register height | Page height | Fixture |
|---|---|---|---|
| 0 revisions | **absent from markup** | 2,715px | `fixture-rev0.html` |
| 1 revision | 59px | 2,900px | `fixture-rev1.html` |
| 3 revisions | 302px | 3,098px | `fixture-rev3.html` (canonical) |
| 6 revisions | 643px | 3,505px | `fixture-rev6.html` |

Confirmed absent, MEASURED: no colour coding, no timeline graphic, no icons, no badges, no
animation. Entries are date + statement, oldest first.

### Classification

| State | Reads as | |
|---|---|---|
| 0 | *(nothing renders)* | ✅ correct |
| 1 | **A — changelog** | ❌ see below |
| 3 | **D — genuine record of changed reasoning** | ✅ target |
| 6 | **D**, drifting toward the shape of a timeline | ⚠️ |

### The n=1 failure

OBSERVED. At one revision the page renders a MAJOR gap, a region label reading "Revisions", and a
single line: **"2026-03-04 — Published."**

That is a region of pure ceremony containing no information. It reads as an empty state that
forgot to hide itself, and it is the worst-looking state in the entire system.

**Root cause is the content model, not the CSS.** "Published." is not changed reasoning — it is a
creation event sitting in a register whose whole purpose is changed reasoning. It is also, at
n=3 and n=6, the one entry that does not belong.

| | |
|---|---|
| **OLD** | Every published investigation opens its revision register with a "Published." entry, so the region renders from day one |
| **TEST** | Rendered n = 0, 1, 3, 6 |
| **RESULT** | n=1 is a labelled region containing one uninformative line; at n=3 and n=6, "Published." is the only entry that is not changed reasoning |
| **NEW (recommended, not yet applied)** | Move the publication date into the head apparatus. The foot register then contains **only** entries recording changed reasoning, and renders nothing until the first one exists |

This is recommended rather than applied because it changes the **content model**, which is a 5B/UX
decision rather than a 5D styling one. It should be confirmed before 5E. Applying it would also
give the head apparatus a second field that genuinely earns its place (§5).

### At six

OBSERVED: still reads as changed reasoning, because the writing carries it. But two pressures
appear. The left column of six evenly spaced dates begins to take the *shape* of a timeline even
with no graphic drawn — nothing decorative was added, but the form converges. And the register
(643px) becomes comparable in size to the prose movements, shifting the page's centre of gravity.
INFERRED: this is fine at six and would likely fail somewhere past ten.

### Test 19 — return visit

Comparing `fixture-rev0` with `fixture-rev3` — the same investigation, same prose, 383px apart.

**Yes, the later version feels richer, and the reason is specific.** The 3-revision version tells
the reader something the 0-revision version cannot: that the author returned to their own
conclusion, found it wrong, and said so in public. The prose is identical. The difference is
entirely the evidence of having changed one's mind.

JUDGMENT: this is the concept working, and it is the only mechanism in the system that a
competing portfolio cannot copy by copying the design — because it requires having actually
revised something.

---

## 13. Test 12 — Revision writing

**The most valuable finding of the phase.**

`fixture-revweak.html` is the canonical page with **identical CSS** and three weak entries:
"Published." / "Updated some details." / "Minor edits and clarifications."

OBSERVED: the register **collapses into a changelog.** Not degrades — collapses. It becomes
visually indistinguishable from the "last updated" footer of a documentation site, and the entire
distinctive claim of the design evaporates while nothing about the design has changed.

This confirms 5D-14's central warning by rendering it. But rendering also produced something
5D-14 could not: **a mechanism, and therefore a testable rule.**

MEASURED: the strong entries wrap to 3–5 lines each. The weak entries fit on one line. A
one-line entry sits inside the two-column grid as a **row**, and rows in a dated table are a
changelog. A 3-line entry overflows into a block of prose beside a date, and prose beside a date
is a record.

> **Entry length is itself the signal.** The register reads as reasoning when its entries are
> shaped like paragraphs and as a log when they are shaped like rows.

**Proposed writing standard, derived from measurement rather than taste:**

| | |
|---|---|
| **Floor** | A revision entry runs to at least two full lines at the reading measure — roughly **25 words**. |
| **Content** | It must name *what was previously claimed*, *what changed*, and *why*. All three. |
| **Prohibited** | "Updated", "minor edits", "clarifications", "various fixes" — any entry that describes editing rather than reasoning. |
| **Exception** | None. "Published." is not an exception; it is removed from the register entirely (§12). |

Against the brief's three examples:

- *"Updated some details."* — **BAD.** Rendered; produces the changelog collapse.
- *"Revised the conclusion after reviewing the request flow again."* — **GOOD but under the
  floor.** One line, 10 words. It says what changed but not what was previously believed, and it
  renders as a row.
- *"The original conclusion treated the redirect as an access-control boundary…"* — **STRONG.**
  Three lines, names the prior claim, the correction and the reason. This is the shape the
  register needs.

---

## 14. Tests 13–15 — Responsive

MEASURED at 8 viewports after all fixes:

| Viewport | Body | Column | Median chars | Apparatus h | Movement gap | Doc height | Overflow |
|---|---|---|---|---|---|---|---|
| 320 | 17px | 280px | 36 | 98px | 62px | 3,934px | none |
| 375 | 17px | 335px | 44 | 98px | 62px | 3,471px | none |
| 390 | 17px | 350px | 47 | 98px | 62px | 3,443px | none |
| 430 | 17px | 390px | 52 | 98px | 62px | 3,221px | none |
| 768 | 18px | 486px | 64 | 99px | 65px | 2,967px | none |
| 1024 | 18px | 486px | 64 | 99px | 65px | 2,967px | none |
| 1280 | 19px | 513px | 64 | 99px | 69px | 3,098px | none |
| 1920 | 19px | 513px | 64 | 99px | 69px | 3,098px | none |

Structure is identical at every width. Nothing is removed, reordered or hidden. No horizontal
overflow anywhere including 320px.

### Mobile — the defect found

MEASURED at 375: the stacked apparatus (label above value) was **202px tall**, and the question
paragraph did not begin until y=572. On a 375×812 phone with browser chrome, the reader's first
screen was: banner, nav, back link, title, and **eight lines of metadata** — the first sentence of
the investigation was below the fold.

| | |
|---|---|
| **OLD** | `@media (max-width: 600px) { .apparatus { grid-template-columns: 1fr } }` — labels above values |
| **TEST** | Rendered at 375 and measured the height of every block above the first paragraph |
| **RESULT** | 202px of apparatus; first sentence pushed off the first screen |
| **NEW** | Two columns retained at all widths; gap reduced to `.3rem .9rem`. MEASURED **98px**, and the page 216px shorter overall |

OBSERVED after the change: the first paragraph is fully visible on the first screen at 375, and
the apparatus reads as a compact keyed note rather than as a form.

**Does mobile feel intentionally designed?** OBSERVED: yes. The type steps down to 17px, the
measure is viewport-bound at a comfortable 44 characters, and — a genuine and unexpected result —
**the revision register reads better on mobile than on desktop**, because the single-column layout
gives each entry the full width and they read as entries rather than as table rows.

### Breakpoint defect

MEASURED: at 601px and at 1023px the page rendered at the **desktop** 19px size. Neither the
`max-width: 600px` nor the `min-width: 601px and max-width: 1023px` query matched, because at
dpr 1.25 an integer CSS width evaluates fractionally (600.8, 1023.2) and fell through both.

| | |
|---|---|
| **OLD** | `max-width: 600px` / `min-width: 601px` and `max-width: 1023px` |
| **TEST** | Rendered at the exact boundary values |
| **RESULT** | 601px and 1023px both fell through to desktop type on a tablet-width viewport |
| **NEW** | `max-width: 37.5625em` / `min-width: 37.5625em` and `max-width: 64em` — identical boundary values, so the later rule wins and no width is unhandled. In `em`, so they track the reader's font size |

Tablet (768/834/1024) and desktop (1280/1440/1920) are otherwise unremarkable, which is the
intended result — the column centres, the margins grow, nothing else changes.

Full detail in [`PHASE5D_RESPONSIVE.md`](PHASE5D_RESPONSIVE.md).

---

## 15. Test 16 — Dark mode

OBSERVED at 1280, forced via a stylesheet override rather than relying on the pane's colour
scheme.

MEASURED: every role passes AA in dark, and the two contrast corrections 5D-14 made (C2, C3) are
confirmed exactly — dark muted 5.92:1, dark secondary 7.61:1. **5D-14's arithmetic was right.**

| Criterion | Result |
|---|---|
| Readability | ✅ Holds. Newsreader reversed at 19px is comfortable. |
| Hierarchy | ✅ Holds. The apparatus/prose register split survives intact. |
| Newsreader's character | ⚠️ Mildly weakened. The face flattens reversed and loses some warmth. |
| **Warm identity** | ❌ **Gone.** |

The warm ground `#FBFAF7` is the single strongest visual identity signal the site has — the
"paper, not cream" decision. Dark mode necessarily replaces it. `#191816` is a well-chosen warm
dark, and it still reads as a generic dark reading surface, because dark grounds cannot read as
paper. Making it warmer would not fix this.

**Recommendation: LIGHT ONLY.** JUDGMENT, argued as follows.

For a site whose distinctiveness is explicitly *not* visual, maintaining a second complete colour
system that delivers none of the brand is a poor trade. It doubles the contrast surface — and it
already shipped two marginal-contrast defects that 5D-14 had to catch. Dark mode is the one part
of the design system with a real maintenance cost and no brand return.

**The counter-argument, stated fairly:** readers who set a system dark preference will get a
bright page, and some will dislike that. This is a genuine cost and the recommendation is a
judgment call, not a measured failure. Dark mode does not *fail* any test. It simply does not
earn its keep.

**This decision is Het's, and it should be made explicitly rather than by default.**

---

## 16. Test 17 — Genericity

**The design system carries no distinctiveness whatsoever.** OBSERVED, comparing the two pages
rendered under identical CSS.

Full analysis in [`PHASE5D_GENERICITY_TEST.md`](PHASE5D_GENERICITY_TEST.md). The summary:
the "Alex Sharma" page and the Het page are visually indistinguishable. Same ground, same face,
same apparatus, same movement rhythm. Neither was redesigned.

What actually differentiates them, all of it content:

1. **Decisions with reasons** vs. activities in sequence. *"My first instinct was to read the
   configuration, and I deliberately did not"* has no counterpart in the generic page, which runs
   "I set up… I then ran… I documented…".
2. **Uncertainty with teeth.** Het's is ten lines, names two competing explanations, and says why
   the distinction changes the fix. Alex's is one line about a situation never encountered.
3. **The revision register.** Present vs. absent.
4. **Self-correction inside the prose.** *"the order I would choose is not evidence of the order
   that exists."*

**The four-movement structure is present in both and reads identically in both.** The structure is
a container, not a differentiator. This confirms the brief's own design insight and it is worth
stating without softening:

> The design system is a neutral vessel. It cannot fail gracefully if the writing is generic —
> it will present generic content just as handsomely as it presents good content.

The project's exit condition is therefore a **writing standard**, not a design standard.

---

## 17. Test 18 — Five-second impression

Recorded before reading, on the rendered 1280 page.

**Immediate classification: editorial publication**, with *personal working record* second.

Not: generic portfolio, not cybersecurity consultancy, not academic paper, not blog, not
documentation. The absence of cards, grids, badges and hero blocks rules out portfolio
instantly; the warm ground and serif rule out documentation; the single-column prose with a small
grey byline reads as a considered publication.

**After reading fully, the interpretation changes to: personal working record.** The shift is
caused by three things, in order of force: the uncertainty paragraph, the revision register, and
the first-person reasoning moves. None of them is visible in five seconds.

JUDGMENT: this is a real finding about the site's economics. **The design buys credibility in five
seconds and the content earns distinctiveness in five minutes.** For the audiences that matter
(hiring managers, GRC readers) that ordering is defensible — they will not commit five minutes to
something that looks amateur in five. But it means the homepage in 5E carries a burden this page
does not: it must get *some* of the five-minute signal into the five-second window, and the index
row is the only place to do it.

---

## 18. Test 20 — Accessibility

MEASURED. Full detail in [`PHASE5D_ACCESSIBILITY.md`](PHASE5D_ACCESSIBILITY.md).

**All 14 text roles pass WCAG AA in both schemes**, computed from rendered colours rather than
from hex pairs on paper — and the computed figures match 5D-14's hand arithmetic exactly.

One serious defect, found only by rendering:

### Text resize — the worst defect of the phase

MEASURED with the browser root font size at 200%, a common accessibility setting:

| Root | Body text | Column | Median chars |
|---|---|---|---|
| 100% (16px) | 19px | 513px | 64 |
| 200% (32px) | **19px — unchanged** | **1,026px** | **~128** |

The type was specified in `px` while the spacing and the column were specified in `rem`. So a
reader who asked for larger text got **the same size text on a column of double the width.** The
setting made the page actively worse than ignoring it would have.

| | |
|---|---|
| **OLD** | `body { font-size: 19px }` and 24 further absolute `px` type sizes, with `--base` and `--box` in `rem` |
| **TEST** | Rendered at root 16px / 24px / 32px and counted characters |
| **RESULT** | Text did not scale; the measure doubled to ~128 characters |
| **NEW** | Every type size converted to `rem`; breakpoints converted to `em` |

MEASURED after: at 200% the body is 38px, the apparatus 30px, the column 1,026px, and the measure
holds at **62 characters**. Everything scales together. No horizontal overflow. Default rendering
is byte-identical to before.

### Other results

| Check | Result |
|---|---|
| Keyboard | ✅ 10 focusable elements, logical order, skip link resolves to `#main` |
| Focus visible | ✅ OBSERVED — 2px accent outline at 3px offset, 8.67:1 against ground, well above the 3:1 required |
| Semantic structure | ✅ `lang`, one `h1`, `header`/`nav[aria-label]`/`main`/`article`/`footer`, 3 `section[aria-labelledby]` |
| Link visibility | ✅ Underlined, not colour-only |
| Reduced motion | ✅ Moot — zero transitions, zero animations, zero transforms. Nothing to reduce |
| Touch targets | ⚠️ **Fixed.** MEASURED 18px on artifact/related links, under the WCAG 2.2 24px minimum. Inline padding added; now 26px |

One considered trade-off, recorded rather than fixed: the region labels ("Artifacts", "Revisions",
"Related") are `<p>` elements referenced by `aria-labelledby`, not headings. They therefore do not
appear in the heading outline, though the sections are exposed as named landmarks. This is
deliberate — they are apparatus, not reasoning — but it means heading-navigation on a 3,098px page
goes `h1` → nothing. **Worth revisiting in 5E when the index and About pages define the site's
overall heading model.**

---

## 19. Test 21 — Performance

MEASURED from `PerformanceResourceTiming` on a real network fetch. Full detail in
[`PHASE5D_PERFORMANCE.md`](PHASE5D_PERFORMANCE.md).

| Asset | Bytes |
|---|---|
| HTML | 5,744 |
| CSS | 12,599 |
| Google Fonts CSS | 649 |
| Newsreader roman (variable, latin) | 132,000 |
| Newsreader italic (latin) | 63,292 |
| Public Sans (latin) | 26,832 |
| **Total** | **~241 KB** |
| JavaScript | **0** |
| Images / SVG | **0** |
| External requests | **4** |

**Fonts are 90% of the page.** The document itself is 18 KB uncompressed. The "extremely
lightweight" goal is met by the markup and missed by the type system.

### Layout shift — measured, not estimated

`display: swap` means the fallback is what the reader sees first. MEASURED at 1280 by rendering
the page in each fallback and comparing geometry against the webfont:

| Fallback | h1 height | Cumulative shift |
|---|---|---|
| **Georgia** (was first in the stack) | 82px — **wraps to two lines** | **135px** |
| **Times New Roman** | 41px — one line | **0px** |

| | |
|---|---|
| **OLD** | `--serif: "Newsreader", Georgia, "Times New Roman", serif` |
| **TEST** | Rendered the page in each fallback and measured element positions against the webfont |
| **RESULT** | Georgia shifts the page 135px and wraps the h1; Times is a near-exact metric match |
| **NEW** | `--serif: "Newsreader", "Times New Roman", Times, serif` |

Newsreader's proportions are close to Times and not to Georgia. Liberation Serif — the usual Linux
`serif` — is metric-compatible with Times, so the whole chain now agrees. This is a one-word
change that removes a visible reflow on first paint.

**Recommended for 5E, not applied here:** self-host the fonts, subset to the actual character set,
and add `size-adjust`/`ascent-override` to the `@font-face` rules. INFERRED this would cut ~217 KB
to roughly 40–60 KB, remove the third-party request to `fonts.gstatic.com`, and reduce the
remaining swap shift to zero. Not applied because it is a build-and-hosting decision.

---

## 20. Anti-genericity audit

MEASURED by pattern search across the stylesheet and all nine fixtures.

| Pattern | Count |
|---|---|
| cards · pills · badges · tags | **0** |
| skill grids · project-card grids (`repeat()`) | **0** |
| gradients · box-shadows · backdrop-filter · opacity | **0** |
| hero · CTA blocks | **0** |
| icons · SVG · images | **0** |
| animation · transition · transform · keyframes | **0** |
| decorative timeline | **0** |
| `text-transform: uppercase` · wide tracking | **0** |
| "About Me" · "My Skills" · "My Projects" | **0** |
| fake metrics · percentages · star ratings | **0** |
| logo walls | **0** |

**Nothing accidental was introduced.** Two `border-radius` declarations exist (1px on the focus
ring, 2px on `code`); both are functional rather than decorative and neither was added during this
phase.

The only rule on the page is the one above the footer, as specified. Containers: two.

---

## 21. Changes made in this session

All are in `prototype/style.css`. Each carries an inline comment stating what was measured.

| # | Change | Severity | Evidence |
|---|---|---|---|
| **V-1** | `--measure: 37rem` → `27em` | **HIGH** | MEASURED 74/80 chars vs 62–66 target |
| **V-2** | Breakpoints → `em`, boundaries deduplicated | MEDIUM | MEASURED fall-through at 601px and 1023px |
| **V-3** | One `--box` for header/article/footer; `--content` removed | MEDIUM | MEASURED three different left edges |
| **V-4** | Article bottom padding removed | MEDIUM | MEASURED 250px dead band; worst on the short page |
| **V-5** | Mobile apparatus keeps two columns | MEDIUM | MEASURED 202px → 98px; first sentence back above the fold |
| **V-6** | `h2` gap 2.2× → 1.5× | **HIGH** | OBSERVED headings out-competing movements at length |
| **V-7** | All type `px` → `rem` | **HIGH** | MEASURED text not scaling at 200%; measure doubling to ~128 chars |
| **V-8** | Tap padding on list links | LOW | MEASURED 18px vs WCAG 2.2 24px minimum |
| **V-9** | Serif fallback: Times before Georgia | LOW | MEASURED 135px font-swap reflow → 0px |

Fixtures created (test artefacts only, not production content):
`fixture-long.html` · `fixture-rev0.html` · `fixture-rev1.html` · `fixture-rev3.html` ·
`fixture-rev6.html` · `fixture-revweak.html`

Recommended but **not applied**, because they change the content model or the build rather than
the stylesheet:

- Remove "Published." from the revision register; move publication date to the head apparatus (§12)
- Decide dark mode explicitly — recommendation is light only (§15)
- Self-host and subset the fonts (§19)
- Reconsider whether `Started` and `Domain` earn their apparatus slots (§5)

---

## 22. Decisions that survived

| Decision | Confirmed by |
|---|---|
| Question as first paragraph, no special type | OBSERVED — reads as prose, not as a hero |
| Uncertainty as undifferentiated full-strength prose | OBSERVED — the phase's strongest result |
| Four movements signalled by spacing alone, no labels | OBSERVED at 545 words; holds at 1,755 after V-6 |
| Model C′ — head / inline / foot apparatus | Structure works; head is a byline as 5B predicted |
| Absence renders nothing | MEASURED — no markup at all for empty regions |
| Revision register: date + statement, oldest first, no colour | OBSERVED — reads as D when written well |
| Warm ground reads as paper, not cream | OBSERVED at `#FBFAF7` |
| Newsreader is not academic | OBSERVED — the main 5C risk did not materialise |
| Two-register type system (serif reasoning / sans apparatus) | OBSERVED — unmistakable at every width |
| Restrained accent | OBSERVED — links are the only colour; 8.67:1 |
| Zero JavaScript, zero images | MEASURED |
| Light-mode contrast | MEASURED — all roles AA, most AAA |
| 5D-14's dark contrast corrections (C2, C3) | MEASURED — exactly right |
| Structure identical at every breakpoint | MEASURED at 8 viewports |
| No generic portfolio patterns | MEASURED — zero hits across 11 categories |

---

## 23. Decisions that should change

| Decision | Was | Should be | Status |
|---|---|---|---|
| Measure unit | `rem` | `em` of the reading font | ✅ applied |
| Type sizing unit | `px` | `rem` | ✅ applied |
| `h2` spacing | equal to a movement | subordinate to a movement | ✅ applied |
| Nav/footer width (5B "content width", 46rem) | wider than prose | one shared left edge | ✅ applied — **5B change, see below** |
| 5B spacing bands (NORMAL 1.0×, OPEN 2.5×, MAJOR 4.5×) | spec | 0.85× / 2.2× / 4.0× as implemented | ⚠️ **spec correction needed** |
| Publication date | first revision entry | head apparatus | ❌ recommended, not applied |
| Dark mode | supported | light only | ❌ recommended, Het's call |
| Font delivery | Google Fonts | self-hosted, subset | ❌ recommended for 5E |

**Two of these modify Phase 5B decisions and must not pass silently:**

1. **Navigation and footer now align to the text column, not to a wider content region.** 5B §"Grid
   and alignment" says "One left edge… all aligned"; 5B §"Other surfaces" says navigation is
   "aligned to content width" (46rem). With a 27em measure those two instructions conflict, and
   MEASURED they produced three left edges on one page. Principle #1 won. **Open question for 5E:**
   the index page may genuinely need a wider region for title-plus-metadata rows, in which case the
   relationship between nav width and index width has to be settled deliberately.

2. **The spacing bands should be rewritten to the implemented values.** The prototype has been
   rendering at the floor of every band, and outside the band for NORMAL, since it was built. It
   works. The spec is what is wrong.

---

## 24. Remaining uncertainties

| # | Open question | Why it is still open |
|---|---|---|
| 1 | **Does the mono register work?** | No fixture uses `code` or `pre`. MEASURED zero instances. The rules are untested — needs a fixture with a config excerpt and an inline value |
| 2 | **Does a prose link read correctly inside reasoning?** | No fixture has an inline link in a paragraph. The rule exists; the rendering is unverified |
| 3 | **Does the register hold past ten revisions?** | Tested to six. The timeline-shape pressure was already visible there |
| 4 | **Will the writing standard be met in practice?** | The unfalsifiable one. §13 gives a measurable floor, but only real entries over real months will settle it |
| 5 | **Does the apparatus justify itself at all?** | It is a byline. Two of four fields do real work. Whether that is enough is a content decision |
| 6 | **Do the aesthetic judgments hold at full resolution?** | The pane rendered at ~276 CSS px. Numbers are exact; taste judgments were made from reduced-scale crops |
| 7 | **Screen reader behaviour** | No assistive technology was available. Semantics are correct by inspection; the experience is unverified |
| 8 | **Ink blue vs oxblood accent** | Never compared. Only ink blue was ever rendered |

---

## 25. Confidence

**MEDIUM-HIGH on the design system. HIGH on the measurements.**

Up from LOW-MEDIUM. The reason for the upgrade is not that the design was found to be good — it is
that the phase found **nine real defects, three of them serious**, and three of those three could
only ever have been found by rendering:

- the measure was 15% too wide and getting worse at tablet;
- the heading hierarchy inverted at length, dissolving the load-bearing movement structure;
- the page actively punished readers who increase their font size.

None of these was visible in the source. All were invisible to 5D-14's careful, correct,
non-visual analysis.

**Why not HIGH:**

1. The apparatus is confirmed ordinary, and no amount of design will fix that — the concept's
   distinctiveness now rests entirely on content behaviour over the next twelve months.
2. The genericity test is unambiguous that the design carries none of the differentiation. That
   was always the theory; seeing it is different.
3. Two components (mono, prose links) have never been rendered.
4. Aesthetic judgments were made at reduced scale.

**The system is sound enough to build on.** The risk has moved decisively out of the design and
into the writing, which is where the brief always said it lived — and §13 now gives that risk a
measurable threshold instead of an aspiration.
