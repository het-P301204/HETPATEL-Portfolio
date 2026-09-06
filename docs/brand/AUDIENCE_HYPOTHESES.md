# Audience Hypotheses

**Date:** 2026-08-14
**Status: HYPOTHESES.** Het has not confirmed audience priorities. Everything here is provisional and must not be treated as settled.

Derived from the resume (recent B.E. graduate, ~7-month cybersecurity internship, India-based per resume) and the strategy document's stated audience ("students, career changers, junior analysts, and early-career engineers targeting… roles at organizations with mature security functions").

---

## Provisional ranking

| Rank | Audience | Basis |
|---|---|---|
| 1 | Security hiring managers / team leads | Highest decision power; the strategy document is explicitly written for reaching them |
| 2 | Recruiters and HR screeners | The gate before audience 1; high volume, low technical depth |
| 3 | Security practitioners and peers | Long-term reputation and referrals |
| 4 | Graduate admissions / academic reviewers | **Conditional** — depends on C-2 (see below) |
| 5 | Open-source developers and collaborators | Currently near-zero; there are no public repositories to collaborate on |
| 6 | Potential clients | Deliberately deprioritised — Het is seeking employment, not engagements |

**Updated 2026-08-14 after user confirmation.** Two things changed:

- **A US master's move is confirmed as expected**, so audience 4 moves from speculative to plausible. However, Het has instructed that **location must not be part of the brand or architecture**, so the site is not geography-targeted. Audience 4 rises in likelihood but does not reshape the IA.
- **A new audience segment is now real: GRC / audit / risk professionals**, since CSCRF and IRDAI work is confirmed. Previously this was contingent. It is added as **A4b** below and is more consequential than the admissions audience.

**Ranking remains provisional** — Het has not confirmed which of the strategy document's eight career tracks he is targeting, and that answer would sharpen audience 1 considerably.

---

## A1 — Security hiring manager / team lead

**Why they visit:** to decide whether to interview, or to prepare for one already scheduled.

**Need quickly:** what kind of security work he does; whether the experience is real; whether the technical claims survive scrutiny.

**Want deeper:** how he approaches a problem; what he chose to build and why; whether he can articulate what his work does *not* do.

**Would cause them to leave:** tool lists as a substitute for work; percentage skill bars; five undescribed project titles; anything that looks generated; a "Deployed" label on something that turns out to be a stub.

**Site must prove:** that he selects problems thoughtfully and reports honestly. Per the strategy document, problem selection is "the single strongest signal in the entire portfolio, because it cannot be faked by effort."

**Currently working against him:** the five listed projects are exactly the recognisable-exercise category his own strategy document warns about. **The website cannot fix this by presentation alone** — it can frame them honestly, but the underlying work is what it is. This is the strongest argument for taking one substantial project to completion.

---

## A2 — Recruiter / HR screener

**Why they visit:** to check role fit against a requisition. Often under 60 seconds, frequently on mobile.

**Need quickly:** name, discipline, experience level, education, location/work authorisation, contact. Findable without scrolling.

**Want deeper:** usually nothing. They forward or they do not.

**Would cause them to leave:** having to work out what he does; contact details buried behind a concept; a site that reads as an art piece.

**Site must prove:** that he is categorisable and reachable.

**Tension to manage:** this audience rewards conventional legibility, while A1 and A3 reject conventional filler. Resolution is layering — a conventional, instantly legible surface with depth beneath it — not compromise. Neither audience is served by diluting the other's layer.

---

## A3 — Security practitioner / peer

**Why they visit:** arrived from a repository, a writeup, or a social post. Assessing whether he is worth following.

**Need quickly:** whether the technical content is precise.

**Want deeper:** method, reasoning, prior-art awareness, edge-case handling.

**Would cause them to leave:** imprecise terminology; hacker aesthetics; overclaiming; any unfalsifiable metric.

**Site must prove:** that he thinks like an engineer, not a certificate collector.

