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
 * `repoUrl` is filled wherever a public repository exists and empty where none
 * does. That split is the honest state of the archive, not an oversight: some
 * entries describe work with nothing to point at, the rest point at code. An
 * empty value renders no link for that entry alone.
 *
 * ORDER IS DISPLAY ORDER, and `number` follows it. The array is grouped —
 * every `personal` case, then every `lab` case — because the archive renders
 * by stratum, so a number that ran in array order but not in group order came
 * out as "02" followed by "07" on screen with nothing missing between them.
 * Adding a case means inserting it into its own group and renumbering from
 * there, not appending to the end.
 */

export type ProjectMotif =
  | "scan"
  | "vector"
  | "identity"
  | "token"
  | "timeline"
  | "control"
  | "trace";

/**
 * The words a figure prints, supplied by the case rather than baked into the
 * shape.
 *
 * Seven shapes carry fifteen cases, so a shape is reused — which is correct,
 * because the shapes are arguments about structure and several cases share a
 * structure. The labels were reused with them, and labels are not structural:
 * they name a discipline. That is how a post-quantum migration planner came to
 * be captioned DETECTION / CONTAINMENT / RECOVERY.
 *
 * Every slot is optional. Omit it and the figure's own default stands, which
 * is the right answer whenever the shape was chosen because its default
 * vocabulary already fits — the incident-response simulation keeps the
 * incident-response words.
 *
 *   items  the labelled parts of the figure, in drawing order. Must match the
 *          figure's own count or it is ignored, so a miscount degrades to the
 *          default instead of rendering a blank.
 *   lead   the label at the lower left
 *   trail  the label at the lower right
 *   note   the label inside the figure
 *   foot   the caption under the whole figure
 */
export type MotifCaption = {
  items?: string[];
  lead?: string;
  trail?: string;
  note?: string;
  foot?: string;
};

