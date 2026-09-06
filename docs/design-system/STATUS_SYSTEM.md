# Status System

**Date:** 2026-08-14 (Phase 5A)

**Vocabulary (Phase 3):** `open` · `closed` · `unresolved` · `planned` · `archived`

---

## The rule: status is a word in the apparatus

Not a pill. Not a chip. Not a badge. Not a coloured dot. **A word.**

| | |
|---|---|
| **Where** | The masthead apparatus, as one label/value pair among others |
| **Family** | Sans, or mono if values are given tabular treatment |
| **Level** | L4 value against an L5 label |
| **Colour** | **None.** Status carries no hue |
| **Container** | None |
| **Icon** | None |

**Form:** a label and a value, sitting in the same run as date, domain and origin. Status is not privileged over the other metadata — it is one fact among four.

---

## Why no colour

Four reasons, in order of weight:

1. **Five statuses × two schemes = ten values** carrying meaning that colour must not carry alone (VP-3). Every one would then need a text equivalent anyway — making the colour redundant.
2. **It would be the badge system**, measured in Phase 1 as a corporate-genericity marker on bugatsec.dev and nikki-65.
3. **It would create a hierarchy among statuses** that does not exist. `unresolved` is not a warning and `closed` is not a success — they are equally legitimate outcomes. Any colour scheme implies otherwise.
4. **It would consume the accent budget.** One accent at ~2% cannot also serve five states.

---

## `unresolved` is not an alert

The most important decision in this document.

`unresolved` means *"I investigated this and did not reach a satisfactory conclusion."* That is an honest, respectable outcome and the status no other portfolio in the research corpus offers.

**It must therefore look exactly like the others.** Same type, same weight, same absence of colour. If it is marked as different, the site is signalling that unresolved work is a lesser class — which inverts the entire honesty premise.

**Forbidden for `unresolved`:** amber or red · italics · a warning glyph · reduced opacity · any distinguishing treatment whatsoever.

---

## The one permitted distinction

**`open` may — optionally — carry the accent.**

Justification: *open* is the only status describing a **live** condition. It tells a returning visitor where movement is happening, which serves the return-visit journey directly. This is the "one apparatus state" the accent budget permits (`COLOR_ARCHITECTURE.md`).

**Conditions:** the word must remain fully legible without the accent; greyscale must lose nothing; and if it reads as decorative in 5D, drop it. **Default position: no accent on any status.** Add only if 5E shows a genuine wayfinding need.

---

## Status in the index

Same treatment: a word in the metadata line beneath each title.

**No column of coloured markers.** An index where the eye is drawn down a strip of status indicators has become a dashboard — and the item titles, which carry the actual hierarchy, would lose the competition.

---

## Filtering (from ~15 items)

Status becomes a filter *inside the index*, never in navigation.

Controls are **plain text**, matching the vocabulary exactly. Active filter state is indicated by a persistent, non-colour affordance. Must work without JavaScript.

---

## Ageing

Status is paired with a date. `open` on an investigation last touched fourteen months ago is information — and the honest response is to show both, not to hide the date.

**Visible ageing beats false currency** (`../ux/FIELD_NOTES_MODEL.md` §6). A stale `open` status is a prompt for Het to update or archive it, not something the design should conceal.

---

## Test

> **Render the page in greyscale and remove all styling. Is the status still communicated?**

It must be — because it is a word. That is the whole design.
