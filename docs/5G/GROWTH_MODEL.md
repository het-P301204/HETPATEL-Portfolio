# Growth Model

**Date:** 2026-08-15 · **Structural. The 3-item and 30-item index states were rendered in 5F; nothing in 5G was.**

---

## The four states

| | LAUNCH | +6 months | +12 months | MATURE |
|---|---|---|---|---|
| Investigations | **3** | 5 | 10 | 20+ |
| Notes | **0** | 2 | 5 | 10+ |
| Artifacts | 0–2 | 2–4 | 5–8 | 10+ |
| GitHub | thin, rebuilding | a few real repos | 5–10 | 15+ |
| **Nav items** | **2** | **3** | 3 | 3 |
| Index grouping | no | no | **yes** | yes |
| Notes year separators | — | no | no | **25+** |
| Pages | 4 | 5 | 5 | 5 |

*(Nav items excludes the name.)*

---

## LAUNCH — 3 investigations, 0 notes

**Navigation: `Het Patel · Investigations · About`.**

This is the state G-1 corrects. Notes is **absent from navigation** because zero notes exist —
`NOTES_LAYOUT.md` has said *"0 notes → no notes section anywhere"* since 5B, and every prototype
through 5F violated it.

| Surface | State |
|---|---|
| Home | Complete. Six positions, all populated |
| Investigations | 3 rows, 1.8 screens — MEASURED in 5F. Reads as a complete short record |
| Investigation | Complete |
| About | Complete |
| Notes | **Does not exist** |

**Nothing anywhere says "coming soon", and nothing renders empty.** The site is small and looks
deliberately small.

**The one visible thinness** is that all three investigations read `self-initiated`, so `origin`
conveys nothing (5F finding I-2). No design fixes it; one professional investigation does.

---

## +6 MONTHS — 5 investigations, 2 notes

**The first structural change in the site's life: `Notes` enters the navigation.**

That is the *only* change. No page is redesigned, no component is added, no layout shifts. The index
gains two rows. The homepage may surface a note.

**A two-note Notes page is honest** — `FIELD_NOTES_MODEL.md` Scenario A (3–8 notes/year) is
explicitly "sparse but honest — acceptable", and inline rendering means two notes is a short page
rather than a page with two cards on it.

---

## +12 MONTHS — 10 investigations, 5 notes

**Index grouping activates** (5F finding I-3, at ~10–12). Group headings are inserted above rows
that do not themselves change — the only structural addition across the whole 3→30 range.

The index stops being a list and becomes an argument about areas of competence. **This is the moment
the site starts making a claim it cannot make at launch.**

Still no filters, no search, no year separators on notes.

---

## MATURE — 20+ investigations, 10+ notes

Index: grouped, ~4.1 screens at 20 items (MEASURED 5F). Notes: year separators at 25+.
**Still no filtering, still no search.**

Artifacts: at 16+ an artifact index becomes justified — **but as a filtered view over
investigations, not a separate section.** Even at 40 artifacts there is no "Projects" page. The
relationship stays intact, so the brand never drifts toward artifact-counting.

---

## What never changes between launch and mature

- Four or five pages. Never six.
- Two or three nav items. Never four.
- The row: title · framing · record.
- The investigation: question → reasoning → finding → limits.
- The note: date + observation.
- One stylesheet, one measure, one left edge, one footer.
- No filters below 30. No search below 50.
- **Sections disappear rather than emptying.**

**Two structural events in the site's entire growth curve:** Notes enters navigation, and the index
gains grouping. Everything else is data.

---

## The failure this model prevents

The default early-career portfolio ships with every section it *intends* to fill — Projects, Blog,
Skills, Certifications, Talks — and most of them stay thin. Each empty section is a promise that
visibly fails.

**This model ships fewer surfaces than it has content for, and adds them when the content arrives.**
The cost is that the site looks small at launch. The benefit is that nothing on it is a promise.

---

## Where the model is weakest

**Notes at zero for a long time.** If Het never writes a note, the site permanently has four pages
and the field-notes mechanism — the one designed to keep the archive accruing cheaply under low
volume — never activates. The design handles this gracefully (nothing renders), but it means the
*only* things that ever change are investigations, which are expensive.

**No design fixes this.** It is the same standing exposure 5D identified for the revision register:
the mechanisms are built and they depend entirely on Het using them.

---

## Unvalidated

The +6, +12 and mature states were **not rendered in 5G.** The 3-item and 30-item index states were
rendered in 5F and hold. **The Notes page has never been rendered at any volume**, so the claim that
two notes reads as honest rather than empty is reasoning, not observation.
