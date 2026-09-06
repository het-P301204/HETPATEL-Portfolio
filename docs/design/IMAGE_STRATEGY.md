# Image Strategy

**Date:** 2026-08-14 (Phase 4)

---

## Position: near-zero imagery, by decision rather than by omission

| Type | Verdict | Reasoning |
|---|---|---|
| **Portrait of Het** | ⚠️ **One, small, on About only** | Humanising and honest. **Not on the homepage** — a face is not the differentiator, and hero portraits are the convention this site is avoiding. Optional; the site is complete without it |
| **Environmental / working photography** | ❌ | Staged "at work" photography reads as stock. Het's work is documentation and testing — there is nothing photogenic, and pretending otherwise is dishonest |
| **Project screenshots** | ⚠️ **Only where they show something specific** | Permitted for tools and demos. **Never** from professional work. Never as an index thumbnail |
| **Technical diagrams** | ✅ **Yes, where relational content requires them** | The one genuinely valuable image type — see below |
| **Abstract / decorative imagery** | ❌ | The AI-aesthetic marker. Gradients, meshes, abstract "tech" imagery |
| **Illustration** | ❌ | Would need a consistent illustrated identity — a large investment pulling toward an editorial-blog register |
| **Logos of tools or frameworks** | ❌ | The badge wall in image form |
| **Client / employer logos** | ❌ | Unavailable and inappropriate given confidentiality |

---

## Why so little

Three reasons, in order of weight.

**1. The content does not produce images.** Het's work is testing, documentation, control mapping and reasoning. None of it has a natural visual artifact. A site with images would need to *manufacture* them, and manufactured imagery is decoration.

**2. Images compete with reading.** The primary activity is reading prose. Every image is an interruption that must earn its place.

**3. The category's imagery is uniformly bad.** Phase 1 found screenshot card grids on all three inspected portfolios, plus stock hacker imagery and abstract tech backgrounds in the wider archetype. **Having no images is more distinctive than having generic ones** — and much cheaper.

---

## The exception: technical diagrams

**The one image type worth real investment.**

Security contains relational systems that prose explains badly — trust boundaries, entitlement chains, control-to-evidence mapping, attack paths, data flow across a boundary. Phase 1 found this territory **completely absent** from every cybersecurity site inspected, while Ciechanowski and R2D3 demonstrate its power elsewhere.

**Rules:**
- A diagram appears only when it explains something prose cannot.
- It must be **readable without colour** (Principle 10) and carry a text description.
- It is **not decorative** — a diagram that merely signals "this is technical" is banned.
- Static by default. R2D3-style scroll-driven progression is permitted for a flagship piece; manipulable simulation is not justified (`COMPLEXITY_BUDGET.md`).
- Consistent visual language across diagrams — line, label, and weight — so they read as one hand.

**Expected volume: two or three across the whole site.** They are expensive to make well, and a bad diagram is worse than a paragraph.

---

## Screenshots

Permitted for tools and demos, under three conditions:

1. **Never from professional work.** No exceptions.
2. **It must show something specific** — a state, a result, a behaviour. A dashboard image conveying nothing is ornament.
3. **Not as a thumbnail.** The index shows text. Screenshots live inside an investigation, after the reasoning.

---

## The portrait question

**Recommendation: one small photograph on About, or none. Het's choice.**

**For:** a face is humanising, and the brand's scarcest quality is personality. It confirms a real person wrote this.
**Against:** it is the single most conventional element in the portfolio category. It carries no information about the work. And it is unnecessary — the personality is already carried by first-person reasoning, which is stronger evidence of a person than a photograph.

**Never on the homepage.** The homepage's first substantial element is an investigation (`HOMEPAGE_EXPERIENCE.md` H1). A portrait there would displace the demonstration with a claim.

---

## Technical requirements

If images exist: modern formats, explicit dimensions to prevent layout shift, lazy-loading below the fold, meaningful alt text describing *what the image shows* rather than "screenshot".

**Image weight budget: effectively zero at launch.** With no imagery, the site is text and type — which is a genuine performance advantage and one reason the whole direction is cheap to build well.

---

## The honest risk

**A site with no images can look unfinished to a visitor expecting a designed experience.**

This is the same risk named in `MOTION_LANGUAGE.md`, and it has the same mitigation: **craft.** With no imagery and near-no motion, the typography and spatial rhythm carry the entire visual impression. There is nothing to hide behind.

That is a demanding standard, and it is the correct one — the measured evidence is that the award-winning site in the research achieves its effect with `canvasCount = 0` and a custom typeface. Restraint only reads as confidence when the remaining elements are excellent.
