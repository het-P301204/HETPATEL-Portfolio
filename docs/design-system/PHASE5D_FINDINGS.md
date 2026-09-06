# Phase 5D — Findings

**Date:** 2026-08-14

---

## Headline

**The prototype was built. It was never rendered.**

Browser tooling was blocked throughout by the safety classifier that has intercepted it earlier in this project. Every visual question 5D existed to answer remains open.

**What 5D did produce:** a complete, correct, testable prototype, and **four real defects found by computation and inspection** — two of them contrast failures that would have shipped.

---

## Decisions that CHANGED

### C1 — Measure specification clarified and value revised
**Was (5C):** `max-width: 38rem`, target 62–66 characters.
**Now:** `--measure: 37rem` naming the **text column**, with padding outside it.
**Why:** with `box-sizing: border-box`, 38rem *including* 1.25rem padding either side yields a 35.5rem text column — a 40px gap between spec intent and spec text. Character estimates put 568px at 57–65 chars and 608px at 61–70; neither is clearly correct. 37rem is the midpoint, inside 5C's own 36–41rem band.
**Status: PROVISIONAL.** Must be settled by counting characters in a browser.
**Spec change required:** all future width specifications must state whether they refer to the text column or the padded box.

### C2 — Dark muted raised
**Was:** `#8B8478`, claimed ~5.1:1. **Actual: 4.79:1** — 0.29 above the AA floor at 13px.
**Now:** `#9C9488` → **5.92:1**.
**Why:** inadequate headroom for small text. Would have shipped as a marginal AA pass vulnerable to any subsequent ground adjustment.

### C3 — Dark secondary raised
**Was:** `#A9A296` → **7.01:1**, sitting exactly on the AAA boundary.
**Now:** `#B0A99C` → **7.61:1**.

### C4 — Contrast values in 5C corrected
Every dark-mode figure in the 5C spec was overstated (by 0.11–0.31). Corrected figures are in `../prototypes/PHASE5D_ACCESSIBILITY.md`.
**Process lesson:** 5C recorded hand-calculated ratios as fact. They should have been labelled estimates.

---

## Decisions that SURVIVED inspection

| Decision | Status |
|---|---|
| Model C′ — head / inline / foot apparatus | ✅ Implemented cleanly; zero-revision case renders nothing |
| Two content types, one primary unit | ✅ |
| Question as first paragraph, no special type | ✅ Implemented |
| Uncertainty as undifferentiated prose | ✅ Implemented |
| Status as a lowercase colourless word | ✅ |
| Revisions: date + statement, oldest first, no colour | ✅ |
| Absence renders nothing | ✅ **Verified** — the short page has no artifact/revision/related markup at all |
| Two containers only | ✅ |
| One rule (above footer) | ✅ |
| No accent on titles/status/revisions | ✅ |
| Semantic structure, `<dl>` for both registers | ✅ |
| Zero JavaScript | ✅ |
| Light contrast (all roles) | ✅ **Computed and passing** |
| Structure identical at every breakpoint | ✅ Implemented |

---

## Decisions that could NOT be tested

**All of them are visual, and all are the ones that mattered most:**

1. Does Newsreader read *bookish* (acceptable) or *academic* (failure)?
2. Actual characters per line.
3. Are the four movements perceptible without headings? *(The load-bearing structural claim.)*
4. Does the register distinction survive mobile compression?
5. Does the warm ground read as paper or as cream?
6. Does the revision register read as a record or a changelog?
7. Does a 150-word page look complete or fragmentary?
8. Does the uncertainty statement get skipped?
9. Ink blue vs oxblood accent.
10. Does dark mode preserve the identity, or should it be dropped?

---

## Two prototype defects to fix before production

**F5 — `!important` on movement spacing.** A prototype expedient. Production must restructure the cascade so the movement gap wins on specificity, not by force.

**F6 — `oldstyle-nums` on body.** An undocumented typographic choice introduced during build. Either add it to the spec deliberately after a visual check, or remove it.

---

## The finding worth carrying forward

**The revision register cannot be evaluated apart from its writing.**

Reading the three prototype entries, everything distinctive is in the language — *"I had seen it twice and generalised from that, which is not enough to support the word."* The typography is deliberately unremarkable: small, grey, sans, chronological, colourless.

**That is the design working as specified, and it is also the concept's exposure.** If Het's real entries say "updated content", the register is visually indistinguishable from a changelog and worth nothing.

This sharpens the standing exit condition. It is not enough that revisions *accumulate* — **they have to be written like the prototype entries are written.** A register full of trivial edits fails the concept just as completely as an empty one.

