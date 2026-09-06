# Media Policy

**Date:** 2026-08-14 (Phase 5A) · The rule, not the recommendation.

**Governing question for every category:** *does it add information?* If not, it does not exist.

---

## The rule

| Category | Rule | Adds information? |
|---|---|---|
| **Technical diagrams** | ✅ **Permitted** where a relational concept needs one. 2–3 site-wide | **Yes** — relationships prose explains badly |
| **Project screenshots** | ⚠️ **Conditional** — only where the image shows a specific state or behaviour | Sometimes |
| **Portrait of Het** | ⚠️ **One, small, About only. Optional** | Marginally — confirms a person |
| **Public artifacts** (diagrams he produced) | ✅ Permitted, treated as figures | Yes |
| **Environmental / working photography** | ❌ **Forbidden** | No — staged, reads as stock |
| **Decorative imagery** | ❌ **Forbidden** | No |
| **Illustration** | ❌ **Forbidden** | No |
| **Tool / framework logos** | ❌ **Forbidden** | No — the badge wall in image form |
| **Client or employer logos** | ❌ **Forbidden** | No, and inappropriate given confidentiality |
| **Background imagery of any kind** | ❌ **Forbidden** | No |
| **Open-graph / social preview image** | ✅ **Permitted** — typographic, generated | Yes, in context |

---

## Diagrams — the one category worth investment

**Permitted subjects:** trust boundaries · control-to-evidence mapping · entitlement chains · data flow across a boundary · attack paths.

**Requirements:**
1. Explains something prose cannot.
2. **Readable without colour** (VP-3) — structure carried by position, label and line.
3. Carries a text description.
4. **Static by default.** Scroll-driven progression permitted for one flagship piece; manipulable simulation is not justified.
5. Consistent visual language across all diagrams — they must read as one hand.
6. Contained, with a caption. Diagrams and code blocks are the only two containers on the site.
7. May exceed the reading measure — a documented grid exception.

**Expected volume: two or three across the entire site.** They are expensive to make well, and a bad diagram is worse than a paragraph.

---

## Screenshots — three hard conditions

1. **Never from professional work.** No exceptions. Covers CSCRF, IRDAI, internship, and any client environment.
2. **Must show something specific** — a state, a result, a behaviour. A dashboard image conveying nothing is ornament.
3. **Never a thumbnail.** The index shows text. Screenshots live inside an investigation, after the reasoning.

---

## The portrait

**Recommendation: optional, and if used — small, on About only.**

Never on the homepage. The homepage's first substantial element is an investigation; a portrait there would displace demonstration with a claim, and hero portraits are the convention this site is avoiding.

**Het decides.** The site is complete without it, and the personality is already carried by first-person reasoning — which is stronger evidence of a person than a photograph.

---

## Technical requirements

- Modern formats with fallbacks.
- **Explicit dimensions** on every image — prevents layout shift.
- Lazy-loading below the fold.
- Alt text describing **what the image shows**, never "screenshot" or "diagram".
- Figures use `<figure>` / `<figcaption>`.

**Image weight budget at launch: effectively zero.** With no imagery the site is text and type — a genuine performance advantage and one reason the direction is cheap to build well.

---

## The honest risk, restated

**A site with no images can look unfinished** to a visitor expecting a designed experience.

This is the same risk as near-zero motion, with the same mitigation: **craft**. With neither imagery nor motion, typography and spatial rhythm carry the entire visual impression. There is nowhere to hide.

The measured precedent holds — the award-winning site in the research achieves its effect with `canvasCount = 0` — but **restraint only reads as confidence when the remaining elements are excellent.** This raises the typography bar rather than lowering the overall effort.

---

## Test

> **Remove this image. Is any information lost?**

If no, remove it permanently.
