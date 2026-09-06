# Investigation Model

**Date:** 2026-08-14 (Phase 3)

---

## 1. The proposed 8-section structure is rejected

Phase 3's starting proposal was: CONTEXT · QUESTION · APPROACH · REASONING · FINDINGS · LIMITATIONS · CONCLUSION · NEXT STEP.

**Three problems:**

1. **Approach and reasoning cannot be separated.** In real writeups, *what you did* and *why you did it that way* are the same sentences. Splitting them forces either repetition or an artificial reasoning section that reads as justification after the fact.
2. **Findings and conclusion overlap.** For most investigations they are one thing. Two headings invite padding.
3. **Eight fixed sections produce template monotony** — the exact risk `VOICE.md` warns about: *"if every piece follows setup → discovery → limitation, the template becomes visible and the advantage is lost."*

A rigid eight-part form also makes short investigations impossible, which pushes Het toward inflating small work.

---

## 2. Recommended structure

**Four required movements, two optional. No fixed headings.**

| # | Movement | Required | Answers |
|---|---|---|---|
| 1 | **The question** | ✅ | What was happening, and what needed to be understood |
| 2 | **What I did, and why that way** | ✅ | What Het actually did; why that approach |
| 3 | **What I found** | ✅ | What was established |
| 4 | **What I couldn't determine** | ✅ | What remains uncertain |
| 5 | *Artifacts* | optional | Evidence, where it exists |
| 6 | *What changed / what's next* | optional | Consequence or follow-on |

The eight questions Phase 3 asked are all answered — movements 1 and 2 absorb *"what was happening"* and *"why that approach"* without separate sections.

**Movements, not headings.** A short investigation may run four paragraphs with no headings at all. A long one may use headings freely. **The structure is a discipline for the writer, not a template imposed on the reader.**

---

## 3. Why "what I couldn't determine" is required

The best-evidenced finding in the project — six independent sources including Het's own strategy document: *"a documented list of what the tool does not do, and why, is one of the most credible things a portfolio can contain."*

**Rules for it:**
- **Specific, never generic.** "Could be improved" is worthless. "I couldn't establish whether this was a misconfiguration or intentional" is information.
- **Engineering judgment, not apology.** "I haven't solved it" — never "sorry, this is probably bad."
- **Inline prose, not a boxed component.** A recurring box invites skimming past; a sentence inside the reasoning cannot be skipped. Confirmed in `../brand/VOCABULARY.md` §3.
- **Never behind progressive disclosure.** Hiding a limitation defeats its purpose.
- **Genuinely varied.** If every investigation ends with an identically-shaped hedge it becomes noise and the credibility inverts.

---

## 4. Two shapes

Same required movements, different emphasis.

**Inquiry-shaped** — something needed understanding.
> question → what I did and why → what I found → what stayed unresolved

**Build-shaped** — something needed to exist.
> the problem → what I built → what it does not do → what stayed unresolved

Build-shaped investigations still require movement 4. *"What it does not do"* is the natural form — and per Het's strategy document, it is one of the most credible things a portfolio can contain.

---

## 5. Metadata

**On the item, not in the prose:**

| Field | Values | Notes |
|---|---|---|
| Status | open · closed · unresolved · planned · archived | See `EMPTY_STATE_AND_GROWTH.md` |
| Domain | 1–2 max | Application security, network, cloud, GRC, detection… |
| Origin | professional · self-initiated · academic | **Important for honest framing** |
| Dates | started · last updated | Visible ageing, per the Appleton finding |
| Artifacts | 0..n | |

**"Origin" carries real weight.** It tells the reader immediately whether this arose from paid professional work or from Het's own curiosity — both legitimate, meaningfully different, and currently invisible on every portfolio in the research corpus.

---

## 6. Length discipline

| Substance | Form |
|---|---|
| A question worked out in an afternoon | **Field note**, not an investigation |
| A question worked out over days, with a real conclusion | Short investigation — 400–800 words |
| Sustained work with a genuine unresolved element | Full investigation — 800–2,000 words |
| Anything requiring more than ~2,000 words | Probably several investigations |

**The most important rule: the label must not outrun the substance.** A thin piece called "Investigation" reads as inflated — the single unresolved risk identified in `CORE_CONTENT_UNIT_ANALYSIS.md`. Field notes exist precisely so small work has an honest home.

---

## 7. What this must not become

- ❌ **A marketing case study.** No "the challenge / the solution / the results". No outcome-first framing. The reasoning is the content; a consultancy reports what it delivered, this reports what was worked out.
- ❌ **A tutorial.** Het is not positioned to instruct. He reports what he worked out, not what the reader should do.
- ❌ **A lab writeup.** "I ran nmap, then I ran nikto" is procedure, not reasoning. The question *why that order, and what did the first result change* is the content.
- ❌ **A uniform template.** Varying length and shape is a requirement, not a preference.

---

## 8. Worked skeleton — FICTIONAL

*Illustrates structure only. Does not describe Het's work and must never appear on the site.*

> **Why an allow-list kept failing open** · closed · application security · self-initiated
>
> *(1) The question* — A test environment had an allow-list that behaved correctly in review and permitted unexpected requests in practice. I wanted to know where the gap between the declared rule and the observed behaviour came from.
>
> *(2) What I did, and why* — Rather than reading the rule set first, I captured what actually reached the service and worked backwards. Reading the configuration first tends to make you see what you expect.
>
> *(3) What I found* — Normalisation ran after the match, so a request could match nothing, be rewritten, and then be handled. The rule was correct; the ordering was not.
>
> *(4) What I couldn't determine* — Whether this was a deliberate performance decision or an accident. That would need change history I did not have.

Four movements, roughly 150 words, no headings, one honest gap. **This is the minimum viable investigation** — and it is publishable without any confidential detail.
