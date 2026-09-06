# Container Philosophy

**Date:** 2026-08-14 (Phase 5A)

---

## Default: nothing is contained

The default is **open content on the page ground**. A container must be argued for; its absence needs no justification.

This inverts the prevailing convention, where every content item is a card. That convention is rejected in `../ux/CONTENT_MODEL.md` and `../research/GENERICITY_ANALYSIS.md` — screenshot card grids appeared on all three inspected cybersecurity portfolios and on the strongest peer site.

---

## When containment is justified

Containment is justified only when content is **genuinely a different kind of object** from the surrounding page, and the difference cannot be carried by type and space alone.

| Element | Contained? | Reasoning |
|---|---|---|
| Investigation prose | ❌ Never | It is the page |
| Masthead apparatus | ❌ **No** | Distinguished by type register and density. A box here would make it a card and violate constraint 25 |
| Inline insets | ❌ No | Prose in another register, not a callout |
| Uncertainty statement | ❌ **Never** | VP-4. A container would make it a warning component |
| Index rows | ❌ No | Separated by rhythm, not by boxes |
| Field notes in index | ❌ No | Same |
| Artifact references | ◐ **Minimal** | May sit in a lightly delineated group — see below |
| Code blocks | ✅ **Yes** | Genuinely different content type; needs a background to define its extent and preserve whitespace |
| Diagrams | ✅ **Yes** | A figure is a distinct object; needs bounds and a caption |
| Blockquotes | ◐ Minimal | Indentation or a single rule; never a tinted panel |
| Navigation | ❌ No | Text links on the page ground |
| Footer | ◐ Minimal | May be separated by a single rule |

**Two unambiguous cases: code and diagrams.** Both are non-prose objects where the boundary carries real information — where the code starts and stops, what belongs to the figure.

---

## The artifact group — the one judgement call

Artifacts appear after the reasoning concludes. They are a different kind of content (links to evidence) in a page otherwise made of prose.

**Options:**
- **No containment**, distinguished by register and space — consistent with everything else.
- **Minimal containment**: a single hairline above the group, or a shift in background of very low contrast.

**Recommendation: no containment at launch.** Space and type register are sufficient, and it keeps the page free of boxes entirely. **Revisit in 5D** if artifacts prove hard to locate in a long investigation.

If containment is later needed, it must be **one hairline**, not a panel — see `DIVIDER_RULES.md`.

---

## What is banned outright

| Banned | Why |
|---|---|
| Cards as the primary content container | The category default; imposes uniform heights, violating VP-6 |
| Tinted panels for emphasis | Colour as hierarchy (VP-3, VP-8) |
| Bordered boxes around metadata | Constraint 25 — makes the apparatus a widget |
| Shadowed surfaces | Depth implies interface; this is a document |
| Rounded containers as a system-wide motif | Decoration; a style signature with no function |
| Callout boxes for uncertainty | VP-4, and the "orange limitations card" explicitly rejected |
| Full-bleed coloured sections | Marketing-page convention; interrupts reading |
| Nested containers | If one container is questionable, two are indefensible |

---

## Why this matters more than it appears

Containers are how a page stops being a document and starts being an interface. Each one adds an edge, a background, and an implied boundary of interaction — and collectively they produce the "assembled from components" quality that reads as generic.

**A page with no containers reads as continuous.** That continuity is what makes the site feel like working papers rather than a dashboard, and it is achieved by removing things rather than adding them.

---

## The test

> **Does removing this container lose any information?**

If the reader would no longer know where something starts or stops, or what belongs to what, keep it. If it only makes the element look more *designed*, remove it.

Applied consistently, this leaves **two containers on the entire site: code blocks and figures.**
