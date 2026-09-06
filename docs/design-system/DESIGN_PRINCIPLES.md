# Visual Design Principles

**Date:** 2026-08-14 (Phase 5A) · Ten actionable visual rules. These translate Phase 4 principles into decisions a designer can apply or violate.

---

## VP-1 — Reasoning outranks everything

**Purpose:** the brand promise is *reasoning, shown*. If anything competes with the prose, the promise is broken.
**Visual consequence:** the main column has the largest type, the widest measure, and the most vertical space. Nothing else on the page exceeds it in scale or weight.
**Content consequence:** an investigation opens with the question, not with metadata.
**UX consequence:** no element above the reasoning demands interaction before reading.
**Prevents:** metadata-first layouts; hero blocks; the apparatus visually dominating what it describes.

## VP-2 — The apparatus is quieter, denser, and never louder

**Purpose:** two registers must be instantly distinguishable, without ornament.
**Visual consequence:** apparatus is set smaller, tighter, in the sans register. Its density contrasts with the prose's openness. It is never larger, never bolder, never coloured for attention.
**Content consequence:** anything that belongs in the argument goes in the prose. The apparatus holds facts *about* the work.
**UX consequence:** a reader can skip the apparatus entirely and lose nothing essential — except where uncertainty lives, which is why uncertainty is not in the apparatus (see VP-4).
**Prevents:** the apparatus becoming a sidebar of widgets; badge accumulation.

## VP-3 — Hierarchy survives with no colour, no borders, no boxes

**Purpose:** if hierarchy depends on decoration, the decoration cannot be removed — and accessibility fails.
**Visual consequence:** hierarchy is built from type size, type register, and vertical space, in that order. Colour and rules add nothing structural.
**Content consequence:** headings must be genuinely hierarchical; no visual faking of importance.
**UX consequence:** the page is comprehensible with CSS disabled, at 200% zoom, and in high-contrast mode.
**Prevents:** colour-coded meaning; card-based hierarchy; the badge system.

## VP-4 — Uncertainty is prose, not apparatus

**Purpose:** *what I couldn't determine* is a required movement of the argument. Demoting it to metadata would invert the site's most distinctive claim.
**Visual consequence:** set in the main column, same type, same size, same weight as the surrounding reasoning. **Not indented, not tinted, not boxed, not iconed.**
**Content consequence:** it is written as a sentence, not a field.
**UX consequence:** it cannot be skipped by skipping the apparatus; it cannot be collapsed.
**Prevents:** the "limitations box" failure; uncertainty reading as a warning component.
**Note:** this resolves a contradiction in the Phase 5A brief — see `TWO_REGISTER_SYSTEM.md` §1.

## VP-5 — Space marks structure; rules almost never do

**Purpose:** the four movements of an investigation must be perceptible without headings.
**Visual consequence:** inter-movement space is measurably larger than inter-paragraph space. That difference is the section marker.
**Content consequence:** an investigation can be written with no headings at all and still read as structured.
**UX consequence:** consistent spacing makes position learnable across investigations.
**Prevents:** heading proliferation; rule-based sectioning; the form-like appearance of a template.

## VP-6 — Layout adapts to content length; content is never padded

**Purpose:** a 150-word investigation must look complete, not thin.
**Visual consequence:** no minimum heights, no equal-height rows, no fixed-ratio blocks.
**Content consequence:** small work stays small and is not inflated to fill a shape.
**UX consequence:** the index shows genuine variance in item weight, which is information.
**Prevents:** content padded to fill a grid; uniform card heights; the label outrunning the substance.

## VP-7 — Absence renders as nothing

**Purpose:** most professional investigations have no publishable artifact. Any marker for that would draw attention to what is withheld.
**Visual consequence:** no placeholders, no empty slots, no greyed panels, no "coming soon".
**Content consequence:** sections that have no content do not appear.
**UX consequence:** the site is complete at every content volume.
**Prevents:** advertising gaps; the site looking broken when small.

## VP-8 — One accent, at roughly 2% of elements

**Purpose:** the measured discipline from research — accent on 8 of ~570 elements on the award-winning reference. Scarcity is what makes an accent read as a signal.
**Visual consequence:** a single accent hue. Used for links and for one or two apparatus states. Never for headings, backgrounds, or decoration.
**Content consequence:** emphasis in writing must carry itself; it cannot be outsourced to colour.
**UX consequence:** when the accent appears, it means something.
**Prevents:** theme-colour-everywhere; the rainbow status system.

## VP-9 — Every irregularity has a documented reason

**Purpose:** asymmetry as style is decoration; asymmetry as encoding is design.
**Visual consequence:** any departure from the grid must trace to a stated function in this documentation.
**Content consequence:** none.
**UX consequence:** the layout feels inevitable rather than composed.
**Prevents:** creative asymmetry; layout variation between investigations that harms learnability.

## VP-10 — Nothing simulates a state it does not have

**Purpose:** a false indicator is a lie rendered in UI, and practitioners recognise it instantly.
**Visual consequence:** no loading spinners on a static site, no activity indicators, no live-looking counters, no progress meters.
**Content consequence:** status values reflect real editorial states only.
**UX consequence:** anything that looks live is live.
**Prevents:** the fake-SOC and status-theatre failures.

---

## The principle in tension, and its resolution

**VP-4 (uncertainty is prose, undifferentiated) vs VP-3 (hierarchy without decoration).**

If uncertainty is typographically identical to the surrounding prose and carries no visual marker, how does a skimming reader find the site's most distinctive move?

**Resolution: consistent position, not visual marking.** It is always the final movement before artifacts. A returning reader learns where it is; a first-time reader encounters it in sequence. **Position is the marker.**

This is the hardest thing in the system to get right, and it is deliberately solved by restraint rather than by a device. **If Phase 5D finds that readers genuinely miss it, the correct fix is a heading — not a box, tint, or icon.**
