"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

/**
 * The site has exactly two global states: the security profile is loading, or
 * it has been established. Everything choreographed at first paint waits on
 * `ready` rather than on a timer of its own, so the hand-off from the
 * preloader to the hero is a single event and never a race.
 */
type Stage = {
  ready: boolean;
  setReady: () => void;
};

const StageContext = createContext<Stage>({ ready: true, setReady: () => {} });

export function StageProvider({
  children,
  initial = false,
}: {
  children: React.ReactNode;
  initial?: boolean;
}) {
  const [ready, set] = useState(initial);
  const setReady = useCallback(() => set(true), []);
  const value = useMemo(() => ({ ready, setReady }), [ready, setReady]);
  return (
    <StageContext.Provider value={value}>{children}</StageContext.Provider>
  );
}

export const useStage = () => useContext(StageContext);
