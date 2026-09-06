# Prototype Comparison — A / F / E

**Date:** 2026-08-15 · Three homepages built and rendered. **Scope is partial — see §6.**

All three use identical facts. No copy differences decide this.

---

## 1 · Defining failure modes — tested first

Per the plan, each direction was judged on its own premise before anything else.

### T1 · A — does overflow survive mobile? **PASS**

Rendered at 320 and 375. The wordmark stacks to two lines sized in `vw`, so the clip is
proportional rather than accidental: **HET** completes, **PATEL** is cut mid-L in the accent colour.

**OBSERVED:** it reads as deliberate, because one word is whole and the other is cut. An accidental
overflow cuts both. The statement below is fully readable at both widths.

**One real defect found by measurement, now fixed.** `overflow-x: hidden` on `<body>` alone left
`documentElement.scrollWidth` at 1462 against a 1440 viewport — a horizontal scrollbar on a real
device. Fixed with `overflow-x: clip` on both `html` and `body`; `hidden` makes the element a scroll
container and reintroduces the bar. Re-measured: scrollWidth **1425/1440, 360/375, 305/320** — no
overflow at any width, clip preserved. **This is the technical cost of the premise and it is payable.**

### T2 · F — is it substantial at three investigations? **PARTIAL FAIL**

**OBSERVED at 1440:** the whole page is 1,690px — barely more than one screen. It is credible and
serious, and it is *thin*. It reads as a well-made README rather than as a personal website. The
archive register presumes an archive; Het has three items.

Honest recording, per the instruction not to manufacture filler: **at three investigations F looks
sparse, not austere.** It would come into its own at ten and be excellent at twenty. That is a bet
on future content, not a property of the design now.

### T3 · E — is the state system intelligible without being taught? **PASS, with a caveat**

**OBSERVED:** three items descend in a staircase, each further right and smaller. A single label —
`unresolved ————— settled` — sits above them. The relationship is legible immediately.

