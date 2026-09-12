"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import DesktopIcon from "@/components/desktop/DesktopIcon";
import FileIcon from "@/components/desktop/FileIcon";
import SystemWindow, {
  type WindowState,
} from "@/components/desktop/SystemWindow";
import WindowContents from "@/components/desktop/WindowContents";
import { dock, nodes } from "@/data/desktop";
import { certificationStats } from "@/data/certifications";
import { projects } from "@/data/projects";
import { practice, stack } from "@/data/skills";
import { profile } from "@/data/profile";
import { useMode } from "@/lib/mode";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

const byId = new Map(nodes.map((n) => [n.id, n]));
const TIERS = ["primary", "secondary", "reference"] as const;

/** Counts are derived, never typed. */
function metaFor(id: string) {
  switch (id) {
    case "security-lab":
      return `${practice.length} domains`;
    case "project-files":
      return `${projects.length} items`;
    case "certification-archive":
      return `${certificationStats.total} items · ${certificationStats.pending} pending`;
    case "toolkit":
      return `${stack.reduce((n, g) => n + g.items.length, 0)} tools`;
    case "github":
      return profile.githubUrl ? "External" : "Not linked";
    default:
      return byId.get(id)?.meta ?? "";
  }
}

/**
 * HET // WORKSTATION.
 *
 * A Linux desktop, read the way Ubuntu reads it: a system panel across the top,
 * a pinned launcher down the left edge, and the workspace between them holding
 * icons on a real grid — filling top-to-bottom then left-to-right, the way a
 * file manager places them. Not a HUD, and not a scatter of floating artifacts.
 *
 * Windows are applications. They open from the icon that spawned them, they
 * minimise into the launcher and can be raised from it again, they maximise to
 * the workspace rather than the screen, and they close. The launcher doubles as
 * the task switcher, which is why the running indicator lives on it.
 */
