"use client";

import { useEffect, useState } from "react";
import { useStage } from "@/lib/stage";
import { useInverted } from "@/lib/useInverted";
import SectionMarker, {
  type SectionId,
} from "@/components/primitives/SectionMarker";
import { cn } from "@/lib/cn";

const MARKS: { id: SectionId; label: string }[] = [
  { id: "experience", label: "EXPERIENCE" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "practice", label: "PRACTICE" },
  { id: "academic", label: "ACADEMIC" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "stack", label: "TOOLKIT" },
  { id: "about", label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

const TOTAL = String(MARKS.length).padStart(2, "0");

/**
 * Where you are, as a system status indicator.
 *
 * It used to be three words in a corner — `03 / 09 EXPERIENCE` — which read as
 * a page number. It is now a small technical module: corner marks, the
 * section's own symbol, the position, and a bar that fills to the fraction of
 * the document the current section represents. Still small, still in the
 * corner, still only present while you are moving; at the top of the page
 * there is nothing useful for it to say.
 */
export default function ProgressIndex() {
  const { ready } = useStage();
  const inverted = useInverted(-40);
  const [index, setIndex] = useState<number | null>(null);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const observed = MARKS.map((m, i) => ({
      i,
      el: document.getElementById(m.id),
    })).filter((x): x is { i: number; el: HTMLElement } => Boolean(x.el));
    if (!observed.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .slice(0, 1)
          .forEach((e) => {
            const hit = observed.find((o) => o.el === e.target);
            if (hit) setIndex(hit.i);
          });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observed.forEach((o) => observer.observe(o.el));

    // It is a position readout, so it reports while you are moving and gets
    // out of the way when you stop reading position and start reading content.
    let idle = 0;
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.6) setIndex(null);
      setMoving(true);
      window.clearTimeout(idle);
      idle = window.setTimeout(() => setMoving(false), 1100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idle);
    };
  }, []);

  const current = index === null ? null : MARKS[index];

  return (
    <div
      className={cn(
        "pix",
        ready && current && moving && "is-on",
        inverted && "is-inverted",
      )}
      aria-hidden="true"
    >
      <span className="pix__corners" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>

      <span className="pix__sym">
        {current ? <SectionMarker id={current.id} /> : null}
      </span>

      <span className="pix__pos t-mono-sm">
        <b>{current ? String(index! + 1).padStart(2, "0") : "00"}</b>
        <s>/</s>
        <em>{TOTAL}</em>
      </span>

      <span className="pix__label t-mono-sm">{current?.label ?? ""}</span>

      <span className="pix__bar">
        <i
          style={{
            transform: `scaleX(${current ? (index! + 1) / MARKS.length : 0})`,
          }}
        />
      </span>
    </div>
  );
}
