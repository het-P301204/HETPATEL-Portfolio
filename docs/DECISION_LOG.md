# Decision Log

**Canonical location.** Master brief §55 specified `/docs/decisions/DECISION_LOG.md`; Phase 0 §11 specified `/docs/DECISION_LOG.md`. Resolved in favour of the later instruction (conflict C-4). The former path now holds a pointer to this file.

Format: DECISION · REASON · SOURCE · CONFIDENCE · DATE.
**Anti-drift rule (§58):** if later work contradicts an entry here, flag and argue it. Never change direction silently.

---

# PHASE 0 — Discovery & source grounding

## P0-001 — Locate source materials outside the project folder
**Decision:** Search the wider filesystem for the resume and roadmap after finding `H:\CLAUDE\Het_Portfolio` empty; ingest the three located documents.
**Reason:** Phase 0 cannot proceed without sources. The files existed, just not where expected.
**Source:** Filename search across `H:\` and user profile folders.
**Confidence:** HIGH — documents read directly.
**Date:** 2026-08-14

## P0-002 — Do not open personal or third-party documents
**Decision:** Exclude visa paperwork, affidavits, loan documents, university diaries, and a third party's resume from the source set, despite them matching the search.
**Reason:** Irrelevant to the project and personal in nature. Relevance, not availability, determines what gets read.
**Source:** Judgement.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P0-003 — Leave the VAPT and internship reports unopened
**Decision:** Do not read `HET_VAPT_Report_GTU.docx`, `Het's Final Internship Report.pdf` or related files without explicit authorisation.
**Reason:** They likely contain client-identifying material and findings. They may be the richest evidence of his real work, so this is a genuine trade — but reading confidential material unprompted is the wrong default in a project whose central constraint is confidentiality.
**Source:** Brief §4; judgement.
**Confidence:** HIGH on the decision; the trade-off is flagged for Het to overrule.
**Date:** 2026-08-14

## P0-004 — Flag C-1 rather than reconcile it
**Decision:** Record that CSCRF, IRDAI and "a leading financial firm" appear in the brief but nowhere in the resume. Do not merge the two accounts. Ban both terms from the site until resolved.
**Reason:** Brief §22 ranks Het's direct statements above the resume, so this is not treated as false — but §22 also requires conflicts to be flagged, not silently reconciled.
**Source:** Brief §4 vs resume.
**Confidence:** HIGH that the conflict exists; UNKNOWN which account is current.
**Date:** 2026-08-14

## P0-005 — Downgrade confidence in the Phase 1 positioning hypothesis
**Decision:** Mark the "dual register / regulated assurance" positioning as materially weakened pending C-1.
**Reason:** It was built on CSCRF/IRDAI experience being real and describable. The resume shows ISO 27001 mapping at intern level — real, but a weaker differentiator than regulated-sector audit work.
**Source:** `SOURCE_OF_TRUTH.md` §2, §6.
**Confidence:** HIGH that confidence must drop; the hypothesis is not disproven.
**Date:** 2026-08-14

## P0-006 — Treat all 219 project concepts as unbuilt
**Decision:** The 100 roadmap repositories and 119 strategy-catalog ideas are concepts. None may appear as built work.
**Reason:** The roadmap states "PLANNING ARTEFACT — CONCEPTS ONLY" and "a menu, not a quota."
**Source:** Roadmap cover and appendix.
**Confidence:** HIGH — explicit in the document.
**Date:** 2026-08-14

## P0-007 — Adopt the roadmap's own quality-over-count framing
**Decision:** Resolve the "100 repositories" vs "small number of exceptional projects" tension using the roadmap's own words: "Ten finished, maintained, cited projects outperform one hundred abandoned ones."
**Reason:** Both source documents independently prioritise depth over count. No external judgement needed.
**Source:** Roadmap appendix; strategy executive summary.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P0-008 — Do not render the ecosystem as a dependency mesh
**Decision:** Any future relational view must show 5 spine repositories + 95 independent ones. No dense 100-node graph.
**Reason:** The roadmap states the 95 are "deliberately independent… could be the only repository someone ever reads." A mesh would misrepresent the actual structure, and §26 bans "random network nodes."
**Source:** Roadmap appendix.
**Confidence:** HIGH on the structural fact. **No visualisation is being designed** (Phase 0 §5).
**Date:** 2026-08-14

## P0-009 — Record resume defects rather than silently correcting them
**Decision:** Document the label/content mismatches (Gobuster, ISO 27001), the duplicated clause, and the "Passionate about…" line in `SOURCE_OF_TRUTH.md` §7.
**Reason:** Website copy will derive from this text. The ISO 27001 bullet in particular undercuts one of his stronger compliance claims. Correcting silently would hide a problem that belongs to the resume too.
**Source:** Resume.
**Confidence:** HIGH — verbatim.
**Date:** 2026-08-14

## P0-010 — Rank audiences as hypotheses only
**Decision:** Publish `AUDIENCE_HYPOTHESES.md` explicitly unconfirmed, noting that C-2 could reorder it entirely.
**Reason:** A `northeastern.edu` address alongside a resume showing India-based study implies circumstances the resume does not reflect. Inferring from that would be exactly the assumption-to-fact conversion §21 forbids.
**Source:** Resume; environment metadata.
**Confidence:** LOW on ranking; HIGH that it must not be settled yet.
**Date:** 2026-08-14

