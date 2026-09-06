# Final Direction — provisional

**Date:** 2026-08-15 · **Selection: A — OVERFLOW**, with one named mechanism borrowed from E.

**Provisional**, because it rests on three homepages rather than three four-page prototypes. See
[`PROTOTYPE_COMPARISON.md`](PROTOTYPE_COMPARISON.md) §6.

---

## Why A won

**Because it is the only one that fixes the thing that was actually broken.**

Across four rejections the complaint was consistent: under-designed, sparse, weak, forgettable,
indistinguishable from a reading site. Not *"lacks credibility."* Never that.

- **F is more credible than A and it does not matter.** F scores 9 on credibility and maturity and
  4 on memorability. It is a well-made document — which is the register already rejected twice. It
  solves a problem this project does not have.
- **E has the better idea and the worse page.** Its composition reproduces the original failure: a
  34ch column top-left with most of a 1440 viewport empty.
- **A passed the test most likely to kill it.** T1 at 320px was the elimination condition. The
  clip reads as deliberate at 320, 375 and 1440 because one word completes and the other is cut.

**And A does one thing no other direction does: it sets the work as large as the name, and the
employer larger still.** `INFO ESHIELD CYBER SOLUTIONS 2026—` at wordmark scale converts the single
most important hiring fact into the second-biggest visual event on the page. That is the hiring
objective and the art direction being served by the same gesture, which is what "art-directed"
should mean here.

---

## The one borrowed mechanism

**E's revision ghost is carried into A.** Stated specifically, per the rule against hybrids:

> A superseded conclusion is rendered as struck text in a **serif** — a different voice from the
> rest of the page — in a colour reserved for change and used nowhere else.

**Why this specific borrow.** The 5G validation found the revision register to be the strongest
asset on the entire site and the one thing a template cannot produce. E is the only prototype that
renders it *visually* rather than listing it. A has no equivalent, and without it A's investigation
rows are titles and metadata like anyone's.

Nothing else is taken from E. A's composition, type, palette, motion and interaction stand.

---

## What A sacrifices

| Sacrificed | Cost |
|---|---|
| **Content scalability** | F scores 10, A scores 7. Twenty investigations as 60px uppercase titles is a very long page. A grouping or scale-step is needed by ~10 items |
| **Restraint** | A is loud. A senior engineer may read a poster aesthetic as compensating for seven months of experience — the brief's own warning |
| **Reading comfort at length** | Uppercase display titles are for scanning. The investigation *page* must drop to a quiet reading register, which means A is really two registers |
| **Technical margin** | Deliberate overflow requires `overflow-x: clip` on `html` and `body`. Any future full-bleed element re-opens the scrollbar risk |

---

## What A does better

- Immediately memorable, and what is remembered is **his name**, not a colour or an animation.
- Uses the entire viewport. The rejected narrow-column-in-void is structurally impossible here.
- Work titles at display scale — the investigations read as the substance, not as a list under a bio.
- Employer as a visual event.
- Survives 320px, which was its elimination condition.
- 78 DOM nodes, one font family, zero JavaScript, zero contrast failures, zero tap-target failures.

---

## Risks that remain

1. **Untested with a human.** Every hiring judgment in this project is my reading of a render.
2. **The clip point.** `HETPAT` reads momentarily as an unfamiliar name. Needs tuning — likely a
   letter-spacing or size adjustment so the break lands after `PATE`.
3. **Scale beyond ten investigations** is unsolved.
4. **The accent.** `#3A2FD9` violet on bone passes contrast, but it has not been tested against the
   genericity retest or in the investigation reading register.
5. **Three pages per direction were never built**, so nothing is known about A's reading experience,
   About page, or index at volume.

---

## Before Phase 6 — what must still happen

1. Build A's **investigations index, one investigation, and About**.
2. Integrate the revision ghost into A's investigation page and index row.
3. Render A at **320 · 375 · 430 · 768 · 1024 · 1440 · 1920**.
4. Time the entrance — 600–1200ms — and confirm the site is usable if it never runs.
5. Capture hover and interaction states in a render rather than trusting the CSS.
6. Genericity retest: Alex Sharma as security student, software engineer, product designer.
7. Test A's index at 6 and 12 investigations for the scalability sacrifice above.
8. Tune the clip point.
9. Re-run the full 5G accessibility and performance battery on the four pages.

---

## Honest position

A is selected on real rendered evidence at the point where identity and memorability are decided,
and it passed the test that would have eliminated it. That is a genuine result.

It is not a validated four-page direction, and the gate has not been met.

NOT READY FOR PHASE 6
