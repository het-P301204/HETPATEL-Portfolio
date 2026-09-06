# Anti-Patterns

**Date:** 2026-08-15

Two sources: the overused portfolio patterns visible across the reference sweep, and — more
usefully — **the patterns I actually produced and had rejected.** The second list is more valuable
because it documents how a reasonable process arrives at a bad result.

---

## Part 1 — The self-inflicted anti-patterns

These were built, rendered, and rejected in this project. Each entry records the *reasoning that
produced it*, because that reasoning will recur.

### A-1 · The container reflex

**What I did.** Every time content needed separating I reached for a bordered region: a five-cell
metric grid, a three-cell honesty strip, capability tag chips, panel-backed work rows.

**The reasoning that produced it.** "These facts belong together, so they need a boundary."

**Why it is wrong.** Proximity, alignment, scale and field group content without announcing a
component, and I reached past all of them.

**REVISED 2026-08-15 after the expanded corpus.** The original rule here was *"zero containers,"*
generalised from four sites. **Twelve sites disprove it.** OMA uses a red-outlined news box;
Herzog & de Meuron builds its entire navigation from pill chips. Both are excellent.

**Corrected rule.** A container is legitimate when it **is the interface** or is a **singular
editorial emphasis**, at high contrast and readable scale. It is illegitimate when it is a
**repeated, low-contrast wrapper around metadata**.

| Illegitimate — what I built | Legitimate — OMA, H&dM |
|---|---|
| Repeated uniformly | Used once, or *is* the navigation |
| Grey border on grey ground | Red outline; white on pure black |
| 11–13px contents | 24px+ contents |
| Wraps metadata *about* content | Is the content |
| Deletable with no loss | Load-bearing |

The failure was never the border. It was **repetition of neutral wrappers around secondary
information.**

### A-2 · Monospace micro-labels as the technical signal

**What I did.** Uppercase, letter-spaced, 11px mono labels on every region, every field, every
number, in all four directions.

**The reasoning.** "Mono reads technical, and it avoids every banned cybersecurity cliché."

**Why it is wrong.** It avoided the *old* clichés by inventing a new one. A surface covered in tiny
mono labels is a developer tool — Vercel, Linear, Grafana. HAOQI.DESIGN sets a whole paragraph in
mono and reads as an engineer's site; the difference is not the typeface, it is that labels imply an
interface and prose implies a person.

**REVISED 2026-08-15.** The original rule — *"mono may not label regions"* — is disproven.
**Herzog & de Meuron sets its entire site in monospace**, navigation labels included, and reads as a
scholarly archive rather than as tooling.

**Corrected rule.** Mono is safe as a **committed voice at readable size**. It becomes developer
tooling when it is a **small, tracked, uppercase accent sprinkled around a sans-set page**. The tell
is size and commitment, not placement — a wholly-mono site reads as archive; a sans site with mono
sprinkles reads as dashboard. Mine were 11px, uppercase, `.14em` tracked, grey on near-black, and
decorative. H&dM's are ~24px, sentence case, white on black, and are the interface.

### A-3 · The dashboard readout

**What I did.** Direction D opened with a bordered five-cell strip: Role / Since / Regulated /
Frameworks / In progress.

**The reasoning.** "Every credibility fact above the fold, scannable in one pass."

**Why it is wrong.** The content goal was right and the form was a dashboard. I noted at the time
that it "flirts with a banned pattern" and shipped it anyway, which is worse than not noticing.
**A correct goal does not license a banned form.** The same facts can be a sentence, a run of prose,
or type at varying scale.

### A-4 · Hero-then-centred-column

**What I did.** All four directions: a composed hero, then everything below in one centred measure.

**Why it is wrong.** The art direction stops after 900px. Below the fold every direction reverted to
the layout that was rejected in the first place. **The composition has to continue down the page** —
alignment should change, scale should change, the axis should move.

### A-5 · Grey-and-orange as "premium"

**What I did.** Near-black ground, grey secondary text, one warm accent — in three of four
directions.

**Why it is wrong.** That is the palette of every security product on the market. Reaching for it
while trying to escape the security category is self-defeating. Het named this exactly:
*"black + grey + monospace + orange accent … is already producing the security-dashboard feeling."*

### A-6 · Development metadata in the interface

**What I did.** Shipped `[HYPOTHETICAL VALIDATION CONTENT]` above the name on every page through
five phases, and classified it in validation as "scaffolding" rather than as a defect.

**Why it is wrong.** It is the first thing a visitor reads. **Rule: prototype disclosure lives in
HTML comments and documentation. Never in rendered output.**

---

## Part 2 — Overused portfolio patterns

The sequence a visitor has already seen twenty times.

| # | Pattern | Why it fails Het |
|---|---|---|
| 1 | Hero → cards → skills → timeline → contact | The default. Blending into it is the failure mode the brief names |
| 2 | Project card with thumbnail, title, tag row, "View project" | Announces that the work needs packaging to be interesting |
| 3 | Skill bars / percentage proficiency | Fake precision; unfalsifiable |
| 4 | Logo wall of certifications | The trust model ranks credentials low; a wall inverts it |
| 5 | Vertical resume timeline with dots and connectors | A dated paragraph is more precise and implies less history |
| 6 | Animated counters — "50+ projects, 3 years" | Fake metrics, explicitly banned, and Het has seven months |
| 7 | "I'm a passionate cybersecurity professional…" | Generic biography; asserts what evidence should show |
| 8 | Full-screen scroll-jacked sections | Takes control from the reader for no informational gain |
| 9 | Mouse-scroll indicator | Observed on R2 and it dates the site instantly |
| 10 | "Let's work together" / "Book a call" CTA block | Consultancy language; Het is seeking employment, not clients |

---

## Part 3 — Category bans

### Cybersecurity aesthetics — permanently out

Neon green · glowing blue · matrix rain · binary · terminal windows · fake command lines · fake
scanning · lock icons · shield icons · CVSS badges · security HUDs · network diagrams ·
circuit-board graphics · hacker imagery · "system breach" animation.

**Security-industry sites are excluded from the reference corpus entirely.** They are the category
being escaped, so they cannot supply the vocabulary.

### Interface aesthetics — out for this project

Cards of any kind · dashboards · sidebars · metric grids · status panels · badge rows · SaaS UI ·
glassmorphism · component showcases · documentation layouts · three-column dashboards.

### Decoration — out

Gradients as filler · glowing borders · particles · cursor trails · abstract blobs · spinning 3D
objects · random tech filler · infinite animation · animation on every element · excessive parallax
· fake loading progress.

---

## Part 4 — The test that catches all of it

Before any composition is accepted, answer both:

**1. Could I delete every border, background fill and rounded corner and would the layout still
hold?** If not, the structure is carried by containers rather than by composition.

**2. Would this page still look like this if the content were about a product designer?** If yes,
the visual identity is generic and Het's material is not doing any work.

The second test is `GENERICITY_RETEST.md` and it is the one the previous directions would most
likely fail, because a bordered metric grid describes anything.
