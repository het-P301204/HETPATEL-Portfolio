"use client";

import { useEffect, useRef, useState } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/hooks";
import { alpha, readPalette, useTheme } from "@/lib/theme";

/* The lower third of the field belongs to the word, so the figure stays above
   it. `mx`/`my` are the portrait arrangement — the same five concerns, read
   down the page instead of across it. */
const NODES = [
  { label: "NETWORK", x: 0.08, y: 0.3, mx: 0.1, my: 0.1 },
  { label: "APPLICATION", x: 0.31, y: 0.6, mx: 0.6, my: 0.24 },
  { label: "IDENTITY", x: 0.54, y: 0.14, mx: 0.14, my: 0.4 },
  { label: "RISK", x: 0.77, y: 0.52, mx: 0.62, my: 0.54 },
  { label: "CONTROL", x: 0.92, y: 0.24, mx: 0.2, my: 0.68 },
];

type Props = {
  /** 0–1 through the section. Latches nodes without a pointer — touch, keyboard, reduced motion. */
  progress: number;
  onLatchedChange?: (count: number) => void;
};

/**
 * The trace.
 *
 * A hairline follows the pointer. Where it passes a concern, that node latches
 * and an edge is drawn back to the one before it — network, application,
 * identity, risk, control — until the five are one figure. It is a technical
 * diagram drawing itself, not a light show: one weight of line, no glow, and
 * the accent only on the marks that have actually been reached.
 *
 * Without a pointer the same figure assembles from scroll position, so the
 * moment is never withheld from anyone.
 */
export default function TraceField({ progress, onLatchedChange }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const { theme } = useTheme();
  const [latched, setLatched] = useState<number[]>([]);
  const latchedRef = useRef<number[]>([]);

  /* Scroll is the floor: it latches nodes in order regardless of input. */
  useEffect(() => {
    const target = Math.min(
      NODES.length,
      Math.floor(Math.max(0, progress - 0.08) * 6.2),
    );
    if (target > latchedRef.current.length) {
      const next = [...latchedRef.current];
      for (let i = 0; i < NODES.length && next.length < target; i++) {
        if (!next.includes(i)) next.push(i);
      }
      latchedRef.current = next;
      setLatched(next);
    }
  }, [progress]);

  useEffect(() => {
    onLatchedChange?.(latched.length);
  }, [latched, onLatchedChange]);

  useEffect(() => {
    const wrapEl = wrap.current;
    const cv = canvas.current;
    if (!wrapEl || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let frame = 0;
    let visible = false;
    let mobile = false;
    const palette = readPalette();
    const edgeInk = alpha(palette.ink, 0.5);
    const traceInk = palette.ink;
    const signal = alpha(palette.signal, 0.6);

    const trail: { x: number; y: number; life: number }[] = [];
    const edgeProgress: number[] = [];
    let pointer: { x: number; y: number } | null = null;

    const point = (i: number) => {
      const n = NODES[i];
      return mobile
        ? { x: n.mx * w, y: n.my * h }
        : { x: n.x * w, y: n.y * h };
    };

    const resize = () => {
      const r = wrapEl.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      mobile = w < 760;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      wrapEl.style.setProperty("--field-mobile", mobile ? "1" : "0");
      // Node markers are DOM, so they need the same coordinates.
      NODES.forEach((n, i) => {
        const el = wrapEl.querySelector<HTMLElement>(`[data-node="${i}"]`);
        if (!el) return;
        const p = point(i);
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      });
    };

    const onMove = (e: PointerEvent) => {
      if (!fine || reduced) return;
      const r = wrapEl.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < -40 || y < -40 || x > r.width + 40 || y > r.height + 40) {
        pointer = null;
        return;
      }
      pointer = { x, y };
      trail.push({ x, y, life: 1 });
      if (trail.length > 46) trail.shift();

      // Latch anything the trace passes near, in the order it is reached.
      NODES.forEach((_, i) => {
        if (latchedRef.current.includes(i)) return;
        const p = point(i);
        if (Math.hypot(p.x - x, p.y - y) < 78) {
          const next = [...latchedRef.current, i];
          latchedRef.current = next;
          setLatched(next);
        }
      });
    };

    const draw = () => {
      frame = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);

      // edges, in latch order — each draws itself once
      const list = latchedRef.current;
      for (let i = 1; i < list.length; i++) {
        if (edgeProgress[i] === undefined) edgeProgress[i] = 0;
        edgeProgress[i] = Math.min(1, edgeProgress[i] + (reduced ? 1 : 0.045));
        const a = point(list[i - 1]);
        const b = point(list[i]);
        const t = edgeProgress[i];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
        ctx.strokeStyle = edgeInk;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // the closing edge, once every concern has been reached
      if (list.length === NODES.length) {
        const a = point(list[list.length - 1]);
        const b = point(list[0]);
        ctx.beginPath();
        ctx.setLineDash([3, 5]);
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = signal;
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // the trace itself
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[i - 1];
          const p1 = trail[i];
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = alpha(
            traceInk,
            0.26 * (i / trail.length) * p1.life,
          );
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        trail.forEach((p) => (p.life *= 0.965));
        while (trail.length && trail[0].life < 0.06) trail.shift();
      }

      // the reading point
      if (pointer) {
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = alpha(traceInk, 0.55);
        ctx.fill();
      }

      if (!visible && trail.length === 0) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !frame) frame = requestAnimationFrame(draw);
        if (!visible && frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(wrapEl);

    const ro = new ResizeObserver(resize);
    ro.observe(wrapEl);
    resize();

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
    // `theme` is a dependency because the palette is read once per mount.
  }, [fine, reduced, theme]);

  const complete = latched.length === NODES.length;

  return (
    <div
      className="field"
      ref={wrap}
      data-complete={complete}
      aria-hidden="true"
    >
      <canvas ref={canvas} className="field__canvas" />
      {NODES.map((n, i) => (
        <span
          key={n.label}
          data-node={i}
          className={`field__node ${latched.includes(i) ? "is-latched" : ""}`}
        >
          <span className="field__mark" />
          <span className="t-mono-sm field__label">{n.label}</span>
        </span>
      ))}
    </div>
  );
}
