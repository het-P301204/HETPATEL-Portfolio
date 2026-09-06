/**
 * SOURCE OF TRUTH — certification archive.
 *
 * Every entry is on the résumé. CompTIA Security+ is in progress and is
 * labelled that way everywhere it appears.
 *
 * ── credentialUrl ──────────────────────────────────────────────────────────
 * Nothing is inferred from the provider name and no verification URL is ever
 * constructed. A link is set only when the certificate behind it has been
 * opened and confirmed to name Het.
 *
 * Two are set, both hosted copies of the certificate itself: Advent of Cyber
 * 2025 and the Deloitte / Forage job simulation. Both documents carry his name
 * and a date. Note what this claims and what it does not — a hosted copy is
 * evidence you can read, not issuer-side verification. Where the issuer
 * publishes a verification page (TryHackMe prints a code on its certificate;
 * Forage prints two; Credly and Coursera both expose public credential URLs),
 * that link is strictly better and should replace the copy.
 *
 * Two certificates exist but are deliberately NOT linked:
 *
 *   CTF Excellence (Kryptech) and Student SOC Program Foundations were both
 *   issued as unfilled templates — the recipient line and the date line are
 *   blank on the document. Linking a certificate that names nobody would
 *   weaken the archive rather than support it, which is the opposite of what
 *   this field is for. Ask each issuer to reissue a completed copy, then set
 *   the link.
 *
 * A GDG on Campus Solution Challenge certificate (Hack2skill, ID
 * 2025H2S01GSC-I07241) also exists. It is not listed here: it recognises
 * submitting an idea to a hackathon, not completing security training, and
 * this archive is not the place to blur that.
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
    /**
     * Issuer-side verification, printed on the certificate itself and checked:
     * it resolves to Coursera's own accomplishment page for this credential ID.
     * This is the standard the other entries should reach — Coursera confirms
     * the credential, rather than us hosting a copy of it.
     */
    credentialUrl: "https://coursera.org/verify/professional-cert/3AES6CG2F4LY",
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
    year: "2025",
    category: "PATHWAY",
    status: "COMPLETED",
    logo: "cisco",
    /**
     * Credly's own badge page — issuer-side verification, not a hosted copy.
     * Issued 21 July 2025.
     *
     * Note this badge is also one of the sixteen counted in the Credly set
     * further down, so the archive shows it twice: once on its own because the
     * résumé lists it, and once inside that total. That is a double count and
     * should be resolved deliberately rather than left to a reader to notice.
     */
    credentialUrl:
      "https://www.credly.com/badges/3a77869c-88d1-4332-8360-9c8167ed08ed",
  },
  {
    name: "Cybersecurity Job Simulation",
    nameLines: ["CYBERSECURITY", "JOB SIMULATION"],
    provider: "Deloitte Australia / Forage",
    year: "2025",
    category: "SIMULATION",
    status: "COMPLETED",
    logo: "deloitte",
    /**
     * Issued to Het Patel, 25 June 2025, signed by Deloitte's CHRO and served
     * through Forage. The certificate prints an enrolment verification code
     * and a user verification code; if Forage exposes a public page for those,
     * it belongs here instead of the hosted copy.
     *
     * `year` is set from the certificate itself, which is a documented source —
     * it is not inferred from anything.
     */
    credentialUrl:
      "https://drive.google.com/file/d/1xyst0iuMUrwRkMLv_vPNxlcnOkd6uLZL/view?usp=sharing",
  },
  {
    /**
     * Not previously listed — the certificate turned up in the archive Het
     * supplied rather than on the résumé, and it reads unambiguously: awarded
     * to Het Patel, 21 July 2025, "Cybersecurity Essentials", offered by
     * NASSCOM through the Cisco Networking Academy program. Every field below
     * is copied from that document; none is inferred.
     */
    name: "Cybersecurity Essentials",
    nameLines: ["CYBERSECURITY", "ESSENTIALS"],
    provider: "NASSCOM / Cisco Networking Academy",
    year: "2025",
    category: "COURSE",
    status: "COMPLETED",
    logo: "cisco",
    credentialUrl:
      "https://drive.google.com/file/d/16NX9vB3CliX7MZzCY56MwXBCWcJ7ud6A/view?usp=sharing",
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
    /**
     * The certificate is issued to Het Patel, dated 30 December 2025, and
     * carries TryHackMe's own code THM-CWIOTNWVVT. TryHackMe publishes a
     * verification page for that code, which would be first-party proof rather
     * than a hosted copy — swap this link for it once the page has been opened
     * and confirmed. It is not set here because it could not be checked: the
     * site sits behind a bot challenge that answers automated requests with a
     * checkpoint page, and this file does not carry unverified URLs.
     */
    credentialUrl:
      "https://drive.google.com/file/d/1opbXn4cec8OkARD9d1fbZgOAKzSwdHGr/view?usp=sharing",
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
    /**
     * Corrected against the profile itself, which lists all sixteen: fifteen
     * are Google Cloud skill badges and one is the Cisco path. There is no
     * AWS, Azure or IBM badge on the account, and the previous wording said
     * there was. The count is right; the attribution was not.
     */
    provider: "Credly — Google Cloud and Cisco",
    year: "2024–2025",
    category: "CREDENTIAL SET",
    status: "COMPLETED",
    logo: "credly",
    credentialUrl: "https://www.credly.com/users/het-patel.388f8bb5",
    note: "Fifteen Google Cloud skill badges — compute, storage, networking, serverless, Looker, Vertex AI — plus the Cisco security path. One is security; the rest are cloud and AI/ML.",
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
