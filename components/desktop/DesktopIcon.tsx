"use client";

import { useRef, useState } from "react";
import type { DesktopNode } from "@/data/desktop";
import FileIcon from "@/components/desktop/FileIcon";
import { cn } from "@/lib/cn";

/**
 * An icon on the desk.
 *
 * It behaves the way a file manager icon behaves: a single click selects it and
 * shows its name highlighted, a double click opens it. Keyboard users get the
 * shorter route — Enter or Space opens directly, because requiring a double
 * activation from the keyboard would be an invented obstacle.
 *
 * The icons are no longer draggable. Dragging them was texture rather than
 * navigation, it fought the grid, and it made every icon a pointer-only object
 * that could be left overlapping something else.
 */
export default function DesktopIcon({
  node,
  meta,
  onOpen,
  compact,
}: {
  node: DesktopNode;
  meta: string;
  onOpen: (id: string, origin: DOMRect | null) => void;
  compact: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState(false);

  const open = () => onOpen(node.id, ref.current?.getBoundingClientRect() ?? null);

  return (
    <div role="listitem" className="obj">
      <button
        ref={ref}
        type="button"
        className={cn("obj__hit", selected && "is-selected")}
        /* On a touch screen a double tap is a zoom gesture, not an open. */
        onClick={() => (compact ? open() : setSelected(true))}
        onDoubleClick={open}
        onBlur={() => setSelected(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        aria-label={`${node.name}${meta ? ` — ${meta}` : ""}`}
        data-cursor="inspect"
        data-cursor-label="OPEN"
      >
        <FileIcon kind={node.kind} className="obj__icon" />
        <span className="obj__name">{node.name}</span>
        {meta ? <span className="obj__meta">{meta}</span> : null}
      </button>
    </div>
  );
}
