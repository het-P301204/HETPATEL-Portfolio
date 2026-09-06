"use client";

import { useState } from "react";
import Section, { SectionLabel } from "@/components/primitives/Section";
import ScrollReveal from "@/components/primitives/ScrollReveal";
import { experience } from "@/data/experience";
import { cn } from "@/lib/cn";

/**
 * WORK — selected professional work.
 *
 * Not a second résumé and not a second archive. EXPERIENCE says which role and
 * when; PROJECTS says what was built alone. This says what the professional
 * work actually consists of: five areas, each with the method behind it and the
 * boundary around it.
 *
 * It is presented as a brief rather than a list — an index on the left, one
 * open area on the right — so it reads as a dossier being worked through, and
 * so it cannot be mistaken for either of its neighbours at a glance. Selection
 * is by click or arrow key; nothing here is hover-only.
 */
export default function Work() {
  const role = experience[0];
  const tracks = role.tracks;
  const [active, setActive] = useState(0);
  const current = tracks[active];

  const step = (delta: number) =>
    setActive((i) => (i + delta + tracks.length) % tracks.length);

  return (
    <Section id="work" className="work">
      <SectionLabel
        marker="work"
        label="SELECTED PROFESSIONAL WORK"
        note={`${role.org} · ${tracks.length} AREAS`}
      />

      <div className="work__grid">
        {/* --- the index ---------------------------------------------------- */}
        <div className="work__index">
          <p className="t-mono-sm text-grey-soft work__index-label">AREA</p>
          <ul
            role="tablist"
            aria-label="Areas of professional work"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                step(1);
              }
              if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                step(-1);
              }
            }}
          >
            {tracks.map((t, i) => (
              <li key={t.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={`work-tab-${t.id}`}
                  aria-selected={i === active}
                  aria-controls={`work-panel-${t.id}`}
                  tabIndex={i === active ? 0 : -1}
                  className={cn("work__tab", i === active && "is-active")}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-cursor="inspect"
                  data-cursor-label="OPEN"
                  data-cursor-index={String(i + 1).padStart(2, "0")}
                >
                  <span className="work__tab-rule" aria-hidden="true" />
                  <span className="work__tab-n t-mono-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="work__tab-label t-display">{t.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* --- the open area ------------------------------------------------ */}
        <div
          className="work__panel"
          role="tabpanel"
          id={`work-panel-${current.id}`}
          aria-labelledby={`work-tab-${current.id}`}
          key={current.id}
        >
          <p className="t-lede work__panel-summary">{current.summary}</p>

          <p className="t-mono-sm text-grey-soft work__panel-label">METHOD</p>
          <ol className="work__method">
            {current.detail.map((d, i) => (
              <li key={d.slice(0, 24)}>
                <span className="t-mono-sm text-grey-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-body">{d}</span>
              </li>
            ))}
          </ol>

          {current.tools?.length ? (
            <>
              <p className="t-mono-sm text-grey-soft work__panel-label">
                APPLIED
              </p>
              <p className="work__tools">
                {current.tools.map((tool) => (
                  <span key={tool} className="t-mono-sm">
                    {tool}
                  </span>
                ))}
              </p>
            </>
          ) : null}

          <p className="t-mono-sm text-grey-soft work__panel-label">
            WHAT IT CHANGED
          </p>
          <p className="t-body work__outcome">{current.outcome}</p>

          {current.note ? (
            <p className="work__note t-mono-sm">
              <i aria-hidden="true" />
              {current.note}
            </p>
          ) : null}
        </div>
      </div>

      <ScrollReveal as="p" className="t-mono-sm text-grey work__foot">
        THE ROLE THIS SITS UNDER IS IN{" "}
        <a href="#experience" className="link" data-cursor="link">
          FIELD EXPERIENCE
        </a>
        . WORK BUILT OUTSIDE IT IS IN{" "}
        <a href="#projects" className="link" data-cursor="link">
          PROJECTS
        </a>
        .
      </ScrollReveal>
    </Section>
  );
}
