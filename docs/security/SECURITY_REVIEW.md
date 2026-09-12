# Security review

**Date:** 2026-09-12
**Scope:** the whole repository — source, configuration, CI, git history, and the built output. Part of [Phase 7](../audit/PHASE7_AUDIT.md).

This is a security engineer's portfolio, so the site is held to the standard it describes. Two findings were real. The rest of this file records what was checked and found sound, because "we looked and it was fine" is only worth anything if it says what was looked at.

`SECURITY.md` is the disclosure policy; this is the review.

---

## Findings

### S-1 · HIGH · Personal location published to every social platform
`app/opengraph-image.tsx`

The 1200×630 Open Graph card rendered `SURAT, INDIA`. That card is what LinkedIn, Slack, X and iMessage display whenever the URL is shared.

It contradicted the project's own absolute constraint, stated in three places — `P0-015` in the decision log, `data/profile.ts` (*"No physical location anywhere public — not in copy, header, footer, metadata or structured data"*) and `app/layout.tsx` (*"No postal address: location is excluded from this site's metadata as well as its copy"*). Every other surface honoured it. The one that leaked was the most republished surface the site has.

**Fixed.** Removed, along with three further tracked occurrences (`docs/DECISION_LOG.md`, `docs/USER_INPUT_REQUIRED.md`, `prototype/v2/c-field.html`). `grep -ri surat` over the repository and the build output is clean.

**Not fixed by this, and cannot be.** Unfurls already scraped and cached by third parties still carry the old card until they expire or the URL is re-scraped. Closing a leak at source does not retract what has already been sent.

**Residual, recorded as a judgement not an oversight.** The JSON-LD still publishes `alumniOf` — the university — which permits city-level inference. A degree is ordinary portfolio content; it is flagged so the decision is deliberate.

### S-2 · CRITICAL (dependency) · Two unpatched RCEs in Next.js
`package.json` — `next@16.3.1`

