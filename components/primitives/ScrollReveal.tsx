"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

/** The quiet reveal used by everything that is not choreographed by hand. */
export default function ScrollReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: Props) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("fade-up", inView && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
