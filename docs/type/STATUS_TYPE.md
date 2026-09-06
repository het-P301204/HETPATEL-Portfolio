# Status Typography

**Date:** 2026-08-14 (Phase 5C)

**Established:** status is a word in the apparatus. No pills, no colour, no icons.

---

## Specification

| Property | Value | Reason |
|---|---|---|
| Family | Public Sans | Apparatus register |
| Size | 15px (apparatus value size) | One value among four; no privilege |
| Weight | 400 | Same as every other value |
| **Casing** | **lowercase** | See below |
| Tracking | 0 | — |
| Colour | Secondary text role | **No status-specific colour** |
| Container | None | — |
| Placement | First pair in the head apparatus | Most-referenced value |

---

## Lowercase, deliberately

`open` · `closed` · `unresolved` · `archived` · `planned`

**Not** `OPEN` (dashboard/badge signal, and a measured genericity marker), **not** `Open` (title case implies a proper noun or a section name).

Lowercase reads as a **property**, which is what it is. It also keeps the status visually level with `application security` and `professional` — the other apparatus values — reinforcing that status is one fact among several rather than a headline state.

---

## All five are visually identical

| Status | Treatment |
|---|---|
| `open` | Standard |
| `closed` | Standard |
| `unresolved` | **Standard — identical** |
| `archived` | Standard |
| `planned` | Standard |

**`unresolved` receives no distinguishing treatment of any kind.** No italic, no colour, no reduced opacity, no marker.

This is the most important rule in this document. `unresolved` means *"I investigated this and did not reach a satisfactory conclusion"* — an honest, respectable outcome that no other portfolio in the research corpus offers. **Marking it as different would signal it is a lesser class of work, inverting the site's central premise.**

---

## The accent question, settled

`../design-system/STATUS_SYSTEM.md` permitted the accent on `open` as an optional wayfinding cue, defaulting to absent.

**5C recommendation: no accent on any status.**

Reasons: it would be the only place colour carries state, creating an exception in an otherwise colour-free system; it implies `open` is more important than `unresolved`; and the accent budget is better spent entirely on links, where it does navigational work.

**Revisit only if 5E shows a genuine wayfinding failure on the index.**

---

## In the index

Same treatment, in the metadata line beneath each title, at 13.5px:

```
closed · 2026-03 · application security · self-initiated
```

**No status column, no aligned markers.** An index where the eye runs down a strip of status indicators has become a dashboard, and the item titles — which carry the real hierarchy — would lose that competition.

---

## Filtering (from ~15 items)

Filter controls use the same lowercase words at apparatus size. Active state by a persistent non-colour affordance — underline or weight. **No counts beside options**: `unresolved (1)` advertises how few there are.
