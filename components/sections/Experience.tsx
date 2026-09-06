"use client";

import Section, { SectionLabel } from "@/components/primitives/Section";
import AnimatedText from "@/components/primitives/AnimatedText";
import ScrollReveal from "@/components/primitives/ScrollReveal";
import { experience } from "@/data/experience";

/**
 * EXPERIENCE — where and when, and nothing else.
 *
 * This section used to carry the role header *and* every area of work under
 * it, which meant the same five subjects were then restated in the projects
 * archive and again in the practice map. It now answers one question — what is
 * the position and what surrounds it — and hands off to WORK for the substance.
 * The hand-off is explicit rather than implied, so the reader knows the detail
 * exists and where it is.
 */
export default function Experience() {
  return (
    <Section id="experience" className="exp">
      <SectionLabel
        marker="experience"
        label="FIELD EXPERIENCE"
        note={
          experience.length === 1
            ? "ONE ROLE · IN PROGRESS"
            : `${experience.length} ROLES`
        }
      />

      {experience.map((role) => (
        <article className="exp__role" key={role.id}>
          <div className="exp__aside">
            <div className="exp__status" data-state={role.status}>
              <span className="exp__dot" aria-hidden="true" />
              <span className="t-mono">{role.status}</span>
            </div>
            <dl className="exp__meta">
              <div>
                <dt className="t-mono text-grey-soft">PERIOD</dt>
                <dd className="t-mono">
                  {role.start} — {role.end}
                </dd>
              </div>
              <div>
                <dt className="t-mono text-grey-soft">DISCIPLINE</dt>
                <dd className="t-mono">{role.discipline}</dd>
              </div>
            </dl>
          </div>

          <div className="exp__main">
            <h3 className="exp__org t-display">
              <AnimatedText text={role.org} as="span" />
            </h3>
            <p className="t-mono exp__title">{role.title}</p>
            <ScrollReveal as="p" className="t-lede exp__summary">
              {role.summary}
            </ScrollReveal>

            <dl className="exp__context">
              {role.context.map((c, i) => (
                <ScrollReveal as="div" key={c.label} delay={i * 0.05}>
                  <dt className="t-mono-sm text-grey-soft">{c.label}</dt>
                  <dd className="t-body">{c.value}</dd>
                </ScrollReveal>
              ))}
            </dl>

            {/* The substance lives in one place only. */}
            <a href="#work" className="exp__handoff t-mono" data-cursor="link">
              <span className="exp__handoff-count">
                {role.tracks.length.toString().padStart(2, "0")}
              </span>
              AREAS OF WORK IN THIS ROLE
              <i aria-hidden="true">→</i>
            </a>
          </div>
        </article>
      ))}
    </Section>
  );
}
