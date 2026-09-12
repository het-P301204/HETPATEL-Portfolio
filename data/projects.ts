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
 * `repoUrl` is filled for every case from 07 onward and empty for 01–06. That
 * split is the honest state of the archive, not an oversight: the early
 * entries describe work with nothing public to point at, the later ones point
 * at code. An empty value renders no link for that entry alone.
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
    /* Was the featured case when nothing here had a repository. The reel now
       carries published work, which a reader can open and disagree with. */
    motif: "scan",
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

  /* ----------------------------------------------------------------
     PUBLISHED WORK — 07 onward.

     Everything below has a public repository, which changes what this
     archive is allowed to say. The entries above describe intent and method
     because there was nothing to point at; these point at the code, and a
     reader can disagree with any sentence here by opening it.

     Every `problem`, `approach` and `limitations` line is taken from the
     repository's own README and description rather than characterised from
     the outside. Where a project states a limitation about itself, that
     wording is preserved — several of them are sharper about their own
     boundaries than a summary would be.

     `outcome` is the one field that is not lifted: it is written in first
     person about what the work changed for Het, and these are drafted from
     each README's stated reasoning. Read them as drafts and correct the
     voice where it is not yours.
     ---------------------------------------------------------------- */

  {
    id: "sunset",
    number: "07",
    group: "personal",
    title: "Sunset",
    titleLines: ["SUNSET"],
    domain: "POST-QUANTUM MIGRATION",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "Cryptographic discovery is already solved. A scanner will hand over every RSA key in an estate and CycloneDX gives the output a schema. What none of them answer is what to migrate first, and that gap is structural: the prioritisation model everyone agrees on is Mosca's inequality, and neither input on its left-hand side can be discovered by scanning.",
    approach: [
      "Reads a CycloneDX CBOM and anchors each asset to a deadline rather than a severity label",
      "Ranks by Mosca's inequality, so the ranking argues from migration time and secrecy lifetime instead of key size alone",
      "Draws the unassessable remainder to scale and splits it into NOT SCORED and NO DEADLINE, which are not the same failure",
      "Runs offline and deterministically, so the same input produces the same plan",
    ],
    tools: ["TYPESCRIPT", "REACT", "CYCLONEDX CBOM", "PQC"],
    outcome:
      "The honest answer to 'what do we migrate first' is mostly a question about data, not about cryptography. Building the ranking taught me to treat a missing input as a finding in its own right rather than a blank cell — which is why the tool names the field that is holding up each answer.",
    limitations:
      "It implements no cryptography. It does not scan, discover, connect to anything or block anything, and every enforcement view is labelled SIMULATION and stays that way.",
    motif: "timeline",
    repoUrl: "https://github.com/het-P301204/sunset",
  },
  {
    id: "blackout",
    number: "08",
    group: "lab",
    title: "BlackOut",
    titleLines: ["BLACKOUT"],
    domain: "AUTHORIZATION",
    status: "LAB ENVIRONMENT",
    featured: true,
    problem:
      "When the service holding an authorization decision stops answering, does the application deny the request or quietly grant it? The whole vulnerability is one except block long, and the code containing it has no backdoor, no missing check and no inverted comparison.",
    approach: [
      "Reproduces the fail-open as a working exploit, then the root cause, then the fix",
      "Ships a detection rule for it and a regression test that keeps the fix honest",
      "Demonstrates that the attacker does not need to kill the policy service, only to slow it past the timeout",
    ],
    tools: ["PYTHON", "FASTAPI", "DETECTION ENGINEERING"],
    outcome:
      "A control that fails is not the same object as a control that is absent, and only one of them shows up in a review of the code. I now read every error path around a security decision as a policy statement, because that is what it is.",
    limitations:
      "Local red/blue lab, synthetic data only, never production. Docker is not installed on the machine it was developed on, so the compose file is structurally validated but has not been run — the repository says so in its own limitations document.",
    motif: "control",
    repoUrl: "https://github.com/het-P301204/BlackOut",
  },
  {
    id: "afterlife",
    number: "09",
    group: "lab",
    title: "AfterLife",
    titleLines: ["AFTERLIFE"],
    domain: "SESSION AND IDENTITY",
    status: "LAB ENVIRONMENT",
    featured: true,
    problem:
      "The password reset succeeds and the attacker never leaves. One vulnerability class: the credential that outlives the event which was supposed to kill it.",
    approach: [
      "Reproduces a conditional-revocation bug, its fix, and a three-rule detection pack",
      "Keeps the detection rule that does not work in the repository, so it can be demonstrated failing",
      "Adds a state audit for what those rules structurally cannot see, and a forensic console to read the result",
      "Regenerates every figure from the same payload the console draws and diffs it in CI, so a diagram cannot drift from the code",
    ],
    tools: ["PYTHON", "FASTAPI", "JWT", "OAUTH2", "SIGMA"],
    outcome:
      "Keeping the naive rule in the repository was the most useful decision in it. A rule that looks obviously correct and quietly misses is worth more as a demonstration than a rule that works, because the failure mode is the thing that generalises.",
    limitations:
      "A local lab for one vulnerability class, synthetic throughout. The state audit exists precisely because the detection pack cannot see everything, and the repository is explicit about which lineages it cannot speak to.",
    motif: "identity",
    repoUrl: "https://github.com/het-P301204/AfterLife",
  },
  {
    id: "nullfire",
    number: "10",
    group: "personal",
    title: "NullFire",
    titleLines: ["NULLFIRE"],
    domain: "DETECTION ENGINEERING",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "Zero alerts means one of two things, and a dashboard cannot tell them apart. Detection rules rot quietly: a rule can reference a field the pipeline renamed or a schema that changed two vendor versions ago, keep its ATT&CK tags, keep counting as audit evidence, and never fire again.",
    approach: [
      "Compares Sigma rules against a sample of the logs that actually arrive, after normalisation",
      "Grades each rule by whether a viable matching path still exists against the observed schema",
      "Generates the minimal event that would prove a given rule can fire",
      "Separates UNASSESSED from NULLFIRE, because having nothing to judge a rule against is not a finding",
    ],
    tools: ["PYTHON", "PYSIGMA", "SIEM", "MITRE ATT&CK"],
    outcome:
      "Coverage dashboards measure the existence of rules, not their reachability, and the difference is invisible until someone asks for the event that would have fired. Writing the grader made me stop treating a rule count as a coverage number.",
    limitations:
      "It judges matchability against the sample it is given, not against every event a pipeline can emit. A rule whose log source is absent from that sample is reported as unassessed rather than graded.",
    motif: "trace",
    repoUrl: "https://github.com/het-P301204/NullFire",
  },
  {
    id: "trustedge",
    number: "11",
    group: "personal",
    title: "TrustEdge",
    titleLines: ["TRUSTEDGE"],
    domain: "CLOUD IDENTITY",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "An IAM role's trust policy decides who is allowed to become that role. It is a door, and anyone through it holds real credentials. Two questions decide whether a door matters — how well it is locked, and what is behind it — and you need both answers, because a screen door on a vault is the one that should wake you up.",
    approach: [
      "Grades who outside an account can become an identity inside it, ranked by exposure against blast radius",
      "Flags conditions that read like locks and are not: ...IfExists evaluates true when the key is absent, so a workflow that never mentions an environment sails through",
      "Distinguishes the same missing condition meaning different things in different issuers",
      "Runs entirely offline — no credentials, no API calls, no dependencies — and reports input problems rather than dropping them silently",
    ],
    tools: ["PYTHON", "AWS IAM", "STS", "GITHUB OIDC"],
    outcome:
      "The dangerous IAM finding is rarely a missing condition; it is a condition that reads as a constraint and evaluates as a formality. I now read trust policies for what they evaluate to when a claim is absent, which is not how they read on the page.",
    limitations:
      "It analyses trust policies and never executes anything, never claims a path is proven, and is not a replacement for IAM Access Analyzer — a different tool answering a different question.",
    motif: "identity",
    repoUrl: "https://github.com/het-P301204/TrustEdge-AWS-IAM-analyzer",
  },
  {
    id: "pedigree",
    number: "12",
    group: "personal",
    title: "Pedigree",
    titleLines: ["PEDIGREE"],
    domain: "SUPPLY CHAIN",
    status: "PUBLISHED TOOL",
    problem:
      "npm provenance is solved on the publishing side: publishing with provenance from a CI workflow produces a signed attestation recording which repository and which workflow built the tarball. Consuming it is where the gap is.",
    approach: [
      "Verifies each shipped dependency's origin cryptographically against the source policy expects",
      "Reports what would break if that policy were enforced today, before it is enforced",
      "Keeps observation and policy separate, so a mode cannot change an observation and an observation cannot change a mode",
      "Distinguishes UNVERIFIABLE from MISMATCHED, and states that the first is not an accusation",
    ],
    tools: ["TYPESCRIPT", "SIGSTORE", "SLSA", "NPM"],
    outcome:
      "Most packages without provenance are not suspicious, they are just older than the feature — so a supply-chain gate that cannot say that clearly will be switched off in a week. Designing the report taught me that the absence of evidence has to be its own category, not a failure.",
    limitations:
      "It verifies origin, not the absence of malicious code. Not a vulnerability scanner, not a malware detector and not a replacement for npm audit, and it says so inside its own JSON output. Working and tested against real provenance, not yet published to the registry.",
    motif: "token",
    repoUrl: "https://github.com/het-P301204/Pedigree-npm-provenance-gate",
  },
  {
    id: "spectre-ssrf",
    number: "13",
    group: "lab",
    title: "Spectre SSRF Lab",
    titleLines: ["SPECTRE", "SSRF LAB"],
    domain: "WEB APPLICATION SECURITY",
    status: "CLOSED SIMULATION",
    problem:
      "SSRF is easy to describe and hard to practise safely, because every realistic target is someone else's infrastructure.",
    approach: [
      "Seven services and thirteen scenarios, every one bound to 127.0.0.1",
      "Six documented bypass techniques against a naive string blocklist",
      "Multi-hop redirect chains to reach internal services, with a hardened implementation alongside the vulnerable one for comparison",
      "Three purpose-built detection rules, and a dashboard that shows the attack and the detection together",
    ],
    tools: ["PYTHON", "FLASK", "SSRF", "DETECTION RULES"],
    outcome:
      "Building the blocklist before the bypasses was the point: it is genuinely hard to write one that survives six techniques, which is the argument for allow-lists that no amount of reading it makes as well.",
    limitations:
      "Every service binds to localhost only. No real infrastructure is targeted, the instance-metadata endpoint is simulated locally and never contacted on a real network, and all credentials in it are clearly marked synthetic.",
    motif: "vector",
    repoUrl: "https://github.com/het-P301204/spectre-ssrf-lab",
  },
  {
    id: "securebridge-isms",
    number: "14",
    group: "personal",
    title: "SecureBridge ISMS",
    titleLines: ["SECUREBRIDGE", "ISMS 360"],
    domain: "GOVERNANCE, RISK AND COMPLIANCE",
    status: "PUBLISHED PORTFOLIO",
    problem:
      "Most ISO 27001 material is either theory notes or a template pack. Neither shows an ISMS being built, operated, audited and improved in a company that has to live with it.",
    approach: [
      "Ten connected projects covering context, risk, controls, policies, audit, evidence and management review",
      "An eleventh consolidates the other ten into one integrated view rather than restating them",
      "The consolidation imports each project's dataset, so no integrated figure can drift from its source register",
      "Three required views have no source project and are labelled Demonstration throughout rather than invented",
    ],
    tools: ["ISO 27001:2022", "RISK REGISTER", "INTERNAL AUDIT", "GRC"],
    outcome:
      "The closing position I ended up defending is not that the ISMS works — it is that the organisation can now show whether it does. That distinction is the whole difference between compliance theatre and an evidence trail.",
    limitations:
      "SecureBridge Technologies is a fictional company. No real organisation, client, supplier or auditor appears anywhere in it, and the data is illustrative throughout.",
    motif: "control",
    repoUrl: "https://github.com/het-P301204/SecureBridge-ISMS-360",
  },
  {
    id: "aegislens",
    number: "15",
    group: "personal",
    title: "AegisLens",
    titleLines: ["AEGISLENS"],
    domain: "SECURITY OPERATIONS",
    status: "PUBLISHED TOOL",
    problem:
      "Security evidence arrives as a pile of exports. Organising it, scoring the risk consistently and producing a report a reader can argue with are three different problems usually solved by three different tools.",
    approach: [
      "Organises uploaded sample evidence, tracks findings and generates a report from it",
      "Recalculates the risk score server-side on every write, so a displayed score cannot drift from its inputs",
      "Reports assessment, recommendation and missing information separately, and never claims a weakness it did not observe",
    ],
    tools: ["TYPESCRIPT", "REACT", "PYTHON", "RISK SCORING"],
    outcome:
      "Scoring is the easy half. The half that decides whether anyone trusts the output is being explicit about what was not assessed, which is why missing information is a first-class field rather than a footnote.",
    limitations:
      "Educational and defensive, on synthetic data. Not a replacement for a SIEM, a GRC platform, a vulnerability scanner or a professional audit, and there are no real organisations, credentials, keys or personal data in it.",
    motif: "scan",
    repoUrl: "https://github.com/het-P301204/AegisLens-security-workbench",
  },
  {
    id: "pingmaster",
    number: "16",
    group: "personal",
    title: "PingMaster",
    titleLines: ["PINGMASTER"],
    domain: "NETWORK TOOLING",
    status: "PUBLISHED TOOL",
    problem:
      "Ping answers whether a host replies. It does not show how the latency behaves over time, which is usually the question actually being asked.",
    approach: [
      "Plots latency continuously rather than printing it line by line",
      "Cross-platform, with no runtime to install alongside it",
    ],
    tools: ["RUST", "NETWORKING"],
    outcome:
      "The smallest project here and the only one that is not security work. It is on the list because a graph made a pattern obvious that a scrolling column of numbers had been hiding from me for an hour.",
    limitations:
      "A utility, not a monitoring system. It measures reachability and round-trip time and makes no claim beyond that.",
    motif: "timeline",
    repoUrl: "https://github.com/het-P301204/PingMaster",
  },
];

export const projectsByGroup = projectGroups.map((g) => ({
  ...g,
  items: projects.filter((p) => p.group === g.id),
}));
