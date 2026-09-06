"use client";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/cn";

/** A hairline that draws itself once, in the direction the eye reads. */
export default function Rule({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ margin: "0px" });
  return (
    <div
      ref={ref}
      className={cn("rule-draw", className)}
      style={
        {
          "--draw": inView ? 1 : 0,
          "--draw-delay": `${delay}s`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  );
}
