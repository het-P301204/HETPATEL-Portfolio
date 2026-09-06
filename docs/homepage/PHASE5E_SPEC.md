# Phase 5E — Homepage Specification

**Date:** 2026-08-15 · **Status: prototype built and validated in a browser.**
**Direction E — The Standing Record.**

Implementation: `prototype/index.html`, sharing `prototype/style.css` with the investigation page.
**One design system, two information hierarchies.** No new colour, typeface or spacing value.

---

## 1. Structure

```
header                 navigation only — the name is the h1 on this page
  ── OPEN ──
h1                     Het Patel
  ── TIGHT ──
.lede                  the LANE — 1.3rem, 54-56 characters
  ── MAJOR ──
The work               professional experience at method level
  ── MAJOR ──
Selected investigations  status + origin, never date-first
  ── MAJOR ──
One of them, in full   question · one reasoning move · one admitted limit
  ── MAJOR ──
Working on now         optional; removed rather than padded
  ── MAJOR ──
Contact                email · LinkedIn · GitHub
  ── MAJOR ──
footer
```

Each position is a `<section aria-labelledby>` with a `.region-label`. Six labelled regions, one
`h1`, one `h2`.

---

## 2. Values

Inherited from 5D unchanged: `--ground #FBFAF7` · Newsreader / Public Sans · `--measure 27em` ·
`--box` per breakpoint · TIGHT 0.4× / NORMAL 0.85× / OPEN 2.2× / MAJOR 4.0× · light only.

New in 5E:

| Token | Value | Reason |
|---|---|---|
| `.lede` font-size | `1.3rem` (1.15rem ≤ 600px) | Reads as an identity statement rather than as the first paragraph of an article. MEASURED 54–56 characters |
| `.home .region-label` | `.9375rem`, weight 500, `--text-secondary` | At the apparatus treatment (13.5px muted) labels MEASURED as captions and the page read as continuous prose. E-2 |
| `.worklist > li > a` | serif `1.1rem`, accent | A work title, not a headline and not a nav link |
| `.wmeta` | sans `.84375rem`, muted | `status · origin`. **No date** |
| Standalone link padding | `.35em 0` | WCAG 2.2 target size. E-3 |
| `.placeholder` | sans, `--code-ground` | Prototype scaffolding, deliberately un-designed |

---

## 3. Binding rules

1. **T9** — the homepage must read as a portfolio before it reads as a publication.
2. **No dates in the selected-work list.** Status and origin lead. Adding dates flips two of the six
   portfolio signals at once and is the easiest way to turn the page into a blog index.
3. **No capability claim without its evidence named in the same sentence.** There is no tool list.
   A tool is named only inside a sentence about work done with it.
4. **Sections disappear rather than emptying.** Positions 3, 4 and 5 are individually droppable.
5. **Role precision** — *worked on*, *assisted with*. Never *conducted*, *led*.
6. **Confidentiality is unremarked.** No "[REDACTED]", no NDA note, no sentence pointing at the
   boundary.
7. **The employer is named.** It is on the resume, and it is the strongest single signal that the
   work is professional.
8. **Nothing fabricated.** Missing content renders as a visible placeholder.

---

## 4. Content volume behaviour

| | 1 investigation | 3 *(launch)* | 8 | 25 |
|---|---|---|---|---|
| Identity | ✅ | ✅ | ✅ | ✅ |
| The work | ✅ | ✅ | ✅ | ✅ |
| Selected | ❌ omitted | ✅ 3 | ✅ 5, grouped by problem | ✅ 5, grouped |
| One in full | ✅ | ✅ | ✅ | ✅ |
| Now | ◐ | ◐ | ✅ | ✅ |
| Contact | ✅ | ✅ | ✅ | ✅ |

**Nothing structural changes between 3 and 25.** Thematic grouping (Kettle) activates at ~8 as a
content change, not a redesign. The selected list never exceeds five: the homepage is an entrance,
not a directory.

---

## 5. Validated

MEASURED in the rendered page at ten viewports from 320 to 1920:

| | |
|---|---|
| Reading measure | 62–63 characters prose, 54–56 lede |
| Links below 24px | **0** at every viewport |
| Left edges | **1**, verified to 0.1px |
| Horizontal overflow | none, including 320px |
| Contrast | **all 10 homepage roles pass AA**; 8 of 10 pass AAA |
| Headings | one `h1`, one `h2`, no level skipped |
| Landmarks | header · nav[aria-label] · main · footer · 6 × section[aria-labelledby] |
| JavaScript | **0 bytes** |
| Images / SVG / icons | **0** |
| Page weight | HTML 8.2 KB + CSS 18.1 KB uncompressed (**≈10 KB gzipped**), plus the same 217 KB of fonts as 5D |
| Portfolio-vs-publication | **5 portfolio signals, 1 mixed, 0 publication** |

OBSERVED at 1280 and 375: first screen, selected work, featured investigation, page ending, and the
generic comparison.

---

## 6. Open, and Het's to decide

| # | Question | Impact | Status |
|---|---|---|---|
| 1 | ~~May the CSCRF/IRDAI work be described in connection with Info eShield?~~ | Position 2 | ✅ **RESOLVED 2026-08-15 — yes** |
| 2 | ~~What specifically is cleared for publication about that work?~~ | Position 2 | ✅ **RESOLVED 2026-08-15** |
| 3 | Which real investigations exist, and which may carry `origin: professional`? | Position 3 | ⏳ open |
| 4 | Is anything genuinely current for "Working on now", or is it removed? | E-6 | ⏳ open |
| 5 | Add `Contact` to the navigation? | E-5 | ⏳ open |
| 6 | Publish a resume link? | Position 6 | ⏳ open |

**The blocking pair is cleared** (P5EV-009). Position 2 now carries verified content end to end and
its placeholder is removed. Item 3 becomes the remaining content blocker: the clearance makes
`origin: professional` investigations possible but does not create one, and the Info eShield
engagement is explicitly **not** to be converted into a public investigation.

---

## 7. Before production

- Self-host and subset the fonts; preload only what is used; keep the Times-metric fallback;
  re-verify CLS. (Het's decision 4, deferred from 5D.)
- Strip the explanatory comments from `style.css` — they are ~40% of its 18.1 KB and exist to record
  measurements, not to ship.
- Remove `.proto` and `.placeholder` rules and all prototype fixtures.
- Add `<meta name="description">`, Open Graph and JSON-LD — **with no location field**, per the
  standing constraint that the site must survive an international move unchanged.
- Decide `Contact` in navigation (E-5) and the trajectory sentence (E-6).

---

## 8. Explicitly not authorised by 5E

Production deployment · full site implementation · the investigation index · Notes · About ·
authentication · CMS · database · analytics · backend · WebGL · 3D · animation · SEO
implementation · domain configuration.

**5E is homepage design, prototype and validation only.**
