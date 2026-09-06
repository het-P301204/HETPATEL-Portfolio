# Art Direction Correction — A rejected, and why

**Date:** 2026-08-15 · **Status: A rejected. A1 built but NOT visually validated — tooling failed.**

---

## 1 · A is rejected, and the criticism is correct

Het's diagnosis: *"You have solved 'How can I avoid cards?' but you have not solved 'How can this
feel like an exceptional personal website?'"*

That is accurate. Underneath the styling, A is:

```
header → huge title → two-column intro → list of work → experience → footer
```

**That is the same document structure as the version rejected four rounds ago.** Every round I
changed the surface — containers to no containers, sans to mono, small type to huge type — and never
changed the structure. A is louder, not different.

The second criticism is also correct: *"If the entire design can be reduced to 'HET PATEL very
large' then the idea has failed."* Large type is a tool. I treated it as an identity.

**No defence is offered. A passed T1, T2 and T3 and its accessibility and performance measurements
were clean. None of that is evidence that the art direction succeeded, and I presented it as though
it were.**

---

## 2 · The reframe — what the reference class is actually doing

From the Awwwards element breakdown for Catalin Vintila's portfolio (Nominee, Aug 14 2026). This is
research data from the listing, **not** from a render — the site would not composite in the preview
pane and I did not see it.

> *"Pixel-dithered transitions, a fluid cursor and a split-screen showcase turn twelve years of
> serious client work into **something that moves**"*

Elements the jury listing names:

| Element | What it is |
|---|---|
| Pixel-mosaic **page transitions** | movement *between* pages |
| **Kinetic** hero typography | type that responds |
| **Fullscreen** menu | navigation as an event, not a bar |
| Loading animation | identity resolving |
| Split-screen showcase | work as a spatial state |

**Four of the five are transitions or state changes. Only one is a static layout.**

### The conclusion I had been missing

**Exceptional personal sites are state machines. I have been building documents and adding entrance
fades.**

A screenshot could never have revealed this — a still frame of that site would have shown a layout
and I would have copied a layout. The element listing revealed it because it names *what moves*.

This also re-reads the earlier corpus. NOTHIN's memorable moment was the wordmark **assembling**.
Nabil Issa's was the identity card **resolving into** the site. Both are transitions. I recorded
them as "entrance animation" and treated them as decoration on a static page, when they were the
structure.

---

## 3 · A1 — STATE FIELD

Built at `prototype/v4/a1-field.html`. **Not visually validated. See §4.**

The structural premise, stated so it can be judged when it can be seen:

| | Document model (A, and everything before it) | State model (A1) |
|---|---|---|
| Homepage | scrolls through sections | **one screen, does not scroll** |
| Work | a list you read down | **the field itself** — the page *is* the work |
| Detail | always visible under each row | **one fixed slot** that changes with focus |
| Identity | a hero at the top that scrolls away | **persistent**, never leaves |
| Accent | a colour | **inversion** — the whole field flips ink/bone |
| Credibility | a metadata block | **a standing line** at the base, always present |
| Motion | entrance fade | **the transition between investigations is the design** |

The one thing it must earn: moving between investigations transforms the *whole composition* —
the focused title widens on the variable-width axis, the others recede, the field inverts, and the
detail slot changes. That is a state change, not a hover effect.

**Measured** (556×694, the only viewport available after the failure): document height 694px against
a 694px viewport — **the single-screen premise holds, no scrolling**. 48 DOM nodes. Fonts loaded.
Zero horizontal overflow, zero tap-target failures, zero contrast failures. ~30 lines of JavaScript,
no library.

**None of that says it looks good.** It says it is structurally sound and cheap.

---

## 4 · Tooling failure — stated plainly

**Screenshots are unavailable.** The preview pane stopped compositing frames partway through this
round and did not recover across:

- eight retries
- closing the offending tab
- closing all external tabs
- stopping and restarting the local server
- a fresh navigation

`javascript_tool` still works, so DOM and computed-style measurement is intact. **Rendering to an
image is not.**

Per the standing instruction in every round of this brief — *"If browser tooling is unavailable:
STOP and report that clearly. Do not claim visual validation"* — validation stopped here.

**What this means:**

- A1 is **built and measured**, not seen.
- **A2 and A3 were not built.** Building two more compositions I cannot look at would produce three
  unvalidated files and a false sense of progress.
- **No direction is selected.** Selecting on structural reasoning alone is the exact error that
  produced four rejected rounds.

---

## 5 · Honest status

**What changed:** the understanding of the problem. The gap is not styling, it is that the site is a
document rather than a state machine.

**What was visually tested:** nothing this round.

**What failed:** direction A, rejected on Het's inspection and on my own agreement with it. And the
method — I kept restyling one structure.

**What survived:** the reframe in §2, and the structural model in §3, which is genuinely different
from everything built so far and is the first proposal in this project that is not a decorated
document.

**Which A variant is strongest:** unknown, and I will not guess.

**What still needs work:** A1 needs to be seen. A2 and A3 need to exist. Then all three need the
seven tests.

---

## 6 · What a resumed session must do first

1. **Confirm the preview pane composites.** If it does not, stop again.
2. Render A1 at 1440, 768, 375 and look at it. **It may well fail** — a no-scroll homepage with
   three items risks feeling empty, and the inversion may read as a gimmick.
3. Only then build A2 and A3 against the state-machine reframe, not against A's layout.
4. Run the seven tests: five-second, recruiter, engineer, anti-dashboard, anti-editorial,
   anti-template, memorability.
5. Reopen the imagery question. `H5` in `HYPOTHESIS_TESTS.md` found every memorable personal site in
   the corpus uses a logo, photograph, illustration or 3D, and Het has now put that restriction
   under review. **This is the highest-leverage unexplored variable in the project.**

NOT READY FOR PHASE 6
