"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ThemeWave, { type WaveHandle } from "@/components/system/ThemeWave";

export type Theme = "light" | "dark";

const KEY = "hp:theme";

/**
 * Two themes, one accent each: cobalt on paper, amber on near-black. The
 * choice is the visitor's, defaults to the system, and is applied to
 * <html data-theme> before first paint by the script in the document head — so
 * this provider only ever reads what is already on screen.
 */
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}>({ theme: "light", setTheme: () => {}, toggle: () => {} });

/**
 * Runs before paint. Kept in one place so it cannot drift from the provider.
 *
 * Dark is the default for a first visit, deliberately — it is the theme the
 * site is composed in, and inheriting the OS preference meant a visitor on a
 * light desktop met a version of the design that was never the intended first
 * impression. A visitor's own choice still wins and is remembered; only the
 * unset case changed.
 */
export const themeInitScript = `
(function(){try{
  var s=localStorage.getItem("${KEY}");
  document.documentElement.dataset.theme = (s === "light" || s === "dark") ? s : "dark";
}catch(e){document.documentElement.dataset.theme="dark"}})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /* Matches the pre-paint script, so the first client render agrees with the
     markup and there is nothing to correct — and therefore nothing to flash. */
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current && current !== theme) setThemeState(current);
    // The system preference is deliberately not followed: dark is the default
    // and the visitor's own choice is the only thing that overrides it.
  }, [theme]);

  /**
   * A theme change is a change of environment, so it crosses the screen rather
   * than snapping. The wave owns the timing and calls back at the moment it has
   * the screen covered; the swap itself is unchanged and still a single
   * attribute on <html>.
   *
   * If motion is reduced, or the wave has not mounted, the commit runs
   * immediately — the transition is decoration and the swap is the feature.
   */
  const wave = useRef<WaveHandle | null>(null);

  const setTheme = useCallback((next: Theme) => {
    const commit = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(KEY, next);
      } catch {}
      setThemeState(next);
    };

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !wave.current) commit();
    else wave.current.run(next, commit);
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme],
  );

  const value = useMemo(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      <ThemeWave handle={wave} />
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

/**
 * Canvas cannot read CSS variables, so anything drawn has to ask for them.
 * Re-read on theme change and the drawing repaints in the new palette.
 */
export function readPalette(el: HTMLElement = document.documentElement) {
  const cs = getComputedStyle(el);
  const get = (name: string, fallback: string) =>
    cs.getPropertyValue(name).trim() || fallback;
  return {
    ink: get("--c-ink", "#0b0b0b"),
    paper: get("--c-paper", "#f7f6f3"),
    grey: get("--c-grey", "#5c5a54"),
    greySoft: get("--c-grey-soft", "#6f6d66"),
    signal: get("--c-signal", "#3157ff"),
  };
}

/** `rgba()` from a hex token, for canvas strokes that need transparency. */
export function alpha(hex: string, a: number) {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full.slice(0, 6), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}
