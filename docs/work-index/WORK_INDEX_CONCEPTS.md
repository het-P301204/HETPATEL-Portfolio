# Work / Investigation Index — Concepts

**Date:** 2026-08-15 (Phase 5F) · Six directions. **No visual design.**

D is Phase 5B's `INVESTIGATION_INDEX.md` recommendation carried forward unchanged, so the comparison is honest against what already exists.

---

## A — QUESTION REGISTER

**The row leads with the question, not the title.**

```
Why did an allow-list keep accepting requests it should have rejected?
        closed · self-initiated · 2026
Can a piece of evidence satisfy one framework and fail another?
        professional · unresolved · 2026
```

The title becomes secondary or disappears; the question *is* the entry.

**Reads as:** a list of open problems. **Strength:** maximally on-brand — the brand promise is reasoning, and a question is the purest expression of it. Nothing in the corpus does this. **Very high distinctiveness.**

**Weakness — decisive.** Questions are long, and a column of six 12-word questions is exhausting to scan; the eye has no anchor. It also **breaks the recruiter test**: a recruiter scanning for "what has he worked on" gets interrogatives, not subjects. And it damages professional work specifically — the questions Het worked through inside an audit are necessarily abstract ("how do you map a control to evidence"), so a question-led row makes his strongest work look like his most theoretical.

**Kept:** the framing line beneath each title is the question, restated. The question survives; it just does not lead.

---

## B — WORKING RECORD

**A uniform structured record per item, in the architecture-practice manner.**

```
Why an allow-list kept failing open
The rule was correct; the ordering was not.
self-initiated · closed · 2026
```

Identical fields, identical order, every item, no exceptions. The span carries time; status carries state; origin carries provenance.

**Reads as:** a body of work. **Strength:** the uniformity *is* the portfolio signal — the reader learns the shape once and then scans. Scales to 30 without change. Works at 3 because a short complete record reads as complete. Directly implements the research finding.

**Weakness.** Uniformity is close to monotony; at 20+ items the page could become a grey field with no entry point. Needs a mechanism for grouping to arrive later, or it flattens.

---

## C — SELECTED WORK

**Curated, weighted. The strongest items get more space; lesser items are compressed to a line.**

**Reads as:** a portfolio with an editor. **Strength:** solves "does it hide the strongest work" by construction. Curated default ordering is a portfolio signal (Caruso St John).

**Weakness — decisive at launch.** Weighting requires enough items for the weighting to mean something; at three, giving one item more space simply duplicates the homepage's featured investigation. It also imposes a permanent editorial maintenance cost on someone whose writing capacity is unverified, and 5B rejected manual featuring on exactly that basis — *"the homepage already features; the index should be neutral."*

---

## D — INVESTIGATION INDEX *(Phase 5B, as specified)*

```
Why an allow-list kept failing open
The rule was correct; the ordering was not.
closed · 2026-03 · application security · self-initiated
```

Three lines, reverse-chronological, content-region width, domain grouping from ~15.

**Strength.** Already reasoned through, already reconciled with the rest of the system, and the three-line row with a written framing line is correct. Most of D survives.

**Three problems, all created after 5B was written:**

1. **`2026-03` is a date point**, and by the 5F research that is the strongest archive signal after excerpts.
2. **`application security` is a domain field**, which Het removed from the apparatus on 2026-08-15 as metadata for metadata's sake.
3. **"Content region width (46rem)"** refers to `--content`, which 5E deleted when it turned out to be producing three different left edges (P5DV-004). The width question was explicitly left open for the index.

**Not rejected — revised.** See `WORK_INDEX_SELECTED_DIRECTION.md`.

---

## E — THEMATIC WORK MAP

**Grouped by kind of problem, chronology demoted to a fallback.** Kettle's structure.

```
Application security
  Why an allow-list kept failing open        closed · self-initiated · 2026
  ...
Regulated assurance
  ...
```

**Reads as:** a demonstrated domain. **Strength:** the strongest structural argument available to someone without seniority — grouping asserts competence in a way a list cannot. This is where the index should end up.

**Weakness — disqualifying today.** Three investigations do not group. Two groups of one and one of two is worse than no grouping: it advertises thinness and invites the reader to count. 5B puts grouping at ~15, 5E at ~8. **E is the destination, not the launch state.**

---

## F — DUAL REGISTER

**Two explicit registers: professional work and independent work, presented separately.**

**Reads as:** a portfolio with a clear provenance split. **Strength:** directly answers the recruiter question "professional vs self-initiated?" at the structural level rather than per-row. Given that Het's scarcest asset is regulated-assurance exposure, separating it is tempting.

**Weakness — decisive, and the same one Phase 4 found.** `HOMEPAGE_EXPERIENCE.md` rejected the two-register homepage (H5) because *"the independent register is currently near-empty… a two-column opening with one column thin advertises the gap."* The same applies inverted here: today the **professional** register is empty of published investigations, because the clearance makes them possible but none is written yet. A "Professional work" heading with nothing under it is precisely the empty state `EMPTY_STATE_AND_GROWTH.md` forbids.

**Kept:** origin as the most prominent field in the record. The distinction is preserved per-row rather than structurally.

---

## Summary

| | Organising principle | Fails at 3? | Fails at 30? | Archive risk |
|---|---|---|---|---|
| A Question register | the question | no | **yes** — unscannable | low |
| **B Working record** | uniform structured record | **no** | manageable | **low** |
| C Selected work | editorial weighting | **yes** | no | low |
| D Investigation index (5B) | three-line editorial row | no | no | **high — date point** |
| E Thematic work map | kind of problem | **yes** | no | very low |
| F Dual register | provenance | **yes** | no | low |

Scored in `WORK_INDEX_COMPARISON.md`.
