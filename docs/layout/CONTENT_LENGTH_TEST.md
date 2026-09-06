# Content Length Test

**Date:** 2026-08-14 (Phase 5B) · Geometry tested at three lengths. No content invented.

---

## SHORT — ~150 words

```
title
head apparatus              status · date · domain · origin
  OPEN
question                    1 paragraph
  OPEN
what I did + found          1–2 paragraphs (may merge)
  OPEN
what I couldn't determine   1 sentence
```

| Property | Behaviour |
|---|---|
| Vertical rhythm | Full scale. **Not compressed** — compressing would make it look like a fragment rather than a short piece |
| Apparatus | Head only. Foot and insets render nothing |
| Whitespace | The page ends after the last sentence. ~1 screen at desktop |
| Balance | **The head apparatus is a meaningful fraction of the page.** Intended — it gives a short piece factual substance |
| Risk | Looks thin |
| Mitigation | Page ends where content ends; no padding, no minimum height, no reserved regions |

**The honest position:** a 150-word investigation *is* small, and the design should not disguise that. What it must avoid is looking **unfinished** — which is prevented by the head being complete and the page terminating cleanly.

---

## MEDIUM — ~500–800 words

**The intended default.**

| Property | Behaviour |
|---|---|
| Vertical rhythm | Full scale; the OPEN gaps clearly mark four movements |
| Apparatus | Head; possibly one inset |
| Whitespace | Balanced. ~2–3 screens desktop |
| Balance | **Best case for the system.** Apparatus is proportionate, movements are legible, the page has shape |
| Risk | None significant |

---

## LONG — 1,500–2,500+ words

| Property | Behaviour |
|---|---|
| Vertical rhythm | Same scale. Internal headings (L2) permitted within long movements |
| Apparatus | Head; two or three insets likely; foot register if revised |
| Whitespace | Consistent; the page is simply long |
| Balance | Apparatus becomes a small fraction — correct |
| **Risk** | **Monotony.** A long single column with no rules and few headings can flatten |
| Mitigation | Genuine variation in paragraph length; insets breaking the texture; permitted internal headings; possibly one figure |

**The monotony risk is real and is the main reason internal headings are permitted at length.** It is `LAYOUT_FAILURE_TEST.md` F10.

---

## Comparison

| | Short | Medium | Long |
|---|---|---|---|
| Rhythm scale | Full | Full | Full |
| Apparatus share | High | Moderate | Low |
| Insets | 0 | 0–1 | 2–3 |
| Foot register | Rare | Sometimes | Likely over time |
| Internal headings | Never | Rarely | Permitted |
| Screens (desktop) | ~1 | ~2–3 | ~6–10 |
| Main risk | Thin | — | Monotonous |

**The rhythm scale never changes with length.** A system requiring different spacing at different lengths would produce pages that feel like different sites.

---

## The rule that makes all three work

> **Layout adapts to content length; content is never padded to fill layout.**

No minimum heights, no reserved regions, no sections that appear only to occupy space. A short page is short, a long page is long, and both use the same rhythm.
