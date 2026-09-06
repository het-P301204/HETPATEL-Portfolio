# Typographic Directions

**Date:** 2026-08-14 (Phase 4) · **No font families selected.** Directions only.

**Why this matters most:** the one measured award-winning site in the research achieves distinctiveness with `canvasCount = 0` — a custom typeface, a 192px scale, constant heading weight, and an accent on ~2% of elements. Against that: Poppins on 164/174 elements (adharvkt) contributing nothing to identity, and JetBrains Mono as an entire body face (zyekh) reading as costume. **Typography is where the identity budget goes.**

---

## D1 — Editorial serif + technical sans

**Personality:** considered, literary, unhurried. Signals *reading matter*, not interface.
**Readability:** excellent for long-form — serifs earn their place at 800–2,000 words.
**Technical credibility:** moderate. Serif can read as literary rather than engineering-grade; earned back by precise language and monospace values.
**Editorial character:** highest of the four.
**Hierarchy:** serif display against sans metadata gives a strong, effortless distinction between *prose* and *apparatus*.
**Body:** serif.
**Metadata:** sans, small, tight.
**Code:** mono.
**Mobile:** good — serif body needs care at small sizes.
**Risk:** could read as a magazine rather than a security practitioner's site. Mitigated by apparatus density and precise language.

---

## D2 — Sophisticated sans + mono ⭐

**Personality:** precise, contemporary, quietly technical. Neutral enough to carry either professional or personal work.
**Readability:** excellent if the face has genuine text-setting quality — not a geometric display sans pressed into body service.
**Technical credibility:** **highest.** The register of good technical documentation.
**Editorial character:** moderate — must be earned through spacing and measure rather than letterforms.
**Hierarchy:** by size and spacing, with weight held nearly constant (the measured Snellenberg discipline).
**Body:** humanist or neo-grotesque sans with a real text weight.
**Metadata:** the same family at a smaller optical size — quiet, not decorative.
**Code:** mono, used **semantically** — literal values, identifiers, hashes, dates.
**Mobile:** excellent.
**Risk:** **sans-plus-mono is the current default of technical sites**, so it is the least differentiating *starting point*. Distinctiveness must come from the specific face, the scale, and the restraint — not from the pairing.

---

## D3 — Humanist sans + restrained mono

**Personality:** warm, approachable, human. The most personable of the four.
**Readability:** very good.
**Technical credibility:** moderate — warmth can read as informal to the GRC audience.
**Editorial character:** moderate.
**Hierarchy:** softer contrasts; relies more on spacing.
**Mobile:** excellent.
**Risk:** warmth is the closest of the four to the "content marketing" register that `../brand/VOICE.md` rejects. Also the hardest to keep serious.

---

## D4 — Variable typographic system

**Personality:** technical, systematic, contemporary.
**Readability:** depends entirely on the face.
**Technical credibility:** high — a variable axis used *meaningfully* is a genuine craft signal.
**Editorial character:** variable, by definition.
**Hierarchy:** continuous optical sizing rather than discrete steps.
**Mobile:** excellent — one file, fluid adaptation.
**Risk:** **the axis becomes the feature.** Animated weight or width is decoration, and would violate the motion principles. Also a real performance consideration if multiple axes ship.

---

## Comparison

| | D1 Serif+Sans | **D2 Sans+Mono** | D3 Humanist | D4 Variable |
|---|---|---|---|---|
| Long-form readability | **9** | 8 | 8 | 8 |
| Technical credibility | 6 | **9** | 6 | 8 |
| GRC-audience fit | 8 | **9** | 5 | 8 |
| Prose/apparatus distinction | **9** | 7 | 6 | 8 |
| Personality potential | 8 | 6 | **9** | 6 |
| Differentiation from category | **8** | 4 | 7 | 7 |
| Mobile | 7 | **9** | 9 | 9 |
| Performance | 8 | **9** | 9 | 7 |
| Execution risk (resistance) | 7 | **9** | 6 | 5 |
| **Total** | 70 | **70** | 64 | 66 |

**A genuine tie**, and the tie is informative: D1 wins on editorial character and category differentiation; D2 wins on credibility, mobile and execution safety.

---

## Recommended direction: a hybrid, with the split defined by function

**Not a compromise — a functional assignment.**

| Role | Direction | Reason |
|---|---|---|
| **Prose (main column)** | **Editorial serif** (D1) | Long-form reading is the primary activity. Serif signals *this is meant to be read*, and differentiates from the sans-plus-mono default that every technical site already uses |
| **Apparatus / metadata** | **Technical sans** (D2) | The apparatus must read as a different register from the prose — the core device of the recommended investigation experience |
| **Literal values** | **Mono** | Semantic only: identifiers, hashes, repository names, dates, tabular figures |

**Why this beats either alone:** the recommended investigation experience depends on the reader instantly distinguishing *reasoning* from *apparatus*. Two type registers do that without a single line, box, or colour — which is exactly the restraint the principles demand.

**Discipline required:**
- Hierarchy primarily by **size and spacing**, weight held near-constant.
- **Three families is the ceiling.** A fourth is decoration.
- Serif must be a genuine text face, not a display face.
- Mono is never body prose and never a heading.

**Deferred to Phase 5:** specific families, scale, measure, licensing, and whether the type budget supports a distinctive licensed face. Research says this is the highest-value place to spend it.
