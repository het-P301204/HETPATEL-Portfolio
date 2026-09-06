# Homepage — Genericity Test

**Date:** 2026-08-15 (Phase 5E)

`prototype/index-genericity-test.html` applies the **identical** design system and the **identical**
information architecture to generic content for a fictional "Alex Sharma". Nothing was redesigned.
Both pages were rendered at 1280px and compared.

The generic content is written as a *competent* early-career portfolio, not a strawman. It contains
no banned vocabulary, no neon, no skill bars and no "passionate". It is the `bugatsec.dev` failure
mode from Phase 1 — professional, correct, and characterised there as *"intentional genericization
through absence of personality markers."* That is the fair comparison.

---

## Result

**The design system still carries none of the differentiation** — but unlike the investigation page,
**the difference is legible inside the five-second window.** That is a real and useful change.

### The two first screens, verbatim

**Het**

> "I am an early-career security practitioner working between technical testing and regulated
> assurance. I test web applications for vulnerabilities, and I have worked on CSCRF and IRDAI
> audit engagements for a financial firm — which means I have seen both how a finding is produced
> and what has to happen to it afterwards."
>
> **The work** — "Since January 2026 I have been a cybersecurity intern at **Info eShield Cyber
> Solutions**, on VAPT, risk and compliance…"

**Alex**

> "I am a cybersecurity graduate with a strong interest in penetration testing and security
> operations. I have completed hands-on training in vulnerability assessment and network security,
> and I am currently building practical experience through labs and personal projects."
>
> **The work** — "I completed a three-month cybersecurity internship where I assisted the security
> team with vulnerability scanning and documentation. I gained exposure to industry-standard tools…"

---

## What actually differentiates them

Three differences, all content, all visible without scrolling.

### 1. Proper nouns

MEASURED across the two first screens:

| | Het | Alex |
|---|---|---|
| Named organisations | 1 (Info eShield Cyber Solutions) | **0** |
| Named frameworks | 3 (CSCRF, IRDAI, ISO 27001) | **0** |
| Named dates | 1 (January 2026) | **0** |

**Alex's first screen contains no proper nouns at all.** Everything is a category —
"industry-standard tools", "a professional environment", "hands-on training". This is the single
fastest tell, and it is available to a reader in about two seconds because proper nouns are visually
salient in a block of prose.

### 2. A position versus an interest

- Het: *"working between technical testing and regulated assurance"* — a claim about **what he does**.
- Alex: *"with a strong interest in penetration testing and security operations"* — a claim about
  **what he likes**.

The second is the default register of an early-career portfolio and it commits to nothing. It is
also, structurally, the sentence that cannot be checked.

### 3. Consequence versus activity

- Het: *"which means I have seen both how a finding is produced and what has to happen to it
  afterwards"* — a claim about **judgment acquired**.
- Alex: *"I gained exposure to industry-standard tools"* — a claim about **having been present**.

The same distinction runs through the whole page. Het's featured investigation contains a decision
and a reason (*"My first instinct was to read the configuration, and I deliberately did not"*).
Alex's contains a sequence (*"I set up three virtual machines… I then ran Nmap… I documented each
finding"*).

---

## The finding that matters

**5D's conclusion is unchanged: the design is a neutral vessel.** Alex's homepage is exactly as
handsome as Het's. If Alex wrote better copy, his page would be just as good, because nothing in the
type, colour, spacing or layout belongs to Het.

**What 5E adds is that the architecture changes *when* the difference becomes visible.**

| | Investigation page (5D) | Homepage (5E) |
|---|---|---|
| Where the difference lives | reasoning quality, uncertainty depth, the revision register | the identity sentence and the first paragraph of "The work" |
| When it becomes visible | **after reading the page** | **within the first screen** |
| Visible at 5 seconds? | **No** | **Yes** |

The identity-first architecture does not *create* differentiation — it **relocates** it to the
highest-attention position on the site. That is the specific value the structure adds, and it is
worth stating precisely, because it is easy to overclaim: the design still cannot rescue weak
writing. It can only make sure that whatever the writing is, the reader meets it immediately.

---

## An artifact of the prototype, noted for fairness

Alex's page renders **cleaner** than Het's, because Het's carries three visible
`[CONTENT PLACEHOLDER — REQUIRES HET]` blocks and Alex's carries none. That is prototype
scaffolding, not a design property, and it inverts in production. It is recorded so nobody reads the
comparison screenshots and concludes the generic page looks better.

---

## Anti-genericity audit — homepage

MEASURED by pattern search across `index.html` and the homepage rules in `style.css`:

| Pattern | Count |
|---|---|
| cards · pills · badges · tags | **0** |
| skill grid · percentage bars · proficiency claims | **0** |
| project-card grid (`repeat()`) | **0** |
| gradients · shadows · glassmorphism | **0** |
| hero block · giant display type | **0** — `h1` is 34px, the same as an investigation title |
| CTA block · "let's work together" | **0** |
| icons · SVG · images · logos | **0** |
| stat counters · fake metrics | **0** |
| certificate wall | **0** |
| GitHub graph · stars · followers | **0** |
| animation · transition · transform | **0** |
| "About Me" · "My Skills" · "My Projects" | **0** |
| testimonials · availability banner · newsletter | **0** |

**Nothing generic was introduced.** The homepage adds no new colour, no new typeface and no new
spacing value to the 5D system.

---

## Verdict

**PASS, with the standing caveat.**

The homepage is not generic **because of what it says**, and it would be generic tomorrow if the
words changed. The exit condition remains a writing standard, and 5E sharpens what that standard
requires on the homepage specifically:

> **Name things.** Organisations, frameworks, dates, decisions. A first screen with no proper nouns
> is indistinguishable from every other early-career security portfolio, whatever it is set in.

---

**Note added 2026-08-15, after this test was run.** The identity sentence quoted above said *"CSCRF and IRDAI audit engagements for a financial firm"*. Following the attribution clearance (P5EV-009) it now reads *"…in the financial sector"*, and "The work" states the association with Info eShield explicitly. **The test result is unaffected** — the proper-noun count that carries the finding went up, not down (Info eShield is now named in the identity block's section rather than only implied). This record is left as-run rather than rewritten.
