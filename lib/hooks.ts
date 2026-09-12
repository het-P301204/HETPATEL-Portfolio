"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/** useLayoutEffect that does not warn during server rendering. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Deliberately false on the first render rather than read lazily from
 * `matchMedia`.
 *
 * Reading the real value in a `useState` initialiser is tempting — it would
 * stop Lenis and the cursor being constructed and immediately torn down for a
 * reduced-motion visitor. It is also wrong here: both answers gate *rendered
 * markup*, not just effects (Hero renders the pointer readout only when
 * `fine && !reduced`). A lazy initialiser runs during hydration, so the first
 * client render would disagree with the server HTML and React would report a
 * hydration mismatch. One discarded Lenis instance on mount is the cheaper of
 * the two costs, and it is paid once.
 */
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
