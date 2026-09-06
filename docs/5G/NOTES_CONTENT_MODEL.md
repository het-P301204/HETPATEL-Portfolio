# Notes — Content Model

**Date:** 2026-08-15 · **Not visually validated.**

---

## The unit

> **A field note is one observation, written once, that did not need working out.**

The distinction from an investigation is **not length.** It is whether reasoning was required.

| | Investigation | Note |
|---|---|---|
| Trigger | Something needed working out | Something was worth recording |
| Reasoning | Required | Not required |
| "What I couldn't determine" | Required | Not applicable |
| Conclusion | Reached, or explicitly not | Often none |
| Typical length | 400–2,000 words | 50–400 words |
| Correction mechanism | **Revision** — the argument changed | **Supersession** — the observation was overtaken |

**The test, and it is the only one that matters:** *did I notice something?* If not, it is not a note.

---

## Fields

| Field | Required | Displayed |
|---|---|---|
| **date** | ✅ | Above the body. Carries the permalink |
| **body** | ✅ | Serif, body size, reading register |
| **supersession** | — | Dated line beneath, when it happens |
| **forward link** | — | Inline in the body or the supersession line |
| domain | — | **Not displayed.** Reserved for filtering at 50+ |
| status | ❌ | **Notes have no lifecycle** |
| origin | ❌ | Almost always self-initiated — a constant field is noise |

**Three of the four investigation apparatus fields are absent, deliberately.**

---

## Legitimate types

From `FIELD_NOTES_MODEL.md` §3. The prototype exercises five of eight:

| Type | In prototype |
|---|---|
| Technical observation | ✅ TLS scanners disagreeing |
| Security lesson | ✅ evidence satisfying one framework and failing another |
| **Question worth investigating** | ✅ why allow-lists normalise after matching — **and it links forward** |
| Failed approach | ✅ correlating logs by timestamp |
| Experiment result | ✅ rate limiting under parallel requests |
| Design decision | — |
| Short research finding | — |
| Tool comparison | — |

**"Failed approach" and "question worth investigating" are the most valuable types.** Nothing in the
Phase 1 corpus published either. They are honest, cheap to write, and the second doubles as a
visible pipeline of future work without promising anything.

---

## What a note is not

- ❌ **An article.** No introduction, no conclusion, no throat-clearing. **Start at the observation.**
- ❌ **A tutorial.** Het is not positioned to instruct.
- ❌ **A status update.** *"Started learning Kubernetes"* is not an observation.
- ❌ **Content marketing.** No *"here's a thing nobody tells you"* — flagged in `VOICE.md` as both a generated-text and an influencer marker.
- ❌ **An opinion piece.** A technical judgment grounded in something observed is fine; a general take on the industry is not.
- ❌ **A half-finished thought.** This one is a deliberate departure from digital-garden practice, which permits unrefined notes that mutate. **A note is finished — it is just small.** Continuous mutation belongs to investigations, which have a revision register for it.

---

## Writing standard

Inherited from the standard 5D established for revision entries and 5F for framing lines, adapted:

| | |
|---|---|
| **Floor** | It must contain an observation. Not a plan, not a summary, not an intention |
| **Opening** | The first sentence is the observation. No setup |
| **Length** | Whatever the observation takes. **No minimum, no target** |
| **Prohibited** | *"Recently I've been…"*, *"I wanted to share…"*, *"In this note I'll…"* |

The 5F genericity finding transfers directly: a note that says what was **learned** is
interchangeable; a note that says what **happened** is not.

---

## Relationships

```
NOTE
├── standalone                        ← most common, and the expected case
├── spawned from an investigation     a detail that deserved its own note
├── promoted → an investigation       when it turns out to need working out
└── superseded                        overtaken; the original stays
```

**Links must help the reader understand the work.** No relationship link exists to generate
navigation. Most notes will be standalone and that is correct.

---

## Fixture policy

**Every note in `prototype/notes.html` is invented** and the page is banner-marked
**[HYPOTHETICAL VALIDATION CONTENT]**. None of it is Het's work and none may be published.

They exist to test the format: six notes, two supersessions, one forward link to an investigation,
lengths from 30 to 70 words.

**Real content required from Het.** The clean answer to "what should the first notes be" is that
they should already exist — a note is meant to be written when something is noticed, not
commissioned. If nothing has been noticed yet, **Notes does not launch**, and G-1 makes that a
supported state rather than a gap.
