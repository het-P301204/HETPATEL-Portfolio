import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
// Order matters: tokens and primitives first, then the sections that use them.
import "./globals.css";
import "../styles/hero.css";
import "../styles/manifesto.css";
import "../styles/cases.css";
import "../styles/practice.css";
import "../styles/stack.css";
import "../styles/selector.css";
import "../styles/desktop.css";
import "../styles/sections.css";

/* No `axes: ["wdth"]`. Requesting the width axis materially enlarges the
   variable font on the critical path, and the only thing that ever referenced
   it asked for `"wdth" 100` — the default. The site paid for an axis it never
   moved. */
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

/**
 * JSON.stringify does not escape `<`, so a value containing `</script>` would
 * end the block early and everything after it would be parsed as markup. Every
 * value here is a build-time constant from `data/profile.ts`, so this is not
 * reachable today — it is closed by construction so that it cannot become
 * reachable by someone later adding a field that is not.
 */
const jsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const title = "HET PATEL — CYBERSECURITY";
const description =
  "Het Patel — Cybersecurity Analyst focused on VAPT, security engineering, risk and compliance.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: "%s — HET PATEL",
  },
  description,
  applicationName: "Het Patel",
  authors: [{ name: profile.name }],
  keywords: [
    "Het Patel",
    "cybersecurity",
    "VAPT",
    "vulnerability assessment",
    "web application security",
    "risk and compliance",
    "ISO 27001",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: profile.siteUrl,
    siteName: "Het Patel",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
};

/* Dark is the default, so the browser is told that before it paints — a
   `light dark` color-scheme lets the UA paint a white canvas for a split
   second on a light desktop, which is the flash this avoids. */
export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applied before first paint, so the theme never flashes. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {/* Without scripting there is no sequence to run, so the shutter and
            every masked reveal must resolve to their finished state. */}
        <noscript>
          <style>{`.preloader{display:none!important}
            .mask > *{transform:none!important}
            .fade-up{opacity:1!important;transform:none!important}
            .nav{opacity:1!important;transform:none!important}
            .rule-draw::after{transform:scaleX(1)!important}`}</style>
        </noscript>
        <ThemeProvider>{children}</ThemeProvider>

        {/* Structured data, kept to what the résumé actually supports. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              email: `mailto:${profile.email}`,
              url: profile.siteUrl,
              sameAs: [profile.linkedinUrl, profile.githubUrl].filter(Boolean),
              /* No postal address: location is excluded from this site's
                 metadata as well as its copy. */
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "C.K. Pithawala College of Engineering and Technology",
              },
              knowsAbout: [
                "Vulnerability assessment and penetration testing",
                "Web application security",
                "Network security",
                "ISO 27001",
                "Security documentation and reporting",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
