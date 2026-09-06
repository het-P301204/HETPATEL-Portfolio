# Related Work

**Date:** 2026-08-14 (Phase 5B)

---

## Form: a short prose-led list

**Not** three cards, not a grid, not a carousel, not a recommendation widget.

Position: after the foot register, MAJOR space above. The last content on the page before the footer.

```
Related

  Why an allow-list kept failing open            closed · application security
  Notes on normalisation order                   note · 2026-04
```

- Two to four items maximum.
- Title is the link; metadata follows quietly.
- Mixed types permitted — investigations and notes together.
- **Manually curated.** No automatic relation.

---

## Why manual, always

Automatic relation by shared tags produces false relationships. On a site whose premise is intellectual honesty, a "related" link that isn't related is a small but real contradiction — it asserts a connection Het never made.

**Manual curation also means the relationship can be stated.** Where useful, a related item may carry a short clause explaining *why* it is related, which is more valuable than the link itself:

```
  Notes on normalisation order    — where this problem first appeared
```

**This is the strongest available form**, and it costs one sentence.

---

## Alternatives considered

| Option | Verdict |
|---|---|
| Three cards | ❌ Rejected container policy; also implies exactly three exist |
| Grid | ❌ Same |
| Carousel | ❌ Hides content behind interaction |
| "You might also like" | ❌ Recommendation-engine vocabulary; implies automation |
| **Contextual inline links within prose** | ✅ **Preferred where natural** — a link inside the reasoning is stronger than one in a list |
| Chronological "previous / next" | ◐ Considered. Rejected — chronology is not a meaningful relationship between investigations, and it would create obligatory links where no relationship exists |
| Thematic grouping by domain | ◐ At volume, the domain filter serves this better |

**Inline contextual links are preferred over the list.** If Het can reference a related investigation *inside* the reasoning — "this is the same ordering problem I hit in X" — that is a genuine relationship, stated in context. The list is the fallback for relationships that don't fit in prose.

---

## When nothing is related

**Nothing renders.** No heading, no empty region, no "no related work".

At launch, with three investigations, most pages will have no related section. That is correct.

---

## Growth

| Investigations | Behaviour |
|---|---|
| 1–3 | Usually nothing. Occasional single link |
| 5–10 | Genuine relationships begin to exist; 1–2 links typical |
| 25+ | 2–4 links; domain filtering carries broader discovery |

**The section never grows beyond four items.** More than that is a browse surface, and browsing belongs to the index.
