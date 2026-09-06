/**
 * SOURCE OF TRUTH — certification archive.
 *
 * Every entry is on the résumé. CompTIA Security+ is in progress and is
 * labelled that way everywhere it appears.
 *
 * ── credentialUrl ──────────────────────────────────────────────────────────
 * The résumé carries NO credential URLs. Every entry therefore ships with
 * `credentialUrl: ""`. Nothing is inferred from the provider name and no
 * verification URL is constructed.
 *
 * To publish a credential later, change one line:
 *
 *     credentialUrl: ""  →  credentialUrl: "https://…"
 *
 * The archive component reads the field and switches itself from
 * "CREDENTIAL LINK UNAVAILABLE" to a working "VIEW CREDENTIAL ↗" external
 * link. No component change is required.
 *
 * `year` follows the same rule: only Advent of Cyber carries a year on the
 * résumé, so it is the only entry with one. The rest stay empty rather than
 * guessed.
 */

export type CertificationStatus = "COMPLETED" | "IN PROGRESS";

export type CertificationCategory =
  | "EXAM"
  | "COURSE"
  | "TRAINING"
  | "PATHWAY"
  | "SIMULATION"
  | "COMPETITION"
  | "LABS"
  | "CREDENTIAL SET";

/**
 * `logo` names a generated issuer mark drawn by `IssuerMark`. The site draws
 * its own geometric marks rather than reproducing third-party trademarks.
 */
export type IssuerLogo =
  | "comptia"
  | "google"
  | "microsoft"
  | "cisco"
  | "deloitte"
  | "kryptech"
  | "tryhackme"
  | "credly";

export type Certification = {
  name: string;
  /** Pre-broken for display where the title has to set on two lines. */
  nameLines: string[];
  provider: string;
  /** Empty unless the source states one. Never inferred. */
  year: string;
  category: CertificationCategory;
  status: CertificationStatus;
  logo: IssuerLogo;
  /** "" until Het supplies the real URL. Never constructed. */
  credentialUrl: string;
  /** Extra qualifier shown under the title, e.g. an exam code. */
  ref?: string;
  note?: string;
};

export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    nameLines: ["COMPTIA SECURITY+"],
    provider: "CompTIA",
    year: "",
    category: "EXAM",
    status: "IN PROGRESS",
    logo: "comptia",
    credentialUrl: "",
    ref: "SY0-701",
    note: "Preparing. Not certified.",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    nameLines: ["GOOGLE CYBERSECURITY", "PROFESSIONAL CERTIFICATE"],
    provider: "Google / Coursera",
    year: "",
    category: "COURSE",
    status: "COMPLETED",
    logo: "google",
    credentialUrl: "",
  },
  {
    name: "Student SOC Program Foundations",
    nameLines: ["STUDENT SOC PROGRAM", "FOUNDATIONS"],
    provider: "Microsoft",
    year: "",
    category: "TRAINING",
    status: "COMPLETED",
    logo: "microsoft",
    credentialUrl: "",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    nameLines: ["JUNIOR CYBERSECURITY", "ANALYST CAREER PATH"],
    provider: "Cisco Networking Academy",
    year: "",
    category: "PATHWAY",
    status: "COMPLETED",
    logo: "cisco",
    credentialUrl: "",
  },
  {
    name: "Cybersecurity Job Simulation",
    nameLines: ["CYBERSECURITY", "JOB SIMULATION"],
    provider: "Deloitte Australia / Forage",
    year: "",
    category: "SIMULATION",
    status: "COMPLETED",
    logo: "deloitte",
    credentialUrl: "",
  },
  {
    name: "CTF Excellence Certificate",
    nameLines: ["CTF EXCELLENCE", "CERTIFICATE"],
    provider: "Kryptech",
    year: "",
    category: "COMPETITION",
    status: "COMPLETED",
    logo: "kryptech",
    credentialUrl: "",
  },
  {
    name: "Advent of Cyber 2025",
    nameLines: ["ADVENT OF CYBER 2025"],
    provider: "TryHackMe",
    year: "2025",
    category: "LABS",
    status: "COMPLETED",
    logo: "tryhackme",
    credentialUrl: "",
  },
  {
    name: "Pre-Security",
    nameLines: ["PRE-SECURITY"],
    provider: "TryHackMe",
    year: "",
    category: "PATHWAY",
    status: "COMPLETED",
    logo: "tryhackme",
    credentialUrl: "",
  },
  {
    name: "16 Credly Certifications",
    nameLines: ["16 CREDLY", "CERTIFICATIONS"],
    provider: "Credly — AWS, Azure, IBM and others",
    year: "",
    category: "CREDENTIAL SET",
    status: "COMPLETED",
    logo: "credly",
    credentialUrl: "",
    note: "Issued across cloud, AI/ML, networking and cybersecurity tracks.",
  },
];

/** Derived once so the section header and the desktop window cannot disagree. */
export const certificationStats = {
  total: certifications.length,
  completed: certifications.filter((c) => c.status === "COMPLETED").length,
  pending: certifications.filter((c) => c.status === "IN PROGRESS").length,
  /** How many entries can currently be verified by a visitor. */
  linked: certifications.filter((c) => c.credentialUrl).length,
};
