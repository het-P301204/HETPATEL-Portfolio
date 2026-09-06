"use client";

import { useState } from "react";
import Section, { SectionLabel } from "@/components/primitives/Section";
import { stack } from "@/data/skills";
import { cn } from "@/lib/cn";

/**
 * TECHNICAL TOOLKIT — a matrix with a readout beside it.
 *
 * Categories are rows, tools are cells, and the panel alongside says what the
 * selected tool is actually used for. Every cell also carries its description
 * in the markup, so the panel amplifies the content rather than hiding it.
 * No bars, no percentages, no invented proficiency.
 */
export default function Stack() {
  const count = stack.reduce((n, g) => n + g.items.length, 0);
  const [read, setRead] = useState<{ name: string; lines: [string, string] }>({
    name: "TOOLING",
    lines: [
      `${count} ENTRIES · ${stack.length} GROUPS`,
      "POINT AT ONE TO READ ITS FUNCTION",
    ],
  });

  return (
    <Section id="stack" className="stack">
      <SectionLabel
        marker="stack"
        label="TECHNICAL TOOLKIT"
        note="TOOLING · PROTOCOLS · FRAMEWORKS"
      />

      <div className="stack__body">
        <div className="stack__matrix">
          {stack.map((group) => (
            <div className="stack__group" key={group.key}>
              <p className="t-mono text-grey-soft stack__group-label">
                {group.label}
              </p>
              <ul className="stack__items">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      className={cn(
                        "stack__item",
                        read.name === item.name && "is-live",
                      )}
                      onMouseEnter={() => setRead(item)}
                      onFocus={() => setRead(item)}
                      onClick={() => setRead(item)}
                      data-cursor="analyze"
                      data-cursor-label="READ"
                    >
                      <span className="stack__item-name">{item.name}</span>
                      <span className="sr-only">
                        {" "}
                        — {item.lines[0]}, {item.lines[1]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className="stack__readout" aria-hidden="true">
          <div className="stack__readout-inner">
            <span className="t-mono text-grey-soft">READOUT</span>
            <span className="stack__readout-name t-display" key={read.name}>
              {read.name}
            </span>
            <span className="stack__readout-lines" key={`l-${read.name}`}>
              <span className="t-mono">{read.lines[0]}</span>
              <span className="t-mono text-grey">{read.lines[1]}</span>
            </span>
            <span className="stack__readout-rule" key={`r-${read.name}`} />
          </div>
        </aside>
      </div>
    </Section>
  );
}
