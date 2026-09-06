# Link Language

**Date:** 2026-08-14 (Phase 5A)

**Principle:** almost everything is a link. Almost nothing is a button.

---

## The inventory

| Link type | Treatment |
|---|---|
| **Inline prose link** | Underlined, inheriting text colour or carrying the accent. Never bold, never a different size |
| **External link** | Same as inline, plus a subtle external indicator — text convention or one glyph. Decide in 5C |
| **Investigation title (index)** | The title *is* the link. No "read more" |
| **Field note title** | Same. Very short notes may be entirely unlinked — the content is present |
| **Artifact / repository** | A named link after the reasoning. **Text describes what it is** — never "GitHub" alone |
| **Related investigation** | Plain link list below content |
| **GitHub profile** | Text link in About and footer |
| **Contact / email** | `mailto:` text link |
| **Navigation** | Four text links. Current section indicated persistently, not by colour alone |
| **Skip to content** | Visually hidden until focused |
| **Buttons** | **None at launch** |

---

## Why no buttons

A button implies an *action with consequence* — submit, purchase, delete. This site has none. Every interaction is navigation, and navigation is a link.

Buttons on a content site are usually links dressed up to look more important, which:
- adds a container, contradicting `CONTAINER_PHILOSOPHY.md`
- creates a visual hierarchy competing with prose (VP-1)
- imports a marketing vocabulary — "Get in touch", "View project", "Learn more"

**Explicitly rejected:** "View project" · "Read more" · "Get in touch" · "Download CV" as a styled button · any call-to-action block.

**The one possible future exception:** if a filter control is ever added at volume, it may need button semantics for accessibility. It should still look like text.

---

## Link affordance

**Underline, or an equivalent persistent affordance. Never colour alone** — required by `ACCESSIBILITY_FOUNDATION.md` and VP-3.

- Prose links are underlined so they are unmistakable within a paragraph.
- Navigation and metadata links may rely on position and hover, since they are unambiguously interactive by context.
- **Hover changes affordance, not identity** — no colour shifts that alter meaning, no size or weight changes causing reflow.
- Focus states are always visible and never suppressed.

---

## Link density in prose

**Low, deliberately.**

Heavy inline linking fragments reading and pulls attention out of the argument. This is a site where the reader should finish the paragraph.

- Link where a reference is genuinely needed.
- Prefer collecting references at the end of a movement over scattering them through it.
- **Never link merely to demonstrate awareness of prior art** — that belongs in the prose as a sentence.

---

## Artifact links specifically

Artifacts appear **after** the reasoning (VP-1). Their link text must describe the thing:

- ✅ *"The parser and its test cases"*
- ✅ *"Rule comparison tool — repository"*
- ❌ *"GitHub"*
- ❌ *"Link"*
- ❌ *"Click here"*

Repository names, when shown, are set in mono as literal values.

**If an artifact is unavailable, nothing renders** — no disabled link, no greyed text, no "not public" note (VP-7, and the confidentiality principle forbids announcing withholding).

---

## Visited state

**None at launch.** Reasoning in `COLOR_ARCHITECTURE.md` — it adds a second accent value in two schemes for modest benefit at current volume.

**Revisit at ~25 investigations**, where a returning reader tracking what they have read becomes a real need. Prefer a non-colour cue if added.

---

## Navigation link behaviour

Four links. Current section indicated by a persistent affordance — weight, underline, or a marker — **and never by colour alone**.

**The site name is the home link.** No separate "Home" item.

---

## Test

> **Would this element still work as plain underlined text?**

If yes, it should be plain underlined text. If it genuinely needs more, state what consequence it carries — and if there is none, it is a link.
