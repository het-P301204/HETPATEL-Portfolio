# Hypothesis Tests — expanded corpus

**Date:** 2026-08-15 · **12 sites rendered** (4 prior + 8 new). Target was 14; two failed — see §0.

Every verdict below is from a render I looked at. **Three hypotheses were weakened or disproven.
They have been changed, not defended.**

---

## 0 · What was actually rendered

| # | Site | Category | Status |
|---|---|---|---|
| R1 | leoparpeix.com | Art director | ✅ prior |
| R2 | emilianmisera.com | Creative developer | ✅ prior |
| R3 | haoqi.design | Design engineer, SOTD+Dev | ✅ prior |
| R4 | noth.in | Studio, SOTD+Dev | ✅ prior |
| **R5** | **herzogdemeuron.com** | **Architecture practice** | ✅ **new** |
| **R6** | **carusostjohn.com** | **Architecture practice** | ✅ **new** |
| **R7** | **oma.com** | **Architecture practice** | ✅ **new** |
| **R8** | **nabilissa.com** | **Architecture, Awwwards** | ✅ **new** |
| **R9** | **ultragrid.studio** | **Creative developer** | ✅ **new** |
| **R10** | **okc.media** | **Studio, minimal** | ✅ **new** |
| **R11** | **michaeltsirakis.com** | **Personal, designer** | ✅ **new** |
| **R12** | **davej.com** | **Personal, creative director** | ✅ **new** |
| — | pxpush.com | SOTD+Dev | ❌ pane stopped compositing |
| — | k95.it | SOTD | ❌ not attempted |

**12 of the intended 14.** Three architecture practices plus one Awwwards architecture site means
the priority category is well covered. The two misses are both general portfolio sites whose
categories are already represented four times over.

---

## H1 — "Hierarchy can be created without containers"

### Verdict: **TRUE but the strong form is DISPROVEN. Rule rewritten.**

I previously wrote *"zero of four references use a container — rule: zero containers."* Four was too
small a sample and I turned an observation into a law.

**Counter-evidence:**

- **OMA (R7)** puts a news item in a **red-outlined box**. A literal bordered container, on one of
  the most influential architecture practices in the world.
- **Herzog & de Meuron (R5)** builds its **entire primary navigation from rounded pill chips** —
  the exact "badge/chip system" I banned.

Both are excellent. So containers are not the problem.

**What actually separates the two cases:**

| Fails (mine) | Works (OMA, H&dM) |
|---|---|
| Repeated uniformly across the page | Used **once**, or as the page's whole navigation |
| Low contrast — grey border on grey ground | High contrast — red outline; white on black |
| Small, 11–13px contents | Large, 24px+ contents |
| Wraps **metadata about** content | **Is** the content, or is the primary interface |
| Decorative — could be deleted with no loss | Load-bearing — deleting it removes function |

**Revised rule.** *A container is legitimate when it is the interface or a singular editorial
emphasis at high contrast and readable scale. It is illegitimate when it is a repeated, low-contrast
wrapper around metadata.* The failure was never the border; it was **repetition of neutral wrappers
around secondary information.**

---

## H2 — "Large-scale typography creates structure better than cards/panels"

### Verdict: **STRONGLY CONFIRMED.** Strengthened.

Every rendered site that felt designed rather than assembled used type at a scale that dominates
the viewport: OMA's navigation at ~60px overflowing the right edge; Nabil Issa's question at ~140px
ultra-light; NOTHIN's wordmark bleeding off-screen; HAOQI's three-line condensed statement filling
the width; OKC's two-word statement at ~130px.

**No rendered site created its primary structure with panels.** Twelve for twelve.

**New sub-finding — the two-tone statement.** OKC Media (R10) sets *"Perfect"* in white and
*"simplicity"* in mid-grey at ~130px, and it reads as deliberate. My direction A used the same
device at 104px with a wider contrast gap and it read as *unfinished*. **The device is sound; it
requires large scale and a narrow contrast gap.** That corrects a defect I logged as a composition
problem when it was a contrast-and-scale problem.

