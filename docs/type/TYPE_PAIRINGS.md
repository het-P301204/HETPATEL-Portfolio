# Type Pairings

**Date:** 2026-08-14 (Phase 5C)

---

## Pairings tested

| | Prose | Apparatus | Literals |
|---|---|---|---|
| **A** | Newsreader (Text) | Public Sans | system mono |
| **B** | Source Serif 4 | Source Sans 3 | system mono |
| **C** | Literata | IBM Plex Sans | IBM Plex Mono |
| **D** | Newsreader | IBM Plex Sans | system mono |
| **E** | Source Serif 4 | Public Sans | system mono |

---

## Evaluation

| | **A** | B | C | D | E |
|---|---|---|---|---|---|
| Visual hierarchy | **9** | 8 | 8 | 8 | 8 |
| Reading quality | **9** | 9 | 9 | 9 | 9 |
| **Apparatus distinction** | **9** | **6** | 8 | **9** | 8 |
| **Register coherence** (colleagues, not opposites) | **9** | **10** | 7 | 6 | 8 |
| Personality | **8** | 5 | 7 | 7 | 6 |
| Technical credibility | 8 | 8 | **9** | **9** | 8 |
| Academic risk *(lower better)* | 6 | 7 | 7 | 7 | 7 |
| Corporate risk | 8 | 8 | **4** | 5 | 8 |
| Genericity risk | 8 | 7 | 6 | 7 | 7 |
| Payload (families to download) | **2** | 2 | **3** | 2 | 2 |
| **Total** | **82** | 76 | 71 | 75 | 77 |

---

## The revealing result: Pairing B

**Source Serif + Source Sans scores highest on coherence (10) and lowest on apparatus distinction (6).**

That is not a coincidence — it is the same property viewed twice. They are siblings from one superfamily, so they share skeletons, proportions and temperament. The result is a page where the two registers blend, and the two-register system loses its only carrier.

**This clarifies the requirement.** `TYPE_CONTRAST.md` asked for the sans to be "the serif's colleague, not its opposite." Pairing B shows the failure on the *other* side: a sans that is the serif's **sibling** is too close.

> **The target is a colleague — same temperament, different discipline. Not a sibling, not a stranger.**

---

## Recommendation: **Pairing A — Newsreader (Text) + Public Sans + system mono**

**Why it wins:**

1. **Best combination of distinction and coherence.** Newsreader is a contemporary transitional serif with sturdy open shapes; Public Sans is a Franklin-derived grotesque with comparable sturdiness. Different classifications, shared character. **Serif-plus-Franklin is a long-standing newspaper pairing**, which is exactly the sober printed register the site wants.
2. **Two downloaded families.** Pairing C needs three.
3. **Lowest corporate risk** among the distinct pairings — Plex-based options score 4–5.
4. **Personality without fashion.** Newsreader supplies authored character; Public Sans supplies none by design, which is correct for metadata.

**Fallback: Pairing E** (Source Serif + Public Sans). If Newsreader reads as academic in 5D, swapping the serif alone preserves the pairing logic — Public Sans remains the colleague. **This is why the sans was chosen for compatibility with a *class* of serif rather than with one specific face.**

**Rejected: Pairing C.** Best technical credibility, worst corporate risk, and three families for no gain.

---

## Coherence requirements for 5D verification

1. **Comparable x-height** — a large gap makes the registers look pasted together.
2. **Shared temperament** — both contemporary, both sturdy. Verified on paper; must be confirmed rendered.
3. **The sans must hold at small sizes** — its entire job.
4. **The pair must read as one design.** The blur test in `TYPE_CONTRAST.md`: at heavy blur, two distinct textures, one coherent page.
