"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks";

/** Module singleton so the preloader can hold the page still while it works. */
export const scroller: { current: Lenis | null } = { current: null };

/**
 * Scroll locks are reference-counted by owner.
 *
 * More than one thing can hold the document still at the same time — the
 * preloader, the experience selector, the index overlay, a project record — and
 * they do not close in the order they opened. A plain boolean meant whichever
 * one closed first handed the scroll back while another was still on screen.
 * Each owner now locks under its own key and the document only moves again when
 * the last key is released.
 */
const locks = new Set<string>();

export function lockScroll(locked: boolean, owner = "default") {
  if (locked) locks.add(owner);
  else locks.delete(owner);

  const held = locks.size > 0;
  if (scroller.current) {
    held ? scroller.current.stop() : scroller.current.start();
  }
  document.documentElement.classList.toggle("lenis-stopped", held);
  document.body.style.overflow = held ? "hidden" : "";
}

/**
 * Smooth scrolling, and the scroll velocity signal the typography reads.
 * Lenis drives GSAP's ticker so the two never fight over the frame.
 */
export default function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Anchor navigation has to work whether or not Lenis is running.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (scroller.current) {
        scroller.current.scrollTo(el as HTMLElement, {
          offset: 0,
          duration: 1.15,
        });
      } else {
        el.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      }
      // Keyboard users must land on the section, not stay behind on the link.
      (el as HTMLElement).setAttribute("tabindex", "-1");
      (el as HTMLElement).focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);

    if (reduced) {
      return () => document.removeEventListener("click", onClick);
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.6,
      autoRaf: false,
    });
    scroller.current = lenis;

    const root = document.documentElement;
    let velocity = 0;

    lenis.on("scroll", (e: { velocity: number }) => {
      ScrollTrigger.update();
      // A damped, clamped signal — typography leans with the scroll, never lurches.
      velocity = gsap.utils.clamp(-1, 1, e.velocity / 40);
      root.style.setProperty("--vel", velocity.toFixed(3));
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Bleed the signal back to zero when the scroll stops.
    const decay = () => {
      if (Math.abs(velocity) > 0.001) {
        velocity *= 0.92;
        root.style.setProperty("--vel", velocity.toFixed(3));
      }
    };
    gsap.ticker.add(decay);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      gsap.ticker.remove(decay);
      lenis.destroy();
      scroller.current = null;
      root.style.removeProperty("--vel");
    };
  }, [reduced]);

  return null;
}
