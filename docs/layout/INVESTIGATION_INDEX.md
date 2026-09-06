# Investigation Index

**Date:** 2026-08-14 (Phase 5B)

---

## Options tested

| | 1 inv | 3 | 5 | 10 | 25 | Scan | Genericity |
|---|---|---|---|---|---|---|---|
| Chronological list | 3 | 7 | 8 | 8 | 7 | 8 | 6 |
| **Editorial index** | 4 | **9** | **9** | **9** | 8 | **9** | **8** |
| Compact register (tabular) | 2 | 6 | 7 | 9 | **9** | **9** | 7 |
| Grouped by domain | 1 | 3 | 5 | 8 | **9** | 7 | 7 |
| **Hybrid: editorial → grouped** | 4 | **9** | **9** | **9** | **9** | 9 | 8 |

---

## Recommended: editorial index, with domain grouping available from ~15 items

### Row structure

```
Why an allow-list kept failing open
The rule was correct; the ordering was not.
closed · 2026-03 · application security · self-initiated
```

Three lines per row: **title (link) · one-line framing · metadata**.

- Title at L2–L3 serif — carries the hierarchy.
- Framing line at L3 or L4 — one sentence, drawn from the question. **Not a truncated excerpt with an ellipsis.**
- Metadata at L5 sans, uniform across all rows.
- **NORMAL space between rows.** Tight, scanning cadence.
- Content region width (up to 46rem), not the reading measure.

**No thumbnails, no cards, no rules between rows, no read-time, no excerpt fade.**

---

## Why the framing line matters

Without it, the index is a list of titles — which is the "Index Room" failure from Phase 4: austere, and unreadable to someone who doesn't already know the work.

The framing sentence is what lets a hiring manager decide which investigation is worth opening. **It is the index's entire utility**, and it is one sentence Het writes per investigation.

---

## Ordering

**Reverse chronological by default.**

Considered and rejected: ordering by status (implies a hierarchy among statuses — see `../design-system/STATUS_SYSTEM.md`), and manual featuring (the homepage already features; the index should be neutral).

---

## Growth behaviour

| Volume | Index |
|---|---|
| **1** | **No index page.** The homepage carries it. A list of one is not a list |
| **3** | Index exists. Plain reverse-chronological list. Tight |
| **5** | Same. Still no filtering — five rows fit on one screen |
| **10** | **Domain filter appears** above the list. Plain text controls |
| **15** | Status filter added |
| **25** | Optional domain grouping as an alternative view. Still no search |
| **50+** | Search |

**Nothing structural changes between 3 and 25.** Filters appear *inside* the index, never in navigation.

---

## Filters when they exist

Plain text, above the list, at content width. Active state by persistent non-colour affordance. **Must work without JavaScript** — server-rendered filtered views, or progressive enhancement over a full list.

**No counts next to filter options.** "(3)" beside a domain advertises how few there are.

---

## Density is deliberate

The index is **tight**. A spacious index of three items looks like a placeholder for thirty; a tight one looks like a complete record.

This is the clearest application of `../design-system/DENSITY_AND_WHITESPACE.md` — editorial whitespace belongs around prose, not around metadata.
