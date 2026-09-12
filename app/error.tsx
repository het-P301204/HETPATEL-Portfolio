"use client";

import Link from "next/link";
import { useEffect } from "react";
import { profile } from "@/data/profile";

/**
 * The route-level error boundary. Every route here is prerendered and the site
 * has no server state, so reaching this screen means something genuinely
 * unexpected happened in the browser — which makes it worth reporting rather
 * than worth apologising for.
 *
 * `digest` is the only handle React gives the user onto the specific failure,
 * so it is shown rather than swallowed. It is an opaque hash, not a stack
 * trace: it leaks nothing about the build and is useless without the server
 * logs, which is exactly why it is safe to print and useful to quote.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // No analytics on this site, so the console is the only sink there is.
    console.error("Unhandled error on this route:", error);
  }, [error]);

  const subject = encodeURIComponent(
    `Site error${error.digest ? ` (${error.digest})` : ""}`,
  );

  return (
    <main className="doc shell" id="main">
      <p className="t-mono text-grey doc__kicker">STATUS 500</p>
      <h1 className="t-display doc__title">
        SOMETHING FAILED
        <span>ON THE WAY HERE.</span>
      </h1>

      <p className="doc__para t-body">
        This page is prerendered and the site holds no server state, so this is
        not a load you can be on the wrong side of — something broke in the
        browser. Retrying re-runs the render without a full reload.
      </p>

      {error.digest ? (
        <p className="doc__para t-mono text-grey">
          REFERENCE <code>{error.digest}</code>
        </p>
      ) : null}

      <section className="doc__section">
        <h2 className="t-mono doc__h2">WHAT YOU CAN DO</h2>
        <ul className="doc__list t-body">
          <li>
            <button className="link" type="button" onClick={reset}>
              Retry this page
            </button>{" "}
            — re-renders in place.
          </li>
          <li>
            <Link className="link" href="/">
              Go back to the start
            </Link>{" "}
            — the site is one page, so nothing is lost.
          </li>
          <li>
            If it happens twice,{" "}
            <a className="link" href={`mailto:${profile.email}?subject=${subject}`}>
              tell me
            </a>
            {error.digest ? " and quote the reference above" : ""}. A repeatable
            failure on a static site is a real bug and I would like to know.
          </li>
        </ul>
      </section>

      <p className="doc__back t-mono">
        <Link className="link" href="/">
          ← BACK TO THE SITE
        </Link>
      </p>
    </main>
  );
}
