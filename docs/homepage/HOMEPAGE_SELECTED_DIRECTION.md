# Homepage — Selected Direction

**Date:** 2026-08-15 (Phase 5E) · **Direction E — THE STANDING RECORD**

---

## The idea in one line

> **A structured record of a working security practitioner, in which the investigations are the evidence rather than the product.**

Identity states the lane. Experience shows the work at method level. Selected work shows range. One investigation shows the thinking, including its limits. The page ends by saying what is being built next, and how to make contact.

---

## Sequence

```
site identity + navigation                header, small

IDENTITY                                  who · what · where · at what stage
                                          3 sentences, plain, complete at 375px
        ── MAJOR ──
THE WORK                                  professional experience at METHOD level
                                          role precision; testing ∩ assurance
        ── MAJOR ──
SELECTED INVESTIGATIONS                   3-5 items; status + origin, not date-first
                                          → all investigations
        ── MAJOR ──
ONE IN FULL                               question + one reasoning move
                                          + one thing not determined
                                          → continue reading
        ── MAJOR ──
WHAT I'M WORKING ON NOW                   current direction. Omitted if nothing true
        ── MAJOR ──
CONTACT                                   email · LinkedIn · GitHub
```

**Six positions, each earning its place, none named after a resume heading.** There is no Skills section, no Certifications section, no Projects grid, no roadmap, no photograph, no stat counter, no availability banner.

---

## Why each position exists

### 1 — Identity

The single highest-value block on the site. It must name the **lane** — technical security testing and regulated assurance — because the research is unambiguous that a reader who cannot place someone in about five seconds leaves.

It must also state the **stage** plainly. "Early-career" is not a hedge here; it is what makes everything after it believable, and it is the line `POSITIONING.md` insists the brand sits exactly on.

**Not:** a hero, a tagline, display type, an animated line, a mission statement, or a portrait. Three sentences at body size. **Binding constraint: complete without scrolling at 375px.**

### 2 — The work

**The change from Phase 3.** This is the strongest verified asset and it previously had no position of its own (P5EV-004).

Presented at **method level** — what kind of work, what he actually did, where testing and assurance meet. Not company/title/dates/bullets: that is a resume reproduction, and the resume already exists.

Governed absolutely by `CONFIDENTIAL_WORK_MODEL.md`: framework names yes; client identity, findings, counts, systems, correlatable dates never. **Discretion is demonstrated by being unremarked** — no "[REDACTED]", no NDA note, no sentence drawing attention to the boundary.

Role precision is mandatory: *worked on*, *assisted with*. Never *conducted*, never *led*.

### 3 — Selected investigations

**Not a card grid. Not a blog index.** A short list where each item carries its **status and origin** rather than leading with a date — because date-led lists are the form of a publication and status/origin are the form of a portfolio.

`origin: professional` does silent work here: it distinguishes engagement work from lab work without a word of explanation.

Grows into thematic grouping (Kettle) at ~8 items. At three, it is simply a short list.

### 4 — One in full

**The surviving core of Phase 4's H1.** A visitor who reads only the homepage must still leave having seen genuine reasoning and one thing Het could not determine.

Reduced from H1's ~45% excerpt to a compact block: the question, one real reasoning move, and one real admitted limit. Enough to *show* the behaviour; not so much that the homepage becomes an article.

**Selection rule (carried from 5B):** prefer an `open` investigation over a `closed` one when both are recent. This is the safe residue of Phase 4's rejected "standing question" — it surfaces live work without promising a cadence.

### 5 — What I'm working on now

Currency without a cadence promise. One or two lines of genuine current direction.

**Omitted entirely if there is nothing true to say.** This position is the one most likely to go stale, and a stale "now" is worse than no "now" — so it is explicitly optional and must carry a date.

### 6 — Contact

Email, LinkedIn, GitHub. Plain text links. No form, no "let's build something amazing", no newsletter, no social wall.

---

## Standing rules adopted with this direction

**The binding rule (from concept F).** No capability claim appears anywhere on the homepage unless the thing that evidences it is named in the same sentence. There is no list of tools. If a tool is named, it is named inside a sentence about work that was done with it.

**The chronology rule (P5EV-005).** Work is never presented date-first on the homepage. Status and origin lead.

**The disappearance rule.** Any position with no true content is removed, not emptied. Positions 3, 4 and 5 are all individually droppable.

---

## Behaviour by content volume

| | 1 investigation | 3 *(launch)* | 8 | 25 |
|---|---|---|---|---|
| Identity | ✅ | ✅ | ✅ | ✅ |
| The work | ✅ | ✅ | ✅ | ✅ |
| Selected investigations | ❌ omitted | ✅ 3 items | ✅ 5, grouped | ✅ 5, grouped |
| One in full | ✅ | ✅ | ✅ | ✅ |
| Working on now | ◐ if true | ◐ | ✅ | ✅ |
| Contact | ✅ | ✅ | ✅ | ✅ |
| Approx. length | ~2 screens | ~3 | ~3.5 | ~3.5 |

**At one investigation the page is identity, the work, that investigation, and contact — and it ends.** No preview of one item, no "more coming soon". **At 25 it does not grow further**; the selected list stays at five and gains grouping. The homepage is an entrance, not a directory.

---

## What this direction gives up

Stated plainly, because it is a real cost.

**Distinctiveness at five seconds.** Phase 4's D opens with someone's unresolved reasoning, and nothing in the corpus does that. Moving the investigation to position 4 means the most unusual thing about the site is no longer the first thing seen.

**The trade accepted:** distinctiveness that is only legible after five minutes does not survive a reader who leaves at five. The homepage buys the five minutes; the investigation spends them.

**If the rendered tests show the page reads as portfolio but forgettable** — clear, correct, and failing the 5-minute memory test — the correction is to move position 4 above position 3, not to add decoration.

---

## Relationship to the investigation page

| | Homepage | Investigation |
|---|---|---|
| Subject | **the person** | the reasoning |
| Reads as | **portfolio** | editorial — and that is correct |
| Ordering | status and origin | chronological within the piece |
| Voice | same | same |
| Type, colour, spacing, restraint | **identical** | identical |

**One design system, two information hierarchies.** No second visual language is created. Everything in `prototype/style.css` as validated in 5D is reused unchanged, and any new rule needed for the homepage is added to that same file.
