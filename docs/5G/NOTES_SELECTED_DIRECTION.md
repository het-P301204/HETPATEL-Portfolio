# Notes — Selected Direction

**Date:** 2026-08-15 · **Direction C — THE INLINE INDEX** (Phase 5B, retained)
**Built as `prototype/notes.html`. NOT visually validated.**

---

## The idea

> **The index is the content.** There is no post to click into, so there is nothing to be a feed of.

---

## The unit

```
2026-06-11
Why do allow-lists so often normalise after matching rather than before? I have
now seen it twice and I do not know whether it is a common default, a performance
argument, or a coincidence. Worth finding out.

2026-08-02 — followed up. Not resolved, but narrowed: on a clean install the
ordering is the stock default, so nobody chose it in the case I looked at.
Why an allow-list kept failing open.
```

| Element | Register |
|---|---|
| Date | sans, `.84375rem`, muted, tabular. **Carries the permalink** |
| Body | serif, body size, primary. Prose — the same reading register as an investigation |
| Supersession | sans, `.9375rem`, secondary, dated |

**Nothing else.** No title, no status, no origin, no apparatus block, no revision register, no
artifacts, no related-work section, no read time, no tags.

---

## Why the apparatus scales to a date

This is the load-bearing decision and it is 5B's.

An investigation carries `Status · Origin · Started · Published` because it has a lifecycle, a
provenance and a duration. **A note has none of these.** It was written once, it is almost always
self-initiated, and it has no state to be in.

`NOTES_LAYOUT.md` names the failure precisely: *applying the full investigation apparatus to a
two-sentence note would be the decorative-metadata failure.* A note with four metadata fields and
forty words of body is a form, not an observation.

**The asymmetry between the two types is the point, not an inconsistency.**

---

## Body size — a deliberate departure from the index pattern

The note body is set at **full body size in the reading register**, not at the reduced `1rem` used
for the index framing line in 5F.

**Reason:** in the investigation index the framing sentence is *about* a piece of work and subordinate
to its title. **Here the body IS the work.** Setting it smaller would say a note is a lesser class of
thinking, and `NOTES_LAYOUT.md` §Geometry makes the same argument about width: *"narrowing notes
would signal they are a lesser class."*

Same measure, same size, same colour as investigation prose. **A note is short, not minor.**

---

## Spacing — OPEN between notes

The one list on the site using OPEN rather than NORMAL between items.

**Reason:** every other list holds *rows in a record* — homogeneous items in one structure. This
holds *separate thoughts*. At NORMAL, six notes would run together into one page of prose with dates
in it, which is precisely how a stream becomes indistinguishable from an article.

**Unvalidated, and it is the highest-risk value in the phase.** OPEN is 2.2× base. Six notes ×
OPEN may read as six islands of nothing. The alternative — a value between NORMAL and OPEN — was not
tested. **A resumed session should render this first.**

---

## Supersession, not revision

A note that turns out to be wrong is **not deleted and not edited.** It gains a dated line beneath it.

```
2026-05-19 — superseded. This is right about the note and wrong about the reason.
```

**No strike-through, no "correction" label, no warning colour, no reduced opacity.** The date does
the work, exactly as it does in the investigation revision register.

**This is deliberately a different mechanism from the revision register**, and the distinction is
worth stating because it would be easy to collapse them:

| | Investigation | Note |
|---|---|---|
| Mechanism | **Revision** — the conclusion changed | **Supersession** — the observation was superseded |
| What happens to the original | Rewritten; the register records what changed | **Left exactly as written** |
| Why | An investigation is an argument, and arguments get better | A note is a record of what was noticed *at that time* |

Editing a note to be correct would destroy the thing that makes it worth keeping: evidence of what
Het thought in June.

---

## The promotion path

A note that asks a question links forward to the investigation that later answers it. The note
**stays**.

`FIELD_NOTES_MODEL.md` §4: *the pair — question then answer, dated months apart — is more credible
than the investigation alone, because it shows the question preceded the answer.*

This is the strongest single argument for the type existing, and the prototype exercises it: the
2026-06-11 note asks why allow-lists normalise after matching, and links forward to the investigation
that narrowed it.

**No conversion UI.** Promotion is an editorial act, not a feature.

---

## Growth

| Notes | Behaviour |
|---|---|
| **0** | **No Notes page. No Notes navigation item.** See G-1 |
| 1–2 | Page exists; homepage may show them |
| 3–15 | Full inline index |
| 25+ | Year separators. **Still no filtering** |
| 50+ | Domain filter, only if domains were used consistently |

---

## What remains unvalidated

Everything visual, and specifically:

1. **Does an inline index of six notes read as a record or as a feed?** The central question. Untested.
2. **Is OPEN the right gap?** Untested, and the value most likely to be wrong.
3. **Does the supersession line read as honesty or as clutter?** Untested.
4. **Does a full-body-size note body make the page feel like an article** rather than a set of
   observations? Untested, and it is the direct risk of the size decision above.
