# User Journeys

**Date:** 2026-08-14 (Phase 3) · **Supersedes** the pre-Phase-0 draft.

Audience priority per `../brand/AUDIENCE_STRATEGY.md`: hiring managers and GRC/audit professionals are primary; recruiters are the gatekeeper; peers are long-term.

---

## Journey 1 — RECRUITER · 30–60 seconds

Non-technical. Screening against a requisition. Frequently on mobile.

| Stage | What happens |
|---|---|
| **Entry** | Homepage, from an application or LinkedIn |
| **Orientation** | Position 1 — name, discipline, that the work is professional. **No scrolling required** |
| **Discovery** | Position 2 — testing plus regulated assurance. Scans for role keywords, finds them in natural prose |
| **Deep dive** | Rarely. May open About for education, certifications, availability |
| **Exit / next** | Copies the email, or forwards the URL |

**Must be true:** contact reachable in one action from anywhere · About carries education and certifications as plain facts · nothing requires interpretation.

**Fails if:** the concept obstructs basic facts · contact is buried · the page reads as an art piece.

**Note:** this journey is *served*, not optimised for. Meeting it must not shape the depth below — the archetype's failure is serving this reader exclusively.

---

## Journey 2 — SECURITY HIRING MANAGER / PROFESSIONAL · 5–15 minutes

The audience with the most decision power, and the only one that can evaluate reasoning.

| Stage | What happens |
|---|---|
| **Entry** | Homepage, or a deep link to one investigation |
| **Orientation** | Confirms this is professional work, not coursework. Notes the absence of skill bars and certificate counts — **the absence does work here** |
| **Discovery** | Reads the homepage investigation excerpt. Decides within a paragraph whether the thinking is real |
| **Deep dive** | Opens the investigation nearest their domain. Reads the question, the approach, the reasoning — then looks for the unresolved element |
| **Exit / next** | Contacts him, or opens a second investigation |

**The decisive moment:** reaching *"what I couldn't determine"* and finding it **specific rather than performative.** A generic hedge here is worse than none — it converts the site's central claim into a device.

**Must be true:** technical language survives expert reading · role precision is exact ("assisted with", not "led") · no status label contradicted by its evidence.

**Fails if:** overclaiming from a 7-month internship · reasoning theatre where the decision was obvious · any unverifiable metric.

---

## Journey 3 — TECHNICAL PEER · 10+ minutes

Arrives from a repository, a note, or a shared link. Source of long-term reputation.

| Stage | What happens |
|---|---|
| **Entry** | Usually **mid-site** — a deep link, not the homepage |
| **Orientation** | The page must stand alone: what this is, who wrote it, when |
| **Discovery** | Reads the piece. Follows related investigations or field notes |
| **Deep dive** | Opens artifacts. Checks whether the code matches the claim |
| **Exit / next** | Follows, stars, or shares — or leaves without trace |

**Must be true:** every page is a valid entry point · artifacts exist and work · related links are genuinely related · field notes reward browsing.

**Fails if:** an artifact link is dead — on a site premised on honesty, this undermines more than it would elsewhere.

**Honest status:** with no public work, this audience currently has no route in. The structure supports them; there is nothing yet to arrive from.

---

## Journey 4 — GRC / AUDIT PROFESSIONAL · 3–10 minutes

Promoted to primary once CSCRF/IRDAI was confirmed.

| Stage | What happens |
|---|---|
| **Entry** | Homepage or a professional investigation |
| **Orientation** | Registers immediately that there is **no hacker aesthetic** — this audience is repelled by it |
| **Discovery** | Looks for framework vocabulary used correctly |
| **Deep dive** | Reads a professional investigation. Assesses whether he understands scope, control mapping and evidence |
| **Exit / next** | Judges whether he can be trusted inside regulated work |

**The subtle mechanism:** they notice what is *not* said. Silent omission reads as professional; announcing discretion reads as inexperience. **They should never encounter a sentence about confidentiality.**

**Fails if:** any "[REDACTED]" styling or NDA language · imprecise framework terminology · overstated role.

---

## Journey 5 — RETURN VISITOR

| Stage | What happens |
|---|---|
| **Entry** | Direct, from memory or a bookmark |
| **Orientation** | Wants to know what changed since last time |
| **Discovery** | Scans for new investigations, new notes, or status movement |
| **Deep dive** | Reads what is new |
| **Exit** | Leaves with the site's currency confirmed — or not |

**Return mechanisms, ranked by sustainability at Het's unverified cadence:**

1. **Status movement.** `open → closed`, `planned → open`. Costs nothing extra — a by-product of doing the work.
2. **Field notes.** Cheap, short, achievable at 3–8/year.
3. **Investigations updating in place.** An open investigation gains a paragraph; the updated date changes.
4. **New investigations.** Highest value, lowest frequency.

**Deliberately excluded:** a GitHub activity feed (decision D-010 — measures the wrong thing, broadcasts idleness) · a newsletter (promises unverified cadence).

**Must be true:** dates visible everywhere · updated items show they were updated · nothing implies a cadence that is not kept.

---

## Cross-cutting requirements

1. **Every page is a valid entry point** — journeys 3 and 4 frequently arrive mid-site.
2. **Contact reachable in one action from anywhere** — journey 1 abandons fast.
3. **Status and date visible on every item** — serves journeys 2, 4 and 5 simultaneously.
4. **No audience-mode toggle.** Visitors do not self-classify. Layering, not segmentation.
5. **Nothing critical behind motion or hover** — protects touch, keyboard and reduced-motion users.
6. **The site must be fully comprehensible as a static document.**

---

## Journey conflicts, and how they resolve

| Conflict | Resolution |
|---|---|
| Recruiter wants brevity; professional wants depth | Layering — conventional surface, depth beneath. Validated by Our World in Data |
| Peer enters mid-site; recruiter enters at the homepage | Every page self-contained; homepage still purpose-built for orientation |
| GRC wants sobriety; peer rewards technical specificity | No conflict — both are served by precision. The vocabulary differs, the register does not |
| Return visitor wants change; new visitor wants the best work | Homepage features the strongest work; dates and status make change visible without reordering around recency |
