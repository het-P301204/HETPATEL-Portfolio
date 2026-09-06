"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Selector from "@/components/experience/Selector";
import { useMode } from "@/lib/mode";
import { useStage } from "@/lib/stage";
import { lockScroll } from "@/components/system/SmoothScroll";
import { cn } from "@/lib/cn";

/** The environment is a whole world; standard visitors never download it. */
const Desktop = dynamic(() => import("@/components/desktop/Desktop"), {
  ssr: false,
});

/**
 * The orchestrator.
 *
 * The editorial portfolio is always mounted — it owns the loading sequence, so
 * it has to be. When that sequence resolves into the name, the question arrives
 * over it; until an answer comes back the document stays locked. Choosing
 * STANDARD simply releases it. Choosing DESKTOP parks it, unpainted, and mounts
 * the environment above.
 */
export default function ExperienceShell({ children }: { children: ReactNode }) {
  const { ready } = useStage();
  const { mode } = useMode();
  const [asking, setAsking] = useState(false);

  /* the question waits for the name to finish arriving */
  useEffect(() => {
    if (ready && mode === "unset") {
      const t = window.setTimeout(() => setAsking(true), 650);
      return () => window.clearTimeout(t);
    }
    setAsking(false);
  }, [ready, mode]);

  /* The document only scrolls in standard mode. This holds its own key: the
     preloader releases its lock the instant the name has arrived, and with a
     shared key that release would also hand the scroll back while the question
     was still on screen. */
  useEffect(() => {
    lockScroll(mode !== "standard", "experience");
    return () => lockScroll(false, "experience");
  }, [mode, ready]);

  const parked = mode === "desktop";

  return (
    <>
      <div
        className={cn("world", parked && "is-parked")}
        aria-hidden={parked}
        inert={parked}
      >
        {children}
      </div>

      {asking ? <Selector /> : null}
      {mode === "desktop" ? <Desktop /> : null}
    </>
  );
}
