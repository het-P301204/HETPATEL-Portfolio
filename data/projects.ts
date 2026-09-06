/**
 * SOURCE OF TRUTH — the case archive.
 *
 * Three strata, because three kinds of work are being claimed and they are not
 * equally strong. Saying so in the structure is the point: a reviewer should be
 * able to weigh a personal build against a lab exercise without reading a
 * single word of body copy.
 *
 * PROFESSIONAL ENGAGEMENT WORK IS NOT HERE. It lives once, in WORK, sourced
 * from `data/experience.ts`. It used to be duplicated into this file as two
 * extra cases, which meant the CSCRF/IRDAI engagement and the client
 * application assessment were each described twice in slightly different words
 * — the exact repetition the site is supposed to avoid. This archive is now
 * only what Het did outside an engagement.
 *
 *   PERSONAL — things built alone, outside any engagement.
 *   LAB — lab environments and closed simulations. Never production.
 *   CTF — authored investigation exercises.
 *
 * COMPETITION AND GUIDED-LAB CREDENTIALS ARE NOT HERE EITHER. Kryptech CTF and
 * TryHackMe's Advent of Cyber were listed as cases *and* as certificates, so
 * each appeared twice on the site in different words. They are credentials —
 * evidence someone else issued — so they live once, in the certification
 * archive. What stays here is work Het authored himself.
 *
 * `outcome` records what the work produced FOR HET — a method, a habit, a
 * changed assumption. It never claims a result on someone else's system,
 * because none is documented and none may be published.
 *
 * The résumé lists five projects on one line with no descriptions, no links and
 * no outcomes. Everything written here describes intent, method and limitation
 * only. No finding, severity, CVE, count or client is claimed anywhere.
 *
 * `repoUrl` is "" everywhere: no GitHub URL appears in the résumé and none is
 * invented. Fill one in and the archive renders a link for that entry alone.
 */

export type ProjectMotif =
  | "scan"
  | "vector"
  | "identity"
  | "token"
  | "timeline"
  | "control"
  | "trace"
  | "compete";

export type ProjectGroup = "personal" | "lab" | "ctf";

export type Project = {
  id: string;
  number: string;
  group: ProjectGroup;
  title: string;
  /** Pre-broken for display where the title has to set on two lines. */
  titleLines: string[];
  domain: string;
  /** Short state line: LAB ENVIRONMENT, PROFESSIONAL ENGAGEMENT, etc. */
  status: string;
  /** True where scope detail is confidential and the entry says so itself. */
  confidential?: boolean;

  problem: string;
  approach: string[];
  tools: string[];
  outcome: string;
  limitations: string;

  motif: ProjectMotif;
  featured?: boolean;
  /** "" until a real repository exists and Het supplies the URL. */
  repoUrl: string;
};

export const projectGroups: {
  id: ProjectGroup;
  label: string;
  note: string;
}[] = [
  {
    id: "personal",
    label: "PERSONAL PROJECTS",
    note: "BUILT ALONE · NOT INDEPENDENTLY REVIEWED",
  },
  {
    id: "lab",
    label: "LAB / RESEARCH",
    note: "LAB ENVIRONMENTS AND CLOSED SIMULATIONS · NEVER PRODUCTION",
  },
  {
    id: "ctf",
    label: "INVESTIGATION",
    note: "AUTHORED EXERCISE · SYNTHETIC DATA",
  },
];

