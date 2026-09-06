"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useDrag } from "@/lib/useDrag";
import { resyncCursor } from "@/components/system/Cursor";
import { cn } from "@/lib/cn";

export type WindowState = {
  id: string;
  title: string;
  status: string;
  origin: DOMRect | null;
  z: number;
  minimized: boolean;
  maximized: boolean;
};

/**
 * An application window, in the GNOME/Ubuntu idiom.
 *
 * A header bar rather than a title bar: the name sits in it, the three controls
 * sit at the right as circular buttons, and the body is flush underneath. It
 * opens *from* the icon that spawned it — the origin rect becomes a
 * translate/scale — and collapses back toward the dock when minimised.
 *
 * ── the bug this file existed to fix ──────────────────────────────────────
 * The header started a drag on `pointerdown` and called `setPointerCapture` on
 * itself. Pointer capture retargets the following `pointerup` to the capturing
 * element, so a press that began on a control button never produced a `click`
 * on that button: close, minimise and maximise were all inert on real hardware.
 * (Calling `.click()` in a test still passed, because that dispatches a click
 * directly and never involves pointer events at all — which is exactly how it
 * went unnoticed.)
 *
 * The drag now refuses to start when the gesture begins on a control, so the
 * buttons get their clicks and the rest of the bar still drags.
 */
export default function SystemWindow({
  win,
  onClose,
  onFocus,
  onMinimize,
  onToggleMax,
  compact,
  children,
}: {
  win: WindowState;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  onToggleMax: (id: string) => void;
  compact: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closing = useRef(false);
  const { dragging, onPointerDown } = useDrag(
    { x: 0, y: 0 },
    { onStart: () => onFocus(win.id), disabled: compact || win.maximized },
  );

  /* Anything inside the controls cluster is a button, not a handle. */
  const startDrag = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".win__ctl")) return;
    onPointerDown(e);
  };

  /* Windows are not modal — several can be open at once — so focus is moved in
     but never trapped, and the document keeps scrolling. What does have to be
     honoured is the return trip: whatever opened the window gets focus back,
     and the cursor is told to re-read the surface it is now sitting over. */
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    restoreTo.current = document.activeElement as HTMLElement | null;
    const el = ref.current;
    let done = false;
    const focusIn = () => {
      if (done) return;
      done = true;
      el?.focus({ preventScroll: true });
    };
    const raf = requestAnimationFrame(focusIn);
    const timer = window.setTimeout(focusIn, 80);
    return () => {
      done = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      resyncCursor();
      const active = document.activeElement;
      if (!active || active === document.body || el?.contains(active)) {
        restoreTo.current?.focus?.({ preventScroll: true });
      }
    };
  }, []);

  /* place the window at its icon, then let it unfold */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (win.origin && !compact) {
      const r = el.getBoundingClientRect();
      const dx = win.origin.left + win.origin.width / 2 - (r.left + r.width / 2);
      const dy = win.origin.top + win.origin.height / 2 - (r.top + r.height / 2);
      el.style.setProperty("--ox", `${dx}px`);
      el.style.setProperty("--oy", `${dy}px`);
    }
    // The open state needs one paint between the from- and to- values or the
    // transition has nothing to run over. A frame is the right moment, but a
    // window that only becomes visible when a frame arrives is a window that
    // never opens in a background tab — so the timer is the floor.
    let opened = false;
    const reveal = () => {
      if (opened) return;
      opened = true;
      el.setAttribute("data-open", "true");
    };
    const raf = requestAnimationFrame(reveal);
    const timer = window.setTimeout(reveal, 60);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [win.origin, compact]);

  const close = () => {
    if (closing.current) return;
    closing.current = true;
    const el = ref.current;
    el?.setAttribute("data-closing", "true");

    // Unmount when the collapse actually finishes, not when a timer says it
    // should have. A timer alone is at the mercy of background-tab throttling,
    // which clamps it to a second or more and makes the button feel dead; the
    // timer stays as the floor for the case where no transition runs at all.
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el?.removeEventListener("transitionend", onEnd);
      onClose(win.id);
    };
    const onEnd = (e: TransitionEvent) => {
      if (e.target === el && e.propertyName === "opacity") finish();
    };
    el?.addEventListener("transitionend", onEnd);
    window.setTimeout(finish, 320);
  };

  return (
    <div
      ref={ref}
      className={cn("win", dragging && "is-dragging")}
      data-draggable
      data-open="false"
      data-max={win.maximized}
      data-min={win.minimized}
      style={{ zIndex: 40 + win.z }}
      role="dialog"
      aria-label={`${win.title} window`}
      aria-hidden={win.minimized}
      inert={win.minimized}
      onPointerDownCapture={() => onFocus(win.id)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          close();
        }
      }}
      tabIndex={-1}
    >
      <header className="win__bar" onPointerDown={startDrag}>
        <span className="win__title">{win.title}</span>
        <span className="win__status">{win.status}</span>

        <span className="win__controls">
          <button
            type="button"
            className="win__ctl win__ctl--min"
            onClick={() => onMinimize(win.id)}
            title="Minimise"
            aria-label={`Minimise ${win.title}`}
            data-cursor="link"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 8h8" />
            </svg>
          </button>

          <button
            type="button"
            className="win__ctl win__ctl--max"
            onClick={() => onToggleMax(win.id)}
            title={win.maximized ? "Restore" : "Maximise"}
            aria-label={`${win.maximized ? "Restore" : "Maximise"} ${win.title}`}
            aria-pressed={win.maximized}
            data-cursor="link"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              {win.maximized ? (
                <>
                  <rect x="3" y="5.5" width="7" height="7" />
                  <path d="M6 5.5V3.5h7v7h-2" />
                </>
              ) : (
                <rect x="3.5" y="3.5" width="9" height="9" />
              )}
            </svg>
          </button>

          <button
            type="button"
            className="win__ctl win__ctl--close"
            onClick={close}
            title="Close"
            aria-label={`Close ${win.title}`}
            data-cursor="link"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
            </svg>
          </button>
        </span>
      </header>

      <div className="win__body">{children}</div>
    </div>
  );
}
