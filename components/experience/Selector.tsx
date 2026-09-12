"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useMode } from "@/lib/mode";
import { profile } from "@/data/profile";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { useOverlay } from "@/lib/useOverlay";
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
export default function Selector() {
  const { enter, remembered } = useMode();
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [lean, setLean] = useState<"standard" | "desktop" | null>(null);
  const [leaving, setLeaving] = useState<"standard" | "desktop" | null>(null);

  /* The exit animation needs to tell the chosen door from the other one. It
     used to ask the DOM — `[data-sel='chosen']` and `[data-sel='other']`,
     attributes derived from the `leaving` state. But `choose()` set that
     state and built the timeline in the same tick, so GSAP ran its query
     against markup React had not re-rendered yet: both buttons still read
     `data-sel="choice"`, both selectors matched nothing, and GSAP logged
     "target not found" on every entry to the site. The two beats that give the
     moment its meaning — the chosen door taking the screen, the other one
     dropping away — had never once played.

     Holding the nodes directly removes the race rather than deferring it: a
     ref is correct on the frame it is read, whatever React has done since. */
  const choiceRefs = useRef<
    Record<"standard" | "desktop", HTMLButtonElement | null>
  >({ standard: null, desktop: null });

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

  /* keyboard: the two doors are also 1 and 2.

     The handler is read through a ref at event time, so the listener is bound
     once for the life of the question. It previously had no dependency array
     at all, which rebound it on every render — and `setLean` fires on every
     hover and focus of either choice, so simply pointing at a door tore the
     document listener down and built it again. */
  const chooseRef = useRef<(next: "standard" | "desktop") => void>(() => {});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      /* A modifier means the visitor is talking to the browser, not to us. */
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "1") chooseRef.current("standard");
      if (e.key === "2") chooseRef.current("desktop");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const exitCtx = useRef<gsap.Context | null>(null);

  const choose = (next: "standard" | "desktop") => {
    if (leaving) return;
    setLeaving(next);

    if (reduced) {
      enter(next);
      return;
    }

    const el = root.current;
    if (!el) return enter(next);

    const chosen = choiceRefs.current[next];
    const other =
      choiceRefs.current[next === "standard" ? "desktop" : "standard"];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => enter(next) });
      tl.to(other, { opacity: 0, duration: 0.28, ease: "power2.in" })
        .to(
          "[data-sel='ask'], [data-sel='foot']",
          { opacity: 0, y: -18, duration: 0.35, ease: "power2.in" },
          "<",
        )
        .to(
          chosen,
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

    /* Not returned as a cleanup: this is an event handler, so nothing would
       ever call it. The context is reverted when the question unmounts, which
       is the next thing that happens. */
    exitCtx.current = ctx;
  };

  useEffect(() => () => exitCtx.current?.revert(), []);

  chooseRef.current = choose;

  /* It declares itself a modal dialog, so it has to behave like one: focus
     moves into it, Tab stays inside, and the document under it is locked.
     It previously declared all of that and did none of it.

     Escape resolves to STANDARD rather than doing nothing. A dialog that
     cannot be dismissed is the one case APG allows, but there is a better
     answer here: dismissing the question means "stop asking and show me the
     portfolio", and the portfolio is exactly what STANDARD is. */
  useOverlay({
    open: true,
    onClose: () => chooseRef.current("standard"),
    owner: "selector",
    ref: root,
    /* The question arrives on its own, a moment after the name. Landing focus
       on STANDARD drew a focus ring around the first door before the visitor
       had touched anything — the browser cannot tell an automatic focus from a
       keyboard one, so it assumes keyboard and paints the ring. Focus lands on
       the dialog instead: nothing is drawn, the trap and the announcement are
       unchanged, and the first Tab still reaches STANDARD. */
    focusTarget: "container",
  });

  return (
    <div
      ref={root}
      className={cn("selector", lean && `is-lean-${lean}`, leaving && "is-leaving")}
      role="dialog"
      aria-modal="true"
      aria-label="Choose how to enter"
      /* Focusable by script, never by Tab — it is the dialog, not a control. */
      tabIndex={-1}
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
          {/* The masthead, not just a wordmark.

              This screen is the first thing a visitor sees, and it used to
              answer none of the questions they arrive with: it gave a name and
              then asked them a question about navigation. Someone opening this
              from an application had to pick a door before learning what the
              person behind it does. The question stays — it is the concept —
              but it is no longer the only thing on the screen that means
              anything. Role and focus are read from the same profile the hero
              and the document metadata read, so there is nothing here to keep
              in sync by hand. */}
          <div className="selector__top t-mono" data-sel="foot">
            <span className="selector__id">
              <span className="selector__id-name">
                <span className="selector__dot" aria-hidden="true" />
                {profile.name.toUpperCase()}
              </span>
              <span className="text-grey selector__id-role">
                {profile.role.toUpperCase()}
              </span>
              <span className="text-grey selector__id-focus">
                {profile.focus}
              </span>
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
              ref={(n) => {
                choiceRefs.current.standard = n;
              }}
              data-sel="choice"
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
              ref={(n) => {
                choiceRefs.current.desktop = n;
              }}
              data-sel="choice"
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
