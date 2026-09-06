# Phase 5B — Final Spatial Specification

**Date:** 2026-08-14 · **Status:** Complete. No code, no fonts, no colours.

**Units:** `ch` for reading regions, `rem` for structure, multiples of a type-derived base for vertical space. Pixel equivalents assume ~19px body and are indicative only.

---

## Widths

| Region | Preferred | Acceptable | Reason |
|---|---|---|---|
| Reading (prose) | **68ch** | 62–74ch | Classic 60–75 character measure; upper-middle suits a serif and tolerates long compound technical terms |
| About prose | 66ch | 60–72ch | Reference material, read once |
| Content region (index, figures, foot) | **46rem** | 42–52rem | Title + metadata on one line at desktop |
| Page container | **76rem** | 68–84rem | Caps outer-margin growth |
| Outer margin — mobile | **1.25rem** | 1–1.5rem | Text must not touch the edge |
| Outer margin — tablet | **2.5rem** | 2–3.5rem | — |
| Outer margin — desktop | auto (centred) | — | Column centres in the page container |
| Minimum viewport | 320px | — | Best-effort below |

---

## Vertical space

| Level | Multiple of base | Acceptable | Use |
|---|---|---|---|
| **TIGHT** | 0.4× | 0.3–0.5 | Label→value; date→entry |
| **NORMAL** | 1× | — | Paragraph→paragraph (**the base**) |
| **OPEN** | 2.5× | 2.2–3.0 | **Movement→movement — the section marker** |
| **MAJOR** | 4.5× | 4–6 | Region→region |

**Binding constraint: OPEN : NORMAL ≥ 2.2 : 1.** Base is derived from body line-height (5C), so the rhythm scales with type and with user font-size preferences.

---

## Grid and alignment

- **One left edge.** Title, apparatus, prose, insets, artifacts, foot, related — all aligned.
- **One measure** controlling prose width.
- **One vertical scale.**
- Column **centred** in viewport; content **left-aligned** within it.
- Two documented exceptions: the index and figures may reach content-region width.
- **No columns.** No side region at any breakpoint.

---

## Apparatus — Model C′

| Position | Contents | At launch |
|---|---|---|
| **Head** | status · date · domain · origin | Always present, always full |
| **Inline** | asides at point of relevance | Usually none |
| **Foot** | dated revision record | **Empty — renders nothing** |

Full measure, shared left edge, TIGHT internal spacing, no container, no rule, no colour. **Identical at every viewport.**

---

## Investigation page

```
← Investigations                          utility
TITLE                                     L1
status · date · domain · origin           head apparatus, TIGHT
                    ── OPEN ──
The question.                             first paragraph
                    ── NORMAL ──
What I did, and why                       prose (insets where useful)
                    ── OPEN ──
What I found
                    ── OPEN ──
What I couldn't determine                 same type, same gap
                    ── MAJOR ──
Artifacts                                 if any
                    ── MAJOR ──
Foot register                             if any
                    ── MAJOR ──
Related                                   if any
```

**No headings by default.** Internal L2 headings permitted only inside long movements — never as movement labels.

---

## Other surfaces

**Index:** three lines per row (title · framing sentence · metadata). Content width. NORMAL between rows. No thumbnails, cards, rules or excerpts. Reverse chronological. Filters at 10 (domain) and 15 (status), inside the index.

**Notes:** same 68ch measure. Rendered **inline in the index** below ~150 words. Date above; no status, no `origin`, no head block. OPEN between notes. Supersession as a dated line.

**About:** identity and "what I work on" take ~two-thirds. Experience as prose with role precision. Education and certifications TIGHT and low. Contact as text links. 1.5–2 screens.

**Homepage:** identity statement → featured investigation (~45% of the page) → index preview (max 5 rows) → recent notes → contact. Preview omitted at n=1.

**Navigation:** four items, top, **not sticky**, aligned to content width. Name is the home link. Back link above investigation titles.

---

## Responsive

| | Mobile | Tablet | Desktop | Ultra-wide |
|---|---|---|---|---|
| Measure | floors ~45–55ch | 62–68ch | **fixed 68ch** | fixed 68ch |
| Margins | 1.25rem | 2.5rem | grow, centred | capped at 76rem |
| Structure | **identical** | identical | identical | identical |
| Nav | 4 links, one line | 4 links | 4 links | 4 links |
| Apparatus | wraps to 2–3 rows | 1–2 rows | 1 row | 1 row |

**Two breakpoints, both content-driven:** ~600px (apparatus wrap) and ~1024px (measure fixes).

**Nothing is removed, reordered, or hidden at any width.**

---

## Confidence

**MEDIUM-HIGH.**

The system is internally consistent, derived from the approved foundations, and it survived twelve failure tests. Model C′ is a genuine improvement on 5A's Model C because it locates the distinctiveness where it actually exists — in the temporal record rather than in a masthead.

**Not HIGH, for three reasons:**
1. **The OPEN:NORMAL ratio is unvalidated** and is the load-bearing structural mechanism.
2. **The measure depends on a typeface not yet chosen.**
3. **F2 stands** — at launch the apparatus is a byline, and the concept's distinctiveness is a bet on content behaviour over twelve months (assumption A3), which cannot be tested in a prototype.
