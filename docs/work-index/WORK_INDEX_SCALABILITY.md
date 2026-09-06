# Work / Investigation Index — Scalability

**Date:** 2026-08-15 (Phase 5F)

MEASURED and OBSERVED at five volumes. Fixtures at 5, 10, 20 and 30 are marked
**[HYPOTHETICAL VALIDATION CONTENT]**, live in `prototype/`, and are never published.

---

## Measured

| Items | Row height (avg) | Doc height @1280 | Screens @1280 | Screens @375 |
|---|---|---|---|---|
| **3** *(launch)* | 136px | 1,576 | **1.8** | 2.6 |
| 5 | 155px | 1,578 | 1.8 | — |
| 10 | 125px | 2,184 | 2.4 | — |
| 20 | 122px | 3,649 | 4.1 | — |
| 30 | 121px | 5,114 | **5.7** | **9.5** |
| 30 grouped | 121px | 5,320 | 5.9 | — |

At every volume: **zero links below 24px · one shared left edge · no horizontal overflow.**

---

## 3 items — the launch state

**Reads as a complete short record.** OBSERVED at 1280 and 375.

1.8 screens. Three rows, tight, with a written framing line each. It does not read as a container waiting to be filled, and the reason is density: 5B's instinct was right that *"a spacious index of three items looks like a placeholder for thirty; a tight one looks like a complete record."*

**One weakness, and it is content rather than design.** All three entries read `self-initiated`, so the origin field is uniform and therefore doing no work. Origin is the index's most valuable field — it is what separates regulated-assurance exposure from lab work — and it only earns its place once at least one entry is `professional`. Recorded as finding **I-2**; it resolves when Het supplies a professional investigation, which the 2026-08-15 clearance now permits.

---

## 10 items

2.4 screens, still scannable in one pass without filtering. **No filters at this volume** — a filter is useful only once scanning fails, and ten rows do not fail.

This is also where **grouping first becomes genuinely available**: the fixture at 10 has four domains with 2–4 items each, which is enough for groups to mean something.

---

## 20 items — where it started to fail

4.1 screens. **This is where the first failure appeared, and it was a hierarchy failure inside the row.**

### I-1 — the index read as a uniform grey field

**OBSERVED at 30, visible from 20.** The framing line was set at body size (19px) in the same serif as the title, which was 1.1rem (17.6px). Title and framing were near-equal in weight, so each row had two competing elements and **the titles — the only scannable anchor — were lost inside the prose.**

The page read as an undifferentiated field of grey text. The eye had nowhere to rest and no way to skim.

| | |
|---|---|
| **PREVIOUS** | title 1.1rem / framing 1rem inherited body size (19px) |
| **WHY IT FAILED** | Two near-equal elements per row × 30 rows. Uniformity became monotony — the exposure named in `WORK_INDEX_COMPARISON.md` before it was built |
| **5F EVIDENCE** | Rendered 30-item fixture at 1280, texture view |
| **NEW** | title **1.25rem** / framing **1rem** / record 0.84375rem — a legible 20 / 16 / 13.5 descent |
| **CONFIDENCE** | HIGH |

**OBSERVED after:** the titles form a scannable column, the framing recedes to a supporting role, and the page reads as a record rather than a field. Row height also dropped from 135–161px to 121–136px, taking 30 items from 6.1 screens to 5.7.

**The general lesson:** in a repeated row, any two elements of similar weight will fight, and at volume the fight is what the reader sees. Hierarchy inside the unit matters more than spacing between units.

---

## 30 items

5.7 screens ungrouped, 5.9 grouped. **Navigable but at its limit ungrouped.**

### Grouping transforms it

OBSERVED, comparing the two 30-item fixtures directly. Grouped by domain — *Regulated assurance · Application security · Network · Detection* — the page gains rest points and, more importantly, **stops being a pile and becomes an argument about areas of competence.** This is Kettle's structural claim working exactly as Phase 1 described: grouping converts a list of outputs into a demonstrated domain.

An unplanned benefit worth recording: because Het's professional work is concentrated in assurance, **grouping by domain also separates professional from self-initiated work** without a second axis.

### I-3 — the grouping threshold should come forward

| | |
|---|---|
| **PREVIOUS** | `INVESTIGATION_INDEX.md` (5B): domain grouping "from ~15 items", offered as an alternative view at 25. 5E suggested ~8 |
| **WHY IT FAILED** | OBSERVED at 20, the ungrouped list is already a field. Waiting until 25 means the index spends its most awkward stretch in its worst state |
| **5F EVIDENCE** | Rendered 10, 20 and 30 ungrouped and 30 grouped |
| **NEW** | **Grouping becomes the default at ~10–12 items**, not an alternative view. Below that, a plain list |
| **CONFIDENCE** | MEDIUM-HIGH — the fixture's domain distribution is invented, and real distribution may be lumpier |

**Caveat recorded honestly:** the 30-item fixture puts 11 items in *Regulated assurance*, which is a large group. Real work will distribute differently, and a group of 15 against groups of 2 would need rethinking. The threshold is a hypothesis to re-test with real content.

---

## Filters and search — both still deferred

| | Threshold | Status |
|---|---|---|
| Filters | 5B said 10 (domain) and 15 (status) | **Pushed later.** Grouping does the same job earlier and without controls. Revisit past ~30 |
| Search | 5B said 50+ | **Unchanged.** Not needed at any volume tested |

**A filter over three items advertises scarcity**, and a filter over ten is redundant when the ten are scannable. Grouping is the better instrument because it is structural rather than interactive, works without JavaScript, and makes an argument rather than offering a control.

---

## What never changes between 3 and 30

- The row: title · framing · record. Same three lines, same order, no exceptions.
- The type scale, the measure, the left edge, the spacing.
- No cards, thumbnails, rules, excerpts, read-times or counts.
- No status colour.

**The only structural addition across the whole range is a group heading**, inserted above rows that do not themselves change. That is what makes concept E reachable as a data change rather than a redesign.

---

## Beyond 30 — untested

Not tested and not designed for. At 50+ the likely needs are search and possibly a compact alternative view. `EMPTY_STATE_AND_GROWTH.md` already anticipates this and nothing in 5F forecloses it.
