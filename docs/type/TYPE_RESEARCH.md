# Type Research

**Date:** 2026-08-14 (Phase 5C) · Evidence, judgment and preference kept separate throughout.

---

## Evidence gathered

| Finding | Source | Class |
|---|---|---|
| Bringhurst's classic guideline is **45–75 characters per line** for single-column text | Widely cited typographic guidance | **EVIDENCE** |
| **~66 CPL** is the most commonly cited optimum within that band | Typographic literature | **EVIDENCE** |
| Dyson & Haselgrove: **~55 CPL** supports effective reading at both normal and fast speeds | Cited reading research | **EVIDENCE** |
| Ruder: maximum reading speed and sustained focus at **50–60 CPL** | Cited reading research | **EVIDENCE** |
| Below ~50 CPL, excessive line breaks disrupt flow; above ~75, line tracking degrades | Consensus across sources | **EVIDENCE** |
| **Newsreader** — designed by Hugues Gentile & Jean-Baptiste Levée (Production Type), commissioned by Google Fonts, open-source, **explicitly for on-screen longer-form reading**. Three optical sizes (Caption/Text/Display), seven weights, 42 styles with italics. Stated intent: "elegant, sturdy, contemporary and bookish" | Production Type | **EVIDENCE** |
| **Source Serif 4** — Frank Grießhammer for Adobe, SIL OFL, six weights + italics, five optical sizes, variable 200–900 | Wikipedia / Adobe | **EVIDENCE** |
| **Literata** — Google, reading-optimised (Play Books), SIL OFL, variable with two axes | Wikipedia / Google | **EVIDENCE** |

---

## ⚠️ This revises Phase 5B

**5B specified 68ch.** Two problems, both raised correctly in review:

1. **`ch` is the advance width of the `0` glyph**, not an average character width. In most text serifs the figures are narrower than average lowercase, so **68ch typically renders *more* than 68 characters per line** — pushing the real measure toward or past the top of the evidence band.
2. **68 was already at the upper edge** of 45–75, and above every specific optimum in the research (55, 50–60, 66).

**Correction:** the measure is now specified as a **character-count target with a derived `rem` max-width**, not in `ch`.

> **Target: 62–66 characters per line. Preferred max-width ≈ 38rem. Acceptable 36–41rem.**
> **Verified by counting characters in rendered lines in 5D — not by unit arithmetic.**

Full reasoning in `BODY_TEXT.md`.

---

## Selection criteria, weighted

| Criterion | Weight | Why |
|---|---|---|
| **Long-form screen readability** | **Highest** | The primary activity. 400–2,500 words per page |
| **Register coherence** (sans as the serif's colleague) | **High** | The two-register system has no other carrier |
| Licensing and self-hostability | High | Must be self-hosted; no third-party runtime dependency |
| Variable / optical size support | High | One file, fluid adaptation, better small sizes |
| Numerals and punctuation quality | High | Dense metadata, dates, technical values |
| Small-size performance (apparatus) | High | The sans's entire job |
| Personality without fashion | Medium-high | "Authored, not trendy" |
| Payload cost | Medium-high | The only meaningful payload on the site |
| Italic quality | Medium | Used sparingly for genuine emphasis |

---

## Deliberately excluded

| Excluded | Reason | Class |
|---|---|---|
| **Inter** | The default UI sans of the last several years. Competent and anonymous — using it concedes identity | JUDGMENT |
| **JetBrains Mono** | Measured as the *entire body face* on a saturated cybersecurity portfolio. Even used correctly, it is the category's default mono | JUDGMENT |
| **Playfair, Lora, Merriweather** | Heavily used Google serifs; Playfair is display-only and would read as fashion | JUDGMENT |
| **Pangram Pangram / trendy foundry serifs** (Editorial New, Signifier) | Strong "design portfolio" signal — the F3 failure mode | JUDGMENT |
| **Tiempos, Söhne, Untitled** (Klim/Dinamo) | Excellent and commercial. Licence cost is not justified at this stage, and they are widely recognised in design circles | JUDGMENT |
| **Geometric sans** (Poppins, Montserrat) | Poppins was measured on the archetype portfolio. Geometric sans reads friendly, not precise | EVIDENCE + JUDGMENT |
| **Any display-only serif for body** | Fails the primary activity | EVIDENCE |

---

## What research could not settle

- **Whether the chosen serif reads as "bookish" or "academic"** at the target size. Newsreader's own stated intent includes "bookish", which is the F4 risk. **Only rendering settles this.**
- **The actual CPL** for a given face at a given size. Metrics vary; counting is required.
- **Whether family contrast survives mobile compression.** A rendering question.

**These are the three things 5D exists to determine.**
