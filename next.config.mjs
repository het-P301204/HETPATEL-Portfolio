/**
 * Security headers are built around what this application actually loads.
 *
 * WHAT IT LOADS: nothing third-party. Fonts are pulled at build time by
 * `next/font/google` and self-hosted, so there is no external font origin.
 * There is no analytics, no embed, no image CDN, no API, no telemetry, no
 * cookies and no authentication. The only server route generates a static
 * text file. Every route is prerendered.
 *
 * ── on nonces ──────────────────────────────────────────────────────────────
 * Next's own guidance is that CSP nonces require dynamic rendering. Adopting
 * one would turn eleven prerendered routes into eleven per-request renders for
 * a site that has no per-request state — a real architectural cost for a
 * marginal gain here, so it is deliberately not done. See the note on
 * script-src below for what that leaves, and what compensates for it.
 *
 * ── where these apply ──────────────────────────────────────────────────────
 * `headers()` is served by the Next runtime. If this is ever deployed as
 * plain static files behind a CDN, these must be reproduced in the CDN's own
 * header configuration — they do not travel with the HTML.
 */

/**
 * React's development build uses `eval()` for debugging features — rebuilding
 * call stacks across environments — and says so itself when a CSP blocks it.
 * The production build never does. So the allowance is gated on the build,
 * exactly as Next's own guidance has it, and never ships.
 */
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",

  /* Inline script is permitted, and that is the weakest line here, so it is
     worth being precise about why. Next inlines its own hydration bootstrap
     and streams the RSC payload through inline `self.__next_f.push(...)`
     blocks whose content changes every build, so neither a hash list nor a
     static nonce can cover them. What makes this acceptable rather than
     careless: the site renders no user-supplied input anywhere — no query
     parameters are read, no form is accepted, no comment, no search, no CMS,
     no `dangerouslySetInnerHTML` over anything but two build-time constants.
     There is no reflection point for an attacker to inject into, which is the
     precondition `unsafe-inline` would otherwise hand over. */
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,

  /* Same reasoning: the document carries one inline <style> in <noscript>,
     and React sets custom properties through style attributes throughout. */
  "style-src 'self' 'unsafe-inline'",

  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'none'",
  "object-src 'none'",
  "frame-src 'none'",
  "worker-src 'self' blob:",

  /* No <base> is used, so pin it — this closes base-tag hijacking of every
     relative URL on the page. */
  "base-uri 'none'",

  /* There is no form on this site. Nothing should be able to submit one. */
  "form-action 'none'",

  /* Clickjacking: nothing here is meant to be embedded anywhere. */
  "frame-ancestors 'none'",

  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },

  /* Redundant with frame-ancestors for modern browsers, kept for old ones. */
  { key: "X-Frame-Options", value: "DENY" },

  { key: "X-Content-Type-Options", value: "nosniff" },

  /* Send the origin cross-site, the full path same-origin. Keeps referers
     useful for the site's own navigation without leaking paths outward. */
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  /* Nothing here uses any of these, so all of them are refused outright
     rather than left at the browser default. */
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "usb=()",
      "xr-spatial-tracking=()",
      "interest-cohort=()",
    ].join(", "),
  },

  /* Two years, subdomains included, preload-eligible. Only meaningful once the
     site is actually served over HTTPS on its own domain. */
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  /* Process isolation. Nothing here opens a window it needs to talk to, and
     nothing embeds this site, so both can be fully closed. */
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },

  /* The default `?` DNS-prefetch behaviour leaks nothing here, but the site
     makes no cross-origin requests at all, so there is nothing to prefetch. */
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,

  /* No browser source maps in production: they would publish readable module
     paths and original sources for no user-facing benefit. */
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        /* security.txt is a public, cacheable, machine-read document. It is
           served as plain text and must not be sniffed into anything else. */
        source: "/.well-known/security.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },

  async rewrites() {
    // RFC 9116 puts security.txt under /.well-known; the root path is the
    // legacy location and both should resolve.
    return [
      { source: "/.well-known/security.txt", destination: "/security.txt" },
    ];
  },
};

export default nextConfig;
