"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useFinePointer, useReducedMotion } from "@/lib/hooks";
import { subscribePointer } from "@/lib/pointerField";

type Props = {
  children: ReactNode;
  className?: string;
  /** How far the element is allowed to be pulled, as a share of its own size. */
  strength?: number;
  /** Extra hit area around the element, in pixels. */
  radius?: number;
};

/**
 * Attraction, not novelty: the element leans toward the pointer while it is
 * near and returns with elastic damping when it leaves. Coarse pointers and
 * reduced-motion visitors get a plain, static element.
 */
export default function MagneticElement({
  children,
  className,
  strength = 0.32,
  radius = 40,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !fine || reduced) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    /* One window listener is shared by every magnet on the page and coalesced
       to a single frame; see lib/pointerField.ts. */
    const onMove = (px: number, py: number) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = px - cx;
      const dy = py - cy;
      const inside =
        Math.abs(dx) < r.width / 2 + radius &&
        Math.abs(dy) < r.height / 2 + radius;

      if (inside) {
        xTo(dx * strength);
        yTo(dy * strength);
        el.dataset.near = "true";
      } else if (el.dataset.near === "true") {
        xTo(0);
        yTo(0);
        el.dataset.near = "false";
      }
    };

    const unsubscribe = subscribePointer(onMove);
    return () => {
      unsubscribe();
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [fine, reduced, strength, radius]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}