**The caveat is important.** Each item *also* states its status in words ("Still open", "Closed,
after two revisions", "Settled"). So the spatial encoding **reinforces** rather than **carries**.
That is correct for accessibility — position-only encoding would be invisible to a screen reader —
but it means the concept is doing less work than it promised. Remove the words and I do not believe
the axis alone would be understood.

---

## 2 · What each actually looks like

### A · OVERFLOW — 2,202px @1440

`HET` in ink and `PATEL` in accent violet at 26vw, running past the right edge. Below a hairline: the
statement left, the role and regulated exposure right. Then investigation titles in uppercase at up
to 60px — **the work is set as large as the name**. Then `INFO ESHIELD CYBER SOLUTIONS 2026—` at
wordmark scale.

**Strongest thing about it:** the employer at display scale. It converts the single most important
hiring fact into the second-biggest visual moment on the page. No other direction does this.

**Weakest thing:** the clip lands mid-word as `HETPAT`, which reads momentarily as an unfamiliar
name. The break point needs tuning.

### F · PRACTICE — 1,690px @1440

Name at 24px, lane beneath, credibility as a **sentence** — *"Cybersecurity Intern at Info eShield
Cyber Solutions since January 2026 … Assisted on CSCRF and IRDAI"* — then straight into the index.
Wholly monospace at readable size.

**Strongest thing:** H3's revised rule holds under test. Mono at 16–32px, sentence case, white on
black, as the whole voice, reads as a **scholarly archive** and not as developer tooling. The
previous round's dashboard feeling is completely absent.

**Weakest thing:** there is no memorable image anywhere. Nothing to recall tomorrow.

### E · STATE — 2,142px @1440

Head block top-left, the axis label, then the staircase. The revised item carries a struck line in
a **serif, in the reserved change colour**: *"~~Originally: an access-control failure.~~ Re-reading
the request sequence…"*

**Strongest thing — and it is the single best moment across all three prototypes:** that struck
serif line. It makes revision *visible as a change of voice*. The 5G validation identified the
revision register as the site's most distinctive asset; this is the only design that renders it.

**Weakest thing:** the composition repeats the rejected pattern. A narrow head block top-left,
34ch wide, with the right 60% of a 1440 viewport empty. It is the old problem in new clothes.

---

## 3 · Measured

| | A | F | E |
|---|---|---|---|
| Height @1440 | 2,202px | **1,690px** | 2,142px |
| Height @375 | **1,690px** | 2,318px | 2,009px |
| Horizontal overflow | **none** (after fix) | none | none |
| Tap targets < 24px | **0** | **0** | **0** |
| Contrast failures | **0** | **0** | **0** |
| Heading order | valid | valid | valid |
| DOM nodes | 78 | 71 | **65** |
| Font families | 1 | **1** | 2 |
| JavaScript | **0** | **0** | **0** |

All three are light, accessible and script-free. **Accessibility and performance do not separate
them.**

---

## 4 · Scored /10

| | A | F | E |
|---|---|---|---|
| Visual impact | **9** | 5 | 6 |
| Identity | **9** | 5 | 8 |
| Memorability | **9** | 4 | 7 |
| Cybersecurity credibility | 7 | **9** | 7 |
| Big Tech hiring | 8 | **9** | 7 |
| Professional maturity | 7 | **9** | 8 |
| Motion | **8** | 5 | **8** |
| Interaction | **8** | 6 | 7 |
| Originality | 8 | 6 | **9** |
| Mobile | 8 | **9** | 7 |
| Scalability | 7 | **10** | 6 |
| Genericity resistance | 7 | 5 | **9** |
| Accessibility | 9 | 9 | 9 |
| Performance | 9 | **10** | 10 |
| **Total /140** | **113** | **101** | **108** |

---

## 5 · Qualitative conclusion — not read off the scores

**The scores understate how differently these fail.**

**F is the most professional website and the least memorable one.** It would never embarrass Het. It
would also never be remembered, and it regresses toward the register already rejected twice — a
serious, restrained document. Its 9s in credibility and maturity are real, and they are not what
this project is short of. **The problem was never credibility. It was that nobody would remember it.**

**E has the best single idea and the worst page.** The struck serif revision line is the most
distinctive thing produced in this entire effort. But the composition around it repeats the exact
failure — a narrow column top-left, most of the viewport empty. And the staircase does not scale:
at eight items the offsets either repeat or run off the page. The mechanism deserves to survive;
the layout does not.

**A is the only one that solves the stated problem.** It is immediately memorable, unmistakably a
person's name, uses the whole viewport, sets the work as large as the identity, and turns the
employer into a visual event. It passed its own failure mode at 320px, which was the thing most
likely to kill it.

**What A risks, honestly:** it is loud. A senior security engineer might read a poster aesthetic as
compensating for thin experience — the brief's own warning. That risk is real and it is the reason
the borrowed mechanism below matters.

---

## 6 · Scope — what was NOT done

Stated plainly rather than buried.

| Required | Status |
|---|---|
| A / F / E homepages built and rendered | ✅ |
| Defining failure modes tested | ✅ T1 pass · T2 partial fail · T3 pass |
| Mobile 320 / 375 | ✅ |
| Desktop 1440 | ✅ |
| Accessibility, performance | ✅ measured |
| **Investigations index, investigation page, About — for each direction** | ❌ **not built** |
| 430 · 768 · 1024 · 1920 renders | ❌ |
| Entrance choreography timed and validated | ❌ written, not measured |
| Hover/interaction verified in render | ❌ coded, not captured |
| Genericity test (Alex Sharma) | ❌ |
| F at 6 and 12 investigations | ❌ |

**Three homepages is not the four-page brief.** The selection below is therefore **provisional on
homepage evidence** — which is where the five-second, identity and memorability questions are
actually decided, but not where scalability or reading experience are.
