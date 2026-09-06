# Work / Investigation Index — Genericity Test

**Date:** 2026-08-15 (Phase 5F)

`prototype/investigations-genericity-test.html` applies the **identical** design system, the
**identical** row structure and the **identical** CSS to generic content for a fictional "Alex
Sharma". Nothing was redesigned. Both rendered at 1280 and compared.

The generic content is a *competent* early-career index, not a strawman — no banned vocabulary, no
badges, no skill bars. It is drawn from the five project titles on Het's own resume, which
`SOURCE_OF_TRUTH.md` §3 notes sit in the category reviewers "have seen four hundred of."

---

## Result

**This is the sharpest of the three genericity tests**, because the discriminator lands in the
**titles** — the highest-attention, lowest-effort element on the page.

### The two title columns, verbatim

| Het | Alex |
|---|---|
| Why my detection kept firing four hours late | Network Vulnerability Scanning Lab |
| Two enumeration tools disagree on the same host | Phishing Simulation Project |
| Why an allow-list kept failing open | Secure Login System |
| | Incident Response Simulation |
| | Cloud Security Configuration Lab |

**Het's titles name a problem that occurred. Alex's name a thing that was made.**

Every one of Alex's could be a course assignment. None of Het's could — a title beginning *"Why"*
or *"Two tools disagree"* asserts that something unexpected happened and was investigated, which is
a claim a completed exercise cannot make.

**This is visible without reading a single framing line.** On the investigation page (5D) the
difference required a full read. On the homepage (5E) it required the first screen. **Here it
requires only the title column** — which is exactly what a scanning reader consumes.

---

## The three differences, all content

### 1. Titles: problems versus deliverables

As above. The single fastest tell, and the one that survives skimming.

### 2. Framing: what happened versus what was learned

| Het | Alex |
|---|---|
| *"a constant offset means something is being converted rather than dropped"* | *"to gain hands-on scanning experience"* |
| *"Three explanations fit the evidence equally well and I could not separate them"* | *"to learn secure application design principles"* |
| *"I wanted to know where the gap … was coming from"* | *"to build familiarity with the process"* |

Alex's framing lines are, without exception, about **his own education**. Het's are about **the
work**. Alex's index describes a curriculum; Het's describes a practice.

Note the structural consequence: Alex's framings all end in a purpose clause, so they are
interchangeable. Any of them could be attached to any of his projects.

### 3. The record: variation versus uniformity of *values*

| | Het (at scale) | Alex |
|---|---|---|
| Statuses used | `closed`, `unresolved` | `closed` only |
| Origins used | `self-initiated`, `professional`, `academic` | `self-initiated` only |
| Spans | `2026`, `2026–`, `2025–2026` | `2026`, `2025` |

**The metadata schema only earns its place when its values vary.** Alex's record line is three
identical facts repeated five times — structurally present, informationally empty. Het's carries
`unresolved`, which no generic portfolio offers, and (once professional investigations exist)
`professional`, which is his scarcest signal.

**This cuts both ways and applies to Het today.** All three current entries read `self-initiated`,
so his origin field is currently as empty as Alex's. Recorded as finding **I-2**.

---

## What the design contributes, stated precisely

**Nothing, and something.**

**Nothing:** Alex's index is exactly as handsome as Het's. Same warm ground, same Newsreader, same
uniform record, same restraint. If Alex wrote better titles his page would be just as good. The
design is a neutral vessel — the 5D conclusion is unchanged for the third time.

**Something:** the row structure **forces the title into the dominant position** and gives the
framing sentence a fixed, visible slot that cannot be filled with an excerpt. A card grid would have
let a thumbnail carry the row; a date-led list would have let recency carry it. This structure
carries nothing, so the title and the sentence have to.

> The architecture does not create differentiation. It removes every place to hide.

---

## Anti-genericity audit — index

MEASURED across `investigations.html`, the five fixtures, and the index rules in `style.css`:

| Pattern | Count |
|---|---|
| cards · tiles · thumbnails | **0** |
| status pills · badges · coloured dots | **0** |
| category chips · tag clouds | **0** |
| rules or borders between rows | **0** |
| excerpts · ellipsis truncation · "read more" | **0** |
| read-time · author byline | **0** |
| counts ("12 investigations") | **0** |
| GitHub graph · stars · followers · language bars | **0** |
| hover-lift · animation · transition · transform | **0** |
| images · SVG · icons | **0** |
| "My Projects" · "Featured Projects" · "Latest" | **0** |
| filters or search at launch volume | **0** |

**Status carries no colour at any volume**, per `STATUS_SYSTEM.md`. `unresolved` is rendered
identically to `closed` — same size, same weight, same colour, no glyph, no opacity change. The
greyscale test passes trivially because there is nothing but greyscale.

---

## Verdict

**PASS**, and the standing caveat is now specific enough to act on.

The index is not generic **because of how the work is titled and framed**. Two writing rules follow,
and they are more useful than any design instruction:

> **1. Title the problem, not the deliverable.** *"Why an allow-list kept failing open"*, not
> *"Allow-list configuration project"*.
>
> **2. Frame what happened, not what you learned from it.** A framing sentence that ends in
> "to gain experience in…" is interchangeable with every other one, and interchangeable is the
> definition of generic.
