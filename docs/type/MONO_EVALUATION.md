# Mono Evaluation

**Date:** 2026-08-14 (Phase 5C)

---

## Is a mono family necessary at all?

**Semantically, yes. As a downloaded font file, no.**

Mono carries genuine meaning here: *this is a literal value.* A hash, a repository name, a CVE identifier, a file path — these are strings where character-level exactness matters and where proportional spacing actively misleads. That is information, not decoration.

**But the volume is tiny.** Literals appear a handful of times per investigation; code blocks will be rare. Downloading a third family for a few dozen glyphs per page is a poor trade against the payload budget.

---

## Recommendation: **a system monospace stack. No downloaded mono family.**

```
ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
"Liberation Mono", monospace
```

**Reasons:**

1. **Zero bytes.** The entire mono requirement costs nothing, leaving the payload budget for the two faces that matter.
2. **It reduces the system to two downloaded families**, directly answering the 5A self-critique question *"is the three-family system too complicated?"*
3. **Literals are short.** A repository name or a hash does not need typographic refinement — it needs monospacing, which every system mono provides.
4. **It avoids JetBrains Mono**, which is the cybersecurity-portfolio default and was measured as an entire body face on a saturated site. Using the system stack sidesteps that association entirely.
5. **`ui-monospace` resolves to the platform's best UI mono** (SF Mono on Apple, Cascadia/Consolas on Windows), so it renders natively and correctly everywhere.

**Cost accepted:** mono appearance varies across platforms. Since it is used only for short literals — never for extended reading — the variance is immaterial. **If 5D shows the metrics differ enough to disturb the apparatus alignment**, the fallback is to add one small subset mono, and that decision is deferred, not pre-empted.

---

## Where mono is used

| Use | Mono? |
|---|---|
| Code blocks | ✅ |
| Inline identifiers, repository names, file paths | ✅ |
| Hashes, version strings | ✅ |
| CVE / CWE references | ✅ |
| Commands | ✅ |
| **Dates in the foot register** | ⚠️ **Judgment call — see below** |
| Status values | ❌ Words, not literals |
| Domain values | ❌ |
| Body prose | ❌ **Never** |
| Headings | ❌ **Never** |
| Navigation, labels | ❌ **Never** |

---

## The dates question

Foot-register dates would benefit from **tabular alignment** so entries scan vertically. Two options:

**A. Mono for dates.** Guarantees alignment. Risk: mono dates are a recognisable "changelog UI" signal — precisely what `REVISION_TYPE.md` must avoid.

**B. Sans with tabular figures (`font-variant-numeric: tabular-nums`).** Public Sans has tabular figures. Achieves the alignment without the changelog association.

**Recommendation: B.** Dates are read as dates, not as literals, and tabular sans keeps the foot register reading as a record rather than as a release log.

---

## Forbidden uses, restated

Mono must never be used to signal "this site is technical." That is the costume failure measured on zyekh.cloud, where JetBrains Mono was the entire body face.

**The test:** would a reader be misled if this string were set proportionally? If yes, use mono. If it would merely look less technical, do not.
