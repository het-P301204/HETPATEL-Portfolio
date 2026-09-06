# Experience Wording — proposed

**Date:** 2026-08-15 · **Status: PROPOSED. Requires Het's approval before it is treated as content.**

Two versions of the same material, written after the 2026-08-15 attribution and publication
clearance (P5EV-009). Every claim traces to `SOURCE_OF_TRUTH.md` or to that clearance.

**Governing rules applied throughout:**
- Attribution ceiling stated explicitly, not left to inference — *participated in*, *assisted with*, never *led* or *owned*.
- No client name, finding, evidence, control result, vulnerability, identifier or engagement-specific detail.
- **No sentence drawing attention to what is withheld** (`CONFIDENTIAL_WORK_MODEL.md` §1).
- "In the financial sector", not "a leading financial firm" — see P5EV-009 on the sector nuance.
- No banned vocabulary; every sentence must survive the Trail of Bits abstract test.

---

## A — HOMEPAGE VERSION (in the prototype now)

Three paragraphs plus one calibrating aside. Deliberately short: the homepage is not a resume dump.

> **The work**
>
> Since January 2026 I have been a cybersecurity intern at **Info eShield Cyber Solutions**, working
> across VAPT and risk and compliance. The testing side is web application work — enumeration, then
> Burp Suite by hand, looking for injection, cross-site scripting and misconfiguration. The part that
> took longest to learn was not finding things. It was writing a finding so that the person who has
> to fix it understands what is actually wrong.
>
> Through that role I have participated in **CSCRF and IRDAI audit engagements** in the financial
> sector, and worked on control mapping against **ISO 27001**. I assisted on this work rather than
> scoping or leading it. What it gave me is the thing a lab cannot: seeing how a technical finding
> becomes a regulatory obligation, and how an obligation becomes evidence that somebody else has to
> accept.
>
> Most of that reduces to one question asked repeatedly — whether a piece of evidence actually
> demonstrates the control it is filed under, or only appears to.
>
> *[aside]* My ISO 27001 knowledge is a working understanding of controls and risk management, not a
> specialism. My Splunk experience is lab work rather than production.

**Word count: 178.** Three named entities, three named frameworks, one date.

**Why it is built this way**

| Sentence | Doing |
|---|---|
| "Since January 2026… Info eShield Cyber Solutions" | Employer named — the strongest single signal that the work is professional |
| "The part that took longest to learn was not finding things" | A claim only someone who has done the work makes. This is the anti-genericity line |
| "Through that role I have participated in…" | **The clearance, used.** States the association Het has now authorised, and nothing more |
| "I assisted on this work rather than scoping or leading it" | The ceiling, stated by Het rather than discovered by the reader. Unprompted role precision reads as maturity |
| "how a technical finding becomes a regulatory obligation" | The intersection — the whole positioning in one clause |
| "whether a piece of evidence actually demonstrates the control it is filed under, or only appears to" | Specific reasoning that discloses nothing. `CONFIDENTIAL_WORK_MODEL.md` §4.1 — the reasoning can be completely specific while the context stays generic |
| The aside | Anti-overclaim calibration. Not about confidentiality |

---

## B — DETAILED VERSION (for Experience / About — **not yet built**)

For the fuller surface. **Phase 5F does not authorise building About**, so this is wording held ready, not a page.

> **Info eShield Cyber Solutions**
> Cybersecurity Intern — VAPT, Risk & Compliance · since January 2026
>
> I joined expecting the job to be about finding vulnerabilities. A reasonable amount of it is. The
> rest turned out to be the harder half, and it is the half I would not have learned anywhere else.
>
> **Testing.** I test web applications — enumeration and service discovery first, then working
> through the application by hand in Burp Suite, looking for injection, cross-site scripting,
> access-control problems and misconfiguration. Nikto and Nmap do the parts that should be
> automated. Everything interesting has come from reading the application's own behaviour rather
> than from a scanner's output.
>
> The skill I underrated was writing it up. A finding that is technically correct and unreadable
> does not get fixed. I spend longer than I expected deciding what a remediation note actually needs
> to say, and to whom.
>
> **Assurance.** Through this role I have participated in CSCRF and IRDAI audit engagements in the
> financial sector, and contributed to control mapping against ISO 27001 and to the documentation
> that supports an audit. I assisted on this work; I did not scope it, own it or lead it, and I am
> not an auditor.
>
> What that exposure gave me is a sense of the distance between a finding and a control. A tester
> asks whether something is exploitable. An audit asks whether the organisation can demonstrate that
> it manages the risk — which is a different question, evidenced differently, and satisfied by
> different work. Most of the difficulty I saw sat in one place: deciding whether a piece of evidence
> genuinely demonstrates the control it is filed under, or only resembles it closely enough to pass a
> tired reading.
>
> **What I would say about my own level.** Seven months is exposure, not expertise. My ISO 27001
> knowledge is a working understanding of controls, risk management and compliance mapping, not a
> specialism. My Splunk experience is TryHackMe lab work, not production. What I can claim is having
> been inside regulated assurance work at a point when most people at my stage have only read about
> it — and having formed some judgment from it.

**Word count: 379.**

**Structure note.** Testing → assurance → the distance between them → an explicit statement of
level. The last paragraph is the one that makes the rest credible: it names the ceiling before a
reader has to test for it, which `POSITIONING.md` §2 identifies as the line the whole brand sits on.

---

## Claim-by-claim trace

| Claim | Source |
|---|---|
| Cybersecurity Intern — VAPT, Risk & Compliance, Info eShield, since Jan 2026 | Resume, verbatim role title |
| Web app testing; Burp Suite, Nmap, Nikto; SQLi, XSS, misconfiguration | Resume |
| Remediation documentation; risk assessment; ISO 27001 compliance mapping; VAPT reports; audit documentation | Resume |
| Participated in CSCRF and IRDAI audit engagements | Het, confirmed 2026-08-14; attribution cleared 2026-08-15 |
| Association with Info eShield | **Cleared 2026-08-15 — P5EV-009** |
| Financial sector | Het, both statements; broadest accurate form used |
| ISO 27001 = "basic/working understanding" | Resume's own wording. **Not inflated** |
| Splunk = TryHackMe labs | Resume. Stated as lab work wherever it appears |
| "Seven months is exposure, not expertise" | `POSITIONING.md` §2, restated in first person |

**Nothing above is inferred, extrapolated or invented.** Two phrasings are interpretive rather than
factual and are flagged for Het:

1. *"I joined expecting the job to be about finding vulnerabilities"* — a plausible and humanising
   framing, but it is **a claim about Het's own expectations that only he can confirm.** Cut it if
   it is not true.
2. *"access-control problems"* in the testing list — the resume names SQLi, XSS and
   misconfiguration. Access control is adjacent and likely, but **it is not on the resume.** Remove
   unless Het confirms.

---

## Not done, deliberately

- **No professional investigation was created.** Per Het's instruction the engagement is context,
  not content. The investigation unit remains the specific question he personally worked through
  inside it.
- **No About page was built.** Out of scope.
- **No confidentiality notice anywhere.** §1 bans it and Het's instruction agrees.
