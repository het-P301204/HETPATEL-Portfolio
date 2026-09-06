# About — Content Model

**Date:** 2026-08-15

Every claim on the About page, classified by evidence. **Nothing is invented.**

**VERIFIED** — traceable to `SOURCE_OF_TRUTH.md` · **CLEARED** — permitted by the 2026-08-15
attribution clearance (P5EV-009) · **VOICE** — Het's own framing, requires his confirmation ·
**PLACEHOLDER** — requires Het.

---

## Block 1 — Identity

| Claim | Class |
|---|---|
| "early-career security practitioner" | VERIFIED — recent B.E. graduate, ~7-month internship |
| "I test web applications" | VERIFIED — resume |
| "I work on the compliance side of the same problem" | VERIFIED — resume: risk assessment, ISO 27001 mapping |
| *"which turns out to be the part most people skip"* | **VOICE** — a judgment, not a fact. Defensible and **his to confirm** |

---

## Block 2 — What I work on

| Claim | Class |
|---|---|
| Enumeration; Burp Suite by hand; injection, XSS, misconfiguration | VERIFIED — resume |
| "access control" in the testing list | ⚠️ **NOT ON THE RESUME.** Adjacent and likely. **Remove unless Het confirms** |
| Scanners useful for what should be automated | VOICE |
| *"the difficult skill is not finding a weakness"* | VOICE — a claim about the work only someone who has done it makes |
| Control mapping, audit documentation | VERIFIED — resume |
| *"I came to this expecting it to be paperwork. It is not."* | **VOICE** — a claim about **his own expectations.** Only he can confirm it. **Cut if untrue** |
| The finding/control distinction | VOICE — a technical distinction, checkable by any reader |

---

## Block 3 — How I write this up

| Claim | Class |
|---|---|
| Investigations state what could not be determined | VERIFIED — it is how they are built |
| *"A few of the investigations here have conclusions I have since changed"* | ⚠️ **TRUE OF THE PROTOTYPE FIXTURES ONLY.** Becomes true when real investigations carry real revisions. **Must not ship until it is** |

---

## Block 4 — Experience

| Claim | Class |
|---|---|
| Info eShield Cyber Solutions; Cybersecurity Intern, VAPT, Risk & Compliance; January 2026 – present | VERIFIED — resume, verbatim role title |
| Web app testing; injection, XSS, misconfiguration; remediation documentation | VERIFIED |
| Risk assessment; ISO 27001 control mapping; audit documentation | VERIFIED |
| **Participated in CSCRF and IRDAI audit engagements, in the financial sector, through this role** | **CLEARED 2026-08-15** |
| *"I assisted on that work — I did not scope it, own it or lead it, and I am not an auditor"* | VERIFIED — required attribution ceiling |
| "Seven months is exposure, not expertise" | VERIFIED — `POSITIONING.md` §2, first person |
| ISO 27001 = working understanding, not a specialism | VERIFIED — the resume's own wording. **Must not be inflated** |
| Splunk = TryHackMe lab work, not production | VERIFIED |

**Forbidden here and absent:** client names · findings · evidence · control results · vulnerabilities ·
identifiers · internal documents · engagement-specific detail · correlatable dates · **any sentence
drawing attention to what is withheld.**

**Sector wording:** "in the financial sector" — accurate under both of Het's statements and less
identifying than either. See P5EV-009.

---

## Block 5 — Where this is going

| Claim | Class |
|---|---|
| Toward security engineering; tooling and detection | **PLACEHOLDER** — plausible and **unconfirmed** |
| "continuing to write up the assurance side" | PLACEHOLDER |

**Rendered with a visible placeholder.** This block presents *direction*, and direction stated as
achievement is the failure `PROJECT_CONSTRAINTS.md` T4 exists to prevent. **The 100-repository
roadmap must never appear here** — 219 concepts against zero built repositories is the site's most
dangerous asset.

---

## Block 6 — Background

| Claim | Class |
|---|---|
| B.E. Computer Engineering, C.K. Pithawala College of Engineering and Technology, Sept 2022 – June 2026 | VERIFIED |
| CompTIA Security+ (SY0-701) in progress | VERIFIED |
| Google Cybersecurity Professional Certificate | VERIFIED |
| Cisco Junior Cybersecurity Analyst Career Path | VERIFIED |
| Microsoft Student SOC Program Foundations | VERIFIED |
| Deloitte Australia Cybersecurity Job Simulation | VERIFIED |
| Kryptech CTF Excellence | VERIFIED |
| TryHackMe Advent of Cyber 2025, Pre-Security | VERIFIED |
| **16** Credly certifications | VERIFIED — **exact**, per rule 6. Not "16+", not rounded |
| GitHub "currently thin; I am rebuilding it" | VERIFIED — the audit found 0 verified original repositories |

**No grades.** No class, no percentage, no GPA — context, not achievement.

**Withdrawn and absent:** AWS/Azure security exposure. Present in an older resume, deleted in the
canonical one. Treat as retracted.

---

## Block 7 — Contact

| Claim | Class |
|---|---|
| `patel.het7996@gmail.com` | VERIFIED — the designated public address. **Not the .edu address** |
| LinkedIn `het-patel-913017345` | VERIFIED |
| "interested in security engineering and assurance roles" | VOICE |
| Resume link | **PLACEHOLDER** — Het's call, not built |

**Absent:** contact form · phone number · **physical location** · availability banner · newsletter.

---

## The items requiring Het

| # | Item | Status |
|---|---|---|
| 1 | **"the part most people skip"** — his judgment | ⏳ needs his agreement |
| 2 | **"I came to this expecting it to be paperwork"** — a claim about his own expectations | ⏳ needs his agreement |
| 3 | ~~**"access control"** in the testing list~~ | ✅ **REMOVED 2026-08-15** |
| 4 | ~~**"conclusions I have since changed"**~~ | ✅ **REPLACED 2026-08-15** |
| 5 | **Block 5 direction** — one or two sentences, or cut the block | ⏳ placeholder rendered |

### Corrections applied 2026-08-15 — Het's instruction

Both items that would have been **inaccurate** rather than merely unconfirmed are fixed.

**Item 3 — removed.** The testing list read *"injection, cross-site scripting, access control,
misconfiguration."* Access control is **not on the resume**; `SOURCE_OF_TRUTH.md` §1 names SQL
injection and XSS only. It now reads *"injection, cross-site scripting, misconfiguration."*
Swept across all prototype pages: **zero remaining occurrences.**

**Item 4 — replaced, not deleted.** The sentence read *"A few of the investigations here have
conclusions I have since changed"* — a claim about a real inventory that does not yet exist.

| | |
|---|---|
| **PREVIOUS** | *"A few of the investigations here have conclusions I have since changed."* |
| **WHY IT FAILED** | It asserts a fact about current published work. True of the 5D fixtures; **not true of anything real** |
| **NEW** | *"Where a conclusion has changed, the page says what it used to be and why it changed."* |
| **WHY THIS IS SAFE** | It describes **the practice**, not the inventory. It is true on the day the site launches with zero revisions, and it stays true at fifty. It also still explains the revision register to a reader who has not yet opened an investigation, which was the sentence's job |

**Neither correction was validated visually** — both are one-line text changes made while browser
tooling was unavailable. The About page has still never been rendered.
