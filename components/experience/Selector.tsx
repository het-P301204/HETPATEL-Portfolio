"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useMode } from "@/lib/mode";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";


/**
 * The question, asked once.
 *
 * It arrives out of the hero rather than on top of it, so the loading sequence
 * still resolves into the name before anything is asked. Pointing at a choice
 * tips the whole screen toward that world — the editorial one gets quieter and
 * more typographic, the environment one starts assembling small objects at the
 * edges. Choosing dissolves the question into whichever world was chosen.
 */
export default function Selector({ onLeave }: { onLeave?: () => void }) {
  const { enter, remembered } = useMode();
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [lean, setLean] = useState<"standard" | "desktop" | null>(null);
  const [leaving, setLeaving] = useState<"standard" | "desktop" | null>(null);

  /* entrance */
  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          "[data-sel='veil']",
          { yPercent: 102 },
          { yPercent: 0, duration: 0.9, ease: "expo.inOut" },
        )
        .fromTo(
          "[data-sel='ask'] .mask > span",
          { yPercent: 110 },
          { yPercent: 0, duration: 0.85, ease: "expo.out", stagger: 0.06 },
          "-=0.35",
        )
        .fromTo(
          "[data-sel='choice']",
          { y: 34, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", stagger: 0.09 },
          "-=0.55",
        )
        .fromTo(
          "[data-sel='foot'] > *",
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.06 },
          "-=0.4",
        );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  /* keyboard: the two doors are also 1 and 2 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "1") choose("standard");
      if (e.key === "2") choose("desktop");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const choose = (next: "standard" | "desktop") => {
    if (leaving) return;
    setLeaving(next);
    onLeave?.();

    if (reduced) {
      enter(next);
      return;
    }

    const el = root.current;
    if (!el) return enter(next);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => enter(next) });
      tl.to("[data-sel='other']", { opacity: 0, duration: 0.28, ease: "power2.in" })
        .to(
          "[data-sel='ask'], [data-sel='foot']",
          { opacity: 0, y: -18, duration: 0.35, ease: "power2.in" },
          "<",
        )
        .to(
          "[data-sel='chosen']",
          next === "standard"
            ? { scale: 0.94, opacity: 0, duration: 0.5, ease: "power2.inOut" }
            : { scale: 1.06, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "-=0.1",
        )
        // The veil retracts the way it arrived for the editorial route, and
        // contracts inward for the environment — the screen behaves like the
        // thing it is about to become.
        .to(
          "[data-sel='veil']",
          next === "standard"
            ? { yPercent: -102, duration: 0.85, ease: "expo.inOut" }
            : {
                clipPath: "inset(50% 50% 50% 50%)",
                duration: 0.75,
                ease: "expo.inOut",
              },
          "-=0.15",
        );
    }, root);

    return () => ctx.revert();
  };

  return (
    <div
      ref={root}
      className={cn("selector", lean && `is-lean-${lean}`, leaving && "is-leaving")}
      role="dialog"
      aria-modal="true"
      aria-label="Choose how to enter"
    >
      <div className="selector__veil" data-sel="veil">
        {/* One preview area, two answers. It only draws something once you
            point at a door, and what it draws is that door's world. */}
        <div className="selector__stage" aria-hidden="true">
          <div className="stagev stagev--standard">
            <span className="stagev__rule" />
            <span className="stagev__line stagev__line--xl" />
            <span className="stagev__line stagev__line--l" />
            <span className="stagev__line" />
            <span className="stagev__line stagev__line--s" />
            <span className="stagev__rule" />
          </div>
          <div className="stagev stagev--desktop">
            <span className="stagev__bar" />
            <span className="stagev__obj stagev__obj--a" />
            <span className="stagev__obj stagev__obj--b" />
            <span className="stagev__obj stagev__obj--c" />
            <span className="stagev__win" />
          </div>
        </div>

        <div className="selector__inner shell">
          <div className="selector__top t-mono" data-sel="foot">
            <span>
              <span className="selector__dot" aria-hidden="true" />
              HET PATEL
            </span>
            <span className="text-grey">ENTRY / SELECT ONE</span>
          </div>

          <h2 className="selector__ask" data-sel="ask">
            <span className="mask">
              <span className="t-display">HOW DO YOU WANT</span>
            </span>
            <span className="mask">
              <span className="t-display selector__ask-2">TO ENTER?</span>
            </span>
          </h2>

          <div className="selector__choices">
            <button
              type="button"
              className="selector__choice"
              data-sel={leaving === "standard" ? "chosen" : leaving ? "other" : "choice"}
              onMouseEnter={() => setLean("standard")}
              onMouseLeave={() => setLean(null)}
              onFocus={() => setLean("standard")}
              onBlur={() => setLean(null)}
              onClick={() => choose("standard")}
              data-cursor="inspect"
              data-cursor-label="ENTER"
              data-cursor-index="01"
            >
              <span className="selector__n t-mono">01</span>
              <span className="selector__name t-display">STANDARD</span>
              <span className="selector__kind t-mono">THE PORTFOLIO</span>
              <span className="selector__cta t-mono">
                ENTER STANDARD <i aria-hidden="true">→</i>
              </span>
            </button>

            <button
              type="button"
              className="selector__choice selector__choice--desktop"
              data-sel={leaving === "desktop" ? "chosen" : leaving ? "other" : "choice"}
              onMouseEnter={() => setLean("desktop")}
              onMouseLeave={() => setLean(null)}
              onFocus={() => setLean("desktop")}
              onBlur={() => setLean(null)}
              onClick={() => choose("desktop")}
              data-cursor="inspect"
              data-cursor-label="EXPLORE"
              data-cursor-index="02"
            >
              <span className="selector__n t-mono">02</span>
              <span className="selector__name t-display">DESKTOP</span>
              <span className="selector__kind t-mono">THE ENVIRONMENT</span>
              <span className="selector__cta t-mono">
                ENTER DESKTOP <i aria-hidden="true">→</i>
              </span>
            </button>
          </div>

          <div className="selector__foot t-mono" data-sel="foot">
            {remembered ? (
              <button
                type="button"
                className="selector__continue"
                onClick={() => choose(remembered as "standard" | "desktop")}
                data-cursor="link"
              >
                CONTINUE IN {remembered.toUpperCase()} <i aria-hidden="true">→</i>
              </button>
            ) : (
              <span className="text-grey">
                SAME PERSON · TWO WAYS THROUGH
              </span>
            )}
            <span className="text-grey selector__keys">
              PRESS 1 OR 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
