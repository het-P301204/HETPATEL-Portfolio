"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedText from "@/components/primitives/AnimatedText";
import { cn } from "@/lib/cn";

/**
 * SECURITY — responsible disclosure, as a document rather than a landing page.
 *
 * A report form would be the obvious move and the wrong one: there is no
 * triage system behind it, so it would imply a process that does not exist.
 * What exists is an address and an expectation, so that is what this states.
 *
 * The page is short enough that it never scrolls, so nothing here is revealed
 * on scroll — a viewport-entry reveal on a page that never moves is a reveal
 * that may never fire. The document assembles once on load instead: rule,
 * then the record rows in sequence, and then it stops. Nothing loops or glows.
 */
export default function SecurityDoc({
  email,
  expires,
}: {
  email: string;
  expires: string;
}) {
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    // A beat, so the entrance has a state to transition from.
    const t = window.setTimeout(() => setReady(true), 40);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is on screen and the mail link
      // beside this works, so there is nothing to recover from.
    }
  };

  /* Only what the policy actually contains. No bounty, no SLA, no PGP key —
     none is offered, so none is advertised. */
  const record = [
    { k: "POLICY", v: "RFC 9116", note: "security.txt" },
    { k: "CONTACT", v: email, note: "direct to me", mail: true },
    { k: "PREFERRED LANGUAGES", v: "English", note: "en" },
    { k: "EXPIRES", v: expires, note: "regenerated on request" },
    { k: "BOUNTY", v: "None offered", note: "and none implied" },
  ];

  return (
    <div className={cn("sec", ready && "is-ready")}>
      <p className="t-mono text-grey doc__kicker">RESPONSIBLE DISCLOSURE</p>
      <h1 className="t-display doc__title sec__title">
        <AnimatedText text="SECURITY" />
      </h1>

      <p className="t-lede sec__lede">
        If you have found a security issue with this site, send it to the
        address below. Include what you did and what happened — steps I can
        follow are worth more than a scanner name. I will confirm that I have
        read it, and I will tell you when it is fixed.
      </p>

      {/* --- the record ---------------------------------------------------- */}
      <section className="sec__record" aria-label="Disclosure policy">
        <span className="sec__record-rule" aria-hidden="true" />
        <dl>
          {record.map((r, i) => (
            <div
              key={r.k}
              className="sec__row"
              style={{ "--i": i } as React.CSSProperties}
            >
              <dt className="t-mono-sm">{r.k}</dt>
              <dd className="t-mono">
                {r.mail ? (
                  <a
                    className="link"
                    href={`mailto:${email}`}
                    data-cursor="link"
                  >
                    {r.v}
                  </a>
                ) : (
                  r.v
                )}
              </dd>
              <dd className="t-mono-sm sec__row-note">{r.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* --- actions ------------------------------------------------------- */}
      <div className="sec__actions">
        <a
          className="sec__cta sec__cta--primary t-mono"
          href={`mailto:${email}?subject=${encodeURIComponent(
            "Security report — hetpatel.dev",
          )}`}
          data-cursor="inspect"
          data-cursor-label="REPORT"
        >
          REPORT A VULNERABILITY <i aria-hidden="true">→</i>
        </a>

        <button
          type="button"
          className={cn("sec__cta t-mono", copied && "is-done")}
          onClick={copy}
          data-cursor="link"
        >
          <span aria-hidden="true">{copied ? "COPIED ✓" : "COPY EMAIL"}</span>
          <span className="sr-only">
            {copied ? "Email address copied" : "Copy email address"}
          </span>
        </button>

        <a className="sec__cta t-mono" href="/security.txt" data-cursor="link">
          VIEW RAW SECURITY.TXT <i aria-hidden="true">↗</i>
        </a>
      </div>

      <p className="t-mono-sm sec__foot">
        THE MACHINE-READABLE POLICY IS SERVED AT{" "}
        <a className="link" href="/security.txt">
          /security.txt
        </a>{" "}
        AND{" "}
        <a className="link" href="/.well-known/security.txt">
          /.well-known/security.txt
        </a>
        . THIS PAGE IS THE SAME POLICY, WRITTEN FOR A PERSON.
      </p>
    </div>
  );
}
