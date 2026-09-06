# Uncertainty System

**Date:** 2026-08-14 (Phase 5A)

**The most distinctive element of the site, and the one most easily ruined by design.**

---

## The rule

> **Uncertainty is a sentence in the prose, in the same type as everything around it, in a consistent position.**

That is the entire specification. Everything below explains why nothing may be added to it.

| | |
|---|---|
| **Where** | Main column, final prose movement, before artifacts |
| **Family** | Serif — identical to body prose |
| **Size** | L3 — identical to body prose |
| **Weight** | Identical |
| **Colour** | Identical |
| **Container** | None |
| **Icon** | None |
| **Label / heading** | **None**, by default |
| **Marker** | **Position only** |

---

## Why it is not in the apparatus

**A contradiction in the Phase 5A brief, resolved in `TWO_REGISTER_SYSTEM.md` §1.**

The brief lists uncertainty under Register B. Phase 4 placed it in the main column and specified it must not be de-emphasised. Both cannot hold — the apparatus is by definition smaller, denser and subordinate.

**Resolution: the concept splits in two.**

| | Lives in | Form |
|---|---|---|
| **Uncertainty as content** — *"I couldn't establish whether this was a misconfiguration or intentional"* | Main column | A sentence, full body type |
| **Uncertainty as state** — `unresolved` | Apparatus | A metadata value |

The apparatus records *that* something is unresolved. The prose says *what* could not be determined. Only one of these is an argument, and arguments live in the main column.

---

## What is forbidden, and why each is tempting

| Forbidden | Why it will be proposed | Why it fails |
|---|---|---|
| A "Limitations" heading | Makes it findable | Converts a movement of the argument into a form field. Reads as a compliance section |
| A tinted or bordered box | Makes it prominent | It becomes a warning component. The reader learns to skip it, as they skip every callout |
| An amber or red treatment | Signals caution | **It is not a caution.** It is a finding about the boundary of the evidence |
| A warning icon | Universal shorthand | Imports an alert vocabulary the site does not have |
| Italics | Marks it as different | Reserved for genuine emphasis; also harms readability at length |
| Smaller type or reduced opacity | Marks it as an aside | It is not an aside. De-emphasising it inverts the site's central claim |
| Progressive disclosure | Keeps the page tidy | Hiding a limitation defeats stating it. Forbidden by `../ux/ACCESSIBILITY_REQUIREMENTS.md` §6 |
| Extra space above it | Draws attention | Emphasis by another route. Its gap matches every other movement gap |

**The pattern:** every proposal that makes uncertainty *more visible* also makes it *less credible*, because it converts a candid statement into a designed feature. The credibility comes precisely from its being written and set like everything else.

---

## How a reader finds it

**Consistency of position.** It is always the last prose movement, always before artifacts, in every investigation.

A first-time reader encounters it in sequence. A returning reader knows where it is. **Position is the marker, and it costs nothing.**

---

## The single escape hatch

If prototype review in 5D shows readers **genuinely miss it** — not "might miss it", but demonstrably do — the permitted remedy is **a heading**, in the same serif, at L2.

**Not** a box, tint, icon, or colour. A heading is a structural device consistent with the rest of the document; everything else is a component.

**This is the only permitted escalation**, and it requires evidence from a real prototype, not a hunch.

---

## Interaction with `unresolved`

An investigation may state what it could not determine and still be `closed` — a conclusion was reached, with a boundary acknowledged. This is the common case.

`unresolved` is reserved for investigations where **no satisfactory conclusion was reached at all.**

**Both carry the uncertainty movement.** The status describes the outcome; the sentence describes the boundary. They are independent.

---

## Why the restraint is the point

Phase 1 established this as the best-evidenced finding in the project — six independent sources, including Het's own strategy document: *"a documented list of what the tool does not do, and why, is one of the most credible things a portfolio can contain."*

**But that credibility depends entirely on it not looking like a feature.** A "Limitations" component announces *we designed a place for humility*. A sentence in the flow of reasoning simply *is* humility.

The moment it becomes a recognisable UI pattern, it joins the badges and the callouts, and a reader stops reading it.

---

## Test

> **Could a reader tell, from the design alone, that this sentence was the site's most distinctive feature?**

**They should not be able to.** If the design announces it, the design has broken it.
