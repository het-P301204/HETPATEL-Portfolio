# Font Performance & Loading

**Date:** 2026-08-14 (Phase 5C) · Strategy only. **Not implemented.**

---

## The payload

**Two downloaded families. Mono is a system stack — zero bytes.**

| Family | Files | Estimated subset size |
|---|---|---|
| Newsreader (variable, Text + Display via opsz) | 1 roman + 1 italic | ~45–70 KB each, Latin subset, WOFF2 |
| Public Sans (variable) | 1 roman | ~30–45 KB, Latin subset, WOFF2 |
| System mono | 0 | **0 KB** |
| **Total** | **3 files** | **~110–180 KB** |

Estimates, to be measured after subsetting.

**Context:** with no images and no scripts at launch, **fonts are effectively the entire payload.** That is the justification for keeping it to three files and for choosing a system mono.

---

## Justifying the families

| Family | Justified? |
|---|---|
| **Newsreader** | ✅ Carries all prose — the primary activity. The optical-size axis means one file serves both Text and Display, avoiding a separate display face |
| **Newsreader Italic** | ⚠️ **Conditional.** Only if italic is genuinely used. Its uses are narrow (true emphasis, titles of works). **If 5D shows fewer than a handful of italics per investigation, drop it** and use the browser's synthetic oblique or avoid italic entirely |
| **Public Sans** | ✅ Carries the entire apparatus — the two-register system's only carrier |
| **Mono** | ✅ Free |

**The italic file is the one genuinely questionable download**, and it is flagged as a 5D decision rather than assumed.

---

## Variable fonts

Both families ship variable. **Preferred**, because:
- One file replaces multiple static weights.
- The optical-size axis on Newsreader improves both small text and titles from a single file.
- Weight discipline is narrow (400/500/600), so a variable file is comfortably cheaper than three statics.

**Axes are set per role and never animated.** Animating an axis would be the "axis becomes the feature" failure.

---

## Subsetting

- **Latin subset** at minimum. Extended Latin only if content requires it.
- `unicode-range` split so unused ranges are never fetched.
- Drop unused OpenType features; **retain tabular numerals** (required for the foot register) and standard punctuation.
- Retain the opsz axis; drop any axis not used.

---

## Loading strategy

| Decision | Recommendation | Reason |
|---|---|---|
| Hosting | **Self-hosted** | No third-party runtime dependency; consistent with treating the site as a security engineering artifact. Also avoids a third-party origin in the CSP |
| `font-display` | **`swap`** for both | Text must be readable immediately. A reading site cannot justify invisible text |
| Preload | **Newsreader roman only** | It is above the fold on every page. Preloading all three competes for bandwidth |
| Public Sans | Not preloaded | Apparatus is small and slightly below the title |
| Italic | Not preloaded | Rare |

---

## ⚠️ Layout shift — the main risk

`font-display: swap` means a fallback renders first, then swaps. **If the fallback's metrics differ, the page reflows.**

This matters more here than on most sites because **the reading measure is set in `rem` and the character count depends on the face** — a mismatched fallback changes lines per paragraph and therefore page height.

**Mitigation:**
1. **Metric-compatible fallbacks** declared with `size-adjust`, `ascent-override` and `descent-override` so the fallback occupies nearly identical space.
2. Fallback stacks: Newsreader → `Georgia, 'Times New Roman', serif`; Public Sans → `system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`.
3. **Measure CLS in 5D.** Target ≈ 0.

**This is recorded as a high-risk assumption.** Metric overrides need real measurement; they cannot be derived on paper.

---

## Fallback behaviour

The page must not look broken before custom fonts load:

- Georgia is a genuine reading serif — a fallback render is *plainer*, not *broken*.
- `system-ui` for the apparatus preserves the serif/sans register distinction even in fallback, **so the two-register system survives font loading failure entirely.**
- If fonts never load — blocked, offline, or CSP-restricted — the site remains fully readable and correctly structured.

**That resilience is a design property, not an accident**, and it follows from the register split being family-based rather than colour- or position-based.

---

## Budget

| Metric | Target |
|---|---|
| Font payload | **< 200 KB** total, subset, WOFF2 |
| Font files | **3** |
| Downloaded families | **2** |
| CLS from font swap | **< 0.05**, target 0 |
| Blocking resources | 0 — `swap` throughout |
