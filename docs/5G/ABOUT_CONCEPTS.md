# About — Concepts

**Date:** 2026-08-15 · **Not visually validated.**

Four directions. B is `ABOUT_LAYOUT.md` (5B) carried forward.

The failure to beat: **About is the only page carrying employment, education, certifications and
contact. Gravity pulls it toward a résumé**, and a résumé is the one document a portfolio exists to
be better than.

---

## A — THE CV

Role, organisation, dates, bullets. Education. Certifications. Contact.

**Reads as:** a résumé. **Strength:** a recruiter finds every fact instantly.

**Weakness — decisive.** The résumé already exists as a PDF, and reproducing it makes the site
redundant. It also inverts the trust model, which ranks credentials **below** real work, reasoning
and artifacts. And it converts the only page written in first person into a form.

---

## B — INVERTED ALLOCATION *(Phase 5B, as specified)*

Identity and *what I work on* take roughly two-thirds. Experience follows as prose. Education and
certifications compact and low. Contact last.

> **Space is allocated inversely to convention.** Most portfolios give credentials the most room and
> identity the least.

**Strength.** Correct on the evidence. The trust model ranks credentials low, so the page's job is
to make the *person* legible and let the facts confirm rather than argue. It also matches what the
5G research found on a strong technical About — Julia Evans gives ~100% to voice and 0% to
credentials, and 5B's two-thirds is the right adaptation for someone who actually needs his
credentials visible.

**Weakness.** Requires Het to write two-thirds of a page of good first-person prose. That is a real
cost and it is the page most likely to drift into the generic if the writing is weak.

---

## C — THE POSITION PAPER

A single continuous argument about how he approaches security. No sections, no facts. Credentials
relegated to a linked résumé.

**Reads as:** a manifesto. **Strength:** maximum voice, zero résumé risk, highly memorable.

**Weakness — decisive at this stage.** `VOICE.md` warns directly against the teaching register:
*"Het is not yet positioned to instruct. He reports what he worked out."* A position paper from
someone with seven months of experience asserts standing he has not earned. It also fails the
recruiter outright — no employer, no dates, nothing checkable.

**Kept:** the insistence that the page argue something rather than list.

---

## D — THE WORKING PROFILE

Identity, then a section per *area of work* — testing, assurance — each describing method and what
was learned. Facts appear inline where relevant rather than in a block.

**Reads as:** a practitioner's self-description. **Strength:** no credentials block at all, so no
résumé gravity; facts are distributed and contextual.

**Weakness.** Distributed facts are hard to find. A recruiter checking "does he have a degree" has
to read the whole page. It also makes the page longer, and `ABOUT_LAYOUT.md` caps it at three
screens.

**Kept:** organising *what I work on* by the two areas rather than as one undifferentiated block.

---

## Comparison

| | Reads as | Recruiter-checkable | Résumé risk | Voice |
|---|---|---|---|---|
| A The CV | résumé | ✅ | **fatal** | none |
| **B Inverted allocation (5B)** | **a person** | ✅ | **low** | high |
| C Position paper | manifesto | ❌ | none | **highest** |
| D Working profile | practitioner | ⚠️ | low | high |

**Selected: B**, unchanged from 5B, borrowing D's two-area split for the *what I work on* block.

---

## What the built page does

`prototype/about.html`, seven blocks:

| Block | Role |
|---|---|
| Identity | Two sentences. The lane, and one claim with an edge — *"the part most people skip"* |
| **What I work on** | **The largest block.** Testing, then assurance, then the space between them — D's split |
| How I write this up | Explains uncertainty and the revision register in the author's own voice |
| Experience | Prose. Employer, role, period, method. The CSCRF/IRDAI clearance, with the ceiling stated |
| Where this is going | Two sentences. No roadmap |
| Background | `.facts` — education, in-progress, certifications, GitHub. Compact, low |
| Contact | Email, LinkedIn, one sentence of intent |

**Facts occupy one block of seven and sit sixth.** That is the inverted allocation, implemented.

**"How I write this up" is an addition to the 5B sequence.** It exists because the site's most
distinctive mechanisms — required uncertainty and the revision register — are otherwise never
explained anywhere, and a reader who has not yet opened an investigation has no way to know they are
deliberate. **This is the one block at risk of becoming C**, a manifesto about method. It is held to
two paragraphs and describes what he does rather than what readers should do.

---

## What remains unvalidated

Whether the page holds under three screens · whether `.facts` reads as reference material or as a
résumé table · whether "How I write this up" reads as candour or as self-description · whether
seven blocks reads as one document or as a stack of sections.