## P0-011 — Name the imbalance between planning and output
**Decision:** State plainly in `INITIAL_BRAND_OBSERVATIONS.md` that the material contains strong strategic thinking and modest built output, and that the site cannot fix the latter.
**Reason:** Design cannot substitute for work. Recording this prevents a later drift toward a site that overstates.
**Source:** `SOURCE_OF_TRUTH.md` §3–5.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P0-013 — Adopt `docs\Resume.pdf` as canonical after discovering a version difference
**Decision:** Treat the resume Het placed in `docs\` mid-session as canonical over the `Het Patel- Resume MAIN.pdf` initially read. Correct `SOURCE_OF_TRUTH.md` accordingly and record the AWS/Azure claim as **withdrawn**.
**Reason:** The file sizes differed (135.4 KB vs 134.6 KB), so the newer file was checked rather than assumed identical. It differs in two substantive ways: the ISO 27001 bullet is corrected, and the AWS/Azure security claim is deleted. Had this gone unchecked, the site would have carried a skill claim Het had deliberately removed.
**Source:** Direct comparison of both PDFs.
**Confidence:** HIGH on the differences; Het to confirm canonical status.
**Date:** 2026-08-14
**Consequence:** One of the resume defects flagged earlier (P0-009) was already fixed; that entry is now partially superseded.

---

# PHASE 0 UPDATE — user answers received, 2026-08-14

## P0-014 — Reverse the positioning downgrade; CSCRF/IRDAI confirmed
**Decision:** Reinstate the regulated-assurance positioning at **HIGH** confidence. Supersedes P0-005 and restores D-008.
**Reason:** Het confirmed he personally worked on CSCRF and IRDAI audits for a leading financial firm. The hypothesis is no longer inferred from a brief — it is confirmed by the subject.
**Source:** Het's explicit answer.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Supersedes:** P0-005 (downgrade), which is now void. D-008 returns to HIGH; D-009 ("The Register") rises from MEDIUM to HIGH, since its metaphor is now grounded in confirmed professional practice rather than borrowed.
**History preserved:** P0-005 remains in the log as the record of what was believed before confirmation.

## P0-015 — Exclude location from the brand architecture
**Decision:** No physical location anywhere public — copy, header, footer, metadata, structured data, or IA. The site must survive an international move with zero structural change. Public email: `patel.het7996@gmail.com`.
**Reason:** Het's explicit instruction. His location is temporary (current city withheld → expected USA for a master's).
**Source:** Het's explicit answer.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Note:** this is an *architectural* constraint, not a content preference. It rules out geography-based framing at the IA level.

## P0-016 — Strategy documents are adopted, not authored
**Decision:** Present the roadmap and strategy documents as direction Het has deliberately adopted and is executing. Never present their frameworks, ideas or prose as his original intellectual work. Quotations must be visibly attributed.
**Reason:** Het's explicit instruction.
**Source:** Het's explicit answer.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Correction:** `INITIAL_BRAND_OBSERVATIONS.md` ranked "documented selection judgement" as the strongest differentiator, provisionally assuming the analysis might be his. **That is now corrected.** The differentiator is adopting and executing a rigorous strategy — real, but weaker and more honest than authorship. Site language must reflect the distinction.

## P0-017 — Audit the public GitHub before designing around it
**Decision:** Verify repository existence and state from the public profile rather than accepting the roadmap's implied ecosystem. Record findings in `github/PUBLIC_GITHUB_AUDIT.md`.
**Reason:** Het instructed that repository state be verified from the actual profile and not assumed complete merely because a repository exists.
**Source:** Public GitHub API and raw file inspection; read-only, no code executed, no security testing.
**Confidence:** HIGH — all findings are directly observable public facts.
**Date:** 2026-08-14
**Findings:** 3 public repos · 0 verified original · 2 unmodified forks · 1 with unresolved provenance · no activity since 2025-10-19 · none of the 5 resume projects public.

## P0-018 — Withhold GitHub from the site until the profile is remediated
**Decision:** The website must not prominently link to, or build a visualisation around, the GitHub profile until `PingMaster` provenance is resolved and the two forks are removed.
**Reason:** The profile currently routes a visitor from confirmed CSCRF/IRDAI audit experience to a forked Android stealth keylogger. For the GRC/audit audience — risk-averse by profession — that is the single most damaging item in Het's public footprint. Linking to it destroys credibility the site had just built.
**Source:** `github/PUBLIC_GITHUB_AUDIT.md`.
**Confidence:** HIGH on the reasoning; the remediation decision is Het's.
**Date:** 2026-08-14
**Correction:** earlier Phase 0 documents recorded "no verified built work." Accurate but **understated** — the profile does not merely lack evidence, it contains items that actively work against the confirmed positioning. Recorded as conflicts C-6, C-7, C-8.

## P0-019 — Do not present `PingMaster` as original work
**Decision:** `PingMaster` may not appear as Het's project unless he establishes provenance.
**Reason:** Public evidence — a `Cargo.toml` workspace declaring `gping` and `pinger`, a `gping.1` man page, a second `Readme.md` describing "gping master" under MIT with a `your-username` placeholder, and a single `Add files via upload` commit — indicates the repository contains the existing open-source `gping` project. **No conclusion is drawn about intent**; legitimate explanations exist. But on public evidence it cannot be presented as his own, and the omission would be trivially discoverable by any reviewer who opens `Cargo.toml`.
**Source:** Public repository inspection.
**Confidence:** HIGH that it cannot be presented as original; UNKNOWN as to why it exists.
**Date:** 2026-08-14

---

# PHASE 7 — Production audit, 2026-09-12

The deployed site audited against its own claims, then repaired. No redesign: the two front doors, the case archive, the evidence language and the drawn figures were treated as settled. Full record in `audit/PHASE7_AUDIT.md`, `security/SECURITY_REVIEW.md` and `performance/PERFORMANCE_REVIEW.md`.

## P7-001 — The share card was violating P0-015
**PREVIOUS:** `app/opengraph-image.tsx` rendered `SURAT, INDIA` into the 1200×630 Open Graph card.
**WHY IT FAILED:** P0-015 is an architectural constraint — no physical location anywhere public, in copy, header, footer, metadata or structured data. `data/profile.ts` and `app/layout.tsx` both restate it. Every surface honoured it **except the most republished one the site has**: the card every LinkedIn, Slack and iMessage unfurl displays. It survived because the constraint was checked against the page and never against the image route, which is generated by a file that contains its own private copy of the layout.
**EVIDENCE:** source inspection, then `grep -ri surat` across the repository and the build output.
**NEW:** removed, along with three further tracked occurrences in `docs/` and a prototype. The card now carries `VAPT · RISK & COMPLIANCE` in that slot, and the light theme's real tokens rather than four approximations of them.
**CONFIDENCE:** HIGH — this restores an existing decision that was being violated.
**Unretractable:** unfurls already scraped by third parties hold the old card until they expire. Closing a leak at source does not recall what has been sent.
**The wider lesson:** the same shape as P5GV-001. A constraint was verified against pages, and the leak was in a route that renders no page. **A compliant site can contain a non-compliant artifact.**

## P7-002 — The accessibility statement was making four claims the code contradicted
**PREVIOUS:** `app/accessibility/page.tsx` claimed overlays trap focus and return it, that `prefers-reduced-motion` is honoured throughout including the custom cursor, that every interactive control is a real `button` or `a`, and that the site follows the system colour scheme until a choice is made.
**WHY IT FAILED:** the first three were true of most of the site and had been written as though true of all of it. The mode selector declared `aria-modal` and did none of it; `Cursor.tsx` never read the motion preference, so a reduced-motion visitor lost the native pointer to `cursor: none` and was handed a lerping ring instead; the hero's four discipline controls were `<li tabIndex={0}>`. The fourth was never true at all — `themeInitScript` hardcodes dark, deliberately, and a comment two lines away says so.
**NEW:** the first three are fixed **in the code**. The fourth is a copy correction: dark-by-default is the decision, and the page now states it.
**CONFIDENCE:** HIGH.
**Note:** an accessibility statement is a claim like any other on this site. It is the one page where being wrong is self-refuting.

## P7-003 — Figure captions belong to the case, not to the shape
**PREVIOUS:** each of the seven `ProjectMotif` shapes carried its labels hardcoded inside it.
**WHY IT FAILED:** seven shapes carry fifteen cases, so shapes are reused — correctly, because they argue about structure and several cases share a structure. Labels are not structural; they name a discipline. So `SUNSET`, a post-quantum migration planner, was captioned DETECTION / CONTAINMENT / RECOVERY; `PINGMASTER` carried the same three words; `AFTERLIFE`, a case about a session outliving its reset, drew the cloud-identity figure while the ISSUE / SIGN / VERIFY / EXPIRE figure beside it described it exactly; `BLACKOUT` captioned itself ONE PATH REFUSED on a finding about a path that was **not** refused.
**NEW:** `MotifCaption` — each figure declares defaults for its own slots and the case overrides what would otherwise be untrue. Geometry stays shared. `AFTERLIFE` and `BLACKOUT` reassigned to the figures that fit them; the unused `compete` figure deleted.
**CONFIDENCE:** HIGH.

## P7-004 — "Verifiable" was doing more work than it had earned
**PREVIOUS:** the certification header read `10 VERIFIABLE`.
**WHY IT FAILED:** ten entries carry a link, but only three are the issuer confirming the credential. The other seven are hosted copies of a document — evidence you can read, not proof anyone stands behind. Counting them as one number made the archive's strongest and weakest evidence indistinguishable, on the section whose entire job is to distinguish them.
**NEW:** derived by link host and stated as `11 ARTIFACTS · 3 ISSUER-VERIFIED · 7 HOSTED COPY · 1 IN PROGRESS`.
**CONFIDENCE:** HIGH.

## P7-005 — The index described a section that had changed underneath it
**PREVIOUS:** CONTACT was described as "three channels and an honest state for the GitHub that is not linked", with a hardcoded `03 CHANNELS`.
**WHY IT FAILED:** two optional URLs were filled in and the section grew to five working channels including GitHub. The two places describing the section were not derived and were never updated.
**NEW:** `contactChannels` in `data/profile.ts`, read by both. Filling or clearing a URL now updates every count.
**CONFIDENCE:** HIGH.

## P7-006 — A destination chosen under a scroll lock is remembered
**PREVIOUS:** the site index navigated nowhere. Every hash link is intercepted and handed to Lenis; Lenis is stopped while an overlay holds the scroll lock and ignores `scrollTo`; `preventDefault` had already removed the browser's own jump. All nine destinations, every time.
**NEW:** `lockScroll` holds the destination and travels to it when the last lock lifts. Placed there rather than in the index, so any overlay containing a hash link inherits it.
**CONFIDENCE:** HIGH — reproduced before and verified after, on a production build, for all nine rows.
**Related:** two destinations were also unreachable by layout — CONTACT below the fold of a fixed unscrollable panel at 768px, and DESKTOP, one of the two front doors, below the fold on a landscape phone.

## P7-007 — A missing public origin now fails the build
**DECISION:** `resolveSiteUrl()` throws when no origin resolves and `VERCEL` is set.
**REASON:** the fallback to `localhost:3000` propagated into the sitemap, the robots host directive, the canonical link, the Open Graph URL, the JSON-LD and `security.txt`. The comment on the field already observed that a wrong origin "does not fail loudly". This makes it loud.
**Source:** judgement. Gated on `VERCEL` rather than `NODE_ENV`, because `next build` sets `NODE_ENV=production` locally too.
**Confidence:** HIGH.
**Consequence:** this is the one change in Phase 7 that can fail a deploy rather than degrade quietly. Deliberate.

## P7-008 — P0-019 re-checked, confirmed, and overridden by Het
**RE-CHECK:** P0-019 decided that `PingMaster` may not appear as Het's project unless he establishes provenance. The repository was inspected directly during this phase. The public evidence is unchanged and stronger than when first recorded: `Cargo.toml` is a workspace declaring the members `gping` and `pinger`, the readme is titled "gping master" and still carries `your-username` placeholder links, `gping/Cargo.toml` declares `license = "MIT"`, the readme points at a `LICENSE.md` that is not present in the repository, and the whole tree arrived in a single `Add files via upload` commit.
**DECISION:** Het elected to leave the case exactly as it stands, as case 09 under PERSONAL PROJECTS.
**Source:** Het's explicit answer, 2026-09-12, after being shown the evidence above.
**Confidence:** HIGH that the evidence is as described; the decision to publish it is Het's and is recorded here rather than left silent, per the anti-drift rule (§58).
**Outstanding regardless of that decision:** the upstream project is MIT licensed and the licence file is absent from the repository. Restoring `LICENSE` with the original copyright notice is a separate, small, and unambiguous fix.

## P7-009 — What this phase did not do
**Recorded so the omissions are decisions rather than gaps.**
- **No per-tool provenance in the toolkit.** Several entries appear in a discipline list and nowhere else; asserting a basis for them would be invention. The section cross-references SECURITY PRACTICE, which states basis per domain.
- **DOM node count left at ~2,260.** The remedy — lazy-rendering the dossier figures — trades the immediacy of the figures for a number, which is an identity decision.
- **The case lists left as client components.** Moving them server-side is the largest remaining payload win and a real refactor.
- **No linter, no test framework, no accessibility scanner.** None is configured in this repository and none was run. The accessibility findings are manual review and arithmetic, not a tool's output. `prefers-reduced-motion` was verified by reading the gates, not by watching them — the tooling could not emulate the media feature.

---

# PHASE 5G — Notes, About, site coherence, 2026-08-15

**⚠️ PHASE 5G IS INCOMPLETE.** Tooling failed part-way through and **no page was rendered.** The decisions below are design reasoning and source inspection only. See `5G/PHASE5G_FINDINGS.md`.

## P5GV-000 — 5G's visual validation was not performed
**Decision:** Record that a safety classifier began blocking shell execution and browser access mid-phase, and that visual validation stopped rather than being substituted with source inspection.
**Reason:** the 5G brief instructs — *"If browser tooling is unavailable: STOP visual validation. Document exactly what remains unvalidated."* The 5D discipline applies: the phase that could not look does not get to say what it saw.
**Consequence:** Notes and About are built and unvalidated. Five of nineteen deliverables — the test records — were **not written**, because a test document containing no test is worse than an absent one: it looks like evidence.
**Confidence:** HIGH that nothing visual was validated.
**Date:** 2026-08-15
**Recommendation:** re-run 5G validation in a session with working tooling **before** Phase 6.

## P5GV-001 — Notes leaves the launch navigation
**PREVIOUS:** every prototype built in 5D, 5E and 5F carried `Notes` in the primary navigation, pointing at `#`.
**WHY IT FAILED:** Het has **zero notes.** `NOTES_LAYOUT.md` (5B) has stated since it was written that at 0 notes there is *"no notes section anywhere"*, and `EMPTY_STATE_AND_GROWTH.md` §3 forbids surfaces that advertise a gap. The navigation was promising a category that would render empty or 404. It survived three phases because **each phase copied the navigation from the previous one without re-checking it against the launch content inventory.**
**5G EVIDENCE:** source inspection. No rendering required, and none claimed.
**NEW:** launch navigation is **`Het Patel · Investigations · About`**. Notes appears when the first note exists. `notes.html` is built and banner-marked as showing the later state.
**CONFIDENCE:** HIGH — this restores an existing decision that was being violated.
**The wider lesson:** the navigation was wrong for three phases and no test caught it, because every test rendered a *page* and none checked the *site against its own content inventory*. **A validated page can sit inside an invalid site.** Future phases should test the site's surface list against what content actually exists.

## P5GV-002 — The global footer becomes part of the identity
**PREVIOUS:** a single line — `Het Patel — patel.het7996@gmail.com` — and it **differed between pages**; some carried GitHub, some did not.
**WHY IT FAILED:** two reasons. Inconsistent markup across pages is the drift that makes a site feel like several templates, and it was invisible to every single-page test. And a one-line footer does nothing for a reader who has arrived on a deep page from search and scrolled to the bottom without ever seeing the homepage.
**5G EVIDENCE:** research — **no strong personal site in the Phase 1 corpus carries © / Privacy / Terms.** That convention is inherited from commercial sites that collect data. A personal portfolio has no terms to link and no privacy policy to publish if it collects nothing.
**NEW:** three lines, identical on all seven pages — identity and lane · navigation · contact. **No copyright, no privacy, no terms, no social icons, no newsletter, no "built with", no back-to-top, and no security claim.**
**CONFIDENCE:** MEDIUM-HIGH on the content. **LOW on the execution** — it was never rendered, and it adds mass to the 150-word investigation page where 5D found end-of-page dead space to be the most damaging spacing defect.

## P5GV-003 — Notes are superseded; investigations are revised
**Decision:** the two correction mechanisms stay distinct and are never merged.
| | Investigation | Note |
|---|---|---|
| Mechanism | **Revision** — the conclusion changed | **Supersession** — the observation was overtaken |
| The original | Rewritten; the register records what changed | **Left exactly as written** |
| Why | An argument gets better | A note records what was noticed *at that time* |
**Reason:** editing a note to be correct destroys the thing that makes it worth keeping — evidence of what Het thought in June. This also marks a deliberate departure from digital-garden practice, which permits notes to mutate continuously: **a note is finished, it is just small.** Continuous mutation belongs to investigations, which have a register for it.
**Confidence:** HIGH on the principle. **UNVALIDATED** on whether a supersession line reads as honesty or as clutter.

## P5GV-004 — Note bodies stay at full reading size
**Decision:** a note body is set at body size in the reading register — **not** at the reduced `1rem` used for the 5F index framing line.
**Reason:** in the index, the framing sentence is *about* a piece of work and subordinate to its title. **In a note, the body IS the work.** Setting it smaller would say a note is a lesser class of thinking. `NOTES_LAYOUT.md` makes the identical argument about width: *"narrowing notes would signal they are a lesser class."*
**Confidence:** MEDIUM. **The direct risk is that a full-size body makes the Notes page read as an article rather than as a set of observations — and that was not tested.**

