import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

/** The three human-readable pages. Nothing private is listed, because nothing
 *  private is served — a sitemap is a courtesy to crawlers, not a boundary. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: profile.siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${profile.siteUrl}/security`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${profile.siteUrl}/accessibility`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
