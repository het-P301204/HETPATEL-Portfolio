"use client";

import { useEffect, useState } from "react";

/**
 * True when an inverted section is behind the given band of the viewport.
 * Fixed elements cannot inherit a section's palette swap, so they ask.
 * `band` is measured from the top; pass a negative value to measure up from
 * the bottom of the window.
 */
export function useInverted(band: number) {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = band < 0 ? window.innerHeight + band : band;
        let dark = false;
        document.querySelectorAll(".on-ink").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= y && r.bottom >= y) dark = true;
        });
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
