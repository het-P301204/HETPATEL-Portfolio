# Accessibility Foundation

**Date:** 2026-08-14 (Phase 5A) · Visual requirements. Behavioural requirements in `../ux/ACCESSIBILITY_REQUIREMENTS.md`.

**The binding constraint for 5A:** the two-register distinction must survive when **colour is unavailable** and when **side-by-side positioning is unavailable**.

---

## How the register distinction survives degradation

| Condition | What still distinguishes the registers |
|---|---|
| **No colour** | Type register (serif vs sans), size, density |
| **No side-by-side position** | Model C never uses it — the masthead is a block, insets are inline |
| **No CSS** | Semantic markup: the masthead is a definition list; insets are `<aside>`; prose is `<p>` |
| **Screen reader** | Announced as a definition list and as complementary content |
| **200% zoom** | Type register persists; only size ratios compress |
| **High-contrast mode** | Register distinction is typographic, so unaffected |
| **Text-only** | Structure is carried by markup |

**Model C was chosen partly for this.** A side column carries meaning in *position*, which is the first thing lost in every degradation above. Type register survives all of them.

---

## Contrast

- **Body prose:** must clear WCAG AA comfortably. This is a reading site; AA is a floor, not a target.
- **Apparatus text:** **must also clear AA.** It is smaller and lower-contrast than prose, and this is where the design most risks failing. *Quiet must not mean faint.*
- **Accent:** must clear AA against the page ground at text sizes.
- **Any rule or hairline:** exempt from text contrast, but must be perceptible in high-contrast mode.

**The specific risk in this system:** the apparatus is deliberately subordinate, and subordination is usually achieved with reduced contrast. **Here it must be achieved with size and register instead**, so contrast can stay compliant.

---

## Type

- **Reading size:** generous. Long-form is the primary activity.
- **Apparatus size:** small, but never below a comfortably readable size. It is information.
- **Measure:** controlled for line-return comfort at every breakpoint.
- **Line height:** looser in prose, tighter in apparatus — part of the register contrast, and legitimate.
- **Resizable to 200%** without loss of content or function.
- **No text in images.**

---

## Focus

- Visible focus states on every interactive element. **Never suppressed without replacement.**
- Focus indicators must be perceptible in both colour schemes and in high-contrast mode.
- Focus order equals document order equals visual order — guaranteed by the single-column structure.
- Skip-to-content link.

---

## Non-colour communication

Per VP-3 and VP-8, **colour never carries meaning alone.**

| Meaning | Carried by |
|---|---|
| Status (open/closed/unresolved/planned/archived) | **The word itself**, in the apparatus |
| Domain | The word |
| Origin (professional / self-initiated) | The word |
| Link | Underline or equivalent persistent affordance — **not colour alone** |
| Uncertainty | Its sentence and its position in the prose |
| Artifact availability | Presence or absence of a link. Absence renders nothing |

**No status colours.** The status system is textual — see `STATUS_SYSTEM.md`.

---

## Semantic structure

```
h1        investigation title (one per page)
<dl>      masthead apparatus — label/value pairs
<p>       prose, in reading order
<aside>   inline insets
<ul>      artifacts, related work
```

Headings never skipped for visual effect. Landmarks present. Lists are lists.

**The masthead as a definition list is a deliberate choice** — it is semantically what it is (terms and values), and it announces correctly to assistive technology without any ARIA.

---

## Reduced motion

Baseline motion is near-zero, so the reduced-motion experience is **essentially identical** to the default. That is the correct outcome: a site with a dramatically different reduced-motion version was designed around motion.

---

## Colour scheme support

Both light and dark must meet contrast requirements independently. **Dark mode is not a filter over light mode** — it is a second set of values requiring its own verification.

This is a real cost, and it is the main argument against dark mode in `COLOR_ARCHITECTURE.md`.

---

## Testing gates for 5D and 5E

1. Keyboard-only traversal of every page type.
2. Screen reader pass: homepage, one investigation, index.
3. Render with CSS disabled — is the hierarchy still correct?
4. Render with JavaScript disabled — **hard requirement**: all content readable.
5. 200% zoom.
6. Greyscale — **is the apparatus still distinguishable from prose?**
7. 375px viewport.
8. High-contrast mode.

**Gate 6 is the one specific to this design system.** If the registers become indistinguishable in greyscale, the system is relying on colour and must be corrected before proceeding.

---

## Why this is a brand requirement

The site's premise is intellectual honesty. A site claiming rigour that fails a keyboard traversal, or hides its stated limitations behind a control, contradicts itself in a way its audience can detect.

Both primary audiences — security engineers and GRC professionals — work in populations where accessibility is professionally normal. Getting it visibly right is consistent with the positioning; getting it wrong is a small, avoidable contradiction.