export type ProjectGroup = "personal" | "lab";

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
  /** Overrides for the figure's own labels. See `MotifCaption`. */
  motifCaption?: MotifCaption;
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
    number: "03",
    group: "personal",
    title: "Sunset",
    titleLines: ["SUNSET"],
    domain: "POST-QUANTUM MIGRATION",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "Discovery is solved. Scanners hand over every key in an estate; none of them answer what to migrate first. The model everyone agrees on needs two inputs, and neither can be found by scanning.",
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
    /* The shape is right — this is a case about time — and every word on it
       was wrong. It read DETECTION / CONTAINMENT / RECOVERY, which is the
       incident-response vocabulary, on a tool whose entire argument is that
       ranking should come from a deadline rather than a severity label. */
    motifCaption: {
      items: ["SECRECY LIFETIME", "MIGRATION TIME", "DEADLINE"],
      note: "MOSCA'S LINE",
      foot: "RANKED BY DEADLINE, NOT BY KEY SIZE",
    },
    repoUrl: "https://github.com/het-P301204/sunset",
  },
  {
    id: "nullfire",
    number: "04",
    group: "personal",
    title: "NullFire",
    titleLines: ["NULLFIRE"],
    domain: "DETECTION ENGINEERING",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "Zero alerts means one of two things, and a dashboard cannot tell them apart. Rules rot quietly: one renamed field, and the rule keeps its tags, keeps counting as coverage, and never fires again.",
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
    /* The lanes and the correlation are exactly this case. The foot was not:
       "SYNTHETIC DATA · FICTIONAL SCENARIO" is the incident simulation's
       disclaimer, and this is a published tool. What belongs there is the
       case's own thesis. */
    motifCaption: {
      foot: "A RULE THAT STOPPED FIRING STILL COUNTS AS COVERAGE",
    },
    repoUrl: "https://github.com/het-P301204/NullFire",
  },
  {
    id: "trustedge",
    number: "05",
    group: "personal",
    title: "TrustEdge",
    titleLines: ["TRUSTEDGE"],
    domain: "CLOUD IDENTITY",
    status: "PUBLISHED TOOL",
    featured: true,
    problem:
      "A trust policy decides who may become a role. It is a door, and anyone through it holds real credentials. Two things decide whether it matters: how well it is locked, and what is behind it.",
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
    number: "06",
    group: "personal",
    title: "Pedigree",
    titleLines: ["PEDIGREE"],
    domain: "SUPPLY CHAIN",
    status: "PUBLISHED TOOL",
    problem:
      "npm provenance is solved on the publishing side. Publishing from CI produces a signed attestation naming the repository and workflow that built the tarball. Consuming it is where the gap is.",
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
    /* Issue, sign and verify are the right four beats for an attestation, and
       the case is that verification is the one nobody does. The axis was
       wrong: an npm provenance attestation has no session and no lifetime. */
    motifCaption: {
      items: ["BUILD", "ATTEST", "VERIFY", "TRUST"],
      lead: "PUBLISH",
      trail: "CONSUME",
      note: "THE HALF NOBODY RUNS",
    },
    repoUrl: "https://github.com/het-P301204/Pedigree-npm-provenance-gate",
  },
  {
    id: "securebridge-isms",
    number: "07",
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
    number: "08",
    group: "personal",
    title: "AegisLens",
    titleLines: ["AEGISLENS"],
    domain: "SECURITY OPERATIONS",
    status: "PUBLISHED TOOL",
    problem:
      "Security evidence arrives as a pile of exports. Organising it, scoring risk consistently, and producing a report a reader can argue with are three problems usually solved by three tools.",
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
    /* The figure describes a set with a flagged minority, which is right. It
       said HOSTS and VERIFIED, which belongs to the scanning lab below. */
    motifCaption: { lead: "EVIDENCE 001—012", trail: "RAISED 03" },
    repoUrl: "https://github.com/het-P301204/AegisLens-security-workbench",
  },
  {
    id: "pingmaster",
    number: "09",
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
    /* A time series, which the shape draws well, and the three phases of an
       incident response, which this is not. The case is that a single reply
       says nothing and the shape of the latency over time says everything. */
    motifCaption: {
      items: ["BASELINE", "DRIFT", "LOSS"],
      note: "FIRST SPIKE",
      foot: "THE SHAPE OVER TIME, NOT A SINGLE REPLY",
    },
    repoUrl: "https://github.com/het-P301204/PingMaster",
  },
  /* ----------------------------------------------------------------
     LAB / RESEARCH
     ---------------------------------------------------------------- */
  {
    id: "scanning-lab",
    number: "10",
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
    number: "11",
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
    number: "12",
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
  {
    id: "blackout",
    number: "13",
    group: "lab",
    title: "BlackOut",
    titleLines: ["BLACKOUT"],
    domain: "AUTHORIZATION",
    status: "LAB ENVIRONMENT",
    featured: true,
    problem:
      "When the service holding an authorization decision stops answering, does the application deny the request or quietly grant it? The whole vulnerability is one except block long.",
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
    /* Was "control" — the compliance coverage matrix, which belongs to
       SECUREBRIDGE and says nothing about an authorization decision. This is a
       case about a request that should have been refused and was not, so it
       draws the boundary figure, with the accent on the path that got through.
       Its default trailing label says ONE PATH REFUSED, which is the exact
       opposite of the finding. */
    motif: "identity",
    motifCaption: {
      lead: "ROLE · SCOPE · DECISION",
      trail: "THE PATH THAT SHOULD HAVE BEEN REFUSED",
    },
    repoUrl: "https://github.com/het-P301204/BlackOut",
  },
  {
    id: "afterlife",
    number: "14",
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
    /* Was "identity", the cloud boundary figure, while the credential
       lifecycle figure next to it described this case exactly: a token that is
       issued, signed, verified, and never expires when it should. */
    motif: "token",
    motifCaption: {
      trail: "THE SESSION THAT OUTLIVED THE RESET",
      note: "EXPIRY IS THE HARD PART",
    },
    repoUrl: "https://github.com/het-P301204/AfterLife",
  },
  {
    id: "spectre-ssrf",
    number: "15",
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
    /* A request that branches, one branch reaching somewhere it should not —
       the right shape. PRETEXT and CAPTURE are social-engineering words and
       belong to the phishing case that shares the figure. The foot stays: this
       one really is a closed environment. */
    motifCaption: { items: ["REQUEST", "FETCHER", "INTERNAL", "BLOCKED"] },
    repoUrl: "https://github.com/het-P301204/spectre-ssrf-lab",
  },
];

export const projectsByGroup = projectGroups.map((g) => ({
  ...g,
  items: projects.filter((p) => p.group === g.id),
}));
