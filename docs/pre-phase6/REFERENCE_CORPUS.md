# Reference Corpus

**Date:** 2026-08-15 · **Method:** Apify (`apify/rag-web-browser`) to harvest the Awwwards
portfolio index, then **live browser rendering of the actual sites** — not screenshots of
screenshots, not judgement from markdown.

**Status: 30 catalogued, 12 rendered and analysed in depth** (updated 2026-08-15 after the expanded
round). Two intended renders failed — PX PUSH (preview pane stopped compositing) and Studio K95
(not attempted). Both are general portfolio sites in a category already represented four times.

**The expanded round added three architecture practices beyond the Awwwards list** — Herzog & de
Meuron, Caruso St John and OMA — because archive-led practices are a closer analogue to Het's
problem than any portfolio. That call produced the most useful finding of the round; see
[`HYPOTHESIS_TESTS.md`](HYPOTHESIS_TESTS.md) H8.

---

## Why rendering the references matters

The previous round of this project failed because design was reasoned about and never seen. The
same error applies to research: reading that a site "uses bold typography" tells you nothing.
Rendering it tells you the type bleeds off the right edge of the viewport, which is the actual
transferable idea.

**Every principle in [`REFERENCE_ANALYSIS.md`](REFERENCE_ANALYSIS.md) is drawn from a site I
loaded and looked at.** Sites in the catalogue below that are not marked RENDERED contributed
nothing to the principles yet.

---

## Rendered and analysed — 12

| # | Site | URL | Author | Category | Awwwards |
|---|---|---|---|---|---|
| R1 | Léo Parpeix — Portfolio 2026 | `leoparpeix.com` | Léo Parpeix | Art director / interactive | Portfolio index |
| R2 | Emilian — Creative Developer | `emilianmisera.com` | Emilian Misera | Creative developer | Portfolio index |
| R3 | HAOQI.DESIGN | `haoqi.design` | Haoqi Wen | Design engineer | **SOTD + Developer Award**, Aug 14 2026 |
| R4 | NOTHIN' | `noth.in` | Thomas Carré | Studio / personal | **SOTD + Developer Award**, Aug 10 2026 |
| **R5** | Herzog & de Meuron | `herzogdemeuron.com` | H&dM | **Architecture practice** | — |
| **R6** | Caruso St John Architects | `carusostjohn.com` | Caruso St John | **Architecture practice** | — |
| **R7** | OMA | `oma.com` | OMA | **Architecture practice** | — |
| **R8** | Nabil Issa Architect | `nabilissa.com` | The First The Last | **Architecture** | Portfolio index |
| **R9** | ULTRAGRID | `ultragrid.studio` | Thibaut Oung | Creative developer | Portfolio index |
| **R10** | OKC Media | `okc.media` | Vadim Smirnov | Studio, minimal | Portfolio index |
| **R11** | Michael Tsirakis | `michaeltsirakis.com` | M. Tsirakis | Personal, designer | Portfolio index |
| **R12** | DaveJ.com | `davej.com` | Dave Johnson | Personal, creative director | Portfolio index |

**R3 and R4 are the two most relevant to Het** — both are design-engineer sites that won a
*Developer* award, meaning the craft is in the build rather than in illustration. Het has no
imagery and no illustrator; sites that win on rendering and interaction are the correct reference
class. R1 is image-led and is included as a counter-example.

---

## Catalogued, not yet rendered — 26

Harvested from the Awwwards Portfolio index, 2026-08-15. Priority column reflects likely
relevance to a text-and-evidence portfolio with no imagery.

