import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "What this site does for accessibility, what it does not yet do, and how to report a problem with it.",
  alternates: { canonical: "/accessibility" },
};

/**
 * An accessibility statement that says what is actually true, including the
 * parts that are not finished. A statement claiming full conformance would be
 * the same kind of unverified assertion this site spends its whole length
 * arguing against.
 */
export default function AccessibilityPage() {
  return (
    <main className="doc shell" id="main">
      <p className="t-mono text-grey doc__kicker">ACCESSIBILITY STATEMENT</p>
      <h1 className="t-display doc__title">
        WHAT THIS SITE
        <span>DOES, AND DOES NOT.</span>
      </h1>

      <section className="doc__section">
        <h2 className="t-mono doc__h2">WHAT IS IN PLACE</h2>
        <ul className="doc__list t-body">
          <li>
            Every interactive control is a real <code>button</code> or{" "}
            <code>a</code>, reachable and operable by keyboard.
          </li>
          <li>
            Visible focus is never removed. Overlays trap focus while open and
            return it to whatever opened them on close.
          </li>
          <li>
            <code>prefers-reduced-motion</code> is honoured throughout. The
            preloader, the theme transition, the scroll-driven sequences and the
            custom cursor all stand down, and every section resolves to its
            finished state.
          </li>
          <li>
            No information is carried by hover alone. Anything a pointer can
            reveal is also in the document for a screen reader, or reachable by
            focus.
          </li>
          <li>
            Body and label colours are chosen to clear 4.5:1 against their own
            surface in both themes, including the 10–11px mono labels.
          </li>
          <li>
            Both themes are available manually and the site follows the system
            setting until a choice is made.
          </li>
          <li>
            Colour is never the only signal. Certification status, confidential
            work and undated years are all stated in words as well.
          </li>
        </ul>
      </section>

      <section className="doc__section">
        <h2 className="t-mono doc__h2">WHAT IS NOT DONE</h2>
        <ul className="doc__list t-body">
          <li>
            The site has not been audited by anyone other than me, and has not
            been tested end to end with a screen reader in daily use.
          </li>
          <li>
            No formal WCAG conformance level is claimed. Individual criteria have
            been worked to deliberately; the whole has not been certified.
          </li>
          <li>
            The desktop environment is a pointer-first idea. It is keyboard
            operable and every object in it is a labelled button, but the
            editorial route carries the same content in a simpler form and is
            the better experience for assistive technology.
          </li>
        </ul>
      </section>

      <section className="doc__section">
        <h2 className="t-mono doc__h2">REPORTING A PROBLEM</h2>
        <p className="t-body doc__para">
          If something here is unusable for you, tell me and I will fix it.
          Email{" "}
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          . Security issues with the site itself go to the same address —{" "}
          <a className="link" href="/security.txt">
            security.txt
          </a>{" "}
          has the details.
        </p>
      </section>

      <p className="doc__back t-mono">
        <Link className="link" href="/">
          ← BACK TO THE SITE
        </Link>
      </p>
    </main>
  );
}
