# Homepage Research

**Date:** 2026-08-15 (Phase 5E)

Phase 1 built a 30+ site corpus (`../research/REFERENCE_SITES.md`) covering sites as a whole. **It did not study first screens, and it predates constraint T9.** This round asks one question the earlier research never asked:

> **What makes a first screen read as a portfolio rather than as a publication?**

Method key: `[F]` fetched and read this session · `[C]` carried forward from the Phase 1 corpus · `[S]` search-derived guidance, treated as practitioner consensus rather than measurement.

---

## 1. The discriminator, found

Two of the strongest research-led personal sites in the corpus are **almost entirely content** and still read unmistakably as portfolios. Understanding why produced the discriminator.

### James Kettle — jameskettle.com `[F]`

Opening text, verbatim:

> "James 'albinowax' Kettle is the Director of Research at PortSwigger, the makers of Burp Suite. He's best known for pioneering influential web attack techniques like HTTP Desync Attacks."

Then research grouped **thematically**: HTTP Request Smuggling (7) · Web Cache Poisoning (4) · Tools & automation (5) · Other highlights (8) · How I approach research (6) · Misc (chronological, 2011–2025).

**What this teaches.** The first sentence is a *professional claim about a person* — name, role, employer, and what he is known for. Content does not appear until that is settled. And the body of work is organised by **kind of problem**, not by date; the chronological list is demoted to "Misc" at the bottom.

### Daniel Miessler — danielmiessler.com `[F]`

Opening text, verbatim:

> "Hi, My name is Daniel Miessler and I'm a Cybersecurity / AI engineer and founder based out of the San Francisco Bay Area who's been building and writing online since 1999."

Navigation leads to projects, ideas and frameworks — **not to recent posts**. The homepage is an introduction to a person's body of work rather than a content aggregation point.

**What this teaches.** Same structure. Person, role, discipline, first. The site is content-dense and never reads as a magazine, because the person is the subject and the content is the evidence.

### The discriminator

| Signal | Reads as **publication** | Reads as **portfolio** |
|---|---|---|
| First sentence | content, or a masthead | **person + role + where the work happened** |
| Work ordering | reverse chronological | **grouped by kind of problem** |
| Per-item metadata | date, read time | **status, origin, role, evidence** |
| Employer | absent | **named** |
| What is offered | the writing | **the person's capability** |
| Navigation | recent / archive / categories | **body of work** |

This table is now the instrument used by `HOMEPAGE_PORTFOLIO_TEST.md`.

**Applying it to the 5D investigation page explains the measured result exactly.** That page has date-led apparatus, no role, no employer, and its own content as the subject — four publication signals out of six. It read as an editorial publication because, by this instrument, it *is* one. That is correct for an investigation page and must not be inherited by the homepage.

---

## 2. Practitioner guidance on the first screen `[S]`

Consistent across independent sources, treated as consensus rather than measurement:

- **The lane must be nameable in about five seconds** — AppSec, blue team, cloud, GRC, offensive. A reader who cannot place you leaves. This is the strongest single finding for Het, because his lane is an *intersection* and intersections are harder to state — which makes stating it well disproportionately valuable.
- **State role and level in plain language above the fold**, so a reader can tell a junior generalist from a senior specialist without digging. For Het this cuts both ways and is ultimately an asset: "early-career" stated plainly is what makes everything else believable.
- **Specific beats aspirational.** "Product Designer specialising in B2B SaaS" outperforms "I create meaningful digital experiences." The security equivalent of the second phrase is every banned string in `POSITIONING.md` §6.
- **Tool lists without outcomes do not survive screening.** A page reading "Burp, Nmap, Nikto" with no attack surface reduced and no reasoning shown is filtered out. **This is precisely Het's exposure** — his toolset is identical to the saturated archetype's (`REFERENCE_SITES.md`, Raif Kaya).
- Initial review is 2–3 minutes; the first five seconds decide whether those minutes happen.

---

## 3. Carried forward from the Phase 1 corpus `[C]`

Re-read against the first-screen question. What now reads differently:

| Reference | Original finding | What it means for the homepage |
|---|---|---|
| **Kettle** | Thematic grouping converts outputs into a demonstrated domain | Now understood as a *portfolio* signal specifically. **A structural argument available without seniority** — the most useful property in the corpus for Het |
| **Trail of Bits** | Linguistic precision is a credibility mechanism | The identity sentence must survive the abstract test. No adjective that cannot be checked |
| **Dennis Snellenberg** `[R]` | `canvasCount = 0`; accent on 8 of ~380 elements | The most-awarded portfolio inspected uses **fewer** effects than the student security sites. Restraint is not a compromise here; it is the benchmark |
| **bugatsec.dev** | *"intentional genericization through absence of personality markers"* | The failure mode of a competent, corporate, voice-free portfolio. Closest to what a careful 5E could accidentally produce |
| **Olivier Larose** | Structured records + unmistakable personal voice | The proof that rigour and personality are **not** in tension — the escape from the bugatsec failure |
| **Doyensec** | Client anonymised, engineering fully specific | The model for the experience block: hide the client, show the reasoning, never mention what was withheld |
| **Bishop Fox** | Descriptor labels where naming is not permitted | Supports "a financial firm" as sufficient and unremarkable |
| **Include Security** | No case studies at all; discretion unannounced | Confirms that confidentiality needs no framing device |
| **Maggie Appleton** | Content typed by epistemic status | Status/origin as metadata is a portfolio signal, not a blog signal — it describes the *work's state*, not the post |
| **Adharv K T** `[R]` | Neon, ALL-CAPS, "COURSES COMPLETED", skill bars at 99% | The genericity baseline the homepage must beat |

---

## 4. What works, is generic, is overused, applies, and must not be copied

**What genuinely works**
Person-role-employer in the first sentence · thematic grouping of work · precise technical titles · stated role on shared work · anonymised client with specific engineering · visible epistemic status · restraint as craft signal.

**What is generic**
Hero with name in huge type over a one-line tagline · About→Skills→Projects→Contact · card grids · "Let's build something amazing together."

**What is overused**
Terminal and Matrix motifs · percentage skill bars · certificate walls · GitHub contribution graphs · stat counters · "passionate about cybersecurity."

**What applies to Het**
Kettle's thematic grouping (deferred until ~8 items — see P5EV-005) · Doyensec's anonymisation · Larose's structured-record-plus-voice · Appleton's epistemic status · Snellenberg's restraint · Jesper Landberg's explicit role transparency, which is **unusually relevant** because audit work is team work and Het's contribution must be stated exactly.

**What must not be copied**
Kettle's austerity — it is affordable because his name carries the credibility Het does not yet have · Appleton's garden vocabulary · Miessler's manifesto register, which requires standing Het has not earned · Bruno Simon's showpiece interaction, justified only when the interaction *is* the skill being sold.

---

## 5. The single most important transfer

Kettle's grouping is worth restating as the finding it is:

> Grouping a body of work by **kind of problem** rather than by **date** converts a list of outputs into a demonstrated domain — and that is a structural argument available to someone with no seniority at all.

Het cannot yet use it — three investigations do not group. But it is the shape the homepage must be able to grow into without redesign, and it sets the direction: **the homepage's work section is a portfolio of problems worked on, not a feed of things published.**
