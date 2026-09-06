# Return-Visit Model

**Date:** 2026-08-15 · **Conceptual. Nothing here was tested.**

---

## The goal, and the trap

The project goal includes: *"I want people to want to visit it again."*

**The trap is that every conventional answer is forbidden**, and rightly: gamification · daily
counters · streaks · animated widgets · fake live data · infinite feeds · a newsletter · "new post"
badges. All of them manufacture a reason to return rather than providing one.

---

## The reframe the research supplied

From the digital-garden literature, the single most useful line found in 5G:

> Blogs put emphasis on **what is new**. Gardens value content that has earned its authority through
> **repeated updates**.

**This is the answer, and the site already implements it.**

A blog gives you a reason to return by producing new things — which requires a cadence Het cannot
promise, and which fails visibly the moment it stops. The alternative is that **existing things
change**, which requires only that Het keep thinking.

---

## The four mechanisms, ranked by strength

### 1. The revision register — the strongest, and already built

An investigation's foot register records **changed reasoning**, dated. A reader returning after six
months to a piece they have already read finds something they have not: *what the author now thinks
differently, and why.*

**This is the only return mechanism in the corpus that a competitor cannot copy by copying the
design**, because it requires having actually revised something.

5D measured its dependency precisely: it works at three substantial entries and **collapses into a
changelog with weak ones.** The 25-word floor is the operative constraint.

### 2. Status changing — built, and currently silent

`unresolved` becoming `closed`. `open` becoming either. A returning reader scanning the index sees
state that has moved.

**Currently inert:** all three investigations read `self-initiated`, and only one is `unresolved`.
The mechanism is real and it needs a corpus with movement in it.

### 3. Supersession on notes — built

A note gaining a dated correction beneath it. The cheapest possible visible-corrections gesture, and
the one most likely to actually happen, because noticing you were wrong costs nothing to record.

### 4. Accumulation — the weakest, and the one everyone reaches for first

New investigations and new notes. Real, but it is the mechanism that requires the cadence Het cannot
promise, and the one that broadcasts stagnation when it stalls.

**Deliberately ranked last.** A site whose only reason to return is "maybe there's something new" is
a blog with extra steps.

---

## What the site does NOT do

| Rejected | Why |
|---|---|
| "New" / "Updated" badges | A recency claim, and it dates badly the moment it stops being true |
| A changelog page | The revision registers already carry this, attached to the reasoning they changed |
| RSS as a headline feature | May exist quietly; promoting it makes the site a publication |
| Newsletter | A cadence promise |
| Post counts, view counts, streaks | Metrics as credibility, banned |
| Site-wide "last updated" | Broadcasts staleness across pages that are not stale. See `FOOTER_SYSTEM.md` |
| Lynn Fisher's site-version archive | Genuinely the most interesting return mechanism in the corpus, and it rewards visiting *the site as an artefact* rather than the work. Wrong emphasis for a portfolio, and a large build |

---

## The honest assessment

**The return-visit goal is largely unachievable at launch, and the design should not pretend otherwise.**

At three investigations with no revisions, zero notes and a thin GitHub, there is nothing to return
*to*. Every mechanism above is a promise about the second year, not a feature of the first.

**What the design does is ensure the mechanisms exist and are visible when they activate** — the
register renders nothing at zero revisions, the status field is already in every row, supersession
needs no new component. **None of this requires a redesign to start working.** That is the whole
claim, and it is a modest one.

**The dishonest alternative** — which is what most portfolios do — is to manufacture the appearance
of activity through badges, counters and feeds. That would be visible to precisely the technical
reader Het needs, and it would cost more credibility than the return visits are worth.

---

## What would actually make someone return

Ranked by JUDGMENT, not evidence:

1. **They read one investigation and thought the reasoning was good.** Nothing structural competes
   with this. The site's return strategy is, in the end, that the writing is worth returning to.
2. They bookmarked it because they are hiring later.
3. They followed a forward link from a note to an investigation and want to see if the question got
   answered.
4. They remembered the site said something they now disagree with, and came back to check.

**Item 4 is the one the design uniquely enables**, because the conclusions are dated and the
changes are visible. It is a small audience and a real one.

---

## Unvalidated

Everything. No returning-reader journey was simulated, no page was rendered, and the claim that the
revision register reads as a reason to return rests on 5D's Test 19 — which was measured on the
investigation page, not on a return journey across the site.
