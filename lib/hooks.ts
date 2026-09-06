"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/** useLayoutEffect that does not warn during server rendering. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useMediaQuery(query: string, initial = false) {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** True when the visitor has asked the system to reduce motion. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True only for precision pointers — the gate for every hover-driven idea. */
export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
