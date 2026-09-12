"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { disciplines, profile } from "@/data/profile";
import { useStage } from "@/lib/stage";
import {
  useFinePointer,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "@/lib/hooks";
import { lockScroll } from "@/components/system/SmoothScroll";
import { cn } from "@/lib/cn";


/**
 * The loader and the hero are one component, because they are one moment.
 *
 * 00 counts to 100 in the exact position the name will occupy; at 100 the
 * digits roll away and HET rolls into the same slot, PATEL arrives from the
 * other side, and the instrument comes up around them. Nothing is handed from
 * one element to another, so there is no seam to get wrong.
 *
 * Then the section is twice the height of the screen and its contents are
 * sticky: scrolling compresses the name, separates the metadata, and resolves
 * the whole composition into SECURITY ENGINEERING before the page moves on.
 */
export default function Hero() {
  const { ready, setReady } = useStage();
  const reduced = useReducedMotion();
  const fine = useFinePointer();

  const root = useRef<HTMLElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  /* The hero used to draw full-screen axis lines that tracked the pointer.
     They read as a crosshair overlay on top of the whole page rather than as
     part of the composition, so only the cursor tracks the pointer now. The
     background grid stays where it is. */
  const readout = useRef<HTMLSpanElement>(null);
  const head = useRef<HTMLElement>(null);
  const bootCount = useRef<HTMLElement>(null);

  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [booted, setBooted] = useState<boolean | null>(null);
  const [stamp, setStamp] = useState("");

  /* Whether the hero is anywhere near the viewport. Two things depend on it:
     the pointer instrument's animation frame, and the auto-advancing index.
     Both used to run for the whole visit regardless of where the reader was. */
  const [onScreen, setOnScreen] = useState(true);

  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Client-only so the server and the client can never disagree on the clock. */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const date = now
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase();
      const time = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setStamp(`${date} · ${time}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem("hp:booted") === "1";
    } catch {}

    /* The entrance animates two words in a variable display face. Starting it
       before that face resolves means the glyphs reflow mid-movement and the
       sequence reads as a stutter, so it waits on the same
       `document.fonts.ready` the boot panel waits on — one signal, so the
       panel leaving and the name rising cannot drift apart.

       The timeout is the same ceiling the panel uses. A font that never
       resolves must not be able to leave the hero sitting in its loading
       state, which hides every element it is about to animate. */
    if (already) {
      setBooted(true);
      return;
    }

    let settled = false;
    const go = () => {
      if (settled) return;
      settled = true;
      setBooted(false);
    };

    const ceiling = window.setTimeout(go, 2200);
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) fonts.ready.then(go).catch(go);
    else go();

    return () => window.clearTimeout(ceiling);
  }, []);

  /* ---- initialisation, then entrance ------------------------------------- */
  useIsomorphicLayoutEffect(() => {
    if (booted === null) return;
    const el = root.current;
    if (!el) return;

    const skip = booted || reduced;

    const ctx = gsap.context(() => {
      // Every from-state is set here, before paint, so the stylesheet never
      // has to describe a transform that GSAP also owns.
      gsap.set("[data-morph='name'], [data-enter='patel']", { yPercent: 112 });
      gsap.set("[data-enter='band'] span", { scaleX: 0 });
      gsap.set("[data-enter='meta'] > *", { yPercent: 120, opacity: 0 });
      gsap.set("[data-enter='foot'] > *", { y: 24, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem("hp:booted", "1");
          } catch {}
          lockScroll(false, "preloader");
          el.dataset.state = "idle";
          setReady();
        },
      });

      if (skip) {
        tl.set(
            "[data-morph='name'], [data-enter='patel'], [data-enter='meta'] > *, [data-enter='foot'] > *",
            { yPercent: 0, y: 0, opacity: 1 },
          )
          .set("[data-enter='band'] span", { scaleX: 1 })
          .to({}, { duration: 0.01 });
        return;
      }

      lockScroll(true, "preloader");

      /* ---------------------------------------------------------------------
         THE ENTRANCE — a typographic assembly, ~1.05s.

         What was here before: a stepped 00→100 counter, an INITIALIZING label,
         a four-stage boot checklist and a filling rule with a travelling head.
         All of it removed. A progress readout on a static site measures nothing
         real — it was theatre, and it is the single most common thing on a
         cybersecurity portfolio. The name is now the only thing that arrives.

         HET rises, PATEL follows it out of the opposite edge, the rule opens
         under them and carries the role, and the instrument settles last. Each
         beat overlaps the one before it, so it reads as one movement rather
         than four steps.
         --------------------------------------------------------------------- */
      tl.fromTo(
        "[data-morph=name]",
        { yPercent: 112 },
        { yPercent: 0, duration: 0.62, ease: "expo.out" },
      )
        .fromTo(
          "[data-enter=patel]",
          { yPercent: 112, xPercent: 5 },
          { yPercent: 0, xPercent: 0, duration: 0.72, ease: "expo.out" },
          "-=0.44",
        )
        // The rule opens outward from the name, carrying the role with it.
        .fromTo(
          "[data-enter=band] span",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.66, ease: "power3.inOut" },
          "-=0.46",
        )
        .fromTo(
          "[data-enter=meta] > *",
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.045,
            ease: "expo.out",
          },
          "-=0.5",
        )
        .fromTo(
          "[data-enter=foot] > *",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, stagger: 0.05, ease: "expo.out" },
          "-=0.42",
        );
    }, root);

    return () => {
      ctx.revert();
      lockScroll(false, "preloader");
    };
  }, [booted, reduced, setReady]);

  /* ---- the sticky outro: the name resolves into the discipline ----------- */
  useEffect(() => {
    if (!ready) return;
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    /* `reduced` is not a dependency: gsap.matchMedia owns the preference and
       re-evaluates itself. Listing it tore down and rebuilt the entire sticky
       outro whenever the setting changed. */
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.to("[data-out='meta-l']", { xPercent: -14, opacity: 0, ease: "none" }, 0)
        .to("[data-out='meta-r']", { xPercent: 14, opacity: 0, ease: "none" }, 0)
        .to("[data-out='foot']", { y: 40, opacity: 0, ease: "none" }, 0)
        // The two words compress at different rates — they arrived separately,
        // they leave separately.
        .to("[data-out='het']", { yPercent: -22, scale: 0.9, ease: "none" }, 0)
        .to("[data-out='patel']", { yPercent: -58, scale: 0.82, ease: "none" }, 0)
        .to("[data-out='band']", { opacity: 0, ease: "none" }, 0.1)
        // The name is gone before the discipline arrives — they never share
        // the frame, or the composition reads as a collision.
        .to(
          "[data-out='het']",
          { yPercent: -130, opacity: 0, duration: 0.16, ease: "power2.in" },
          0.32,
        )
        .to(
          "[data-out='patel']",
          { yPercent: -165, opacity: 0, duration: 0.16, ease: "power2.in" },
          0.36,
        )
        .set("[data-out='resolve']", { visibility: "visible" }, 0.52)
        .fromTo(
          "[data-out='resolve'] .mask > span",
          { yPercent: 110 },
          { yPercent: 0, duration: 0.24, ease: "power3.out" },
          0.54,
        )
        .fromTo(
          "[data-out='resolve-rule']",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.22, ease: "power2.out" },
          0.66,
        )
        .fromTo(
          "[data-out='resolve-meta']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.2 },
          0.72,
        );
      },
      root,
    );

    return () => mm.revert();
  }, [ready]);

  /* ---- instrument layer --------------------------------------------------- */
  useEffect(() => {
    if (!fine || reduced || !onScreen) return;
    const el = root.current;
    if (!el) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let px = -1;
    let py = -1;

    // Proximity to the name, measured once per resize rather than per frame.
    const names = el.querySelector<HTMLElement>(".hero__names");
    let band = { top: 0, height: 1 };
    const measure = () => {
      const r = names?.getBoundingClientRect();
      if (r) band = { top: r.top + window.scrollY, height: r.height };
    };
    measure();
    window.addEventListener("resize", measure);

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY;
      el.dataset.tracking =
        e.clientY >= 0 && e.clientY <= window.innerHeight ? "true" : "false";
    };

    const render = () => {
      frame = requestAnimationFrame(render);
      if (Math.abs(x - px) < 0.5 && Math.abs(y - py) < 0.5) return;
      px = x;
      py = y;
      if (readout.current)
        readout.current.textContent = `X ${String(Math.round(x)).padStart(4, "0")}  Y ${String(Math.round(y)).padStart(4, "0")}`;

      // The name tightens fractionally as the pointer comes level with it —
      // four thousandths of an em. You feel it before you see it.
      if (names) {
        const centre = band.top - window.scrollY + band.height / 2;
        const d = Math.min(1, Math.abs(y - centre) / (band.height || 1));
        names.style.setProperty("--near", (1 - d).toFixed(3));
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", measure);
    };
  }, [fine, reduced, onScreen]);

  /* ---- the composition changes on its own when nobody is driving it ------
     Only while it is on screen. It checked `document.hidden`, which covers a
     backgrounded tab and nothing else: on a foregrounded tab it kept cycling —
     and kept re-rendering the largest component on the page — for the entire
     visit, including the twenty-odd screens where the hero is nowhere near the
     viewport. Pointing at or focusing an entry still holds it. */
  useEffect(() => {
    if (held || reduced || !ready || !onScreen) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((i) => (i + 1) % disciplines.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [held, reduced, ready, onScreen]);

  const current = disciplines[active];

  return (
    <section
      id="top"
      ref={root}
      className="hero"
      data-state="loading"
      data-active={active}
      aria-label="Introduction"
    >
      <div className="hero__frame shell">

        <div className="hero__meta t-mono" data-enter="meta">
          <span data-out="meta-l">SECURITY PROFILE / 2026</span>
          <span className="hero__meta-mid" data-out="meta-l">
            {profile.role.toUpperCase()}
          </span>
          {/* A live session line, not an address. */}
          <span className="hero__meta-end" data-out="meta-r">
            {stamp || "—"}
          </span>
        </div>

        <div className="hero__names">
          <h1 className="sr-only">
            Het Patel — {profile.role}, {profile.currentTitle} at{" "}
            {profile.currentOrg}
          </h1>

          {/* The name assembles: HET rises, then PATEL, then the role. */}
          <div className="hero__slot" aria-hidden="true" data-out="het">
            <span className="mask hero__morph">
              <span
                className="t-display t-colossal hero__het"
                data-morph="name"
              >
                HET
              </span>
            </span>
          </div>

          <div className="hero__band" data-enter="band" data-out="band">
            <span className="hero__band-rule" />
            <span className="hero__band-label t-mono-sm">
              {profile.currentTitle.toUpperCase()}
            </span>
          </div>

          <div className="hero__patel-row" aria-hidden="true" data-out="patel">
            <div className="mask hero__patel-wrap">
              <span
                className="t-display t-colossal hero__patel"
                data-enter="patel"
                style={
                  { "--shift": `${(active + 1) * 0.9}vw` } as React.CSSProperties
                }
              >
                PATEL
              </span>
            </div>
            <span className="hero__signal-track">
              <span
                className="hero__signal"
                style={
                  {
                    "--w": `${((active + 1) / disciplines.length) * 100}%`,
                  } as React.CSSProperties
                }
              />
            </span>
          </div>

          {/* What the name resolves into on the way out. */}
          <div className="hero__resolve" aria-hidden="true" data-out="resolve">
            <span className="mask">
              <span className="t-display">SECURITY ENGINEERING</span>
            </span>
            <span className="hero__resolve-rule" data-out="resolve-rule" />
            <span className="t-mono hero__resolve-meta" data-out="resolve-meta">
              {profile.focus}
            </span>
          </div>
        </div>

        <div className="hero__foot" data-enter="foot" data-out="foot">
          <ul className="hero__roles">
            <li className="t-display">SECURITY ENGINEERING</li>
            <li className="t-display">VAPT</li>
            <li className="t-display">RISK &amp; COMPLIANCE</li>
          </ul>

          <div className="hero__right">
            <div className="hero__slot-text-wrap" aria-hidden="true">
              <p className="hero__slot-text t-body" key={current.id}>
                {current.descriptor}
              </p>
              <ul className="hero__tags" key={`${current.id}-tags`}>
                {current.context.map((tag) => (
                  <li key={tag} className="t-mono-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <ol
              className="hero__index"
              onMouseLeave={() => setHeld(false)}
              aria-label="Disciplines"
            >
              {/* These were `<li tabIndex={0}>`: four tab stops that a screen
                  reader announced as list items with nothing actionable about
                  them, and which a keyboard could focus but never operate. They
                  select a discipline, so they are buttons, and `aria-pressed`
                  states which one is selected. */}
              {disciplines.map((d, i) => (
                <li key={d.id}>
                  <button
                    type="button"
                    className={cn("hero__item", i === active && "is-active")}
                    aria-pressed={i === active}
                    onMouseEnter={() => {
                      setActive(i);
                      setHeld(true);
                    }}
                    onFocus={() => {
                      setActive(i);
                      setHeld(true);
                    }}
                    onBlur={() => setHeld(false)}
                    onClick={() => {
                      setActive(i);
                      setHeld(true);
                    }}
                    data-cursor="analyze"
                    data-cursor-label="ANALYZE"
                    data-cursor-index={d.index}
                  >
                    <span className="t-mono hero__item-idx">{d.index}</span>
                    <span className="t-mono hero__item-label">{d.label}</span>
                    <span className="sr-only"> — {d.descriptor}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="hero__readout t-mono-sm">
              {fine && !reduced ? (
                <span ref={readout} aria-hidden="true">
                  X 0000  Y 0000
                </span>
              ) : (
                <span />
              )}
              {/* Points at the next section, not at WORK. Labelled SCROLL, it
                  reads as "continue" — and it used to skip the statement and
                  the whole of FIELD EXPERIENCE to land four sections down. The
                  skip link in the navigation is the one that jumps. */}
              <a
                href="#manifesto"
                className="hero__scroll t-mono-sm"
                data-cursor="link"
              >
                SCROLL
                <i />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