## P5GV-005 — About gains a block 5B did not specify
**PREVIOUS:** `ABOUT_LAYOUT.md` sequences About as Identity → What I work on → Experience → Education → Certifications → Contact.
**WHY IT NEEDED CHANGING:** the site's two most distinctive mechanisms — required uncertainty and the revision register — are **explained nowhere.** A reader who has not yet opened an investigation cannot tell they are deliberate rather than accidental.
**NEW:** a block, *"How I write this up"*, between *What I work on* and *Experience*. Two paragraphs.
**CONFIDENCE:** MEDIUM. **The risk is that it becomes a manifesto** — `VOICE.md` warns that Het is not positioned to instruct. It is held to two paragraphs and describes what he does rather than what readers should do. **Unvalidated.**

---

# PHASE 5F — Work / Investigation index, 2026-08-15

## P5FV-001 — The date becomes a span, and moves last
**PREVIOUS:** `INVESTIGATION_INDEX.md` (5B) specified the row metadata as `closed · 2026-03 · application security · self-initiated` — a month-precision **date point**, second in the line.
**WHY IT FAILED:** the 5F research identifies the date point as the strongest archive signal after excerpts. PortSwigger Research — genuinely excellent security research — reads as a publication chiefly because of "Latest Research Articles" plus a single prominent date per item. 5E had independently found the same on the homepage (P5EV-005) and removed dates entirely.
**5F EVIDENCE:** Caruso St John present a body of work as `2019–2023` and `2016–present (under construction)`. **A span describes the work; a point describes a post.** The same digits carry opposite meanings depending on which they are.
**NEW:** a span — `2026`, `2025–2026`, `2026–` — placed **last** in the record line and muted. Professional investigations carry year precision only, because `CONFIDENTIAL_WORK_MODEL.md` forbids dates precise enough to correlate.
**CONFIDENCE:** HIGH on the principle. **MEDIUM on its value today** — MEASURED, every current entry reads `2026`, so the field is uniform and therefore silent at launch. Kept because it costs nothing, reads clearly at volume, and removing it would only mean re-adding it later. Recorded as finding I-4 rather than defended as useful now.
**Answers Het's brief directly:** the instruction was *"do not simply remove dates — understand the structural cause."* The cause was the point, not the presence.

## P5FV-002 — `domain` leaves the row; the index adopts the site's one width
**PREVIOUS:** 5B displayed `application security` per row, and specified "content region width (up to 46rem), not the reading measure."
**WHY IT FAILED:** Het removed `domain` from the investigation apparatus on 2026-08-15 as metadata for metadata's sake — the title and context establish it. The same holds per row, and more strongly: the framing sentence names the subject far more precisely than a category can. Separately, 5E deleted `--content` after MEASURING that it produced three different left edges on one page (P5DV-004), and explicitly left the index width open as the one case that might need more.
**5F EVIDENCE:** with `domain` gone the record line is three short fields and needs no extra width. The framing line is prose and reads better at the measure than beyond it. MEASURED: the record line stays on one line at every viewport from 320 to 1920.
**NEW:** `domain` **remains in the content model** and is not displayed; it is the axis grouping uses at volume. The index uses `--box`. **One left edge, one width, whole site.**
**CONFIDENCE:** HIGH. This closes the open question left by P5DV-004.

## P5FV-003 — Grouping comes forward and becomes the default
**PREVIOUS:** 5B put domain grouping "from ~15 items", offered as an alternative view at 25. 5E suggested ~8.
**WHY IT FAILED:** OBSERVED at 20 items, the ungrouped list is already a uniform field. Waiting until 25 leaves the index in its worst state through its most awkward stretch.
**5F EVIDENCE:** rendered 10, 20 and 30 ungrouped, and 30 grouped. Grouping transforms the 30-item page — headings give the eye rest points and, more importantly, convert a pile into an argument about areas of competence. An unplanned benefit: because Het's professional work concentrates in assurance, **grouping by domain also separates professional from self-initiated work** without a second axis.
**NEW:** grouping becomes the **default at ~10–12 items**, not an alternative view. Filters are pushed past 30 — grouping does the same job earlier, structurally, and without controls or JavaScript.
**CONFIDENCE:** MEDIUM-HIGH. The fixture's domain distribution is invented and real work will distribute differently; the 30-item fixture puts 11 items in one group, which is already large. The threshold is a hypothesis to re-test with real content.

## P5FV-004 — Row hierarchy: the title must dominate
**PREVIOUS (5F, first build):** title 1.1rem serif; framing inherited body size (19px).
**WHY IT FAILED:** OBSERVED at 30 items — title and framing were near-equal in weight, so each row had two competing elements and the titles, the only scannable anchor, were lost inside the prose. The page read as a uniform grey field with nowhere for the eye to rest. This is the exposure named in `WORK_INDEX_COMPARISON.md` before it was built: *"uniformity is B's strength and its exposure."*
**5F EVIDENCE:** rendered 30-item fixture, texture view at 1280.
**NEW:** title **1.25rem** / framing **1rem** / record 0.84375rem — a 20 / 16 / 13.5 descent. MEASURED after: row height fell from 135–161px to 121–136px and the 30-item page from 6.1 to 5.7 screens.
**CONFIDENCE:** HIGH.
**Generalises:** in a repeated row, any two elements of similar weight will fight, and at volume the fight is what the reader sees. **Hierarchy inside the unit matters more than spacing between units.** This now sits alongside V-6 (headings must be subordinate to movements) as a standing constraint on every future repeated component.

## P5FV-005 — Homepage work rows realigned to the index row
**PREVIOUS:** the 5E homepage `worklist` ordered each item title → `status · origin` → one-line description. The 5F index orders title → framing → record.
**WHY IT FAILED:** two surfaces presenting the same investigations in different orders. A reader moving from homepage to index meets the same items reorganised for no reason.
**NEW:** both are title → framing → record. The homepage keeps `status · origin` without a span; the index adds the span.
**CONFIDENCE:** HIGH. Minor change, and the framing sentence is the stronger thing to place directly under a title in both cases.
**Note:** the framing *wording* stays deliberately different between the two — the homepage framing is outcome-shaped (it sells the finding), the index framing is question-shaped (it lets a reader choose between items). Identical wording would make the index feel like a repeat of the homepage.

## P5FV-006 — What the index says about content, not design
**Decision:** record two findings that no design change can address, because both are content.
1. **I-2 — origin is silent.** MEASURED: all three current entries read `self-initiated`. Origin is the index's most valuable field and it conveys nothing until at least one entry is `professional`. The 2026-08-15 clearance makes that possible; it does not create one. **The first professional investigation is worth more to this page than any further design work.**
2. **The genericity test's discriminator is the title.** Compared under identical CSS, Het's titles name *a problem that occurred* — "Why an allow-list kept failing open" — and the generic version's name *a thing that was made* — "Network Vulnerability Scanning Lab". **This is visible without reading a single framing line**, which makes it the fastest-acting differentiator found in any of the three genericity tests: 5D needed a full read, 5E needed the first screen, 5F needs only the title column.
**Two writing rules follow, and they are more useful than any design instruction:**
> **Title the problem, not the deliverable.**
> **Frame what happened, not what you learned from it.** A framing sentence ending "to gain experience in…" is interchangeable with every other one, and interchangeable is the definition of generic.
**Confidence:** HIGH.

## P5FV-007 — The compliance-register risk
**Decision:** record a reading the earlier phases did not anticipate.
**Reason:** at the 30-item grouped fixture, a *Regulated assurance* group of eleven uniformly-formatted rows reading `professional · closed · 2026` edges toward reading as a **compliance register** rather than a body of work. What holds it back is the titles: *"Whether a control can be evidenced by its own absence"* is a question; a register lists controls. The framing lines reinforce it — they say "I could not" and "I wanted to know", which no register does.
**The risk is content-borne.** If Het's real professional titles become nominal — "ISO 27001 control mapping", "CSCRF gap assessment" — the register reading takes over.
**Consequence:** a writing constraint, not a design change. Professional investigation titles must stay interrogative.
**Confidence:** MEDIUM — observed on invented fixture content, and the real distribution is unknown.

---

# PHASE 5E — Homepage prototype, 2026-08-15

## P5EV-001 — Het's four decisions on the 5D recommendations
**Decision:** All four 5D recommendations resolved by Het, 2026-08-15.
1. **"Published." removed from the revision register.** Publication date moves to the head apparatus. The register now means *something changed in my thinking*, never *something happened to the webpage*.
2. **Light only for v1.** Dark mode withdrawn — values preserved in `color/DARK_MODE.md` for later reinstatement.
3. **`Domain` removed** from the apparatus; `Status` and `Origin` kept; `Started` kept **because it now pairs with `Published` to show a lifecycle** rather than standing alone as a date stamp.
4. **Self-hosted fonts deferred to production**, not the prototype. Production requirements fixed: subset · self-host · preload only what matters · preserve the Times-metric-compatible fallback · re-verify CLS.
**Reason:** Het's call on each, taken against 5D measurements. On (1) his framing is sharper than 5D's and is adopted verbatim as the register's definition. On (2) he explicitly rejected "professional websites have dark mode" as a reason to keep it.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Consequence:** apparatus is now **Status · Origin · Started · Published**. Field count is unchanged at four, but every field earns its place and `Domain` — which duplicated what the title and prose already establish — is gone. On the homepage and index the apparatus reduces further to Status + Origin.

## P5EV-002 — NEW PROJECT CONSTRAINT: portfolio before publication
**Decision:** Adopted as a standing constraint, Het's wording:
> **THE PORTFOLIO MUST READ AS A PORTFOLIO BEFORE IT READS AS A PUBLICATION.**

The Investigation page may feel editorial. **The homepage may not.** The homepage must answer, within seconds: who is Het · what security work has he done · what does he actually know how to do · why should a hiring manager care · where can the evidence be inspected. The Investigation system is then *the reason the portfolio is different*, not the reason the site exists.
**Reason:** Phase 5D MEASURED the five-second impression of the investigation page as **editorial publication**, resolving to *personal working record* only after full reading. Acceptable for an investigation. Fatal as the site's primary identity.
**Source:** `prototypes/PHASE5D_VALIDATION.md` §17; Het's instruction 2026-08-15.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Enforcement:** added to `PROJECT_CONSTRAINTS.md` as **T9**, and tested in `homepage/HOMEPAGE_PORTFOLIO_TEST.md` on every future surface.

## P5EV-003 — Phase 4 H1 "The Open Investigation" is REVISED, not adopted as specified
**PREVIOUS DECISION:** Phase 4 selected **H1 — The Open Investigation** (score 67/70), and Phase 5B allocated it **~45% of the homepage** as "the visual centre of gravity", with the identity statement at ~15%.
**WHY IT FAILED:** H1 was chosen on 2026-08-14 with no rendered evidence of how an investigation excerpt *reads*. 5D then measured it: an investigation renders as **editorial publication** at five seconds. A homepage that gives 45% of its area to a full investigation excerpt — title, apparatus, question, opening reasoning — inherits that impression and becomes a publication with a bio line above it. This is now a direct violation of T9.
**5E EVIDENCE:**
- MEASURED (5D §17): investigation page first impression = editorial publication.
- RESEARCH: the two strongest research-led personal sites in the corpus both open with **person + role + affiliation in the first sentence** and only then show work — James Kettle *("Director of Research at PortSwigger, the makers of Burp Suite")*, Daniel Miessler *("My name is Daniel Miessler and I'm a Cybersecurity / AI engineer…")*. Neither opens with content, and both are content-heavy sites that still read as portfolios.
- RESEARCH: recruiter guidance is consistent that the *lane* must be nameable in five seconds or the reader leaves.
**NEW DECISION:** H1's core insight is kept — **a visitor who reads only the homepage must still have seen real reasoning and an admitted limit.** What changes is its position and its size. The featured investigation moves **below** professional identity and experience, and is reduced from a 45% excerpt to a compact evidence block that still carries one real line of reasoning and one real admitted limit. See `homepage/HOMEPAGE_SELECTED_DIRECTION.md`.
**CONFIDENCE:** HIGH that H1-as-specified violates T9. MEDIUM-HIGH on the replacement, pending the rendered tests.

