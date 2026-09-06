# Footer System

**Date:** 2026-08-15 · **Built on all seven pages. NOT visually validated.**

---

## What was there

```
Het Patel — patel.het7996@gmail.com
```

One line. Adequate, and doing nothing a reader needed at the bottom of a four-screen page.

---

## What the research found

**No strong personal site in the Phase 1 corpus has a notable footer**, and none carries
© / Privacy / Terms. That convention is inherited from commercial sites that collect data.

The negative finding is the useful one. A personal portfolio has **no terms to link**, **no privacy
policy to publish if it collects nothing**, and **no copyright claim anyone needs stated**. A footer
carrying those things is signalling that it was assembled from a template.

---

## What was built

Three lines, each earning its place:

```
Het Patel — security testing and regulated assurance.
Home   Investigations   About
patel.het7996@gmail.com · GitHub · LinkedIn
```

| Line | Job |
|---|---|
| **Identity** | Restates who this is and what he does, for a reader who has scrolled past the top and may have arrived on a deep page from search |
| **Navigation** | Offers the routes again at the point the reader has finished |
| **Contact** | The site's purpose, without ceremony |

**The identity line is the one doing unusual work.** A reader landing on an investigation from a
search result may reach the bottom having never seen the homepage. That line is the only place the
positioning is restated, and it costs nine words.

---

## What is deliberately absent

| Absent | Why |
|---|---|
| **© 2026 Het Patel** | Asserts nothing anyone needs. Copyright subsists without notice |
| **Privacy · Terms** | There is nothing to describe. A privacy policy for a site that collects nothing is theatre |
| Social icon rows | Icons banned site-wide; the three text links suffice |
| Newsletter signup | Promises a cadence that does not exist |
| "Built with…" | Nobody is asking |
| Sitemap | Four pages |
| Back-to-top | The page is not long enough to need one |
| **"Secure by design"** or any security claim | Banned. A claim about security in the interface is exactly the kind a security reader checks and disbelieves |

---

## security.txt — specified, not built

RFC 9116 defines `/.well-known/security.txt` as a machine-readable contact point for vulnerability
reports. On a security practitioner's own site it is a small, real, checkable signal of the
discipline the site is about — and it is the correct opposite of a "secure by design" banner:
**a reader who looks finds it; nobody is told it is there.**

**Conditions, and they are absolute:**

1. The file must **actually exist** at `/.well-known/security.txt`.
2. `Contact:` and `Expires:` must be **real and current**.
3. It is **never linked from the interface** and never mentioned in copy.

**A stale or absent `security.txt` is worse than none** — it is a security claim that fails its own
check, on a site whose entire premise is intellectual honesty. Recorded as a production requirement
in `PHASE5G_SPEC.md`; 5G does not deploy.

---

## What was considered and rejected

**A "last updated" timestamp.** Genuinely tempting: `STATUS_SYSTEM.md` argues that *visible ageing
beats false currency*, and a build-time timestamp is a measured condition rather than theatre —
`GITHUB_RELATIONSHIP.md` §4 permits exactly that.

**Rejected for the footer.** Site-level currency is not a useful fact: the site is not the unit of
work. Every investigation and every note already carries its own date, which is where ageing belongs
and where it is informative. A site-wide "last updated" would broadcast staleness across pages that
are not stale, and would be the closest thing on the site to a cadence promise.

---

## What remains unvalidated

1. **Height on the short investigation page.** The footer went from one line to three plus a nav
   row, and 5D found that dead space at the end of the 150-word page was *the* most damaging
   spacing defect — it read as *"something is missing here."* Adding footer mass to that page is
   exactly the wrong direction, and **it was never measured.**
2. **`.foot-nav` tap targets.** `.35em` padding applied **by analogy with the site-wide standalone
   link rule, not by measurement.** Every previous phase found under-24px targets in newly added
   link groups; 5E found the primary navigation at 18px.
3. **Whether three lines reads as identity or as a generic footer strip.** The whole question.
4. **Wrapping at 320px.** Three contact links separated by middots, and a four-item footer nav.
