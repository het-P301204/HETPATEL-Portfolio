# Phase 5A — Design Foundations

**Date:** 2026-08-14 · **Status:** Complete. No code, no components, no font selections, no colour values.

---

## 1. Contradictions found

Phase 5A instructed me to identify rather than silently resolve. Two were found.

### ⚠️ C5A-1 — Uncertainty: apparatus or prose? *(resolved)*

**The Phase 5A brief** lists *uncertainty* under Register B (apparatus).
**Phase 4** placed it in the main column: *"same type as the body… not de-emphasised, not greyed, not smaller"* and *"always in the same position."*

**Cannot both hold.** The apparatus is by definition smaller, denser and subordinate; putting the uncertainty statement there demotes the site's most distinctive move to metadata.

**Resolution — split the concept, because it is two things:**

| | Lives in | Form |
|---|---|---|
| Uncertainty as **content** | Main column, final movement | A sentence, full body type |
| Uncertainty as **state** (`unresolved`) | Apparatus | A metadata value |

The apparatus records *that* something is unresolved; the prose says *what* could not be determined. Only one is an argument.

**If Het prefers the brief's version**, VP-4 and Phase 4 Principle 3 must be formally withdrawn. Full detail in `TWO_REGISTER_SYSTEM.md` §1 and `UNCERTAINTY_SYSTEM.md`.

### ⚠️ C5A-2 — Dark mode: "first-class" or not automatic? *(refined)*

**Phase 4** said light and dark are both first-class. **Phase 5A** says do not add dark mode automatically.

**Resolution:** light is canonical; dark supported via `prefers-color-scheme` only; **no toggle**. This refines rather than contradicts — "both first-class" becomes "both supported, one canonical, no toggle." Zero JavaScript, respects a stated OS preference, and keeps the warm identity as what most visitors see.

**Escape hatch:** if 5C finds the warm identity cannot survive in dark, ship light-only.

---

## 2. What was decided

| Area | Decision |
|---|---|
| **Visual north star** | *Does the page look like something that was kept, or something that was made?* Kept is the target |
| **Principles** | Ten, VP-1 to VP-10. Reasoning outranks everything; hierarchy survives without colour, borders or boxes |
| **Hierarchy** | Five type levels. Primary = title, question, reasoning, findings, uncertainty. Status/date/metadata are tertiary |
| **Two registers** | **Model C — distributed apparatus.** A dense masthead block plus occasional inline insets. **Not a side column** |
| **Space** | One left edge, one measure, one vertical scale. Inter-movement space > inter-paragraph space is the section marker |
| **Grid** | Single-axis editorial. No columns — nothing to place in them. Two documented exceptions |
| **Containers** | Two on the entire site: code blocks and figures |
| **Rules** | Realistically one, above the footer. Never between the registers |
| **Density** | Prose open, apparatus dense, index tight. Density is not the enemy of quality |
| **Responsive** | **Structure does not change.** Only measure, scale and margins |
| **Colour** | Eight roles. Warm neutral, one accent at ~2%. No status colours |
| **Type** | Serif prose / sans apparatus / mono literals. Five levels. Weight near-constant |
| **Status** | A word. No pills, no colour, no icon |
| **Uncertainty** | A sentence in prose. Marked by position only |
| **Media** | Near-zero. 2–3 diagrams site-wide; one optional portrait on About |
| **Icons** | No system. Zero to two convention glyphs |
| **Links** | Almost everything is a link; nothing is a button |
| **Tokens** | ~40, six categories. Functional names |

---

## 3. The single most important decision

**Model C — distributed apparatus.**

It was chosen over a side column and over margin notes for four reasons, and the first is decisive:

1. **It solves the emptiness risk.** A masthead holding four fields is *full*; a side column holding four fields is 90% empty. Phase 4 named an inert apparatus as the biggest creative risk, with an exit condition — Model C reduces that risk structurally rather than hoping content fills it.
2. **It avoids the Tufte prohibition** (constraints 22, 24) without abandoning the idea.
3. **Mobile is not a transformation** — Model C is already the mobile layout.
4. **It is the least complex.**

**What was lost:** the adjacency of true margin notes, where an aside sits precisely beside the sentence it qualifies. A real cost, accepted because the constraint is binding.

---

## 4. Self-critique

