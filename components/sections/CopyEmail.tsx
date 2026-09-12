"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

/**
 * Copy, confirmed in place. No toast: the control reports its own result and
 * returns to itself, which is both quieter and easier to trust.
 *
 * The confirmation is a `role="status"` region beside the button rather than a
 * change to the button's own name. Swapping the accessible name of the element
 * that already has focus is not reliably re-announced by NVDA or JAWS, so the
 * only people who could not tell whether the copy had worked were the ones who
 * could not see the address sitting next to it.
 *
 * A blocked clipboard now says so. It used to fail silently on the theory that
 * the address is on screen anyway — true for a sighted visitor, and no help at
 * all to someone who just pressed a button and heard nothing.
 */
export default function CopyEmail() {
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setDone(true);
      setFailed(false);
      timer.current = window.setTimeout(() => setDone(false), 2000);
    } catch {
      // The clipboard can be blocked by permission or by an insecure context.
      // The address is on screen and the mailto link beside this still works,
      // so the recovery is to read it — but that has to be said, not assumed.
      setFailed(true);
      setDone(false);
      timer.current = window.setTimeout(() => setFailed(false), 4000);
    }
  };

  return (
    <>
      <button
        type="button"
        className={cn("copy-email t-mono-sm", done && "is-done")}
        onClick={copy}
        data-cursor="link"
      >
        {/* The name stays put. Only the region below changes. */}
        <span aria-hidden="true">{done ? "COPIED" : "COPY"}</span>
        <span className="sr-only">Copy email address</span>
      </button>
      <span role="status" className="sr-only">
        {done
          ? "Email address copied to clipboard"
          : failed
            ? `Copying was blocked. The address is ${profile.email}`
            : ""}
      </span>
    </>
  );
}
