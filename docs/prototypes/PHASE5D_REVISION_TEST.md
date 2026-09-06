# Phase 5D — Revision Register Test

**Date:** 2026-08-14 · **Status: PARTIALLY BUILT, NOT VALIDATED.**

The revision register is the project's most distinctive element. It is also the one that most needed rendering, and rendering was unavailable.

---

## States built

| State | File | Built |
|---|---|---|
| **0 revisions** | `short-no-revisions.html` | ✅ — the section is **absent from the markup entirely** |
| 1 revision | — | ❌ Not built |
| **3 revisions** | `investigation.html` | ✅ |
| 6 revisions | — | ❌ Not built |

**The zero-revision case is the important one**, and it is built. There is no heading, no empty list, no reserved space — the markup simply does not contain the section. A reader cannot tell that a register was ever expected.

**1 and 6 were not built** because without rendering there was nothing to learn from them that inspection of the 3-revision case does not already give. A browser session should add them.

---

## The 3-revision content, as written

```
2026-03-04   Published.

2026-05-21   The original conclusion described this as an access-control
             failure. Re-reading the request sequence, the matcher is never
             reached for rewritten paths at all — so it is a routing failure
             that happens to have an access-control consequence. Changed the
             conclusion.

2026-07-09   Removed a claim that this pattern was common. I had seen it twice
             and generalised from that, which is not enough to support the word.
```

**These are written to the "best" register from the 5C spec** — each states what changed in understanding and why. Neither is a content edit.

The second entry is the one that carries the concept: it records a **reclassification**, not a correction of fact. The third records **retracting an overreach**, which is arguably the more unusual thing to publish.

---

## Implementation

| Property | As built |
|---|---|
| Structure | `<dl>` — date as `<dt>`, statement as `<dd>` |
| Family | Public Sans (apparatus register) |
| Date | 13.5px, muted, `tabular-nums`, ISO format |
| Statement | 15px, secondary, line-height 1.5 |
| Order | Chronological, oldest first |
| Colour | **None** — no green/red/orange, no marker, no accent |
| Container | None |
| Rule | None |
| Label | "Revisions" at 13.5px muted |
| Spacing above | MAJOR (~125px) |
| Between entries | 0.55rem |

**The publication entry is included** in the 3-revision case, providing the baseline the revisions are measured against. 5C recommended *not* showing the register when only a publication entry exists — the short page confirms that by omitting the section entirely.

---

## What must be tested

| # | Question | Why it matters |
|---|---|---|
| **V1** | Does it read as **a person recording a change of mind**, or as a changelog? | **The whole concept turns on this** |
| V2 | At 1 revision, does it look meaningful or like an isolated line? | Determines whether a threshold is needed |
| V3 | At 6, does it become dense or distracting? | Determines whether collapsing is ever needed |
| V4 | Is the tabular date column genuinely aligned in Public Sans? | Alignment is the only visual structure |
| V5 | Does it read as part of the document, or as an attached widget? | The MAJOR gap may be too large |
| V6 | At 375px with date above statement, are pairs still obvious? | — |
| V7 | Does the absence of the section on the short page read as clean? | Confirms VP-7 |

**V1 cannot be answered by inspection.** It is a judgment about tone that only exists once the type is on screen.

---

## The finding I can state without rendering

**The content is doing more work than the design.**

Reading the three entries as text, what makes them distinctive is entirely in the writing — "I had seen it twice and generalised from that" is the sentence that carries the concept. The typography is deliberately unremarkable: sans, small, grey, chronological.

**That is the design working as intended** (the 5C policy is explicitly that colour and decoration play no role), **and it is also the risk.** If Het's real revision entries say "updated content", the register will be visually indistinguishable from a changelog and will have no value at all.

**The register cannot be evaluated separately from the writing that fills it.** That is a real limitation of testing it with hypothetical content, and it should be re-tested with genuine entries before launch.

---
---

# VALIDATED — 2026-08-15

