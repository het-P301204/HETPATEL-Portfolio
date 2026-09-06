/**
 * SOURCE OF TRUTH — practice domains and technical matrix.
 *
 * `basis` records where the capability comes from — internship, lab, coursework
 * or self-study — because that distinction is the honest part of a junior
 * portfolio. No proficiency scores, no percentages, no star ratings: the
 * résumé does not support them and neither does anything else.
 */

export type PracticeDomain = {
  number: string;
  name: string;
  basis: string;
  capabilities: string[];
};

export const practice: PracticeDomain[] = [
  {
    number: "01",
    name: "OFFENSIVE SECURITY",
    basis: "INTERNSHIP + LAB",
    capabilities: [
      "VAPT methodology",
      "Reconnaissance",
      "Enumeration",
      "Scanning and triage",
      "Post-exploitation — lab only",
      "Manual verification of tool output",
    ],
  },
  {
    number: "02",
    name: "APPLICATION SECURITY",
    basis: "INTERNSHIP",
    capabilities: [
      "Web application testing",
      "SQL Injection",
      "Cross-site scripting",
      "Burp Suite",
      "Nikto",
      "Misconfiguration identification",
    ],
  },
  {
    number: "03",
    name: "NETWORK SECURITY",
    basis: "COURSEWORK + LAB",
    capabilities: [
      "TCP/IP",
      "DNS · DHCP",
      "Subnetting · VLAN · NAT",
      "Network enumeration",
      "Traffic analysis",
      "Insecure protocol identification",
    ],
  },
  {
    number: "04",
    name: "DETECTION",
    basis: "TRYHACKME LABS",
    capabilities: [
      "Splunk",
      "SPL queries",
      "Log ingestion and analysis",
      "Failed login detection",
      "Suspicious activity analysis",
      "MITRE ATT&CK mapping",
    ],
  },
  {
    number: "05",
    name: "SYSTEM SECURITY",
    basis: "LAB + SELF-DIRECTED",
    capabilities: [
      "Windows hardening",
      "Linux hardening",
      "Firewall configuration",
      "Privilege control",
      "Security policy enforcement",
      "System administration",
    ],
  },
  {
    number: "06",
    name: "RISK & COMPLIANCE",
    basis: "INTERNSHIP",
    capabilities: [
      "ISO 27001 controls — foundational",
      "Risk assessment support",
      "Compliance mapping",
      "Security documentation",
      "VAPT reporting",
      "Audit support",
    ],
  },
];

export type Tech = {
  name: string;
  lines: [string, string];
};

export type TechGroup = {
  key: string;
  label: string;
  items: Tech[];
};

export const stack: TechGroup[] = [
  {
    key: "recon",
    label: "RECON",
    items: [
      { name: "NMAP", lines: ["SERVICE ENUMERATION", "ATTACK SURFACE MAPPING"] },
      { name: "GOBUSTER", lines: ["CONTENT DISCOVERY", "DIRECTORY ENUMERATION"] },
      { name: "NIKTO", lines: ["WEB SERVER CHECKS", "MISCONFIGURATION SURFACE"] },
    ],
  },
  {
    key: "traffic",
    label: "TRAFFIC",
    items: [
      { name: "WIRESHARK", lines: ["PACKET ANALYSIS", "TRAFFIC INSPECTION"] },
    ],
  },
  {
    key: "vapt",
    label: "VAPT",
    items: [
      { name: "BURP SUITE", lines: ["REQUEST INTERCEPTION", "APPLICATION TESTING"] },
      { name: "OPENVAS", lines: ["VULNERABILITY SCANNING", "RESULT TRIAGE"] },
    ],
  },
  {
    key: "siem",
    label: "SIEM",
    items: [
      { name: "SPLUNK", lines: ["LOG INGESTION", "ALERTING AND DASHBOARDS"] },
      { name: "SPL", lines: ["SEARCH LANGUAGE", "DETECTION QUERIES"] },
    ],
  },
  {
    key: "systems",
    label: "SYSTEMS",
    items: [
      { name: "KALI LINUX", lines: ["TESTING PLATFORM", "TOOLING ENVIRONMENT"] },
      { name: "LINUX", lines: ["HARDENING", "PRIVILEGE CONTROL"] },
      { name: "WINDOWS", lines: ["HARDENING", "POLICY ENFORCEMENT"] },
      { name: "GFI KERIO CONTROL", lines: ["FIREWALL POLICY", "PERIMETER CONFIGURATION"] },
    ],
  },
  {
    key: "networking",
    label: "NETWORKING",
    items: [
      { name: "TCP/IP", lines: ["ROUTING AND ADDRESSING", "PROTOCOL BEHAVIOUR"] },
      { name: "DNS", lines: ["RESOLUTION PATH", "RECONNAISSANCE SURFACE"] },
      { name: "DHCP", lines: ["ADDRESS ASSIGNMENT", "NETWORK TRUST"] },
      { name: "VLAN", lines: ["SEGMENTATION", "BROADCAST CONTROL"] },
      { name: "NAT", lines: ["ADDRESS TRANSLATION", "EXPOSURE BOUNDARY"] },
    ],
  },
  {
    key: "scripting",
    label: "SCRIPTING",
    items: [
      { name: "BASH", lines: ["SCAN AUTOMATION", "SYSTEM ANALYSIS"] },
      { name: "POWERSHELL", lines: ["WINDOWS AUTOMATION", "HOST ENUMERATION"] },
    ],
  },
  {
    key: "frameworks",
    label: "FRAMEWORKS",
    items: [
      { name: "MITRE ATT&CK", lines: ["TACTIC AND TECHNIQUE MAPPING", "T1110 · T1059"] },
      { name: "ISO 27001", lines: ["CONTROL FAMILIES", "COMPLIANCE MAPPING"] },
    ],
  },
];
