# Colour Architecture

**Date:** 2026-08-14 (Phase 5A) · Functional roles only. **No values** — those are 5C.

**Inherited:** warm editorial neutral; one accent at roughly 2% of elements (the measured Snellenberg discipline).

---

## Functional roles

| Role | Purpose | Notes |
|---|---|---|
| **Page ground** | The reading surface | Warm neutral, never pure white |
| **Primary text** | Prose | Near-black, warm-biased. Never pure black on warm ground |
| **Secondary text** | Apparatus values, captions | **Must still clear AA.** Subordination comes from size and register, not from faintness |
| **Muted text** | Apparatus labels, fine metadata | The lowest contrast permitted; still AA at its size |
| **Accent** | Links, and one apparatus state | **One hue. ~2% of elements.** Never a heading, background, or decoration |
| **Rule** | The one or two hairlines permitted | Very low contrast; perceptible in high-contrast mode |
| **Code ground** | Background for code blocks | Minimal shift from page ground — enough to define extent |
| **Focus** | Focus indicator | May be the accent; must be perceptible in both schemes |

**Eight roles. That is the whole system.**

---

## Roles deliberately NOT created

| Not created | Why |
|---|---|
| **Status colours** | Five statuses × two schemes = ten values carrying meaning colour must not carry alone (VP-3). Status is a word |
| **Uncertainty colour** | Would make it a warning component — the exact failure VP-4 exists to prevent |
| **Domain colours** | Would produce a taxonomy of hues at low volume; the rainbow system |
| **Success / error** | The site has almost no interactive state. If a form ever exists, add then — not before |
| **Visited link** | ⚠️ See below |
| **Hover colour** | Hover changes affordance, not hue |
| **Semantic palette (info/warn/danger)** | Interface vocabulary on a document |

### The visited-link judgement

**Recommendation: no distinct visited colour.** Reasons: it adds a second accent value in both schemes, it is a well-known privacy-adjacent surface, and with fewer than 50 links per page the wayfinding benefit is small.

**Counter-argument, recorded honestly:** on an index of 25+ investigations, visited-state is genuinely useful — a returning reader wants to know what they have already read, which serves the return-visit journey directly.

**Decision: omit at launch; revisit at ~25 investigations.** If added, prefer a non-colour cue.

---

## Light only, or light + dark?

**Phase 4 said "both first-class."** Phase 5A instructs me not to add dark mode automatically. Re-examined:

**For dark mode:** practitioners commonly prefer it; it suits long reading; via `prefers-color-scheme` it needs **zero JavaScript**, which fits the complexity budget.

**Against:** it doubles every contrast verification; the *warm* neutral identity is harder to preserve in dark (warm darks easily read as muddy or as sepia); and dark-by-default is the single clearest signal of category membership — measured on every cybersecurity site in the research.

**Recommendation:**

> **Light is the canonical scheme. Dark is supported via `prefers-color-scheme` only. No toggle at launch.**

Reasoning:
1. **Light is the identity.** Warm editorial neutral is the deliberate distance from the category default, and it should be what most visitors see.
2. **Respecting an OS preference is courtesy, not a feature.** A visitor who has chosen dark system-wide has expressed a real preference.
3. **No toggle** avoids JavaScript, localStorage, a control in the header, and a flash-of-wrong-theme problem — for a preference the OS already expresses.
4. **The identity must survive the switch.** If Het looks like a different person in dark mode, the identity is in the wrong layer.

**Escape hatch:** if 5C finds the warm identity cannot be preserved credibly in dark, **ship light-only.** That is an acceptable outcome, not a failure — and it is preferable to a dark scheme that dissolves the differentiation.

**This refines Phase 4 rather than contradicting it:** "both first-class" becomes "both supported, one canonical, no toggle."

---

## Accent discipline

- **One hue.** A second is a theme.
- **~2% of elements.** A measured target from research, not a feeling.
- **Permitted:** links, focus, at most one apparatus state.
- **Forbidden:** headings, backgrounds, rules, icons, decoration, section markers.
- Must clear AA at text size in both schemes.

**Hue is deferred to 5C**, with one constraint: it must not be a cool cyber hue (cyan, electric blue, neon green, purple). Those are the category signature and would undo the palette's differentiation in a single decision.

---

## Test

> **Render the page in greyscale. Is anything lost?**

If any meaning disappears, colour is carrying information it must not carry alone. This is gate 6 in `ACCESSIBILITY_FOUNDATION.md` and it is the specific check this system needs.