## P5EV-004 — Professional experience is promoted to its own homepage position
**PREVIOUS DECISION:** Phase 3 `HOMEPAGE_INFORMATION_ARCHITECTURE.md` gave experience no position of its own — it appears only as "two or three sentences" inside Position 2, and Phase 5B's spatial allocation has no experience block at all.
**WHY IT FAILED:** it contradicts the project's own assessment of the evidence. `PROJECT_CONSTRAINTS.md` HARD LIMITS states plainly: *"confirmed regulated-assurance professional experience is the strongest verified asset… The professional work, not the roadmap, is the credible core."* An architecture that gives the strongest verified asset a subordinate clause, while giving 45% to a single investigation, inverts the evidence. Het's 5E brief names "does it underemphasize professional experience?" as an explicit failure test.
**5E EVIDENCE:** the site currently has **zero verified built work** and **one ~7-month internship with confirmed CSCRF/IRDAI involvement**. At launch volume the experience *is* the portfolio; the investigations are how it is evidenced.
**NEW DECISION:** experience becomes its own homepage position, placed second — after identity, before selected work. Presented at **method level**, not as a resume block: role precision, the kind of work, the technical/assurance intersection. No company/title/date/bullet reproduction. `CONFIDENTIAL_WORK_MODEL.md` §3 governs every word.
**CONFIDENCE:** HIGH.
**Anti-drift note:** this changes a Phase 3 decision. Phase 3's reasoning — that leading with *credentials* wastes the strongest position on the weakest evidence — is still correct and is preserved. Experience here is not a credential; it is the work. Certifications remain excluded from the homepage entirely.

## P5EV-005 — Chronology is a publication signal; selected work is grouped, not dated-first
**Decision:** On the homepage, work is presented as **selected work grouped by the kind of problem**, not as a reverse-chronological list.
**Reason:** RESEARCH — the discriminator between the two readings is consistent across the corpus. A reverse-chronological list of titles with dates is the form of a blog index; the same items grouped by theme read as areas of competence. James Kettle groups seven years of research under *HTTP Request Smuggling · Web Cache Poisoning · Tools & automation* rather than by year, and Phase 1 already identified this as "the single most important navigational idea found" — it converts a list of outputs into a demonstrated domain, *which is a structural argument available without seniority.*
**Source:** `research/REFERENCE_SITES.md` (Kettle); 5E research round.
**Confidence:** MEDIUM-HIGH. **Caveat:** grouping requires enough items to group. At three investigations there are no meaningful groups, so at launch volume the homepage shows a small selected-work list with **status and origin** as the metadata rather than date-first. Grouping activates at ~8+.
**Date:** 2026-08-15

## P5EV-006 — Navigation unchanged; "Work" rejected as a fifth item
**Decision:** Primary navigation stays **Investigations · Notes · About**, with the name as the home link. No `Projects`, `Skills`, `Experience`, `Certifications` or `Services` item is added.
**Reason:** Het's brief warns against adding these merely because traditional portfolios do. Testing the alternative: an `Experience` nav item would promise a page that is one internship long, and `EMPTY_STATE_AND_GROWTH.md` §3 forbids surfaces that advertise a gap. Experience belongs on the homepage and About, not behind its own tab. The homepage carries the portfolio framing; the navigation does not need to.
**Confidence:** HIGH.
**Date:** 2026-08-15

---


## P5EV-007 — Homepage defects found by rendering
**Decision:** Five defects found and fixed during 5E validation; two findings recorded and not fixed.

| # | Defect | Severity | Evidence | Fix |
|---|---|---|---|---|
| **E-1** | "Het Patel" printed twice in the first 100px — once in the header, once as the `h1` | LOW | OBSERVED at 375 | Header carries navigation only on the homepage |
| **E-2** | Region labels at the apparatus treatment (13.5px muted) read as captions; the page read as continuous prose with no findable structure | MEDIUM | OBSERVED at 1280 | Homepage labels raised to .9375rem / weight 500 / secondary |
| **E-3** | **5-9 of 12 links under the 24px WCAG 2.2 minimum, including the primary navigation at 18px** | MEDIUM-HIGH | MEASURED at 8 viewports | `.35em` padding on every standalone link, site-wide. 5D's V-8 had only covered artifact and related lists |
| **E-4** | **At 375 the first screen contained no evidence of work at all** — identity ran to 534px and "The work" sat at 646, below a ~660px fold | **HIGH** | MEASURED | Second lede paragraph removed; `h1` margin tightened. "The work" now at 509, first paragraph at 545 |
| **E-7** | The removed lede paragraph read *"Most of what I publish here…"* — framing the site as a publishing venue in its second sentence | MEDIUM | OBSERVED | Removed with E-4. A T9 violation hiding in the copy rather than the layout |
| **E-5** | Contact sits at 3517px with no navigation item; a recruiter scanning for 20 seconds never reaches it | MEDIUM | MEASURED | **Not fixed — recommend adding `Contact` to navigation.** Het's call |
| **E-6** | Career trajectory is implied, never stated; "Working on now" is one certification | MEDIUM | OBSERVED | **Not fixed — needs content Het must supply, or the position is removed** |

**Reason:** E-4 is the one that justifies the phase. The first screen is the whole point of constraint T9, and the page failed it at mobile in exactly the way the constraint exists to prevent — a reader meeting a name and prose with no evidence that any professional work exists. It was invisible in the source and invisible at desktop.
**Source:** `homepage/HOMEPAGE_MOBILE.md`, `homepage/HOMEPAGE_HIRING_TEST.md`.
**Confidence:** HIGH on the measurements.
**Date:** 2026-08-15

## P5EV-008 — The homepage passes the portfolio test; the design still carries no differentiation
**Decision:** Record both results together, because either alone is misleading.
**Reason:**
1. **Portfolio test: PASS.** MEASURED against the six-signal instrument — 5 portfolio signals, 1 mixed, 0 publication. Dominant interpretation **A — Portfolio**. The closest competing reading is **E — personal website**, not publication; what holds it at A is the named employer, the named frameworks, and the "The work" label appearing above the fold. Remove any one and it drifts.
2. **Genericity test: the design carries none of the differentiation**, exactly as at 5D. The generic "Alex Sharma" homepage is equally handsome under identical CSS.
**What 5E adds:** the architecture does not *create* differentiation, it **relocates** it. On the investigation page the difference between Het and Alex only appears after reading; on the homepage it appears **within the first screen**, because identity-first puts the distinguishing content in the highest-attention position. MEASURED: Het's first screen carries 1 named organisation, 3 named frameworks and 1 date; **Alex's contains no proper nouns at all.**
**Consequence:** the homepage writing standard is now specific — **name things.** A first screen with no proper nouns is indistinguishable from every other early-career security portfolio, whatever it is set in.
**Confidence:** HIGH on the signal counts and the proper-noun count. MEDIUM-HIGH on the five-second impressions, which are my reading of a rendered page rather than a user test.
**Date:** 2026-08-15

## P5EV-009 — CSCRF/IRDAI attribution and publication clearance RESOLVED
**Date:** 2026-08-15 · **Source:** Het, explicit.

**PREVIOUS:** attribution and publication clearance **unresolved.** `SOURCE_OF_TRUTH.md` §8 listed both as open; `CONFIDENTIAL_WORK_MODEL.md` could not say whether the employer could be named in connection with the audit work. The 5E homepage therefore stated the internship and the audit involvement **without asserting a relationship between them**, and carried a visible `[CONTENT PLACEHOLDER — REQUIRES HET]`. These were the two blocking items on the strongest block of the homepage.

**NEW:** the CSCRF and IRDAI work **may be explicitly associated with Info eShield Cyber Solutions.** The site may state that Het participated in / assisted with / contributed to / worked on those engagements **through his role there.** Client-specific confidential information remains excluded in full.

**Now publishable**
- That Het participated in CSCRF and IRDAI audit engagements **through his role at Info eShield Cyber Solutions**
- The regulatory frameworks by name — CSCRF, IRDAI, ISO 27001
- The type of engagement, the type of work performed, and Het's personal contribution
- General methodology and the general skills demonstrated
- The sector, at the level of "in the financial sector"

**Still excluded**
Client names · findings · evidence · screenshots · control results · vulnerabilities · identifiers · internal documents · confidential methodology · engagement-specific details · dates precise enough to correlate.

**Still forbidden as attribution**
*lead* · *owner* · *independent auditor* · *architected* · *directed*. Permitted: *participated in* · *assisted with* · *contributed to* · *worked on*.

**Confidence:** HIGH — Het's direct, explicit statement, which outranks the resume under brief §22.

### Two consequences that are not merely clerical

**1. A boundary-announcing sentence was removed, not reworded.**
The 5E prototype contained *"I describe frameworks and method here, and nothing about the client, their systems, or what was found."* `CONFIDENTIAL_WORK_MODEL.md` §1 bans **"any sentence drawing attention to the boundary"** — a rule derived from five independent sources, and the specific finding that disconfirmed the early "advertise the withholding" idea. That sentence had survived into the prototype by oversight. Het's own instruction — *"do not add a conspicuous NDA badge or redacted-document aesthetic; confidentiality should be handled naturally"* — points the same way.

**It is deleted rather than softened.** The clearance permits *more to be said*; it does not license *mentioning what is withheld*. Discretion is demonstrated by being unremarked.

What was kept from that inset is the part that was never about confidentiality: the calibration that ISO 27001 is a working understanding rather than a specialism, and that Splunk is lab experience rather than production. That is anti-overclaim precision, which is the brand, and it stays.

**2. Sector wording — a nuance flagged rather than silently settled.**
`SOURCE_OF_TRUTH.md` §2 records Het's 2026-08-14 words as "a leading financial firm" (**singular**). His 2026-08-15 clearance says "financial-sector organizations" (**plural**). Both are his own statements and they are compatible if there was more than one engagement.

**Resolution: the site says "in the financial sector"** — accurate under either reading, and less identifying than either. The count is not asserted anywhere and nothing depends on it. Recorded rather than quietly chosen, because "a leading financial firm" is a narrower descriptor than "the financial sector" and narrower descriptors are what make individually harmless details jointly identifying (`CONFIDENTIAL_WORK_MODEL.md` §5, check 1).

### What did NOT change

- **The investigation unit is unchanged.** The engagement is context; the investigation is the specific question Het personally worked through inside it. The Info eShield engagement is **not** converted into a public investigation, and no professional investigation is created by this clearance.
- **§5's review gate stands.** Every professional investigation still requires Het's review before publication, against all six pre-publication checks.
- **The homepage stays concise.** The fuller treatment belongs on Experience/About, which 5E did not build and 5F does not authorise.
- **`PROJECT_CONSTRAINTS.md` T3 is unchanged** — zero confidential disclosure remains an invariant.

---

# PHASE 5D VALIDATION — the prototype rendered, 2026-08-15

**Anti-drift note (§58):** every entry below that contradicts an earlier decision names it and argues it. P5DV-001 discharges P5D-001's provisional status. P5DV-004 and P5DV-005 modify Phase 5B decisions and are flagged as such.

