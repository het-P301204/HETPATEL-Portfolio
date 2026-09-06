# Design Principles

**Date:** 2026-08-14 (Phase 4) · Ten principles, each traceable to brand or UX evidence.

---

## 1. Evidence follows reasoning

**Why:** the brand promise is *reasoning, shown*. Leading with an artifact makes the site a project gallery with commentary — and artifact volume is the comparison Het currently loses.
**UX:** artifacts appear after the reasoning in an investigation, never before. Index entries show text, not screenshots.
**Visual:** no image-led cards. The first thing on any page is language.
**Motion:** none associated with artifact reveal — it is a link, not an event.
**Prevents:** the project-dump failure mode; repository count becoming the metric.

## 2. The page is a document, not an interface

**Why:** the content is prose. Interface chrome around prose competes with reading.
**UX:** linear reading order; minimal controls; no panels, tabs, or accordions inside an investigation.
**Visual:** a reading measure, a clear hierarchy, generous vertical rhythm. No cards containing paragraphs.
**Motion:** nothing that interrupts a line of text.
**Prevents:** dashboard aesthetics; the fake-SOC failure mode; interface-as-decoration.

## 3. Uncertainty is content, not a caveat

**Why:** *what I couldn't determine* is required content — the best-evidenced finding in the project, from six independent sources.
**UX:** never behind progressive disclosure; never a boxed component; sits in the reading flow.
**Visual:** set in the same type as the body. **Not de-emphasised, not greyed, not smaller.**
**Motion:** none.
**Prevents:** the honesty device degrading into a repeated widget that readers learn to skip.

## 4. Small work looks small

**Why:** a 150-word investigation presented like a 2,000-word one reads as inflated. The label outrunning the substance is the model's one unresolved risk.
**UX:** no minimum-height containers; no padding that manufactures apparent substance.
**Visual:** layout adapts to length rather than length adapting to layout.
**Motion:** none.
**Prevents:** inflation; uniform card heights; content padded to fill a grid.

## 5. Absence renders as nothing

**Why:** most professional investigations have no publishable artifact. Any marker for that absence would draw attention to what is withheld — banned by the confidentiality principle.
**UX:** no placeholders, no "unavailable", no empty slots, no "coming soon".
**Visual:** sections disappear rather than emptying.
**Motion:** none.
**Prevents:** advertising gaps; the site looking broken at low volume.

## 6. Metadata is text

**Why:** status, domain, origin and date must be readable aloud and comprehensible without colour. Badge systems are a measured corporate-genericity marker.
**UX:** metadata is scannable but subordinate to the title.
**Visual:** typographic differentiation — size, weight, spacing — **not** pills, chips, or coloured tags.
**Motion:** none.
**Prevents:** the badge-wall aesthetic; colour-only meaning; accessibility failure.

## 7. Nothing simulates a state it does not have

**Why:** a status indicator that reports no real condition is a lie rendered in UI, and it is instantly recognisable to practitioners.
**UX:** live elements must reflect genuinely measured data or not exist.
**Visual:** no fake terminals, no simulated scans, no activity feeds, no counters.
**Motion:** no "processing" animations for things that are not processing.
**Prevents:** the fake-SOC and status-theatre failure modes.

## 8. Typography carries the identity

**Why:** the one measured award-winning site in the research has `canvasCount = 0` and achieves distinctiveness through a custom typeface, a 192px scale, and an accent on ~2% of elements. Effects are not what separates the top of the field.
**UX:** hierarchy is legible before anything loads.
**Visual:** the type system is the primary identity asset. Colour is secondary; motion is tertiary.
**Motion:** never a substitute for hierarchy.
**Prevents:** identity outsourced to effects; the site being reproducible by prompt.

## 9. Restraint is measurable

**Why:** "minimal" is unfalsifiable; a ratio is not. The Snellenberg measurement gives a concrete target: accent on roughly 2% of elements.
**UX:** emphasis is rare, so it means something.
**Visual:** one accent, used scarcely. If everything is emphasised, nothing is.
**Motion:** motion is emphasis and obeys the same scarcity.
**Prevents:** decorative accumulation; theme-colour-everywhere.

## 10. It must survive being read aloud

**Why:** a site about reasoning should work as language. This also guarantees accessibility rather than retrofitting it.
**UX:** no meaning conveyed by position, colour, or icon alone.
**Visual:** every visual distinction has a textual equivalent.
**Motion:** nothing conveys information that is not also true statically.
**Prevents:** accessibility failure; meaning lost with CSS or JavaScript disabled.

---

## Two principles under tension

**Principle 3 (uncertainty is content) vs Principle 9 (restraint).**

If *what I couldn't determine* is typographically identical to everything else, a skimming reader may miss the site's most distinctive move. If it is visually marked, it becomes the boxed widget Principle 3 forbids.

**Resolution: mark it structurally, not decoratively.** Position and consistency do the work — it always appears in the same place in the reading sequence, so a returning reader learns where to find it without a visual device announcing it.

**This is the single hardest execution problem in Phase 5**, and it is flagged here so it is not solved by accident.
