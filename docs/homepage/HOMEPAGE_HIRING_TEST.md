# Homepage — Hiring Test

**Date:** 2026-08-15 (Phase 5E)

Three simulations against the **rendered** homepage. These are structured walkthroughs of what is
actually reachable in the time available — not user research. Where a result depends on my reading
rather than on a measurement, it is marked JUDGMENT.

Geometry referenced throughout (MEASURED, prototype banner excluded, which is correct because the
banner is not production):

| Position | 1280 | 375 |
|---|---|---|
| Navigation | 0 | 0 |
| Name (`h1`) | 122 | 112 |
| Identity / lane sentence | 189 | 168 |
| **"The work"** | **508** | **509** |
| Selected investigations | 1524 | 1740 |
| One in full | 2274 | 2569 |
| Working on now | 3193 | 3621 |
| Contact | 3517 | 3985 |
| Document height | 3919 | 4351 |

First screen ≈ 900px at 1280 and ≈ 660px at 375 (allowing for browser chrome).

---

## TEST A — RECRUITER · 20 seconds

Scanning, not reading. Roughly one screen plus a fast scroll.

| Question | Answer | Where | Verdict |
|---|---|---|---|
| **Who is Het?** | Name as `h1` | first screen | ✅ |
| **What does he do?** | *"working between technical testing and regulated assurance"* | first screen, first sentence | ✅ |
| **Does he have real experience?** | CSCRF and IRDAI named in the identity sentence; **Info eShield Cyber Solutions** in bold at 508–560px | first screen at both widths | ✅ |
| **How can they contact him?** | Contact block at **3517 / 3985px** — the last section before the footer | **~4 screens down** | ⚠️ **PARTIAL** |

**Three of four pass cleanly.** The lane is stated in the first sentence, which the research
identifies as the decisive five-second requirement, and the employer is visible above the fold at
both widths.

### Finding E-5 — contact is not reachable in 20 seconds

**MEASURED:** the only contact information sits at 3517px (1280) / 3985px (375), and there is no
contact item in the navigation. A recruiter who scans the first screen and leaves never sees an
email address.

A determined reader reaches it in one `End` keypress. A scanning one does not, and the brief names
"how can they contact him?" as an explicit Test A criterion.

**Not fixed in 5E**, because the sensible options each carry a cost and the choice is Het's:

| Option | Cost |
|---|---|
| Add `Contact` to the navigation | The brief warns against reflexive nav items — though that warning names Projects, Skills, Experience, Certifications and Services, **not** Contact, and contact is one of the four things a recruiter must find |
| Put the email in the identity block | Unusual, and slightly undercuts the restraint of the opening |
| Rely on About carrying contact | About *is* in the navigation, so the path exists — but it is two clicks and a guess |
| Accept it | Defensible only if the homepage is short enough to scroll instinctively |

**Recommendation: add the email address to the footer of every page** (it already is) **and put
`Contact` in the navigation.** It is the one conventional nav item that earns its place, because
the site's stated purpose is professional connection.

---

## TEST B — SECURITY ENGINEER · 5 minutes

Reading properly, looking for substance.

| Looking for | Found | Verdict |
|---|---|---|
| **Technical work** | "The work" — enumeration, Burp Suite by hand, injection, XSS, misconfiguration; then control mapping and audit evidence | ✅ |
| **Reasoning** | "One of them, in full" — the question, the decision *not* to read the configuration first, and why | ✅ |
| **Evidence** | Three investigations with status and origin; one shown in full; links to the rest | ✅ |
| **GitHub** | Contact block, plain text link | ✅ — deliberately unemphasised |
| **Professional experience** | "The work", at method level with role precision | ✅ |

**PASS.**

The sentence a practitioner is most likely to notice, JUDGMENT: *"I assisted on that work; I did
not scope it or lead it."* Unprompted role precision on team work is rare in early-career
portfolios and reads as maturity rather than as modesty. `REFERENCE_SITES.md` records the same
device on Jesper Landberg's site and flags it as unusually relevant to audit work, which is
team work by nature.

The second is *"It was writing a finding so that the person who has to fix it understands what is
actually wrong"* — a claim about the hard part of the job that only someone who has done it makes.

**What a practitioner will notice is missing:** any artifact they can inspect. No code, no report,
no tool. `PROJECT_CONSTRAINTS.md` makes that unavoidable today — there is no verified built work —
and the homepage does not paper over it. It is honest and it is a real gap.

---

## TEST C — HIRING MANAGER · 10 minutes

Reading the homepage and opening one investigation.

| Assessing | Evidence | Verdict |
|---|---|---|
| **Career trajectory** | "early-career"; internship since January 2026; "Working on now" | ⚠️ **PARTIAL** |
| **Technical credibility** | Testing work described at method level; the allow-list investigation in full | ✅ |
| **Judgment** | The admitted limit — *"I have left it open rather than guessing, because the two call for different fixes"* | ✅ |
| **Professional maturity** | Role precision; confidentiality handled without being announced; ISO 27001 described as a working understanding rather than a specialism | ✅ **strong** |
| **Growth potential** | Implied by the reasoning quality | ⚠️ **PARTIAL** |

**Mostly PASS**, with trajectory as the weak dimension.

### Finding E-6 — trajectory is implied, never stated

There is no sentence on the homepage that says where Het is going. This is a **deliberate
consequence** of excluding the 100-repository roadmap: `PROJECT_CONSTRAINTS.md` identifies 219
documented concepts against zero built repositories as the site's most dangerous asset, and
`HOMEPAGE_INFORMATION_ARCHITECTURE.md` excludes it because on a homepage it reads as planning
substituting for doing. That exclusion is correct and is not revisited.

But the cost lands precisely on the audience Het most wants. A hiring manager assessing an
early-career candidate is assessing trajectory more than current capability.

**The "Working on now" position is the right home for this and is currently too thin** — one
certification. **Recommendation:** if Het can honestly say what he is building toward in one or two
sentences, without invoking the roadmap and without presenting plans as work, that sentence belongs
there. If he cannot, the position is removed rather than padded, and trajectory stays a Test C
weakness that About can partly carry.

---

## What the three tests say together

| | Recruiter (20 s) | Engineer (5 min) | Manager (10 min) |
|---|---|---|---|
| Identity | ✅ | ✅ | ✅ |
| Real experience | ✅ | ✅ | ✅ |
| Technical substance | — | ✅ | ✅ |
| Reasoning and judgment | — | ✅ | ✅ **the standout** |
| Inspectable artifacts | — | ❌ **absent** | ❌ |
| Trajectory | — | — | ⚠️ implied only |
| Contact | ⚠️ **too deep** | ✅ | ✅ |

**Two findings, both actionable, neither cosmetic:** contact depth (E-5) and unstated trajectory
(E-6). Both are recorded rather than fixed, because both are Het's calls.

**The absent artifacts are not a design failure and no design change would improve them.** They are
the hard limit the whole architecture was built to survive, and the homepage survives it by not
pretending otherwise.
