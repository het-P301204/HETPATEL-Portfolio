"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  /** Stop observing after the first intersection. Default true. */
  once?: boolean;
  /** rootMargin — negative bottom keeps reveals from firing at the very edge. */
  margin?: string;
  threshold?: number;
};

/**
 * The reveal engine for everything that is not choreographed by GSAP.
 * One observer per element, transform/opacity only, no scroll listeners.
 */
export function useInView<T extends HTMLElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { once = true, margin = "0px 0px -12% 0px", threshold = 0 } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin, threshold]);

  return [ref, inView];
}