**The status line at the top is superseded. All four states were built and rendered.**
Method and evidence labelling: [`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.

## States rendered

| State | Fixture | Register height | Page height |
|---|---|---|---|
| 0 revisions | `fixture-rev0.html` | **absent from markup** | 2,715px |
| 1 revision | `fixture-rev1.html` | 59px | 2,900px |
| 3 revisions | `fixture-rev3.html` (canonical) | 302px | 3,098px |
| 6 revisions | `fixture-rev6.html` | 643px | 3,505px |
| 3 weak entries | `fixture-revweak.html` | 106px | 2,946px |

All are the **same investigation with the same prose**, so the only variable is the register.
MEASURED, confirmed absent across every state: no colour coding, no timeline graphic, no icons,
no badges, no animation.

## Classification

| State | Reads as | |
|---|---|---|
| 0 | *(nothing renders)* | ✅ correct |
| 1 | **A — changelog** | ❌ defect |
| 3 | **D — genuine record of changed reasoning** | ✅ **target achieved** |
| 6 | **D**, with the shape drifting toward a timeline | ⚠️ watch |
| 3 weak | **A — changelog** | ❌ see RV-2 |

## RV-1 — The one-revision state is ceremony

**Severity: MEDIUM.** OBSERVED at 1280.

At n=1 the page renders a 125px MAJOR gap, a region label reading "Revisions", and one line:

> 2026-03-04 — Published.

A labelled region containing no information. It reads as an empty state that forgot to hide
itself, and it is the worst-looking state in the system.

**The cause is the content model, not the CSS.** "Published." is a creation event sitting in a
register whose entire purpose is changed reasoning. It is also, at n=3 and n=6, the one entry that
does not belong — five substantial entries and one stub.

| | |
|---|---|
| **OLD** | Every published investigation opens its register with a "Published." entry, so the region renders from day one |
| **TEST** | Rendered n = 0, 1, 3, 6 |
| **RESULT** | n=1 is ceremony; at n=3 and n=6 "Published." is the only non-reasoning entry |
| **NEW (recommended, not applied)** | Move the publication date to the head apparatus. The register then holds **only** changed reasoning and renders nothing until the first real revision exists |

Recommended rather than applied because it changes the content model — a UX decision, not a 5D
styling one. It should be settled before 5E. It would also give the head apparatus a second field
that genuinely earns its place, which matters given that the apparatus is otherwise confirmed to
be an ordinary byline.

## RV-2 — Entry length is the signal (the phase's most valuable finding)

`fixture-revweak.html` is the canonical page with **identical CSS** and three weak entries:
"Published." / "Updated some details." / "Minor edits and clarifications."

OBSERVED: the register does not degrade — it **collapses into a changelog.** It becomes
indistinguishable from the "last updated" block of a documentation site, and the design's entire
distinctive claim evaporates while nothing about the design has changed.

Rendering also produced the mechanism, which reading the source could not:

MEASURED — strong entries wrap to **3–5 lines**; weak entries fit on **one**. A one-line entry sits
inside the two-column grid as a **row**, and rows beside dates are a changelog. A three-line entry
overflows into a block of prose beside a date, and prose beside a date is a record.

> **The register reads as reasoning when its entries are shaped like paragraphs, and as a log when
> they are shaped like rows.**

### Writing standard, derived from measurement

| | |
|---|---|
| **Floor** | At least two full lines at the reading measure — roughly **25 words** |
| **Content** | Must name *what was previously claimed*, *what changed*, and *why*. All three |
| **Prohibited** | "Updated", "minor edits", "clarifications", "various fixes" — anything describing editing rather than reasoning |
| **Exception** | None. "Published." is removed from the register entirely (RV-1) |

Against the brief's three examples:

| Example | Verdict |
|---|---|
| *"Updated some details."* | **BAD** — rendered; produces the collapse |
| *"Revised the conclusion after reviewing the request flow again."* | **GOOD but under the floor** — one line, 10 words. Says what changed, not what was previously believed. Renders as a row |
| *"The original conclusion treated the redirect as an access-control boundary…"* | **STRONG** — three lines; names prior claim, correction and reason |

## RV-3 — At six entries, two pressures appear

OBSERVED. The register still reads as D at six, because the writing carries it. But:

1. **The date column starts to take the shape of a timeline.** Six evenly spaced dates in a left
   rail with text beside them is the *form* of a changelog even with no line, dot or icon drawn.
   Nothing decorative was added; the geometry converges anyway.
2. **The register (643px) becomes comparable to the prose movements**, shifting the page's centre
   of gravity toward the bottom.

INFERRED: acceptable at six, likely failing somewhere past ten. Worth re-testing when a real
investigation reaches that count. No action now — the correct response would be a content
decision (do old revisions collapse? does the register summarise?) and there is no evidence yet
to decide it on.

## Test 19 — Return visit

Comparing `fixture-rev0` with `fixture-rev3`: same investigation, same prose, 383px apart.

**Yes — the later version is genuinely richer, for a specific reason.** The 3-revision version
tells the reader something the 0-revision version cannot: that the author went back to their own
published conclusion, found it wrong, and said so in public.

The prose is byte-identical. The entire difference is the evidence of having changed one's mind.

JUDGMENT: this is the concept working, and it is the only mechanism in the system that a competing
portfolio cannot obtain by copying the design — it requires having actually revised something.

## Standing exit condition, sharpened

5D-14 concluded that revisions must *accumulate* and must be *written well*. Rendering adds a
third condition and makes the second measurable:

1. Revisions must accumulate.
2. Entries must clear the **25-word / two-line floor** and name claim, change and reason.
3. **"Published." must not be one of them** — the register must contain changed reasoning only.

A register of trivial entries fails the concept exactly as completely as an empty one, and now
fails it *visibly*.