export const projects: Project[] = [

  /* ----------------------------------------------------------------
     PERSONAL
     ---------------------------------------------------------------- */
  {
    id: "secure-login",
    number: "01",
    group: "personal",
    title: "Secure Login System",
    titleLines: ["SECURE LOGIN", "SYSTEM"],
    domain: "APPLICATION SECURITY",
    status: "PERSONAL BUILD",
    problem:
      "I spend my time testing authentication surfaces. Building one is the fastest way to find out which parts are genuinely hard and which only look hard from the outside.",
    approach: [
      "Token issue, verification and expiry implemented as an explicit lifecycle",
      "Role-based authorisation enforced at the route and again at the request handler",
      "Session handling written so that failure is a denial rather than an exception",
    ],
    tools: ["REACTJS", "JWT", "RBAC"],
    outcome:
      "Almost none of authorisation lives in the login form. The interesting failures are in what the server assumes about a token it has already accepted — which is now the first thing I test rather than the last.",
    limitations:
      "Personal build. Not independently reviewed and never operated in production. Treat it as a study of the pattern, not as a hardened system.",
    motif: "token",
    repoUrl: "",
  },
  {
    id: "cloud-config",
    number: "02",
    group: "personal",
    title: "Cloud Security Configuration",
    titleLines: ["CLOUD SECURITY", "CONFIGURATION"],
    domain: "CLOUD SECURITY",
    status: "PRACTICAL EXERCISE",
    problem:
      "In a cloud account the network position means very little. Identity and configuration are the control boundary, and both of them ship with defaults nobody chose.",
    approach: [
      "Separated roles and scoped permissions to the task rather than to the person",
      "Reviewed default configurations against a written baseline",
      "Recorded each deviation with the reason it was accepted or corrected",
    ],
    tools: ["IAM", "SECURE CONFIGURATIONS"],
    outcome:
      "A permission model is only as honest as its defaults. Most of the exposure in my own account came from configuration I had never made a decision about.",
    limitations:
      "Coursework and self-directed configuration in a personal account. Not an assessment of any organisation's cloud estate.",
    motif: "identity",
    repoUrl: "",
  },

  /* ----------------------------------------------------------------
     LAB / RESEARCH
     ---------------------------------------------------------------- */
  {
    id: "scanning-lab",
    number: "03",
    group: "lab",
    title: "Network Vulnerability Scanning Lab",
    titleLines: ["NETWORK VULNERABILITY", "SCANNING LAB"],
    domain: "VULNERABILITY MANAGEMENT",
    status: "LAB ENVIRONMENT",
    problem:
      "Three scanners pointed at the same estate do not agree with each other. Before you can report anything you have to know whether that disagreement is about the hosts or about the tools.",
    approach: [
      "Host discovery and service enumeration with Nmap",
      "Web server checks with Nikto against the exposed services",
      "Full-estate scanning and result triage with OpenVAS",
      "Manual verification of anything a tool asserted",
    ],
    tools: ["NMAP", "NIKTO", "OPENVAS"],
    outcome:
      "A scanning routine that can be run the same way twice, and the rule I now apply everywhere: unverified scanner output is a claim, not a finding.",
    limitations:
      "Self-hosted lab. Nothing production or third-party was ever in scope, and no results from it are reproduced on this site.",
    motif: "scan",
    featured: true,
    repoUrl: "",
  },
  {
    id: "phishing-sim",
    number: "04",
    group: "lab",
    title: "Phishing Web — Social Engineering Simulation",
    titleLines: ["PHISHING WEB", "SOCIAL ENGINEERING"],
    domain: "SOCIAL ENGINEERING",
    status: "CLOSED SIMULATION",
    problem:
      "Phishing guidance tells people to look for things that are easy to fake. I wanted to know which signals actually survive contact with a competent page.",
    approach: [
      "Rebuilt a login surface as a static capture page in an isolated environment",
      "Compared it against the observable signals: origin, certificate, form target, redirect chain",
      "Wrote the difference up as user-facing indicators rather than as tool output",
    ],
    tools: ["STATIC CAPTURE PAGE", "TLS INSPECTION", "REDIRECT ANALYSIS"],
    outcome:
      "The technical half is trivial and the pretext carries the entire attack. Defences aimed only at the page miss where it actually works.",
    limitations:
      "Closed simulation. No message was ever sent to a recipient, no live brand was impersonated in public, and no credentials were collected.",
    motif: "vector",
    repoUrl: "",
  },
  {
    id: "ir-sim",
    number: "05",
    group: "lab",
    title: "Incident Response Simulation",
    titleLines: ["INCIDENT RESPONSE", "SIMULATION"],
    domain: "INCIDENT RESPONSE",
    status: "SIMULATED SCENARIO",
    problem:
      "Detection, containment and recovery are easy to recite in order. Working them as a sequence with real decisions attached is a different exercise, and the written account afterwards is a third one.",
    approach: [
      "Detection — establishing the initial signal and what it did and did not prove",
      "Containment — deciding what to cut, and accepting what that costs",
      "Recovery — restoring service, then writing the timeline while it was still accurate",
    ],
    tools: ["DETECTION", "CONTAINMENT", "RECOVERY"],
    outcome:
      "The reconstruction is harder than the response. Evidence that was obvious during the incident is ambiguous two hours later — which is an argument for writing during rather than after.",
    limitations:
      "Simulated scenario. No real incident, no real environment and no third-party data were involved.",
    motif: "timeline",
    repoUrl: "",
  },

  /* ----------------------------------------------------------------
     CTF / INVESTIGATION
     ---------------------------------------------------------------- */
  {
    id: "case-001",
    number: "06",
    group: "ctf",
    title: "Case 001 — The Anomalous Request",
    titleLines: ["CASE / 001 —", "THE ANOMALOUS REQUEST"],
    domain: "INVESTIGATION",
    status: "FICTIONAL TRAINING SCENARIO",
    problem:
      "Most security writing shows you a conclusion. It rarely shows you which three log rows the conclusion actually rests on, or what happens when you pick the right answer for the wrong reasons.",
    approach: [
      "Authored a correlation exercise across three synthetic log sources",
      "Built it so the reader selects supporting evidence before selecting a conclusion",
      "Made verification check the evidence, so a correct answer chosen without support is reported as unsupported",
    ],
    tools: ["LOG CORRELATION", "SYNTHETIC DATA"],
    outcome:
      "A playable exercise that lives in the desktop environment of this site. It demonstrates a method of reasoning rather than claiming an incident.",
    limitations:
      "Entirely fictional. Synthetic logs, RFC 5737 documentation addresses, no real host, account, organisation or incident. Nothing in it is a résumé fact.",
    motif: "trace",
    repoUrl: "",
  },
];

export const projectsByGroup = projectGroups.map((g) => ({
  ...g,
  items: projects.filter((p) => p.group === g.id),
}));
