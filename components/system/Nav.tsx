"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { practice, stack } from "@/data/skills";
import { journey } from "@/data/education";
import { certificationStats } from "@/data/certifications";
import { useStage } from "@/lib/stage";
import { useMode } from "@/lib/mode";
import MagneticElement from "@/components/primitives/MagneticElement";
import SectionMarker, {
  type SectionId,
} from "@/components/primitives/SectionMarker";
import ThemeToggle from "@/components/system/ThemeToggle";
import { useOverlay } from "@/lib/useOverlay";
import { cn } from "@/lib/cn";

/* Five entry points, in the order a reviewer actually wants them: what he has
   done, what proves it, what he has built, who he is, how to reach him. Each
   carries its section's mark rather than a number — the same mark the section
   header carries, so the two are recognisably one system. */
const PRIMARY: { id: SectionId; label: string }[] = [
  { id: "experience", label: "EXPERIENCE" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "about", label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

/* The full index — a system map rather than a menu. Each destination carries
   its own mark, a one-line brief and a count read from the data, so the panel
   on the right can say what you are about to open before you open it. Counts
   are derived; nothing here can drift from the sections it describes. */
const INDEX: {
  id: SectionId;
  label: string;
  brief: string;
  stat: string;
}[] = [
  {
    id: "experience",
    label: "FIELD EXPERIENCE",
    brief: "The role, the period, and what surrounds it. Where and when — not what.",
    stat: `${String(experience.length).padStart(2, "0")} ROLE`,
  },
  {
    id: "work",
    label: "SELECTED PROFESSIONAL WORK",
    brief:
      "Engagement work by area: testing, vulnerability identification, risk and control mapping, regulatory audit, reporting.",
    stat: `${String(experience[0].tracks.length).padStart(2, "0")} AREAS`,
  },
  {
    id: "projects",
    label: "PROJECTS — CASE ARCHIVE",
    brief:
      "Built outside any engagement: personal builds, lab environments, competition and investigation work.",
    stat: `${String(projects.length).padStart(2, "0")} CASES`,
  },
  {
    id: "practice",
    label: "SECURITY PRACTICE",
    brief:
      "Capability, and the basis each one actually rests on — internship, lab, coursework or self-directed.",
    stat: `${String(practice.length).padStart(2, "0")} DOMAINS`,
  },
  {
    id: "academic",
    label: "ACADEMIC JOURNEY",
    brief:
      "2022 to 2026 as one track, with the years the record cannot date marked as undated.",
    stat: `${String(journey.length).padStart(2, "0")} YEARS`,
  },
  {
    id: "certifications",
    label: "CERTIFICATION ARCHIVE",
    brief:
      "Credentials filed as evidence, each stating its own verification status.",
    stat: `${String(certificationStats.total).padStart(2, "0")} ARTIFACTS`,
  },
  {
    id: "stack",
    label: "TECHNICAL TOOLKIT",
    brief: "Tooling, protocols and frameworks, each with the function it serves.",
    stat: `${String(stack.reduce((n, g) => n + g.items.length, 0)).padStart(2, "0")} TOOLS`,
  },
  {
    id: "about",
    label: "ABOUT",
    brief:
      "How the work is approached, and what it deliberately does not claim.",
    stat: "READ",
  },
  {
    id: "contact",
    label: "CONTACT",
    brief: "Email, LinkedIn, and an honest state for the GitHub that is not linked.",
    stat: "03 CHANNELS",
  },
];

/**
 * Minimal by instruction and by conviction: a wordmark, four words, and a
 * hairline that reports how far through the document you are. The labels roll
 * rather than underline, so the navigation behaves like the rest of the site.
 */
export default function Nav() {
  const { ready } = useStage();
  const { change } = useMode();
  const [compact, setCompact] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [active, setActive] = useState<string>("top");
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLSpanElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const closeIndex = useCallback(() => setOpen(false), []);

  /* The index previews before it navigates: the right-hand panel follows the
     pointer or the keyboard, and falls back to wherever the reader already is
     rather than sitting empty. */
  const [hover, setHover] = useState<SectionId | null>(null);
  const [committing, setCommitting] = useState<SectionId | null>(null);
  const preview =
    INDEX.find((x) => x.id === (hover ?? active)) ?? INDEX[0];

  /* Selecting is a short transition, not a jump: the chosen row's rule runs
     the width of the field, then the overlay leaves and the anchor scroll —
     already owned by SmoothScroll — takes over. */
  const commit = useCallback((id: SectionId) => {
    setCommitting(id);
    window.setTimeout(() => {
      setOpen(false);
      setCommitting(null);
    }, 260);
  }, []);

  /* A closed index has nothing hovered. */
  useEffect(() => {
    if (!open) setHover(null);
  }, [open]);

  /* progress, compaction, and inversion over dark sections — one listener */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const max = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        setCompact(y > 40);
        if (bar.current)
          bar.current.style.transform = `scaleX(${Math.min(1, y / max)})`;

        // The bar reads whatever surface is behind it, not the section it links to.
        const band = 34;
        let dark = false;
        document.querySelectorAll(".on-ink").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= band && r.bottom >= band) dark = true;
        });
        setInverted(dark);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* which section owns the viewport */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section], #top");
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .slice(0, 1)
          .forEach((e) => setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* The index is an overlay like any other: its own scroll lock, Escape to
     close, focus trapped inside and handed back to the INDEX button. */
  useOverlay({
    open,
    onClose: closeIndex,
    owner: "site-index",
    ref: overlay,
  });

  return (
    <>
      <header
        className={cn(
          "nav",
          compact && "is-compact",
          ready && "is-ready",
          inverted && "is-inverted",
        )}
        data-open={open}
      >
        <div className="nav__inner shell">
          <a className="sr-only-focusable t-mono" href="#experience">
            SKIP TO THE WORK
          </a>

          <MagneticElement strength={0.22}>
            <a
              href="#top"
              className="nav__mark t-mono"
              data-cursor="link"
              aria-label="Het Patel — back to top"
            >
              HET PATEL
            </a>
          </MagneticElement>

          <nav className="nav__links" aria-label="Primary">
            {PRIMARY.map((item) => (
              <MagneticElement key={item.id} strength={0.28}>
                <a
                  href={`#${item.id}`}
                  className={cn("nav__link", active === item.id && "is-active")}
                  data-cursor="link"
                  aria-current={active === item.id ? "true" : undefined}
                >
                  <SectionMarker id={item.id} className="nav__glyph" />
                  <span className="nav__roll">
                    <span>{item.label}</span>
                    <span aria-hidden="true">{item.label}</span>
                  </span>
                </a>
              </MagneticElement>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="nav__index-btn t-mono"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-index"
            data-cursor="link"
          >
            {open ? "CLOSE" : "INDEX"}
          </button>
        </div>
        <span className="nav__progress" aria-hidden="true">
          <span ref={bar} />
        </span>
      </header>

      <div
        id="site-index"
        ref={overlay}
        className={cn("index-overlay", open && "is-open")}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site index"
      >
        {/* A system map: what the site holds on the left, the destinations in
            the middle, and what you are about to open on the right. */}
        <div className="index-overlay__inner shell">
          <span className="ix__frame" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>

          <aside className="ix__meta t-mono-sm">
            <p className="ix__meta-title">INDEX</p>
            <dl>
              <div>
                <dt>DESTINATIONS</dt>
                <dd>{String(INDEX.length).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>POSITION</dt>
                <dd>
                  {(() => {
                    const i = INDEX.findIndex((x) => x.id === active);
                    return i < 0
                      ? "TOP"
                      : `${String(i + 1).padStart(2, "0")} / ${String(INDEX.length).padStart(2, "0")}`;
                  })()}
                </dd>
              </div>
              <div>
                <dt>SELECTED</dt>
                <dd className="ix__meta-sel">{preview.label}</dd>
              </div>
            </dl>
          </aside>

          <ol className="ix__list">
            {INDEX.map((item, i) => (
              <li key={item.id} style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={`#${item.id}`}
                  onClick={() => commit(item.id)}
                  onPointerEnter={() => setHover(item.id)}
                  onFocus={() => setHover(item.id)}
                  onPointerLeave={() => setHover(null)}
                  onBlur={() => setHover(null)}
                  className={cn(
                    "ix__row",
                    active === item.id && "is-active",
                    preview.id === item.id && "is-previewing",
                    committing === item.id && "is-committing",
                  )}
                  data-cursor="inspect"
                  data-cursor-label="OPEN"
                  data-cursor-index={String(i + 1).padStart(2, "0")}
                >
                  <span className="ix__row-rule" aria-hidden="true" />
                  <span className="ix__row-n t-mono-sm" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <SectionMarker id={item.id} className="ix__row-mark" />
                  <span className="t-display ix__row-label">{item.label}</span>
                  <span className="ix__row-stat t-mono-sm">{item.stat}</span>
                </a>
              </li>
            ))}
          </ol>

          <aside className="ix__context" aria-live="polite">
            <SectionMarker id={preview.id} className="ix__context-mark" />
            <p className="t-mono ix__context-label">{preview.label}</p>
            <p className="t-body ix__context-brief">{preview.brief}</p>
            <p className="t-mono-sm ix__context-stat">{preview.stat}</p>
          </aside>

          <div className="ix__foot t-mono-sm text-grey">
            <button
              type="button"
              className="index-overlay__change"
              onClick={() => {
                setOpen(false);
                change();
              }}
              data-cursor="link"
            >
              ← CHANGE EXPERIENCE
            </button>
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
