# Type Scale

**Date:** 2026-08-14 (Phase 5C)

**Governing discipline:** hierarchy by **size and space**, with weight held near-constant. No giant typography — the drama must come from the writing, not the scale.

---

## The scale

Body (19px desktop) is the anchor. Ratio ≈ **1.25** upward, compressed downward.

| Role | Family | Desktop | Tablet | Mobile | Weight | Line-height | Tracking |
|---|---|---|---|---|---|---|---|
| **Investigation title (L1)** | Newsreader **Display** | **34px** | 31px | 27px | 400 | 1.2 | −0.005em |
| **Section heading (L2)** | Newsreader Text | 24px | 23px | 21px | 500 | 1.3 | 0 |
| **Body / question / findings / uncertainty (L3)** | Newsreader Text | **19px** | 18px | 17px | 400 | **1.65** | 0 |
| **Lead paragraph** | *(not used — see below)* | — | — | — | — | — | — |
| **Apparatus value (L4)** | Public Sans | **15px** | 15px | 14.5px | 400 | 1.45 | 0 |
| **Apparatus label (L4-)** | Public Sans | 13.5px | 13.5px | 13px | 400 | 1.45 | +0.01em |
| **Index item title** | Newsreader Text | 21px | 20px | 19px | 400 | 1.35 | 0 |
| **Index framing line** | Newsreader Text | 17px | 17px | 16px | 400 | 1.5 | 0 |
| **Index metadata (L5)** | Public Sans | 13.5px | 13.5px | 13px | 400 | 1.4 | +0.01em |
| **Revision entry** | Public Sans | 15px | 15px | 14.5px | 400 | 1.5 | 0 |
| **Revision date** | Public Sans, tabular | 13.5px | 13.5px | 13px | 400 | 1.5 | +0.01em |
| **Site identity** | Public Sans | 16px | 16px | 15px | 500 | 1.2 | 0 |
| **Navigation** | Public Sans | 15px | 15px | 14.5px | 400 | 1.2 | 0 |
| **Caption** | Public Sans | 13.5px | 13.5px | 13px | 400 | 1.45 | 0 |
| **Code block** | system mono | 15px | 15px | 14px | 400 | 1.55 | 0 |
| **Inline code / literals** | system mono | 0.9em | 0.9em | 0.9em | 400 | inherit | 0 |
| **Footer** | Public Sans | 13.5px | 13.5px | 13px | 400 | 1.5 | 0 |

---

## The title is deliberately modest

**34px, not 48px or 64px.**

Large display type is the standard portfolio move, and the measured precedent — a 192px H1 on the award-winning reference — belongs to a designer's portfolio where the type *is* the work. Here the type is the vehicle.

At 34px against 19px body, the ratio is ~1.8:1 — clearly dominant, unmistakably a title, and it does not turn the page opening into a poster. It also means a two-line title stays proportionate on mobile.

**This is a judgment call.** If 5D shows titles reading as weak, the correction is 36–38px, not a jump to display sizes.

---

## No lead paragraph

Phase 5B established the question is the first paragraph at body size (`QUESTION_LAYOUT.md`). **A lead/standfirst style would create the second opening that decision exists to prevent.** The role is listed here only to record that it was deliberately not created.

---

## The critical relationship: L3 → L4

**19px serif → 15px sans.** A 4px step plus a family change plus a leading change (1.65 → 1.45).

This is the register boundary and the two-register system's only carrier. Three simultaneous signals:

| Signal | Desktop | Mobile |
|---|---|---|
| Family (serif ↔ sans) | ✅ full | ✅ full |
| Size ratio | 1.27:1 | **1.17:1 — compressed** |
| Leading ratio | 1.14:1 | 1.14:1 |

**On mobile the size signal weakens** — apparatus cannot shrink below ~14.5px without becoming fine print, while body drops to 17px. **Family and leading must carry it**, which is exactly why family was made the primary carrier in `TYPE_CONTRAST.md`.

**5D must verify this at 375px.** It is the single most likely place the register distinction fails.

---

## Weight discipline

| Weight | Used for |
|---|---|
| 400 | Everything by default |
| 500 | L2 headings, site identity — the only structural uses |
| 600 | Genuine inline emphasis. Rare |

**No bold titles.** A larger Newsreader at 400 reads as more considered than a bold one, and it keeps 600 meaningful when it appears in prose.

---

## Variable font axes

Newsreader supplies weight + optical size. **Optical size is set per role** (Display for L1, Text for L2/L3) and is **never animated or transitioned** — that would be the "axis becomes the feature" failure.
