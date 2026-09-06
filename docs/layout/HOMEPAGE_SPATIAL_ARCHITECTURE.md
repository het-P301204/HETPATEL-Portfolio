# Homepage Spatial Architecture

**Date:** 2026-08-14 (Phase 5B) · Spatial hierarchy only. Not building the homepage.

---

## Sequence

```
site identity + navigation           header, small
      ── MAJOR ──
identity statement                   2–3 sentences, L3 prose
      ── MAJOR ──
FEATURED INVESTIGATION               the visual centre of gravity
  title (L2)
  head apparatus
  question + opening reasoning
  → continue reading
      ── MAJOR ──
index preview                        3–5 rows, index geometry
  → all investigations
      ── MAJOR ──
recent notes                         1–3, inline
  → all notes
      ── MAJOR ──
contact                              email · GitHub
```

---

## Space allocation

| Element | Share | Reason |
|---|---|---|
| Identity statement | ~15% | Orientation. Must be complete in one screen at every viewport |
| **Featured investigation** | **~45%** | The demonstration. It is why the page exists |
| Index preview | ~25% | Range and organisation |
| Recent notes | ~10% | Currency |
| Contact | ~5% | Utility |

**The featured investigation gets the most space by a wide margin.** This is the H1 decision from Phase 4: a visitor who reads only the homepage should still have *seen* reasoning and an admitted limit.

---

## The identity statement

Two or three sentences, in prose, at body size. Name is in the header; this block says what he does.

**Not:** a hero, a tagline, large display type, an animated line, or a portrait. It must be readable in the first screen at 375px without scrolling.

---

## The featured investigation

**Not a card. Not a teaser.** A genuine excerpt — title, head apparatus, the question, and enough opening reasoning that the shape is visible — then a link to continue.

**Selection rule:** prefer an `open` investigation over a `closed` one when both are recent. This is the surviving, safe form of Phase 4's rejected "standing question" homepage — it surfaces live work without promising a cadence.

**Fallback:** most recent.

---

## Behaviour by content volume

| | 1 investigation | 3 | 5 | 10 |
|---|---|---|---|---|
| Identity statement | ✅ | ✅ | ✅ | ✅ |
| Featured investigation | ✅ **full** | ✅ | ✅ | ✅ |
| Index preview | ❌ **omitted** | ✅ 2 rows | ✅ 4 rows | ✅ 5 rows |
| Recent notes | ❌ unless notes exist | ✅ if ≥2 | ✅ | ✅ |
| Contact | ✅ | ✅ | ✅ | ✅ |
| Page length | ~1.5 screens | ~2.5 | ~3 | ~3 |

**At one investigation the homepage is three blocks and ends.** No index preview of one item, no "more coming soon". The page is short because the site is small, and that reads as deliberate.

**At ten it does not grow further** — the preview stays at five rows. The homepage is an entrance, not a directory.

---

## What the homepage does not contain

Skills · certifications · stat counters · card grid · roadmap · photo · testimonials · availability banner · newsletter signup · GitHub activity · "recruiter view" block.

**The roadmap exclusion is the significant one.** 219 documented concepts against near-zero built repositories is the site's most dangerous asset; on the homepage it would read as planning substituting for doing.

---

## Time-based targets

| Time | Achieved by |
|---|---|
| **5s** | Header + identity statement — name, discipline, that the work is professional |
| **30s** | Featured investigation's title, apparatus and question |
| **2min** | Reading the featured excerpt, including one admitted limit |
| **5min** | Index preview scanned; one full investigation opened |

**The 5-second target must be met without scrolling at 375px.** This is the binding constraint on the header and identity block.
