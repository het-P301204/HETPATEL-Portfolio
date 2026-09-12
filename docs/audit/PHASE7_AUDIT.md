# Phase 7 — Production audit

**Date:** 2026-09-12
**Target:** the deployed site at `hetpatel-lemon.vercel.app`, and the source it is built from.
**Scope:** audit and repair. No redesign. The two front doors, the case archive, the evidence language and the drawn figures were treated as settled and preserved.

The rule for this phase was the one the site already applies to itself: *written to be checked*. Everything below was reproduced before it was fixed and re-checked after. Where something could not be exercised, it says so rather than claiming a pass.

---

## 1. What was verified, and how

| Check | Result | How |
|---|---|---|
| `next build` | PASS — 11/11 static routes, no warnings | run on the final tree |
| `tsc --noEmit` | PASS | run after every change batch |
| `npm audit` | PASS — 0 vulnerabilities | was 1 critical + 1 high |
| Design detector | 1 advisory, accepted (§6) | `impeccable detect` |
| Console | clean | production server, both modes |
| Horizontal overflow | 0px at 320 / 375 / 390 / 844 / 1280 / 1440 | measured `scrollWidth − clientWidth` |
| Contrast | computed from live composited pixels | not estimated from tokens |
| Index navigation | all 9 destinations arrive | production server |

**Not run, and why.** There is no linter and no test framework configured in this repository — no `lint` script, no eslint config, no test files. Neither was run and neither is claimed. No automated accessibility scanner (axe, Lighthouse) was available in the session; the accessibility findings below are manual review plus arithmetic, not a tool's output.

**`prefers-reduced-motion` was verified by reading the code paths, not by exercising them.** The browser tooling available could not emulate the media feature. The gates are correct by inspection; they have not been watched.

---

## 2. Blocking defects found

### P7-A — The site index navigated nowhere
`components/system/SmoothScroll.tsx`

Every `a[href^="#"]` is intercepted at the document level, `preventDefault()`ed, and handed to Lenis. The index overlay holds a scroll lock while it is open, and **a stopped Lenis silently ignores `scrollTo`**. The travel was swallowed; the native hash jump had already been removed. All nine destinations, every time — the panel closed and the reader stayed where they were.

The code comment had described the intent correctly for months — *"the overlay leaves and the anchor scroll takes over"* — but the click fired immediately, ~260ms before the overlay closed.

**Fixed** in `lockScroll` rather than in the index: a destination chosen while the document is locked is held and travelled to when the last lock lifts. Any overlay containing a hash link inherits it.

### P7-B — The manifesto was unreadable on every phone
`styles/manifesto.css`

Both stanzas share one grid cell (`grid-area: 1 / 1`) so GSAP can swap them during the desktop scrub. The GSAP timeline was gated to `(min-width: 768px) and (prefers-reduced-motion: no-preference)`. **The CSS overlap was gated to nothing.** Below 768px the two stanzas rendered on top of each other, permanently. The accent rule beneath them was stuck at `scaleX(0)` — invisible on mobile forever — and `FAIL.` never took the accent colour.

**Fixed** by gating the overlap, the pin and the collapsed rule on exactly the query the animation uses.

### P7-C — Two destinations were unreachable
- **`CONTACT`**, the ninth index row, sat below the fold of a fixed panel with `overflow: visible`, with the document locked behind it. At 768px — an ordinary laptop — it could not be reached. It is the row a reader is most likely to have come for.
- **`DESKTOP`**, one of the site's two front doors, sat below the fold of `.selector__veil`, which clips rather than scrolls. On a landscape phone one of the two entrances did not exist.

**Fixed** by tightening both layouts at short viewport heights, with scroll as a fallback rather than the remedy.

### P7-D — The selector's exit animation had never run
`components/experience/Selector.tsx`

`choose()` set React state and then **synchronously** queried the `data-sel` attributes that state produces. Both GSAP selectors matched nothing, production logged `GSAP target not found` on every entry, and the two beats that give the moment its meaning — the chosen door taking the screen, the other dropping away — had never once played.

**Fixed** by holding the two buttons as refs. A ref is correct on the frame it is read.

### P7-E — The mode selector was a modal in name only
`role="dialog" aria-modal="true"` with no focus move, no trap, no Escape and no focus restore — and `ExperienceShell` only made the world `inert` in desktop mode. A keyboard visitor met the question by tabbing through a skip link, a wordmark, six section links, the theme toggle and the index button, all invisible behind the veil. `aria-modal` told assistive technology the background was inert while focus was in it, which is the worst of both.

**Fixed** using the project's own `useOverlay` contract. Escape resolves to STANDARD — dismissing the question means *show me the portfolio*, and that is what STANDARD is.

---

## 3. Honesty defects

These matter more than the rest. The site's entire claim is that it can be checked.

### P7-F — The share card published a location
`app/opengraph-image.tsx` rendered `SURAT, INDIA` into the 1200×630 card that every LinkedIn, Slack and iMessage unfurl displays — against `P0-015`, `data/profile.ts` and `app/layout.tsx`, all of which state that location appears nowhere public. Every other surface honoured the rule. The one that leaked was the most republished surface the site has.

Removed, along with three tracked occurrences in `docs/` and a prototype. `grep -ri surat` over the repository and the build output is now clean.

> **Third-party caches are not cleared by this.** Unfurls already scraped by LinkedIn, Slack or X still hold the old card until they expire or the URL is re-scraped. The leak is closed at source, not retracted from where it has already been sent.

### P7-G — The accessibility statement made four claims the code contradicted
`app/accessibility/page.tsx`

