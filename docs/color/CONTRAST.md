# Contrast

**Date:** 2026-08-14 (Phase 5C) · Calculated values. **Must be re-verified against rendered output in 5D.**

---

## Light mode

| Pair | Ratio | Size | WCAG AA | AAA |
|---|---|---|---|---|
| Text primary `#1A1917` on ground | **16.6:1** | 19px | ✅ | ✅ |
| Text secondary `#56524A` on ground | **7.4:1** | 15px | ✅ | ✅ |
| Text muted `#6E6A60` on ground | **5.3:1** | 13.5px | ✅ | ❌ (needs 7:1) |
| Accent `#2F4A6D` on ground | **8.2:1** | 19px | ✅ | ✅ |
| Accent hover `#1F3452` | **11:1** | — | ✅ | ✅ |
| Text primary on code ground `#F4F2EC` | ~15.8:1 | 15px | ✅ | ✅ |
| Focus ring (accent) on ground | 8.2:1 | 3:1 required | ✅ | — |

## Dark mode

| Pair | Ratio | AA | AAA |
|---|---|---|---|
| Text primary `#E8E4DC` on `#191816` | **14.1:1** | ✅ | ✅ |
| Text secondary `#A9A296` | **7.3:1** | ✅ | ✅ |
| Text muted `#8B8478` | **5.1:1** | ✅ | ❌ |
| Accent `#8FB0D9` | **7.9:1** | ✅ | ✅ |

---

## The one value that only just passes

**Text muted at ~5.3:1** (light) and ~5.1:1 (dark), used at 13.5px for apparatus labels, dates and captions.

It passes AA for normal text (4.5:1) with modest headroom and **fails AAA (7:1)**.

**This is the system's most likely accessibility failure**, because 13.5px is small and muted is by definition the quietest role.

### Why it is not lightened further

Subordination in this system must come from **size, register and density — never from low contrast.** Muted is already at the floor: any further reduction would drop below AA at a size where legibility is already working hard.

### Why it is not darkened to reach AAA

Doing so would collapse the distinction between muted labels and secondary values, and the label/value pairing is what makes the head apparatus scannable.

### The 5D decision

Three options, in order of preference:

1. **Raise the size** of muted text from 13.5px to 14px, improving perceived legibility without touching contrast.
2. **Darken muted** toward `#605C53` (~6.2:1), accepting a slightly weaker label/value distinction.
3. **Merge muted into secondary** and distinguish labels by tracking alone.

**Option 1 first.** If a real render shows 13.5px muted is uncomfortable rather than merely compliant, size is the cheapest fix.

---

## Non-text contrast

| Element | Requirement | Status |
|---|---|---|
| Focus indicator | 3:1 against adjacent | ✅ 8.2:1 |
| Rule `#E4E0D8` | Exempt (decorative) | Must remain visible in forced-colours mode |
| Code ground | Exempt | Text on it verified above |
| Link underline | Inherits accent | ✅ |

---

## What contrast does NOT do here

**No meaning is carried by colour.** Status is a word, links are underlined, the register split is typographic.

**Consequence:** greyscale, forced-colours and high-contrast modes lose nothing. The greyscale gate (`../design-system/ACCESSIBILITY_FOUNDATION.md` gate 6) should pass trivially — but **it must still be run**, because it is the check that catches an accidental colour dependency introduced later.

---

## 5D verification

1. Re-measure every pair with a checker against rendered output — calculated values can drift from rendered ones due to subpixel rendering and font weight.
2. Verify muted at real size on a low-quality display.
3. Verify both schemes independently. **Dark is not a filter over light.**
4. Forced-colours mode.
5. Greyscale gate.
6. Verify at 200% zoom.
