# Homepage — Portfolio vs Publication Test

**Date:** 2026-08-15 (Phase 5E) · **The mandatory test for constraint T9.**

Run against the **rendered** homepage at 1280px and 375px. Evidence labels follow the 5D
convention: **MEASURED** · **OBSERVED** · **INFERRED** · **JUDGMENT**.

---

## The instrument

From `HOMEPAGE_RESEARCH.md` §1, derived by asking why two content-heavy research sites
(jameskettle.com, danielmiessler.com) read unmistakably as portfolios:

| # | Signal | Publication | Portfolio |
|---|---|---|---|
| 1 | First sentence | content, or a masthead | person + role + where the work happened |
| 2 | Work ordering | reverse chronological | grouped by kind of problem |
| 3 | Per-item metadata | date, read time | status, origin, role, evidence |
| 4 | Employer | absent | named |
| 5 | What is offered | the writing | the person's capability |
| 6 | Navigation | recent / archive / categories | body of work |

---

## Result — homepage

| # | Signal | Rendered homepage | Reads as |
|---|---|---|---|
| 1 | First sentence | *"I am an early-career security practitioner working between technical testing and regulated assurance."* — OBSERVED as the first prose on the page, under the name as `h1` | **Portfolio** |
| 2 | Work ordering | MEASURED: **no date appears anywhere in the selected-work list.** Items lead with status and origin | **Portfolio** |
| 3 | Per-item metadata | `closed · self-initiated` / `open · self-initiated`. No read time, no publication date | **Portfolio** |
| 4 | Employer | **Info eShield Cyber Solutions** named in bold in the first paragraph of "The work"; CSCRF and IRDAI named in the identity sentence | **Portfolio** |
| 5 | What is offered | Capability, evidenced. Every claim is bound to the work that supports it | **Portfolio** |
| 6 | Navigation | Investigations · Notes · About. *"Notes"* is a publication-shaped word; *"Investigations"* is neutral-to-portfolio | **Mixed** |

**Score: 5 clear portfolio signals, 1 mixed, 0 publication signals.**

### Dominant interpretation: **A — PORTFOLIO** ✅

With personal identity and editorial quality, which is the stated target.

---

## Five-second impression, recorded before reading

**Desktop 1280, prototype banner excluded — OBSERVED:**

> A person's professional site. Name, then a claim about what they do, then a named employer. Not a blog: there is no article, no date, no feed, no masthead.

**Mobile 375 — OBSERVED:**

> Same. The name and the lane arrive first; "The work" and *Info eShield Cyber Solutions* are visible before the fold.

**Classification against the brief's six options:**

| | |
|---|---|
| **A Portfolio** | ✅ **dominant** |
| B Publication | not present |
| C Blog | not present |
| D Consultancy | not present — no services, no client logos, no engagement-led opening |
| E Personal website | secondary reading, and the closest competitor |
| F Documentation | not present |

**The honest reservation is E, not B.** The first screen is entirely prose, and a page of prose under a person's name can read as an "about" page rather than as a portfolio. What pulls it back to A is the named employer, the named frameworks, and the region label "The work" appearing above the fold. Remove any one of those three and the reading drifts to E.

---

## Comparison with the investigation page

Same instrument, same day, same design system:

| # | Signal | Investigation page | Homepage |
|---|---|---|---|
| 1 | First sentence | the investigation's question | **person + role** |
| 2 | Ordering | chronological within the piece | **status + origin** |
| 3 | Metadata | Status, Origin, Started, Published — **dates lead visually** | **status + origin only** |
| 4 | Employer | absent | **named** |
| 5 | Offered | the reasoning | **capability** |
| 6 | Navigation | same | same |

**Investigation page: 4 publication signals, 2 portfolio. Homepage: 5 portfolio, 1 mixed.**

This is the intended split and it now has a measurement behind it. 5D's finding — that the
investigation page reads as an editorial publication — is **explained** rather than merely
observed: by this instrument it *is* one, and correctly so. T9 requires only that the homepage not
inherit it, and it does not.

---

## What would break this result

Recorded so future phases can check against it rather than rediscover it:

1. **Adding dates to the selected-work list.** Signal 2 and 3 both flip. This is the single
   easiest way to turn the homepage into a blog index, and it will feel like an improvement when
   someone proposes it.
2. **Moving the featured investigation above "The work".** Restores Phase 4's H1 ordering and with
   it the publication reading — this is the exact change 5D's evidence forbids.
3. **Removing the employer name.** Signal 4 flips, and the page loses the strongest single piece of
   evidence that the work is professional.
4. **Letting the identity block grow.** If the first screen becomes prose-only with no region label
   visible, the reading drifts from portfolio to personal website.
5. **Renaming "The work" to something softer.** It is doing more work than its size suggests.

---

## Verdict

**PASS.** The dominant interpretation is portfolio. T9 is satisfied on the homepage.

**Confidence: MEDIUM-HIGH.** The instrument is derived from a small number of strong references
rather than from a controlled study, and the five-second impressions are my own reading of a
rendered page at reduced scale, not a user test. The signal counts are measurable and reproducible;
the impression is judgment.

**The test that would strengthen this most:** showing the rendered first screen to three security
recruiters and asking them, unprompted, what kind of site it is.
