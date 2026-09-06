# Core Content Unit Analysis

**Date:** 2026-08-14 (Phase 3) · Tests the Phase 2 recommendation rather than assuming it.

---

## 1. Does "Investigation" fit each work type?

| Work type | Fit | Problem | Solution |
|---|---|---|---|
| **VAPT** | ✅ **Excellent** | None. A penetration test is literally an investigation of an application | — |
| **Security research** | ✅ **Excellent** | None. May be inconclusive, which the unit permits | — |
| **Technical experiments** | ✅ **Strong** | None | — |
| **GRC** | ✅ **Strong** | An audit investigates whether controls actually work | — |
| **CSCRF / IRDAI** | ⚠️ **Needs care** | **Het assisted; he did not scope or lead.** Calling the engagement "his investigation" overstates his role | Publish the *question he had to work out* inside the engagement, not the engagement itself. Honest, more interesting, and lower confidentiality risk |
| **Personal projects** | ⚠️ **Partial** | Building a tool is not inquiring. "Can I build X?" is not a real question | Allow build-shaped investigations: problem → what I built → what it does not do. Same type, different internal shape |
| **Future engineering** | ✅ **Adequate** | Nothing to reason about yet | `Planned` status; scope only, no conclusions |
| **Open-source contribution** | ❌ **Weak** | A merged PR is participation, not investigation | Treat as an **artifact** attached to a related investigation, or omit. Do not force |

**Two genuine weaknesses: assisted professional work, and pure builds.** Both are solvable within the unit. Open-source contribution does not fit and should not be forced — a limitation worth recording rather than designing around.

---

## 2. Alternatives tested

Scored 1–5 per criterion.

| Term | Clarity | Sec. relevance | Maturity | Identity | Scalability | Recruiter | Technical | Professional work | Personal work | **Total** |
|---|---|---|---|---|---|---|---|---|---|---|
| **Investigation** | 5 | 5 | 4 | 4 | 5 | 5 | 5 | 5 | 3 | **41** |
| Case | 4 | 3 | 4 | 4 | 5 | 4 | 4 | 5 | 3 | 36 |
| Work | 5 | 2 | 3 | 2 | 5 | 5 | 3 | 4 | 5 | 34 |
| Study | 4 | 2 | 3 | 3 | 4 | 4 | 4 | 3 | 3 | 30 |
| Project | 5 | 3 | 2 | 2 | 5 | 5 | 4 | 2 | 5 | 33 |
| Engagement | 3 | 4 | 4 | 2 | 3 | 3 | 3 | 5 | 1 | 28 |
| Field Note | 4 | 3 | 2 | 4 | 4 | 4 | 4 | 2 | 3 | 30 |
| Practice | 2 | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 3 | 28 |
| Finding | 4 | 5 | 3 | 2 | 4 | 4 | 5 | 2 | 2 | 31 |
| Decision | 3 | 3 | 4 | 5 | 4 | 2 | 4 | 4 | 4 | 33 |

**Notes on the close contenders:**
- **Case (36)** — the runner-up. Loses on security relevance (legal/clinical echo) and because "case study" is the most generic format in professional services.
- **Work (34)** — maximum clarity, minimum meaning. Says nothing about *how* Het works, which is the entire brand.
- **Project (33)** — highest recruiter comprehension, worst maturity and identity scores. It is the generic default and implies completion, which excludes open and unresolved work.
- **Finding (31)** — most security-native, but implies disclosed results Het frequently cannot show. Fatal for confidential work.
- **Decision (33)** — best identity fit, worst recruiter comprehension. Right concept, wrong label. Retained as the *thinking* behind the unit.

---

## 3. Attacking the premise (Part 21)

| Challenge | Answer |
|---|---|
| Immediately understandable? | **Yes.** Non-technical readers understand "investigation" without explanation — its strongest advantage over Case, Practice and Decision |
| Fits VAPT? | Yes — natively |
| Fits GRC? | Yes |
| Fits CSCRF/IRDAI? | **With the refinement in §1.** Publish the question, not the engagement |
| Fits personal projects? | **Partially.** Build-shaped variant required |
| Fits research? | Yes — best fit of all |
| Fits future engineering? | Yes, as `Planned` |
| Practitioner rather than consultant? | **Yes — this was decisive.** "Engagement" and "Case" both drift consultancy-ward; "Investigation" stays practitioner-side |
| Works with very little public work? | **Yes — the strongest property.** An investigation needs no artifact |
| Scales? | Yes, in both directions |
| Creates unnecessary complexity? | **No.** Two content types, five statuses, one relationship graph |
| Recruiter understands without explanation? | Yes |

**One unresolved risk:** the word can outrun slight content. A three-paragraph note labelled "Investigation" reads as inflated. **Mitigation is editorial, not structural** — small work goes in field notes; the label is reserved for work that genuinely involved working something out.

---

## 4. Decision

**PRIMARY UNIT: INVESTIGATION.** Confirmed, with two refinements Phase 2 did not specify:

1. **Professional engagements are context; the question worked out inside them is the investigation.** More honest about an intern's actual role, and lower confidentiality risk.
2. **Investigations may be inquiry-shaped or build-shaped.** Same required honesty fields; different internal emphasis.

**SECONDARY UNIT: FIELD NOTE.** Confirmed.

**Not adopted:** a separate Project or Build type. It would be an empty section today and would make artifact count the metric — the comparison Het currently loses.

**Confidence: MEDIUM-HIGH.** Higher than Phase 2, because the two failure cases surfaced here now have specific solutions rather than being unexamined.
