# Iconography

**Date:** 2026-08-14 (Phase 5A)

---

## Decision: no icon system

The site does not have an icon set. Icons are permitted only in a small number of named cases, and each is justified individually below.

**Why no system:** an icon set is a visual vocabulary that must be designed, kept consistent, and maintained. This site has almost no interface — four navigation links, some content links, and (at volume) filters. There is nothing for a system to serve, and an unused vocabulary becomes decoration looking for a job.

---

## Permitted, case by case

| Case | Verdict | Reasoning |
|---|---|---|
| **External-link indicator** | ⚠️ **Conditional** | Genuinely informative — it tells a reader they are leaving. But a text convention or a subtle glyph is preferable to an icon set. Decide in 5C |
| **Anchor / permalink marker** on headings | ⚠️ Conditional | Useful on long investigations. A character (§ or #) is sufficient |
| **RSS** | ⚠️ Conditional, if a feed exists | The RSS glyph is a universally recognised standard; a text link works equally well |
| **Filter / clear control** | ◐ At volume only | A text label is clearer than an icon |
| Social platform marks | ❌ | Text links. "GitHub" is clearer than a logo and needs no maintenance |
| Status indicators | ❌ | Status is a **word** (`STATUS_SYSTEM.md`) |
| Domain markers | ❌ | Domain is a word |
| Uncertainty / warning marker | ❌ **Absolutely not** | Would convert the uncertainty statement into an alert — the exact VP-4 failure |
| Artifact type icons | ❌ | The link text says what it is |
| Section markers | ❌ | Space marks sections (VP-5) |
| Decorative icons | ❌ | Decoration |
| Shields, locks, keys, bugs, terminals | ❌ **Banned** | Category clichés, rejected in Phase 4 |

**Realistic total: zero to two glyphs on the entire site**, and both are conventions rather than brand elements.

---

## Why typography and layout suffice

Every job an icon would do is already done:

| Job | Solved by |
|---|---|
| Signal a link | Underline / persistent affordance |
| Signal external destination | Text convention or one subtle glyph |
| Signal status | The status word in the apparatus |
| Signal content type | Position and register |
| Signal importance | Type size |
| Signal a section boundary | Vertical space |
| Signal caution | **Nothing — by design.** The site has no cautions to signal |

---

## If a glyph is used

- **Text-based or a single-family glyph**, never a bespoke icon set.
- Inherits current colour and optical size; never coloured independently.
- **Never the sole carrier of meaning** — accompanied by text or an accessible label (VP-3, `ACCESSIBILITY_FOUNDATION.md`).
- Decorative glyphs marked `aria-hidden`.
- Sized to the type it sits with, not to a fixed grid.

---

## The specific temptation to resist

Security sites reach for iconography constantly — shields, locks, terminals, bug glyphs — because the subject feels like it needs visual signalling.

**It does not.** The subject is carried by the words. An icon of a lock next to a paragraph about access control adds nothing a reader did not already know from the paragraph, and it imports exactly the category aesthetic the whole project is built to avoid.

**Phase 4 rejected locks and shields as clichés. This document extends that:** the problem is not those particular icons, it is the reflex to illustrate a technical subject at all.

---

## Test

> **Remove the icon. Is anything unclear?**

If yes, the label was insufficient — **fix the label**, not the icon.
