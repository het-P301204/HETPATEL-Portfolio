"use client";

import { useEffect, useState } from "react";

/**
 * True when an inverted section is behind the given band of the viewport.
 * Fixed elements cannot inherit a section's palette swap, so they ask.
 * `band` is measured from the top; pass a negative value to measure up from
 * the bottom of the window.
 *
 * No section currently opts in — `tone="ink"` is supported by Section and used
 * by nothing — so the common case is a scroll listener measuring an empty
 * NodeList on every frame for the life of the page. The membership is fixed
 * once the document is rendered, so it is read once: with nothing to track,
 * the hook attaches no listener at all and stays false. The moment a section
 * does opt in, this starts working again with no change here.
 */
export function useInverted(band: number) {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll(".on-ink"));
    if (!panels.length) return;

    let frame = 0;
    const check = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = band < 0 ? window.innerHeight + band : band;
        let dark = false;
        for (const el of panels) {
          const r = el.getBoundingClientRect();
          if (r.top <= y && r.bottom >= y) dark = true;
        }
        setInverted((prev) => (prev === dark ? prev : dark));
      });
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [band]);

  return inverted;
}
