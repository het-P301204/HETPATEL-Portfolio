/**
 * SOURCE OF TRUTH — personal identity.
 * Every string here is supported by the résumé. Nothing is inferred, inflated
 * or invented. If a field has no factual value, leave it as an empty string:
 * the UI is built to omit empty fields rather than fill them.
 */

/**
 * Trailing slashes are stripped: every consumer joins with `/sitemap.xml` and
 * friends, so an origin ending in `/` would produce a double slash in the
 * canonical URL and the sitemap.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const profile = {
  first: "HET",
  last: "PATEL",
  name: "Het Patel",

  /** The résumé summary states "Junior Cybersecurity analyst". Nothing beyond that. */
  role: "Junior Cybersecurity Analyst",
  currentTitle: "Cybersecurity Intern — VAPT, Risk & Compliance",
  currentOrg: "Info eShield Cyber Solutions",
  currentSince: "JAN 2026",

  /**
   * No physical location anywhere public — not in copy, header, footer,
   * metadata or structured data. Het's current location is temporary and is
   * excluded from the brand by instruction, so there is no field for it here.
   * Anything that wants to describe him uses `focus` and `building` instead.
   */
  focus: "VAPT · SECURITY ENGINEERING · RISK & COMPLIANCE",

  /**
   * This site is a published original repository, which is what the slot
   * previously said did not exist. Nothing here is a plan or an intention —
   * if a claim stops being true, cut it rather than soften it.
   */
  building: "THIS PORTFOLIO — PUBLISHED AND DEPLOYED",

  /**
   * A count, and the site does not carry counts unless they are evidenced —
   * so this one ships with its evidence attached and the two move together.
   * The badge names the account (Patel.Het) and states the figure. Empty the
   * URL and the row disappears rather than making an unbacked claim.
   *
   * A streak is perishable. If it lapses, change the number or remove both
   * fields; do not leave a stale figure standing because it flatters.
   */
  practice: "180-DAY TRYHACKME STREAK",
  practiceEvidenceUrl:
    "https://drive.google.com/file/d/1WUMZpuSX8b2Ud62PH3xG1-nI2K6ihUdX/view?usp=sharing",

  email: "patel.het7996@gmail.com",
  linkedinHandle: "het-patel-913017345",
  linkedinUrl: "https://www.linkedin.com/in/het-patel-913017345",

  /**
   * No GitHub URL appears in the résumé. Set it here and the navigation,
   * lab section and footer will start rendering it; leave it empty and every
   * GitHub affordance stays hidden. Do not guess a handle.
   */
  githubUrl: "https://github.com/het-P301204",

  /**
   * Practice profiles. Same contract as `githubUrl`: fill one and its row
   * appears in the contact block; leave it empty and the row stays out
   * entirely rather than rendering an unavailable link.
   *
   * The TryHackMe profile is where the 180-day streak and the Advent of Cyber
   * completion are visible. It could not be checked from a build machine —
   * TryHackMe answers automated requests with a bot challenge — so if the
   * handle ever changes, this link needs changing by hand.
   */
  tryHackMeHandle: "Patel.Het",
  tryHackMeUrl: "https://tryhackme.com/p/Patel.Het",

  /** Credly holds all 16 badges, each with its own issuer-side verification. */
  credlyUrl: "https://www.credly.com/users/het-patel.388f8bb5",

  /**
   * Public site origin — used for canonical URL, sitemap, robots, security.txt
   * and Open Graph. Resolved at build time rather than hardcoded, because a
   * wrong origin here does not fail loudly: it silently publishes a sitemap and
   * link previews pointing at a host that does not resolve.
   *
   * Resolution order:
   *   1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is live.
   *   2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel, always the stable
   *      production origin (not the per-deployment preview URL).
   *   3. localhost — development only.
   */
  siteUrl: resolveSiteUrl(),

  statement: [
    "I work at the intersection of security assessment,",
    "systems, networks, and assurance.",
    "My focus is understanding where systems fail,",
    "how those failures can be demonstrated,",
    "and how they can be reduced.",
  ],

  about: [
    "Most of what I do begins with the same question: what does this system assume, and what happens when the assumption is false. Testing a web application answers it directly. Mapping a control to a policy answers it slowly, on paper, and usually with less certainty.",
    "A finding and a control are not the same object. Translating one into the other — a request that returns something it should not, into a statement an auditor will accept — is the part of the work I have learned the most from.",
    "I am early. The record below is an internship, a degree in progress, structured coursework and lab work. It is written to be checked, not to impress.",
  ],
} as const;

/**
 * The four disciplines used by the hero index, the navigation and the
 * document metadata. Ordered by how much of the actual work each accounts for.
 */
export const disciplines = [
  {
    id: "web-application-security",
    index: "01",
    label: "WEB APPLICATION SECURITY",
    short: "APPLICATION",
    descriptor:
      "Testing what an application accepts, and what it returns when it should not.",
    context: ["BURP SUITE", "SQL INJECTION", "XSS", "MISCONFIGURATION"],
  },
  {
    id: "vulnerability-assessment",
    index: "02",
    label: "SECURITY ASSESSMENT",
    short: "ASSESSMENT",
    descriptor:
      "Reconnaissance, enumeration and scanning across lab and internship scope.",
    context: ["NMAP", "NIKTO", "OPENVAS", "GOBUSTER"],
  },
  {
    id: "security-engineering",
    index: "03",
    label: "SECURITY ENGINEERING",
    short: "ENGINEERING",
    descriptor:
      "Hardening hosts and networks — firewall policy, privilege, configuration.",
    context: ["WINDOWS", "LINUX", "GFI KERIO CONTROL", "TCP/IP"],
  },
  {
    id: "risk-compliance",
    index: "04",
    label: "RISK & COMPLIANCE",
    short: "ASSURANCE",
    descriptor:
      "Risk assessment, control mapping and the documentation that carries it.",
    context: ["ISO 27001", "RISK ASSESSMENT", "VAPT REPORTING"],
  },
] as const;

export type Discipline = (typeof disciplines)[number];
