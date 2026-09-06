# Work / Investigation Index — Hiring Test

**Date:** 2026-08-15 (Phase 5F)

Three structured walkthroughs against the rendered index. Not user research. Judgments are marked.

Geometry (MEASURED, banner excluded): 3 items → 1,576px at 1280 (1.8 screens), 1,690px at 375
(2.6 screens). 30 items → 5,114px (5.7 screens).

---

## TEST A — RECRUITER · 20 seconds

| Question | Answer | Verdict |
|---|---|---|
| **What has Het worked on?** | Three titles, all visible in the first screen at 1280; two at 375. Each names a specific technical problem | ✅ |
| **Professional vs self-initiated?** | The `origin` field is first in every record line | ⚠️ **see I-2** |
| **Where to click?** | Titles are the only accent-coloured, underlined elements on the page | ✅ |

**At 3 items the whole index is 1.8 screens** — a recruiter sees the entire body of work without
scrolling twice. That is an advantage of being small and the design does not disguise it.

### I-2 — origin is present but currently doing no work

**MEASURED:** all three entries read `self-initiated`. A field whose value never varies conveys
nothing, and origin is the index's most valuable field — it is what separates regulated-assurance
exposure from lab work.

**Not a design defect and no design change would fix it.** The 2026-08-15 clearance (P5EV-009) makes
`professional` investigations possible; none is written yet. The 30-item fixture, where nine entries
are `professional`, shows the field working as intended.

**Recommendation:** the first professional investigation is worth more to this page than any further
design work. It is the single highest-value piece of content Het can produce.

---

## TEST B — SECURITY ENGINEER · 5 minutes

| Looking for | Found | Verdict |
|---|---|---|
| **Technically interesting work** | Titles name specific failures — a matcher fed a pre-normalisation path, a timestamp reinterpreted at ingestion | ✅ |
| **Artifacts** | `code` appended to the record line where one exists; **nothing at all where none does** | ✅ |
| **Investigation structure** | One click to the 5D page: question → method → finding → what could not be determined | ✅ |
| **Professional vs personal** | Per-row `origin` | ⚠️ I-2 |

**PASS.**

JUDGMENT: the element a practitioner will notice is `unresolved` on the enumeration entry, rendered
identically to `closed` — no amber, no warning glyph, no reduced opacity. `STATUS_SYSTEM.md` calls
this its most important decision and it survives rendering. A portfolio that publicly marks work as
unresolved, and does not visually apologise for it, is not a thing this corpus contains.

The framing line on that entry does the rest: *"Three explanations fit the evidence equally well and
I could not separate them."* That is a claim about the limits of the evidence, and it is the reason
to open the item rather than a reason to skip it.

---

## TEST C — HIRING MANAGER · 10 minutes

| Assessing | Evidence | Verdict |
|---|---|---|
| **Breadth** | Three items across detection, network and application security | ⚠️ **thin, honestly so** |
| **Depth** | One click to a full investigation with a revision register | ✅ |
| **Professional exposure** | Not visible on this page today | ⚠️ I-2 — it is on the homepage |
| **Growth trajectory** | Spans are all `2026`; nothing shows movement over time | ⚠️ **see I-4** |
| **Judgment** | `unresolved` used honestly; framing lines state limits | ✅ **strong** |

### I-4 — the span cannot show trajectory yet

**MEASURED:** every current entry reads `2026`. The span was adopted because a span describes work
and a point describes a post — and that reasoning holds — but **at launch every value is identical,
so the field is uniform and therefore silent.**

This is the open question flagged in `WORK_INDEX_RESEARCH.md` §7, now answered: **the span costs
nothing and delivers nothing at three items.** In the 30-item fixture, where values range across
`2025`, `2025–2026`, `2026` and `2026–`, it reads clearly and carries trajectory.

**Kept, not removed.** Removing it would require re-adding it later, and the field is silent rather
than harmful. But it should not be defended as useful today.

**A hiring manager assessing trajectory currently gets more from the homepage** — where the
internship start date and "working on now" appear — than from this page. That is acceptable division
of labour, and it is worth Het knowing which page answers which question.

---

## Summary

| | Recruiter | Engineer | Manager |
|---|---|---|---|
| What he worked on | ✅ | ✅ | ✅ |
| Where to click | ✅ | ✅ | ✅ |
| Technical substance | — | ✅ | ✅ |
| Judgment / honesty | — | ✅ **standout** | ✅ **standout** |
| Professional vs self-initiated | ⚠️ I-2 | ⚠️ I-2 | ⚠️ I-2 |
| Breadth | — | — | ⚠️ thin |
| Trajectory | — | — | ⚠️ I-4 |

**Two findings, and neither is a design defect.** I-2 and I-4 both resolve with content — one
professional investigation, and the passage of time. The index is built so that both fields start
working the moment there is something for them to say, without any change to the page.

**The design does not attempt to disguise either.** No filter over three items, no count, no
"more coming soon". `EMPTY_STATE_AND_GROWTH.md`'s rule holds: the site should look deliberately
small rather than aspirationally large.