export default function Desktop() {
  const { change } = useMode();
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [zTop, setZTop] = useState(1);
  const [clock, setClock] = useState("");
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setCompact(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  /* Session uptime — a real number, counted from when the environment came up.
     The only "metric" on screen that the site can actually stand behind. */
  const [uptime, setUptime] = useState("00:00");
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      setUptime(
        `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`,
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  /* The panel clock reads like a system clock: weekday, date, time. */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const day = now.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      });
      const time = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setClock(`${day}  ${time}`);
    };
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  /* the environment coming up */
  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (reduced) {
      el.dataset.booted = "true";
      return;
    }
    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: () => (el.dataset.booted = "true") })
        .fromTo(
          "[data-dk='panel']",
          { yPercent: -100 },
          { yPercent: 0, duration: 0.45, ease: "power3.out" },
        )
        .fromTo(
          "[data-dk='dock']",
          { xPercent: -110 },
          { xPercent: 0, duration: 0.5, ease: "power3.out" },
          "-=0.25",
        )
        .fromTo(
          ".obj",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.035,
          },
          "-=0.3",
        );
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  const open = useCallback(
    (id: string, origin: DOMRect | null) => {
      setZTop((z) => z + 1);
      setWindows((ws) => {
        const existing = ws.find((w) => w.id === id);
        if (existing)
          return ws.map((w) =>
            w.id === id ? { ...w, z: zTop + 1, minimized: false } : w,
          );
        const n = byId.get(id);
        if (!n) return ws;
        return [
          ...ws,
          {
            id,
            title: n.title,
            status: n.status,
            origin,
            z: zTop + 1,
            minimized: false,
            maximized: false,
          },
        ];
      });
    },
    [zTop],
  );

  const focus = useCallback(
    (id: string) => {
      setZTop((z) => z + 1);
      setWindows((ws) =>
        ws.map((w) => (w.id === id ? { ...w, z: zTop + 1 } : w)),
      );
    },
    [zTop],
  );

  const close = useCallback((id: string) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const minimize = useCallback((id: string) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    );
  }, []);

  const toggleMax = useCallback((id: string) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)),
    );
  }, []);

  /** Launcher click: raise, restore or open — whichever the state calls for. */
  const launch = useCallback(
    (id: string) => {
      const existing = windows.find((w) => w.id === id);
      if (!existing) return open(id, null);
      if (existing.minimized) {
        setZTop((z) => z + 1);
        setWindows((ws) =>
          ws.map((w) =>
            w.id === id ? { ...w, minimized: false, z: zTop + 1 } : w,
          ),
        );
        return;
      }
      focus(id);
    },
    [windows, open, focus, zTop],
  );

  const exit = () => {
    const el = root.current;
    if (!el || reduced) return change();
    // The environment shuts down in the reverse of the order it came up. The
    // timeout is the floor: a dropped frame must never strand the visitor here.
    let left = false;
    const leave = () => {
      if (left) return;
      left = true;
      change();
    };
    window.setTimeout(leave, 700);
    gsap
      .timeline({ onComplete: leave })
      .to(".obj, .win", {
        opacity: 0,
        y: 8,
        duration: 0.25,
        ease: "power2.in",
        stagger: 0.015,
      })
      .to("[data-dk='dock']", { xPercent: -110, duration: 0.3 }, "-=0.1")
      .to("[data-dk='panel']", { yPercent: -100, duration: 0.3 }, "<");
  };

  const running = useMemo(
    () => new Set(windows.filter((w) => !w.minimized).map((w) => w.id)),
    [windows],
  );
  const present = useMemo(() => new Set(windows.map((w) => w.id)), [windows]);

  /* What the monitor reports: the windows that exist, plus the case file if it
     is up. Ordered most-recently-raised first. */
  const processes = useMemo(() => {
    const list = windows
      .slice()
      .sort((a, b) => b.z - a.z)
      .map((w) => ({ id: w.id, title: w.title, minimized: w.minimized }));
    return list;
  }, [windows]);

  return (
    <div
      ref={root}
      className={cn("dk", compact && "is-compact")}
      data-booted="false"
    >
      {/* The environment's own document title.

          Choosing DESKTOP marks the editorial world inert and aria-hidden,
          and the site's only h1 lives inside it — so this world had no
          top-level heading at all and its outline began at h3. Visually there
          is nothing to add: the panel already says whose workstation this is.
          A screen reader needed telling. */}
      <h1 className="sr-only">
        Het Patel — workstation. An alternative way through the same portfolio.
      </h1>

      {/* ---------------- system panel ---------------- */}
      <header className="dk__panel" data-dk="panel">
        <span className="dk__panel-mark">
          <span className="dk__dot" aria-hidden="true" />
          hetp@workstation
        </span>

        <span className="dk__panel-clock" aria-live="off">
          {clock}
        </span>

        <span className="dk__panel-right">
          <span className="dk__panel-stat">ws 01</span>
          <span className="dk__panel-stat">
            proc {String(processes.length).padStart(2, "0")}
          </span>
          <span className="dk__panel-status">
            <i className="dk__pulse" aria-hidden="true" />
            System online
          </span>
          <button
            type="button"
            className="dk__panel-btn"
            onClick={exit}
            data-cursor="link"
          >
            Exit desktop
          </button>
          <button
            type="button"
            className="dk__panel-btn is-accent"
            onClick={change}
            data-cursor="link"
          >
            Change experience
          </button>
        </span>
      </header>

      <div className="dk__shell">
        {/* ---------------- launcher ---------------- */}
        <nav className="dk__dock" data-dk="dock" aria-label="Launcher">
          {dock.map((id) => {
            const n = byId.get(id)!;
            const isOpen = present.has(id);
            const isLive = running.has(id);
            return (
              <button
                key={id}
                type="button"
                className="dock__item"
                onClick={() => launch(id)}
                data-open={isOpen}
                data-live={isLive}
                aria-label={`${n.name}${isOpen ? " — open" : ""}`}
                data-cursor="link"
              >
                <span className="dock__run" aria-hidden="true" />
                <FileIcon kind={n.kind} className="dock__icon" />
                <span className="dock__tip" aria-hidden="true">
                  {n.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ---------------- workspace ---------------- */}
        <main className="dk__workspace" aria-label="Workspace">
          <span className="dk__grid" aria-hidden="true" />

          {/* Three columns by tier: what gets opened sits nearest the
              launcher, reference material sits furthest from it. */}
          <div className="dk__icons" role="list" aria-label="Home">
            {/* `role="presentation"`: the tier wrappers are layout, and an
                ARIA list does not own listitems through a generic element in
                between — the three columns were breaking the relationship
                between the list and every icon in it. */}
            {TIERS.map((tier) => (
              <div
                className="dk__tier"
                role="presentation"
                key={tier}
                data-tier={tier}
              >
                {nodes
                  .filter((n) => n.tier === tier)
                  .map((n) => (
                    <DesktopIcon
                      key={n.id}
                      node={n}
                      meta={metaFor(n.id)}
                      onOpen={open}
                      compact={compact}
                    />
                  ))}
              </div>
            ))}
          </div>

          {/* A system monitor that only reports things that are actually true:
              the workspace, how long this session has been up, and the windows
              currently open. No invented network or threat state. */}
          <aside className="dk__monitor" aria-label="System status">
            <p className="dk__monitor-head">
              <i aria-hidden="true" />
              workspace 01
            </p>
            <dl>
              <div>
                <dt>session</dt>
                <dd>{uptime}</dd>
              </div>
              <div>
                <dt>processes</dt>
                <dd>{String(processes.length).padStart(2, "0")}</dd>
              </div>
            </dl>
            {processes.length ? (
              <ul className="dk__monitor-procs">
                {processes.map((p) => (
                  <li key={p.id}>
                    <span
                      className="dk__monitor-state"
                      data-min={p.minimized}
                      aria-hidden="true"
                    />
                    {p.title}
                    <em>{p.minimized ? "bg" : "fg"}</em>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="dk__monitor-idle">no windows open</p>
            )}
          </aside>

          <p className="dk__hint" aria-hidden="true">
            ~/ · double-click or press Enter to open
          </p>

          {windows.map((w) => (
            <SystemWindow
              key={w.id}
              win={w}
              onClose={close}
              onFocus={focus}
              onMinimize={minimize}
              onToggleMax={toggleMax}
              compact={compact}
            >
              <WindowContents id={w.id} />
            </SystemWindow>
          ))}
        </main>
      </div>

    </div>
  );
}
