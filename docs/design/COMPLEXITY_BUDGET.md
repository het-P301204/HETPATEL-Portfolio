# Complexity Budget

**Date:** 2026-08-14 (Phase 4)

> The site should be complex because the **information** is interesting — not because the implementation is complicated.

---

## Classification

### ESSENTIAL — the site fails without it

| Item | Why |
|---|---|
| Semantic HTML, correct heading hierarchy | Accessibility; the site must survive being read aloud |
| Typographic system (3 families, disciplined scale) | The primary identity asset |
| Two-register layout (prose + apparatus) | Carries the brand promise structurally |
| Responsive reflow, apparatus folding inline | Mobile is a primary context |
| Visible focus states, keyboard operability | Non-negotiable |
| Structured content with typed metadata | Growth without redesign |
| Static generation | Performance, security, no runtime |

### USEFUL — real value, added at defined thresholds

| Item | Threshold | Value | Cost |
|---|---|---|---|
| Domain filtering | ~10 investigations | Finding relevant work | Small JS; needs no-JS fallback |
| Status filtering | ~15 investigations | Tracking open/unresolved work | Small |
| Light/dark mode | Launch | Reader comfort; refuses dark-as-identity | Small; doubles contrast work |
| In-page anchors on long investigations | As needed | Retrieval | Trivial |
| Build-time last-commit timestamp | If artifacts exist | Genuine freshness signal | Build-step only |

### OPTIONAL — justified only by specific content

| Item | Condition |
|---|---|
| Explanatory diagram | Only where a relational concept needs it. 2–3 site-wide |
| Scroll-driven diagram progression | **One flagship piece only.** R2D3 model. Must degrade to a static sequence |
| Search | Only past ~50 items |
| Artifact index | Only past ~15 artifacts, as a filtered view |
| Page transitions | Only if essentially free; default none |

### GIMMICK — rejected

| Item | Why |
|---|---|
| **WebGL / 3D** | `canvasCount = 0` on the measured award winner. Het is not selling WebGL; it would be pure decoration |
| **Canvas rendering** | Nothing in the content requires it |
| **Relationship graph visualisation** | Eight nodes is decoration; banned pattern |
| **Physics / particles** | Decoration |
| **Scroll-triggered reveals** | Delays reading; needs JS; communicates nothing |
| **Custom cursor** | Decoration; fails on touch |
| **Preloader** | Delays content for the fastest-abandoning audience |
| **Command palette** | In-group signal on a five-to-fifty-document site. Cleverness competing with content |
| **Live GitHub API** | Runtime dependency, rate limits, failure states, for no reader benefit |
| **Client-side routing / SPA shell** | A reading site does not need a runtime router |
| **Heavy client state** | Nothing to manage |
| **Animated counters, skill charts, dashboards** | Banned as metrics before they are banned as complexity |

---

## The resulting technical shape

Static generation · content as structured files · near-zero images · three typefaces · optional small filtering script · **no framework runtime required for reading.**

**The site must be fully readable with JavaScript disabled.** This is a hard requirement, and it constrains every future decision. Prose and metadata need no runtime.

---

## Budget in one line

**Total client JavaScript at launch: functionally zero.** Filtering appears at ~10 items and should remain a few kilobytes with a no-JS fallback.

If a proposal would meaningfully change that number, it must justify itself against this document rather than being adopted for capability's sake.

---

## Why the ceiling is low, honestly

Not asceticism. Three concrete reasons:

1. **The measured evidence.** The award-winning portfolio in the research uses no canvas. The student security sites use more machinery and are forgettable. Complexity is not what separates them.
2. **Het's differentiator is content, not implementation.** A technically elaborate site over three investigations invites "where's the work?" — the exposure Phase 1 identified.
3. **It must survive neglect.** Het's maintenance capacity is unknown. A static, dependency-light site still works in two years; a framework-heavy one accrues security updates and build breakage — which would be an awkward thing to let rot on a security engineer's site.

**Complexity is not rejected on principle.** Filtering, dark mode, diagrams and one scroll-driven flagship all earn their place. Everything above is rejected because its benefit does not clear its cost *for a reading-centred site*.

---

## The standing test

> **Does this help someone understand Het's reasoning?**

Yes → consider it. Only makes the site more impressive → reject it.
