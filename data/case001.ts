/**
 * CASE / 001 — THE ANOMALOUS REQUEST
 *
 * ENTIRELY FICTIONAL. Synthetic logs, RFC 5737 documentation addresses, no real
 * host, account or organisation. It exists to show a method of reasoning, not
 * to claim an incident ever happened. Nothing in here is a résumé fact.
 *
 * The exercise is correlation, not recall: the visitor selects the rows that
 * support a claim, then picks the claim. Verification checks the evidence, so a
 * right answer chosen for the wrong reasons is reported as unsupported.
 */

export type LogRow = {
  id: string;
  time: string;
  cells: string[];
  /** Marked rows are the ones a careful reader should end up selecting. */
  key?: boolean;
};

export type LogTable = {
  id: "access" | "auth" | "network";
  label: string;
  source: string;
  columns: string[];
  rows: LogRow[];
};

export const disclaimer =
  "FICTIONAL TRAINING SCENARIO · SYNTHETIC DATA · NO REAL SYSTEMS OR PEOPLE";

export const incident = {
  code: "CASE / 001",
  title: "THE ANOMALOUS REQUEST",
  detected: "02:14:07 UTC",
  summary:
    "An internal reporting service returned a 200 on /admin/export to an account that should not hold that permission. The export was 41 MB. Nothing else alerted.",
  objective:
    "Establish how the request was authorised, and whether the data left the network. Use only what the three log sources can support.",
  scope: [
    "app-report-01 · 10.20.4.15 · internal reporting service",
    "Workstation subnet 10.20.4.0/24",
    "Egress via edge firewall",
  ],
};

export const tables: LogTable[] = [
  {
    id: "access",
    label: "ACCESS LOG",
    source: "app-report-01 · nginx",
    columns: ["TIME", "SOURCE", "REQUEST", "STATUS", "BYTES"],
    rows: [
      {
        id: "a1",
        time: "02:02:11",
        cells: ["10.20.4.31", "GET /reports/weekly", "200", "18K"],
      },
      {
        id: "a2",
        time: "02:09:03",
        cells: ["10.20.4.62", "POST /login", "401", "512"],
      },
      {
        id: "a3",
        time: "02:09:41",
        cells: ["10.20.4.62", "POST /login", "401", "512"],
      },
      {
        id: "a4",
        time: "02:10:55",
        cells: ["10.20.4.62", "POST /login", "401", "512"],
      },
      {
        id: "a5",
        time: "02:11:48",
        cells: ["10.20.4.62", "POST /login", "302", "0"],
        key: true,
      },
      {
        id: "a6",
        time: "02:12:30",
        cells: ["10.20.4.62", "GET /dashboard", "200", "22K"],
      },
      {
        id: "a7",
        time: "02:13:58",
        cells: ["10.20.4.62", "GET /admin/export", "403", "290"],
        key: true,
      },
      {
        id: "a8",
        time: "02:14:07",
        cells: ["10.20.4.62", "GET /admin/export", "200", "41M"],
        key: true,
      },
      {
        id: "a9",
        time: "02:20:14",
        cells: ["10.20.4.31", "GET /reports/weekly", "200", "18K"],
      },
    ],
  },
  {
    id: "auth",
    label: "AUTH LOG",
    source: "app-report-01 · application",
    columns: ["TIME", "ACCOUNT", "EVENT", "RESULT", "SOURCE"],
    rows: [
      {
        id: "u1",
        time: "02:09:03",
        cells: ["j.mehta", "password auth", "FAIL", "10.20.4.62"],
      },
      {
        id: "u2",
        time: "02:09:41",
        cells: ["j.mehta", "password auth", "FAIL", "10.20.4.62"],
      },
      {
        id: "u3",
        time: "02:10:55",
        cells: ["j.mehta", "password auth", "FAIL", "10.20.4.62"],
      },
      {
        id: "u4",
        time: "02:11:48",
        cells: ["j.mehta", "password auth", "SUCCESS", "10.20.4.62"],
        key: true,
      },
      {
        id: "u5",
        time: "02:13:58",
        cells: ["j.mehta", "authz check /admin/export", "DENY", "10.20.4.62"],
        key: true,
      },
      {
        id: "u6",
        time: "02:14:02",
        cells: ["svc-report", "session assumed", "GRANTED", "10.20.4.62"],
        key: true,
      },
      {
        id: "u7",
        time: "02:14:07",
        cells: ["svc-report", "authz check /admin/export", "ALLOW", "10.20.4.62"],
        key: true,
      },
      {
        id: "u8",
        time: "03:01:19",
        cells: ["a.shah", "password auth", "SUCCESS", "10.20.4.18"],
      },
    ],
  },
  {
    id: "network",
    label: "NETWORK TRACE",
    source: "edge firewall · flow records",
    columns: ["TIME", "FLOW", "PORT", "BYTES"],
    rows: [
      {
        id: "n1",
        time: "02:11:50",
        cells: ["10.20.4.62 → 10.20.4.15", "8080/tcp", "6K"],
      },
      {
        id: "n2",
        time: "02:14:07",
        cells: ["10.20.4.62 → 10.20.4.15", "8080/tcp", "41M"],
        key: true,
      },
      {
        id: "n3",
        time: "02:14:52",
        cells: ["10.20.4.62 → 198.51.100.23", "443/tcp", "41M"],
        key: true,
      },
      {
        id: "n4",
        time: "02:31:04",
        cells: ["10.20.4.31 → 10.20.4.15", "8080/tcp", "18K"],
      },
      {
        id: "n5",
        time: "02:47:22",
        cells: ["10.20.4.18 → 10.20.4.15", "8080/tcp", "9K"],
      },
    ],
  },
];

