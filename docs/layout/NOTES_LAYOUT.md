# Notes Layout

**Date:** 2026-08-14 (Phase 5B)

**Established:** a field note is one observation that did not need working out. It differs from an investigation in **length and shape, not in status.**

---

## The key spatial decision: notes render inline in their index

Most notes are 50–400 words. Requiring a click to read forty words is friction with no payoff.

```
2026-04-11
Two scanners disagree on the same TLS configuration. One reports the
cipher order as offered, the other as negotiated. Neither is wrong;
they are answering different questions.

2026-03-28
Evidence that satisfies one framework often fails another, because the
two define the control boundary differently.
```

**The index is the content.** Notes have permalinks for linking and citation, but the index is where they are read.

| Length | Behaviour |
|---|---|
| < ~150 words | **Fully inline.** No link needed beyond the permalink on the date |
| 150–400 words | Inline, or inline with a "continue" link if it dominates the page |
| > 400 words | Its own page, with the index showing the first paragraph |

---

## Geometry

- **Same reading measure as investigations (68ch).** Deliberately — narrowing notes would signal they are a lesser class.
- **Date above the note**, left-aligned, apparatus register. It is the only metadata most notes carry.
- **OPEN space between notes** — larger than paragraph spacing, so distinct observations do not run together.
- Domain optional, and usually omitted. Most notes do not need one.
- No status. **Notes have no lifecycle** — they are written once.

---

## What notes do not have

| Absent | Why |
|---|---|
| Status | No lifecycle |
| `origin` | Almost always self-initiated; the field would be constant and therefore noise |
| Head apparatus block | Overkill for one observation. A date is sufficient |
| Foot register | Notes are superseded, not revised — see below |
| Artifacts | If it has an artifact, it is probably an investigation |
| Related work | Inline links suffice |
| Uncertainty movement | A note is an observation, not an argument |

**This asymmetry is the point.** The apparatus scales down to a date. Applying the full investigation apparatus to a two-sentence note would be the decorative-metadata failure.

---

## Supersession

A note that turns out to be wrong or incomplete is **not deleted**. It gains a dated line beneath it:

```
2026-07-02 — superseded: this turned out to be a caching artefact, not a
             scanner disagreement. See [investigation].
```

This is the visible-corrections discipline, in its cheapest form. It is also the **promotion path** — a note that raised a question links forward to the investigation that answered it, and the pair, dated months apart, is more credible than the investigation alone.

---

## Ordering and growth

**Reverse chronological** — the one place chronology is genuinely correct, because a note is an observation at a point in time.

| Notes | Behaviour |
|---|---|
| 0 | No notes section anywhere |
| 1–2 | Section exists; homepage may show them |
| 3–15 | Full index, inline rendering |
| 25+ | Consider a year separator. **Still no filtering** |
| 50+ | Domain filter if domains were used consistently |

**Ageing is shown, not hidden.** A note from eighteen months ago says so.
