import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Het Patel — Cybersecurity",
    short_name: "Het Patel",
    description:
      "Het Patel — Cybersecurity Analyst focused on VAPT, security engineering, risk and compliance.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    /* Dark, because dark is what the site actually opens in — layout.tsx sets
       `themeColor: "#0d0d0d"` and the pre-paint script defaults to dark. These
       were both the light paper colour, so an installed window and the browser
       chrome disagreed with the page they framed. */
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
