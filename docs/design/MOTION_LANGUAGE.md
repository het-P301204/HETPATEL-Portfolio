# Motion Language

**Date:** 2026-08-14 (Phase 4)

**The governing test, established in Phase 1:** remove the motion. If understanding is lost, keep it. If only impressiveness is lost, it stays removed.

**The measured context:** the award-winning portfolio in the research has `canvasCount = 0`. Effects are not what separates the top of the field from the bottom — the student security sites use *more* visual machinery than the award winner does.

---

## Motion principles

**M1 — Motion reports, it does not perform.** Any movement corresponds to a real change of state.
**M2 — Motion never carries meaning alone.** Anything communicated by movement is also true statically (Principle 10).
**M3 — Motion never delays reading.** No entrance animation stands between a visitor and text.
**M4 — Motion is emphasis, and obeys scarcity.** If everything moves, movement means nothing (Principle 9).
**M5 — The site is complete with motion disabled.** Not degraded — complete.

---

## By moment

### ENTER (page load)
**None.** No fade-in, no staggered reveal, no entrance sequence.

A visitor arriving on an investigation came to read. An entrance animation delays that by a few hundred milliseconds and communicates nothing. This is the single most common portfolio motion and it fails M3 outright.

### EXIT
**None.** Navigation is immediate.

### REVEAL (content appearing on scroll)
**None.**

Scroll-triggered reveal is the most widespread motion pattern in the portfolio category, and it fails on three counts: it delays reading, it typically requires JavaScript (breaking the no-JS requirement), and it conveys nothing. Text that fades in as you scroll is text that was hidden from you a moment earlier for no reason.

### TRANSITION (between pages)
**Minimal, or none.**

If any transition exists, it must be short enough to be imperceptible as an event. A cross-page transition can aid continuity, but the cost is a client-side routing layer — which `../ux/UX_STRATEGY.md` §6 identifies as unjustified complexity for a reading site.
**Default: none. Revisit only if a static-site router provides it essentially free.**

### HOVER
**Immediate, functional, and never load-bearing.**

Links indicate interactivity. Nothing is revealed on hover — hover does not exist on touch, and `../ux/ACCESSIBILITY_REQUIREMENTS.md` forbids hover-dependent information.

### STATE CHANGE
**The one place motion earns its place.**

When a filter is applied and the list changes, a short transition helps the reader understand that *the same list was re-ordered* rather than *a new page loaded*. This is M1 in its purest form: motion reporting a real change.

Also acceptable: focus states, and confirmation of a copy action.

### REDUCED MOTION
`prefers-reduced-motion` fully honoured. Since the baseline is near-zero motion, the reduced-motion experience is **essentially identical** — which is the correct outcome. A site with a dramatically different reduced-motion version has been designed around motion.

### MOBILE
Same as desktop: near-none. No scroll-linked effects, no momentum-driven animation.

---

## Explicitly rejected

| Pattern | Why |
|---|---|
| Scroll-triggered reveals | Delays reading; needs JS; communicates nothing |
| Parallax | Decoration; motion-sickness risk |
| Scroll-hijacking | Removes reader control |
| Particle fields | Banned; decoration |
| Constant ambient float | Competes with reading |
| Animated counters | Also banned as counters |
| Typewriter / terminal typing | Category cliché; delays reading |
| Cursor followers | Decoration; fails on touch |
| Page-load preloaders | Delays content for a recruiter who abandons fast (flagged on renaudrohlinger.com) |
| Animated variable-font axes | The axis becoming the feature (`TYPOGRAPHIC_DIRECTIONS.md` D4) |

---

## The honest consequence

**This site will not be "impressive" in the way an animated portfolio is impressive.** That is deliberate, and it is the strategy.

Phase 1 measured that the award winner uses no canvas at all, while the student security sites lean on visual machinery. Motion is the cheapest way to look sophisticated and the least durable — a visitor remembers *that* a site was animated, rarely *what it said*.

The memorable thing here is the behaviour: *he shows his reasoning and says what he couldn't work out*. Motion cannot produce that, and can distract from it.

**One risk accepted:** a visitor expecting a designed experience may read stillness as lack of effort. Mitigation is craft — the typography and spatial rhythm must be visibly considered. **A still site must be very well set, because there is nothing else to look at.**
