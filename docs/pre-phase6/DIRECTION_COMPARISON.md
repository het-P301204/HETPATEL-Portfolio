# Direction Comparison — re-scored against the expanded corpus

**Date:** 2026-08-15 · 12 rendered references. See [`HYPOTHESIS_TESTS.md`](HYPOTHESIS_TESTS.md).

The five directions were **not** preserved by default. Two changed materially, one was eliminated,
and **one new direction was created** because the architecture corpus produced a model none of the
five covered.

---

## What the new evidence changes

| Finding | Consequence for the directions |
|---|---|
| Container ban was too strong (H1) | Directions no longer need to contort to avoid all boundaries. A single high-contrast editorial box is available |
| Mono-label ban was too strong (H3) | **A wholly-mono direction is now viable** — H&dM proves it reads as archive, not tooling |
| Overflow confirmed and broadened (H4) | Overflow applies to navigation and to the bottom edge, not just the wordmark |
| Identity-without-imagery is a narrow path (H5) | Directions relying on one typographic gesture carry more risk than previously scored |
| State-as-space has no precedent (H7) | Direction E's risk rating rises |
| Architecture model: name, then the work (H8) | **No direction covered this.** Now added as direction F |

---

## The new direction

### DIRECTION F · PRACTICE

**Core idea.** From Caruso St John and Herzog & de Meuron: **no hero at all.** The name sits at
moderate scale flush left, and the work begins immediately. The site is a finding aid for a body of
work, and authority comes from the work being present and well-indexed rather than from a claim.

**Visual language.** Committed monospace throughout at readable size — H&dM's register, not
micro-labels. High contrast. Investigation titles at 40–56px. Plain bold word labels
(`Closed`, `Open`, `Revised`) as Caruso St John uses `Completion`. No stance sentence in the hero;
the positioning appears once, low, as a plain line.

**Credibility.** As a sentence, per Michael Tsirakis: *"Cybersecurity Intern at Info eShield Cyber
Solutions. Assisted on CSCRF and IRDAI audit engagements in the financial sector."* No badges.

**Strength.** The only direction with a proven analogue for Het's exact problem — serious,
evidence-heavy, low-imagery, credibility without salesmanship. Scales indefinitely. Lowest
execution risk of any direction.
**Weakness.** Least *immediately* striking. Risks reading as austere at three investigations, where
the archive model is weakest. This is the low-content-volume problem in its sharpest form.
**Risk if it fails:** it becomes the rejected editorial site again, in mono.

---

## Re-scored — all six

Scores changed from the previous round are marked **↑** / **↓**.

| | A · Overflow | B · Plumb Line | C · Field & Figure | D · Marginalia | E · State | **F · Practice** |
|---|---|---|---|---|---|---|
| Visual impact | 9 | 7 | 9 | 6 | 7 | **5** |
| Personal identity | 9 | 8 | 5 | 8 | 9 | **6** |
| Memorability | 9 | 7 | 8 | 6 | 8 | **5** |
| Cybersecurity credibility | 7 | 8 | 5 | 8 | 7 | **9 ↑** |
| Big Tech hiring | 7 | 8 | 5 | 8 | 7 | **9** |
| Interaction quality | 8 | 7 | 6 | 8 | 9 | 6 |
| Motion quality | 9 | 8 | 7 | 6 | 8 | 5 |
| Originality | 8 | 8 | 4 ↓ | 7 | **10** | 7 |
| Content scalability | 7 | 9 | 5 | 8 | 8 | **10** |
| Mobile quality | 5 ↓ | 8 | 7 | 5 | 6 | **9** |
| Generic-portfolio resistance | 9 | 8 | 3 ↓ | 8 | **10** | 8 |
| **Total /110** | **87** | **86** | **64** | **78** | **89** | **79** |

**Changes explained.**

- **A · mobile 7 → 5.** Deliberate overflow at 375px is materially harder than I credited. Every
  overflow reference rendered was assessed at desktop width; none proved the device survives a phone.
- **C · originality 5 → 4, resistance 5 → 3.** OKC Media is a saturated field with small identity
  type and a two-word statement — competent and completely category-generic. C would land there.
- **F · credibility 9.** The only direction with a rendered analogue solving this exact problem.

---

## Recommendation — prototype three

