# Final Palette

**Date:** 2026-08-14 (Phase 5C) · **Nine roles. Values to be verified in 5D on real displays.**

---

## Light mode — canonical

| Role | Value | Usage | Contrast vs ground | Do NOT use for |
|---|---|---|---|---|
| **Ground** | `#FBFAF7` | Page background | — | Any text |
| **Text primary** | `#1A1917` | Body prose, titles, question, findings, **uncertainty** | **~16.6:1** | Apparatus |
| **Text secondary** | `#56524A` | Apparatus values, revision statements, index framing line | **~7.4:1** | Body prose |
| **Text muted** | `#6E6A60` | Apparatus labels, dates, captions, footer | **~5.3:1** | Anything below 13px |
| **Accent** | `#2F4A6D` | Links, focus ring | **~8.2:1** | Headings · backgrounds · status · decoration |
| **Accent hover** | `#1F3452` | Link hover only | ~11:1 | Anything else |
| **Rule** | `#E4E0D8` | The footer rule; figure borders | n/a | Register separation |
| **Code ground** | `#F4F2EC` | Code block background | n/a | Emphasis · callouts |
| **Selection** | `#DCE4EE` | Text selection | n/a | — |

**Nine roles. No status colours. No success/error. No visited-link colour.**

---

## Dark mode — supported via `prefers-color-scheme`, not canonical

| Role | Value | Contrast vs ground |
|---|---|---|
| Ground | `#191816` | — |
| Text primary | `#E8E4DC` | **~14.1:1** |
| Text secondary | `#A9A296` | ~7.3:1 |
| Text muted | `#8B8478` | ~5.1:1 |
| Accent | `#8FB0D9` | ~7.9:1 |
| Accent hover | `#AFC7E6` | ~10.4:1 |
| Rule | `#2E2C28` | n/a |
| Code ground | `#211F1C` | n/a |
| Selection | `#2C3A4C` | n/a |

**The dark ground is warm** (`#191816`, not `#000000` or a cool `#18181B`) so the identity survives the switch. See `DARK_MODE.md`.

---

## Roles deliberately not created

| Not created | Reason |
|---|---|
| Status colours (×5) | Status is a word. Ten values across two schemes carrying meaning colour must not carry alone |
| Uncertainty colour | Would make it a warning component |
| Domain colours | A taxonomy of hues at low volume — the rainbow system |
| Success / error | The site has no interactive state. Add only if a form ever exists |
| **Visited link** | Adds a second accent value in two schemes. Revisit at ~25 investigations; prefer a non-colour cue |
| Border / divider variants | One rule value; realistically one rule on the site |
| Revision colours | See `REVISION_COLOR_POLICY.md` |
| Syntax highlighting | Introduces a semantic colour system across two schemes |

---

## Accent usage audit

Target ≈ 2% of elements, from the measured reference.

| Appears on | Estimated count per investigation |
|---|---|
| Inline prose links | 0–6 |
| Artifact links | 0–3 |
| Related work links | 0–4 |
| Navigation current state | 0 — uses weight/underline, not colour |
| Focus ring | Transient |
| **Status** | **0** |
| **Revisions** | **0** |
| **Headings** | **0** |

**Roughly 3–13 accent elements against several hundred — approximately 1–3%.** Within the intended band without needing to be policed.

---

## Verification required in 5D

1. Contrast values above are **calculated**; confirm with a checker against the real rendered output.
2. Does `#FBFAF7` read as *paper* or as *cream*? If cream, move toward white.
3. Does `#2F4A6D` read as *document ink* or as *generic link blue*? Compare against the oxblood alternate (`#8C3A2B`, ~7.3:1).
4. Is `#6E6A60` at 13.5px comfortably legible, not merely compliant?
5. Warm ground on a cheap/uncalibrated display — does the warmth survive, or vanish?