**Honest caveat:** with no public repositories and no published writing confirmed, **this audience currently has no route to the site at all.** They become reachable only once there is something to arrive from. Designing for them now is designing for a future state — worth doing, but not worth optimising for yet.

---

## A4 — Graduate admissions / academic reviewer *(conditional)*

**Why they visit:** to assess an applicant's technical seriousness beyond transcripts.

**Need quickly:** academic background, technical depth, evidence of independent initiative.

**Want deeper:** research inclination; ability to define a problem; sustained intellectual interest.

**Would cause them to leave:** a purely commercial job-seeking presentation with no intellectual through-line.

**Site must prove:** curiosity and independent thinking — which the roadmap and strategy documents genuinely evidence, provided they are framed as planning rather than as achievement.

**Status: entirely contingent on C-2.** Do not design for this audience until Het confirms.

---

## A4b — GRC / audit / risk professionals *(now real — promoted 2026-08-14)*

**Status changed from contingent to confirmed.** Het's CSCRF and IRDAI audit work is verified, which makes this a genuine segment rather than a hypothetical one. Arguably it should rank second overall, above recruiters, for the specific roles where his experience is scarcest.

**Why they visit:** to assess whether he understands assurance work and can be trusted inside regulated engagements.

**Need quickly:** that he has worked on real regulated audit engagements, and in what capacity.

**Want deeper:** methodology; how he thinks about controls, evidence and scope; whether his vocabulary is correct.

**Would cause them to leave:** any hacker aesthetic; any hint of loose handling of confidential material; imprecise framework terminology.

**Site must prove:** that he can be trusted with confidential regulated work.

**The decisive mechanism — and it is unusual:** for this audience, **what Het declines to publish is the demonstration.** A case study that visibly conveys method while withholding client, findings and evidence proves he understands confidentiality obligations. Discretion is not a gap in the content; it *is* the content. This aligns exactly with the constraint Het has imposed.

**⚠️ Active conflict:** his public GitHub currently hosts a forked Android stealth keylogger. For this audience specifically, that is the most damaging item on his entire public footprint. See `github/PUBLIC_GITHUB_AUDIT.md`.

---

## A5 — Open-source developers

**Why they visit:** they found a repository useful.

**Currently: confirmed hypothetical.** The 2026-08-14 audit found **0 verified original public repositories**. There is nothing to arrive from and nothing to contribute to. Becomes real only if Het takes a project to product standard.

**Site must eventually prove:** that a project is maintained and contributable — versioning policy, security policy, runnable tests, documentation for a stranger. The strategy document notes that crossing the project→product line "is itself a differentiator."

---

## A6 — Potential clients *(deprioritised)*

Deliberately ranked last. Het is seeking employment. Phase 1 research found a "Services" section on **all three** inspected student cybersecurity portfolios — inherited template furniture that signals confusion about purpose. **No services section.** Revisit only if Het genuinely begins consulting.

---

## Cross-audience requirements

1. **Every page is an entry point.** A1 and A3 arrive via deep links.
2. **Contact reachable in one action from anywhere.** A2 abandons fast.
3. **Build state visible on every item, always.** Protects A1 and A3 trust simultaneously.
4. **No hacker aesthetic.** Actively repels the compliance-adjacent reader and undermines A1/A3 credibility.
5. **Mobile-first for A2**, who frequently screens on a phone.
6. **No audience-mode toggle.** Visitors do not self-classify; asking them to is worse than layering.

---

## What would change this document

- ~~C-2 resolved~~ ✅ **Done** — US move expected, but location excluded from the brand, so the IA impact is limited. A4 promoted to plausible.
- ~~C-1 resolved~~ ✅ **Done** — CSCRF/IRDAI confirmed. **A4b created and is now a real, high-value segment.**
- **Career track chosen** (of the strategy document's eight) → still open; would sharpen A1 into a specific hiring population
- **GitHub cleanup completed** → currently a blocker for A1, A3, A4b and A5 simultaneously
- **First public repository shipped** → makes A3 and A5 real rather than hypothetical
