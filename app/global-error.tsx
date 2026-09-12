"use client";

import { useEffect } from "react";

/**
 * The last boundary. This one replaces the root layout, which means the
 * layout's own font loading, theme script and stylesheet are all gone by the
 * time it renders — so it ships its own `html` and `body` and styles itself
 * inline. Anything that reached for a class here would render unstyled.
 *
 * It defaults to the dark surface because that is what the theme script falls
 * back to when it cannot read a stored preference, and this screen runs in
 * exactly the situation where nothing could be read.
 *
 * Deliberately minimal: no imports beyond React, no data, no fonts. Every
 * dependency this file takes is another thing that can be broken at the moment
 * it is needed.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Fatal error — the root layout failed:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeContent: "center",
          gap: "1.25rem",
          padding: "2rem",
          background: "#0d0d0d",
          color: "#f2f0ec",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          textAlign: "left",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "ui-monospace, 'Cascadia Mono', Consolas, monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            color: "#ff6a1a",
          }}
        >
          FATAL
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 7vw, 4rem)",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            fontWeight: 800,
            maxWidth: "18ch",
          }}
        >
          THE PAGE COULD NOT BE BUILT.
        </h1>

        <p style={{ margin: 0, maxWidth: "58ch", lineHeight: 1.5, opacity: 0.8 }}>
          This is the outermost error boundary, which means the failure happened
          before the site&rsquo;s own layout could render. Reloading is the only
          recovery from here.
        </p>

        {error.digest ? (
          <p
            style={{
              margin: 0,
              fontFamily: "ui-monospace, 'Cascadia Mono', Consolas, monospace",
              fontSize: "0.8rem",
              opacity: 0.6,
            }}
          >
            REFERENCE {error.digest}
          </p>
        ) : null}

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              font: "inherit",
              fontSize: "0.9rem",
              padding: "0.7rem 1.2rem",
              color: "#0d0d0d",
              background: "#f2f0ec",
              border: "1px solid #f2f0ec",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            Reload
          </button>
          <a
            href="/"
            style={{
              font: "inherit",
              fontSize: "0.9rem",
              padding: "0.7rem 1.2rem",
              color: "#f2f0ec",
              border: "1px solid rgba(242,240,236,0.35)",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Back to the site
          </a>
        </div>
      </body>
    </html>
  );
}
