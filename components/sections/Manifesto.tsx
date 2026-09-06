"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";

/**
 * The vocabulary of the discipline, drifting at three depths behind the
 * statement.
 *
 * These were tool strings — `NMAP -SV -P-`, `403 FORBIDDEN`, `22/TCP OPEN SSH`,
 * `T1110 · BRUTE FORCE`. Scanner flags and status codes are the set dressing of
 * every hacker-aesthetic portfolio, and they say nothing about judgement: any
 * reader can produce them in a terminal. What the fragments carry now is the
 * language the work is actually conducted in — scope, evidence, control,
 * residual risk. It reads as the vocabulary of someone who has had to defend a
 * finding rather than someone who has run a tool.
 */
const FRAGMENTS: [string, number, number, number][] = [
  // text, x%, y%, depth (1 = far, 3 = near)
  ["TRUST BOUNDARY", 6, 12, 1],
  ["SCOPE AGREED IN WRITING", 68, 8, 2],
  ["ASSUMPTION UNDER TEST", 24, 26, 3],
  ["ISO 27001 · A.8.16", 78, 22, 1],
  ["COMPENSATING CONTROL", 4, 42, 2],
  ["FAIL CLOSED", 46, 15, 3],
  ["LEAST PRIVILEGE", 84, 38, 3],
  ["ATTACK SURFACE", 14, 58, 1],
  ["VERIFIED, NOT ASSERTED", 62, 52, 2],
  ["BASELINE DEVIATION", 30, 70, 1],
  ["REPRODUCIBLE BY SOMEONE ELSE", 70, 74, 3],
  ["CONTROL OWNER ASSIGNED", 8, 84, 2],
  ["RESIDUAL RISK ACCEPTED", 52, 88, 1],
  ["RISK = LIKELIHOOD × IMPACT", 34, 44, 2],
  ["DEFENCE IN DEPTH", 90, 62, 1],
  ["THREAT MODEL", 44, 32, 1],
];

const ONE = ["I STUDY", "HOW SYSTEMS", "FAIL."];
const TWO = ["AND HOW", "THEY CAN BE", "MADE HARDER", "TO BREAK."];

/**
 * The statement, assembled rather than faded.
 *
 * Two stanzas share one sticky frame: the first is built line by line and the
 * last word takes the accent and the size, then the whole thing is replaced by
 * the second. Behind it, fragments of the actual vocabulary drift at three
 * different rates — the page has depth without a single image.
 */
export default function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
      gsap.set("[data-line]", { yPercent: 108 });
      gsap.set("[data-stanza='2'] [data-line]", { yPercent: 108 });
      gsap.set("[data-fail]", { scale: 1, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.to("[data-stanza='1'] [data-line]", {
        yPercent: 0,
        duration: 0.12,
        stagger: 0.07,
        ease: "power3.out",
      })
        // The last word arrives, then takes over.
        .to("[data-fail]", { scale: 1.34, duration: 0.14, ease: "power2.out" }, 0.28)
        .to("[data-fail]", { color: "var(--color-signal)", duration: 0.1 }, 0.3)
        .to(
          "[data-stanza='1']",
          { yPercent: -26, opacity: 0, duration: 0.14, ease: "power2.in" },
          0.5,
        )
        .to(
          "[data-stanza='2'] [data-line]",
          { yPercent: 0, duration: 0.12, stagger: 0.06, ease: "power3.out" },
          0.58,
        )
        .fromTo(
          "[data-manifesto-rule]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.16, ease: "power2.out" },
          0.78,
        );

      // Parallax on the debris field: three rates, all transform-only.
      [1, 2, 3].forEach((depth) => {
        gsap.to(`[data-depth="${depth}"]`, {
          yPercent: -14 * depth,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
      },
      root,
    );

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      id="manifesto"
      ref={root}
      className="manifesto"
      data-section="manifesto"
      aria-label="Statement"
    >
      <div className="manifesto__frame shell">
        <div className="manifesto__debris" aria-hidden="true">
          {FRAGMENTS.map(([text, x, y, depth]) => (
            <span
              key={text}
              className="t-mono-sm manifesto__fragment"
              data-depth={depth}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {text}
            </span>
          ))}
        </div>

        <p className="t-mono manifesto__label">
          <span className="manifesto__dot" aria-hidden="true" />
          MANIFESTO
        </p>

        <div className="manifesto__stack">
          <h2 className="manifesto__stanza" data-stanza="1">
            <span className="sr-only">
              I study how systems fail, and how they can be made harder to
              break.
            </span>
            {ONE.map((line, i) => (
              <span className="mask" key={line} aria-hidden="true">
                <span className="t-display manifesto__line" data-line>
                  {i === ONE.length - 1 ? (
                    <span data-fail className="manifesto__fail">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h2>

          <p className="manifesto__stanza manifesto__stanza--2" data-stanza="2" aria-hidden="true">
            {TWO.map((line) => (
              <span className="mask" key={line}>
                <span className="t-display manifesto__line" data-line>
                  {line}
                </span>
              </span>
            ))}
          </p>
        </div>

        <div className="manifesto__foot">
          <span className="manifesto__rule" data-manifesto-rule />
          <p className="t-mono text-grey">
            VULNERABILITY ASSESSMENT · SECURITY ENGINEERING · RISK &amp;
            COMPLIANCE
          </p>
        </div>
      </div>
    </section>
  );
}