---

## Confidence

**LOW-MEDIUM on the design. HIGH on the prototype's correctness as a test artefact.**

The system is internally coherent, semantically sound, and now contrast-clean in both schemes. But 5D was commissioned to find visual failures, and it found none — because it could not look. **Its central deliverable is unfulfilled.**

**Recommendation: re-run 5D in a session with working browser tooling before authorising 5E.** The prototype is ready; the test matrix is written; the work is a few hours of rendering and counting. Building the homepage on an unvalidated type and spacing system would compound the risk rather than resolve it.

---
---

# Phase 5D — Findings, round 2 (RENDERED)

**Date:** 2026-08-15

Everything above stands as the record of the 2026-08-14 round. **Its headline — "The prototype was
built. It was never rendered." — is now resolved.** Nothing above is erased; the sections below say
which of its conclusions survived contact with a browser and which did not.

Full record: [`../prototypes/PHASE5D_VALIDATION.md`](../prototypes/PHASE5D_VALIDATION.md).

---

## Headline

**The prototype was rendered. Nine defects were found, three of them serious, and all three of the
serious ones were invisible in the source.**

| | 2026-08-14 | 2026-08-15 |
|---|---|---|
| Defects found | 6 | 9 |
| Found by arithmetic | 6 | 0 |
| Found only by rendering | 0 | **3** |
| Design confidence | LOW-MEDIUM | **MEDIUM-HIGH** |

The three that only rendering could find:

1. **The measure was 15% too wide** — median 74 characters against a 62–66 target, and *worse* at
   tablet (80) than at desktop, because the breakpoint changed the font size but not the column.
2. **The heading hierarchy inverted at length** — `h2` shared the movement gap, so on a
   1,755-word page the headings out-competed the four movements and the load-bearing structure
   dissolved.
3. **The page punished readers who enlarge their text** — type in `px`, layout in `rem`, so at a
   200% browser font setting the column doubled to 1,026px while the text stayed 19px: roughly 128
   characters per line.

---

## The 2026-08-14 round is vindicated on its own terms

Worth stating plainly, because it bears on how much to trust the earlier documents.

**Every contrast figure computed by hand on 2026-08-14 was independently recomputed on 2026-08-15
from the rendered DOM, and every one matched.** Dark muted 5.92:1, dark secondary 7.61:1 — the
corrections C2 and C3 were exactly right, and both would otherwise have shipped as marginal passes.

**5B's F2 prediction was right.** It warned the head apparatus would read as an ordinary byline at
launch. Rendered, it does.

**5D-14's central warning about the revision register was right,** and rendering sharpened it into
a measurable rule (see below).

The earlier round found everything that arithmetic can find and was correct in all of it. What it
could not do was see relationships between rendered things — characters against a column, a heading
against a movement, type against a reader's setting. That is the whole gap, and it was exactly the
gap it said it had.

---

## Decisions that CHANGED (round 2)

### C5 — Measure re-specified in `em` of the reading font
**Was (5D-14, C1):** `--measure: 37rem`, PROVISIONAL pending a character count.
**Now:** `--measure: 27em`.
**Why:** MEASURED 74 median characters at desktop, 80 at tablet. The unit was the deeper error — a
`rem` measure is pinned to the root font size while the thing it must track is the reading font, so
it is correct at exactly one body size. MEASURED after: **64 median / 67 p90 at every viewport from
768 to 1920, across two body sizes, with no per-breakpoint override.**
**Status: SETTLED.** C1's PROVISIONAL flag is discharged.
**Spec change:** width specifications must state not only *what* they measure (C1) but **relative to
what**.

### C6 — All type sizing moved from `px` to `rem`; breakpoints to `em`
**Was:** `body { font-size: 19px }` and 24 further absolute sizes.
**Now:** every type size in `rem`; both breakpoints in `em`.
**Why:** MEASURED — at a 200% root font size the text did not change at all while the column
doubled. Spacing was already in `rem`, so the two halves of the system responded differently to the
same setting. 5B promises the rhythm scales "with user font-size preferences"; the implementation
defeated it.

### C7 — One shared left edge; `--content` replaced by `--box`
**Was:** navigation and footer at 5B's content width (46rem), prose at the measure.
**Now:** a single `--box` in `rem`, derived from the measure, used by header, article and footer.
**Why:** MEASURED three different left edges at 1280 (347 / 384 / 417px), violating 5B's first
alignment principle. **This modifies a 5B decision** — 5B's "nav aligned to content width" and its
"one left edge" principle conflict once the measure narrows. Principle #1 won.
**Open for 5E:** the index page may genuinely need a wider region; the relationship between nav
width and index width must then be settled deliberately rather than inherited.

