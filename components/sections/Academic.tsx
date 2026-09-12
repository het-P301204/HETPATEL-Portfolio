"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionLabel } from "@/components/primitives/Section";
import ScrollReveal from "@/components/primitives/ScrollReveal";
import { coursework, education, journey } from "@/data/education";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

/**
 * TIME.
 *
 * The journey used to be two numbers — a large 2022 and an outlined 2026 — with
 * three years of nothing between them, which said that only the endpoints
 * mattered. It is now the whole span: five years on one track, advanced by
 * scrolling and selectable by hand or keyboard, with the institution carried
 * inside the progression rather than dumped underneath it.
 *
 * Two of those years carry no milestone, and the section says so out loud
 * rather than inventing one. The résumé dates the start, the 2025 lab work, the
 * internship and the expected completion — and nothing else. A year with no
 * dated record is drawn as an open marker and reads "NO DATED RECORD"; it is
 * still part of the degree, which is the honest version of the story.
 */
export default function Academic() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (reduced) {
      setActive(journey.length - 1);
      el.style.setProperty("--p", "1");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        end: "bottom 70%",
        scrub: 0.4,
        onUpdate: (self) => {
          el.style.setProperty("--p", self.progress.toFixed(4));
          const i = Math.min(
            journey.length - 1,
            Math.floor(self.progress * journey.length * 1.001),
          );
          setActive((prev) => (prev === i ? prev : i));
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  const mark = journey[active];

  return (
    <Section id="academic" className="acad">
      <div ref={root as never} className="acad__wrap">
        <SectionLabel
          marker="academic"
          label="ACADEMIC JOURNEY"
          /* The qualifier is empty once the degree is awarded; join on it so an
             empty value leaves no orphaned space in the rendered label. */
          note={[`${education.start} – ${education.end}`, education.endQualifier]
            .filter(Boolean)
            .join(" ")}
        />

        <div className="acad__institution">
          <p className="t-mono text-grey">{education.degree}</p>
          <h3 className="acad__name t-display">{education.institution}</h3>
        </div>

        {/* --- the track ---------------------------------------------------- */}
        <div className="acad__track" role="group" aria-label="Academic timeline">
          <div className="acad__line" aria-hidden="true">
            <span className="acad__line-fill" />
          </div>

          <ol className="acad__years">
            {journey.map((m, i) => (
              <li key={m.year}>
                <button
                  type="button"
                  className={cn(
                    "acad__year-btn",
                    i === active && "is-active",
                    i < active && "is-past",
                  )}
                  data-state={m.state}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={i === active}
                  data-cursor="analyze"
                  data-cursor-label="READ"
                  data-cursor-index={m.year}
                >
                  <span className="acad__node" aria-hidden="true" />
                  <span className="t-display acad__year">{m.year}</span>
                  <span className="t-mono-sm acad__year-state">
                    {m.state === "UNDATED"
                      ? "NO DATED RECORD"
                      : m.state === "IN PROGRESS"
                        ? "IN PROGRESS"
                        : "RECORDED"}
                  </span>
                  <span className="sr-only">
                    {" "}
                    — {m.label}. {m.detail}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* --- the year being read ------------------------------------------ */}
        <div className="acad__readout" aria-live="polite">
          <p className="t-mono acad__readout-year">{mark.year}</p>
          <div className="acad__readout-body">
            <h4 className="t-display acad__readout-label">{mark.label}</h4>
            <p className="t-body acad__readout-detail">{mark.detail}</p>

            {mark.events.length ? (
              <ul className="acad__events">
                {mark.events.map((e) => (
                  <li key={e.when}>
                    <span className="t-mono-sm acad__event-when">{e.when}</span>
                    <span className="t-body">{e.what}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="t-mono-sm acad__no-record">
                NO DATED MILESTONE IN THE SOURCE FOR THIS YEAR. THE DEGREE WAS
                RUNNING; NOTHING MORE IS CLAIMED.
              </p>
            )}
          </div>
        </div>

        <div className="acad__course">
          <p className="t-mono text-grey acad__course-label">
            RELEVANT COURSEWORK · NOT DATED TO A YEAR
          </p>
          <ul>
            {coursework.map((c, i) => (
              <ScrollReveal as="li" key={c.label} delay={i * 0.04}>
                <span className="acad__course-name">{c.label}</span>
                <span className="t-mono-sm text-grey acad__course-note">
                  {c.note}
                </span>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
