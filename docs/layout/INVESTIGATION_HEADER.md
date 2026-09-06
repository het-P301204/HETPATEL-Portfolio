# Investigation Header Geometry

**Date:** 2026-08-14 (Phase 5B) · Spatial architecture only. No type, no colour.

---

## Sequence

```
[ back to investigations ]        utility, small, above the title
TITLE                             L1, one to two lines
status · date · domain · origin   head apparatus, TIGHT below title
                                  ── OPEN ──
The question.                     first prose paragraph
```

**Four elements before the argument begins.** Nothing else.

---

## What is deliberately absent

| Absent | Why |
|---|---|
| An "Investigation" label | The URL, the index and the page structure already say what it is. A label is decoration |
| A standfirst / deck | Would duplicate the question, which is the real opening |
| A hero area | Delays content for a reader who came to read |
| A cover image | No imagery policy; nothing to show |
| Reading time | Derived metadata; decorative. Length is visible from the scrollbar |
| Author | One-author site |
| Share controls | Not a publication |
| A large role/context block | Belongs on About or inside the reasoning |

**"Short context" was considered and rejected as a separate element.** It duplicates the question's job. If context is needed, the question's paragraph carries it — which is how a person actually opens an explanation.

---

## Title geometry

- **Left-aligned**, full reading measure, one to two lines at desktop.
- Long titles wrap rather than shrink.
- Set as a phrase or question, not a claim (`../design/VISUAL_METAPHOR.md`).
- MAJOR space above it, from the header; TIGHT below, into the apparatus.

---

## The head apparatus

Four pairs, running inline across the measure at desktop:

```
open · 2026-03-14 · application security · professional
```

or as labelled pairs if 5C finds bare values ambiguous — **that is a typographic decision, not a spatial one.**

- TIGHT internal spacing; density is the register signal.
- Wraps to two or three rows below ~600px.
- Values are words. No pills, no colour, no icons.

---

## Why the apparatus sits below the title, not above

Considered: a metadata line above the title (common in editorial design).

**Rejected.** Metadata above the title is read *before* the reader knows what the piece is, which makes it noise. Below the title it is read as *facts about this thing I now know exists* — which is the correct order for orientation.

---

## Why this is not a portfolio hero

| Portfolio hero | This |
|---|---|
| Fills the viewport | Occupies ~4 elements |
| Image-led | No image |
| Claims an outcome | States a question |
| Delays content | The question is the first paragraph |
| Decorative metadata | Four factual fields |

**The reader reaches prose within the first screen at every viewport.** That is the test.

---

## Back navigation

A small utility link above the title (`← Investigations`). Placed there rather than only in the site header because deep-linked visitors — journeys 3 and 4 — arrive here without having seen the index.

TIGHT above the title, small, subordinate.

---

## Validation for 5D

1. Does the question appear above the fold at 375px?
2. Does a two-line title still leave the apparatus visually attached to it?
3. Do four inline pairs wrap gracefully at 480px?
4. Does the header read as orientation rather than as a hero?
