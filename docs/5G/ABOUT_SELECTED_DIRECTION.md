# About — Selected Direction

**Date:** 2026-08-15 · **Direction B — INVERTED ALLOCATION** (Phase 5B, retained)
**Built as `prototype/about.html`. NOT visually validated.**

---

## The idea

> **Make the person legible. Let the facts confirm rather than argue.**

Credentials rank low in the trust model, so they get one compact block, sixth of seven.

---

## Sequence

```
Identity                two sentences
  MAJOR
What I work on          FOUR paragraphs — the largest block
  MAJOR
How I write this up     two paragraphs
  MAJOR
Experience              four paragraphs + one calibrating aside
  MAJOR
Where this is going     two sentences
  MAJOR
Background              .facts — compact reference
  MAJOR
Contact                 email · LinkedIn · one sentence
```

**Voice occupies blocks 1–5. Facts occupy block 6.** Roughly two-thirds to one-third, as specified.

---

## The decisions inside it

### Identity — two sentences, one with an edge

> *"I am an early-career security practitioner. I test web applications, and I work on the
> compliance side of the same problem — which turns out to be the part most people skip."*

The second clause is the whole page's argument compressed. It is a claim with a point of view,
which `REFERENCE_SITES.md` identifies as the durable differentiator: *a point of view is more
memorable and more defensible than a skill list.*

**"Early-career" leads.** Stating the stage plainly is what makes everything after it believable,
and it is the line `POSITIONING.md` insists the brand sits exactly on.

### What I work on — split by area, ending on the space between

Testing, then assurance, then the intersection. The fourth paragraph is the one that matters:

> *"A tester asks whether something is exploitable. An audit asks whether the organisation can
> demonstrate that it manages the risk."*

That sentence is the positioning, stated as a technical distinction rather than as a claim about
himself. **It is the most defensible form of the argument** because a reader can check it against
their own experience.

Two sentences in this block are load-bearing for anti-genericity, and both make a claim only
someone who has done the work would make: *"the difficult skill is not finding a weakness"*, and
*"I came to this expecting it to be paperwork. It is not."*

### How I write this up — an addition to the 5B sequence

Not in `ABOUT_LAYOUT.md`. Added because the site's two most distinctive mechanisms — required
uncertainty and the revision register — are **never explained anywhere**, and a reader who has not
yet opened an investigation cannot tell they are deliberate rather than accidental.

> *"When I get something wrong I say so on the page, with a date, rather than editing it away."*

**Held to two paragraphs, and describes what he does rather than what readers should do.** This is
the block at risk of becoming a manifesto (concept C), which `VOICE.md` forbids at this career stage.

### Experience — prose, with the ceiling stated

Employer named, period stated, method described, CSCRF/IRDAI attributed per the 2026-08-15
clearance, and then:

> *"I assisted on that work — I did not scope it, own it or lead it, and I am not an auditor."*

**The ceiling is stated by Het rather than discovered by the reader.** Unprompted role precision on
team work reads as maturity, and it is the single strongest credibility move available to someone
whose exposure exceeds his seniority.

The calibrating aside carries the three anti-overclaim facts: seven months is exposure not
expertise, ISO 27001 is a working understanding not a specialism, Splunk is lab work not production.

**No sentence anywhere draws attention to what is withheld.** `CONFIDENTIAL_WORK_MODEL.md` §1.

### Background — facts, compact, sixth

A `<dl>` at apparatus register: Education · In progress · Certifications · Code.

- **Certifications are one prose line**, not a list of eight items and not a grid. Named
  certificates, then *"16 Credly certifications in cloud, networking and security fundamentals"* —
  exact per `SOURCE_OF_TRUTH.md` rule 6, and not a headline per `ABOUT_LAYOUT.md`.
- **GitHub is described honestly:** *"Currently thin; I am rebuilding it."* No graph, no stars, no
  followers. Saying it is thin is more credible than linking to it silently and letting a reader
  discover that themselves.
- **No portrait.** Optional in 5B, and the page is complete without one.

### Contact — three lines, no ceremony

Email, LinkedIn, and one sentence of intent: *"I am interested in security engineering and assurance
roles, and in talking to people doing this work."*

**No form** — abuse surface, no benefit at this scale. **No availability banner** — dates badly.
**No CTA block.** The sentence states the intent that a "Let's work together!" heading would shout.

---

## What is deliberately absent

| Absent | Why |
|---|---|
| Skills list / tech stack | Metadata masquerading as content. Tools appear inside method |
| Certification wall, badges, logos, grid | Trust model ranks these low |
| Timeline graphic | A dated paragraph is more precise and implies no longer history than exists |
| Long autobiography | Two or three paragraphs is the ceiling |
| *"My journey into cybersecurity"* | Banned register |
| Downloadable CV as the main event | May exist as a plain link, low. **Not yet decided** |
| The roadmap | Reached from here at most, never promoted |
| Location | Excluded from the entire site by standing constraint |
| Testimonials | None exist |

---

## What remains unvalidated

1. **Page length.** `ABOUT_LAYOUT.md` caps About at three screens and warns that beyond it the page
   *"has become a résumé dump."* Seven blocks at MAJOR spacing, with a four-paragraph and a
   four-paragraph block, is plausibly over. **This was never measured and it is the most likely
   defect in the page.**
2. **Whether `.facts` reads as reference material or as a résumé table.** New CSS, never rendered.
3. **`.facts` at 320px** — a `max-content` label column with "Certifications" as the longest label.
   5D found exactly this class of defect in the apparatus grid.
4. **Whether seven blocks read as one coherent document** or as a stack of labelled sections.
