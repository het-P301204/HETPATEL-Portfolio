# Visual Hierarchy

**Date:** 2026-08-14 (Phase 5A)

**Constraint:** the hierarchy must be comprehensible with no colour, no animation, no borders, and no cards. It is built from **type size, type register, and vertical space** — in that order.

---

## Classification

| # | Element | Rank | Register | Rationale |
|---|---|---|---|---|
| 3 | **Question** | **PRIMARY** | Serif | The opening move; what the reader came for |
| 4 | **Reasoning** | **PRIMARY** | Serif | The largest volume of the page; the brand promise |
| 5 | **Findings** | **PRIMARY** | Serif | The turn in the argument |
| 6 | **Uncertainty** | **PRIMARY** | Serif | Required movement. Equal weight to findings — see VP-4 |
| 2 | **Investigation title** | **PRIMARY** | Serif | Entry point; largest single element on the page |
| 7 | **Conclusion** | *(absorbed)* | Serif | Not a separate element — part of findings. See `../ux/INVESTIGATION_MODEL.md` |
| 1 | **Identity** | **SECONDARY** | Sans | Persistent, small, present on every page. Prominent only on Home and About |
| 11 | **Artifacts** | **SECONDARY** | Sans + mono | Evidence; appears after reasoning; absent renders nothing |
| 14 | **Notes** (in index) | **SECONDARY** | Serif, compact | Content, but shorter and denser than investigations |
| 8 | **Status** | **TERTIARY** | Sans, small | Apparatus. Information, not emphasis |
| 9 | **Date** | **TERTIARY** | Sans/mono, small | Apparatus. Present everywhere, never prominent |
| 10 | **Metadata** (domain, origin) | **TERTIARY** | Sans, small | Apparatus |
| 13 | **Related work** | **TERTIARY** | Sans | Below content; a path onward, not a competitor |
| 12 | **GitHub** | **UTILITY** | Sans | A link in About and footer. Never navigation |
| 15 | **Contact** | **UTILITY** | Sans | Reachable in one action from anywhere; never a call-to-action block |

---

## The five levels of scale

Relationships only. Values in 5C.

```
L1  Investigation title              largest; serif; one per page
L2  Movement openings (where used)   noticeably smaller than L1
L3  Body prose                       the reading size; the page's baseline
L4  Apparatus, metadata, captions    distinctly smaller; sans
L5  Fine metadata (dates, values)    smallest; sans or mono
```

**Weight is held near-constant across L1–L3.** Hierarchy is carried by size and space, per the measured Snellenberg discipline (192/78.4/48/41.6px at a constant weight of 450). Weight variation is reserved for genuine emphasis inside prose.

**The gap between L3 and L4 is the register boundary** — it must be large enough to read as *a different kind of information*, not merely *smaller text*. This is the most important single relationship in the system and is specified in `TYPE_CONTRAST.md`.

---

## Hierarchy on each surface

**Investigation detail**
`title → apparatus block → question → reasoning → findings → uncertainty → artifacts → related`
Title dominates once; then prose dominates continuously.

**Investigation index**
`item title → one-line framing → metadata`
Titles carry the hierarchy. Metadata is uniform and subordinate. **No screenshots, no cards.**

**Homepage**
`identity line → featured investigation → index preview → contact`
The featured investigation is the visual centre of gravity, not the identity line.

**Notes index**
`note text (often complete) → date`
Very short notes render inline. The content *is* the index.

**About**
`identity → what he does → experience → education/certifications → contact`
Credentials are present and deliberately low. They are never a section with counting.

---

## What must never outrank prose

- Status or any metadata
- Navigation
- Artifact links
- Related work
- Certifications
- The site identity, on a content page

**Test:** squint at any page. The largest area of visual mass should be reading matter. If metadata or chrome dominates, the hierarchy has inverted.

---

## Hierarchy without any styling

Read as plain HTML with no CSS, the order must still make sense:

```
h1   investigation title
     apparatus (definition list: status, date, domain, origin)
p    question
p    reasoning …
p    findings
p    uncertainty
     artifacts (list)
     related (list)
```

Semantic order equals reading order equals visual order. **No element is positioned out of its document order** — which is what allows the same hierarchy to survive on mobile, in a screen reader, and with CSS off.