| # | Question | Answer |
|---|---|---|
| 1 | Becoming an editorial website rather than a practitioner's? | **Real risk.** Guarded by the dense factual apparatus, mono literals and precise language. **The apparatus is what makes it a working record rather than a magazine** |
| 2 | Is serif/sans/mono becoming decoration? | **No** — the register split carries the two-register system, which has no other carrier. Mono is semantic. **But if the apparatus goes inert, the serif/sans split becomes styling** |
| 3 | Is the apparatus actually useful? | **At launch, minimally** — four real fields. Its comparative value needs 3+ items; its revision value needs time. Honest answer: **useful, not yet valuable** |
| 4 | Could it become a generic sidebar? | **Model C prevents this by construction** — there is no column to become one |
| 5 | Is warm neutral distinctive without becoming "design portfolio"? | **Partly.** It differentiates strongly from the security category and weakly from the design category. Typography and apparatus must carry the rest |
| 6 | Avoiding clichés without becoming anti-cyber? | **Mostly.** Mono for literals and precise technical language keep it grounded. **Watch:** a site that reads as consciously *not* technical would be its own failure |
| 7 | Too sparse? | **Possible at n=1.** Mitigated by pages ending where content ends, and by launching at 3 |
| 8 | Too academic? | **Guarded** — first person, no citations apparatus, no abstract. **Serif selection in 5C is the risk point** |
| 9 | Too corporate? | **No.** No badges, no cards, first-person voice, visible uncertainty |
| 10 | Too "creative developer"? | **No** — near-zero motion and imagery are the opposite of that category |
| 11 | Works with very little content? | **Yes at 3+.** **Weakest at 1**, where the apparatus has nothing to compare against — an irreducible limitation |
| 12 | Preserves credibility? | **Yes.** Precision, exact metadata, no unverifiable claims |
| 13 | Communicates personality? | **Through voice and structure, not visuals.** The visual layer is deliberately quiet |
| 14 | Supports the investigation model? | **Yes** — it is built around the four movements |
| 15 | Usable on mobile? | **Yes** — structure is identical at every width |

---

## 5. Biggest risks

**R1 — The apparatus is inert.** At launch it carries only baseline metadata. Its interesting content — revisions, changed conclusions — accrues over time. If it never does, the two-register system is styling.

**R2 — It reads as a design portfolio.** Warm neutral + serif + generous space is a recognisable look, and the differentiation gained against security is partly spent against design.

**R3 — Craft dependency.** With near-zero imagery and motion, typography carries the entire visual impression. **There is nowhere to hide.** Mediocre type selection in 5C would leave the site looking unfinished rather than restrained.

**R4 — Uncertainty gets missed.** Marked by position alone. A skimming reader may not find the site's most distinctive move.

**R5 — Serif selection.** The highest-stakes decision in 5C. Too literary and it becomes academic; too neutral and the register contrast weakens.

## 6. Mitigations

| Risk | Mitigation |
|---|---|
| R1 | Model C keeps the masthead full at launch. **Phase 4 exit condition stands:** if inert at six months, collapse to editorial |
| R2 | Apparatus density and mono literals are the counterweight. Re-run the genericity test on rendered pages in 5G |
| R3 | Treat 5C as the highest-effort sub-phase. Pursue a distinctive licensed serif — research says type is the most durable identity asset |
| R4 | **Escape hatch defined:** if 5D shows readers genuinely miss it, add a heading — **not** a box, tint or icon |
| R5 | Must be a genuine text face, not a display serif. Test against the coherence requirements in `TYPE_CONTRAST.md` |

---

## 7. Confidence

**MEDIUM-HIGH.**

The system is internally consistent, traceable to measured research, and it resolved two real contradictions rather than papering over them. Model C is a stronger answer to the two-register problem than Phase 4 had, because it removes the emptiness risk structurally.

**Not HIGH for two reasons:**
- **Nothing has been rendered.** The register contrast, the movement spacing ratio, and the uncertainty position are all execution-dependent — only a real page settles them.
- **The apparatus's value is prospective.** It depends on content behaviour that does not exist yet, and that dependency is deliberate but unproven.

---

## 8. Open for 5B–5G

1. Space scale values, with `space-movement` measurably greater than `space-paragraph`.
2. Reading measure and index width.
3. Three font families meeting the coherence requirements.
4. Eight colour roles × two schemes; **greyscale gate must pass**.
5. Whether uncertainty needs a heading *(5D, evidence required)*.
6. Whether artifacts need a rule *(5D)*.
7. Whether the register step survives mobile *(5D)*.
8. Whether dark mode preserves the warm identity — **if not, ship light-only** *(5C)*.