## P5DV-000 — Phase 5D's central deliverable is now FULFILLED
**Decision:** The prototype was rendered in a real browser with Newsreader and Public Sans actually loaded. Nine defects found, three serious. P5D-000 is closed.
**Reason:** Browser tooling worked. Screenshots were intermittent and `resize_window` was unreliable, so every viewport was created inside the document via `<iframe srcdoc>` at exact pixel widths, which makes media queries evaluate against a genuine viewport. Character counts, geometry, contrast and byte counts were read from the rendered DOM.
**Source:** `prototypes/PHASE5D_VALIDATION.md`.
**Confidence:** HIGH on all measurements. MEDIUM on aesthetic judgments — the preview pane renders at ~276 CSS px, so taste calls were made from reduced-scale crops.
**Date:** 2026-08-15
**Consequence:** 5E is unblocked once the four content-model decisions below are settled. Explicit authorisation still required.

## P5DV-001 — Measure re-specified as 27em of the reading font
**Decision:** `--measure: 37rem` → **`27em`**. Supersedes P5D-001, whose LOW-confidence provisional value is now settled by measurement.
**Reason:** MEASURED median **74** characters per line at desktop and **80** at tablet, against a 62–66 target — the tablet breakpoint made the measure *longer* because it changed the body size but not the column. The unit was the deeper error: a `rem` measure is pinned to the root font size while the thing it must track is the reading font, so it is correct at exactly one body size. MEASURED after: **64 median / 67 p90 at every viewport from 768 to 1920 across two body sizes, with no per-breakpoint override.**
**Source:** `prototypes/PHASE5D_VALIDATION.md` §2; `PHASE5D_FAILURE_REVIEW.md` V-1.
**Confidence:** HIGH — character-counted by walking every glyph with `Range` at 13 viewports.
**Date:** 2026-08-15
**Spec change:** P5D-001 required width specs to say *what* they measure. They must also say **relative to what**.

## P5DV-002 — All type sizing in `rem`; breakpoints in `em`
**Decision:** Every absolute `px` type size converted to `rem`; both breakpoints converted to `em`.
**Reason:** MEASURED at a 200% browser font setting, body text stayed **19px** while the column doubled to **1,026px** — roughly 128 characters per line. Spacing was already in `rem`, so the layout grew and the text did not. Browser zoom satisfies WCAG 1.4.4, so this passed on paper while failing what the criterion protects; 5B explicitly promises the rhythm scales "with user font-size preferences". MEASURED after: 62 characters at 200%, everything scaling together, default rendering unchanged.
**Source:** `prototypes/PHASE5D_ACCESSIBILITY.md` A-1.
**Confidence:** HIGH.
**Date:** 2026-08-15

## P5DV-003 — `h2` subordinated to the movement gap
**Decision:** `h2 { margin-top: var(--open) }` → `calc(var(--base) * 1.5)`. Hierarchy is movement 2.2× > heading 1.5× > paragraph 0.85×.
**Reason:** OBSERVED on a 1,755-word fixture — `h2` shared the movement gap and added type contrast on top, so headings became the strongest structural signal and the four movements stopped being the spine. A subordinate element was out-competing the load-bearing one. Invisible at 545 words and invisible in the source.
**Source:** `prototypes/PHASE5D_FAILURE_REVIEW.md` V-6.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Standing constraint:** the movement mechanism is a spacing ratio and nothing else. **Every future component must be checked against the movement gap before it ships.**