/** Everything a complete account has to rest on. */
export const requiredEvidence = ["a5", "a7", "a8", "u4", "u5", "u6", "u7", "n2", "n3"];

export type Hypothesis = {
  id: string;
  text: string;
  verdict: "supported" | "partial" | "wrong";
  why: string;
};

export const hypotheses: Hypothesis[] = [
  {
    id: "h1",
    text: "j.mehta's password was guessed, and j.mehta exported the data.",
    verdict: "partial",
    why: "The first half holds: three failures then a success from one address is a credential attack (T1110). The second half does not — the authorisation check for j.mehta on /admin/export was DENIED at 02:13:58. The export happened under a different principal.",
  },
  {
    id: "h2",
    text: "A credential attack succeeded, the session was escalated to the svc-report service account, and 41 MB left the network.",
    verdict: "supported",
    why: "Every step is carried by a different source and they agree. Access log: three 401s, a 302, a 403, then a 200 of 41 MB. Auth log: the deny for j.mehta, then svc-report assumed four seconds later and allowed. Network trace: 41 MB inbound from the app, then 41 MB outbound to an external host 45 seconds later. The sizes and the ordering match.",
  },
  {
    id: "h3",
    text: "The reporting service misconfigured its permissions and returned the export by mistake.",
    verdict: "wrong",
    why: "A misconfiguration would not deny the same path to the same session four seconds earlier. The 403 at 02:13:58 proves the control worked; what changed was the principal, not the policy.",
  },
  {
    id: "h4",
    text: "The 41 MB response was a legitimate scheduled export that coincided with a failed login.",
    verdict: "wrong",
    why: "A scheduled job would not originate from a workstation address that had just failed authentication three times, and it would not be followed by an equally sized flow to an external host.",
  },
];

export const resolution = {
  verdict: "CREDENTIAL ATTACK → SESSION ESCALATION → EGRESS",
  steps: [
    {
      label: "CONTAIN",
      text: "Disable the svc-report assumption path and the j.mehta session; block 198.51.100.23 at the edge.",
    },
    {
      label: "PRESERVE",
      text: "Snapshot the three log sources before rotation; record hashes and times.",
    },
    {
      label: "REDUCE",
      text: "Rate-limit and alert on repeated 401s per source; require re-authentication before any service-account assumption; alert on outbound flows that match a recent large internal response.",
    },
  ],
  limitation:
    "This is a constructed scenario. Real incidents rarely present three clean sources that agree, and the absence of an alert here is the part that would matter most in practice.",
};

export const method = [
  { n: "01", word: "OBSERVE", line: "Read what the logs say, not what they suggest." },
  { n: "02", word: "CORRELATE", line: "One source is a claim. Three that agree is a finding." },
  { n: "03", word: "VERIFY", line: "Try to break your own account of it first." },
  { n: "04", word: "RESPOND", line: "Contain, preserve, then reduce the next one." },
];
