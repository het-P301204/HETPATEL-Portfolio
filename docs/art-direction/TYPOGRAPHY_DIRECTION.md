# Typography Direction

**Date:** 2026-08-15

Het asked one question and it deserves a direct answer before anything else.

> Does the typeface make Het feel like **(A)** a security engineer with an intellectual
> personality, or **(B)** a writer who happens to work in cybersecurity?
> If B, reject it.

---

## Newsreader — rejected

**It is B. Reject it.**

Not a close call, and the evidence is in what the face was built for. Newsreader is a
Google-commissioned text family designed for **long-form on-screen reading** — news and article
settings. It has optical size axes tuned for running text, oldstyle figures, and a moderate
contrast built for comfort over hundreds of words.

Every one of those properties is a *reading* property. None is an *identity* property.

| Symptom, measured in 5G | Cause |
|---|---|
| The largest element on a 1280 screen is 34px | The face has no display cut being used; at large sizes it stays bookish rather than becoming a statement |
| Oldstyle numerals throughout | Correct for a novel, wrong for `2026-02-19`, CVSS values, dates and version strings — the numerals in a security context should be tabular and even-height |
| No mono anywhere in the identity | The site never once looks like it was made by someone who works with systems |
| The whole page reads as an article | Serif body + serif headings + serif titles = one register, and that register is "publication" |

The 5G portfolio-vs-publication test recorded Notes at **3 of 8 archive signals**. Some of that is
structural, but the face is doing real work in that reading. A literary serif setting dated entries
in reverse chronological order *is* a blog, typographically.

**One thing Newsreader got right and it should be preserved as a principle:** the Times-metric
fallback chain measured a **zero-line-shift** font swap and CLS 0. Whatever replaces it must be
re-verified the same way.

---

## What the replacement has to do

| Requirement | Why |
|---|---|
| Carry a **display register** — work at 80–170px without becoming decorative | The hero failure was scale, not colour |
| Carry a **technical register** — a real monospace with character | Security work is systems work; the type should know that |
| Tabular, even-height figures | Dates, versions, CVEs, framework numbers |
| Tight negative tracking at display size | This is most of what separates "premium" from "default" |
| Free and self-hostable | `PHASE5G_SPEC.md` §6 targets **0 third-party requests**; 5G measured 4 |
| Screen-native | Not a print revival pressed into a browser |

---

## Directions tested

Four systems were built and rendered rather than argued about. Each pairs a display face with a
mono, because **the sans/mono pairing is the mechanism that makes a page read as technical without
a single cliché** — no terminal, no green, no scan lines. The mono does the work.

### 1 · Geist + Geist Mono — direction A (SIGNAL)

Vercel's family, screen-native, free. Neutral grotesk with slightly humanist terminals; the mono is
unusually good and shares the display's skeleton.

**Rendered at 104px:** confident, engineered, contemporary. Tight `-0.035em` tracking gives real
statement presence. The mono at `.16em` tracking, uppercase, reads as instrumentation rather than
as code.

**Verdict: strongest technical-premium result.** Says "design engineer." The risk is that Geist is
becoming the default of a certain kind of developer site — it is neutral enough to be anonymous if
the composition does not carry it.

### 2 · Instrument Serif + Inter + IBM Plex Mono — direction B (LEDGER)

A high-contrast **display** serif — importantly not a text serif — with Inter for body and Plex Mono
for labels.

**Rendered at 100px:** genuinely beautiful. The italic accent on *same object* is the single
prettiest moment across all four directions.

**Verdict: rejected for this brief, and it is the closest call.** It is still answer B. A display
serif is a *better* serif than Newsreader, but a serif hero on a security portfolio reads
"essayist." The italic pushes it further. Keep the idea of a serif accent; do not let it lead.

### 3 · Inter Tight + Geist Mono — direction C (FIELD)

Inter Tight at 600 weight, `-0.055em`, uppercase, at 170px as a stacked wordmark.

**Rendered:** the most *memorable* single image of the four. HET left, PATEL right in grey, huge.
Inter Tight is built for exactly this — display settings where standard Inter goes loose.

**Verdict: strongest identity, weakest signal.** The name is unmissable and the security lane is a
12px mono line underneath it. Fails success criterion 3 as composed.

### 4 · Space Grotesk + JetBrains Mono — direction D (CASEFILE)

Space Grotesk has actual quirks — the `G`, the `a`, the tightened joints — so it is not neutral.
JetBrains Mono is a genuine engineering face.

**Rendered:** technical and characterful, dense, precise. Best information typography of the four:
the five-cell readout strip is entirely mono and entirely legible.

**Verdict: strongest technical character, weakest display presence.** Space Grotesk is a good
20px–40px face and does not reward 100px+. As composed, the name at 52px is a heading, not a hero.

---

## What the rendering actually settled

1. **Serif hero is out.** Both serif options read as publication. Confirmed by rendering, not
   asserted.
2. **The mono is the cybersecurity signal.** Every direction reads technical, and the only shared
   mechanism is monospace micro-typography. It replaces every cliché the brief bans.
3. **Tracking at display size is most of "premium."** −0.03 to −0.055em is the difference between
   art-directed and default.
4. **Tabular figures are non-negotiable.** Oldstyle numerals in `2026-02-19` looked wrong the moment
   they were set beside a status field.

---

## Recommendation

**Display + UI: Geist.** **Technical: Geist Mono.** Free, self-hostable, screen-native, one
skeleton across both registers, and it rendered best at hero scale.

**Under consideration:** Inter Tight for the wordmark specifically, if direction C's identity idea
survives into the final composition — Geist does not tighten as well at 150px+.

**Serif: retired from structural use.** It may return as a single accent — a pull quote, or the
revision register — where a change of voice is the point. It does not set headings, titles or body.

**Still to verify before this is final:**

- Self-hosted subset sizes against the 0-third-party-request target.
- Font-swap line-shift and CLS, to the standard the Newsreader chain met.
- Reading measure at body size across all nine viewports.
