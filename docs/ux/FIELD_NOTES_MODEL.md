# Field Notes Model

**Date:** 2026-08-14 (Phase 3)

---

## 1. Definition

> **A field note is one observation, written once, that does not need working out.**

The distinction from an investigation is **not length** — it is whether reasoning was required.

| | Investigation | Field note |
|---|---|---|
| Trigger | Something needed working out | Something was worth recording |
| Reasoning | Required | Not required |
| "What I couldn't determine" | Required | Not applicable |
| Conclusion | Reached, or explicitly not | Often none |
| Typical length | 400–2,000 words | 50–400 words |
| Can be inconclusive | Yes, explicitly | Not a meaningful concept |

**Field notes exist so small work has an honest home.** Without them, Het faces a choice between inflating a small observation into an "investigation" or not publishing it. Both are bad. This is the single most important reason the type exists.

---

## 2. Why not "blog"

Forbidden by brief §35, but the substantive reason is structural: **a blog is a promise of cadence.** An open-ended blog with three posts and no fourth reads as abandonment. Het's writing capacity is unverified, so a format that implies a schedule is a bet against unknown odds.

A field note promises nothing. A collection of eleven notes over a year is a record, not a stalled publication.

---

## 3. Legitimate types

Each with a fictional illustrative title, clearly marked.

| Type | Example *(fictional)* |
|---|---|
| Technical observation | *"Two scanners disagree on the same TLS configuration"* |
| Security lesson | *"Evidence that satisfies one framework often fails another"* |
| Experiment result | *"Rate limiting behaved differently under parallel requests"* |
| Short research finding | *"This parser accepts a header the specification forbids"* |
| Design decision | *"Why I stopped separating approach from reasoning in writeups"* |
| Tool comparison | *"Where two enumeration tools produce different results, and why"* |
| Failed approach | *"Trying to correlate logs by timestamp, and why it didn't work"* |
| Question worth investigating | *"Why do allow-lists so often normalise after matching?"* |

**"Failed approach" and "question worth investigating" are the most valuable types.** Nothing in the Phase 1 corpus published either. They are honest, cheap to write, and directly express the brand — and the second doubles as a visible pipeline of future work without promising anything.

---

## 4. Relationships

```
FIELD NOTE
├── standalone                          most common
├── attached to an investigation        context or aside
├── promoted → becomes an investigation  when it turns out to need working out
└── spawned from an investigation        a detail that deserved its own note
```

**Promotion.** A note asking a question may later become an investigation answering it. When that happens the note **stays** and links forward. The pair — question then answer, dated months apart — is more credible than the investigation alone, because it shows the question preceded the answer.

**Spawning.** One investigation may produce several notes: a tool comparison made along the way, a dead end worth recording separately.

**Neither is required.** Most notes will be standalone, and that is the expected case.

---

## 5. What a field note is not

- ❌ **An article.** No introduction, no conclusion, no throat-clearing. Start at the observation.
- ❌ **A tutorial.** Het is not positioned to instruct.
- ❌ **A status update.** "Started learning Kubernetes" is not an observation.
- ❌ **Content marketing.** No "here's a thing nobody tells you" — flagged in `../brand/VOICE.md` as a generated-text and influencer marker.
- ❌ **An opinion piece.** A technical judgment grounded in something observed is fine; a general take on the industry is not.

---

## 6. Ordering and ageing

**Reverse chronological is correct here** — and it is the one place in the site where it is. Notes are observations at a point in time; recency is genuinely their most relevant attribute.

**Ageing is shown, not hidden.** A note from eighteen months ago says so. Per the Appleton finding, surfaced ageing builds trust; concealed staleness destroys it. A dated observation that turned out to be wrong is more credible than a quietly deleted one — and per `../brand/GROWTH_MODEL.md`, corrections should be visible as corrections.

---

## 7. Volume expectations

| Scenario | Notes/year | Site reads as |
|---|---|---|
| A — low | 3–8 | Sparse but honest — acceptable |
| B — moderate | 12–25 | Healthy |
| C — high | 30+ | Strong; may need filtering |

**Field notes are the primary mechanism for the site to remain alive under Scenario A.** An investigation is expensive; a note is cheap. Three or four notes a year is achievable for almost anyone and keeps the archive accruing.

**Failure mode:** notes becoming a dumping ground for thoughts that required no observation. The test is: *did I notice something?* If not, it is not a note.
