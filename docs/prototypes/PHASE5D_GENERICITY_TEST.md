# Phase 5D — Genericity Test

**Date:** 2026-08-14 · **Status: BUILT, NOT VISUALLY ASSESSED.**

`prototype/genericity-test.html` applies the identical design system — same CSS file, no changes whatsoever — to generic student content for a fictional "Alex Sharma".

**The visual comparison could not be made.** What follows is analysis of the *content* the design system is asked to carry, which can be done by reading.

---

## What the test page contains

A "Network Vulnerability Scanning Lab" investigation — the archetypal student project, drawn from the category patterns measured in Phase 1 research. Same structure, same apparatus fields, same movements.

---

## What can be assessed without rendering

### The apparatus goes informationally flat

| Field | Het's page | Alex's page |
|---|---|---|
| Status | `closed`, `unresolved` across the set | `closed` — and would be on every item |
| Origin | `self-initiated`, but varies with professional work | `self-initiated` — invariant |
| Domain | Varies | Varies |
| Date | Varies | Varies |

**Two of four fields carry no information.** They render identically, but they *say* nothing — and a reader notices an invariant column within about three rows of an index.

**This confirms the Phase 5A prediction**, and it is worth being precise about the mechanism: the apparatus does not look empty. It looks *filled with constants*, which is a subtler and slower-detected failure than a blank region.

### The revision register vanishes

Alex's page has no revision section, because tutorial projects do not get reclassified six months later.

**The single most distinctive element of the design produces nothing.** Not degraded — absent.

### The uncertainty movement degrades into a hedge

Het's: *"whether the ordering was deliberate… would need the change history, and there was none to read."* — specific, bounded, and it names what evidence would settle it.

Alex's: *"how these results would differ in a production environment with proper network segmentation."* — true, generic, and applicable to literally any lab writeup.

**Both occupy the same structural slot with identical typography.** The design cannot distinguish them. **Only the writing can.**

### The prose register collapses

Het's page contains a false start deliberately described (*"My first instinct was to read the configuration, and I deliberately did not"*), an inline inset admitting a wrong assumption, and a conclusion that was later reclassified.

Alex's page contains none of these — not because they were removed, but because tutorial work does not generate them.

---

## The verdict

**The design system would look identical and read completely differently.**

That is exactly the behaviour specified in the approved position: **the system is diagnostic, not unique.** It provides structural slots that only certain content can fill, and it makes the difference legible without decoration.

**But the honest corollary holds in both directions.** If Het's real investigations end with generic hedges, if every status is `closed`, if `origin` never varies and nothing is ever revised — his page becomes Alex's page. The CSS is the same file.

---

## What still needs visual assessment

| # | Question |
|---|---|
| G1 | Side by side, is the difference *felt* or only *noticed on reading*? |
| G2 | Does the generic page look **bad**, or merely **unremarkable**? (Unremarkable is the honest expectation) |
| G3 | Does the invariant apparatus read as flat, or does a reader simply not notice? |
| G4 | Does the absent revision register read as clean, or as missing? |

**G2 is the one that matters.** If the generic page still looks *good*, the design is doing its job as a vehicle and carrying no false claim of distinctiveness. If it looks *bad*, the system is over-dependent on content in a way that would make it fragile for Het too.

**My expectation, stated so it can be checked: the generic page will look perfectly decent and say nothing.** That is the correct outcome, and it is what "diagnostic, not unique" means in practice.

---
---

# VALIDATED — 2026-08-15

**The status line at the top is superseded. Both pages were rendered and compared.**
Neither was redesigned. Method and evidence labelling:
[`PHASE5D_VALIDATION.md`](PHASE5D_VALIDATION.md) §1.

## Result

**The design system carries no distinctiveness whatsoever.**

OBSERVED at 1280 under identical CSS: the "Alex Sharma" page and the Het page are visually
indistinguishable. Same warm ground, same Newsreader, same grey sans apparatus in the same four
fields, same movement rhythm, same region labels. Placed side by side with the names removed,
there is nothing in the *visual system* by which a reader could tell which portfolio they are
looking at.

MEASURED: identical left edges, identical column width, identical spacing scale, identical type
sizes. The only geometric difference is page length — 1,566px against 3,098px — which is a
consequence of content volume, not of design.

This was always the theory. Seeing it rendered is different from asserting it, and it should be
stated without softening:

> The design system is a neutral vessel. It will present generic content just as handsomely as it
> presents good content. It cannot fail gracefully.

## What actually differentiates the two — all of it content

### 1. Decisions with reasons, versus activities in sequence

The single clearest difference, and it appears in the first movement of each page.

| | |
|---|---|
| **Het** | *"My first instinct was to read the configuration, and I deliberately did not. Reading the rule first tends to make you see what you expect to see…"* |
| **Alex** | *"I set up three virtual machines and configured a vulnerable target… I then ran Nmap for service enumeration, Nikto for web server checks, and OpenVAS…"* |

One describes a choice and why it was made. The other describes a sequence of actions. Both are
true accounts of doing work; only one is an account of *thinking*.

### 2. Uncertainty with teeth

| | |
|---|---|
| **Het** | Ten lines. Names two competing explanations, and says why the distinction changes what the correct fix would be. |
| **Alex** | One line — *"how these results would differ in a production environment with proper network segmentation"* — about a situation never encountered. |

Both pages have a "what I could not determine" movement. The structure is identical. Alex's is a
hypothetical gap; Het's is a real limit reached during real work, with consequences. OBSERVED: the
length difference alone changes the reading — Het's uncertainty is the longest paragraph on the
page, Alex's is the shortest.

### 3. The revision register

Present versus absent. This is the only *structural* difference between the two pages, and it is
structural only because Alex has nothing to put there.

### 4. Self-correction inside the prose

*"Worth remembering that the order I would choose is not evidence of the order that exists."*

There is no counterpart. A sentence that corrects the author's own reasoning habit cannot be
produced by someone documenting a completed exercise.

## The finding that matters most

**The four-movement structure is present in both pages and reads identically in both.**

Question → what I did and why → what I found → what I couldn't determine. Alex's page follows it
exactly. It is a perfectly serviceable container for "I built a lab and ran three scanners", and
it makes that content look considered.

**The structure is a container, not a differentiator.** This confirms the brief's own design
insight — that the potentially distinctive mechanism is not metadata and not structure, but how
thinking changes over time — and it narrows the claim further:

- The **apparatus** does not differentiate (confirmed independently: it renders as an ordinary
  byline).
- The **movement structure** does not differentiate.
- The **type, colour and spacing** do not differentiate.
- The **revision register differentiates only if it contains changed reasoning**, and it collapses
  into a changelog when written weakly — see [`PHASE5D_REVISION_TEST.md`](PHASE5D_REVISION_TEST.md)
  RV-2.

## Consequence for the project

The exit condition for this portfolio is a **writing standard**, not a design standard. The design
is now validated as competent, accessible, fast and free of generic-portfolio patterns — and none
of that will distinguish Het from a well-templated peer.

Three things do, and all three are things he has to write:

1. Reasoning that shows decisions and the reasons for them.
2. Uncertainty that names real limits and their consequences.
3. Revisions that record changed conclusions, at the 25-word floor established in RV-2.

**No visual gimmick should be introduced to compensate.** The anti-genericity audit
(MEASURED, zero hits across 11 categories of generic pattern) confirms none has been. The correct
response to this test is not to make the design louder — it is to hold the writing to the standard
the design is built to display.
