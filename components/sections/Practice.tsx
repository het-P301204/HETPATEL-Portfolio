"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionMarker from "@/components/primitives/SectionMarker";
import { practice } from "@/data/skills";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

const N = practice.length;

/**
 * SECURITY PRACTICE — six domains, activated by the scroll.
 *
 * The list stays; the scroll moves through it. The active domain fills from
 * outline to solid and its capabilities are dealt out beside it, each one
 * carrying the basis it rests on. Nothing here is a card and nothing here is
 * scored — the honest measure for a junior is where the work came from.
 */
export default function Practice() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const i = Math.min(N - 1, Math.floor(self.progress * N * 1.001));
            setActive((prev) => (prev === i ? prev : i));
          },
        });
      },
      root,
    );

    return () => mm.revert();
  }, [reduced]);

  const current = practice[active];

  return (
    <section
      id="practice"
      ref={root}
      className="practice"
      data-section="practice"
      aria-label="Security practice"
    >
      <div className="practice__stage shell">
        <header className="practice__head t-mono">
          {/* The same mark the navigation uses for this section, so the pinned
              sections are recognisably part of the same system as the rest. */}
          <span className="practice__head-title">
            <SectionMarker id="practice" />
            SECURITY PRACTICE
          </span>
          <span className="text-grey">
            {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </span>
        </header>

        <div className="practice__body">
          <ol className="practice__list">
            {practice.map((d, i) => (
              <li key={d.number}>
                <button
                  type="button"
                  className={cn("practice__btn", i === active && "is-active")}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  data-cursor="analyze"
                  data-cursor-label="OPEN"
                  data-cursor-index={d.number}
                >
                  <span className="t-mono practice__n">{d.number}</span>
                  <span className="practice__name t-display">{d.name}</span>
                </button>
                <span className="sr-only">
                  {d.basis}. {d.capabilities.join(", ")}.
                </span>
              </li>
            ))}
          </ol>

          <div className="practice__panel" aria-hidden="true">
            <div className="practice__basis">
              <span className="t-mono text-grey-soft">BASIS</span>
              <span className="t-mono">{current.basis}</span>
            </div>
            <ul className="practice__caps" key={current.number}>
              {current.capabilities.map((c, i) => (
                <li key={c} style={{ animationDelay: `${0.05 * i}s` }}>
                  <span className="t-mono-sm text-grey-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="practice__cap">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
