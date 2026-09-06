# Apparatus Typography

**Date:** 2026-08-14 (Phase 5C)

**Requirement:** subordinate, but never insignificant.

---

## Specification

| Property | Value | Reason |
|---|---|---|
| Family | **Public Sans** | The register carrier |
| Value size | 15px desktop / 14.5px mobile | Clear step below 19px body; above fine-print territory |
| Label size | 13.5px / 13px | Below values — labels are scaffolding, values are information |
| Weight | 400 throughout | Distinction by colour role, not weight |
| Line height | 1.45 | Tighter than prose (1.65). **Density is a register signal** |
| Tracking | Labels +0.01em; values 0 | Slight tracking aids small-size legibility |
| Casing | **Sentence case** | See below |
| Numerals | **Tabular** for dates | Vertical alignment in the foot register |

---

## Casing: sentence case, not uppercase

Uppercase labels are the conventional metadata treatment and are **rejected**.

**Reasons:** all-caps was measured as a genericity marker on the archetype portfolio (`ABOUT ME`, `LICENSES ACCQUIRED`) and on the SCREAMING_SNAKE variant. It also reduces legibility at 13.5px, and screen readers may spell out short all-caps strings.

**Sentence case reads as a person's notes. Uppercase reads as a dashboard.**

---

## The three positions

### Head
```
Status   open
Date     2026-03-14
Domain   application security
Origin   professional
```
Label/value pairs, TIGHT internal spacing, running inline across the measure at desktop and wrapping at ~600px. Labels muted, values secondary.

**Open question for 5D:** whether labels are needed at all. `open · 2026-03-14 · application security · professional` is more compact and less form-like — but `professional` without a label is ambiguous. **Test both.**

### Inline insets
Same family and size as head values (15px). **Full sentences**, not pairs. No container, no rule, no icon — carried by family and size alone against the surrounding serif.

**Risk:** at 15px sans inside 19px serif prose, an inset could read as a caption or an error message. 5D must confirm it reads as *the same author in a different register*.

### Foot register
```
2026-03-14   Published
2026-06-02   Revised — the conclusion about ordering was wrong.
```
Dates tabular, left-aligned in a consistent column; statements at 15px. See `REVISION_TYPE.md`.

---

## Subordinate but not insignificant

| Mechanism | Effect |
|---|---|
| Smaller (15 vs 19) | Subordinate |
| Sans against serif | Different register |
| Tighter leading | Denser texture |
| Secondary colour role | Quieter |
| **Full AA contrast** | **Not insignificant** |
| No container | Not a widget |

**The critical rule:** subordination is achieved by **size, register and density — never by low contrast.** Apparatus text must clear AA. *Quiet must not mean faint.*

This is the most likely accessibility failure in the whole system, because the instinct when something should recede is to lighten it.

---

## 5D validation

1. At 375px, is the apparatus still clearly a different register from prose?
2. Do four inline pairs wrap gracefully at 480–600px?
3. Labels or no labels?
4. Does an inline inset read as an aside, or as a caption/error?
5. Contrast verified at actual size.
