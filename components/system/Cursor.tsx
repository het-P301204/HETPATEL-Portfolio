"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/hooks";

/**
 * Ask the cursor to re-read what is under it.
 *
 * Cursor state is derived from a `pointermove`, so when an overlay opens or
 * closes without the pointer moving the cursor keeps the state of an element
 * that is no longer there. Anything that adds or removes an interactive
 * surface calls this afterwards.
 */
export function resyncCursor() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("cursor:resync"));
}

/**
 * A precision instrument, not a decorative blob — and one lifecycle for it.
 *
 * Two bodies with different inertia: the point tracks almost immediately, the
 * ring trails and stretches along the direction of travel. State is read from
 * the DOM — any element can declare `data-cursor="link|text|inspect|analyze"`
 * plus an optional `data-cursor-label` and `data-cursor-index` — so no
 * component has to know the cursor exists.
 *
 * ── why it used to vanish ─────────────────────────────────────────────────
 * Two separate causes, both fixed here rather than papered over:
 *
 *  1. Layering. The cursor sat at `z-index: 95` and the opened case record sits
 *     at 96, so entering a record painted the overlay straight over the top of
 *     it. It was never hidden — it was behind. It now sits above every surface
 *     in the app and below only the theme transition, which is meant to cover
 *     everything for the ~0.9s it is crossing.
 *
 *  2. Visibility latch. Visibility was turned on by the first `pointermove` and
 *     off by `pointerleave` on the document, and nothing ever turned it back on
 *     except another move. A scroll lock toggling the scrollbar, or the pointer
 *     crossing into browser chrome and back, could leave it latched off until
 *     the visitor happened to move the mouse. Visibility is now derived from
 *     one fact — do we know where the pointer is — and every pointer event,
 *     window focus and resync re-asserts it.
 *
 * ── reduced motion ────────────────────────────────────────────────────────
 * It stands down entirely. This was claimed on the accessibility page before
 * it was true: the instrument was gated on pointer precision alone, so a
 * visitor who had asked the system to reduce motion lost the native pointer to
 * `cursor: none` and was handed a lerping, stretching, rotating ring instead —
 * the exact opposite of the request. Nothing replaces it; the native cursor is
 * the correct instrument when motion is unwelcome.
 */
export default function Cursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const live = fine && !reduced;
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!live) return;
    const rootEl = root.current!;
    const ringEl = ring.current!;
    const dotEl = dot.current!;
    const labelEl = label.current!;

    document.body.dataset.cursor = "on";

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let dx = tx;
    let dy = ty;
    let stretch = 0;
    /** The single source of truth for visibility. */
    let known = false;
    let frame = 0;

    const show = () => {
      if (!known) return;
      if (rootEl.dataset.visible !== "true") rootEl.dataset.visible = "true";
    };

    const setState = (el: Element | null) => {
      const holder = el?.closest?.("[data-cursor]") as HTMLElement | null;
      const state = holder?.dataset.cursor ?? "default";
      if (rootEl.dataset.state !== state) rootEl.dataset.state = state;
      const text = holder?.dataset.cursorLabel ?? "";
      const index = holder?.dataset.cursorIndex ?? "";
      if (labelEl.dataset.text !== text + index) {
        labelEl.dataset.text = text + index;
        /* Built, not parsed. Every value reaching here is a build-time
           constant from a `data/` file, so this was not exploitable — but an
           HTML sink fed from DOM attributes is a gadget waiting for the bug
           that makes it one, and SECURITY.md states that nothing but two
           known constants goes through unsafe HTML. Now that is true. */
        labelEl.replaceChildren();
        if (text) {
          if (index) {
            const i = document.createElement("i");
            i.textContent = index;
            labelEl.append(i);
          }
          const b = document.createElement("b");
          b.textContent = text;
          labelEl.append(b);
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!known) {
        known = true;
        rx = dx = tx;
        ry = dy = ty;
      }
      show();
      setState(e.target as Element);
      wake();
    };

    const onDown = () => (rootEl.dataset.press = "true");
    const onUp = () => (rootEl.dataset.press = "false");

    /* Only a genuine exit from the window hides it. `relatedTarget === null`
       is what distinguishes leaving the document from moving between two
       elements inside it. */
    const onOut = (e: PointerEvent) => {
      if (e.relatedTarget === null) rootEl.dataset.visible = "false";
    };

    // Re-read the element under a stationary pointer, and re-assert visibility:
    // called after an overlay opens or closes.
    const onResync = () => {
      show();
      setState(document.elementFromPoint(tx, ty));
      wake();
    };

    /* The instrument only has work to do while it is catching up with the
       pointer. It used to re-schedule unconditionally, which is a permanent
       60fps compositor job on every desktop visit — including the long
       stretches where the mouse has not moved at all. It now settles and
       stops, and any pointer event wakes it. */
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const render = () => {
      const prx = rx;
      const pry = ry;
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      dx += (tx - dx) * 0.42;
      dy += (ty - dy) * 0.42;

      const vx = rx - prx;
      const vy = ry - pry;
      const speed = Math.min(Math.hypot(vx, vy) / 26, 1);
      stretch += (speed - stretch) * 0.12;
      const angle = (Math.atan2(vy, vx) * 180) / Math.PI;

      ringEl.style.transform =
        `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) ` +
        `rotate(${angle}deg) scale(${1 + stretch * 0.22}, ${1 - stretch * 0.16}) ` +
        `rotate(${-angle}deg)`;
      dotEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      labelEl.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;

      const settled =
        Math.abs(tx - rx) + Math.abs(ty - ry) < 0.05 &&
        Math.abs(tx - dx) + Math.abs(ty - dy) < 0.05 &&
        stretch < 0.002;
      frame = settled ? 0 : requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointerover", show, { passive: true });
    window.addEventListener("focus", onResync);
    window.addEventListener("cursor:resync", onResync);
    document.addEventListener("pointerout", onOut);
    frame = requestAnimationFrame(render);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerover", show);
      window.removeEventListener("focus", onResync);
      window.removeEventListener("cursor:resync", onResync);
      document.removeEventListener("pointerout", onOut);
      delete document.body.dataset.cursor;
    };
  }, [live]);

  if (!live) return null;

  return (
    <div
      ref={root}
      className="cursor"
      data-state="default"
      data-visible="false"
      aria-hidden="true"
    >
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
      <div ref={label} className="cursor-label" />
    </div>
  );
}
