# User Input Required

**Updated:** 2026-08-14, after Phase 0 source ingestion.
**Superseded:** the pre-Phase-0 version. Questions the resume answered have been removed.

Ordered by impact. **Questions 1–5 block progress into Phase 1 extension and Phase 2.**

---

## Now answered by the resume — no longer asked

Education (C.K. Pithawala College, B.E. Computer Engineering, Sept 2022 – June 2026) · employer and title (Info eShield Cyber Solutions, Cybersecurity Intern — VAPT, Risk & Compliance, Jan 2026 – current) · certifications held and in progress · tooling · resume-stated location and contact details.

---

## ✅ RESOLVED 2026-08-14

| Q | Answer |
|---|---|
| **CSCRF / IRDAI** | Real. Personally performed for a leading financial firm. High-level/anonymised presentation only; nothing client-sensitive without explicit clearance. |
| **Email** | `patel.het7996@gmail.com` |
| **Location** | Not displayed publicly. Temporary (Surat → expected USA for master's). Excluded from brand and architecture. |
| **GitHub** | https://github.com/het-P301204 — audited, see `github/PUBLIC_GITHUB_AUDIT.md` |
| **Strategy documents** | Adopted working strategy, not authored work. No claim of original authorship over frameworks or prose. |
| **Project descriptions** | Het will supply separately. Nothing invented. |

---

## BLOCKING — new, arising from the GitHub audit

### A. `PingMaster` — what is it?

Your repository `PingMaster` is flagged `fork: false`, but it contains:
- a `Cargo.toml` declaring workspace members **`gping`** and **`pinger`**
- a directory `gping/` and a man page `gping.1`
- **two** READMEs — a 209-byte "PingMaster" one, and a 2,304-byte `Readme.md` describing **"gping master"** under the **MIT License**, containing the placeholder `https://github.com/your-username/gping-master/`
- two commits, four minutes apart: `Initial commit`, then `Add files via upload`

That's the existing open-source **gping** project. **I'm not assuming why** — studying the code, a coursework exercise, a packaging experiment, or an intended fork made the wrong way are all plausible.

But on public evidence it can't be presented as your work, and any reviewer who opens `Cargo.toml` would see it in seconds. **Which is it?** Options: delete it · convert to a proper fork with attribution and the MIT license restored · explain it as a study exercise.

### B. Will you delete the two forks?

- **`pounce-keys`** — a fork of an Android **stealth keylogger** ("full launcher stealth", covert log exfiltration). This is the highest-severity item on your public footprint. You do CSCRF and IRDAI audit work for a financial firm; the GRC audience is risk-averse by profession. Your *own strategy document* lists "a keylogger, presented as an educational exercise" among the clichés reviewers have seen four hundred times — and a fork shows no learning at all. **I'd delete it.** Your call.
- **`V15.55-portfolio`** — an unmodified fork of someone else's portfolio, still pointing at their live site. Confusing at best while you build your own.

### C. Are there private repositories?

Public shows **0 verified original repos**. None of your five resume projects are public. Do they exist privately? A resume listing five projects against a GitHub showing none is a discoverable inconsistency (logged as conflict C-6).

### D. What exactly are you cleared to publish about CSCRF/IRDAI?

I have the boundary — high level, nothing client-sensitive. Before any case study I need:
- Does this work sit **under the Info eShield internship**, or a separate engagement?
- Approximate period?
- May **Info eShield be named in connection with it**? (Naming them as your employer is already fine — it's on your resume.)
- Can you name the **frameworks** (CSCRF, IRDAI) explicitly? *(I've assumed yes, since you named them to me — confirm.)*
- Roughly what was your role: testing, evidence collection, documentation, control mapping, something else?

---

## STILL OPEN — from before

### 1. ~~CSCRF and IRDAI~~ ✅ RESOLVED — see above

Your brief (§4) states you have **CSCRF audit** and **IRDAI audit** experience, and work involving **a leading financial firm**, describing this as important to your positioning.

Your resume describes one internship whose compliance work is *"risk assessments and compliance mapping ISO 27001 & internal policies."* CSCRF, IRDAI and any financial-sector client appear nowhere.

I have not merged these accounts. Both terms are currently banned from the site.

**Please tell me which applies:**
- (a) The work is real; the resume is out of date
- (b) It's real but under NDA — I can say I've worked on regulated audit engagements without naming frameworks
- (c) It was exposure/assistance rather than my own audit work
- (d) It overstates what I did

**Why this matters more than any other question:** my Phase 1 recommendation ("The Register") rests on regulated assurance being your differentiator. Research found GRC work in 1 of 20 sampled early-career portfolios — genuinely scarce, and impossible to self-acquire. If (a) or (b), that recommendation holds and strengthens. If (c) or (d), it needs rethinking, and the fallback concept becomes the right call.

### 2. ~~Email and circumstances~~ ✅ RESOLVED — Gmail; location excluded from the brand

*One residual:* are you currently working, studying, or job-seeking? Affects a "now" surface, not the architecture.

### 3. ~~GitHub identity and repository state~~ ✅ RESOLVED and audited

Superseded by blocking questions **A–C** above. Findings in `github/PUBLIC_GITHUB_AUDIT.md`.

### 4. Your five projects have titles but no descriptions

The resume lists them on one line: Network Vulnerability Scanning Lab · Phishing Web (Social Engineering Simulation) · Cloud Security configuration · Secure Login System · Incident Response Simulation.

I won't invent descriptions. For each one you want shown:
- What problem it addressed, and why you chose it
- What you actually built vs. configured vs. followed
- What you learned, and what it does *not* do
- Is there a repository? Does it still run?

**Worth saying plainly:** your own strategy document argues these fall in the category reviewers "have seen four hundred of." That's not a criticism of the work — it's the exact problem your document exists to solve. Honest framing is possible; transformation isn't. Which of these, if any, is worth keeping?

### 5. ~~Who wrote the roadmap and strategy documents?~~ ✅ RESOLVED

Adopted working strategy, not authored work. The site will present them as direction you've deliberately chosen and are executing — never as your original framework or prose. Any quotation will be visibly attributed.

**Correction recorded:** the earlier note calling "documented selection judgement" your strongest differentiator assumed the analysis might be yours. Corrected — adopting and executing a rigorous strategy is still uncommon and real, but it is a weaker claim than authorship, and the copy must reflect that.

---

## HIGH PRIORITY

### 6. Which of the eight career tracks?

Your strategy document ranks projects for: **Internships · Security Engineering · Product Security · Cloud Security · Detection Engineering · GRC and Compliance Engineering · AI and Agent Security · DevSecOps and Supply Chain.**

Which are you actually targeting? (Pick one or two.) This sharpens emphasis significantly — and interacts with Q1: if GRC is real *and* you want that track, the positioning is unusually strong.

### 7. Confidentiality boundaries

Proposed structure for any professional work shown: **objective · scope boundaries · role · approach · security domain · deliverable type · lessons** — with no findings, counts, metrics, client identifiers, system detail, or correlatable dates.

- Is that safe under your obligations?
- Are you under an NDA, and does it restrict even this?
- May **Info eShield Cyber Solutions** be named? *(It's on your resume, so I'm assuming yes — confirm.)*
- Will you personally review every piece of professional content before publication? **Strongly recommended — I can't assess your legal obligations.**

### 8. The VAPT and internship reports

I found `HET_VAPT_Report_GTU.docx`, `Het's Final Internship Report.pdf` and related files. **I did not open them** — they likely contain client material.

They may be your richest evidence of real work. Do you want them used as private grounding (not published)? If so, are they client work or university lab work? That changes everything about what's publishable.

### 9. Resume version — mostly resolved, one thing to confirm

You placed `Resume.pdf` into `docs\` mid-session. It's **newer** than the `Het Patel- Resume MAIN.pdf` I'd initially read, so I've made it canonical. Two differences:

- The ISO 27001 bullet now correctly describes ISO 27001 (the older one described AWS/Azure security under an ISO 27001 heading).
- **The AWS/Azure cloud security claim is gone entirely.** I've treated it as withdrawn and it won't appear on the site — confirm that's intended, since it narrows your cloud story.

**Confirm:** `docs\Resume.pdf` is the current one?

**Also — the roadmap PDF isn't in the project folder.** I read it from `H:\PORTFOLIO\`. Worth copying it in alongside the other two.

**Three defects remain in the canonical resume**, worth fixing in the resume itself, not just on the site:
- **"Gobuster : Performed VAPT on lab environments…"** — never mentions Gobuster; it's a general VAPT summary under the wrong heading.
- The **Nmap/Wireshark bullet states the same claim twice** in different words.
- **"Passionate about protecting digital assets…"** — exactly the filler vocabulary your own strategy document argues against.

---

## MEDIUM PRIORITY

### 10. Realistic capacity
An evolving site you can't maintain decays into a stale one — worse than a modest fresh one.
- Hours per month for content, realistically?
- Writing cadence you'd genuinely sustain?
- Comfortable publishing unfinished thinking under a "Research / Under investigation" label?

### 11. Vocabulary
**Content states** — pick one:
- **A (assurance register):** Deployed / In development / Under investigation / Scoped
- **B (plain):** Built / In progress / Research / Planned

*A borrows your professional register — "scope" means something specific in an audit — and is more distinctive. It only makes sense if Q1 resolves favourably.*

**Writing section:** Field Notes / Working Notes / Observations / The Log. *(Current preference: Field Notes.)*

### 12. Tone
Closer to **Trail of Bits** (formal, precise, austere) or **Josh Comeau** (precise but warm and personal)? Both work with the concept.

### 13. Practicalities
Domain owned or to be chosen? · Social links to include · Contact via published email or a form? · Photograph — yes or no? · Display location publicly?

### 14. Should the roadmap be public at all?
It's ambitious and unbuilt. Options: publish it fully (bold, honest, risks looking aspirational) · publish tracks only, not all 100 · keep it private as a planning instrument. **My concern:** 219 concepts against ~5 undescribed projects could read as someone who has planned a decade and shipped nothing.

---

## LOWER PRIORITY

### 15. Assets and preferences
Existing branding, logo, colours, typefaces you like or dislike? Any site you've seen that you want to avoid resembling?

### 16. Deployment
Hosting preference? Budget for a licensed typeface? *(Typography is where the identity budget matters most.)*

---

## One thing I'd raise unprompted

Your strategy document's own advice is: *"Choose one idea from this catalog and take it all the way to product. That single repository will outperform five projects taken to the demo stage, in every hiring conversation you will have."*

Right now the honest gap isn't the website — it's that there's no substantial built work for a website to present. A superb site over five tutorial projects invites the question "where's the work?", and that question colours everything else on the page.

That's not an argument for stopping. It *is* an argument for deciding now which single project you're taking to product, so the site gets designed around something real landing in it. **Which one would you pick?**

---

## Open conflicts

| ID | Conflict | Status |
|---|---|---|
| C-1 | CSCRF/IRDAI in brief, absent from resume | **OPEN — blocking (Q1)** |
| C-2 | Two email addresses; possible change of country | **OPEN — blocking (Q2)** |
| C-3 | Roadmap targets Senior/Staff/Principal; resume is entry-level | Managed — roadmap framed as direction |
| C-4 | Decision-log path | Resolved — `/docs/DECISION_LOG.md` canonical |
| C-5 | "100 repositories" vs "ten finished projects" | Resolved — roadmap's own words win |
