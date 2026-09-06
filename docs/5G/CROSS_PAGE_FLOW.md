# Cross-Page Flow

**Date:** 2026-08-15 · **Structure verified by inspection. VISUAL COHERENCE NOT VALIDATED.**

---

## The site

```
                    ┌──────────────────────────────┐
                    │  HOME  (index.html)          │
                    │  identity · the work ·       │
                    │  selected · one in full ·    │
                    │  now · contact               │
                    └───┬──────────────┬───────────┘
                        │              │
           "All investigations"     nav / footer
                        │              │
                        ▼              ▼
        ┌───────────────────────┐   ┌─────────────────────┐
        │ INVESTIGATIONS        │   │ ABOUT               │
        │ the record            │   │ person → facts      │
        └───────────┬───────────┘   └─────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │ INVESTIGATION         │
        │ question → reasoning  │
        │ → finding → limits    │
        │ → artifacts           │
        │ → revisions           │
        └───────────────────────┘

        NOTES — exists only once a note exists (G-1)
```

**Four surfaces at launch. Five once notes exist.**

---

## Navigation — the launch state

**`Het Patel · Investigations · About`**

Notes is **absent**, because zero notes exist. See G-1 in `PHASE5G_FINDINGS.md` — this corrects a
defect that survived three phases.

| Page | Header shows | Marked current |
|---|---|---|
| Home | nav only (the name is the `h1`) | — |
| Investigations | name + nav | Investigations |
| Investigation | name + nav | Investigations |
| About | name + nav | About |
| Notes *(later)* | name + nav | Notes |

**An investigation marks `Investigations` as current**, not nothing. A reader deep in a piece should
see where they are in the site, and the piece is not itself a nav destination.

---

## Return paths

| From | Back to | Mechanism |
|---|---|---|
| Investigation | **Investigations**, not home | `← Investigations` back link |
| Any page | Home | Site name in header |
| Any page | Anywhere | Footer nav |

**The back link points to the index rather than home, deliberately.** A reader who finishes an
investigation is better served by the alternatives than by the front door. This is a small
asymmetry and it is the one navigational opinion the site holds.

---

## What is shared across every page

| Element | Shared |
|---|---|
| Stylesheet | **One file.** No page has its own CSS |
| Ground, type, accent, spacing scale | Identical |
| Measure | `--box`, one value, **one left edge on every page** |
| Header | Same structure, same position |
| **Footer** | **Identical on all seven pages** — new in 5G |
| Region labels | Same treatment on home, index, about |
| Link language | Accent + underline for navigation to work; secondary for utility |
| Motion | None, anywhere |

**Before 5G the footer differed between pages** — some carried GitHub, some did not, and the markup
differed. That is the kind of drift that makes a site feel like several templates, and it was
invisible in every single-page test.

---

## Where the surfaces deliberately differ

Coherence is not uniformity. Three intentional differences:

| | Home | Index | Investigation | Notes | About |
|---|---|---|---|---|---|
| Reads as | portfolio | body of work | **editorial** | record of observations | a person |
| Item metadata | status · origin | origin · status · span | full apparatus | **date only** | — |
| Ordering | curated | reverse-chron | — | **reverse-chron, correctly** | — |

**The investigation page reading as editorial is correct and measured** (5D §17). T9 requires only
that the homepage not inherit it.

**The apparatus scaling from four fields to one is the clearest expression of the system working** —
same design language, weight matched to what the content actually carries.

---

## The five-page journey

`HOME → INVESTIGATIONS → INVESTIGATION → ABOUT → CONTACT`

| Step | The reader gains |
|---|---|
| Home | Who, what lane, what work, one piece of reasoning |
| Investigations | The full range, with state visible |
| Investigation | How he actually thinks, and what he could not determine |
| About | Why he works this way; the checkable facts |
| Contact | How to reach him — reachable from the footer at any point |

**The one thing this journey does not do is answer "how do I contact him" quickly.** Contact sits
last on the homepage (finding E-5, unresolved) and last on About. **The 5G footer partly fixes this**
by putting the email on every page at every scroll position — which was not its stated purpose, and
is arguably its most useful effect.

---

## What remains unvalidated

**All of it, visually.** The structure above was verified by reading the files; **not one page was
rendered in 5G.**

Specifically untested:

1. Whether the five surfaces feel like one site.
2. Whether the footer looks identical in practice as well as in markup.
3. Whether Notes and About sit in the same visual family as the three validated surfaces.
4. Whether the apparatus scaling reads as a system or as inconsistency.
5. Whether the reader ever feels *"why did I land on a different website?"* — **the question the
   phase existed to answer.**
