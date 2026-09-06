"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Mode = "unset" | "standard" | "desktop";

const KEY = "het-experience-mode";

/**
 * The site has two front doors and one visitor.
 *
 * `mode` is the only thing that decides which world is on screen. It starts
 * "unset" — the selector — and the visitor's answer is remembered locally so a
 * return visit can offer to continue rather than ask again. Nothing here traps
 * anyone: `change()` always puts them back at the question.
 */
type ModeState = {
  mode: Mode;
  /** What they chose last time, if anything. Read once, on mount. */
  remembered: Mode | null;
  enter: (m: Exclude<Mode, "unset">) => void;
  change: () => void;
};

const ModeContext = createContext<ModeState>({
  mode: "unset",
  remembered: null,
  enter: () => {},
  change: () => {},
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("unset");
  const [remembered, setRemembered] = useState<Mode | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "standard" || stored === "desktop") setRemembered(stored);
    } catch {}
  }, []);

  const enter = useCallback((next: Exclude<Mode, "unset">) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    setMode(next);
    document.documentElement.dataset.mode = next;
  }, []);

  const change = useCallback(() => {
    setMode("unset");
    document.documentElement.dataset.mode = "unset";
  }, []);

  const value = useMemo(
    () => ({ mode, remembered, enter, change }),
    [mode, remembered, enter, change],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export const useMode = () => useContext(ModeContext);
