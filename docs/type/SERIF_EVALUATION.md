# Serif Evaluation

**Date:** 2026-08-14 (Phase 5C) · The highest-risk decision in the project.

---

## Candidates by category

| Category | Candidate | Licence | Variable | Optical sizes |
|---|---|---|---|---|
| Screen-first reading serif | **Newsreader** | OFL | ✅ | 3 (Caption/Text/Display) |
| Screen-first reading serif | **Source Serif 4** | OFL | ✅ 200–900 | 5 |
| Screen-first reading serif | **Literata** | OFL | ✅ 2 axes | ✅ |
| Contemporary serif | Fraunces | OFL | ✅ | ✅ |
| Humanist / literary | EB Garamond, Crimson Pro | OFL | partial | — |
| Technical superfamily | IBM Plex Serif | OFL | ✅ | — |
| Commercial | Tiempos Text | Paid | — | — |

---

## Evaluation

Scored 1–10.

| | **Newsreader** | **Source Serif 4** | **Literata** | Fraunces | EB Garamond | IBM Plex Serif |
|---|---|---|---|---|---|---|
| Long-form readability | **9** | **9** | **9** | 6 | 7 | 7 |
| Personality | **8** | 5 | 7 | **10** | 8 | 6 |
| Credibility | 8 | **9** | 8 | 5 | 7 | **9** |
| Technical compatibility | 7 | **8** | 7 | 4 | 5 | **9** |
| **Academic risk** *(lower better)* | 6 | 7 | 7 | 9 | **2** | 8 |
| **"Design portfolio" risk** | 7 | **9** | 8 | **3** | 6 | 8 |
| Corporate risk | 8 | 7 | 8 | 9 | 8 | **4** |
| Cybersecurity compatibility | 8 | 8 | 8 | 5 | 5 | **9** |
| Paragraph rhythm | **9** | 8 | 8 | 6 | 8 | 7 |
| Italic quality | **9** | 8 | 8 | 7 | 8 | 7 |
| Numerals | 8 | **9** | 8 | 6 | 5 | **9** |
| Punctuation | 8 | **9** | 8 | 7 | 8 | 8 |
| Mobile rendering | **9** | **9** | **9** | 6 | 6 | 8 |
| Optical size axis | **10** | **10** | 9 | 8 | 3 | 3 |
| **Total** | **114** | **115** | **112** | 91 | 86 | 102 |

---

## Shortlist

**Source Serif 4 (115) · Newsreader (114) · Literata (112)** — statistically indistinguishable, and the choice turns on character rather than score.

**Eliminated:**
- **Fraunces** — the most distinctive and the most dangerous. Its "wonky" axis is exactly the fashionable-foundry signal that triggers F3. Personality here would be the designer's, not Het's.
- **EB Garamond** — beautiful and unambiguously literary/scholarly. Triggers F4 directly.
- **IBM Plex Serif** — coherent superfamily and genuinely technical, but strongly identified with IBM's brand, and the serif is the weakest member for long reading.

---

## Recommendation: **Newsreader (Text optical size)**

**Primary reason — direct evidence of design intent.** Commissioned by Google Fonts and designed by Production Type **explicitly for on-screen, longer-form reading**. No other candidate has a stated purpose that matches this site's primary activity so exactly.

**Supporting reasons:**
- **Three true optical sizes.** Caption for apparatus-adjacent use, Text for prose, Display for titles — meaning one family covers L1–L3 without borrowing a display face.
- **Personality without fashion.** "Elegant, sturdy, contemporary" gives an authored quality that Source Serif's deliberate neutrality does not.
- **Strong italics and paragraph rhythm** — it was drawn for continuous text.

**The named risk:** the designers' own word **"bookish."** That is the F4 academic risk, stated by the foundry itself.

**Mitigations:** use the **Text** optical size (not Display) for prose; restrained title sizes rather than large literary display settings; a sturdy grotesque for the apparatus to counteract bookishness; and **no citation apparatus, no footnotes, no small-caps running heads.**

**If 5D shows it reads as academic → switch to Source Serif 4.** More neutral, equally readable, and it loses personality rather than credibility. This is a low-cost swap: both are OFL, variable, and self-hosted.

---

## What 5D must determine

1. Does Newsreader Text at the chosen size read as *bookish* (acceptable) or *academic* (failure)?
2. Actual characters per line at 38rem — **counted, not calculated**.
3. Does the optical-size axis meaningfully improve small sizes, or is the Text cut sufficient throughout?
4. Italic legibility at body size on a warm ground.
5. Rendering quality on Windows at 100% and 125% scaling — the harshest common case.
