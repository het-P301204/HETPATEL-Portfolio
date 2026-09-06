# Phase 5G — Specification

**Date:** 2026-08-15 · **Status: BUILT AND VALIDATED — with four open failures.**
Read [`PHASE5G_VALIDATION.md`](PHASE5G_VALIDATION.md) first; it supersedes §1 below and the
"not validated" status in [`PHASE5G_FINDINGS.md`](PHASE5G_FINDINGS.md).

---

## 1. What exists after 5G

| File | New in 5G | Rendered |
|---|---|---|
| `prototype/index.html` | nav + footer changed | ✅ 9 viewports |
| `prototype/investigations.html` | nav + footer changed | ✅ 9 viewports |
| `prototype/investigation.html` | nav + footer changed | ✅ 9 viewports |
| `prototype/short-no-revisions.html` | nav + footer changed | ✅ footer worst case |
| `prototype/fixture-long.html` | nav + footer changed | ❌ not re-rendered in validation |
| **`prototype/about.html`** | **new** | ✅ 9 viewports — **fails the three-screen cap** |
| **`prototype/notes.html`** | **new** | ✅ 9 viewports + 1/3/6/10-note volumes |
| `prototype/style.css` | `.notes` `.nt-date` `.nt-super` `.facts` `.foot-*` | ✅ — two defects found and fixed (G-5, G-6) |

Rendered 2026-08-15. See [`PHASE5G_VALIDATION.md`](PHASE5G_VALIDATION.md) for measurements,
failures and regression results.

---

## 2. Navigation

**Launch: `Het Patel · Investigations · About`.**

Notes enters when the first note exists. No other item is ever added — not Projects, Skills,
Services, Certifications, Resume, Blog or Contact.

---

## 3. Notes

```
2026-06-11                                  ← sans .84375rem muted, permalink
Why do allow-lists so often normalise…      ← serif, BODY SIZE, primary
2026-08-02 — followed up. …                 ← sans .9375rem secondary, only when superseded
```

| Rule | |
|---|---|
| Rendering | **Inline in the index.** The index is the content |
| Fields | **date + body.** No status, no origin, no apparatus, no revision register, no artifacts |
| Body size | **Full body size**, same as investigation prose. A note is short, not minor |
| Between notes | **OPEN** — the only list on the site that uses it |
| Ordering | Reverse chronological — **the one place on the site where it is correct** |
| Correction | **Supersession**, dated, beneath. The original is never edited |
| Own page | Only above ~400 words |
| At zero | **No page, no nav item, nothing anywhere** |

---

## 4. About

Seven blocks: Identity · What I work on · How I write this up · Experience · Where this is going ·
Background · Contact.

**Voice occupies blocks 1–5; facts occupy block 6.** Roughly two-thirds / one-third — space
allocated inversely to convention, because credentials rank low in the trust model.

| Rule | |
|---|---|
| Experience | Prose. Employer, period, method. **Attribution ceiling stated by Het**, not inferred |
| Certifications | One prose line in `.facts`. No logos, badges, grid, or count as a headline. **16 is exact** |
| GitHub | Described honestly — *"currently thin; I am rebuilding it"* |
| Portrait | None |
| Contact | Email, LinkedIn, one sentence. **No form, no banner, no CTA block** |
| Length | **Hard cap: three screens.** Beyond it, it has become a résumé dump |

---

## 5. Footer — identical on every page

```
Het Patel — security testing and regulated assurance.
Home   Investigations   About
patel.het7996@gmail.com · GitHub · LinkedIn
```

**Absent:** © · Privacy · Terms · social icons · newsletter · "built with" · sitemap · back-to-top ·
any security claim.

---

## 6. Production requirements — recorded, not built

| Requirement | Note |
|---|---|
| **`/.well-known/security.txt`** | RFC 9116. `Contact:` and `Expires:` **real and current**. **Never linked or mentioned in the interface.** A stale one is worse than none |
| Security headers | CSP, `Referrer-Policy`, `X-Content-Type-Options`, HSTS |
| Analytics | Privacy-preserving or none. No third-party script that reads the reader |
| Third-party requests | Currently 3 (Google Fonts). **Target: 0** via self-hosting |
| Fonts | Self-host, subset, preload only what is used, keep the Times-metric fallback, re-verify CLS |
| `<meta description>`, OG, JSON-LD | **No location field**, ever |
| Strip before ship | `.proto` · `.placeholder` · all `fixture-*` · both `*-genericity-test` · CSS comments |

**No security property is ever stated in the interface.** No "secure by design", no badge, no
headers page. The signal is that a reader who checks finds it correct.

---

## 7. Open — Het's to decide

| # | Item | Blocks |
|---|---|---|
| 1 | **"access control"** in the About testing list — **not on the resume** | Accuracy |
| 2 | **"conclusions I have since changed"** — true of fixtures only | Accuracy |
| 3 | *"the part most people skip"* · *"I came to this expecting paperwork"* | His own framing |
| 4 | Where-this-is-going: one or two sentences, or cut the block | Placeholder |
| 5 | Resume link? | Contact |
| 6 | Real notes — or Notes does not launch | Notes |
| 7 | Real investigations, and which are `professional` | Carried from 5F |
| 8 | Add `Contact` to nav? | Carried from 5E, E-5 |

**Items 1 and 2 would be inaccurate rather than merely unconfirmed.** Both must be resolved before
publication.

---

## 8. Required before 5G can be called complete

1. Confirm browser tooling.
2. Render `about.html` and `notes.html` at 375 and 1280. **Measure About's page height against the
   three-screen cap.**
3. Measure `.facts` at 320px, `.foot-nav` tap targets, and contrast on both.
4. Render the footer on `short-no-revisions.html` — the worst case.
5. Run the portfolio-vs-publication instrument on Notes.
6. Then genericity, hiring, responsive, accessibility, performance.
7. Then write the five deferred test documents.

---

## 9. Not authorised

Next.js · CMS · backend · deployment · analytics · authentication · production contact form ·
redesigning the visual system · Phase 6.
