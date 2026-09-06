"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

/**
 * Copy, confirmed in place. No toast: the control reports its own result and
 * returns to itself, which is both quieter and easier to trust.
 */
export default function CopyEmail() {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setDone(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setDone(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is on screen and the mailto
      // link beside this still works, so there is nothing to recover from.
    }
  };

  return (
    <button
      type="button"
      className={cn("copy-email t-mono-sm", done && "is-done")}
      onClick={copy}
      data-cursor="link"
    >
      <span aria-hidden="true">{done ? "COPIED ✓" : "COPY"}</span>
      <span className="sr-only">
        {done ? "Email address copied" : "Copy email address"}
      </span>
    </button>
  );
}
