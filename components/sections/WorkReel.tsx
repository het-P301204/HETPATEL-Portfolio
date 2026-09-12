"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectMotif from "@/components/viz/ProjectMotif";
import type { Project } from "@/data/projects";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

/**
 * SELECTED WORK — one screen, N states, driven by the scroll.
 *
 * The section is taller than the viewport and its stage is pinned, so scrolling
 * advances the case rather than the page. Each case owns a screen and that
 * screen unfolds in phases: the domain line, then the title, then the tooling,
 * then what the case was for. The figure behind it is the same generated
 * diagram the archive uses, cropped to the stage and dropped to a background
 * weight.
 *
 * The type is the animation. Every line sits in its own mask and rolls in from
 * under the one before it, so changing case reads as a mechanism moving rather
 * than a crossfade. Below the breakpoint the pin is released entirely — the
 * archive underneath already carries the same cases as a readable index, so
 * there is nothing to reproduce here.
 */
export default function WorkReel({
  items,
  onOpen,
}: {
  items: Project[];
  onOpen: (id: string) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState(0);
  const [widths, setWidths] = useState<Record<string, number> | null>(null);

  const N = items.length;

  /* How wide each title's longest line actually is, in em.
     The title is sized to fit its own track, and that needs a real width. A
     character count cannot supply one — "THE ANOMALOUS REQUEST" and "SECURE
     LOGIN SYSTEM" set to noticeably different widths at the same length,
     because M/W/Q are wide and I/L/T are narrow — so the count-based estimate
     had to be tuned per title and still wrapped the widest one onto an extra
     line. Measuring on a canvas at a reference size gives the ratio outright
     and the stylesheet divides by it. Fonts have to have loaded first, or the
     measurement is of the fallback face. */
  useEffect(() => {
    let cancelled = false;

    const measure = () => {
      const probe = document.querySelector<HTMLElement>(".reel__title-line");
      const ctx = document.createElement("canvas").getContext("2d");
      if (!probe || !ctx || cancelled) return;

      const cs = getComputedStyle(probe);
      const REF = 100;
      ctx.font = `${cs.fontWeight} ${REF}px ${cs.fontFamily}`;
      /* Canvas applies no letter-spacing, so the tracking has to come off by
         hand: n glyphs carry n-1 gaps of the tracked amount. */
      const track = parseFloat(cs.letterSpacing) / REF || 0;

      const next: Record<string, number> = {};
      for (const p of items) {
        next[p.id] = Math.max(
          ...p.titleLines.map(
            (l) =>
              ctx.measureText(l).width / REF + track * Math.max(0, l.length - 1),
          ),
        );
      }
      setWidths(next);
    };

    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }

    return () => {
      cancelled = true;
    };
  }, [items]);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    // matchMedia rather than a one-time check: crossing the breakpoint has to
    // build or tear down the pin, not leave a stale one behind.
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const raw = self.progress * N;
            const i = Math.min(N - 1, Math.floor(raw * 1.001));
            setActive((prev) => (prev === i ? prev : i));
            // Each case owns one screen, and that screen unfolds.
            const local = Math.min(1, Math.max(0, raw - i));
            const ph = local < 0.24 ? 0 : local < 0.46 ? 1 : local < 0.68 ? 2 : 3;
            setPhase((prev) => (prev === ph ? prev : ph));
            if (bar.current)
              bar.current.style.transform = `scaleX(${self.progress.toFixed(4)})`;
          },
        });
      },
      root,
    );

    return () => mm.revert();
  }, [reduced, N]);

  const current = items[active];

  return (
    <div
      className="reel"
      ref={root}
      /* One screen per case plus one to arrive on — adding a case adds its
         screen of scroll without touching the stylesheet. */
      style={{ "--reel-screens": N + 1 } as React.CSSProperties}
    >
      <div className="reel__stage">
        <div className="reel__field" aria-hidden="true">
          {items.map((p, i) => (
            <span
              key={p.id}
              className={cn("reel__figure", i === active && "is-live")}
            >
              <ProjectMotif motif={p.motif} ambient />
            </span>
          ))}
        </div>

        <div className="reel__inner shell" data-phase={phase}>
          <header className="reel__head t-mono">
            <span className="reel__head-mark">
              <i aria-hidden="true" />
              SELECTED WORK
            </span>
            <span className="text-grey">KEEP SCROLLING</span>
          </header>

          <div className="reel__center">
            {/* The case mark. The accent is spent here — once, as a number —
                so the title can stay in the display voice and the stage keeps
                one loud element instead of two. The rule runs off its right
                edge and carries the eye across the empty half. */}
            <p className="reel__marks" aria-hidden="true">
              {items.map((p, i) => (
                <span
                  key={p.id}
                  className={cn("reel__mark", i === active && "is-live")}
                >
                  {/* Position in the reel, not the case's archive number.
                      Those were the same value only while the reel carried
                      every case in order; once it carries a selection, the
                      archive number over the reel length reads as "07 / 05",
                      which is not a fraction of anything. The archive number
                      still identifies the case everywhere it is identified —
                      on the dossier row, in the open record, and on the
                      cursor — but a counter has to count. */}
                  <b className="tnum">{String(i + 1).padStart(2, "0")}</b>
                  <i className="t-mono-sm">/{String(N).padStart(2, "0")}</i>
                </span>
              ))}
              <span className="reel__mark-rule" />
            </p>

            <h3 className="reel__titles">
              <span className="sr-only">
                {current.title} — {current.domain}, {current.status}
              </span>
              {items.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={cn("reel__title", i === active && "is-live")}
                  onClick={() => onOpen(p.id)}
                  tabIndex={i === active ? 0 : -1}
                  aria-hidden={i !== active}
                  data-cursor="inspect"
                  data-cursor-label="INSPECT"
                  data-cursor-index={p.number}
                  /* The title is sized from its own longest line, not from the
                     viewport alone: a flat `8vw` fits "SECURE LOGIN SYSTEM" and
                     runs "REGULATORY AUDIT SUPPORT — CSCRF · IRDAI" straight off
                     both edges. `--em` is that line's width in em, so the
                     stylesheet can cap the size at the width the line can
                     actually occupy. Until the measurement lands, a count-based
                     estimate stands in — deliberately pessimistic, so the first
                     paint is small rather than wrapped. */
                  style={
                    {
                      "--em":
                        widths?.[p.id] ??
                        Math.max(...p.titleLines.map((l) => l.length)) * 0.68,
                    } as React.CSSProperties
                  }
                >
                  {p.titleLines.map((line) => (
                    <span key={line} className="reel__title-mask">
                      <span className="reel__title-line">{line}</span>
                    </span>
                  ))}
                </button>
              ))}
            </h3>

            <div className="reel__unfold" aria-hidden="true">
              <p className="reel__u reel__u--tools">
                {current.tools.map((t) => (
                  <span key={t} className="t-mono-sm">
                    {t}
                  </span>
                ))}
              </p>
              <p className="reel__u reel__u--problem t-body">
                {current.problem}
              </p>
            </div>

            {/* The evidence column. The method is the credential here — a
                numbered ledger of what was actually done, which is what the
                empty half of the stage was previously spending on nothing. */}
            <div className="reel__side" aria-hidden="true">
              <p className="reel__tags">
                {items.map((p, i) => (
                  <span
                    key={p.id}
                    className={cn("t-mono reel__tag", i === active && "is-live")}
                  >
                    <b>{p.domain}</b>
                    <i>{p.status}</i>
                  </span>
                ))}
              </p>

              <ol className="reel__method" key={current.id}>
                {current.approach.map((step, si) => (
                  <li key={step}>
                    <span className="t-mono-sm reel__method-n">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <span className="reel__method-step">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="reel__foot">
            <span className="reel__bar" aria-hidden="true">
              <span ref={bar} />
            </span>
            <span className="reel__hint t-mono text-grey">OPEN THE RECORD →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
