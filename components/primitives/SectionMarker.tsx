/**
 * SECTION MARKS.
 *
 * The sections used to be numbered 01–09. Numbers implied a fixed running order
 * that the site does not actually have — the navigation offers five entry
 * points, not a sequence — and they read as chrome rather than meaning.
 *
 * Each section now carries a symbol instead: a figure drawn from what the
 * section is about, on the same 12-unit grid and the same hairline weight as
 * everything else. The same registry feeds the navigation and the section
 * headers, so a mark means one thing in both places. A mark fills when its
 * section owns the viewport.
 */

export type SectionId =
  | "work"
  | "projects"
  | "practice"
  | "experience"
  | "academic"
  | "certifications"
  | "stack"
  | "about"
  | "contact";

type Mark = {
  /** Outline geometry — always drawn. */
  outline: React.ReactNode;
  /** Filled geometry — revealed as the section activates. */
  fill: React.ReactNode;
};

const MARKS: Record<SectionId, Mark> = {
  /* a brief: a sheet with a sealed band across it */
  work: {
    outline: (
      <>
        <path d="M2.4 1.4h7.2v9.2H2.4z" />
        <path d="M2.4 4.6h7.2" />
      </>
    ),
    fill: <rect x="2.4" y="4.6" width="7.2" height="1.6" />,
  },
  /* a case file: a tabbed folder holding a sheet */
  projects: {
    outline: (
      <>
        <path d="M1 3.5h3.4l1 1.6H11v5.4H1z" />
        <path d="M3.4 6.6h5.2" />
      </>
    ),
    fill: <rect x="3.4" y="8" width="5.2" height="1.2" />,
  },
  /* practice: strata, worked through from the top down */
  practice: {
    outline: (
      <>
        <path d="M1.2 3h9.6M1.2 6h9.6M1.2 9h9.6" />
      </>
    ),
    fill: <rect x="1.2" y="2.4" width="6.2" height="1.2" />,
  },
  /* experience: a node on a live line */
  experience: {
    outline: (
      <>
        <path d="M1 6h9.8" />
        <circle cx="6" cy="6" r="2.4" />
      </>
    ),
    fill: <circle cx="6" cy="6" r="1.3" />,
  },
  /* academic: a rising sequence of years */
  academic: {
    outline: (
      <>
        <path d="M1.2 10V7.4M4.4 10V5.6M7.6 10V3.8M10.8 10V2" />
      </>
    ),
    fill: <rect x="10.2" y="1.4" width="1.2" height="1.2" />,
  },
  /* certifications: an impressed seal */
  certifications: {
    outline: (
      <>
        <path d="M6 1.2l4 2.4v4.8l-4 2.4-4-2.4V3.6z" />
      </>
    ),
    fill: <path d="M6 3.6l2.1 1.25v2.5L6 8.6 3.9 7.35v-2.5z" />,
  },
  /* stack: instruments, side by side */
  stack: {
    outline: (
      <>
        <rect x="1.2" y="1.2" width="3.6" height="3.6" />
        <rect x="7.2" y="1.2" width="3.6" height="3.6" />
        <rect x="1.2" y="7.2" width="3.6" height="3.6" />
        <rect x="7.2" y="7.2" width="3.6" height="3.6" />
      </>
    ),
    fill: <rect x="1.2" y="1.2" width="3.6" height="3.6" />,
  },
  /* about: five concerns, one figure */
  about: {
    outline: (
      <>
        <path d="M2 8.6L6 1.6l4 7z" />
        <path d="M2 8.6h8" />
      </>
    ),
    fill: <circle cx="6" cy="1.6" r="1.2" />,
  },
  /* contact: a signal leaving */
  contact: {
    outline: (
      <>
        <path d="M1.2 6h7.2" />
        <path d="M6 3.4L8.6 6 6 8.6" />
      </>
    ),
    fill: <circle cx="1.8" cy="6" r="1.2" />,
  },
};

export default function SectionMarker({
  id,
  className,
}: {
  id: SectionId;
  className?: string;
}) {
  const mark = MARKS[id];
  return (
    <svg
      className={`sec-mark ${className ?? ""}`}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <g className="sec-mark__outline">{mark.outline}</g>
      <g className="sec-mark__fill" fill="currentColor" stroke="none">
        {mark.fill}
      </g>
    </svg>
  );
}