### C8 — `h2` subordinated to the movement gap
**Was:** `h2 { margin-top: var(--open) }` — 2.2×, equal to a movement boundary.
**Now:** `calc(var(--base) * 1.5)`.
**Why:** OBSERVED on the 1,755-word fixture — headings became the strongest structural signal and
the movements stopped being the spine.
**Standing constraint, generalised:** the movement mechanism is a spacing ratio and nothing else.
**Every future component must be checked against the movement gap before it ships.**

### C9 — Spacing bands: the spec should be corrected to the implementation
**Was (5B):** NORMAL 1.0× · OPEN 2.5× (band 2.2–3.0) · MAJOR 4.5× (band 4–6).
**Implemented all along:** 0.85× · 2.2× · 4.0× — the floor of every band, and outside the band for
NORMAL, which 5B gives no tolerance.
**Rendered verdict:** it works. MEASURED movement:paragraph = **2.59:1** against 5B's 2.2:1 binding
constraint. OBSERVED not too dense, not too loose, not fragmented, not monotonous.
**Recommendation: rewrite the 5B bands to the implemented values.** Reaching 2.5×/1.0× would give
the same ratio at a larger absolute scale, making an already tall page taller for no legibility
gain. **The spec is what is wrong, not the prototype** — but it was a silent deviation and is now
recorded as a deliberate one.

### C10 — Serif fallback reordered
**Was:** `"Newsreader", Georgia, "Times New Roman", serif`.
**Now:** `"Newsreader", "Times New Roman", Times, serif`.
**Why:** MEASURED font-swap reflow — Georgia shifts the page **135px** and wraps the h1 onto a
second line; Times is a **0px** metric match.

### C11 — Mobile apparatus keeps two columns
**Was:** labels stacked above values at ≤600px.
**Now:** two columns at every width.
**Why:** MEASURED 202px of apparatus at 375, pushing the investigation's first sentence below the
fold. Now 98px.

---

## Decisions that SURVIVED rendering

| Decision | Confirmed by |
|---|---|
| Question as first paragraph, no special type | OBSERVED — reads as prose, not hero, not pull quote |
| **Uncertainty as undifferentiated full-strength prose** | **OBSERVED — the strongest result in the phase** |
| Four movements signalled by spacing alone, no labels | OBSERVED at 545 words; holds at 1,755 after C8 |
| Model C′ — head / inline / foot | Structure works; head is a byline, as 5B predicted |
| Absence renders nothing | MEASURED — no markup at all for empty regions |
| Revisions: date + statement, oldest first, no colour | OBSERVED — reads as a record when written well |
| Warm ground reads as paper, not cream | OBSERVED at `#FBFAF7` |
| **Newsreader is not academic** | **OBSERVED — the main 5C risk did not materialise** |
| Two-register type system | OBSERVED — unmistakable at every width including 375px |
| Restrained accent | OBSERVED — links are the only colour on the page |
| Zero JavaScript, zero images | MEASURED |
| Light contrast, all roles | MEASURED — all AA, most AAA |
| Dark contrast corrections C2 and C3 | MEASURED — exactly right |
| Structure identical at every breakpoint | MEASURED at 10 viewports |
| No generic-portfolio patterns | MEASURED — zero hits across 11 categories |

---

## The 5D-14 open questions, answered

| # | Question | Answer |
|---|---|---|
| 1 | Newsreader bookish or academic? | **Neither — warm and literary, not academic.** Drifts slightly toward *editorial publication* rather than *personal working record*; that gap is closed by voice, not by type. **Keep it.** |
| 2 | Actual characters per line? | **74 before, 64 after.** Target was 62–66 |
| 3 | Are the four movements perceptible without headings? | **Yes at 545 words. No at 1,755 words until C8 fixed the heading hierarchy** |
| 4 | Does the register distinction survive mobile? | **Yes — unmistakable at 375px** |
| 5 | Does the warm ground read as paper or cream? | **Paper** |
| 6 | Record or changelog? | **Record at 3 revisions. Changelog at 1, and changelog with weak writing.** See below |
| 7 | Does a 150-word page look complete or fragmentary? | **Complete** — once the 250px dead band before the footer was removed |
| 8 | Does the uncertainty statement get skipped? | **No.** It is the longest paragraph on the page and reads as the most interesting part |
| 9 | Ink blue vs oxblood? | **Still unanswered.** Only ink blue was ever rendered |
| 10 | Keep dark mode? | **Recommend light only.** It passes every test and delivers none of the brand — see below |

