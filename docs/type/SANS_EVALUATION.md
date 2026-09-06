# Sans Evaluation

**Date:** 2026-08-14 (Phase 5C)

**The sans controls the apparatus.** Its job is to be precise, quiet, and legible at small sizes — and to look like the serif's colleague, not its opposite.

---

## Candidates

| Candidate | Licence | Variable | Character |
|---|---|---|---|
| **Public Sans** | OFL | ✅ | Franklin-derived American grotesque; deliberately neutral (USWDS) |
| **Source Sans 3** | OFL | ✅ | Adobe humanist; pairs natively with Source Serif |
| **IBM Plex Sans** | OFL | ✅ | Technical/engineering DNA |
| **Libre Franklin** | OFL | ✅ | Franklin Gothic revival |
| **Instrument Sans** | OFL | ✅ | Contemporary neutral |
| Inter | OFL | ✅ | **Excluded** — the default UI sans; concedes identity |
| Poppins / Montserrat | OFL | partial | **Excluded** — geometric; Poppins measured on the archetype |

---

## Evaluation

| | **Public Sans** | Source Sans 3 | IBM Plex Sans | Libre Franklin | Instrument Sans |
|---|---|---|---|---|---|
| Neutrality | **9** | 8 | 7 | 8 | **9** |
| Precision | **9** | 7 | **9** | 8 | 8 |
| Metadata readability | **9** | 8 | **9** | 8 | 8 |
| Compactness | 8 | 7 | 8 | 8 | **9** |
| Small-size performance | **9** | 8 | **9** | 7 | 8 |
| Numerals (incl. tabular) | **9** | 8 | **9** | 7 | 7 |
| Uppercase / label quality | **9** | 7 | 8 | 8 | 8 |
| Mobile rendering | 8 | 8 | **9** | 7 | 8 |
| **Coherence with Newsreader** | **8** | 6 | 6 | **8** | 7 |
| **Corporate-dashboard risk** *(lower better)* | 8 | 8 | **4** | 8 | 7 |
| Fashion risk | **9** | **9** | 7 | 8 | 6 |
| **Total** | **95** | 84 | 85 | 85 | 85 |

---

## Recommendation: **Public Sans**

**Reasons:**

1. **Coherence with Newsreader.** Newsreader is a contemporary transitional serif with sturdy, open shapes. Public Sans derives from Libre Franklin / Franklin Gothic — an American grotesque with comparable sturdiness. **Serif-plus-Franklin is a long-standing newspaper pairing**, which is precisely the register this site wants: sober, printed, unfussy.
2. **Deliberately neutral by design brief.** Built for the US Web Design System, where the goal was legibility without personality. That is exactly what the apparatus needs — it must not compete with the prose.
3. **Excellent small sizes and numerals**, including tabular figures for aligning dates in the foot register.
4. **Low fashion risk.** It is not a designer-community favourite, which is an advantage here.

**Rejected alternatives:**
- **IBM Plex Sans** — the most technically precise, and the highest corporate-dashboard risk (score 4). It also carries IBM brand recognition.
- **Source Sans 3** — the natural companion *if* Source Serif is chosen. Recorded as the fallback pairing.
- **Instrument Sans** — good and newer; higher fashion risk and less coherent with a transitional serif.

---

## Usage constraints

**Permitted:** apparatus head · foot register · inline insets · index metadata · navigation · captions · footer.

**Forbidden:** body prose · investigation titles · the question · the uncertainty statement · anything in the main reasoning column.

**The sans must never appear inside the argument.** The register split is the two-register system's only carrier; leaking sans into prose would dissolve it.

---

## Weight discipline

Two weights maximum — Regular for values, and one heavier for labels **only if** 5D shows label/value pairs are ambiguous without it.

**Preferred: one weight**, with the label/value distinction carried by colour role (muted vs secondary) instead. This saves a font file and keeps the apparatus visually flat, which suits its subordinate role.
