# Work / Investigation Index — Flow

**Date:** 2026-08-15 (Phase 5F)

---

## Where the index sits

```
                    ┌─────────────────────────────┐
HOME ───────────────► selected work (3, curated)  │──► INVESTIGATION
  │                 └─────────────────────────────┘         ▲
  │                                                         │
  └── "All investigations" ──► 5F INDEX (everything) ───────┘
                                     ▲
                          nav "Investigations"
                                     │
                        ◄── back link from any investigation
```

**Two routes in, one route out.** The index has exactly one kind of exit — an investigation — which
is what keeps it a map rather than a destination.

---

## The page

| | |
|---|---|
| `h1` | **Investigations** |
| lede | *"Questions I worked through, written up with what I found and what I could not determine. Some are closed. Some are not."* |
| `h2` | **The record** |
| rows | title · framing · record |
| closing note | how origin is used; what the engagement/investigation distinction means |

**The lede does two jobs in two sentences.** It defines the unit — *questions I worked through*, not
articles, not projects — and it pre-empts the reader's reaction to `unresolved` before they meet it:
*"Some are closed. Some are not."* Stating that as ordinary rather than exceptional is what stops
`unresolved` reading as a defect when it appears three rows later.

**"The record"** rather than "All investigations", "Latest", "Archive" or "My Projects". It names
the thing as a record of work, and it carries no recency claim. Het's brief bans the generic
alternatives; this is the wording that survived.

---

## Reading order within a row

The three lines are ordered by what a scanning reader needs, in order:

1. **Title** — *is this relevant to me?* Accent, underlined, 1.25rem. The only tappable element.
2. **Framing** — *is it worth opening?* 1rem, secondary. The index's entire utility.
3. **Record** — *what kind of work, what state, when?* 13.5px, muted, trailing.

A reader who only reads titles gets a list of problems. A reader who reads titles and framings can
choose. A reader who needs provenance has it. **Each layer is optional and none blocks the next** —
which is the layered-entry principle that has governed the site since Phase 3, applied at row scale.

---

## Exits

| Exit | Purpose |
|---|---|
| **Investigation title** | The only exit that matters. One per row |
| Site name → home | Return path |
| Nav: Notes · About | Secondary |
| Footer email | Terminal |

**No exits to GitHub from the index.** Repositories are reached *through* an investigation's
artifact, never listed here — `GITHUB_RELATIONSHIP.md` makes GitHub artifact-level, and a link from
the index would make repository count legible as a number.

**No "load more", no pagination, no filter controls at launch.** The page is the whole record.

---

## Arriving from elsewhere

| From | Works? |
|---|---|
| Homepage "All investigations" | ✅ The designed path |
| Nav from any page | ✅ Marked `aria-current="page"` |
| Back link from an investigation | ✅ Returns here, not to the homepage |
| Search engine, directly | ✅ `h1` and lede establish what the page is without context |

**The back link on an investigation points here, not home.** A reader who arrived from the homepage
and clicks back lands on the index — which is more useful than where they came from, because it
shows them the alternatives. This is a deliberate small asymmetry.

---

## Interaction

Deliberately almost none.

| Present | |
|---|---|
| Link hover | colour shift to `--accent-hover`. No lift, no underline animation, no background |
| Focus | 2px accent outline at 3px offset — the site-wide standard |

| Absent | |
|---|---|
| Row hover backgrounds | Would make rows read as cards |
| Expand-in-place previews | The investigation page is the preview |
| Animated filters, sorting, cursor effects, parallax, infinite scroll | Banned; none needed |

**MEASURED: zero transitions, zero animations, zero transforms, zero scripts.** `prefers-reduced-motion` is moot because there is no motion to reduce.

---

## When grouping arrives (~10–12 items)

```
The record

  Regulated assurance
    ▸ row · row · row
  Application security
    ▸ row · row · row
```

Group headings are inserted **above rows that do not themselves change**. Chronology demotes to
within-group ordering. No control appears — grouping is structural, not interactive, and works
without JavaScript.

This is the only change to the flow across the entire 3→30 range.
