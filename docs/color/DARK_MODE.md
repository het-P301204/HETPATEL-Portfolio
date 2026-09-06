# Dark Mode

**Date:** 2026-08-14 (Phase 5C)

**Approved policy:** light is canonical. Dark supported via `prefers-color-scheme` only, **no toggle**, and **only if the identity survives.**

---

## The test the identity has to pass

The differentiation from the cybersecurity category is **warmth on a light ground**. Every site measured in the research sits on black or near-black.

**So the question is not "can we make a dark theme?" — it is "does the warm identity survive inversion, or does dark mode make this site look like every other security site?"**

---

## The proposed dark scheme

| Role | Value | Contrast |
|---|---|---|
| Ground | **`#191816`** | — |
| Text primary | `#E8E4DC` | 14.1:1 |
| Text secondary | `#A9A296` | 7.3:1 |
| Text muted | `#8B8478` | 5.1:1 |
| Accent | `#8FB0D9` | 7.9:1 |
| Rule | `#2E2C28` | — |
| Code ground | `#211F1C` | — |

**The ground is the decisive value.** `#191816` is a *warm* dark — a trace of yellow-red, not the cool `#18181B` of contemporary product palettes and not the `#12131A` measured on zyekh.cloud.

Text is likewise warm (`#E8E4DC`, an off-white with warmth) rather than pure white.

---

## Does the identity survive?

**Provisionally yes — but this is the weakest claim in Phase 5C.**

| Property | Survives? |
|---|---|
| Warmth | ⚠️ **Reduced.** Warmth is far harder to perceive in a dark ground; `#191816` may read as plain dark grey to most viewers |
| Serif prose | ✅ Fully |
| Two-register split | ✅ Fully — typographic, not colour-based |
| Accent scarcity | ✅ Fully |
| Absence of status colour | ✅ Fully |
| **Distance from category** | ⚠️ **Substantially reduced.** A dark serif reading site is closer to the category than a warm light one |

**Honest assessment:** in dark mode this site loses most of its palette-level differentiation and retains all of its typographic and structural differentiation.

That is acceptable **because the palette was never the primary differentiator** — the approved position is that the system is *diagnostic*, not visually unique. But it means dark mode is a comfort feature, not an expression of identity.

---

## The recommendation

**Ship dark mode, with a defined abandonment condition.**

**Ship it because:** it costs one media query and zero JavaScript; a visitor who has set a system-wide preference has expressed a real one; and long-form reading in a bright room is genuinely uncomfortable for some readers.

**Abandon it if 5D shows any of:**
1. The warm dark ground reads as muddy or brown rather than as warm-neutral.
2. Newsreader's fine serif detail degrades noticeably at 19px reversed out — light-on-dark thins strokes and this is a real risk for a text serif.
3. The apparatus register becomes hard to distinguish at reduced effective contrast.
4. Maintaining two verified schemes proves to cost more than it returns.

**If abandoned: ship light-only.** That is an acceptable outcome, explicitly permitted by the approved policy, and preferable to a dark scheme that dissolves the differentiation.

---

## Not negotiable, if shipped

- **No toggle.** No JavaScript, no localStorage, no header control, no flash-of-wrong-theme.
- **Dark is not a filter over light.** Every value independently verified for contrast.
- **No colour meaning appears in dark that does not exist in light.** The schemes are role-identical.
- **The accent stays single-purpose** in both.

---

## The specific risk to watch

**Serif stroke thinning on dark grounds.**

Reversed text appears lighter and thinner than the same weight on a light ground. For a transitional serif with genuine thick/thin contrast — which Newsreader is — this can make body text feel spindly at 19px.

**Possible mitigation:** a slightly heavier weight in dark mode (400 → 420 on the variable axis). **This is a real option and it must be tested**, not assumed. If it proves necessary, it is a point in favour of shipping light-only, since it means the two schemes are no longer the same design.

---
---

# WITHDRAWN FOR v1 — 2026-08-15

**Het's decision, taken on 5D evidence.** Dark mode is removed from the prototype stylesheet. This
document is retained as the record of the values, so reinstating it later is a copy-paste rather
than a redesign.

## Why

It failed no test. MEASURED in the rendered page, every role passed WCAG AA on `#191816`:

| Role | Value | Ratio |
|---|---|---|
| `--ground` | `#191816` | — |
| `--text-primary` | `#E8E4DC` | 13.99 |
| `--text-secondary` | `#B0A99C` | 7.61 |
| `--text-muted` | `#9C9488` | 5.92 |
| `--accent` | `#8FB0D9` | 7.93 |
| `--accent-hover` | `#AFC7E6` | — |
| `--rule` | `#2E2C28` | — |
| `--code-ground` | `#211F1C` | — |
| `--selection` | `#2C3A4C` | — |

OBSERVED: readability held, hierarchy held, the two-register split survived, Newsreader flattened
only slightly.

**The problem was identity, not quality.** The warm ground `#FBFAF7` — "paper, not cream" — is the
site's single strongest visual signal, and a dark ground cannot carry it. `#191816` is a
well-chosen warm dark and it still reads as a generic dark reading surface. Warming it further
would not fix this; the constraint is the medium, not the hue.

For a site whose distinctiveness is deliberately **not** visual, maintaining a second complete
colour system that delivers none of the brand is a poor trade. It was also the only part of the
system with a real maintenance cost — it shipped two marginal-contrast defects that Phase 5D had
to catch (P5D-002).

**Explicitly not the reason it was cut:** fashion. It was not added because professional sites have
dark mode, and it was not removed because it was hard.

## The cost, stated plainly

Readers with a system dark preference now get a bright page, and some will dislike that. That is a
real cost accepted deliberately, not an oversight.

## Reinstatement conditions

Revisit if any of these becomes true:

1. Evidence that a meaningful share of the actual audience reads in dark mode.
2. A dark treatment is found that carries the warm-paper identity rather than replacing it — which
   would require solving the medium problem above, not choosing a different dark.
3. The site grows a surface where dark genuinely helps (long code listings, a tool UI).

Until then: **light only.** See `DECISION_LOG.md` P5DV-010 and P5EV-001.
