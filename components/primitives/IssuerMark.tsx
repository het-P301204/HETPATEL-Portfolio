import type { IssuerLogo } from "@/data/certifications";

/**
 * Issuer marks, drawn rather than fetched.
 *
 * These are deliberately NOT the issuers' trademarks. Reproducing eight
 * companies' logos on a personal site is a licensing problem and a visual one —
 * eight foreign brand systems would overrun a page built from hairlines. Each
 * mark is instead a geometric figure derived from the same 24-unit grid as the
 * rest of the site, distinct enough to identify an entry at a glance and
 * consistent enough to read as one archive.
 *
 * Adding an issuer is one entry in `MARKS` plus one union member in the data.
 */
const MARKS: Record<IssuerLogo, React.ReactNode> = {
  /* exam board: a ruled block, half filled — an exam half taken */
  comptia: (
    <>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 12h18" />
      <path d="M3 4h9v8H3z" fill="currentColor" stroke="none" opacity="0.9" />
    </>
  ),
  /* course platform: four quadrants, one resolved */
  google: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17M3.5 12h17" />
      <path d="M12 3.5A8.5 8.5 0 0120.5 12H12z" fill="currentColor" stroke="none" opacity="0.9" />
    </>
  ),
  /* four panes: the operations console */
  microsoft: (
    <>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" fill="currentColor" stroke="none" opacity="0.9" />
      <rect x="13" y="3.5" width="7.5" height="7.5" />
      <rect x="3.5" y="13" width="7.5" height="7.5" />
      <rect x="13" y="13" width="7.5" height="7.5" />
    </>
  ),
  /* network: rising nodes on a bus */
  cisco: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20v-5M10 20v-9M14 20v-12M18 20v-7" />
      <circle cx="6" cy="14" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="10" cy="10" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  /* simulation: a bounded scenario with an interior path */
  deloitte: (
    <>
      <rect x="3.5" y="5" width="17" height="14" />
      <path d="M7 15l3.5-4.5L13 13l4-5" />
      <circle cx="17" cy="8" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  /* competition: a flag on a mast */
  kryptech: (
    <>
      <path d="M6 21V3" />
      <path d="M6 4h12l-3 4 3 4H6z" />
      <path d="M6 4h9l-2.2 4L15 12H6z" fill="currentColor" stroke="none" opacity="0.85" />
    </>
  ),
  /* labs: a stepped ladder of completed rooms */
  tryhackme: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" />
      <path d="M3.5 9h17M3.5 14.5h17M9 3.5v17" />
      <rect x="3.5" y="14.5" width="5.5" height="6" fill="currentColor" stroke="none" opacity="0.9" />
    </>
  ),
  /* credential set: stacked sheets */
  credly: (
    <>
      <path d="M4 7.5l8-4 8 4-8 4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16.5l8 4 8-4" />
    </>
  ),
};

export default function IssuerMark({
  logo,
  className,
}: {
  logo: IssuerLogo;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {MARKS[logo]}
    </svg>
  );
}
