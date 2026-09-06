"use client";

import { Fragment, type ElementType } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Seconds between words. */
  stagger?: number;
  delay?: number;
  /** Controlled playback — used where a timeline, not the viewport, decides. */
  play?: boolean;
  once?: boolean;
};

/**
 * Word-by-word reveal from behind a mask. Transform and opacity only, and the
 * text is a single string in the DOM for anything that reads rather than looks.
 */
export default function AnimatedText({
  text,
  as: Tag = "span",
  className,
  stagger = 0.055,
  delay = 0,
  play,
  once = true,
}: Props) {
  const [ref, inView] = useInView<HTMLElement>({ once });
  const active = play ?? inView;
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as never}
      className={cn("at", active && "is-in", className)}
      data-text={text}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="mask at-word">
            <span
              style={{
                transitionDelay: `${(delay + i * stagger).toFixed(3)}s`,
              }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