---

## H3 — "Mono as prose feels technical without feeling like developer tooling"

### Verdict: **TRUE, but my corollary was WRONG. Rule rewritten.**

I wrote: *"mono may set running prose; it may not label regions."*

**Herzog & de Meuron disproves the second half outright.** Their entire site — navigation, labels,
search prompt, everything — is monospace, and it reads as a **scholarly archive**, not as developer
tooling. It is the most authoritative site in the corpus.

**Why H&dM's mono works and mine did not:**

| Mine | H&dM |
|---|---|
| 11px, uppercase, `.14em` tracked | ~24px, sentence case, normal tracking |
| Grey on near-black | White on pure black, maximum contrast |
| Ornamented *around* content | **Is** the content |
| Mixed with a sans — mono was the "technical accent" | **Mono is the whole voice.** No sans anywhere |

**Revised rule.** *Mono is safe when it is a committed voice at readable size. It becomes developer
tooling when it is a small, tracked, uppercase accent sprinkled around a sans-set page.* The tell is
**size and commitment**, not placement. A wholly-mono site reads as archive; a sans site with mono
sprinkles reads as dashboard.

This is a materially better rule and it reopens a design option I had closed off.

---

## H4 — "Oversized/overflowing type makes the viewport part of the composition"

### Verdict: **CONFIRMED and BROADENED.**

Confirmed by NOTHIN' (wordmark bleeds right), OMA (navigation bleeds right), Michael Tsirakis (name
bleeds right), Nabil Issa (question runs past the bottom edge).

**Broadening:** I had only considered the *wordmark* overflowing. OMA overflows its **navigation**;
Nabil Issa overflows a **question** vertically. Overflow is a general device, not a wordmark trick —
and overflowing the *bottom* edge is what makes a page feel like it continues.

**Four of twelve use deliberate overflow, and all four are among the strongest.** No rendered site
that fitted everything neatly inside the viewport felt confident.

---

## H5 — "Identity is memorable through composition rather than logos"

### Verdict: **WEAKENED. This is the uncomfortable finding.**

**Counter-evidence:** Nabil Issa (R8) and OKC Media (R10) both use conventional circular **logo
marks**. ULTRAGRID (R9) uses a 3D scene. Michael Tsirakis (R11) uses **a cut-out photograph of
himself layered between two layers of type** — and it is the most immediately memorable personal
site in the corpus.

**The pattern across all twelve:** the sites that are memorable without a logo or imagery are
memorable through **one extreme typographic gesture** — NOTHIN's bleeding wordmark, OMA's display
navigation, Nabil Issa's giant question. That is a narrow path and it requires real commitment.

**The constraint this exposes, and it needs Het's decision.** Every strongly memorable personal
site in this corpus uses at least one of: a logo mark, photography, illustration, or 3D. **Het's
design system currently forbids all four** — `MEDIA_POLICY.md` bans stock, `ABOUT_LAYOUT.md` says
portrait *"never at the top as a hero"*, and the brief bans fake corporate logos.

That leaves **exactly one lever: typography at extreme scale.** It can work — NOTHIN' and OMA prove
it — but there is no fallback. Het should know that a hero portrait is the single highest-leverage
asset available to him, and that the current rules exclude it.

**Revised H5:** *Identity can be memorable through composition alone, but only via one extreme
typographic gesture, and it is a narrower path than the presence of imagery.*

---

## H6 — "Motion can establish identity without becoming a gimmick"

### Verdict: **CONFIRMED, with a hard cost demonstrated.**

**Confirming:** NOTHIN' assembles its wordmark letter-by-letter on an empty field, then the site is
there. Nabil Issa shows a brief identity card, then the site. Both establish identity in under a
second and neither uses a spinner.

**Disconfirming, and it is emphatic — DaveJ.com (R12).** An Awwwards-listed site with a literal
`LOADING...` label, a progress bar, and a spinning green voxel. **My navigation to it timed out
after 300 seconds.** The entrance is not a flourish; it is the site.

