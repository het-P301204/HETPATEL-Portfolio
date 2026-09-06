# Phase 5G — Research

**Date:** 2026-08-15

Two questions the earlier rounds did not ask: **how do notes systems avoid becoming blogs**, and
**what does a strong technical About page actually contain?**

Method key: `[F]` fetched this session · `[C]` carried from the Phase 1 corpus · `[S]` search-derived
consensus.

---

## 1. Notes without a blog — the digital-garden literature `[S]`

The pattern has a name and a substantial body of practice. The distinction that matters:

> Digital gardens value content that has **earned its authority through repeated updates**, while
> blogs put emphasis on **what is new**.

That single line is the most useful thing found in this round, and it reframes the return-visit
problem (see `RETURN_VISIT_MODEL.md`).

**Other transferable characteristics:** not organised strictly by publication date · notes may be
published half-finished and grow · contextual links rather than an index-and-feed · low friction, so
small things get written at all.

**What must not transfer — flagged in Phase 1 and reaffirmed:** the vocabulary. *"Digital garden"*,
*"tending"*, *"seedling/budding/evergreen"* and plant metaphors generally are strongly owned by
Maggie Appleton, and `REFERENCE_SITES.md` already rates the copying risk **MEDIUM-HIGH**. **Adopt
the structure; never the language.**

**And one characteristic that must be rejected outright.** Gardens permit half-finished, unrefined,
continuously-mutating notes. That is wrong for this site: `FIELD_NOTES_MODEL.md` defines a note as
**one observation, written once, that did not need working out** — a note is *finished*, it is just
*small*. Continuous mutation belongs to investigations, which have a revision register for exactly
that purpose. **Notes are superseded; investigations are revised.** The two mechanisms are different
and 5G keeps them apart.

---

## 2. The About page — Julia Evans, jvns.ca `[F]`

Structure: *About this blog* → *About me* → archives.

| Element | How it is handled |
|---|---|
| Identity | Name, "a software developer" |
| Work history | One mention (Recurse Center, 2013). Everything else implied by the archive |
| Current work | One sentence — "most of my income comes from my programming zines business" |
| Contact | **None.** Social links only |
| **Credentials** | **Absent entirely.** No degrees, no certifications, no qualifications |
| Length | **~250 words of substance** |
| Genre | A personal statement, not a résumé |

**What this teaches, and its limit.** The page is short, credential-free, and works — because
fifteen years of published work *is* the credential. Het cannot borrow that: he is early-career with
no built work, so his credentials have to appear somewhere.

**The transferable principle is the ratio, not the omission.** Evans gives roughly 100% of the page
to voice and 0% to credentials. `ABOUT_LAYOUT.md` independently specified roughly two-thirds voice
and one-third facts, which is the right adaptation for someone at Het's stage — **the facts appear,
compactly, below the person, rather than instead of them.**

**Length is the actionable number.** 250 words of substance for an established practitioner sets a
ceiling worth respecting. `ABOUT_LAYOUT.md`'s cap of three screens is generous by comparison, and
should be treated as a hard limit rather than a target.

---

## 3. Carried forward, re-read for 5G `[C]`

| Reference | Original finding | 5G relevance |
|---|---|---|
| **Maggie Appleton** | Content typed by epistemic status; visible ageing ("over 3 years ago") | Ageing shown rather than hidden is the mechanism that lets a note from 18 months ago stay up honestly |
| **Lynn Fisher** | Site versioned "v. XIX" with a browsable archive of past versions | The only return mechanism in the corpus that survives an unproven publishing cadence — it rewards return without promising posts |
| **The Pudding** | An "Updating" filter marking living pieces | An explicit still-changing state is honest *and* a return hook |
| **Olivier Larose** | Structured records plus unmistakable personal voice | The proof that About can carry facts without becoming a form |
| **bugatsec.dev** | *"intentional genericization through absence of personality markers"* | The exact failure an About page written in the third person would produce |
| **Distill** | Making the verification process visible beats asserting rigour | Supports supersession lines over silent edits |

---

## 4. Footers — what the corpus actually does `[C]` `[S]`

No strong personal site in the corpus has a notable footer. They are uniformly minimal: a name,
sometimes contact, occasionally a repeat of navigation. **None carries © / Privacy / Terms**, which
is a convention inherited from commercial sites that collect data.

**The negative finding is the useful one.** A personal portfolio has no terms to link, no privacy
policy to publish if it collects nothing, and no copyright claim anyone needs stated. A footer that
repeats those things is signalling that it was assembled from a template.

**What a footer can usefully do at the bottom of a portfolio:** restate who this is and what they
do, for a reader who has scrolled past the top; offer the navigation again; and give contact
without ceremony.

---

## 5. security.txt — a genuine signal, with a condition

RFC 9116 defines `/.well-known/security.txt` as a machine-readable contact point for vulnerability
reports. For a security practitioner's own site it is a small, real, checkable signal of the
discipline the site is about.

**Condition, and it is absolute:** the file must actually exist and its `Contact` and `Expires`
fields must be real. A dead or stale `security.txt` is worse than none — it is a security claim that
fails its own check, on a site whose premise is intellectual honesty.

**Not implemented in 5G**, because 5G does not deploy. Recorded in `PHASE5G_SPEC.md` as a production
requirement. **It must never be advertised in the interface** — no "secure by design" copy, no badge.
The point is that a reader who looks finds it there.

---

## 6. What this round did not settle

**Nothing here was tested against a rendering.** The digital-garden distinction, the About length
ceiling and the footer finding are all reasoning from other people's sites to Het's, and the step
that would confirm them — looking at his — did not happen.
