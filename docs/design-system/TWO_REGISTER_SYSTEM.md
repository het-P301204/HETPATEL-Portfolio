# Two-Register System

**Date:** 2026-08-14 (Phase 5A) · The central design problem.

---

## 1. ⚠️ Contradiction found and resolved

**The Phase 5A brief states** Register B (apparatus) contains: *date, status, **uncertainty**, asides, revisions, metadata.*

**Phase 4 established the opposite for uncertainty.** `design/INVESTIGATION_EXPERIENCE.md` (Approach B) places limitations in the **main column**, "always in the same position." `design/DESIGN_PRINCIPLES.md` §3 states uncertainty is "content, not a caveat… set in the same type as the body. **Not de-emphasised, not greyed, not smaller.**"

**These cannot both hold.** The apparatus is by definition smaller, denser and subordinate. Putting the uncertainty statement there demotes the site's most distinctive move to metadata.

**Recommended resolution — split the concept, because it is two things:**

| | Lives in | Form |
|---|---|---|
| **Uncertainty as content** — *"I couldn't establish whether this was a misconfiguration or intentional"* | **Main column**, final movement | A sentence, full body type |
| **Uncertainty as state** — `unresolved` | **Apparatus** | A metadata value |

The apparatus records *that* an investigation is unresolved. The prose says *what* could not be determined. Both are needed; only one is an argument.

**Not silently applied.** If Het prefers the brief's version, the consequence is that VP-4 and Phase 4's Principle 3 must be formally withdrawn.

---

## 2. Three conceptual implementations

### Model A — Persistent side column
Apparatus occupies a fixed narrower column beside the prose for the full length of the page.

| | |
|---|---|
| Readability | Good — prose column unaffected |
| Personality | **Low** — reads as a standard documentation sidebar |
| Hierarchy | Clear but static |
| Desktop | Strong |
| Mobile | **Weak** — becomes a stacked block, losing adjacency entirely |
| Accessibility | Good if source order is correct |
| Density | Apparatus looks sparse when it holds only four fields |
| Scalability | Good |
| Genericity risk | **High** — this is the docs-site sidebar |
| Decorative risk | **High** — an under-filled column is a styled gutter |
| Tufte resemblance | Low |
| Complexity | Low |

### Model B — Adjacent margin notes
Each apparatus item sits in the margin beside the paragraph it relates to.

| | |
|---|---|
| Readability | Good |
| Personality | High — feels like a working document |
| Hierarchy | Excellent — adjacency encodes relationship |
| Desktop | Strong |
| Mobile | Folds inline; workable |
| Accessibility | Requires careful source ordering |
| Density | Good |
| Scalability | Good |
| Genericity risk | Low |
| Decorative risk | Moderate |
| **Tufte resemblance** | **Very high — directly prohibited by Phase 5A constraints 22 and 24** |
| Complexity | Moderate |

**Rejected on constraint**, not on merit. It is the strongest pure expression of the idea and it is the one execution the project is explicitly barred from reproducing.

### Model C — Distributed apparatus ⭐
Apparatus is **not a column.** It appears in two places: a dense **masthead block** at the head of the investigation carrying fixed metadata, and occasional **inline insets** within the prose carrying asides and revisions.

| | |
|---|---|
| Readability | **Excellent** — prose column is uninterrupted; insets are rare |
| Personality | High — the masthead is distinctive and the insets read as marginalia without margins |
| Hierarchy | Strong — register carried by type, not position |
| Desktop | Strong |
| **Mobile** | **Identical in structure.** Nothing reflows, nothing folds, nothing is lost |
| Accessibility | **Strongest** — source order is reading order at every breakpoint |
| Density | Masthead is genuinely dense; insets are sparse by nature |
| Scalability | Excellent |
| Genericity risk | Low–moderate |
| Decorative risk | **Lowest** — a masthead with four fields is full; a column with four fields is empty |
| Tufte resemblance | **Low** |
| Complexity | **Lowest** — no column management, no reflow logic |

---

## 3. Selected: Model C — Distributed apparatus

**Why:**

1. **It solves the emptiness risk**, which `design/PHASE4_RECOMMENDATION.md` named as the biggest creative risk with a stated exit condition. A masthead holding status, date, domain and origin is *full* at launch. A side column holding the same four fields is 90% empty space — visibly a styled gutter.
2. **It avoids the Tufte prohibition** without abandoning the idea. The register distinction is typographic and structural rather than columnar.
3. **Mobile is not a transformation.** Model C is already the mobile layout, so there is no degraded state and no hidden content.
4. **It is the least complex** — a real consideration given the near-zero-JavaScript budget.

**What is lost:** the adjacency of Model B, where an aside sits precisely beside the sentence it qualifies. Inline insets approximate this but interrupt the column rather than sitting beside it. **This is a genuine cost, accepted deliberately** because the constraint against reproducing a recognisable margin-note implementation is binding.

---

## 4. Specification

**Relative visual weight:** apparatus reads at roughly **60–70% of the prose's presence** — smaller type, tighter leading, lower contrast. Never below the point where it becomes hard to read; it is information, not fine print.

**Typography relationship:** sans against serif. This is the primary distinction and must do most of the work alone. See `TYPE_CONTRAST.md`.

**Spacing relationship:** the masthead sits closer to the title than to the prose — it belongs to the heading, not to the argument. Inline insets carry more space above than below, attaching them to what precedes.

**Alignment:** everything shares the prose column's left edge. **No indentation, no hanging, no offset.** A single left alignment is what keeps the page composed rather than composed-looking.

**Density:** masthead is deliberately dense — a compact run of label/value pairs. This density is the contrast with the prose's openness, and it is the visual signature of the whole system.

**Position:** masthead immediately after the title. Insets where relevant. Artifacts after the final prose movement.

**Responsive transformation: none.** Structure is constant at all widths; only measure and scale adjust.

---

## 5. Failure conditions

| Failure | Detection | Response |
|---|---|---|
| Masthead becomes a card | It has a border, background, or radius | Remove them — type and space only |
| Insets become callouts | They acquire icons, tints, or rules | Remove; they are prose in another register |
| Apparatus dominates | Reader notices metadata before the question | Reduce scale and contrast |
| Apparatus is inert | It never carries anything beyond baseline metadata | The Phase 4 exit condition applies — review at six months |
| It resembles a docs sidebar | Model A has crept back | Return to distributed placement |
