/**
 * SOURCE OF TRUTH — field experience.
 *
 * One role today. The shape is built for more: a role is a header plus a list
 * of tracks, and a second role is a second object in this array — no component
 * changes, no layout decisions to re-make.
 *
 * Location is deliberately absent. Het's current location is temporary and is
 * excluded from the site by instruction, so it is not a field on this type.
 *
 * The résumé bullets are the base. Two tracks go beyond it:
 *
 *   REGULATORY AUDIT SUPPORT — CSCRF and IRDAI engagement work, confirmed
 *   directly by Het and cleared by him for publication at a high level through
 *   his Info eShield role. Publishable: engagement type, framework, type of
 *   work, his personal contribution, general methodology. NOT publishable, and
 *   therefore absent here: client names, sector detail beyond "financial",
 *   findings, evidence, control results, counts, metrics, internal systems, or
 *   dates precise enough to correlate to an engagement. Attribution is
 *   "contributed to" / "assisted"; never lead, owner or independent auditor.
 *
 * Nothing is quantified anywhere, because nothing in the source is.
 */

export type RoleTrack = {
  id: string;
  label: string;
  /** The one line shown before the track is opened. */
  summary: string;
  /** Revealed on interaction. */
  detail: string[];
  /**
   * What the area produced FOR HET — a method, a habit, a changed assumption.
   * Never a result on someone else's system: none is documented and none may
   * be published.
   */
  outcome: string;
  tools?: string[];
  /** Shown in the accent, for boundaries a reader should not have to infer. */
  note?: string;
};

export type Role = {
  id: string;
  org: string;
  title: string;
  discipline: string;
  start: string;
  end: string;
  status: "CURRENT" | "PAST";
  summary: string;
  /**
   * The role in context — what surrounds it, not what it consists of. The
   * EXPERIENCE section renders these; the tracks belong to WORK. Splitting them
   * is the whole point: one section says where and when, the other says what.
   */
  context: { label: string; value: string }[];
  tracks: RoleTrack[];
};

export const experience: Role[] = [
  {
    id: "info-eshield",
    org: "INFO ESHIELD CYBER SOLUTIONS",
    title: "CYBERSECURITY INTERN",
    discipline: "VAPT · GRC · RISK & COMPLIANCE",
    start: "JAN 2026",
    end: "PRESENT",
    status: "CURRENT",
    summary:
      "Testing web applications, and working the compliance side of the same problem — where a finding has to become a control, and a control has to become a document somebody will accept.",
    context: [
      { label: "TYPE", value: "Internship · ongoing" },
      { label: "ALONGSIDE", value: "Final year of the B.E. programme" },
      { label: "SCOPE", value: "Assigned client engagements" },
      { label: "ATTRIBUTION", value: "Assisted and contributed — not lead" },
    ],
    tracks: [
      {
        id: "vapt",
        label: "WEB APPLICATION PENETRATION TESTING",
        summary: "Testing assigned scope with Burp Suite, Nmap and Nikto.",
        detail: [
          "Worked assigned application scope rather than choosing targets — reconnaissance, enumeration, then request-level testing.",
          "Intercepted and replayed requests to establish what an application accepts, and what it returns when it should not.",
          "Verified tool output by hand before it was written down. An unverified scanner result is a claim, not a finding.",
        ],
        outcome:
          "A working habit: separate what a tool reported from what I could reproduce, and write the remediation step in the same sitting as the issue. The second half is what makes a report usable by the person who has to fix it.",
        tools: ["BURP SUITE", "NMAP", "NIKTO"],
      },
      {
        id: "vulnerabilities",
        label: "VULNERABILITY IDENTIFICATION",
        summary:
          "SQL Injection, XSS and misconfiguration, with remediation documented for each.",
        detail: [
          "Identified injection and cross-site scripting issues in application scope, and configuration weaknesses in the surface around it.",
          "Wrote the remediation step alongside each issue, so the record was actionable rather than only descriptive.",
        ],
        outcome:
          "An issue is only worth recording if the person fixing it can act on it without coming back to ask me what I meant.",
        tools: ["SQL INJECTION", "XSS", "MISCONFIGURATION"],
        note: "No finding, severity, count or client from any engagement appears on this site.",
      },
      {
        id: "risk",
        label: "RISK ASSESSMENT & CONTROL MAPPING",
        summary:
          "Assisted on risk assessment and on mapping controls to ISO 27001 and internal policy.",
        detail: [
          "Supported risk assessment work — the translation from a technical issue into a stated likelihood and impact.",
          "Mapped controls against ISO 27001 and internal policy, which is where a finding stops being a request and becomes an obligation.",
        ],
        outcome:
          "Risk turned out to be a translation problem more than a scoring one — the hard part is stating an issue in terms the people who own the control already use.",
        tools: ["ISO 27001", "INTERNAL POLICY"],
        note: "ISO 27001 at the level the résumé states: a basic understanding of controls, risk management and compliance frameworks.",
      },
      {
        id: "regulatory",
        label: "REGULATORY AUDIT SUPPORT — CSCRF · IRDAI",
        summary:
          "Contributed to audit work carried out under the CSCRF and IRDAI frameworks in the financial sector.",
        detail: [
          "Participated in audit engagements conducted against the CSCRF and IRDAI frameworks, through my role at Info eShield Cyber Solutions.",
          "The work was control-facing: understanding what a regulator requires, what evidence demonstrates it, and where a stated control and an operating one diverge.",
          "This is where compliance stopped being a vocabulary to me and started being a set of things somebody has to be able to check.",
        ],
        outcome:
          "Compliance stopped reading as vocabulary. A control is a claim somebody has to be able to check, and most of the difficulty sits in the evidence rather than in the control itself.",
        tools: ["CSCRF", "IRDAI", "CONTROL ASSESSMENT"],
        note: "Assisted and contributed — not as lead, owner or independent auditor. Client, sector detail, findings, evidence and control results are confidential and are not published here or on request.",
      },
      {
        id: "reporting",
        label: "REPORTING & AUDIT DOCUMENTATION",
        summary:
          "Prepared VAPT reports and supported security audit documentation.",
        detail: [
          "Wrote up assessment work as VAPT reports — the part where the reader is not the person who found the issue.",
          "Supported the documentation that carries an audit: the statement a reviewer accepts, traced back to the thing that was actually tested.",
        ],
        outcome:
          "Writing for a reader who was not in the room is the part that decides whether any of the rest of it lands.",
        tools: ["VAPT REPORTING", "AUDIT DOCUMENTATION"],
      },
    ],
  },
];
