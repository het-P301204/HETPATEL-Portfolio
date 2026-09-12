"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks";

/**
 * The hold before the hero.
 *
 * There is a note in Hero.tsx about what used to be here: a stepped 00→100
 * counter and a boot checklist, removed because a progress readout on a static
 * site measures nothing real. That judgement stands and this does not undo it.
 * Nothing here counts, and nothing claims to know how far along anything is.
 *
 * What it does do is wait for something true. The entrance animates two words
 * set in a variable display face, and if that face resolves one frame after the
 * timeline starts, the glyphs reflow mid-movement and the whole sequence reads
 * as a stutter. `document.fonts.ready` is the actual precondition for the
 * animation being correct, so that is what the hold waits on — the same promise
 * Hero waits on before it starts, so the panel leaves and the name rises on one
 * signal rather than two that have to be kept in step.
 *
 * Three bounds, because a loading screen that can trap someone is worse than no
 * loading screen:
 *
 *   FLOOR    260ms, so a warm cache does not produce a black flash.
 *   CEILING  2200ms, after which it leaves regardless. A slow font is a reason
 *            to show the page late, never a reason to withhold it.
 *   ONCE     Skipped entirely when the session has already booted, matching
 *            the entrance it hands off to.
 */
const FLOOR_MS = 260;
const CEILING_MS = 2200;

export default function Boot() {
  const reduced = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  /* Starts mounted, not hidden. `sessionStorage` cannot be read during the
     server render, so deciding on the client would mean the panel appears one
     effect *after* first paint — the page would flash into view and then be
     covered, which is worse than not holding at all. It ships in the HTML,
     covers from the first frame, and a session that has already booted removes
     it on mount before anything animates. */
  const [gone, setGone] = useState(false);
  const started = useRef(0);

  useEffect(() => {
    // sessionStorage can throw in a partitioned or locked-down context, and a
    // storage failure must not be able to hold the panel up.
    let already = false;
    try {
      already = sessionStorage.getItem("hp:booted") === "1";
    } catch {}
    if (already) {
      setGone(true);
      return;
    }

    started.current = performance.now();

    let done = false;
    const release = () => {
      if (done) return;
      done = true;
      const held = performance.now() - started.current;
      const wait = Math.max(0, FLOOR_MS - held);
      window.setTimeout(() => setLeaving(true), wait);
    };

    const ceiling = window.setTimeout(release, CEILING_MS);
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(release).catch(release);
    } else {
      // No Font Loading API: nothing truthful to wait on, so only the floor.
      release();
    }

    return () => window.clearTimeout(ceiling);
  }, []);

  // The exit is owned by CSS so it cannot be left half-played by a React
  // re-render; this only removes the node once the surface is off screen.
  useEffect(() => {
    if (!leaving) return;
    const t = window.setTimeout(() => setGone(true), reduced ? 0 : 700);
    return () => window.clearTimeout(t);
  }, [leaving, reduced]);

  if (gone) return null;

  return (
    <div
      className="boot"
      data-leaving={leaving ? "true" : "false"}
      /* Decorative: the page underneath is the content, and a screen reader
         should never be told a surface is loading when the document is already
         there to be read. */
      aria-hidden="true"
    >
      <span className="boot__rule" />
    </div>
  );
}
