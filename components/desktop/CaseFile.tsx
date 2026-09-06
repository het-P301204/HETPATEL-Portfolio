"use client";

import { useMemo, useRef, useState } from "react";
import { useOverlay } from "@/lib/useOverlay";
import {
  disclaimer,
  hypotheses,
  incident,
  method,
  requiredEvidence,
  resolution,
  tables,
  type LogRow,
} from "@/data/case001";
import { cn } from "@/lib/cn";

type Stage = "brief" | "evidence" | "hypothesis" | "resolved";

/**
 * CASE / 001 — a different environment entirely.
 *
 * The desktop is objects and windows; this is evidence and time. The visitor
 * selects the rows they think carry the account, then chooses the account. The
 * check is on the evidence as well as the answer, so being right for the wrong
 * reasons is reported as unsupported — which is the actual lesson.
 *
 * Every log line is synthetic. It says so, permanently, in the header.
 */
export default function CaseFile({ onExit }: { onExit: () => void }) {
  /* It declares itself aria-modal, so it has to behave like one: Escape
     closes, focus is held inside and handed back, and the desk underneath
     does not scroll while the case is open. */
  const root = useRef<HTMLDivElement>(null);
  useOverlay({ open: true, onClose: onExit, owner: "case-file", ref: root });

  const [stage, setStage] = useState<Stage>("brief");
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [choice, setChoice] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<null | {
    ok: boolean;
    title: string;
    body: string;
  }>(null);

  const toggle = (id: string) =>
    setPicked((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  /* the timeline is assembled from whatever has been selected */
  const timeline = useMemo(() => {
    const rows: { row: LogRow; source: string }[] = [];
    tables.forEach((t) =>
      t.rows.forEach((r) => {
        if (picked.has(r.id)) rows.push({ row: r, source: t.label });
      }),
    );
    return rows.sort((a, b) => a.row.time.localeCompare(b.row.time));
  }, [picked]);

  const coverage = useMemo(() => {
    const missing = tables
      .filter((t) => !t.rows.some((r) => r.key && picked.has(r.id)))
      .map((t) => t.label);
    const keyHit = requiredEvidence.filter((id) => picked.has(id)).length;
    return { missing, keyHit, total: requiredEvidence.length };
  }, [picked]);

  const verify = () => {
    const h = hypotheses.find((x) => x.id === choice);
    if (!h) return;

    if (h.verdict !== "supported") {
      setVerdict({
        ok: false,
        title: h.verdict === "partial" ? "PARTLY SUPPORTED" : "NOT SUPPORTED",
        body: h.why,
      });
      return;
    }
    if (coverage.missing.length) {
      setVerdict({
        ok: false,
        title: "UNSUPPORTED — CORRECT, BUT NOT EVIDENCED",
        body: `The account is right. It is not yet carried by what you selected: nothing from ${coverage.missing.join(" or ")}. One source is a claim; three that agree is a finding.`,
      });
      return;
    }
    setVerdict({ ok: true, title: "VERIFIED", body: h.why });
    setStage("resolved");
  };

  return (
    <div
      className="case"
      ref={root}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Case 001 — the anomalous request"
    >
      <div className="case__top shell">
        <span className="t-mono case__code">
          <span className="case__dot" aria-hidden="true" />
          {incident.code}
        </span>
        <span className="t-mono-sm case__warn">{disclaimer}</span>
        <button
          type="button"
          className="t-mono case__close"
          onClick={onExit}
          data-cursor="link"
        >
          CLOSE CASE ✕
        </button>
      </div>

      {stage === "brief" ? (
        <section className="case__brief shell">
          <p className="t-mono text-grey">INCIDENT DETECTED · {incident.detected}</p>
          <h2 className="case__title t-display">{incident.title}</h2>
          <p className="t-lede case__summary">{incident.summary}</p>
          <div className="case__brief-grid">
            <div>
              <p className="t-mono text-grey">OBJECTIVE</p>
              <p className="t-body">{incident.objective}</p>
            </div>
            <div>
              <p className="t-mono text-grey">SCOPE</p>
              <ul className="case__scope">
                {incident.scope.map((s) => (
                  <li key={s} className="t-mono-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="case__cta t-mono"
            onClick={() => setStage("evidence")}
            data-cursor="inspect"
            data-cursor-label="OPEN"
          >
            OPEN THE EVIDENCE →
          </button>
        </section>
      ) : null}

      {stage === "evidence" || stage === "hypothesis" ? (
        <section className="case__work shell">
          <div className="case__evidence">
            <div className="case__instruction">
              <p className="t-mono">
                {stage === "evidence" ? "SELECT THE ROWS THAT CARRY THE ACCOUNT" : "CHOOSE THE ACCOUNT"}
              </p>
              <p className="t-body">
                {stage === "evidence"
                  ? "Three sources. Only some of these lines matter, and the ones that matter have to agree with each other across sources."
                  : "One of these is carried by the evidence you selected. The others are not — or not entirely."}
              </p>
            </div>

            {tables.map((t) => (
              <div className="case__table" key={t.id}>
                <div className="case__table-head">
                  <span className="t-mono">{t.label}</span>
                  <span className="t-mono-sm text-grey">{t.source}</span>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th className="t-mono-sm" scope="col">
                        <span className="sr-only">Selected</span>
                      </th>
                      {t.columns.map((c) => (
                        <th key={c} className="t-mono-sm text-grey-soft" scope="col">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r) => (
                      <tr
                        key={r.id}
                        className={cn(picked.has(r.id) && "is-picked")}
                      >
                        <td>
                          <label className="case__check">
                            <input
                              type="checkbox"
                              checked={picked.has(r.id)}
                              onChange={() => toggle(r.id)}
                              aria-label={`Select ${t.label} entry at ${r.time}`}
                            />
                            <span aria-hidden="true" />
                          </label>
                        </td>
                        <td className="t-mono-sm case__time">{r.time}</td>
                        {r.cells.map((c, i) => (
                          <td key={i} className="t-mono-sm">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}

            {stage === "hypothesis" ? (
              <div className="case__hypotheses">
                {hypotheses.map((h) => (
                  <label
                    key={h.id}
                    className={cn("case__hyp", choice === h.id && "is-chosen")}
                  >
                    <input
                      type="radio"
                      name="hypothesis"
                      checked={choice === h.id}
                      onChange={() => {
                        setChoice(h.id);
                        setVerdict(null);
                      }}
                    />
                    <span className="t-body">{h.text}</span>
                  </label>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="case__aside">
            <div className="case__panel">
              <p className="t-mono text-grey">CORRELATION</p>
              <p className="case__count t-display">
                {coverage.keyHit}
                <span className="text-grey">/{coverage.total}</span>
              </p>
              <p className="t-mono-sm text-grey">
                {coverage.missing.length
                  ? `NOTHING YET FROM ${coverage.missing.join(" · ")}`
                  : "ALL THREE SOURCES REPRESENTED"}
              </p>
            </div>

            <div className="case__panel case__timeline-panel">
              <p className="t-mono text-grey">TIMELINE</p>
              {timeline.length === 0 ? (
                <p className="t-mono-sm text-grey-soft case__empty">
                  SELECT EVIDENCE TO BUILD IT
                </p>
              ) : (
                <ol className="case__timeline">
                  {timeline.map(({ row, source }) => (
                    <li key={row.id}>
                      <span className="case__tl-node" aria-hidden="true" />
                      <span className="t-mono-sm case__tl-time">{row.time}</span>
                      <span className="t-mono-sm text-grey">{source}</span>
                      <span className="t-mono-sm">{row.cells.join(" · ")}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {verdict ? (
              <div
                className={cn("case__verdict", verdict.ok && "is-ok")}
                role="status"
              >
                <p className="t-mono">{verdict.title}</p>
                <p className="t-body">{verdict.body}</p>
              </div>
            ) : null}

            <div className="case__actions">
              {stage === "evidence" ? (
                <button
                  type="button"
                  className="case__cta t-mono"
                  onClick={() => setStage("hypothesis")}
                  disabled={picked.size === 0}
                  data-cursor="link"
                >
                  FORM A HYPOTHESIS →
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="case__cta t-mono"
                    onClick={verify}
                    disabled={!choice}
                    data-cursor="inspect"
                    data-cursor-label="VERIFY"
                  >
                    VERIFY →
                  </button>
                  <button
                    type="button"
                    className="case__back t-mono-sm"
                    onClick={() => setStage("evidence")}
                    data-cursor="link"
                  >
                    ← BACK TO EVIDENCE
                  </button>
                </>
              )}
            </div>
          </aside>
        </section>
      ) : null}

      {stage === "resolved" ? (
        <section className="case__resolved shell">
          <p className="t-mono case__ok">CASE RESOLVED</p>
          <h2 className="case__title t-display">{resolution.verdict}</h2>
          <p className="t-lede case__summary">{verdict?.body}</p>

          <ol className="case__steps">
            {resolution.steps.map((s) => (
              <li key={s.label}>
                <span className="t-mono case__step-label">{s.label}</span>
                <span className="t-body">{s.text}</span>
              </li>
            ))}
          </ol>

          <p className="t-mono text-grey case__limit-label">LIMITATION</p>
          <p className="t-body case__limit">{resolution.limitation}</p>

          <div className="case__method">
            <p className="t-mono">THIS IS HOW I THINK ABOUT SECURITY</p>
            <ol>
              {method.map((m) => (
                <li key={m.n}>
                  <span className="t-mono text-grey-soft">{m.n}</span>
                  <span className="t-display case__method-word">{m.word}</span>
                  <span className="t-body">{m.line}</span>
                </li>
              ))}
            </ol>
          </div>

          <button
            type="button"
            className="case__cta t-mono"
            onClick={onExit}
            data-cursor="link"
          >
            ← RETURN TO THE DESKTOP
          </button>
        </section>
      ) : null}
    </div>
  );
}
