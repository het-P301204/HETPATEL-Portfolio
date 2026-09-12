import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Not found",
  description: "That path does not resolve. Here is what this site does have.",
  robots: { index: false, follow: true },
};

/**
 * A 404 on a site with eleven routes is not a mystery to be apologised for —
 * it is a fact the system can state precisely. So it states it, then does the
 * one useful thing a 404 can do: show the whole map, because the whole map
 * fits on the screen.
 *
 * No illustration, no "oops", no search box over three pages. The site's own
 * register throughout is that a claim should be checkable; the same applies to
 * an error.
 */
export default function NotFound() {
  return (
    <main className="doc shell" id="main">
      <p className="t-mono text-grey doc__kicker">STATUS 404</p>
      <h1 className="t-display doc__title">
        THE PATH RESOLVED
        <span>TO NOTHING.</span>
      </h1>

      <p className="doc__para t-body">
        The address you followed does not match any route this site serves. It
        was either mistyped, or it pointed at something that never existed here
        — nothing was removed to make this happen.
      </p>

      <section className="doc__section">
        <h2 className="t-mono doc__h2">EVERYTHING THIS SITE SERVES</h2>
        <ul className="doc__list t-body">
          <li>
            <Link className="link" href="/">
              /
            </Link>{" "}
            — the portfolio. Both worlds, one document.
          </li>
          <li>
            <Link className="link" href="/security">
              /security
            </Link>{" "}
            — how to report a security issue with this site.
          </li>
          <li>
            <Link className="link" href="/accessibility">
              /accessibility
            </Link>{" "}
            — what the site does for accessibility, and what it does not.
          </li>
          <li>
            <a className="link" href="/.well-known/security.txt">
              /.well-known/security.txt
            </a>{" "}
            — the same contact, machine-readable, per RFC 9116.
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
