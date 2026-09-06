"use client";

import { useCallback, useRef, useState } from "react";

export type Offset = { x: number; y: number };

/**
 * Pointer dragging with no library and no layout work: the element is moved
 * with a transform, the offset is kept in a ref during the gesture and only
 * committed to state when it ends, so a drag costs one style write per frame.
 *
 * Dragging is never the only way to reach anything — it is texture, not
 * navigation.
 */
export function useDrag(
  initial: Offset = { x: 0, y: 0 },
  opts: { onStart?: () => void; disabled?: boolean } = {},
) {
  const [offset, setOffset] = useState<Offset>(initial);
  const [dragging, setDragging] = useState(false);
  const node = useRef<HTMLElement | null>(null);
  const start = useRef<Offset>({ x: 0, y: 0 });
  const current = useRef<Offset>(initial);
  const moved = useRef(false);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (opts.disabled) return;
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const el = (e.currentTarget as HTMLElement).closest(
        "[data-draggable]",
      ) as HTMLElement | null;
      if (!el) return;

      node.current = el;
      moved.current = false;
      start.current = { x: e.clientX, y: e.clientY };
      opts.onStart?.();
      setDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);

      const base = { ...current.current };

      const onMove = (ev: PointerEvent) => {
        const dx = ev.clientX - start.current.x;
        const dy = ev.clientY - start.current.y;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved.current = true;
        current.current = { x: base.x + dx, y: base.y + dy };
        if (node.current) {
          node.current.style.setProperty("--dx", `${current.current.x}px`);
          node.current.style.setProperty("--dy", `${current.current.y}px`);
        }
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        setDragging(false);
        setOffset(current.current);
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    },
    [opts],
  );

  /** True when the pointer actually travelled — used to swallow the click. */
  const didMove = useCallback(() => moved.current, []);

  return { offset, dragging, onPointerDown, didMove };
}
