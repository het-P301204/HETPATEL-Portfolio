# Generic Design Rejections

**Date:** 2026-08-14 (Phase 4)

Each element tested against four questions rather than banned reflexively: **Is it necessary? Does it communicate something? Does it strengthen the brand? Is it already saturated?**

---

## Rejected

| Element | Necessary? | Communicates? | Strengthens brand? | Saturated? | Verdict |
|---|---|---|---|---|---|
| **Matrix rain** | No | No | No — repels GRC audience | Yes | ❌ **REJECT** |
| **Terminal interface as decoration** | No | Falsely — promises interactivity it lacks | No | Yes (measured on zyekh.cloud) | ❌ **REJECT** |
| **Command-line hero** | No | No | No | Yes | ❌ **REJECT** |
| **Green-on-black** | No | Only category membership | No | Yes — measured `rgb(44,214,38)` on adharvkt | ❌ **REJECT** |
| **Neon cyan / purple** | No | No | No | Yes | ❌ **REJECT** |
| **Circuit-board backgrounds** | No | No | No | Yes | ❌ **REJECT** |
| **Glowing grids** | No | No | No | Yes | ❌ **REJECT** |
| **Locks / shields** | No | Category only, at the most generic level | No | Yes | ❌ **REJECT** |
| **Hacker silhouettes** | No | Actively harmful — implies anonymity and illegitimacy | No | Yes | ❌ **REJECT** |
| **Binary streams** | No | No | No | Yes | ❌ **REJECT** |
| **Fake vulnerability dashboards** | No | **Lies** — reports no real state | No | Yes | ❌ **REJECT** |
| **Threat maps** | No | Lies unless fed by real data Het does not have | No | Yes | ❌ **REJECT** |
| **SOC dashboards** | No | Lies | No | Yes | ❌ **REJECT** |
| **Animated code backgrounds** | No | No | No — competes with reading | Yes | ❌ **REJECT** |
| **Scanlines** | No | No | No | Yes | ❌ **REJECT** |
| **"ACCESS GRANTED" devices** | No | No | No | Yes | ❌ **REJECT** |
| **Giant cybersecurity keywords** | No | Keyword-stuffing in visual form | No | Yes | ❌ **REJECT** |

**Every one fails on all four questions.** None is a marginal call.

---

## Conditionally permitted

| Element | Condition |
|---|---|
| **Monospace type** | ✅ **Yes, restricted.** Code, identifiers, repository names, hashes, dates, tabular figures. **Never** body prose, never headings. Measured failure: JetBrains Mono as the entire body face on zyekh.cloud. Monospace is a *semantic* signal — "this is a literal value" — which is genuine information. |
| **Dark mode** | ✅ **Yes, as a user preference** — not as an identity. Dark-by-default is the category signature; offering both respects the reader. Must not be neon-on-black in either mode. |
| **Technical diagrams** | ✅ **Yes, when relational content requires them.** A trust-boundary or control-mapping diagram explains what prose explains badly. Never decorative. |
| **A subtle in-group reference** | ⚠️ **Narrowly.** The rez0 tmux-footer model — neutral to a recruiter, precise to a practitioner. **At most one, never in the primary aesthetic.** Probably omit. |
| **Real live data** | ✅ **Only if genuinely measured.** A build-time last-commit timestamp is information. A live "active" badge is theatre. |

---

## Rejected corporate patterns

The saturation threat has moved. Phase 1's revision found 3 of 5 inspected cybersecurity sites have **no** cyberpunk motifs — and are forgettable for a different reason.

| Element | Observed on | Verdict |
|---|---|---|
| CVSS / severity badges as decoration | bugatsec.dev | ❌ Fine inside a real finding; never as ornament |
| Company logo walls | bugatsec.dev | ❌ Also unavailable to Het |
| Category badges on projects | bugatsec.dev | ❌ Labels carrying no claim |
| Skills as coloured badges | nikki-65 | ❌ The evolved percentage bar |
| Stat counters | meidie | ❌ Het's numbers are small and invite comparison |
| Explicit "Recruiter view" blocks | meidie | ❌ Audience segmentation; layering is better |
| Framework name-drops without applied evidence | both | ❌ |
| Screenshot card grids | all three | ❌ Rejected as the primary index form |
| **Zero first-person voice** | bugatsec.dev | ❌ **The defining failure of this group** |

---

## Rejected AI-aesthetic markers

The most current risk, and the hardest to see from inside.

| Marker | Guard |
|---|---|
| Uniformly confident copy | Required uncertainty on every investigation |
| Symmetrical three-card rows | No card grid as a primary form |
| Gradient-on-dark | Near-monochrome; scarce accent |
| Tidy resolved narratives | `unresolved` is a real, used status |
| "Here's a thing nobody tells you" | Banned construction (`brand/VOICE.md`) |
| Identical section shapes | Required variation in investigation length and shape |
| Decorative abstract imagery | No image without informational purpose |

---

## The one genuine judgment call

**Dark mode as default.**

Arguments for: most practitioners prefer it; it suits long reading; it is what the audience expects.
Arguments against: dark-by-default is the strongest visual signal of category membership, and Phase 1 measured it as near-universal — `rgb(18,19,26)` on zyekh, black on adharvkt.

**Decision: light and dark both supported; neither is the identity.** The identity is typographic. Which mode a visitor sees should not change who Het appears to be — and a site whose personality survives a theme switch has its identity in the right place.

*Default mode deferred to Phase 5.*