---

## The finding worth carrying forward, now with a threshold

5D-14 concluded: *"The revision register cannot be evaluated apart from its writing."* Correct — and
rendering supplied the mechanism it could not.

`fixture-revweak.html` is the canonical page with **identical CSS** and three weak entries. OBSERVED:
the register does not degrade, it **collapses into a changelog**, indistinguishable from a
documentation site's "last updated" block.

MEASURED, the reason: strong entries wrap to **3–5 lines**; weak entries fit on **one**. A one-line
entry sits in the two-column grid as a **row**, and rows beside dates are a changelog. A three-line
entry becomes a block of prose beside a date, and prose beside a date is a record.

> **Entry length is itself the signal.**

**Writing standard, derived from measurement rather than taste:**

| | |
|---|---|
| Floor | At least two full lines at the reading measure — roughly **25 words** |
| Content | Must name *what was previously claimed*, *what changed*, and *why*. All three |
| Prohibited | "Updated", "minor edits", "clarifications" — anything describing editing rather than reasoning |
| Exception | None. **"Published." is removed from the register entirely** |

That last point is a new finding. At n=1 the page renders a MAJOR gap, a "Revisions" label, and the
single word "Published." — a region of pure ceremony, and the worst-looking state in the system.
"Published." is a creation event in a register meant for changed reasoning. **Recommendation: move
the publication date to the head apparatus.** The register then renders nothing until reasoning has
actually changed — which is the concept — and the apparatus gains a second field that earns its
place.

---

## Two conclusions the project should absorb

### 1. The design system is a neutral vessel

The genericity test is unambiguous. OBSERVED: the "Alex Sharma" page and the Het page, under
identical CSS, are **visually indistinguishable**. Same ground, same face, same apparatus, same
movement rhythm. The four-movement structure works just as well for "I built a lab and ran three
scanners" as for real reasoning.

The apparatus does not differentiate. The structure does not differentiate. The type, colour and
spacing do not differentiate. **Only the writing differentiates** — decisions with reasons,
uncertainty with consequences, and revisions that record changed conclusions.

**The exit condition for this project is a writing standard, not a design standard.** The design is
now validated as competent, accessible, fast and free of generic patterns, and none of that will
distinguish Het from a well-templated peer.

### 2. Dark mode should probably go

MEASURED: it passes every contrast check in both schemes. OBSERVED: readability and hierarchy hold;
Newsreader flattens slightly; **the warm identity disappears entirely**, because a dark ground
cannot read as paper. `#191816` is a well-chosen warm dark and it still reads as a generic dark
reading surface.

JUDGMENT: for a site whose distinctiveness is explicitly *not* visual, a second complete colour
system that delivers none of the brand is a poor trade — and it is the one part of the system with a
real maintenance cost, having already shipped two marginal-contrast defects that C2/C3 had to catch.

**Counter-argument, stated fairly:** readers with a system dark preference will get a bright page,
and some will dislike it. Dark mode fails no test. It simply does not earn its keep. **This is Het's
call and should be made explicitly rather than by default.**

---

## Confidence

**MEDIUM-HIGH on the design system. HIGH on the measurements.**

Up from LOW-MEDIUM, because the phase did what it was commissioned to do: it looked, and it found
real failures — including three that no amount of source review would have surfaced.

**Not HIGH, for four reasons:**

1. The apparatus is confirmed ordinary and no design will fix that. The concept's distinctiveness
   now rests entirely on content behaviour over twelve months — 5B's assumption A3, still untested.
2. The genericity result is unambiguous that the design carries none of the differentiation.
3. Two components have **never been rendered**: the monospace register (no fixture uses `code` or
   `pre`) and inline links inside prose. Neither should be signed off until they are.
4. Aesthetic judgments were made from crops at 0.6–0.9 device px per CSS px, because the preview
   pane renders at roughly 276 CSS px. The numbers are exact; matters of taste deserve a look on a
   full-size display.

**The system is sound enough to build on.** The risk has moved decisively out of the design and into
the writing — which is where the brief always said it lived, and which now has a measurable
threshold instead of an aspiration.

**Recommendation: 5E is unblocked**, subject to the four content-model decisions listed in
[`../prototypes/PHASE5D_VALIDATION.md`](../prototypes/PHASE5D_VALIDATION.md) §21 being settled
first. **Explicit authorisation is still required before 5E begins.**
