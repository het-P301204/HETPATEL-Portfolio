# Complexity Budget — Design System

**Date:** 2026-08-14 (Phase 5A) · Translating the Phase 4 budget into design-system rules.

**Standing question for every retained item:** *what user value does this create?*

---

## Classification

### ESSENTIAL

| Item | User value |
|---|---|
| Type scale (5 levels, 3 families) | Carries the entire hierarchy and the register distinction |
| Vertical spacing scale | Marks investigation movements without headings |
| Reading measure control | Sustained reading is the primary activity |
| Focus states | Keyboard operability |
| Two containers only — code, figures | Defines the extent of non-prose content |
| Semantic markup | Comprehension without CSS or JS |
| `prefers-color-scheme` support | Respects a stated user preference at zero JS cost |
| `prefers-reduced-motion` | Required |

### USEFUL — at defined thresholds

| Item | Threshold | Value | Cost |
|---|---|---|---|
| Domain filter | ~10 investigations | Finding relevant work | Small JS + no-JS fallback |
| Status filter | ~15 | Tracking open/unresolved work | Small |
| Heading anchors | Long investigations | Retrieval and citation | Trivial |
| External-link indicator | Launch | Tells a reader they are leaving | Trivial |
| Search | ~50 | Retrieval at scale | Index, input, results, empty states |

### OPTIONAL — content-dependent

| Item | Condition |
|---|---|
| Diagram containers + captions | Only if diagrams exist (2–3 site-wide) |
| Scroll-driven diagram progression | One flagship piece only; must degrade to a static sequence |
| Accent on `open` status | Only if 5E shows a wayfinding need. Default: absent |
| Visited-link state | Revisit at ~25 investigations |
| Rule above artifact group | Only if 5D shows artifacts are hard to locate |

### REJECTED

| Item | Why |
|---|---|
| **Cards** | The category default; imposes uniform heights, violating VP-6 |
| **Shadows** | Depth implies interface; this is a document |
| **Gradients** | Decoration; the AI-aesthetic marker |
| **Animation** (beyond state change) | Delays reading; communicates nothing |
| **3D / WebGL / canvas** | `canvasCount = 0` on the measured award winner; Het is not selling WebGL |
| **Data visualisation** | 7 of 8 uses rejected in Phase 4; charts here are disguised metric claims |
| **Hover effects** beyond affordance | No hover on touch; hides information |
| **Tooltips** | Hidden content; fails touch and keyboard. If text is needed, write it |
| **Decorative graphics** | Decoration |
| **Complex transitions** | A reading site does not need a router |
| **Icon system** | Nothing for it to serve |
| **Status colours** | VP-3; the badge system |
| **Theme toggle** | The OS already expresses the preference; costs JS and a flash-of-wrong-theme |
| **Command palette** | Cleverness competing with content on a five-to-fifty-document site |

---

## Tooltips — worth stating explicitly

Tempting for apparatus labels: hover to explain what `origin` means.

**Rejected.** Tooltips fail on touch, are awkward for keyboard, hide content from screen readers unless carefully implemented, and — decisively — **if a label needs explanation, the label is wrong.** Fix the word.

---

## The resulting shape

Static generation · structured content files · three typefaces · near-zero images · two containers · one accent · one or two rules · functionally zero client JavaScript at launch.

**Hard requirement: fully readable with JavaScript disabled.** Prose and metadata need no runtime.

---

## Why the ceiling stays low

Not asceticism. Three reasons, unchanged from Phase 4 and now more binding:

1. **The measured evidence.** The award-winning reference uses no canvas; the student security sites use more machinery and are forgettable.
2. **Het's differentiator is content.** A technically elaborate site over three investigations invites *"where's the work?"*
3. **It must survive neglect.** Maintenance capacity is unknown. A static, dependency-light site still works in two years; a framework-heavy one accrues build breakage and security updates — an awkward thing to let rot on a security engineer's site.

---

## The standing test

> **Does this help someone understand Het's reasoning?**

Yes → consider it. Only makes the site more impressive → reject it.
