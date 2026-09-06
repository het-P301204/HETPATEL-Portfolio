/**
 * SOURCE OF TRUTH — the living section.
 *
 * `entries` is deliberately empty. Nothing published yet, so the section says
 * exactly that. Add an object here — write-up, CTF note, experiment — and the
 * lab renders it without any component change.
 *
 * `directions` are project directions taken from the portfolio strategy
 * document. NONE of them has been started. Each carries its own state so that
 * a reader can never mistake an intention for a result.
 */

export type LabEntry = {
  date: string; // ISO — YYYY-MM-DD
  kind: "WRITE-UP" | "EXPERIMENT" | "CTF" | "NOTE" | "TOOL";
  title: string;
  summary: string;
  href?: string;
};

export const entries: LabEntry[] = [];

export type Direction = {
  number: string;
  title: string;
  premise: string;
  /** SELECTED = chosen as the next build. CONSIDERED = catalogued, undecided. */
  state: "SELECTED" | "CONSIDERED";
  domain: string;
};

export const directions: Direction[] = [
  {
    number: "099",
    title: "CONTROL ASSURANCE LEDGER",
    premise:
      "Continuously prove a control is enforced everywhere, with tamper-evident evidence, instead of a screenshot that was true once.",
    state: "SELECTED",
    domain: "COMPLIANCE ENGINEERING",
  },
  {
    number: "100",
    title: "CONTROL-TO-CODE TRACEABILITY MAPPER",
    premise:
      "Link every compliance control to the code and configuration that actually implements it, so the mapping stops living in individual memories.",
    state: "SELECTED",
    domain: "COMPLIANCE ENGINEERING",
  },
  {
    number: "101",
    title: "EVIDENCE FRESHNESS MONITOR",
    premise:
      "Treat the age of compliance evidence as a first-class risk. A control verified eleven months ago is not a control verified this morning.",
    state: "CONSIDERED",
    domain: "GRC",
  },
  {
    number: "016",
    title: "SECURITY GATE EFFICACY DASHBOARD",
    premise:
      "Measure which pipeline security gates have ever caught a real vulnerability, and which only spend developer time.",
    state: "CONSIDERED",
    domain: "DEVSECOPS",
  },
  {
    number: "098",
    title: "REMEDIATION FRICTION ANALYZER",
    premise:
      "Diagnose why remediation is slow — ownership, windows, dependencies — rather than reporting that it is.",
    state: "CONSIDERED",
    domain: "VULNERABILITY MANAGEMENT",
  },
  {
    number: "118",
    title: "CONTROL COVERAGE CARTOGRAM",
    premise:
      "Render where controls actually apply, weighted by criticality and exposure, so the missing ten percent stops hiding inside ninety.",
    state: "CONSIDERED",
    domain: "SECURITY PROGRAM",
  },
  {
    number: "119",
    title: "INCIDENT NARRATIVE RECONSTRUCTOR",
    premise:
      "Turn correlated events into a readable causal account with evidence linked to every claim.",
    state: "CONSIDERED",
    domain: "INCIDENT RESPONSE",
  },
];
