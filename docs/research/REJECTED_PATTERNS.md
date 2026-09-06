# Rejected Patterns

**Date:** 2026-08-14
**Purpose:** A standing defence against regression into generic design. Per brief §57, entries are recorded only *after* research validated the rejection — each carries the evidence that justified it.

**Rule for future work:** if an implementation proposal matches an entry here, it must be flagged and argued explicitly against this document, not silently adopted.

---

## Rejected on measured evidence

### 1. Black + neon green
**Evidence:** Measured on adharvkt.github.io — accent `rgb(44,214,38)` over `rgb(0,0,0)`.
**Why rejected:** Brief §26 bans it; research confirms it is live in the wild and instantly places the author in the student archetype.
**Exception:** none.

### 2. Monospace as the body typeface
**Evidence:** Measured on zyekh.cloud — JetBrains Mono on 27/45 sampled elements, applied document-wide.
**Why rejected:** Brief §39 — monospace must be an accent. Used everywhere it becomes costume and degrades long-form readability.
**Permitted use:** code, identifiers, repository names, hashes, tabular data, metadata labels. Never body prose, never headings.

### 3. Percentage skill bars
**Evidence:** adharvkt ("SOC 99%", "NMap 95%"); raifkaya ("Network Mapper 90%").
**Why rejected:** The numbers are unfalsifiable and therefore meaningless. A security professional reads "99%" as decoration; a recruiter cannot verify it. It also invites the exact overclaiming the brief forbids.
**Replacement:** show method and artefacts. Competence is demonstrated, not asserted numerically.

### 4. Tools presented as portfolio items
**Evidence:** raifkaya lists Acunetix, Burp Suite, Nmap, Wireshark, SQLMap under "Portfolio", each with "I use [tool] to [action]".
**Why rejected:** Tool familiarity is exposure, not engineering. **Sharpened for Het specifically:** his stated toolset is the same list. Presenting it as inventory makes him indistinguishable from this site.
**Replacement:** tools appear inside a described method, as instruments of an approach.

### 5. Credential-count sections
**Evidence:** adharvkt — "COURSES COMPLETED", "INTERNSHIPS ATTENDED", "LICENSES ACCQUIRED".
**Why rejected:** Accumulation framing signals early-career anxiety and treats certificates as achievements in themselves.
**Replacement:** credentials as compact factual metadata, not as headline sections.

### 6. "Services" on a personal portfolio
**Evidence:** Present on all three inspected student/practitioner personal sites (adharvkt, zyekh, raifkaya).
**Why rejected:** Inherited template furniture. Het is seeking employment, not selling engagements. It is legitimate on rez0.com because that is an actual consultancy.
**Exception:** revisit only if Het genuinely begins independent consulting.

### 7. SCREAMING_SNAKE_CASE / ALL-CAPS section headings
**Evidence:** zyekh (`SYSTEM_OVERVIEW`, `CORE_REPOSITORIES`); adharvkt (`ABOUT ME`, `SKILLS`).
**Why rejected:** Machine-vocabulary applied to human-readable headings is costume. Also harms legibility and screen-reader pronunciation.

### 8. "SYSTEM_STATUS: ONLINE" and equivalent status theatre
**Evidence:** Measured verbatim on zyekh.cloud. Brief §26 independently bans "SYSTEM ONLINE", "ACCESS GRANTED", "INITIALIZING".
**Why rejected:** Simulated system states that report nothing real. If a status indicator does not reflect an actual measured condition, it is a lie rendered in UI.
**Narrow exception:** a status element that displays genuinely live data (e.g. real last-commit time from the GitHub API) is not theatre — it is information.

### 9. Terminal chrome without terminal function
**Evidence:** zyekh.cloud presents terminal styling; no command interface was found.
**Why rejected:** It advertises an interaction the page cannot honour. Visitors who try to type discover the promise was decorative.
**Narrow exception:** the rez0 tmux-footer model — a precise in-group reference that is neutral to non-practitioners and never the primary aesthetic.