| Advisory | Severity | Reachable here? |
|---|---|---|
| [GHSA-p293-qw3h-jr36](https://github.com/advisories/GHSA-p293-qw3h-jr36) — path traversal to RCE on Windows-hosted servers | Critical | **Yes, locally.** Production runs on Linux, but this repository is developed on Windows and `npm run dev` ran the vulnerable server on the maintainer's own machine |
| [GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4) — RCE in the Image Optimization API via AVIF | Critical | No. `next/image` is unused and no `images.remotePatterns` are configured |
| GHSA-rgj7-g3m4-5g8c — `sharp`/libheif | High | No. Transitive of the image pipeline, which is unused |

**Fixed.** `next@16.3.5`. `npm audit` reports **0 vulnerabilities**.

The honest reading matters: two of the three were not reachable in this application. The Windows one was, on the developer machine rather than in production. A one-line bump was cheaper than reasoning about it every time.

### S-3 · LOW · HTML sink fed from DOM attributes
`components/system/Cursor.tsx`

The cursor label was built with `innerHTML` from `data-cursor-label` / `data-cursor-index`. All twenty sources were traced: every one is a JSX literal or a build-time constant from `data/`. **Not exploitable** — reaching it requires an attacker who already controls DOM attributes, which means an existing XSS.

It was fixed anyway, because it is a gadget that amplifies a future bug, and because `SECURITY.md` claims nothing but two known constants passes through unsafe HTML — which had stopped being true. Now built with `createElement` and `textContent`.

### S-4 · LOW · JSON-LD could be broken out of
`app/layout.tsx`

`JSON.stringify` does not escape `<`, so a value containing `</script>` would terminate the block early and the remainder would parse as markup. Every field is a build-time constant, so this was not reachable. Closed by construction (`<`) so that it cannot become reachable when someone later adds a field that is not.

### S-5 · LOW · `security.txt` would silently expire
`app/security.txt/route.ts`

The route is `force-static`, so `Expires` is frozen at build time. It was set a year ahead: a site not rebuilt for twelve months would serve a **past** expiry, which RFC 9116 §2.5.5 makes invalid — silently, and precisely when someone is trying to use it to report something. Shortened to six months, so a stale file is caught by the next ordinary deploy.

`Canonical` pointed only at `/security.txt`. RFC 9116 §3 makes `/.well-known/security.txt` canonical; both are now emitted, well-known first.

### S-6 · LOW · A wrong public origin failed silently
`data/profile.ts`

If no origin resolved, `siteUrl` fell back to `http://localhost:3000` — which then propagated into `sitemap.xml`, the `robots.txt` host directive, the canonical link, the Open Graph URL, the JSON-LD `url` and `security.txt`. The comment in the file had noted that a wrong origin *"does not fail loudly"*.

It now throws on a deployment build. Gated on `VERCEL` rather than `NODE_ENV`, because `next build` sets `NODE_ENV=production` locally too and a local production build is a normal thing to run.

---

## Checked and sound

**Secrets — none.** Swept all tracked files for `AKIA`, `ghp_` / `gho_` / `github_pat_`, `sk-`, `xox[baprs]-`, `AIza`, `ya29.`, `glpat-`, `npm_`, `SG.`, `BEGIN … PRIVATE KEY`, bearer tokens, and the weaker `api_key` / `client_secret` / `password` / `token=` patterns. The only hit is prose: the word "password" inside a vulnerability description in `data/projects.ts`. No `.env*` file exists on disk or in history.

**Git history — clean.** `CLAUDE.md` and `.claude/launch.json` were committed in the initial commit and later removed; both historical blobs were read and contain no credentials or PII. `docs/Resume.pdf`, `docs/Cybersecurity-Portfolio-Project-Strategy.pdf` and `docs/SOURCE_OF_TRUTH.md` were **never** committed — verified against `git log --diff-filter=A` rather than trusting `.gitignore`.

**Personal data.** No phone numbers, postal addresses, national ID numbers, dates of birth or coordinates in tracked files. The published email is deliberate and matches the git author address, so it adds no exposure.

**External links.** All eleven `target="_blank"` sites carry `rel="noopener noreferrer"`. No `javascript:` URLs. Every `href` derives from a build-time constant in `data/`; nothing reads a query parameter, hash or referrer, so there is no user-controlled href and **no open-redirect surface**. One static rewrite, no `redirects()`.

**iframes.** None ship. The only occurrences are in dev tooling and prototypes, neither of which is routable. CSP additionally sets `frame-src 'none'`.

**Environment variables.** Three exist: `NEXT_PUBLIC_SITE_URL` and `VERCEL_PROJECT_PRODUCTION_URL` (both public origins, correctly public) and `NODE_ENV`. Nothing sensitive is prefixed `NEXT_PUBLIC_`, and nothing sensitive exists to be prefixed.

**Headers** (`next.config.mjs`). `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a thorough `Permissions-Policy`, HSTS with `includeSubDomains; preload`, COOP/CORP/COEP, `X-DNS-Prefetch-Control: off`. `source: "/:path*"` does match `/`.

**CSP — a deliberate, documented trade.** `script-src 'self' 'unsafe-inline'`. `'unsafe-inline'` does defeat CSP's anti-XSS value: a browser ignores it only when a nonce or hash is also present, and neither is. The reasoning in the config was verified and is factually correct — no query parameters are read, no forms exist, and `dangerouslySetInnerHTML` covers only build-time constants. A nonce would require dynamic rendering and de-optimise eleven prerendered routes.

The rest of the policy is not weakened by it and survives an XSS independently: `default-src 'self'`, `base-uri 'none'`, `form-action 'none'`, `frame-ancestors 'none'`, `object-src 'none'`, `connect-src 'self'`.

> **Recommended, not done:** add a `report-to` endpoint so the premise *"there is no reflection point"* is monitored rather than asserted. `require-trusted-types-for 'script'` would also neutralise sinks like S-3 at the browser level.

**Supply chain.** `lockfileVersion: 3`, every `resolved` URL is `registry.npmjs.org`, zero git or http dependencies, and **zero packages with install scripts**. No unused dependencies — `gsap` and `lenis` are both imported and used.

**CI** (`.github/workflows/ci.yml`). Uses `pull_request`, not `pull_request_target`. `permissions: contents: read`. `npm ci`. No interpolation of untrusted context into `run:`.

**Debug output.** Two intentional `console.error` calls in error boundaries. No `debugger`, no `@ts-ignore`, no `eslint-disable`. `productionBrowserSourceMaps: false`. Error pages expose React's opaque `digest` hash and never a stack trace.

---

## Open

Seven credential links are Google Drive `?usp=sharing` URLs — unlisted but public. Anyone with the URL sees the file, the Drive interface may expose the owning account, and the documents themselves may carry details the site withholds. Each PDF should be confirmed scrubbed, and issuer-side verification preferred wherever the issuer publishes one.
