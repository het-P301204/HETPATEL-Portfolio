"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { stack } from "@/data/skills";
import { experience } from "@/data/experience";

const PROMPT = "hetp@workstation:~$";

const FILES: Record<string, string[]> = {
  "about.txt": [profile.role, ...profile.about.slice(0, 1)],
  "role.txt": [
    `${experience[0].title} — ${experience[0].org}`,
    `${experience[0].discipline} · ${experience[0].start} — ${experience[0].end}`,
  ],
  "contact.txt": [
    profile.email,
    profile.linkedinUrl,
    profile.githubUrl || "github: not linked",
  ],
  "limitations.txt": [
    "Everything on this site is supported by the résumé it was built from.",
    "No counts, no CVEs, no client work, no severity claims.",
    "CASE / 001 is a fictional training scenario with synthetic logs.",
  ],
};

/**
 * A small shell with a real, honest command set. It reads the same data as the
 * rest of the site — `ls` cannot list a file that does not exist, and no
 * command invents a number.
 */
export default function Terminal() {
  const [lines, setLines] = useState<string[]>([
    "HET SYSTEM — interactive shell",
    "type `help` for the command list",
    "",
  ]);
  const [value, setValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    const [name, ...args] = cmd.split(/\s+/);
    const out: string[] = [`${PROMPT} ${cmd}`];

    switch (name) {
      case "":
        break;
      case "help":
        out.push(
          "whoami     who is at this desk",
          "ls         list files",
          "cat FILE   read a file",
          "projects   list project files",
          "certs      list certifications",
          "tools      list the toolkit",
          "uname      system information",
          "clear      clear the screen",
        );
        break;
      case "whoami":
        out.push(
          `${profile.name.toLowerCase().replace(" ", ".")} — ${profile.role}`,
          `${profile.currentTitle}, ${profile.currentOrg}, since ${profile.currentSince}`,
        );
        break;
      case "ls":
        out.push(Object.keys(FILES).join("   "));
        break;
      case "cat": {
        const f = args[0];
        if (!f) out.push("cat: missing operand");
        else if (FILES[f]) out.push(...FILES[f]);
        else out.push(`cat: ${f}: no such file`);
        break;
      }
      case "projects":
        out.push(
          ...projects.map(
            (p) => `${p.number}  ${p.title.padEnd(42, " ")} ${p.status}`,
          ),
        );
        break;
      case "certs":
        out.push(
          ...certifications.map(
            (c) =>
              `${c.status === "IN PROGRESS" ? "[ ]" : "[x]"} ${c.name} — ${c.provider}` +
              (c.credentialUrl ? ` — ${c.credentialUrl}` : ""),
          ),
        );
        break;
      case "tools":
        out.push(
          ...stack.map((g) => `${g.label.padEnd(12, " ")} ${g.items.map((i) => i.name).join(", ")}`),
        );
        break;
      case "uname":
        out.push(
          "HET SYSTEM · workspace build",
          "surfaces: standard (editorial), desktop (environment)",
          "case files: 001 — fictional training scenario",
        );
        break;
      case "clear":
        setLines([]);
        setValue("");
        return;
      default:
        out.push(`${name}: command not found — try \`help\``);
    }

    out.push("");
    setLines((l) => [...l, ...out]);
    setValue("");
  };

  return (
    <div
      className="term"
      onClick={() => inputRef.current?.focus()}
      data-cursor="text"
    >
      {/* Every command appends lines here and nothing else changes on screen.
          Without a log role a screen-reader user could type `help`, press
          Enter, and receive silence. */}
      <div
        className="term__out t-mono-md"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {lines.map((l, i) => (
          <div key={i} className={l.startsWith(PROMPT) ? "term__echo" : undefined}>
            {l || " "}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form
        className="term__in"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
        }}
      >
        <label htmlFor="term-input" className="term__prompt t-mono-md">
          {PROMPT}
        </label>
        <input
          id="term-input"
          ref={inputRef}
          className="t-mono-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command"
        />
      </form>
    </div>
  );
}
