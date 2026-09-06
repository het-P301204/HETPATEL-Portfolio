# Revision Typography

**Date:** 2026-08-14 (Phase 5C) · The most distinctive element, and the easiest to make gimmicky.

---

## The unit

```
2026-03-14   Published
2026-06-02   Revised — the conclusion about ordering was wrong. Corrected
             above after reviewing additional evidence.
```

**Date + statement.** Nothing else.

| Property | Value |
|---|---|
| Family | Public Sans |
| Date | 13.5px, **tabular numerals**, muted |
| Statement | 15px, secondary |
| Line height | 1.5 |
| Date format | **ISO `YYYY-MM-DD`** — unambiguous, sorts naturally, reads as a record |
| Alignment | Dates in a consistent left column; statements aligned after |
| Between entries | TIGHT–NORMAL (~18px) |
| Order | **Chronological, oldest first** |
| Container | None |
| Rule | None |
| Colour | **None beyond the standard roles** |
| Icon / marker | **None** |

---

## Why oldest-first

The foot register reads as an accumulating record, so it runs in the direction time runs. Newest-first would make it a feed.

**Consequence:** the most recent revision is closest to the page bottom, which is where a returning reader arrives after reading. That is the correct place for it.

---

## What must be avoided, and why each is tempting

| Avoided | Why it will be proposed | Why it fails |
|---|---|---|
| Version numbers (`v1.2`) | Looks systematic | Software release vocabulary. These are changes of mind, not builds |
| Colour-coded entries | Distinguishes types of change | See `../color/REVISION_COLOR_POLICY.md`. Would imply some revisions are warnings |
| "Updated" badges | Signals recency | Badge system; also a social-feed signal |
| Relative dates ("3 months ago") | Friendly | Ambiguous, needs JS, and re-computes — a record should state when |
| Diff / strikethrough | Shows exactly what changed | Turns the page into a version-control interface |
| Expand/collapse | Keeps the page tidy | Hides the content that makes this distinctive |
| Icons | Visual interest | No icon system exists |
| A "Changelog" heading | Names the thing | **Changelog is release vocabulary.** If a label is needed, prefer *Revisions* or *Record* |

**The pattern:** every device that makes revisions *look* more systematic makes them read as software release notes — and the value here is precisely that they are not. They are a person recording that they were wrong.

---

## Behaviour as revisions accumulate

| Count | Behaviour |
|---|---|
| **0** | **Renders nothing.** No heading, no empty region. The common case at launch |
| 1 | The published entry alone is probably not worth showing — **see below** |
| 2–3 | Full list. Ideal state |
| 5 | Full list. Still comfortable at ~18px spacing |
| 10+ | Full list. If it ever exceeds ~15 entries, consider collapsing the middle — **but not before** |

### The single-entry question

**If an investigation has only a "Published" entry, should the register show?**

**Recommendation: no.** A one-line register saying only `2026-03-14 Published` duplicates the date already in the head apparatus, and it looks like an empty log with a header.

**Show the foot register only when there is at least one revision.** The publication date then appears as the first entry, providing the baseline the revision is measured against.

**Flagged in the 5D handoff** — it is a judgment call that a rendered page will settle quickly.

---

## Statement writing

Not typography, but it determines whether this works:

- **State what changed and why**, in the same first-person voice as the prose.
- ✅ *"Revised — the conclusion about ordering was wrong. Corrected above after reviewing additional evidence."*
- ❌ *"Updated content"* · ❌ *"Minor fixes"* · ❌ *"Typos"*

**Trivial edits do not get an entry.** A revision entry records a change of *understanding*, not a change of text. Recording typo fixes would dilute the register into a commit log — which is the failure this whole specification exists to prevent.

---

## 5D validation

1. Does one revision read as meaningful, or as an isolated line?
2. Do five revisions read as a record, or as a changelog?
3. Is the tabular date column genuinely aligned in Public Sans?
4. At 375px, do dates and statements stack legibly?
5. Does the register read as part of the document, or as an attached widget?
