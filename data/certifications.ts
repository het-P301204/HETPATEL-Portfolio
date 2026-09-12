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
 * Ten of the eleven are set now, and they are not equal evidence. Three are
 * issuer-side verification — Coursera's accomplishment page, Credly's badge
 * page, and the Credly profile — and the rest are hosted copies of the
 * certificate itself. Note what a hosted copy claims and what it does not: it
 * is evidence you can read, not proof the issuer stands behind. Where the
 * issuer publishes a verification page (TryHackMe prints a code on its
 * certificate; Forage prints two), that link is strictly better and should
 * replace the copy.
 *
 * The section header states the split, so a reader is told how many entries
 * can be checked rather than being left to click through eleven and find out.
 *
 * Two of those hosted copies — CTF Excellence (Kryptech) and Student SOC
 * Program Foundations — were issued as unfilled templates: the recipient line
 * and the date line are blank on the document. They are linked at Het's
 * instruction and each carries that caveat at its own entry. They evidence the
 * event, not the attendee. Ask each issuer to reissue a completed copy, then
 * replace the link.
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
    /**
     * Linked at Het's instruction. Same caveat as the Kryptech certificate:
     * the issuer shipped it as an unfilled template — the line after
     * "Presented to" is empty and so is the one after "Completed on", which
     * is also why `year` stays empty here rather than being guessed. It
     * evidences the training, not the attendee. Replace with a completed copy
     * when the issuer provides one.
     */
    credentialUrl:
      "https://drive.google.com/file/d/1F42iayTbbg1vNjOiTTPdAdtRG2-hsmip/view?usp=sharing",
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
    provider: "Kryptech Cyber Solutions",
    year: "2025",
    category: "COMPETITION",
    status: "COMPLETED",
    logo: "kryptech",
    /**
     * Kryptech Cyber Solutions — CTF 2025, signed by their CEO. Linked at
     * Het's instruction. Read it before relying on it: the issuer left the
     * recipient line and the participation date blank on the document, so it
     * evidences the event rather than who attended. `year` is taken from the
     * award text ("CTF 2025"), which is printed, not from the blank date.
     * A reissued copy carrying his name should replace this link.
     */
    credentialUrl:
      "https://drive.google.com/file/d/1_4fSzEz3oKM1spZuY2ltXC8L3cK-ANDM/view?usp=sharing",
  },
  {
    /**
     * Read off the certificate: awarded to Het Patel, 11 September 2026, for
     * the "Cyber Security 101" learning path, 45 hours 23 minutes of course
     * duration, TryHackMe code THM-OMHAPZMCTO. The duration is printed on the
     * document and is the only hours figure on the site, which is why it is
     * quoted rather than rounded.
     */
    name: "Cyber Security 101",
    nameLines: ["CYBER SECURITY 101"],
    provider: "TryHackMe",
    year: "2026",
    category: "PATHWAY",
    status: "COMPLETED",
    logo: "tryhackme",
    ref: "45H 23M",
    credentialUrl:
      "https://drive.google.com/file/d/1C493jcsupVXW2aZSm_ljER7guO3FuVwb/view?usp=sharing",
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
    /* Read off the certificate: Het Patel, 9 January 2026, TryHackMe code
       THM-QWO4GDKPTL, 7h 38m course duration printed on the document. */
    year: "2026",
    category: "PATHWAY",
    status: "COMPLETED",
    logo: "tryhackme",
    ref: "7H 38M",
    credentialUrl:
      "https://drive.google.com/file/d/1xDITP8lItNHnIgNZGSNCXL6FKhXpjmmM/view?usp=sharing",
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

/**
 * Issuer-side verification, told apart from a hosted copy by where the link
 * points. A Coursera accomplishment page or a Credly badge page is the issuer
 * asserting the credential; a Drive link is a scan of a document that the
 * issuer knows nothing about.
 *
 * The distinction is drawn here rather than recorded by hand on each entry,
 * because a hand-kept flag drifts the moment a link is replaced with a better
 * one — which is exactly what several of these entries are waiting for.
 */
const HOSTED_COPY_HOSTS = ["drive.google.com"];

const isIssuerVerified = (url: string) =>
  Boolean(url) && !HOSTED_COPY_HOSTS.some((h) => url.includes(h));

/** Derived once so the section header and the desktop window cannot disagree. */
export const certificationStats = {
  total: certifications.length,
  completed: certifications.filter((c) => c.status === "COMPLETED").length,
  pending: certifications.filter((c) => c.status === "IN PROGRESS").length,
  /** Entries carrying any link at all, issuer page or hosted copy. */
  linked: certifications.filter((c) => c.credentialUrl).length,
  /** Entries the issuer itself confirms. */
  issuerVerified: certifications.filter((c) => isIssuerVerified(c.credentialUrl))
    .length,
  /** Entries evidenced only by a copy of the document. */
  hostedCopy: certifications.filter(
    (c) => c.credentialUrl && !isIssuerVerified(c.credentialUrl),
  ).length,
};
