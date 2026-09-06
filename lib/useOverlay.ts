"use client";

import { useEffect, useRef } from "react";
import { lockScroll } from "@/components/system/SmoothScroll";
import { resyncCursor } from "@/components/system/Cursor";

/**
 * Everything an overlay owes the page when it opens, and everything it owes
 * back when it closes.
 *
 * Each of the site's overlays — the project record, the index, the desktop
 * windows, the case file — had its own partial version of this: some locked the
 * scroll, some listened for Escape, none of them gave focus back. Closing one
 * with the keyboard dropped focus onto <body>, and closing one without moving
 * the mouse left the custom cursor holding the state of a button that no longer
 * existed.
 *
 * One hook now owns the whole contract:
 *
 *   open  — remember what had focus, lock the document under its own key,
 *           move focus into the overlay
 *   while — Escape closes; Tab is trapped inside
 *   close — release this overlay's lock, return focus to the trigger, and tell
 *           the cursor to re-read what is actually under it
 *
 * Cleanup runs on unmount too, so an overlay that is removed rather than closed
 * cannot leave the document locked.
 */

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function useOverlay({
  open,
  onClose,
  /** Unique per overlay, so simultaneous overlays cannot unlock each other. */
  owner,
  ref,
}: {
  open: boolean;
  onClose: () => void;
  owner: string;
  ref: React.RefObject<HTMLElement | null>;
}) {
  /* The close handler is read at event time, so the listeners never need to be
     torn down and rebuilt when the parent re-renders. */
  const close = useRef(onClose);
  close.current = onClose;

  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreTo.current = document.activeElement as HTMLElement | null;
    lockScroll(true, owner);

    // `ref.current` is read inside each callback rather than captured up here:
    // under StrictMode the effect is mounted, torn down and mounted again, and
    // a captured node can be the one from the discarded pass. Reading late also
    // means the overlay is painted by the time we look for something to focus —
    // focusing a node that is still `visibility: hidden` silently does nothing.
    let done = false;
    const focusIn = () => {
      if (done) return;
      const node = ref.current;
      if (!node) return;
      done = true;
      const first = node.querySelector<HTMLElement>(FOCUSABLE);
      (first ?? node).focus?.({ preventScroll: true });
    };
    // A frame is the right moment — the overlay is painted and focusable by
    // then. The timer is the backstop for the case where frames are not being
    // produced at all, so focus is never simply lost.
    const raf = requestAnimationFrame(focusIn);
    const timer = window.setTimeout(focusIn, 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close.current();
        return;
      }
      const node = ref.current;
      if (e.key !== "Tab" || !node) return;

      const items = Array.from(
        node.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !node.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);

    return () => {
      done = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey, true);
      lockScroll(false, owner);
      resyncCursor();
      // Only take focus back if it is still inside the overlay we are closing;
      // if something else has claimed it since, leave it alone.
      const node = ref.current;
      const active = document.activeElement;
      if (!active || active === document.body || node?.contains(active)) {
        restoreTo.current?.focus?.({ preventScroll: true });
      }
    };
  }, [open, owner, ref]);
}
