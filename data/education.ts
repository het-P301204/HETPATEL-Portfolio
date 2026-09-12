/**
 * SOURCE OF TRUTH — academic record.
 *
 * The résumé gives the degree, the institution and the span: Sept 2022 to
 * June 2026, now completed. It does NOT date the coursework, and it does not
 * say what happened in any particular year.
 *
 * So the journey is five years wide and honest about which of them it can
 * actually speak to. 2022, 2025 and 2026 carry anchors the source supports.
 * 2023 and 2024 carry no invented milestone — they are marked as undated and
 * say so on the page. Filling them in is Het's to do, not mine to guess.
 *
 * Location is deliberately not a field. It is temporary and excluded from the
 * site by instruction.
 */

export const education = {
  institution: "C.K. PITHAWALA COLLEGE OF ENGINEERING AND TECHNOLOGY",
  degree: "B.E. COMPUTER ENGINEERING",
  start: "SEPT 2022",
  end: "JUNE 2026",
  /**
   * The degree is finished. This read "EXPECTED" while it was in progress and
   * the qualifier is now empty, which is the whole point of keeping it as a
   * field: the span never changes, only what the site is willing to say about
   * it. Empty renders as nothing rather than as a word doing no work.
   */
  endQualifier: "",
};

export type JourneyState = "DONE" | "UNDATED" | "IN PROGRESS";

export type JourneyMark = {
  year: string;
  state: JourneyState;
  label: string;
  detail: string;
  /** Dated events only. An empty list means the source records none. */
  events: { when: string; what: string }[];
};

export const journey: JourneyMark[] = [
  {
    year: "2022",
    state: "DONE",
    label: "PROGRAMME BEGINS",
    detail:
      "Enrolled on the four-year B.E. Computer Engineering programme at C.K. Pithawala College of Engineering and Technology.",
    events: [{ when: "SEPT 2022", what: "B.E. Computer Engineering — enrolled" }],
  },
  {
    year: "2023",
    state: "UNDATED",
    label: "IN PROGRAMME",
    detail:
      "Mid-degree. The coursework on the résumé is not dated to a year, so nothing is assigned to this one.",
    events: [],
  },
  {
    year: "2024",
    state: "UNDATED",
    label: "IN PROGRAMME",
    detail:
      "Mid-degree. Same position: the record supports the span, not a milestone inside it.",
    events: [],
  },
  {
    year: "2025",
    state: "DONE",
    label: "APPLIED LAB WORK",
    detail:
      "The first year the record dates anything outside the degree — the TryHackMe Advent of Cyber 2025 series, and the Splunk and MITRE ATT&CK work that came with it.",
    events: [
      { when: "2025", what: "Advent of Cyber 2025 — TryHackMe, completed" },
    ],
  },
  {
    year: "2026",
    state: "DONE",
    label: "INTERNSHIP AND GRADUATION",
    detail:
      "The internship at Info eShield Cyber Solutions ran alongside the final year of the degree: testing applications in the day, finishing the programme around it. The degree completed in June.",
    events: [
      {
        when: "JAN 2026",
        what: "Cybersecurity Intern — Info eShield Cyber Solutions",
      },
      { when: "JUNE 2026", what: "B.E. Computer Engineering — awarded" },
    ],
  },
];

export const coursework = [
  { label: "NETWORK SECURITY", note: "Controls, protocols, attack surface" },
  { label: "CRYPTOGRAPHY", note: "Primitives and their failure modes" },
  { label: "OPERATING SYSTEMS", note: "Privilege, process, memory" },
  { label: "COMPUTER NETWORKS", note: "TCP/IP, routing, segmentation" },
  { label: "DATABASE MANAGEMENT SYSTEMS", note: "Query, transaction, access" },
  { label: "CLOUD COMPUTING", note: "Identity, configuration, tenancy" },
];
