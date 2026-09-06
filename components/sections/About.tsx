"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionLabel } from "@/components/primitives/Section";
import ScrollReveal from "@/components/primitives/ScrollReveal";
import TraceField from "@/components/viz/TraceField";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/lib/hooks";

const WORDS = ["UNDERSTAND", "TEST", "ANALYZE", "MITIGATE"];

/**
 * The signature moment, and the plainest writing on the site.
 *
 * Four verbs resolve into the name as the section is read, while the trace
 * assembles the five concerns behind them into one figure. Below it, the
 * statement — written to be checked rather than admired.
 */
export default function About() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  const onLatchedChange = useCallback((count: number) => {
    setComplete(count === 5);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 72%",
        end: "bottom 78%",
        scrub: true,
        onUpdate: (self) => setProgress(self.progress),
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  const wordIndex = Math.min(
    WORDS.length,
    Math.floor(Math.max(0, progress - 0.05) * 5.4),
  );
  const resolved = complete || wordIndex >= WORDS.length;
  const word = resolved ? "HET PATEL" : WORDS[Math.min(wordIndex, 3)];

  return (
    <Section id="about" className="about">
      <SectionLabel
        marker="about"
        label="ABOUT"
        note="WRITTEN TO BE CHECKED"
      />

      <div className="about__stage" ref={root}>
        <TraceField progress={progress} onLatchedChange={onLatchedChange} />

        <div className="about__word-wrap">
          <p className="t-mono text-grey about__word-label">
            {resolved ? "FIGURE RESOLVED" : "TRACING"}
          </p>
          <p className="mask about__word">
            <span key={word} className="t-display" data-resolved={resolved}>
              {word}
            </span>
          </p>
        </div>
      </div>

      <div className="about__body">
        <div className="about__statement">
          {profile.statement.map((line, i) => (
            <ScrollReveal
              as="p"
              key={line}
              delay={i * 0.06}
              className="about__statement-line"
            >
              {line}
            </ScrollReveal>
          ))}
        </div>

        <div className="about__prose">
          {profile.about.map((para) => (
            <ScrollReveal as="p" key={para.slice(0, 24)} className="t-body">
              {para}
            </ScrollReveal>
          ))}

          <dl className="about__facts">
            <div>
              <dt className="t-mono text-grey-soft">FOCUS</dt>
              <dd className="t-mono">{profile.focus}</dd>
            </div>
            <div>
              <dt className="t-mono text-grey-soft">CURRENTLY</dt>
              <dd className="t-mono">
                {profile.currentTitle.toUpperCase()}, {profile.currentOrg}
              </dd>
            </div>
            <div>
              <dt className="t-mono text-grey-soft">BUILDING</dt>
              <dd className="t-mono">{profile.building}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
