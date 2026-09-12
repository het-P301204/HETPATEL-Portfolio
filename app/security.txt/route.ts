import { profile } from "@/data/profile";

/**
 * RFC 9116 security.txt. Served at /security.txt and /.well-known/security.txt
 * (see next.config.mjs for the rewrite). Contact is the real address from the
 * profile data — nothing here is invented.
 */
export const dynamic = "force-static";

export async function GET() {
  /* Six months, not twelve.

     The route is `force-static`, so this is frozen at build time. With a
     one-year window a site that is not rebuilt for a year serves an `Expires`
     in the past, and RFC 9116 §2.5.5 makes the file invalid at that point —
     silently, and exactly when someone is trying to use it to report
     something. Six months means a stale file is caught by the next ordinary
     deploy instead of expiring unnoticed. */
  const expires = new Date();
  expires.setUTCMonth(expires.getUTCMonth() + 6);

  const body = [
    `Contact: mailto:${profile.email}`,
    `Expires: ${expires.toISOString().replace(/\.\d+Z$/, "Z")}`,
    "Preferred-Languages: en",
    /* RFC 9116 §3 makes /.well-known/ the canonical location. Both URIs serve
       this file (next.config.mjs rewrites the well-known path to this route),
       so both are listed, well-known first. */
    `Canonical: ${profile.siteUrl}/.well-known/security.txt`,
    `Canonical: ${profile.siteUrl}/security.txt`,
    "",
    "# This is a personal portfolio site. If you find a security issue with it,",
    "# the address above reaches me directly. Please include steps to reproduce.",
    "# No bounty is offered and none is implied.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
