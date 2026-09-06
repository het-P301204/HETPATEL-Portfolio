/**
 * SOURCE OF TRUTH — the workstation.
 *
 * A home directory, not a mood board. Every node opens onto content that
 * already exists in `/data`; nothing here invents a fact, and every count shown
 * on an icon is derived at render time rather than typed in.
 *
 * The desk used to scatter objects at hand-picked percentages with a random
 * rotation each. That reads as decoration. Real desktops snap to a grid and
 * fill top-to-bottom then left-to-right, so these are simply listed in the
 * order they should appear and the grid does the placing.
 */

export type NodeKind =
  | "folder"
  | "folder-locked"
  | "document"
  | "certificate"
  | "terminal"
  | "app"
  | "link";

/**
 * Three tiers, laid out as three columns. The desk stays a desk — no headings,
 * no cards — but the things Het actually opens sit nearest the launcher and the
 * reference material sits furthest from it.
 */
export type NodeTier = "primary" | "secondary" | "reference";

export type DesktopNode = {
  id: string;
  tier: NodeTier;
  /** The name as it reads on the desk — a filename, not a headline. */
  name: string;
  kind: NodeKind;
  /** Title bar text once opened. */
  title: string;
  /** Right-hand status in the window header. */
  status: string;
  /** Fallback subtitle; ids with derived counts override this. */
  meta: string;
};

export const nodes: DesktopNode[] = [
  {
    id: "project-files",
    tier: "primary",
    name: "Projects",
    kind: "folder",
    title: "Projects",
    status: "Case archive",
    meta: "",
  },
  {
    id: "certification-archive",
    tier: "secondary",
    name: "Certifications",
    kind: "certificate",
    title: "Certifications",
    status: "Credential archive",
    meta: "",
  },
  {
    id: "case-files",
    tier: "secondary",
    name: "CTF",
    kind: "folder-locked",
    title: "CTF",
    status: "Case 001 — open",
    meta: "1 open case",
  },
  {
    id: "academic-record",
    tier: "reference",
    name: "Academic",
    kind: "document",
    title: "Academic",
    status: "In progress",
    meta: "B.E. 2022 — 2026",
  },
  {
    id: "security-lab",
    tier: "secondary",
    name: "Security Lab",
    kind: "folder",
    title: "Security Lab",
    status: "Practice domains",
    meta: "",
  },
  {
    id: "toolkit",
    tier: "primary",
    name: "Toolkit",
    kind: "folder",
    title: "Toolkit",
    status: "Read only",
    meta: "",
  },
  {
    id: "field-notes",
    tier: "reference",
    name: "Field Notes",
    kind: "document",
    title: "Field Notes",
    status: "Current role",
    meta: "Info eShield",
  },
  {
    id: "about",
    tier: "reference",
    name: "About",
    kind: "document",
    title: "About",
    status: "Profile",
    meta: "readme",
  },
  {
    id: "contact",
    tier: "reference",
    name: "Contact",
    kind: "document",
    title: "Contact",
    status: "Open channel",
    meta: "vcard",
  },
  {
    id: "github",
    tier: "reference",
    name: "GitHub",
    kind: "link",
    title: "GitHub",
    status: "External",
    meta: "",
  },
  {
    id: "terminal",
    tier: "primary",
    name: "Terminal",
    kind: "terminal",
    title: "Terminal",
    status: "hetp@workstation",
    meta: "shell",
  },
];

/**
 * The launcher. Ubuntu keeps it on the left edge, pinned, with a running
 * indicator beside each icon — so this is a subset of the same nodes rather
 * than a second navigation with names of its own.
 */
export const dock: string[] = [
  "project-files",
  "certification-archive",
  "case-files",
  "security-lab",
  "github",
  "contact",
  "terminal",
];
