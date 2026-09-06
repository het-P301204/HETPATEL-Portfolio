# Security policy

This is a personal portfolio site. It has no users, no accounts, no database, no
API and no payment path, so the realistic surface is small — but it is a
security portfolio, and a site that does not take its own report path seriously
would be making an argument against itself.

## Reporting

Email **patel.het7996@gmail.com**. Please include steps to reproduce.

The same contact is published at
[`/.well-known/security.txt`](https://github.com/het-P301204/HETPATEL-Portfolio/blob/main/app/security.txt/route.ts)
per [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116). If the two ever
disagree, `security.txt` on the live site is authoritative — it is generated
from [`data/profile.ts`](data/profile.ts), which is the single source of truth
for every identity value in this project.

> [!NOTE]
> No bounty is offered and none is implied. This is stated the same way in
> `security.txt` rather than being left ambiguous.

Expect a reply within a few days. There is no SLA and it would be dishonest to
publish one for a portfolio maintained by one person.

## Scope

**In scope** — the deployed site and this repository:

- Anything that breaks the header contract in [`next.config.mjs`](next.config.mjs):
  a CSP bypass, a way to get content framed despite `frame-ancestors 'none'`, or
  a header that is not actually being served in production.
- Cross-site scripting. The site renders no user input — no query parameters are
  read, no form is accepted, nothing goes through `dangerouslySetInnerHTML`
  except two build-time constants — so a working injection would mean that
  premise is wrong, which is worth knowing.
- Dependency vulnerabilities that are reachable from this build rather than
  merely present in the tree.
- Anything in the repository that leaks personal data. Three files are
  gitignored specifically because they carry a phone number and postal detail;
  if something equivalent slipped through, that is a valid report.

**Out of scope:**

- Missing headers on hosts other than the production deployment. Static hosts
  cannot serve `headers()`; that is a documented deployment constraint, not a
  vulnerability.
- Findings from automated scanners with no demonstrated impact — in particular
  "CSP allows `unsafe-inline`". That is a known, deliberate trade-off, and the
  reasoning is written out in full in `next.config.mjs`. A report that shows an
  actual injection point is very much in scope; a scanner grade is not.
- Volumetric or denial-of-service testing. Please do not.
- Social engineering, physical access, or anything targeting third-party
  infrastructure (Vercel, GitHub, npm).

## What this site deliberately does not do

Useful context before reporting, because several common findings do not apply:

| | |
| --- | --- |
| Analytics | none |
| Cookies | none |
| Third-party runtime requests | none — fonts are self-hosted at build time |
| Authentication / accounts | none |
| Server-side state | none — every route is prerendered |
| User input rendered anywhere | none |

## Supported versions

`main` only. There are no releases, tags or maintained branches, and pretending
otherwise would be theatre.