### 10. Marketing filler vocabulary
**Evidence:** adharvkt — "dedicated cybersecurity professional", "proven track record", "unwavering commitment to excellence". Contrast Trail of Bits, whose titles name specific techniques.
**Why rejected:** Vague superlatives are the clearest tell of a template. Precision is the credibility mechanism.
**Test:** would this sentence survive in a Trail of Bits abstract? If not, rewrite it.

### 11. Outlaw / "beyond legal" framing
**Evidence:** raifkaya's Skills heading, "Master skills that are beyond legal".
**Why rejected:** Actively destroys credibility with the GRC, audit and regulated-finance audience — people who are risk-averse by profession. For someone with CSCRF and IRDAI audit exposure this is strategically self-harming.

### 12. The fixed generic section order
**Evidence:** Near-identical sequences on independently-authored sites (adharvkt, raifkaya) — About → Skills → Experience → … → Contact.
**Why rejected:** Brief §24 forbids it as a default. Research confirms it is shared template ancestry, and it cannot scale to a 12-track ecosystem.

---

## Rejected on reasoning from research

### 13. Drivable 3D world / WebGL-first navigation
**Evidence:** bruno-simon.com wins major awards with it — *and* dennissnellenberg.com wins awards with `canvasCount = 0`.
**Why rejected:** The Bruno Simon mechanic is justified because he teaches Three.js: the site proves the skill it sells. Het is not selling WebGL. The same mechanic would be decoration and would undermine the engineering credibility that is the entire point.
**Standing test:** *does this interaction prove a claim Het is actually making?*

### 14. Matrix rain, glitch effects, particle fields, binary backgrounds, hacker imagery
**Evidence:** A GitHub repository in the sample advertises "Glassmorphic terminal UI with matrix backdrop" — three forbidden items in seven words, offered as a selling point.
**Why rejected:** Brief §26. Research confirms these are actively marketed as features by the exact cohort Het must differentiate from.

### 15. Card grid as the default project container
**Evidence:** Kettle and Trail of Bits — the two most credible security sources inspected — use plain thematically-grouped text entries. Sam Curry's cards work *because the excerpt states the finding*.
**Why rejected:** Brief §25. Cards default to title + description + badge, which carries no claim.
**Conditional permission:** a card may be used where it carries a real claim, not merely a label.

### 16. Large tag taxonomy
**Evidence:** Trail of Bits sustains 100+ categories — on fourteen years of output.
**Why rejected *for now*:** A large taxonomy over a handful of items advertises emptiness. Revisit at genuine volume.

### 17. Content typed by format instead of by epistemic status
**Evidence:** tl;dr sec types by format (newsletter/blog/podcast/guide). Appleton, Distill and The Pudding all type by status or review state.
**Why rejected:** Format tells the visitor nothing about confidence. Het's brief (§6) requires BUILT / IN PROGRESS / RESEARCH / FUTURE never to blur — a status-based axis solves this; a format-based one does not.

### 18. Sequential numbering of works — *deferred, not rejected*
**Evidence:** pudding.cool numbers essays #224 down to #198.
**Why deferred:** Numbering makes accumulation legible and is genuinely appealing — but starting at #1 with three items advertises how little exists. Revisit once there is a body of work.

---

## Vocabulary rejected on copying-risk grounds

### 19. "Digital garden" and the Garden / Notes / Patterns lexicon
**Evidence:** maggieappleton.com.
**Why rejected:** The *structure* (epistemic typing) is the most valuable structural finding in this research and will be adopted. The *vocabulary* is strongly owned by Appleton, and plant metaphors are wrong for security work regardless.
**Requirement:** Het's state labels must be security-native and independently derived.

### 20. The "personal operating system" metaphor — *caution, not rejection*
**Evidence:** Two of 31 Awwwards-listed portfolios use an OS metaphor in their name (ZUI_OS, PouyaOS). This is inferred from names in a listing, not from inspection.
**Why flagged:** Brief §28 lists "Personal Security Operating System" as a candidate concept. It is less untrodden than it appears. If pursued, its originality claim must be re-tested against actual inspection of those sites first.
