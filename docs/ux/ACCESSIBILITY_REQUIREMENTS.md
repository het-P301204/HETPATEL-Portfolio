# Accessibility Requirements

**Date:** 2026-08-14 (Phase 3) · UX requirements, not implementation.

**Governing principle:** the site must be fully comprehensible as a static document. Every requirement below follows from that, and it also happens to be the strongest guarantee that the brand's premise — reasoning made visible — survives any delivery condition.

---

## 1. Semantic structure

- One `h1` per page; heading levels never skipped for visual effect.
- Investigations use real heading hierarchy — the movements in `INVESTIGATION_MODEL.md` map to headings where headings are used at all.
- Lists are lists; tables are tables with proper headers.
- Landmarks: header, nav, main, footer.
- Status and date are **text**, never colour or icon alone.

**The critical rule: an investigation must be readable as a linear document.** Reasoning is prose. If it depends on layout to make sense, it has failed as writing before it fails as accessibility.

---

## 2. Keyboard navigation

- Every interactive element reachable and operable by keyboard.
- Visible focus states — **never** `outline: none` without a replacement.
- Logical tab order matching reading order.
- Skip-to-content link.
- Filters (when they exist) fully keyboard-operable.
- No keyboard traps.

---

## 3. Screen readers

- Meaningful link text. Never "click here" or a bare "read more" — the link text must identify the destination.
- Alt text on every image. Screenshots described by what they show, not "screenshot".
- Decorative images marked as such.
- Status changes announced when filtering.
- Metadata (status, domain, date) available to assistive technology in the same terms sighted users see.

**Specific to this site:** *"what I couldn't determine"* is required content, not an aside. It must never be marked up as supplementary, hidden behind disclosure, or visually de-emphasised to the point of being skipped. It is part of the argument.

---

## 4. Reduced motion

- `prefers-reduced-motion` fully honoured.
- **No information conveyed by motion.** If something animates, it must also be true statically.
- No autoplay of any kind.
- No parallax, no scroll-hijacking, no scroll-triggered content that fails without JavaScript.

**Per `HOMEPAGE_INFORMATION_ARCHITECTURE.md` §6: weak information architecture may not be rescued by animation.** If the sequence only works when animated, the sequence is wrong.

---

## 5. Readable content

- Body text at a comfortable reading measure — investigations are long-form and this is a reading site.
- Sufficient contrast (specific ratios in Phase 5; the requirement is recorded now).
- Text resizable to 200% without loss of function.
- No text embedded in images.
- Line height suited to sustained reading.

---

## 6. Progressive disclosure — constrained

Permitted for: long artifact lists · optional supplementary detail · filter controls at low volume.

**Forbidden for:**
- The reasoning
- **"What I couldn't determine"**
- Status, dates, or role descriptions
- Contact details
- Anything a recruiter needs in the first 10 seconds

**Rule:** progressive disclosure may hide *detail*, never *meaning*. Hiding a limitation behind a toggle defeats the purpose of stating it.

---

## 7. Non-visual comprehension

The test: **read the page aloud with no styling.** Does it still communicate?

| Element | Non-visual equivalent |
|---|---|
| Status | Text — "open", "closed", "unresolved" |
| Domain | Text |
| Origin (professional / self-initiated) | Text |
| Artifact presence | A described link |
| Artifact absence | Nothing — silence is correct |
| Investigation structure | Heading hierarchy or prose flow |
| Related items | Descriptive links |

**Nothing in the design may depend on colour, position, or iconography to carry meaning.** This constraint is compatible with the brand rather than in tension with it — a site about reasoning should survive being read aloud.

---

## 8. Mobile-specific

- Touch targets adequately sized.
- No hover-dependent information — hover does not exist on touch.
- Filters usable one-handed.
- Long investigations navigable without excessive scrolling — in-page anchors where a piece is long enough to warrant them.

---

## 9. Testing requirements

Before launch:
1. Full keyboard-only traversal.
2. Screen reader pass on the homepage, one investigation, and the index.
3. Rendering with CSS disabled.
4. Rendering with JavaScript disabled — **core content must remain readable**.
5. `prefers-reduced-motion` enabled.
6. 200% text zoom.
7. Mobile at 375px.

**Item 4 is a hard requirement, not aspirational.** If an investigation cannot be read without JavaScript, the architecture is wrong. Content is prose and metadata; neither needs a runtime.

---

## 10. Why this is a brand requirement, not a compliance checkbox

The site's premise is intellectual honesty. A site claiming rigour that fails a keyboard traversal, or hides its stated limitations behind a toggle, contradicts itself in a way a visitor can detect.

There is also an audience argument. Journeys 2 and 4 — hiring managers and GRC professionals — are populations where accessibility awareness is professionally normal. Getting this visibly right is consistent with the positioning; getting it wrong is a small, avoidable contradiction.
