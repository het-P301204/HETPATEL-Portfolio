# Phase 5F — Work / Investigation Index Specification

**Date:** 2026-08-15 · **Status: prototype built and validated in a browser.**
**Direction B — The Working Record.**

Implementation: `prototype/investigations.html`, sharing `prototype/style.css` with the homepage
and the investigation page. **One design system, three information hierarchies.** No new colour,
typeface or spacing value.

---

## 1. Structure

```
header                 name + navigation
  ── OPEN ──
h1                     Investigations
  ── TIGHT ──
lede                   what the unit is, and that some are unresolved
  ── MAJOR ──
h2                     The record
  ── NORMAL ──
  row                  title · framing · record
  ── NORMAL ──         (× n)
  ── MAJOR ──
closing note           how origin is used
  ── MAJOR ──
footer
```

---

## 2. The row

```
Why an allow-list kept failing open
The rule read correctly, so I wanted to know where the gap between the
declared rule and the observed behaviour was coming from.
self-initiated · closed · 2026 · code
```

| Line | Family | Size | Colour | Role |
|---|---|---|---|---|
| Title | serif | `1.25rem` | accent, underlined | the only link in the row |
| Framing | serif | `1rem` | secondary | written for the index, never an excerpt |
| Record | sans | `.84375rem` | muted | `origin · status · span [· artifact]` |

**Identical fields, identical order, every item, no exceptions.** The uniformity is the portfolio
signal.

**Absent:** thumbnail · card · rule between rows · excerpt · ellipsis · read-time · byline · count ·
status colour · pill · badge · dot · icon.

---

## 3. Field rules

| Field | Rule |
|---|---|
| **origin** | `professional` · `self-initiated` · `academic`. **First**, because it is the field that separates regulated-assurance work from lab work |
| **status** | `open` · `closed` · `unresolved` · `planned` · `archived`. A colourless word. `unresolved` rendered **identically** to `closed` |
| **span** | `2026` · `2025–2026` · `2026–`. **Last and muted.** A span describes the work; a point describes a post. Professional items: **year precision only** |
| **artifact** | Type name appended only where one exists. **Nothing renders where none does** |
| **domain** | In the content model, **not displayed**. It is the axis grouping uses from ~10–12 items |

---

## 4. New in 5F

| Token | Value | Reason |
|---|---|---|
| `.index > li > a` | serif `1.25rem`, accent | The title must dominate. At 1.1rem against body-size framing the 30-item fixture read as a grey field. I-1 |
| `.ix-framing` | serif `1rem`, secondary | Prose, subordinate. Smaller also means fewer wrapped lines, which is what keeps 30 items navigable |
| `.ix-record` | sans `.84375rem`, muted, tabular-nums | The record |
| `.ix-group` | sans `.9375rem`/500, secondary | Dormant until ~10–12 items. Present so grouping is a data change, not a redesign |
| Row gap | `--normal` | Density is deliberate: a spacious index of three looks like a placeholder for thirty |

---

## 5. Growth

| | 3 | 5 | 10 | 20 | 30 |
|---|---|---|---|---|---|
| Grouping | — | — | **default** | default | default |
| Filters | — | — | — | — | revisit >30 |
| Search | — | — | — | — | — |
| Structure | identical | identical | identical | identical | identical |

**The only structural addition across the whole range is a group heading.**

---

## 6. Validated

MEASURED at nine viewports and five volumes:

| | |
|---|---|
| Doc height | 1,576px at 3 items (1.8 screens) · 5,114px at 30 (5.7) |
| Links below 24px | **0** at every viewport and volume |
| Left edges | **1**, to 0.1px |
| Horizontal overflow | none, including 320px |
| Contrast | title 8.67 · framing 7.45 · record 5.17 · group 7.45 — **all AA** |
| Headings | one `h1`, one `h2`, no level skipped |
| List semantics | `<ol>` / `<li>` — an ordered record |
| JavaScript | **0** · images **0** · icons **0** |
| Page weight | HTML 3.4 KB + shared CSS; **no new font requests** |
| Portfolio-vs-archive | **7 body-of-work signals, 1 mixed, 0 archive** |

OBSERVED at 1280 and 375: 3-item state, 10, 20, 30 ungrouped, 30 grouped, and the generic
comparison.

---

## 7. Changes to earlier decisions

All recorded in `DECISION_LOG.md` P5FV-001 to P5FV-004, not overwritten.

| Was | Now | Why |
|---|---|---|
| 5B: `2026-03` date point in the row | **span, trailing** | Date points are the strongest archive signal after excerpts |
| 5B: `application security` domain in the row | **removed from display** | Het removed `domain` from the apparatus; the framing line names the subject better |
| 5B: "content region width, 46rem" | **`--box`, like everywhere** | 5E deleted `--content`; the record needs no extra width |
| 5B: domain grouping "from ~15" | **~10–12, as default** | At 20 the ungrouped list is already a field |
| 5B: filters at 10 / 15 | **deferred past 30** | Grouping does the job earlier, without controls |
| 5E: homepage row `meta` then `line` | **line then meta**, matching the index | Both surfaces now present items identically |

---

## 8. Open — Het's to decide

| # | Question | Impact |
|---|---|---|
| 1 | **Which real investigations exist**, and one framing sentence each | Blocks the whole page |
| 2 | **Which may carry `origin: professional`** | I-2 — the field is currently silent |
| 3 | Whether professional titles stay interrogative | The compliance-register drift risk |
| 4 | Whether `academic` is used at all | Only appears in fixtures |

**Item 2 is the highest-value content Het can produce.** One professional investigation activates
the index's most important field.

---

## 9. Before production

- Strip explanatory comments from `style.css`.
- Delete every `fixture-*` file and the two `*-genericity-test` files.
- Remove `.proto` and `.placeholder` rules.
- Real URLs for each investigation; the fixtures currently point at `#`.
- `<meta name="description">`, Open Graph, JSON-LD — **no location field**.
- Re-verify CLS after fonts are self-hosted.

---

## 10. Not authorised by 5F

Production deployment · full site implementation · Notes · About · CMS · database · search backend ·
authentication · analytics · routing architecture · Phase 5G.

**5F is research, index design, prototype and validation only.**
