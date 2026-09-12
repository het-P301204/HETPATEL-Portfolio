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
      "SELECT ONE TO READ ITS FUNCTION",
    ],
  });

  return (
    <Section id="stack" className="stack">
      <SectionLabel
        marker="stack"
        label="TECHNICAL TOOLKIT"
        note="TOOLING · PROTOCOLS · FRAMEWORKS"
      />

      {/* A list of tools answers "what" and, through the readout, "why". It
          cannot answer "on what basis" without asserting something per tool
          that the record does not state — several of these appear in a
          discipline list and nowhere else. SECURITY PRACTICE does state it,
          per domain, so this points there rather than inventing a provenance
          for each row. */}
      <p className="t-mono-sm text-grey stack__crossref">
        WHERE EACH OF THESE COMES FROM — INTERNSHIP, LAB, COURSEWORK OR
        SELF-DIRECTED — IS STATED BY DOMAIN IN{" "}
        <a href="#practice" className="link" data-cursor="link">
          SECURITY PRACTICE ↑
        </a>
        .
      </p>

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
