"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Rule from "./Rule";
import SectionMarker, { type SectionId } from "./SectionMarker";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/cn";

/**
 * Every section opens the same way — a rule, its mark, a label — and then
 * behaves however that section needs to. The header is the only thing they
 * share, which is what makes the differences legible instead of arbitrary.
 *
 * The mark replaces the numbering the sections used to carry. It fills when the
 * section owns the viewport, so the header reports where you are rather than
 * how far down a list you have got.
 */
export function SectionLabel({
  marker,
  label,
  note,
  className,
}: {
  marker: SectionId;
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <header className={cn("sec-head w-full", className)}>
      <Rule />
      <div className="sec-head__row">
        {/* The label rolls in word by word as the section arrives. Section
            headings were the one piece of type on the page that never moved,
            which made everything under the hero read as static. */}
        <h2 className="t-mono sec-head__title">
          <SectionMarker id={marker} />
          <AnimatedText text={label} stagger={0.04} />
        </h2>
        {note ? (
          <ScrollReveal as="p" className="t-mono text-grey" delay={0.12}>
            {note}
          </ScrollReveal>
        ) : null}
      </div>
    </header>
  );
}

export default function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
}) {
  const el = useRef<HTMLElement>(null);

  /* The section reports whether it currently owns the viewport. The section
     mark in its own header reads this, and so does anything else that wants
     to know without wiring up an observer of its own. */
  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.dataset.active = String(entry.isIntersecting);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={el}
      data-section={id}
      data-active="false"
      className={cn(
        "section shell relative",
        tone === "ink" && "on-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}
