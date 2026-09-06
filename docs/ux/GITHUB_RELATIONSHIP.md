# GitHub Relationship

**Date:** 2026-08-14 (Phase 3)

**Constraint from Het:** the current profile is temporary and will be rebuilt within 2–3 days. Design for both states; build around neither.

---

## 1. Role

**GitHub is an artifact-level evidence channel. It is not a content type, not a navigation item, and not a section.**

| Candidate role | Verdict |
|---|---|
| Primary | ❌ Makes repository count the metric — the comparison Het loses today and does not need later |
| Secondary | ❌ Still implies a section that is empty now |
| Contextual | ⚠️ Partly — a profile link belongs in About and the footer |
| **Artifact-level** | ✅ **Correct.** Repositories are artifacts; artifacts attach to investigations |
| Separate destination | ✅ Also true — it is an external site, not a mirror |

**Two consequences:** no commit graph, no contribution heatmap, no repository grid, no "Projects on GitHub" section. And no live GitHub API integration for its own sake — see §4.

---

## 2. Why not more prominent

Three independent reasons, all from evidence:

1. **Today it is a net negative.** The audit found zero verified original repositories, two unmodified forks — one a stealth keylogger — and one repository whose provenance is unresolved. Linking prominently routes a reader from a credible professional story to a profile that contradicts it.
2. **Even rebuilt, prominence invites a losing comparison.** The peer portfolio examined in Phase 1 has eight deployed projects with live demos and a published package. A GitHub-forward site asks to be measured on that axis.
3. **It contradicts the brand.** "Reasoning, shown" is the premise. A repository grid shows output, not reasoning — and output is the axis on which Het is currently weakest.

---

## 3. Coherence in both states

| | Today (0 verified original) | Future (10–40 repositories) |
|---|---|---|
| Profile link | About + footer, plain text | Unchanged |
| Repositories | None appear — nothing is missing | Appear as artifacts inside investigations |
| Artifact index | Does not exist | Appears above ~15 artifacts, as a filtered view |
| Homepage | No GitHub presence | Still none directly — reached via investigations |
| Structural change needed | — | **None** |

**This is the property that mattered most in concept selection.** The site is honest and complete at zero repositories, and unchanged in architecture at forty. Growth is a data change.

---

## 4. Live API integration — deferred, and probably declined

| Use | Benefit | Cost | Verdict |
|---|---|---|---|
| Last-commit timestamp on an artifact | Genuine freshness signal | Build-time fetch, caching, failure handling | ⚠️ Possible at build time only |
| Repository description sync | Avoids drift | Two sources of truth for the same text | ❌ Write it once, on the site |
| Star / fork counts | — | Popularity as a proxy for quality | ❌ **Banned** — an unverifiable metric, and Het's counts are zero |
| Contribution graph | — | Measures the wrong thing; broadcasts idleness when idle | ❌ **Banned** (decision D-010) |
| Language breakdown | — | Decorative | ❌ |

**Recommendation: no client-side GitHub API calls.** If freshness is ever wanted, fetch at build time and cache. This keeps the site fast, avoids rate limits and API keys, and removes a runtime dependency on a third party — consistent with treating the site as a security engineering artifact.

**Note:** a status indicator must reflect a genuinely measured condition or it is theatre. A build-time timestamp qualifies; a live "active" badge does not.

---

## 5. Prerequisites before any prominent link

From the audit, all still outstanding:

1. **Resolve `PingMaster` provenance.** It contains the `gping` workspace, man page and original README. Either delete it, or convert it to a proper fork with attribution and the MIT licence restored.
2. **Remove or unfork `pounce-keys`** — the stealth-keylogger fork. Highest severity against the GRC audience.
3. **Remove or unfork `V15.55-portfolio`** — another person's portfolio, still pointing at their live site.
4. **Rewrite the profile bio** to the precision standard.

**Until 1–3 are done, the site should link to GitHub only from About, plainly, without emphasis.**

---

## 6. The relationship in one line

> The website explains the thinking. GitHub holds the code. Neither duplicates the other, and the site never becomes a mirror of the profile.