| # | Site | URL | Author | Signal | Priority |
|---|---|---|---|---|---|
| C1 | PX PUSH | `pxpush.com` | Lewis Webber | SOTD + Dev Award, Aug 15 | **High** |
| C2 | Studio K95 | `k95.it` | Studio K95 | SOTD, Aug 11 | **High** |
| C3 | Michael Tsirakis — Designer | `michaeltsirakis.com` | M. Tsirakis | Personal, designer | **High** |
| C4 | DaveJ.com | `davej.com` | Dave Johnson | Personal | **High** |
| C5 | Shaun Scholtz — Product Designer | `shaunscholtz.com` | S. Scholtz | Personal, product | **High** |
| C6 | Mehdi Bouayaben — Portfolio | `bouayaben.com` | M. Bouayaben | Personal | **High** |
| C7 | Gabriel Beaugonin | `gabrielbeaugonin.com` | G. Beaugonin | Personal, PRO | **High** |
| C8 | ZUI_OS | `zui.ooo` | guacamozi | Interface-led personal | Medium |
| C9 | PouyaOS | `pouyashahri.com` | Pouya Shahri | Interface-led personal | Medium |
| C10 | ULTRAGRID | `ultragrid.studio` | Thibaut Oung | Grid-driven studio | **High** |
| C11 | Still Making Stuff | `stillmakingstuff.com` | mdaniachi | Personal | Medium |
| C12 | ree\|b. Handheld Portfolio | `areebali.com` | Areeb Ali | Personal, mobile-first | Medium |
| C13 | Zecco's Design Portfolio | `zalak-patel.com` | Zalak Patel | Personal | Medium |
| C14 | Scheme Engine | `schemeengine.com` | Blackpepper Studio | Studio | Medium |
| C15 | Pensatori Irrazionali | `pensatori-irrazionali.com` | — | Editorial/studio | Medium |
| C16 | OKC Media — Evolved Simplicity | `okc.media/en/` | Vadim Smirnov | Studio, minimal | **High** |
| C17 | Nabil Issa Architect | `nabilissa.com` | The First The Last | Architecture | **High** |
| C18 | SLY | `sly.clubop.site` | SLY | Studio | Low |
| C19 | s0 | `s0animation.com` | s0 | Animation | Low |
| C20 | Brikken+Co | `brikken.co` | Brikken+Co | Studio | Low |
| C21 | Goodgrowth | `goodgrowth.com` | goodgrowth | Brand | Low |
| C22 | Pamidor Design | `pamidordesign.com` | pamidor | Personal | Low |
| C23 | Josh Goldsmith — Director & EP | `josh-goldsmith.com` | jashhh | Film | Low |
| C24 | CA Film Creatives | `charlesalexandertv.com` | The Moss WDS | Film | Low |
| C25 | Robby Yeager's Marketing Portfolio | `robbyyeager.com` | R. Yeager | Personal, marketing | Low |
| C26 | CRISP Barbershop | `crispmtl.com` | Casa Media | Commercial | Low |

**Architecture (C17) is deliberately in the high-priority list.** Architecture practices have the
same problem Het has: serious, technical, evidence-heavy work that must be presented without
gimmicks, usually with limited imagery and a lot of documentation. It is a closer analogue than any
security site.

---

## Explicitly excluded from the corpus

**Security-industry websites.** Per the brief they are used only to understand what to avoid, and
they are catalogued in [`ANTI_PATTERNS.md`](ANTI_PATTERNS.md) rather than here. The objective is to
**escape the cybersecurity visual category**, so it cannot supply the references.

**Template marketplaces**, including the Figma community portfolio templates. They were reviewed as
a source of anti-patterns only — a template's job is to be adaptable, which is the same thing as
generic.

---

## Still to do

- Render C1–C7, C10, C16, C17 — the ten high-priority references.
- Capture each at first load, hero, first scroll, work index, work interaction, about, footer.
- Extend the catalogue toward 40–60 via Awwwards pages 2–5 and Dribbble.
- Record per-site: typography, hero, composition, work presentation, motion, interaction,
  navigation, whitespace, imagery, colour, strongest decision, weakest decision, what transfers,
  what must not transfer, genericity risk, originality signal.

**Nothing in the direction work should be treated as final until at least the ten high-priority
references have been rendered.** What exists now is enough to correct the errors that were made,
which is a lower bar than being enough to design against.
