# Audience Strategy

**Date:** 2026-08-14 (Phase 2) · **Supersedes** `AUDIENCE_HYPOTHESES.md`, which was written before CSCRF/IRDAI was confirmed and before the GitHub audit.

---

## Priority ranking

Weighted by decision power over Het's next role, and by how well the verified evidence serves each.

| Rank | Audience | Weight | Rationale |
|---|---|---|---|
| **1** | **Security hiring managers / team leads** | Primary | Highest decision power. The only audience that can evaluate reasoning — which is the brand's entire proposition. |
| **2** | **GRC / audit / risk professionals** | Primary | Where Het's scarcest verified asset lands. Promoted from contingent once CSCRF/IRDAI was confirmed. |
| **3** | **Recruiters / HR screeners** | Gatekeeper | Cannot evaluate depth, but can block access to audiences 1 and 2. Must be served, not optimised for. |
| **4** | **Security practitioners / peers** | Long-term | Source of reputation and referrals. **Currently has no route to the site** — no public work to arrive from. |
| **5** | **Graduate admissions** | Conditional | A US master's move is expected, but location is excluded from the brand, so this shapes emphasis rather than architecture. |
| **6** | **Open-source collaborators** | Dormant | Zero verified original repositories. Genuinely hypothetical today. |
| **7** | **General visitors** | Ignore | Designing for them dilutes everything above. |

**Audiences 1–3 receive design attention. 4–6 are provided for structurally but not optimised. 7 is not a design consideration.**

---

## Per audience

### 1. Security hiring manager

| | |
|---|---|
| **10 seconds** | Name, discipline, that the experience is real professional work rather than labs |
| **60 seconds** | That his reasoning is sound and his claims are proportionate to his stage |
| **5+ minutes** | One investigation read fully — the approach, the conclusion, and what he could not determine |
| **Causes distrust** | Tool lists as capability · unverifiable metrics · a status label contradicted by the artifact behind it · confident claims from a 7-month internship |
| **Strongest evidence** | The reasoning inside an investigation. Second: the admission of what he couldn't resolve |

**The decisive moment:** reaching "what I couldn't determine" and finding it specific rather than performative. Overclaiming is the single failure this reader punishes hardest.

### 2. GRC / audit / risk professional

| | |
|---|---|
| **10 seconds** | That he has worked on real regulated audit engagements |
| **60 seconds** | That he understands scope, control mapping and evidence — and handles confidentiality correctly |
| **5+ minutes** | Method-level description of how an engagement was approached |
| **Causes distrust** | Any hacker aesthetic · any hint of loose handling of confidential material · **announcing what he can't disclose** · imprecise framework terminology |
| **Strongest evidence** | Correct vocabulary used correctly, plus visibly silent omission |

**The mechanism is subtle and worth stating precisely:** discretion demonstrates itself by being *unremarked*. Phase 1 established that the sector convention is silent omission — Doyensec anonymises a client while publishing deep technical detail and never mentions the withholding. A site that draws attention to its own confidentiality signals inexperience to this reader.

### 3. Recruiter / HR screener

| | |
|---|---|
| **10 seconds** | Role fit, experience level, contact route — without scrolling |
| **60 seconds** | Education, credentials, availability |
| **5+ minutes** | Rarely happens. They forward or they don't |
| **Causes distrust** | Having to work out what he does · contact buried behind a concept · a site that reads as an art piece |
| **Strongest evidence** | Plain legibility |

**Design consequence:** the surface layer must be conventional and instantly scannable. This is why "The Index" was rejected in Phase 1 — it gave this reader nothing. **Serve, don't optimise:** meeting this audience's needs must not shape the depth below.

### 4. Security practitioners / peers

| | |
|---|---|
| **10 seconds** | Whether the technical content is precise |
| **60 seconds** | Whether the reasoning survives expert reading |
| **5+ minutes** | Method, prior-art awareness, edge-case handling |
| **Causes distrust** | Imprecise terminology · hacker aesthetics · unfalsifiable claims |

**Honest status:** with no public repositories and no published writing, this audience has no path to the site. Designing for them now is designing for a future state — worth structuring for, not worth optimising.

### 5. Graduate admissions *(conditional)*

Needs academic background, technical seriousness, evidence of independent initiative. The adopted roadmap and strategy documents genuinely evidence deliberate thinking — provided they are framed as adopted direction, never as authored frameworks.

---

## The central tension, and its resolution

**Audience 3 rewards conventional legibility. Audiences 1, 2 and 4 reject conventional filler.**

The archetype resolves this by serving audience 3 exclusively and failing everyone else — which is why it is simultaneously ATS-friendly and worthless to a hiring manager.

**Resolution: layer, don't segment.** A conventional, instantly legible surface; depth beneath it. Our World in Data validates this — "Popular pages" alongside a systematic taxonomy, serving casual and expert readers with no mode toggle.

**No audience-mode switcher.** Visitors do not self-classify, and asking them to is a worse experience than layering.

---

## The 10s / 60s / 5min model

*Brand and content strategy only. No interface design.*

### After 10 seconds — what they understand
> Het Patel. Security testing and regulated assurance. Early career, real professional work. Here is how to reach him.

No puzzle, no animation gate, no scrolling required. A recruiter who reads only this must categorise him correctly.

### After 60 seconds — what they believe
> This person is not overselling. The work is real, the claims are proportionate, and there is something here worth reading.

Belief is produced by **proportionality** — claims sized to evidence. The absence of skill bars, certificate counts and superlatives does more work here than any positive assertion.

### After 5 minutes — what they remember
> He shows his reasoning, and he tells you what he couldn't work out.

**This is the memorable idea, and there should only be one.** Not a visual device, not an interaction — a behaviour they can describe to a colleague in a sentence.

**Test:** if a visitor cannot complete *"the interesting thing about that site was…"* the brand has failed, regardless of how it looks.

---

## What would change this document

- **Investigation volume confirmed** → validates or breaks the 5-minute layer
- **Career track chosen** → sharpens audience 1 into a specific hiring population
- **GitHub remediated and first work published** → activates audiences 4 and 6
- **Graduate plans confirmed** → may promote audience 5
