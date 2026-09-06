# Homepage Flow

**Date:** 2026-08-15 (Phase 5E)

How a visitor moves through the page and out of it. Positions are MEASURED from the rendered page
at 1280px, prototype banner excluded.

---

## The vertical

| y | Position | What the reader gains |
|---|---|---|
| 0 | Navigation | Where else the site goes |
| 122 | **Het Patel** | Who |
| 189 | Identity / lane | **What he does** — the decisive sentence |
| 508 | **The work** | That the work is professional, and what kind |
| 1524 | Selected investigations | Range, and that each item has a state |
| 2274 | One of them, in full | **How he thinks, and what he could not determine** |
| 3193 | Working on now | Currency |
| 3517 | Contact | How to reach him |
| 3919 | *(end)* | |

Six positions, MAJOR between each. **Approximately 4.4 screens at 1280, 6.6 at 375** — measured, and
longer than the ~3 predicted in `HOMEPAGE_SELECTED_DIRECTION.md`. See `HOMEPAGE_MOBILE.md`.

---

## The intended sequence of realisations

Each position is designed to change what the reader believes, not just to inform them.

| Position | Before | After |
|---|---|---|
| Identity | "another security portfolio" | "he works at an intersection I don't see often" |
| The work | "an intersection he's read about" | "an intersection he has actually stood in" |
| Selected | "one internship" | "and a body of work with states, some of it unresolved" |
| One in full | "he has done things" | **"he thinks in a way I can evaluate"** |
| Now | "as of when?" | "currently active" |
| Contact | — | "and I know how to reach him" |

**Position 4 carries the whole differentiating load.** It is the only place a reader encounters
Het's actual reasoning, and it is deliberately placed after credibility has been established rather
than before — the change from Phase 4's H1 (P5EV-003).

---

## Exits

Every route off the page, and what it is for:

| Exit | From | For |
|---|---|---|
| **Investigations** (nav) | anywhere | a practitioner who wants the index immediately |
| Three work titles | position 3 | a reader following a specific question |
| **"Continue reading — including what changed when I revisited it"** | position 4 | the highest-value exit on the page |
| "All investigations" | position 3 | scanning the range |
| Notes · About (nav) | anywhere | secondary |
| Email · LinkedIn · GitHub | position 6 | the point of the site |

### The continue-reading link is doing unusual work

OBSERVED: it reads *"Continue reading — including what changed when I revisited it."*

That clause advertises the revision register — the site's one genuinely distinctive mechanism —
from the homepage, **without explaining it and without a feature callout.** A reader who follows it
arrives at an investigation whose foot carries dated records of changed reasoning, and the link has
already told them that is what they will find.

It is the only sentence on the homepage that promises something the reader has not yet seen, and it
is doing the job Phase 4's H1 was supposed to do — creating the pull toward depth — at a fraction of
the vertical cost. JUDGMENT: this is the most efficient element on the page.

---

## Entry points other than the top

The homepage is not the only way in, and the flow must survive arriving from elsewhere:

| Arriving from | Lands on | Works? |
|---|---|---|
| Search, on an investigation | investigation page | ✅ The back link and nav reach the homepage; the apparatus establishes state immediately |
| A shared investigation link | investigation page | ✅ Same |
| LinkedIn profile link | homepage | ✅ The designed path |
| A recruiter with the CV | homepage | ✅ Employer named in position 2 matches the CV |

**The site name is not in the homepage header** (E-1) because the name is the `h1` there. On every
other page it is present and is the home link, so the return path exists everywhere it is needed.

---

## What the flow deliberately does not do

| Not present | Why |
|---|---|
| Scroll-triggered reveals | The sequence must work as a static document — Phase 3 forbids IA rescued by motion |
| Sticky navigation | Phase 5B: not sticky |
| Progress indicator | Solves a problem a 4-screen page does not have |
| "Recruiter view" toggle | Layered entry, not audience segmentation |
| Anchor links / in-page contents | At six positions this would be scaffolding around a short page |
| Anything requiring JavaScript | Zero scripts. The flow is document order |

---

## The known break in the flow

**Contact sits at 3517px with no navigation item** (finding E-5 in `HOMEPAGE_HIRING_TEST.md`). A
recruiter scanning for 20 seconds does not reach it.

Everything else in the flow front-loads correctly; this one element is at the back of a four-screen
page and is one of the four things a recruiter is explicitly looking for. **Recommendation: add
`Contact` to the primary navigation** — the one conventional nav item that earns its place, since
professional connection is the site's purpose. Not applied in 5E; it is Het's call and it changes
`NAVIGATION_MODELS.md`.