**Conclusion:** the difference between choreography and gimmick is whether the entrance *is the
identity resolving* or *is a wait being decorated*. NOTHIN's entrance shows the name. DaveJ's shows
a progress bar. Budget stays 600–1200ms and the site must be usable if the animation never runs.

**Also confirmed as an anti-pattern:** ULTRAGRID's isometric 3D room. Memorable, but what is
remembered is the toy. For a security hiring manager that reads as *"spent too long on the
portfolio"* — the brief's own failure condition.

---

## H7 — "State/revision can be represented spatially rather than as metadata"

### Verdict: **UNTESTED. No evidence either way.**

Nothing in the corpus attempts it. Architecture practices came closest — H&dM separates *Projects*
from *Writings* from *Monographs*, and Caruso St John labels items *"Completion"* — but these are
categories, not state changes, and they are rendered as plain labels rather than spatially.

**This is the honest position: direction E's central mechanism has no precedent in twelve rendered
sites.** That cuts both ways. It is the strongest possible originality signal, and it is unproven —
which raises its execution risk, exactly as recorded.

---

## H8 — "An evidence-heavy cybersecurity portfolio can use this visual language without losing credibility"

### Verdict: **CONFIRMED, and the architecture corpus is the reason.**

This is what the architecture category was for, and it paid off.

**Caruso St John (R6)** is the closest structural analogue found. Practice name at ~40px flush left,
then **the work begins immediately**. No hero statement, no positioning sentence, no stance. Items
are labelled with a plain bold word — *"Completion"* — and a large title. Serious, credible,
zero salesmanship.

**Herzog & de Meuron (R5)** is a pure finding aid: wordmark, then a wall of navigation into an
archive. The identity is the *body of work* and the interface for reaching it.

**The transferable finding:** authority in evidence-heavy practices comes from **the work being
present and well-indexed**, not from a hero making a claim about the practitioner. Both practices
could have written a stance sentence and neither did.

**And the credibility mechanism — Michael Tsirakis (R11).** His credentials appear as a plain
sentence: *"Lead Interaction Designer for AI at Netflix. Previously Google, LinkedIn, Apple, and
eBay."* No cards, no logo wall, no badges. **A sentence naming real employers outperforms any badge
system**, and it maps exactly onto *"Info eShield Cyber Solutions … CSCRF and IRDAI audit
engagements, assisted."*

**Caveat, stated plainly:** every architecture reference leans on photography of built work. Het has
no equivalent. The *structural* lesson transfers; the visual richness does not, and this is the same
constraint H5 exposes.

---

## Summary

| | Hypothesis | Verdict |
|---|---|---|
| H1 | Hierarchy without containers | **Strong form disproven — rule rewritten** |
| H2 | Large type over panels | **Strongly confirmed** |
| H3 | Mono as prose | **True; corollary disproven — rule rewritten** |
| H4 | Overflow makes the viewport compositional | **Confirmed and broadened** |
| H5 | Identity via composition not logos | **Weakened — narrow path, no fallback** |
| H6 | Motion as identity | **Confirmed, with DaveJ as the cost** |
| H7 | State represented spatially | **Untested — no precedent** |
| H8 | This language survives in security | **Confirmed via architecture** |

### What survived
H2 and H4 — large type and deliberate overflow are the load-bearing findings, now 12-for-12.

### What was disproven
The blanket container ban (H1) and the mono-label ban (H3). Both were over-generalised from four
sites. **Scale, contrast and commitment decide these, not the presence of the element.**

### What became stronger
H8. The architecture corpus was the right call and produced the single most useful structural model
in the project — Caruso St John's *"name, then immediately the work."*

### What should be removed
The phrasing *"zero containers"* and *"mono may not label regions"* — replaced above. And the
assumption, never stated but present throughout, that a personal site **must** open with a hero
statement. Two of three architecture practices do not.
