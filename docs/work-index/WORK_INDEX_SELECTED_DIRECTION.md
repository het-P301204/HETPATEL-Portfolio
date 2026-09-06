# Work / Investigation Index — Selected Direction

**Date:** 2026-08-15 (Phase 5F) · **Direction B — THE WORKING RECORD**

---

## The idea in one line

> **A uniform structured record of work, in which every item answers the same questions in the same order — so the reader learns the shape once and then scans.**

---

## The row

```
Why an allow-list kept failing open
The rule read correctly, so I wanted to know where the gap between the
declared rule and the observed behaviour was coming from.
self-initiated · closed · 2026
```

Three lines, every item, no exceptions.

| Line | Register | Carries |
|---|---|---|
| **Title** | serif, accent, link | *What is this piece of work?* |
| **Framing** | serif, secondary | *What was the question, and why would I open it?* |
| **Record** | sans, muted | *Where did it come from · what state is it in · when* |

**No thumbnail. No card. No rule between rows. No excerpt. No read-time. No "read more". No status colour. No pill, badge, dot or icon.**

---

## What changed from Phase 5B, and why

`INVESTIGATION_INDEX.md` specified:

```
closed · 2026-03 · application security · self-initiated
```

Three changes. All are recorded as revisions, not overwrites.

### Change 1 — the date becomes a span, and moves last

| | |
|---|---|
| **PREVIOUS** | `2026-03` — a month-precision publication point, second in the metadata line |
| **WHY IT FAILED** | The 5F research identifies the date *point* as the strongest archive signal after excerpts. PortSwigger Research — a genuinely excellent security research index — reads as a publication primarily because of "Latest" plus a single prominent date. 5E had already found the same on the homepage (P5EV-005) and removed dates entirely |
| **5F EVIDENCE** | Caruso St John present a body of work as `2019–2023` and `2016–present (under construction)`. **A span describes the work; a point describes a post.** The same digits carry opposite meanings |
| **NEW** | A **span**, placed last in the record. `2026` at launch; `2025–2026` where work crossed a year; `2026–` for work still open |
| **CONFIDENCE** | HIGH on the principle. **MEDIUM on the value at launch**, where every row reads `2026` — tested, not assumed |

**Not removed.** 5E removed dates from the homepage because the homepage is an introduction. The index is a record, and a record without time is harder to trust. The brief's instruction — *"do not simply remove dates, understand the structural cause"* — is answered: the cause was the point, not the presence.

### Change 2 — `domain` leaves the row

| | |
|---|---|
| **PREVIOUS** | `application security` displayed per row |
| **WHY IT FAILED** | Het removed `domain` from the investigation apparatus on 2026-08-15 as metadata for metadata's sake, on the grounds that the title and context already establish it. The same argument holds per row: the framing sentence names the subject more precisely than a category ever could |
| **NEW** | **`domain` remains in the content model** and is not displayed at low volume. It is the axis thematic grouping and filtering will use at ~8–15 items |
| **CONFIDENCE** | HIGH |

This resolves an apparent conflict rather than creating one: domain is useless *per item* and essential *for organising many items*.

### Change 3 — the index uses the site's one shared width

| | |
|---|---|
| **PREVIOUS** | "Content region width (up to 46rem), not the reading measure" |
| **WHY IT FAILED** | 5E deleted `--content` after MEASURING that it produced three different left edges on one page (P5DV-004), and explicitly left the index width open as the one case that might genuinely need more room |
| **5F EVIDENCE** | With `domain` gone the record line is three short fields and needs no width. The framing line is **prose** and reads better at the measure than beyond it |
| **NEW** | The index uses `--box`, like every other surface. **One left edge, one width, whole site** |
| **CONFIDENCE** | HIGH. This closes the open question from P5DV-004 |

### Change 4 — origin leads the record

`self-initiated · closed · 2026` rather than `closed · … · self-initiated`.

Origin is the field that separates regulated-assurance professional work from lab work, and that distinction is Het's scarcest asset and the recruiter's first question. `STATUS_SYSTEM.md` §"Status in the index" is unaffected — status remains a colourless word among others, and is not privileged.

---

## Ordering

**Reverse chronological.** Retained from 5B.

The 5F research initially suggested a curated default (Caruso St John default to "Featured"). **Rejected**, for the reason 5B gave and which still holds: the homepage already features, the index should be neutral, and manual curation is a permanent maintenance cost on someone whose writing capacity is unverified.

**The finding that makes this safe:** chronological *ordering* is not what makes an archive. The archive signals are the date point, the word "Latest", the excerpt and the byline — all of which are presentational. An order is just an order, provided nothing announces it. **There is no "Latest" heading, no "Recent" label, and no date leading any row.**

---

## Behaviour by volume

| | 3 *(launch)* | 5 | 10 | 20 | 30 |
|---|---|---|---|---|---|
| Rows | 3 | 5 | 10 | 20 | 30 |
| Grouping | none | none | **by domain** | by domain | by domain |
| Filters | none | none | none | **domain + status** | domain + status |
| Search | none | none | none | none | none |
| Structure | identical | identical | identical | identical | identical |

**Grouping is the only structural addition, and it is additive** — headings inserted above rows that do not themselves change. This is what makes E reachable without a redesign.

Thresholds are hypotheses to be re-tested with real content, not laws. `INVESTIGATION_INDEX.md` said filters at 10 and status filters at 15; 5F pushes both later, because a filter is only useful once scanning fails, and 10 uniform rows are still scannable.

**Search: not at any volume tested.** Revisit past ~50.

---

## Where Notes sit

**Not on this page.** `CONTENT_MODEL.md` makes Notes a secondary type with a different shape, and Het's brief is explicit that they must not become equal-weight portfolio items. Mixing them in would give the page a second rhythm and a second kind of date — the fastest available route to reading as a blog archive.

Notes have their own surface, which 5F does not build.

---

## Artifacts on the index

A **quiet textual indicator that evidence exists** — no screenshot, no icon, no count.

**And nothing at all where there is none.** `ARTIFACT_MODEL.md` §5 is absolute: no placeholder, no empty slot, no "artifact unavailable". Most professional investigations will have no public artifact and the absence must not read as a defect.

---

## Relationship to the homepage

| | Homepage selected work | 5F index |
|---|---|---|
| Items | 3, curated | all |
| Purpose | *a taste of the range* | *the whole record* |
| Metadata | `status · origin` | `origin · status · span` |
| Framing line | outcome-shaped — *"A rule that was correct on paper and wrong in practice"* | question-shaped — *"I wanted to know where the gap was coming from"* |

**The framing lines are deliberately different.** The homepage sells the finding to make you click; the index states the question so you can choose between items. Writing them identically would make the index feel like a repeat of the homepage, which Het's brief specifically warns against.