| Claim | Reality |
|---|---|
| "Overlays trap focus … and return it" | the mode selector did neither (P7-E) |
| "`prefers-reduced-motion` is honoured throughout … the custom cursor stands down" | `Cursor.tsx` never checked it; `About.tsx` took `reduced` as a dependency and never read it |
| "Every interactive control is a real `button` or `a`" | the hero's four discipline controls were `<li tabIndex={0}>` |
| "the site follows the system setting until a choice is made" | `themeInitScript` hardcodes dark, deliberately |

Three were fixed **in the code**. The fourth was simply untrue: dark-by-default is a deliberate decision and the claim was corrected to match it, not the other way round.

### P7-H — Figures asserted the wrong discipline on seven cases
`components/viz/ProjectMotif.tsx`, `data/projects.ts`

Seven shapes carry fifteen cases. Reusing a shape is correct — the shapes argue about structure and several cases share a structure. The **labels** were baked into the shapes and were reused with them, and labels name a discipline.

- `SUNSET`, a post-quantum migration planner, was captioned `DETECTION / CONTAINMENT / RECOVERY` and *"THE RECORD IS WRITTEN DURING, NOT AFTER"* — incident-response language on a tool about migration deadlines.
- `PINGMASTER`, a latency monitor, carried the same three words.
- `AFTERLIFE` — a case about a session outliving the reset meant to kill it — drew the cloud-identity figure, while the `ISSUE / SIGN / VERIFY / EXPIRE` figure beside it described it exactly.
- `BLACKOUT`, about a request that should have been refused and was not, drew the compliance coverage matrix and captioned itself `ONE PATH REFUSED`.
- `SPECTRE` (SSRF) was captioned in phishing vocabulary; `NULLFIRE`, a published tool, carried the incident simulation's *"SYNTHETIC DATA · FICTIONAL SCENARIO"* disclaimer.

Captions are now supplied by the case (`MotifCaption`); the geometry stays shared. `AFTERLIFE` and `BLACKOUT` were reassigned to the figures that fit them. The unused `compete` figure was removed.

### P7-I — The certification archive overcounted its own evidence
The header read `10 VERIFIABLE`. Ten entries carry a link, but only **three** are issuer-side verification (Coursera's accomplishment page, a Credly badge page, the Credly profile); the other seven are hosted copies of a document, which is evidence you can read rather than proof the issuer stands behind.

Now derived by link host and stated as `11 ARTIFACTS · 3 ISSUER-VERIFIED · 7 HOSTED COPY · 1 IN PROGRESS`.

### P7-J — The index described a section that no longer existed
`CONTACT` was described as *"three channels and an honest state for the GitHub that is not linked"* while the section rendered five working channels **including** GitHub. Two optional URLs had been filled in and the two places describing the section were never updated.

Now derived from `contactChannels` in `data/profile.ts`, so the section and the index cannot disagree again.

---

## 4. First impression

The entry screen asked `HOW DO YOU WANT TO ENTER?` and gave a name — a navigation question, asked before the visitor learned anything about the person. Someone opening the site from an application had to choose a door before finding out what was behind either.

The question stays; it is the concept. It is no longer the only thing on the screen that means anything: the masthead now carries name → role → focus, read from the same profile the hero and the document metadata read.

---

## 5. Performance

Measured on the built output. See `../performance/PERFORMANCE_REVIEW.md`.

Headline: an unused variable-font axis was being downloaded on the critical path (`axes: ["wdth"]`, referenced once, asking for the default value) — Archivo fell from ~90KB to ~34KB. A `--vel` custom property was written to `<html>` on every scroll event *and* every animation frame, and **nothing in any stylesheet or component read it**; writing a custom property on the document element invalidates inherited style for the whole tree. Two independent per-frame scans looked for `.on-ink` elements that are never rendered, because `tone="ink"` is passed nowhere.

---

## 6. Accepted exception

The design detector flags `.dk__grid` in `styles/desktop.css` as a decorative grid-line background. It is kept. The detector reserves grid overlays for *"canvas, map, blueprint, or measurement surfaces"*, and a simulated workstation desktop is that category — the grid is the workspace surface, not decoration applied to a page. Removing it would damage the identity of the environment world.

---

## 7. What was deliberately not done

- **Per-tool provenance in the toolkit.** §13 of the brief asked the toolkit to answer *where is this used*. Several entries appear in a discipline list and nowhere else, so asserting "internship" or "lab" for them would have been invention — exactly what this project forbids. The toolkit cross-references SECURITY PRACTICE, which states basis per domain, instead.
- **The DOM node count.** 2,260 elements, above Lighthouse's ~1,400 advisory, driven by 22 simultaneous motif SVGs. The remedy (lazy-render dossier figures on `useInView`, render only the reel's active figure) trades the immediacy of the figures for a number. That is an identity decision, not a polish one.
- **Moving the case lists to server components.** `Certifications` and `Projects` are client components, so `IssuerMark` (~21KB of path data) and `ProjectMotif` ship as JS *and* inline in the HTML. This is the largest remaining payload win and a real refactor, not a polish pass.

---

## 8. Still open

1. Seven credential links are hosted copies. TryHackMe and Forage both print verification codes on their certificates; opening those pages would move seven entries into the issuer-verified column. Needs Het.
2. Two certificates were issued by their issuers as **unfilled templates** — recipient and date lines blank (Kryptech CTF, Microsoft Student SOC). Linked at Het's instruction with the caveat recorded at each entry. Worth asking both issuers to reissue.
3. `data/profile.ts` now throws on a deployment build when no public origin resolves. This is the one change that can fail a deploy rather than degrade quietly, and that is deliberate — the alternative was publishing a sitemap, canonical, OG URL and `security.txt` pointing at `localhost`. Gated on `VERCEL`, which always provides the origin, so it should never fire.
