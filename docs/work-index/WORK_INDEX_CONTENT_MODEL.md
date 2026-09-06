# Work / Investigation Index — Content Model

**Date:** 2026-08-15 (Phase 5F)

What each row carries, where it comes from, and what is deliberately absent.

---

## The record

Every row, without exception:

| Field | Required | Source | Displayed |
|---|---|---|---|
| **title** | ✅ | investigation | line 1 |
| **framing** | ✅ | written for the index, one sentence | line 2 |
| **origin** | ✅ | `professional` · `self-initiated` · `academic` | line 3, first |
| **status** | ✅ | `open` · `closed` · `unresolved` · `planned` · `archived` | line 3, second |
| **span** | ✅ | derived from started/last-worked | line 3, last |
| **artifact indicator** | — | present only if an artifact exists | line 3, appended |
| **domain** | ✅ in the model | `application security` · `assurance` · `network` · `detection` | **not displayed** until grouping activates at ~8–10 |

**Uniformity is the mechanism.** Same fields, same order, every item. The reader learns the shape once. A row that varies is the thing that makes a list read as an archive.

---

## The framing sentence

**The index's entire utility** (`INVESTIGATION_INDEX.md`), and the one thing Het must write per investigation that does not otherwise exist.

| Must | Must not |
|---|---|
| Be written for the index | Be the first N characters of the body |
| State the question or the tension | End in an ellipsis |
| Be one sentence | Tease — *"the answer surprised me"* |
| Let a reader decide whether to open it | Repeat the title in other words |

**Excerpts are banned outright.** After the date point, a truncated excerpt is the strongest archive signal there is — it exists only where there is a stream of prose to cut.

**Index framing is question-shaped; homepage framing is outcome-shaped.** The homepage sells the finding; the index states the problem so a reader can choose between items.

---

## Status

Vocabulary is fixed by `STATUS_SYSTEM.md` and **not extended in 5F**: `open` · `closed` · `unresolved` · `planned` · `archived`.

- **A word.** Not a pill, chip, badge, dot or colour.
- **No hierarchy.** `unresolved` is not a failure and `closed` is not a success. Forbidden for `unresolved`: amber, red, italics, a glyph, reduced opacity, any distinguishing treatment whatsoever.
- **No column of markers.** An index where the eye runs down a strip of status indicators has become a dashboard, and the titles lose.
- **The optional accent on `open`** — permitted by `STATUS_SYSTEM.md` §"The one permitted distinction" — is **not taken.** Its own condition was "add only if a wayfinding need is shown", and at 3–30 items no such need appears. Default position: no accent on any status.

`planned` is in the vocabulary and **no fixture uses it.** A planned investigation is a stated intention, and `PROJECT_CONSTRAINTS.md` T4 requires intent never to be presented as achievement. It stays available; it is not exercised until Het has a real one.

---

## Origin

`professional` · `self-initiated` · `academic`.

**Het's single most valuable metadata field**, because it separates regulated-assurance exposure from lab work — the distinction his positioning rests on, and the first thing a recruiter needs.

It does this **silently**. `CONFIDENTIAL_WORK_MODEL.md` §4.3: an investigation marked `professional` carries a different weight without a word of explanation and without drawing attention to what is absent.

**Not a pill.** Plain text, in the record line, same treatment as status.

`challenge` (CTF) is in Het's 5F brief as a candidate. **Not adopted** — no CTF investigation exists. The Kryptech certificate is a certificate, not an investigation. Add the value when there is an item for it.

---

## Span

**A span, not a point.**

| Form | Means |
|---|---|
| `2026` | worked and concluded within the year |
| `2025–2026` | crossed a year boundary |
| `2026–` | still open |

**Professional investigations carry year-level precision only.** `CONFIDENTIAL_WORK_MODEL.md` forbids dates precise enough to correlate with a known engagement, and a month-level span on audit work is exactly that risk. Self-initiated work may carry finer precision later; it does not need to now.

**Trailing position, muted, never leading a row.**

---

## Artifacts

A quiet textual indicator only where one exists. No screenshot, no icon, no count, no thumbnail.

**Where none exists: nothing renders.** No placeholder, no empty slot, no "artifact unavailable", no greyed panel. Most professional investigations will have no public artifact and any marker for the absence would draw attention to what is withheld, imply incompleteness, and cut a recurring hole in the layout.

**An investigation without an artifact is complete.** Its evidence is the reasoning.

---

## GitHub

Reached **through** an investigation's artifact, never from the index directly. No repository list, no contribution graph, no stars, no followers, no language breakdown, no streak.

The index never makes repository count legible as a number.

---

## Not on this page

| Absent | Why |
|---|---|
| Notes | Secondary type, different shape. Mixing them adds a second rhythm and a second kind of date — the fastest route to reading as an archive |
| Excerpts | The strongest archive signal after date points |
| Read time | Publication metadata |
| Author byline | Single-author site |
| Tags | `domain` covers it; free tags fragment at low volume |
| Counts | "12 investigations" invites comparison and Het's number is small |
| Filters at launch | A filter over three items advertises scarcity |
| Search | Revisit past ~50 |
| Thumbnails | His work is reasoning; an image would be decoration |

---

## Fixture policy

Scale testing uses fixtures at 5, 10, 20 and 30 items. Every fixture is banner-marked **[HYPOTHETICAL VALIDATION CONTENT]**, lives in `prototype/`, and is never published.

The three real prototype investigations are themselves the 5D hypotheticals and are marked as such. **Nothing on this page is presented as work Het has done that he has not done.**

**Real content still required from Het:** which investigations exist, which may carry `origin: professional`, and one framing sentence each. The 2026-08-15 clearance makes professional investigations *possible*; it does not create one, and the Info eShield engagement is explicitly not converted into an investigation.
