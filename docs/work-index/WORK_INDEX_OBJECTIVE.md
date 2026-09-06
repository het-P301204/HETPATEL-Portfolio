# Work / Investigation Index — Objective

**Date:** 2026-08-15 (Phase 5F)

---

## 1. The question this page answers

The homepage answers *who is Het, what does he do, why is he worth exploring.*

**This page answers one thing: WHAT HAS HET ACTUALLY WORKED ON?**

It is the body of work. The Investigation format is the site's chosen mechanism for showing that work with more depth than a conventional portfolio — it is not the point of the site.

---

## 2. The sentence a visitor should be able to say

> "These are Het's selected pieces of security work."

**Not:** *"These are Het's latest posts."*

Constraint **T9** applies here as it does everywhere: portfolio before publication. This page is the most exposed surface on the site to that failure, because a list of dated titles with summaries is, structurally, what a blog archive is.

---

## 3. What each row must communicate

Per Het's brief, a visitor scanning a row should quickly get:

1. **What was the question?**
2. **What kind of work was this?**
3. **Where did it come from?**
4. **What is its current state?**
5. **Why should I open it?**

Note what is *not* on that list: when it was published, how long it takes to read, who wrote it. Those are publication metadata and they are the mechanism by which work indexes drift into archives.

---

## 4. The index is an invitation, not the work

The 5D investigation page is the evidence. **5F is the map.** It must give enough context that opening an investigation feels worthwhile, and no more. No excerpts, no truncation with ellipses, no fade-out teasers.

---

## 5. It must be credible at three

The hard limits are unchanged: zero verified built work, one ~7-month internship with confirmed CSCRF/IRDAI involvement, no project descriptions yet, no published writing yet.

The index must therefore read as **a complete record that happens to be short**, not as a container waiting to be filled.

**Banned outright:** fake volume · "coming soon" · empty rows · placeholder projects · counts used as credibility ("12 projects", "100 repositories") · filters over three items · a spacious layout that advertises how much room is left.

`INVESTIGATION_INDEX.md` (5B) already states the governing instinct and it is adopted:

> A spacious index of three items looks like a placeholder for thirty; a tight one looks like a complete record.

---

## 6. Scale targets

| Volume | Must |
|---|---|
| **3** | Read as a complete short record. This is launch |
| 5 | Same, no structural change |
| 10 | Still scannable without filtering |
| 20 | Not visually repetitive |
| **30** | Not overwhelming; still not a catalogue |

**Nothing structural may change between 3 and 30.** Growth is a data change.

---

## 7. Relationship to the rest of the site

```
HOME ──► selected work (3 items, curated) ──► INVESTIGATION
  │
  └────► all investigations ──► 5F INDEX ──► INVESTIGATION
```

The index must **not** simply repeat the homepage's selected-work block. The homepage shows a curated few with a one-line framing each; the index shows everything, and is the only place range and state are visible together.

---

## 8. Inherited constraints — not revisited

| Constraint | Source |
|---|---|
| No card grid, no thumbnails, no equal rectangular tiles | Brief §24–27; Phase 1; Het's 5F brief as a HARD constraint |
| Status is a word, never a pill, badge, dot or colour | `STATUS_SYSTEM.md` |
| `unresolved` is not an alert and must look identical to every other status | `STATUS_SYSTEM.md` |
| Artifacts never stand alone; absence renders nothing | `ARTIFACT_MODEL.md` |
| No GitHub graph, stars, followers, streaks or language bars | `GITHUB_RELATIONSHIP.md` |
| Two content types only; Notes are not equal-weight portfolio items | `CONTENT_MODEL.md` |
| The engagement is context; the question worked through inside it is the investigation | `CONFIDENTIAL_WORK_MODEL.md` §2 |
| Role precision — *participated in*, *assisted with*; never *led*, *owned* | P5EV-009 |
| One design system. No new type, colour, spacing or component language | 5D / 5E |

---

## 9. Success criteria

1. Dominant interpretation is **body of work**, not article archive.
2. A recruiter can tell professional from self-initiated work in 20 seconds.
3. An engineer can identify the technically interesting item and find its evidence.
4. It reads as complete at 3 items and stays navigable at 30.
5. Replacing the content with a generic student's makes it visibly weaker.
6. Nothing is fabricated; fixtures used for scale testing are marked and never published.
