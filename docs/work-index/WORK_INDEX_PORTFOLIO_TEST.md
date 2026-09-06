# Work / Investigation Index — Portfolio vs Publication Test

**Date:** 2026-08-15 (Phase 5F) · **Mandatory test for constraint T9.**

The index is the site's most exposed surface to this failure, because a list of dated titles with summaries is structurally what a blog archive is.

---

## The list instrument

Extended in 5F from the page-level instrument used in 5E:

| # | Signal | Blog archive | Body of work |
|---|---|---|---|
| 1 | Date form | single point | **span** |
| 2 | Date prominence | leads or sits under the title | **trails, with the record** |
| 3 | Default order | newest first | curated or thematic |
| 4 | Ordering language | "Latest", "Recent", "Archive" | none |
| 5 | Per-item metadata | author, read time, published | **status, origin, span** |
| 6 | Item summary | excerpt, truncated | **written framing sentence** |
| 7 | Record uniformity | varies by post | **identical fields, every item** |
| 8 | What the title names | an article | **a piece of work** |

---

## Result

| # | Signal | Rendered index | Reads as |
|---|---|---|---|
| 1 | Date form | `2026`, `2026–`, `2025–2026` | **Body of work** |
| 2 | Date prominence | last in the record line, 13.5px muted. **No date leads any row** | **Body of work** |
| 3 | Default order | reverse chronological | ⚠️ **Mixed** |
| 4 | Ordering language | none. The heading is "The record" | **Body of work** |
| 5 | Per-item metadata | `self-initiated · closed · 2026 · code` | **Body of work** |
| 6 | Item summary | written framing sentence; MEASURED zero ellipses, zero truncation | **Body of work** |
| 7 | Uniformity | identical three lines, every item, at every volume | **Body of work** |
| 8 | Title names | *"Why an allow-list kept failing open"* — a problem that occurred | **Body of work** |

**Score: 7 body-of-work signals, 1 mixed, 0 archive signals.**

### Dominant interpretation: **PORTFOLIO / BODY OF WORK** ✅

---

## The one mixed signal, examined

**Ordering is reverse chronological**, which is the archive default.

Retained deliberately. 5B rejected manual featuring — *"the homepage already features; the index should be neutral"* — and curation is a permanent maintenance cost on someone whose writing capacity is unverified.

**The finding that makes it safe:** chronological *ordering* is not what makes an archive. The archive signals are the date point, the word "Latest", the excerpt and the byline — **all of them presentational, none of them the sort order.** An order is just an order provided nothing announces it. There is no "Latest" heading, no "Recent" label, no date leading a row, and no visible sort control.

At ~10–12 items grouping becomes the default and chronology demotes to within-group ordering, which resolves the signal entirely — the same structure Kettle uses, where the chronological list survives as "Misc" at the bottom.

---

## Five-second impression, recorded before reading

**Desktop 1280 — OBSERVED:** a list of problems someone worked on. The titles are questions and failures, not deliverables. Nothing announces recency.

**Mobile 375 — OBSERVED:** same; titles wrap to two lines and still dominate.

| Classification | |
|---|---|
| **Portfolio / body of work** | ✅ **dominant** |
| Blog | not present — no dates leading, no excerpts, no "latest" |
| Publication | not present |
| Consultancy | not present — no services, no clients, no outcomes-as-results |
| Documentation | not present |
| Generic project grid | not present — no cards, no thumbnails, no tiles |
| **Compliance register** | **the nearest competing reading** — see below |

### The reading I did not expect

Het's brief asks whether the index could read as a **compliance register**. At the 30-item grouped fixture, with a *Regulated assurance* group of eleven uniformly-formatted rows carrying `professional · closed · 2026`, it edges toward one.

**What holds it back is the titles.** *"Whether a control can be evidenced by its own absence"* is a question, not a control reference. A compliance register lists controls; this lists problems. The framing sentences reinforce it — they say *"I could not"* and *"I wanted to know"*, which no register does.

**The risk is real but content-borne:** if Het's real professional titles become nominal (*"ISO 27001 control mapping"*, *"CSCRF gap assessment"*) rather than interrogative, the register reading takes over. Recorded as a **writing constraint**, not a design change.

---

## What would break this result

1. **Adding a publication date to the row**, or moving the span up. Flips signals 1 and 2 together.
2. **Adding excerpts.** The strongest archive signal after dates.
3. **A "Latest investigations" heading.** One word does it.
4. **Nominal titles instead of interrogative ones** — the compliance-register drift above.
5. **Letting the row vary** — an image on some, a tag on others. Uniformity is signal 7 and it is load-bearing.
6. **Read time.** Publication metadata with no place here.

---

## Verdict

**PASS.** T9 is satisfied on the index.

**Confidence: MEDIUM-HIGH.** The signal counts are measurable and reproducible; the five-second impressions are my reading of a rendered page at reduced scale, not a user test. The compliance-register risk is a genuine finding and is the one most likely to materialise, because it depends on how Het titles his professional work rather than on anything in the design.
