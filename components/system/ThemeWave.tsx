"use client";

import { useImperativeHandle, useRef, type RefObject } from "react";
import type { Theme } from "@/lib/theme";

/**
 * ENVIRONMENT CHANGE.
 *
 * Switching theme used to be an instant repaint of every surface at once,
 * which reads as a glitch rather than a decision. It is now a front that
 * crosses the screen: the accent of the theme you are entering sweeps in from
 * one edge, the document changes underneath it at the moment it has the screen
 * covered, and the same front continues out of the opposite edge.
 *
 * The leading edge is a travelling sine whose amplitude rises and falls across
 * the crossing, so the front is a wave in the middle and flat at both ends —
 * it arrives and leaves cleanly instead of clipping. Light is entered on a
 * cobalt front moving right; dark is entered on an amber front moving left, so
 * the two directions read as opposites of one another.
 *
 * Cost per frame is one `setAttribute` on a single path. No filters, no
 * blend modes, no layout, nothing that can touch the compositor budget the
 * scroll already spends.
 */

export type WaveHandle = {
  run: (next: Theme, commit: () => void) => void;
};

const SEGMENTS = 24;
const DURATION = 900; // ms for the whole crossing, both halves

/**
 * The front, as an SVG path.
 *
 * `p` runs 0 → 1 across the full crossing. Up to 0.5 the filled side is behind
 * the front; after 0.5 it is ahead of it — which is what makes one continuous
 * sweep cover and then uncover.
 */
function frontPath(p: number, w: number, h: number, rtl: boolean) {
  const amp = Math.sin(p * Math.PI) * Math.min(w * 0.09, 120);
  const travel = w + amp * 2;
  const head = -amp + p * 2 * travel; // 0 → 2·travel over the crossing
  const x = rtl ? w - head : head;

  const pts: string[] = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    // Two and a bit periods down the height, drifting with the crossing so the
    // wave travels rather than standing still.
    const wobble = Math.sin(t * Math.PI * 2.4 + p * Math.PI * 2) * amp;
    pts.push(`${(x + (rtl ? -wobble : wobble)).toFixed(1)} ${(t * h).toFixed(1)}`);
  }

  // Close across whichever edge is behind the front.
  const backEdge = rtl ? w : 0;
  return `M ${backEdge} 0 L ${pts.join(" L ")} L ${backEdge} ${h.toFixed(1)} Z`;
}

export default function ThemeWave({ handle }: { handle: RefObject<WaveHandle | null> }) {
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);
  const busy = useRef(false);

  useImperativeHandle(handle, () => ({
    run(next, commit) {
      const svgEl = svg.current;
      const pathEl = path.current;

      // A second toggle mid-crossing must not queue a second wave — take the
      // instant path so the document can never end up on the wrong theme.
      if (!svgEl || !pathEl || busy.current) {
        commit();
        return;
      }

      busy.current = true;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const rtl = next === "dark";

      svgEl.setAttribute("viewBox", `0 0 ${w} ${h}`);
      // The front is drawn in the accent of the theme being entered.
      pathEl.setAttribute(
        "fill",
        getComputedStyle(document.documentElement)
          .getPropertyValue(next === "dark" ? "--c-signal-dark" : "--c-signal-light")
          .trim() || "#3157ff",
      );
      svgEl.dataset.on = "true";

      const start = performance.now();
      let committed = false;
      let finished = false;

      const commitOnce = () => {
        if (committed) return;
        committed = true;
        commit();
      };

      const finish = () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(floor);
        commitOnce();
        svgEl.dataset.on = "false";
        busy.current = false;
      };

      // requestAnimationFrame does not fire in a background tab, so a crossing
      // started there would never reach its midpoint and the theme would
      // silently never change. A change that lands without its animation is far
      // better than one that does not land, so this is the floor: if the
      // crossing has not finished by the time it should have, finish it.
      const floor = window.setTimeout(finish, DURATION + 250);

      const frame = (now: number) => {
        if (finished) return;
        const raw = Math.min(1, (now - start) / DURATION);
        // Ease in and out of the crossing, not of the wave itself.
        const p = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;

        pathEl.setAttribute("d", frontPath(p, w, h, rtl));

        // The document changes while the front has the screen covered.
        if (p >= 0.5) commitOnce();

        if (raw < 1) requestAnimationFrame(frame);
        else finish();
      };

      requestAnimationFrame(frame);
    },
  }));

  return (
    <svg
      ref={svg}
      className="theme-wave"
      data-on="false"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path ref={path} d="" />
    </svg>
  );
}