## P5DV-004 — One shared left edge; navigation aligns to the text column
**Decision:** `--content` (5B's 46rem content region) replaced by a single `--box` derived from the measure, used by header, article and footer alike.
**Reason:** MEASURED three different left edges at 1280 — site name 347px, prose 384px, footer 417px. **This contradicts Phase 5B, which specifies navigation "aligned to content width" while also making "one left edge" its first alignment principle.** Once the measure narrowed to 27em the two instructions openly conflicted. Principle #1 won, because a single vertical spine is what the working-document north star asks for and the 46rem justification ("title + metadata on one line") applies to the index, which does not exist yet.
**Source:** `prototypes/PHASE5D_FAILURE_REVIEW.md` V-3.
**Confidence:** HIGH that three left edges was wrong. MEDIUM on the resolution.
**Date:** 2026-08-15
**Open for 5E:** the index may genuinely need a wider region. The relationship between nav width and index width must then be settled deliberately, not inherited.
**Technical note:** never express a structural width in `em` inside a custom property — `em` resolves at the element that consumes the var, so a 13.5px footer read `33em` as 446px while a 19px header read it as 627px.

## P5DV-005 — Spacing bands: correct the spec to the implementation
**Decision:** Recommend rewriting 5B's bands to the values that have been rendering all along — NORMAL **0.85×**, OPEN **2.2×**, MAJOR **4.0×** — rather than raising the prototype to 5B's NORMAL 1.0× / OPEN 2.5× / MAJOR 4.5×.
**Reason:** The prototype has been at the floor of every band, and outside the band for NORMAL, since it was built — a silent deviation, now recorded as a deliberate one. Rendered, it works: MEASURED movement:paragraph = **2.59:1** against 5B's 2.2:1 binding constraint, and OBSERVED neither dense, loose, fragmented nor monotonous. Reaching 2.5×/1.0× would give the same ratio at a larger absolute scale, making an already tall page (3,098px canonical, 7,708px long) taller for no legibility gain.
**Source:** `prototypes/PHASE5D_VALIDATION.md` §8.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-15
**Consequence:** **This modifies Phase 5B and requires sign-off.** Until then the spec and the prototype disagree.

## P5DV-006 — Revision entries have a measurable floor
**Decision:** A revision entry must run to at least two full lines at the reading measure — roughly **25 words** — and must name what was previously claimed, what changed, and why. "Updated", "minor edits", "clarifications" are prohibited.
**Reason:** OBSERVED — the canonical page with **identical CSS** and three weak entries does not degrade, it **collapses into a changelog**. MEASURED mechanism: strong entries wrap to 3–5 lines, weak entries fit on one. A one-line entry sits in the grid as a **row**, and rows beside dates are a changelog; a three-line entry becomes prose beside a date, and prose beside a date is a record. **Entry length is itself the signal.**
**Source:** `prototypes/PHASE5D_REVISION_TEST.md` RV-2.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Consequence:** sharpens the standing exit condition from "revisions must be written well" into a threshold that can be checked.

## P5DV-007 — "Published." leaves the revision register
**Decision:** Recommend moving the publication date to the head apparatus. The foot register then contains **only** changed reasoning and renders nothing until the first real revision exists. **Recommended, not applied** — this is a content-model decision.
**Reason:** OBSERVED at n=1, the page renders a 125px gap, a "Revisions" label and the single word "Published." — pure ceremony, the worst-looking state in the system. "Published." is a creation event in a register meant for changed reasoning, and at n=3 and n=6 it is the one entry that does not belong.
**Source:** `prototypes/PHASE5D_REVISION_TEST.md` RV-1.
**Confidence:** HIGH on the defect. HIGH on the fix.
**Date:** 2026-08-15
**Consequence:** also gives the head apparatus a second field that earns its place — which matters, because the apparatus is otherwise confirmed to be an ordinary byline.

## P5DV-008 — The head apparatus is confirmed to be a byline
**Decision:** Record that the head apparatus reads as ordinary article metadata. **No decoration was added to disguise it**, per the brief.
**Reason:** OBSERVED at 1280, 834 and 375. 5B's own F2 predicted exactly this and was right. Rendering added one refinement: the four fields are not equally ordinary. `Status` is load-bearing — on a short page it is what makes brevity legible as *intent* rather than abandonment. `Origin` separates lab work from the confidential professional work. `Started` and `Domain` do nothing the title and prose do not already do.
**Source:** `prototypes/PHASE5D_VALIDATION.md` §5.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Consequence:** the concept needs content-level differentiation, as the brief anticipated. 5B assumption A3 remains untested and is now the project's largest open risk.

## P5DV-009 — The design system carries none of the differentiation
**Decision:** Record that the genericity test is unambiguous: under identical CSS, the generic "Alex Sharma" page and the Het page are **visually indistinguishable**.
**Reason:** OBSERVED. Same ground, same face, same apparatus, same movement rhythm; MEASURED identical left edges, column, spacing and type sizes. The four-movement structure works just as well for "I built a lab and ran three scanners". **The structure is a container, not a differentiator.** What differs is entirely content: decisions with reasons, uncertainty with consequences, self-correction in the prose, and the revision register.
**Source:** `prototypes/PHASE5D_GENERICITY_TEST.md`.
**Confidence:** HIGH.
**Date:** 2026-08-15
**Consequence:** **the exit condition for this project is a writing standard, not a design standard.** No visual gimmick may be introduced to compensate.

## P5DV-010 — Recommend LIGHT ONLY
**Decision:** Recommend dropping dark mode. **Not applied — Het's call, and it should be made explicitly rather than by default.**
**Reason:** MEASURED, dark passes every contrast check; OBSERVED, readability and hierarchy hold and Newsreader flattens only slightly. But the **warm identity disappears entirely**, because a dark ground cannot read as paper — and the warm ground is the site's single strongest visual identity signal. For a site whose distinctiveness is explicitly not visual, a second complete colour system that delivers none of the brand is a poor trade, and it is the one part of the system with a real maintenance cost — it already shipped two marginal-contrast defects that P5D-002 had to catch.
**Counter-argument, recorded:** readers with a system dark preference will get a bright page and some will dislike it. Dark mode fails no test; it simply does not earn its keep.
**Source:** `prototypes/PHASE5D_VALIDATION.md` §15.
**Confidence:** MEDIUM — this is design judgment, not a measured failure.
**Date:** 2026-08-15

## P5DV-011 — Serif fallback reordered; fonts are 90% of the page
**Decision:** `--serif: "Newsreader", Georgia, "Times New Roman", serif` → `"Newsreader", "Times New Roman", Times, serif`. Separately, recommend self-hosting and subsetting the fonts in 5E.
**Reason:** MEASURED font-swap reflow at 1280 — Georgia shifts the page **135px** and wraps the h1 onto a second line; Times is a **0px** metric match, because Newsreader's proportions are close to Times and not to Georgia. MEASURED page weight: **~241 KB, of which ~217 KB (90%) is webfonts**; the document and stylesheet together are 18 KB. Zero JavaScript, zero images, four external requests.
**Source:** `prototypes/PHASE5D_PERFORMANCE.md`.
**Confidence:** HIGH on the measurements.
**Date:** 2026-08-15
**Consequence:** self-hosting with subsetting and `size-adjust` would cut ~217 KB to an INFERRED 40–60 KB, remove two third-party origins, and take the residual swap shift to zero. Build decision, deferred to 5E.

## P5DV-012 — Two components have never been rendered
**Decision:** Record that the **monospace register** and **inline links inside prose** remain unvalidated, and must not be signed off until a fixture exercises them.
**Reason:** MEASURED zero `<code>`, zero `<pre>` and zero in-paragraph links across all nine fixtures. The CSS rules exist and were never exercised. The brief's two questions about mono — whether it appears only where technical precision benefits, and whether it accidentally creates a terminal aesthetic — therefore have no answer.
**Source:** `prototypes/PHASE5D_VALIDATION.md` §3, §24.
**Confidence:** HIGH that they are untested.
**Date:** 2026-08-15

---

# PHASE 5D — Investigation page prototype, 2026-08-14

## P5D-000 — Phase 5D's central deliverable is UNFULFILLED
**Decision:** Record that the prototype was built but **never rendered**. Browser tooling was blocked throughout by the safety classifier. No visual claim is made anywhere in 5D documentation.
**Reason:** 5D exists to answer visual questions. All ten remain open. Stating otherwise would be a false validation claim.
**Confidence:** HIGH that nothing visual was validated.
**Date:** 2026-08-14
**Recommendation:** re-run 5D with working browser tooling **before** authorising 5E.

## P5D-001 — Measure specification clarified; value revised to 37rem
**Decision:** `--measure` now names the **text column** (37rem), with padding outside it. All future width specs must state whether they mean the text column or the padded box.
**Reason:** With `box-sizing: border-box`, 5C's "max-width 38rem" plus 1.25rem padding either side yields a **35.5rem text column** — a 40px gap between spec intent and spec text. Character estimates: 568px → 57–65 chars; 608px → 61–70. Neither is clearly correct; 37rem is the midpoint and sits inside 5C's own 36–41rem band.
**Source:** `prototypes/PHASE5D_FAILURE_REVIEW.md` F1.
**Confidence:** LOW on the value — **provisional pending a real character count.** HIGH that the ambiguity needed fixing.
**Date:** 2026-08-14

## P5D-002 — Dark muted and secondary raised; 5C contrast figures corrected
**Decision:** Dark muted `#8B8478` → **`#9C9488`** (4.79 → 5.92). Dark secondary `#A9A296` → **`#B0A99C`** (7.01 → 7.61).
**Reason:** Computed from actual hex pairs. 4.79:1 at 13px is only **0.29 above the AA floor** — inadequate headroom, and it would have shipped. 7.01 sat exactly on the AAA boundary. **Every dark-mode figure in the 5C spec was overstated** by 0.11–0.31.
**Source:** `prototypes/PHASE5D_ACCESSIBILITY.md`, `PHASE5D_FAILURE_REVIEW.md` F2/F3.
**Confidence:** HIGH — arithmetic, not judgment.
**Date:** 2026-08-14
**Process lesson:** 5C recorded hand-calculated ratios as fact. They should have been labelled estimates until verified.

## P5D-003 — The revision register cannot be evaluated apart from its writing
**Decision:** Extend the standing exit condition. It is not sufficient that revisions *accumulate* — **they must be written as changes of understanding.** A register of "updated content" entries fails the concept as completely as an empty one.
**Reason:** Reading the prototype's three entries, everything distinctive is in the language. The typography is deliberately unremarkable — small, grey, sans, colourless — which is the specified design and also the concept's exposure.
**Source:** `prototypes/PHASE5D_REVISION_TEST.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5D-004 — Genericity behaviour confirmed by content analysis
**Decision:** Retain the "diagnostic, not unique" claim. Applied to generic student content, **two of four apparatus fields go invariant** (`status` always `closed`, `origin` always `self-initiated`), the revision register produces nothing, and the uncertainty movement degrades to a generic hedge — while the CSS renders identically.
**Reason:** Confirms the Phase 5A prediction, with a refinement: the apparatus does not look *empty*, it looks *filled with constants* — a subtler and slower-detected failure than a blank region.
**Source:** `prototypes/PHASE5D_GENERICITY_TEST.md`.
**Confidence:** MEDIUM — content analysis only; the visual comparison was not made.
**Date:** 2026-08-14

## P5D-005 — Two prototype defects flagged, not carried to production
**Decision:** `!important` on movement spacing (cascade must be restructured) and undocumented `oldstyle-nums` on body (add to spec deliberately or remove).
**Source:** `prototypes/PHASE5D_FAILURE_REVIEW.md` F5/F6.
**Confidence:** HIGH.
**Date:** 2026-08-14

---

# PHASE 5C — Typography & colour, 2026-08-14

## P5C-001 — Measure revised: 62–66 characters, 38rem — replaces 68ch
**Decision:** Specify the measure as a **character-count target with a derived `rem` max-width**, not in `ch`. Target 62–66 CPL; preferred 38rem; acceptable 36–41rem; verified by counting rendered characters.
**Reason:** Two problems with 5B's 68ch, both raised in review. (1) `ch` is the advance of the `0` glyph, which in text serifs is narrower than average lowercase — so 68ch renders *more* than 68 characters. (2) 68 was already at the top of Bringhurst's 45–75 and above every specific optimum found: ~66 commonly cited, Ruder 50–60, Dyson & Haselgrove ~55.
**Source:** `type/BODY_TEXT.md`, `type/TYPE_RESEARCH.md`.
**Confidence:** MEDIUM — must be confirmed by counting in 5D.
**Date:** 2026-08-14
**Net effect:** column ~10% narrower, nearer the centre of the evidence band.

## P5C-002 — Newsreader + Public Sans + system mono
**Decision:** Newsreader (Text/Display via `opsz`) for prose; Public Sans for apparatus; a **system monospace stack** for literals. **Two downloaded families, three files.**
**Reason:** Newsreader was commissioned by Google Fonts and designed by Production Type **explicitly for on-screen longer-form reading**, with three optical sizes — no other candidate's stated purpose matches the primary activity so exactly. Public Sans is Franklin-derived, deliberately neutral, strong at small sizes with tabular figures. Serif-plus-Franklin is a long-standing newspaper pairing. A system mono costs zero bytes and avoids JetBrains Mono, the category default.
**Source:** `type/SERIF_EVALUATION.md`, `type/SANS_EVALUATION.md`, `type/MONO_EVALUATION.md`, `type/TYPE_PAIRINGS.md`.
**Confidence:** MEDIUM.
**Date:** 2026-08-14
**Named risk:** the designers' own word for Newsreader is *"bookish"* — the F4 academic risk, stated by the foundry. **Fallback: Source Serif 4**, keeping Public Sans unchanged.

## P5C-003 — Pairing test revealed the sibling failure
**Decision:** Reject Source Serif + Source Sans despite it scoring highest on coherence.
**Reason:** It scored 10 on coherence and **6 on apparatus distinction** — the same property viewed twice. Siblings from one superfamily share skeletons and proportions, so the registers blend and the two-register system loses its only carrier. This clarified the requirement: **the target is a colleague — same temperament, different discipline. Not a sibling, not a stranger.**
**Source:** `type/TYPE_PAIRINGS.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5C-004 — Spacing scale revised down; ratio improved
**Decision:** NORMAL 1× → **0.85×**; OPEN 2.5× → **2.2×**; MAJOR 4.5× → 4×. Resulting ratio **2.59:1**, above the 2.2 minimum.
**Reason:** 5B set the scale before the type existed. At 1.65 leading, a full line-height paragraph gap over-separates and the block loses cohesion. Reducing NORMAL allows OPEN to reduce *while the ratio increases* — movements become more distinct and the page less airy. Directly addresses the F6 "too sparse" risk.
**Source:** `type/TYPE_RHYTHM.md`.
**Confidence:** MEDIUM — three ratio pairs must be compared in 5D.
**Date:** 2026-08-14

## P5C-005 — Nine colour roles; warm near-white `#FBFAF7`, ink-blue accent
**Decision:** System A. Ground `#FBFAF7`, primary `#1A1917`, accent `#2F4A6D`. Nine roles total; no status, uncertainty, domain, success/error or visited-link colours.
**Reason:** Warm enough to leave the category (every measured cybersecurity site sits on black or near-black), light enough to avoid the beige trend. The rejected System B (`#F7F4EE` + terracotta) scored 4/10 on beige-trend risk — the F3 design-portfolio failure.
**Source:** `color/COLOR_SYSTEMS.md`, `color/FINAL_PALETTE.md`.
**Confidence:** MEDIUM.
**Date:** 2026-08-14
**Unresolved:** ink blue vs oxblood `#8C3A2B` — both must be rendered and compared in 5D.

## P5C-006 — No accent on index titles
**Decision:** Investigation titles in the index inherit primary text colour, not the accent.
**Reason:** An index of 25 accent-coloured titles would put the accent on 25 of the page's most prominent elements — an order of magnitude above the ~2% reference — and would make the index read as a list of links rather than a body of work. **This single decision is what keeps accent usage inside budget**, because the index is where links are densest.
**Source:** `color/ACCENT_RULES.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5C-007 — Colour plays no role in the revision register
**Decision:** No green/red/orange, no markers, no highlighting, no fading of older entries, no accent on the newest.
**Reason:** A colour system would impose a value judgment, and the judgment would be wrong. Every entry is equally legitimate — the register's meaning is *here is what I thought, here is when I changed my mind*. Colour-coding would say some entries are failures and others the good state, converting an honest record into a status display. **The absence of colour is what keeps it a record rather than a changelog.**
**Source:** `color/REVISION_COLOR_POLICY.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5C-008 — Dark mode ships with a defined abandonment condition
**Decision:** Ship via `prefers-color-scheme` with a warm dark ground `#191816`. **Abandon and ship light-only** if the ground reads muddy, if Newsreader's strokes thin unacceptably when reversed, or if the apparatus register degrades.
**Reason:** Honest assessment — in dark mode the site loses most of its *palette-level* differentiation and retains all of its typographic and structural differentiation. That is acceptable only because the palette was never the primary differentiator. Dark mode is a comfort feature here, not an expression of identity.
**Source:** `color/DARK_MODE.md`.
**Confidence:** LOW-MEDIUM — **the weakest claim in Phase 5C.**
**Date:** 2026-08-14

---

# PHASE 5B — Layout & spatial system, 2026-08-14

## P5B-001 — Concede that the 5A masthead is a conventional byline
**Decision:** Stop claiming spatial novelty for the head apparatus. As specified in 5A (status · date · domain · origin beneath a title) it is structurally a conventional article byline.
**Reason:** Stress-testing Model C as instructed. Every technical blog has title/date/tags. What is unconventional is **content, not geometry**: `origin` (professional vs self-initiated) and `unresolved` as a permitted status. The inline insets — the element that would create a genuine second register — were specified as *occasional* and are the part most likely to be empty.
**Source:** `layout/TWO_REGISTER_GEOMETRY.md` §1.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Consequence:** the "two-register system" framing in Phase 4 and 5A oversold itself. Recorded rather than defended.

## P5B-002 — Model C′: add an accreting foot register
**Decision:** The apparatus occupies **three** positions — head (fixed facts), inline (rare asides), and **foot (dated revision record)**.
**Reason:** The stress test revealed the distinctive element is not metadata at the head but **the record of thinking that changed**. A dated revision ledger at the foot is absent from every site in the research corpus, is spatially distinctive (a document with a growing ledger does not look like an article), and is honestly empty at launch — rendering as nothing per VP-7. Scored 141 against Model A (81), B (112, prohibited), D (96).
**Source:** `layout/TWO_REGISTER_GEOMETRY.md`, `layout/APPARATUS_POSITIONING.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Sharpens the exit condition:** if no investigation has acquired a revision entry within **twelve months**, remove the foot register and acknowledge the site as a well-made editorial reading site.

## P5B-003 — Reading measure 68ch; column never grows past ~1024px
**Decision:** Prose at 68ch (62–74 acceptable). Content region 46rem. Page container 76rem. The reading column stops growing at ~1024px and never grows again.
**Reason:** Classic 60–75 character measure; the upper-middle suits a serif and tolerates this content's long compound terms. `ch` binds the measure to the chosen typeface so character count survives 5C. A measure that expands with the viewport becomes unreadable — resisting that is what separates a reading site from a marketing page.
**Source:** `layout/PAGE_WIDTH_SYSTEM.md`, `layout/READING_WIDTH.md`.
**Confidence:** MEDIUM — depends on the 5C serif's metrics; validate at 64/68/72.
**Date:** 2026-08-14

## P5B-004 — Movements marked by space; OPEN:NORMAL ≥ 2.2:1
**Decision:** Four spacing levels (TIGHT 0.4× · NORMAL 1× · OPEN 2.5× · MAJOR 4.5×), type-relative. The OPEN gap marks movement boundaries; no headings by default.
**Reason:** This ratio is the load-bearing structural mechanism (VP-5). Below 2.2 the piece reads as undifferentiated text; above ~3 it fragments into sections and starts to feel like a form. Type-relative spacing keeps the rhythm proportional at mobile sizes and under user font-size preferences.
**Source:** `layout/SPACING_RHYTHM.md`.
**Confidence:** MEDIUM — **unvalidated, and the most likely thing in the spec to be wrong.** 5D must test at 2.2/2.5/3.0.
**Date:** 2026-08-14

## P5B-005 — The question is the first paragraph, not a designed element
**Decision:** No enlarged, separated, or specially-set question. It is the opening paragraph of the reasoning at body type.
**Reason:** Scored 56 against standalone (42), deck (40), separated region (37). Setting it larger creates a second opening, so the piece begins twice — and it fails badly at 150 words, where a monumentalised question outweighs the content. Its importance is carried by **position**, exactly as with the uncertainty movement.
**Source:** `layout/QUESTION_LAYOUT.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5B-006 — Header not sticky; four links, no menu at any width
**Decision:** Static header. Four links fit at 320px. A menu is the last resort, not the first.
**Reason:** A sticky header permanently consumes vertical space on a site whose primary activity is reading long-form prose — a meaningful fraction of a phone viewport, on every page. Occasional scrolling up costs less than always losing reading space. Also avoids scroll listeners and zoom layout-shift.
**Source:** `layout/NAVIGATION_GEOMETRY.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5B-007 — Notes render inline in their index
**Decision:** Notes below ~150 words render fully in the index; permalinks exist for citation. Same 68ch measure as investigations; date only, no status, no `origin`, no head block.
**Reason:** Requiring a click to read forty words is friction with no payoff. Same measure deliberately — narrowing notes would signal they are a lesser class. The apparatus scaling down to a date is the point; applying the full investigation block to a two-sentence note would be decorative metadata.
**Source:** `layout/NOTES_LAYOUT.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

---

# PHASE 5A — Design foundations, 2026-08-14

## P5A-001 — Two-register Model C: distributed apparatus
**Decision:** The apparatus is **not a side column**. It is a dense masthead block after the title, plus occasional inline insets within the prose.
**Reason:** Four reasons, the first decisive. (1) **It solves the emptiness risk** — a masthead holding status/date/domain/origin is full at launch; a side column holding the same four fields is 90% empty and reads as a styled gutter. Phase 4 named an inert apparatus as the biggest creative risk. (2) It avoids the Tufte prohibition (constraints 22, 24) without abandoning the idea. (3) Mobile is not a transformation — Model C is already the mobile layout. (4) Least complex.
**Source:** `design-system/TWO_REGISTER_SYSTEM.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Cost accepted:** loses the adjacency of true margin notes, where an aside sits beside the sentence it qualifies.

## P5A-002 — Resolve contradiction C5A-1: uncertainty is prose, not apparatus
**Decision:** Split the concept. *Uncertainty as content* (the sentence) stays in the main column at full body type. *Uncertainty as state* (`unresolved`) lives in the apparatus as a metadata value.
**Reason:** The Phase 5A brief lists uncertainty under Register B; Phase 4 placed it in the main column and forbade de-emphasis. Both cannot hold — the apparatus is by definition subordinate, so placing the statement there demotes the site's most distinctive move to metadata.
**Source:** `design-system/TWO_REGISTER_SYSTEM.md` §1, `design-system/UNCERTAINTY_SYSTEM.md`.
**Confidence:** HIGH on the analysis; Het may overrule.
**Date:** 2026-08-14
**Consequence if overruled:** VP-4 and Phase 4 Principle 3 must be formally withdrawn.

## P5A-003 — Refine C5A-2: light canonical, dark via media query, no toggle
**Decision:** Light is the canonical scheme. Dark supported through `prefers-color-scheme` only. **No theme toggle.**
**Reason:** Phase 4 said "both first-class"; Phase 5A said do not add dark automatically. Refined rather than contradicted. Warm editorial neutral *is* the differentiation from the category, so it should be what most visitors see. Respecting an OS preference costs zero JavaScript; a toggle costs JS, localStorage, a header control and a flash-of-wrong-theme.
**Source:** `design-system/COLOR_ARCHITECTURE.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Escape hatch:** if 5C finds the warm identity cannot survive in dark, ship light-only.

## P5A-004 — Status is a word; no colour, no badge
**Decision:** All five statuses render as plain words in the apparatus. No pills, chips, dots, or hues. `unresolved` receives **no** distinguishing treatment.
**Reason:** Five statuses × two schemes would be ten colour values carrying meaning colour must not carry alone (VP-3), reproducing the badge system measured as a corporate-genericity marker. Decisively: colouring `unresolved` would signal that unresolved work is a lesser class, inverting the honesty premise. It is an equally legitimate outcome.
**Source:** `design-system/STATUS_SYSTEM.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5A-005 — Two containers on the entire site
**Decision:** Code blocks and figures. Nothing else is contained — not the masthead, not insets, not uncertainty, not artifacts, not index rows.
**Reason:** Containers are how a page stops being a document and becomes an interface. Boxing the masthead would make it a card and violate constraint 25 directly. Code and figures are the only cases where the boundary carries real information.
**Source:** `design-system/CONTAINER_PHILOSOPHY.md`, `design-system/DIVIDER_RULES.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5A-006 — No icon system
**Decision:** No icon set. Zero to two convention glyphs (external link, anchor) at most.
**Reason:** An icon set is a vocabulary requiring design and maintenance, and this site has almost no interface for it to serve. Every job an icon would do is already done by a word or by position. The reflex to illustrate a technical subject is itself the problem, beyond the specific banned clichés.
**Source:** `design-system/ICONOGRAPHY.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P5A-007 — Genericity claim restated honestly
**Decision:** Stop claiming the visual system is distinctive. The defensible claim is: **the visual system cannot be worn convincingly by someone who does not work this way.**
**Reason:** Adversarial test — applied to a generic student portfolio, the palette, type pairing, layout and restraint all transfer fully. What does *not* transfer is content-dependent: the apparatus renders informationally empty (`origin` identical on every item, `unresolved` never used, uncertainty filled with generic hedges). The system is not unique; it is **diagnostic**.
**Source:** `design-system/GENERICITY_STRESS_TEST.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Corollary recorded:** the design has no way to compensate for weak content — by construction. That is deliberate and is also a real vulnerability for Het himself.

---

# PHASE 4 — Creative direction, 2026-08-14

## P4-001 — Creative direction: THE WORKING DOCUMENT
**Decision:** Two registers — main column carrying reasoning, apparatus carrying time, status, uncertainty, asides and revisions. Scored 115/130 against Editorial Investigation (105) and Field Notebook (93).
**Reason:** The only finalist that fails the transferability test in the right direction — applied to a portfolio of finished, confident descriptions the apparatus renders visibly empty, so the visual system depends on the content behaviour. It also resolves the conflict flagged in `design/DESIGN_PRINCIPLES.md` between uncertainty-prominence and restraint, by marking position rather than decoration.
**Source:** `design/CREATIVE_DIRECTIONS.md`, `design/PHASE4_RECOMMENDATION.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Exit condition:** if the apparatus carries nothing beyond baseline metadata six months after launch, collapse to Editorial Investigation.

## P4-002 — The metaphor has no visual expression
**Decision:** "Investigation" is linguistic and structural only. No detective imagery, no paper texture, no evidence tags, no network nodes, no signal traces.
**Reason:** The architecture *is* the metaphor — delete the word and the structure stands. Layering imagery on a structure already coherent without it would be the zyekh.cloud costume failure in reverse.
**Source:** `design/VISUAL_METAPHOR.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P4-003 — Warm editorial neutral, not dark
**Decision:** Warm neutral ground, near-black ink, one accent at ~2% of elements. Light and dark both first-class; neither is the identity.
**Reason:** Every measured cybersecurity site sits on black or near-black — `rgb(18,19,26)` on zyekh, black on adharvkt. A warm neutral is the furthest position from the category default that remains entirely serious, and it costs nothing in credibility. The ~2% accent ratio is the measured Snellenberg discipline.
**Source:** `design/COLOR_PHILOSOPHIES.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Caution recorded:** warm neutrals are associated with editorial/design portfolios, so differentiation gained against the security category is partly spent against the portfolio category. Typography and the apparatus must carry distinctiveness.

## P4-004 — Three type families with functional assignment
**Decision:** Editorial serif for prose · technical sans for apparatus · mono for literal values only. Hierarchy by size and space; weight near-constant.
**Reason:** The two-register structure requires the reader to distinguish reasoning from apparatus instantly. Two type registers achieve that without a rule, box or colour — the restraint the principles demand. Neither typographic direction won alone (70–70 tie); the split is functional, not a compromise.
**Source:** `design/TYPOGRAPHIC_DIRECTIONS.md`.
**Confidence:** MEDIUM.
**Date:** 2026-08-14

## P4-005 — Near-zero motion and near-zero imagery
**Decision:** No entrance animation, no scroll reveal, no page transitions by default. Motion for genuine state changes only. No photography beyond one optional small portrait on About; 2–3 explanatory diagrams site-wide.
**Reason:** The measured award winner has `canvasCount = 0` while the student security sites use more visual machinery. Het's content produces no natural imagery, so any would be manufactured. Having no images is more distinctive than having generic ones.
**Source:** `design/MOTION_LANGUAGE.md`, `design/IMAGE_STRATEGY.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Risk accepted:** a still, imageless site can read as unfinished. Mitigation is craft — the typography bar rises accordingly.

## P4-006 — No data visualisation
**Decision:** Seven of eight proposed uses rejected. Only conceptual diagrams inside investigations survive, at 2–3 site-wide.
**Reason:** At 3–25 items a dated list *is* the timeline and is more precise; a graph of eight nodes is decoration; findings are confidential; learning progression is unmeasurable. Most portfolio data visualisation is a disguised metric claim — it makes an assertion look measured when it is not.
**Source:** `design/DATA_VISUALIZATION.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P4-007 — Complexity budget: functionally zero client JavaScript at launch
**Decision:** Static generation; site fully readable with JS disabled; filtering at ~10 items with a no-JS fallback; search only past ~50. WebGL, canvas, graphs, SPA routing, command palette, live GitHub API all rejected.
**Reason:** Complexity is rejected not on principle but because its benefit does not clear its cost for a reading-centred site. Also: Het's maintenance capacity is unknown, and a dependency-light site still works in two years — which matters on a security engineer's site.
**Source:** `design/COMPLEXITY_BUDGET.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

---

# PHASE 3 — UX / experience architecture, 2026-08-14

## P3-001 — IA-1 (investigation-centric) selected
**Decision:** Organise the site around investigations. Professional experience is context; artifacts are properties; GitHub is an evidence channel.
**Reason:** The only model of three where reasoning is structurally primary — which is the brand promise — and the only one honest about Het's actual role in engagements. IA-2 (experience-anchored) scored 48/100: a top level containing one employer is not a structure, and making the engagement the unit both overstates his role and increases confidentiality exposure.
**Source:** `ux/INFORMATION_ARCHITECTURE.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P3-002 — Reject the proposed 8-section investigation template
**Decision:** Four required movements, two optional, **no fixed headings**: the question · what I did and why · what I found · what I couldn't determine · *(artifacts)* · *(what changed)*.
**Reason:** Approach and reasoning cannot be separated without forcing repetition or after-the-fact justification. Findings and conclusion overlap. Eight fixed sections produce exactly the template monotony `brand/VOICE.md` warns against, and make short investigations impossible — which pushes Het toward inflating small work.
**Source:** `ux/INVESTIGATION_MODEL.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Disagrees with:** the Phase 3 instruction's starting structure. Documented rather than silently altered.

## P3-003 — The engagement is context; the question inside it is the investigation
**Decision:** Do not publish CSCRF/IRDAI engagements as investigations. Publish the questions Het personally had to work out while doing his part.
**Reason:** Three problems solved at once. **Honesty** — he assisted; he did not scope or lead, so "my engagement" overstates his role. **Confidentiality** — the unit of publication becomes his reasoning, which he owns, rather than the client's engagement, which he does not. **Substance** — a summarised engagement is thin and generic; a reasoning problem is specific.
**Source:** `ux/CONTENT_MODEL.md` §4, `ux/CONFIDENTIAL_WORK_MODEL.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P3-004 — Refine P2-003: investigations may be inquiry-shaped or build-shaped
**Decision:** An investigation may conclude with a **finding** or with an **artifact**. Same required honesty fields; different internal emphasis.
**Reason:** Phase 2 implied every built thing must be framed as an investigation. Tested and partially rejected — "Can I build X?" is not a real question, and forcing it is contrived. But a second "Build" content type would be an empty section today and would make artifact count the metric, which is the comparison Het loses.
**Source:** `ux/CORE_CONTENT_UNIT_ANALYSIS.md`.
**Confidence:** MEDIUM-HIGH.
**Date:** 2026-08-14
**Refines:** P2-003.

## P3-005 — Navigation Model B: Home · Investigations · Notes · About
**Decision:** Four items. Investigation-first (Model A) and contextual discovery (Model C) both rejected.
**Reason:** Model B is the only one serving all five journeys without failing any. A and C both fail the recruiter journey — and the recruiter is the gatekeeper to both primary audiences. Its one weakness, conventional shape, is accepted deliberately: the brief bans the generic *structure* (Projects/Skills/Certifications), not four navigation items. **Spending distinctiveness on the navigation bar costs usability for every audience and buys recognition from none.**
**Source:** `ux/NAVIGATION_MODELS.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P3-006 — Sections disappear rather than showing empty states
**Decision:** No "coming soon", no empty shelves, no placeholder artifacts. Launch minimum: 3 investigations, 2–3 notes.
**Reason:** An empty section advertises a gap and promises a cadence. **The site should look deliberately small rather than aspirationally large** — padding is the most visible tell of an early-career portfolio.
**Source:** `ux/EMPTY_STATE_AND_GROWTH.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P3-007 — No search, filters, tags or graph at launch
**Decision:** Three discovery dimensions (type, domain, status), none implemented at launch. Domain filter at ~10 items, status filter at ~15, search only past 50. No tags, no sorting, no graph visualisation.
**Reason:** A filter over five items advertises that there are only five. Auto-generated relationships produce false connections, which on a site premised on rigour is worse than none. A graph of eight nodes is decoration.
**Source:** `ux/UX_STRATEGY.md` §3, §4.
**Confidence:** HIGH.
**Date:** 2026-08-14

---

# PHASE 2 — Brand strategy, 2026-08-14

## P2-001 — Brand core: reasoning, not credentials
**Decision:** The brand answers "how does Het reason when the answer isn't given?" Essence: **"Reasoning, shown."** Promise: every piece of work shows its reasoning and states its limits.
**Reason:** A resume already proves exposure. Judgment is the one thing a resume structurally cannot carry, a generator cannot fabricate convincingly, and another student cannot acquire by copying a layout.
**Source:** Phase 1 findings; `brand/BRAND_STRATEGY.md`.
**Confidence:** MEDIUM — depends on investigation volume (P2-006).
**Date:** 2026-08-14

## P2-002 — State the advantage as access-derived, not skill-derived
**Decision:** Position Het's regulated-engagement exposure as *scarce access* producing judgment — never as expertise or seniority.
**Reason:** Seven months of exposure is exposure. Crossing that line converts the strongest asset into the biggest liability, since overclaiming is what the primary audience punishes hardest.
**Source:** `SOURCE_OF_TRUTH.md`; Het's own strategy document.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P2-003 — Primary unit is an INVESTIGATION; secondary is a FIELD NOTE
**Decision:** Two units, not one. An investigation is the primary unit; a field note is short-form. A built artifact is a **property of** an investigation, not a third type.
**Reason:** "Investigation" is security-native in both directions (assessment, incident), permits inconclusiveness — making honesty structural — carries no borrowed professional connotation, and is stage-neutral. It beat "Case" (legal/clinical echo) and "Decision" (poor browsable noun). A single unit was rejected as distorting: building a tool is genuinely not investigating something.
**Source:** `brand/BRAND_STRATEGY.md` §4, §10.
**Confidence:** MEDIUM.
**Date:** 2026-08-14
**Supersedes:** the Phase 1 working label "Casework", which is **not** adopted.

## P2-004 — Voice: reasoned first person
**Decision:** First-person prose that shows the route, not just the destination. Plain-technical register for headings and summaries; reasoned voice in the body.
**Reason:** Scored highest on personality and on resistance to generated-text sameness — the two qualities Phase 1 identified as scarce. Its structure (false start, mid-course discovery, unresolved limitation) is the shape of real experience; generated text defaults to confident and resolved.
**Source:** `brand/VOICE.md`, four directions tested on the same fictional example.
**Confidence:** MEDIUM.
**Date:** 2026-08-14

## P2-005 — Reject "learning velocity" from the brand
**Decision:** Do not claim curiosity-in-motion, learning speed, or momentum.
**Reason:** The public GitHub shows no activity since 2025-10-19. The claim is falsifiable in one click.
**Source:** `github/PUBLIC_GITHUB_AUDIT.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P2-006 — Record investigation volume as the blocking dependency
**Decision:** The recommended brand holds only if Het can describe roughly six or more genuine investigations. Below that, Direction C (Assurance Bridge) becomes the better choice.
**Reason:** The brand promises reasoning across a body of work. Below ~6 it promises more than the content delivers.
**Source:** `brand/BRAND_STRATEGY.md` §12.
**Confidence:** HIGH that it is the dependency; the answer is **UNKNOWN**.
**Date:** 2026-08-14
**Note:** asked at the close of Phase 1 and still unanswered.

## P2-007 — Trust hierarchy inverts the conventional ordering
**Decision:** Professional work and demonstrated reasoning rank first; certifications rank low; the roadmap ranks last; the GitHub profile is a **negative** signal until remediated.
**Reason:** Certifications differentiate least precisely because they are most attainable, and technical readers discount them. 219 roadmap concepts against zero built repositories reads as planning substituting for doing.
**Source:** `brand/TRUST_MODEL.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

## P2-008 — Reject "The Apprentice" direction on growth grounds
**Decision:** Do not build the brand on visible learning / beginner candour.
**Reason:** It is the most honest option and it is self-terminating — the identity dissolves the moment Het stops being a beginner. It also understates verified regulated audit exposure, which is not apprentice-level work.
**Source:** `brand/GROWTH_MODEL.md`.
**Confidence:** HIGH.
**Date:** 2026-08-14

---

# PHASE 1 CONTINUATION — 2026-08-14

## P1-001 — Demote "confidentiality as demonstration" to table stakes
**Decision:** Withdraw O2 as a differentiating opportunity. Adopt the sector convention instead — descriptor-label anonymisation, real methodological depth, **silent** omission of specifics.
**Reason:** Five independent sources show anonymised case studies are a codified professional-services standard with published templates. Doyensec anonymises the client while publishing deep technical detail and never announces what it withheld. Include Security publishes no case studies at all. **Advertising a ledger of withheld evidence is contrary to practice and would signal inexperience.**
**Source:** Bishop Fox, Doyensec, Include Security, pentest reporting norms, anonymised case-study guidance.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Supersedes:** the first session's claim that this was "the strongest genuinely-Het opportunity."
**Consequence:** removed a pillar from The Register; collapsed *Scope & Boundary* (66 → 48).

## P1-002 — Revise the saturation model: cyberpunk → corporate sameness
**Decision:** Treat avoidance of hacker aesthetics as table stakes. Record corporate sameness as the primary genericity threat, and personality as the scarce differentiator (O11).
**Reason:** 2 of 5 inspected cybersecurity personal sites use cyberpunk motifs; 3 of 5 are professional. bugatsec.dev was characterised as achieving *"intentional genericization through absence of personality markers."*
**Source:** bugatsec.dev, nikki-65.github.io, plus the three previously inspected.
**Confidence:** MEDIUM (n=5).
**Date:** 2026-08-14
**Consequence:** The Register sits closest to this failure mode — now its principal risk.

## P1-003 — Require a first-person voice layer in The Register
**Decision:** The recommendation is conditional. Without an executed voice layer, switch to The Reading Room.
**Reason:** P1-002 identifies the failure mode; Olivier Larose demonstrates the mitigation — rigid structured project records coexisting with an unmistakably personal voice.
**Source:** olivierlarose.com; bugatsec.dev as counter-example.
**Confidence:** MEDIUM.
**Date:** 2026-08-14

## P1-004 — Downgrade recommendation confidence from HIGH to MEDIUM
**Decision:** The Register remains primary; confidence drops; margin falls from 15 points to 3; The Reading Room becomes a live fallback.
**Reason:** P1-001 removed a supporting pillar and P1-002 raised the risk profile, while the Reading Room gained on the newly-scarce quality (voice).
**Source:** `concepts/CONCEPT_REEVALUATION.md`.
**Confidence:** MEDIUM.
**Date:** 2026-08-14
**Note:** Het's writing capacity is the swing factor between the top two and remains unknown.

## P1-005 — State the GRC positioning more modestly
**Decision:** Replace "GRC appears in 1 of 20 portfolios" with "~12–15% of sampled repositories are compliance-oriented."
**Reason:** A second GitHub topic sample showed materially more compliance work. One user also accounts for 6 of 20 in that sample, inflating raw counts.
**Source:** GitHub topic `security-portfolio`.
**Confidence:** MEDIUM.
**Date:** 2026-08-14
**Consequence:** positioning remains valid, differentiation claim is weaker than stated.

---

# PHASE 1 — Research *(carried forward, unchanged)*

Full reasoning in the prior entries; summarised here so one file holds the record.

| ID | Decision | Confidence |
|---|---|---|
| D-001 | Proceed with research despite missing sources; block final approval of Phases 2–4 | HIGH |
| D-002 | Record Apify as unavailable rather than simulating a crawl *(now available — see P0-012)* | HIGH |
| D-003 | Use runtime browser inspection for visual facts; `UNKNOWN` for text-fetched visuals | HIGH |
| D-004 | Adopt domain × state as the primary IA | HIGH |
| D-005 | Reject black + neon green and monospace body type | HIGH — measured |
| D-006 | Reject WebGL/3D-first navigation | HIGH — `canvasCount = 0` on the award winner |
| D-007 | Interaction must teach, not impress | HIGH |
| D-008 | Positioning: dual register (testing + regulated assurance) | **HIGH — restored by P0-014** (was downgraded by P0-005) |
| D-009 | Recommend "The Register"; "The Practice" as fallback | **HIGH — upgraded by P0-014** (was MEDIUM) |
| D-010 | Exclude a live GitHub activity feed as a primary device | HIGH |
| D-011 | Adopt Appleton's structure, reject her vocabulary | HIGH |

## P0-012 — Apify became available after Phase 1 research
**Decision:** Record that Apify tooling appeared in the session after the Phase 1 corpus was built. Do not retrofit the corpus now.
**Reason:** Phase 1 is complete and its limitations are disclosed. Re-running research belongs to a deliberate Phase 1 extension, if Het wants one — not to a quiet backfill that would blur what was gathered how.
**Source:** Session tool availability.
**Confidence:** HIGH.
**Date:** 2026-08-14
**Consequence:** If Phase 1 is extended, Apify could materially expand the corpus toward the brief's §15 targets.
