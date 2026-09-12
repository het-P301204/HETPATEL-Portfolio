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

/**
 * A destination chosen while the document was locked.
 *
 * Every row of the site index is an anchor, and the index locks the document
 * while it is open. The handler below intercepted the click and asked Lenis to
 * travel — but Lenis is stopped while a lock is held and quietly ignores
 * `scrollTo`, and `preventDefault` had already removed the browser's own hash
 * jump. So choosing a destination from the index did nothing at all: the panel
 * closed and the reader stayed exactly where they were. All nine rows, every
 * time.
 *
 * The intent was always that the overlay leaves first and the scroll follows.
 * That is what this does — the destination is held until the last lock lifts,
 * then travelled to. Any future overlay containing a hash link inherits the
 * behaviour without knowing about it.
 */
let deferred: { el: HTMLElement; reduced: boolean } | null = null;

/** Travel to a section and leave focus on it, so the keyboard follows the eye. */
function travelTo(el: HTMLElement, reduced: boolean) {
  if (scroller.current) {
    scroller.current.scrollTo(el, { offset: 0, duration: 1.15 });
  } else {
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

export function lockScroll(locked: boolean, owner = "default") {
  if (locked) locks.add(owner);
  else locks.delete(owner);

  const held = locks.size > 0;
  if (scroller.current) {
    held ? scroller.current.stop() : scroller.current.start();
  }
  document.documentElement.classList.toggle("lenis-stopped", held);
  document.body.style.overflow = held ? "hidden" : "";

  /* The document is free again, so anything that was waiting on it can go. One
     frame, so the release has been applied before the travel starts — and so
     the overlay's own focus restore runs first and this has the last word. */
  if (!held && deferred) {
    const { el, reduced } = deferred;
    deferred = null;
    requestAnimationFrame(() => travelTo(el, reduced));
  }
}

/**
 * Smooth scrolling. Lenis drives GSAP's ticker so the two never fight over the
 * frame.
 *
 * This used to publish a damped `--vel` custom property on <html> for
 * typography to lean with the scroll. That effect was removed and the signal
 * was not: nothing in any stylesheet or component read `--vel`, while a
 * scroll handler and an unconditional every-frame ticker callback kept writing
 * it. Writing a custom property on the document element invalidates inherited
 * style for the whole tree, so this was the most expensive no-op on the page.
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

      /* Locked means an overlay owns the screen. Remember where they asked to
         go; `lockScroll` takes them there when the last lock lifts. */
      if (locks.size > 0) {
        deferred = { el: el as HTMLElement, reduced };
        return;
      }

      // Keyboard users must land on the section, not stay behind on the link.
      travelTo(el as HTMLElement, reduced);
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

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      scroller.current = null;
    };
  }, [reduced]);

  return null;
}