**Do not read the totals as a ranking.** E scores highest and carries the most risk; F scores
mid-table and is the safest. The three below are chosen because they **fail differently**, which is
what makes a comparison informative.

### 1 · Direction A — OVERFLOW
**Why it survived.** H2 and H4 are the two findings that went 12-for-12, and A is built entirely
from them. It is the strongest answer to the five-second and 20-portfolio tests.
**What it risks.** Mobile. Clipped type at 375px may be illegible or look broken, and no reference
demonstrated it working small. If overflow does not survive mobile, A loses its whole idea.

### 2 · Direction F — PRACTICE
**Why it survived.** The only direction with a proven analogue for an evidence-heavy, low-imagery,
credibility-driven practice. H3's rewrite makes a wholly-mono treatment viable, and H8 confirms the
register survives in security. Highest credibility and scalability scores.
**What it risks.** Austerity at three investigations. The archive model presumes an archive; Het has
three items. If it reads thin, it collapses back toward the rejected site.

### 3 · Direction E — STATE
**Why it survived.** The single highest originality and generic-resistance score, and the only
direction that could not be another person's website. It turns Het's revision discipline — the
strongest asset found in the entire 5G validation — into the visual system.
**What it risks.** H7 found **no precedent in twelve sites.** Position-as-data must be learnable in
seconds or it is a puzzle. Highest chance of outright failure, and the highest ceiling.

### Not prototyped
- **C · Field & Figure** — eliminated. OKC Media is what C becomes: competent and generic.
- **B · Plumb Line** — held. Its ideas overlap with F's structure; if F is too austere, B's plumb
  line is the first thing to add.
- **D · Marginalia** — held. Its margin-as-annotation mechanism should be tested inside E, where
  annotation and revision are the same idea.

---

## Exact prototype test plan

### Build
Three directions — **A, F, E** — each an independent stylesheet, no shared components.

Four pages each: **Home · Investigations index · One investigation · About.**

### Render and inspect
**375 · 768 · 1440**, each page, each direction — 36 renders. Plus 320 and 1920 on the winner.

### Per-render measurement
Reusing the 5G harness (`tools/measure.js`, validated against real viewports): horizontal overflow,
tap targets ≥24px, contrast on every text role, chars-per-line, page height, heading order.

### Specific tests, each with a pass condition

| # | Test | Pass condition |
|---|---|---|
| T1 | **Overflow survives mobile** (A) | Clipped type at 375 reads as deliberate, not broken. **If it fails, A is dead** |
| T2 | **Austerity at 3 items** (F) | The index does not read as thin or placeholder |
| T3 | **State is learnable** (E) | Position-as-data comprehensible without a legend within ~10s |
| T4 | Five-second test | Who / what / why-interesting answerable from the first viewport |
| T5 | 20-portfolio test | One thing remembered, and it is Het's identity — not a colour or an animation |
| T6 | Entrance choreography | 600–1200ms; site fully usable if the animation never runs |
| T7 | `prefers-reduced-motion` | Movement reduced, no information removed |
| T8 | Container audit | Every boundary justified against the H1 rule: interface or singular editorial emphasis |
| T9 | Mono audit | Committed voice at readable size, or absent. No tracked uppercase micro-labels |
| T10 | Genericity retest | Swap in Alex Sharma as security student / software engineer / product designer |
| T11 | No dev metadata | Zero prototype text in rendered output |
| T12 | Performance | CLS, request count, third-party requests against the target of zero |

### Decision rule
Select on **T1–T3 first** — each direction's specific failure mode. A direction that fails its own
core test is eliminated regardless of score. Then T4–T5. Then the rest.

---

## Honest position

Twelve of fourteen references rendered. The two misses (PX PUSH, Studio K95) are general portfolio
sites in a category already represented four times; the priority category — architecture — got three
practices plus one Awwwards site, and produced the most useful finding in the round.

Three hypotheses were changed rather than defended, one direction was eliminated, and one was
created from evidence that did not exist before. The corpus did real work.

**The one thing Het should decide before prototyping:** H5 established that every strongly memorable
personal site in the corpus uses a logo, photography, illustration or 3D — and the current rules
forbid all four. That leaves one lever, typography at extreme scale, with no fallback. **A single
portrait, used once, is the highest-leverage asset available** and it is currently excluded by
`ABOUT_LAYOUT.md`. That is a decision worth making deliberately rather than by inheritance.

READY TO PROTOTYPE
