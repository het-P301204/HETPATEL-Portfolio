# Trust Model

**Date:** 2026-08-14 (Phase 2)

What establishes credibility, in what order, and why the conventional ordering is wrong for Het.

---

## The conventional ordering is wrong

Most early-career portfolios lead with **certifications**, then **skills**, then **projects**, then experience. Het holds 16 Credly certifications plus several programme certificates, so this ordering is tempting.

It is wrong for three reasons:

1. **Certifications are the most abundant signal in the field.** They differentiate least precisely because they are most attainable. Phase 1 found credential-counting sections ("COURSES COMPLETED", "LICENSES ACCQUIRED") on the weakest portfolio inspected.
2. **Technical readers discount them.** A hiring manager reads a certificate as evidence of study, not capability.
3. **It buries the scarce asset.** Regulated audit exposure is far rarer than any certificate Het holds, and putting certificates first structurally subordinates it.

---

## Trust hierarchy

Ranked by **signal strength × scarcity**, for the primary audiences.

### Tier 1 — Strongest

**1. Professional work in a regulated sector**
CSCRF and IRDAI audit involvement for a financial firm, plus VAPT on live web applications.
**Why strongest:** it cannot be self-acquired. Anyone can build a Splunk lab; nobody can manufacture placement inside a regulated audit. It is also the one asset the strongest peer portfolio found in Phase 1 completely lacks.
**Class:** VERIFIED. **Constraint:** method level only, silent omission of specifics.

**2. Demonstrated reasoning**
The quality of thinking visible in an investigation — including what could not be determined.
**Why strongest:** it is the only signal that cannot be faked by effort, copied from a template, or generated. It is also the brand's entire proposition.
**Class:** does not exist yet. **Must be written.** This is the model's one dependency.

### Tier 2 — Strong

**3. Working artifacts**
Repositories, tools, published packages.
**Why:** verifiable and inspectable — the strongest form of proof when present. Currently **zero**, so it contributes nothing today. Becomes Tier 1 once real.

**4. Method description**
How an assessment or audit was approached — test type, access level, scope boundaries, standard followed.
**Why:** the recognised substitute for disclosed findings. Pentest reporting norms treat a missing methodology section as a red flag.

### Tier 3 — Supporting

**5. Education** — B.E. Computer Engineering, just concluded. Baseline qualification; expected, not differentiating.

**6. Certifications** — factual, listed once, low in the hierarchy. Their value is *breadth of exposure*, not capability.

**7. The adopted roadmap** — evidences deliberate thinking about direction. Framed as adopted strategy, never authored framework, never achievement. **Weak on its own; actively harmful if prominent**, because 219 concepts against zero built repositories reads as planning substituting for doing.

### Tier 4 — Negative signal today

**8. The public GitHub profile.** Currently three repositories: zero verified original, two unmodified forks (one a stealth keylogger), one with unresolved provenance, no activity since 2025-10-19. **Until remediated, linking prominently subtracts trust rather than adding it** — it routes a reader from a credible professional story to a profile that contradicts it.

---

## Trust sequence

The order a visitor should encounter evidence:

```
1. Who he is + what he does          → orientation (10s)
2. That the work is real, professional → credibility  (30s)
3. How he reasons                     → differentiation (2min)
4. What he could not determine        → trust          (3min)
5. Artifacts, where they exist        → verification   (5min)
6. Credentials as metadata            → confirmation   (anytime)
7. Roadmap as stated direction        → ambition       (last)
```

**Step 4 is the pivotal one.** Admitting a limit is counter-intuitive as a trust mechanism, but it is the best-evidenced finding in the project — six independent sources, including Het's own strategy document: *"Overclaiming is the fastest way to lose a technically strong reviewer."*

**Step 7 last, deliberately.** The roadmap is the most impressive-looking and least substantiated asset. Leading with it inverts the trust model.

---

## Trust destroyers

Ranked by damage:

1. **A status label contradicted by its artifact.** One "Closed" investigation with no reasoning behind it, or one repository presented as original that isn't, destroys confidence in every other label. **Pre-launch audit required.**
2. **Overclaiming seniority.** Immediately falsifiable against a 7-month internship.
3. **Any confidential leakage.** Ends the GRC audience permanently and is a professional risk beyond the website.
4. **Unverifiable metrics.** Percentage bars, invented counts.
5. **Announcing withheld information.** Signals inexperience to sector-literate readers.
6. **Hacker aesthetics.** Repels audience 2 outright.
7. **Prominent broken GitHub link.** Currently live and unaddressed.

---

## How trust compounds

| Stage | Primary trust source |
|---|---|
| **Today** | Professional work + reasoning (once written) |
| **+6 months** | Reasoning + first shipped artifact |
| **+2 years** | Artifacts + accumulated body of investigations |
| **+5 years** | Track record; the early investigations become evidence of consistent judgment |

The model strengthens over time because reasoning published early becomes retrospective proof of judgment. **This is why the honesty discipline must start now** — an archive of proportionate claims is worth far more at year five than an archive of inflated ones.

---

## One structural note

Brief §45 proposes treating the website itself as a security engineering artifact — headers, threat model, dependency hygiene, published reasoning.

**Phase 1 found a peer already doing this** (strict CSP, `security.txt`, disclosure policy, provenance verification). It is therefore **not differentiating**, and should not be marketed.

It remains worth doing — quietly — because it is consistent with the brand and because failing to do it would be a visible contradiction. **Competence, not content.**
