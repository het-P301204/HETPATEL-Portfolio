import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Het Patel — Cybersecurity",
    short_name: "Het Patel",
    description:
      "Het Patel — Cybersecurity Analyst focused on VAPT, security engineering, risk and compliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4f1",
    theme_color: "#f5f4f1",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
