import { profile } from "@/data/profile";

/**
 * RFC 9116 security.txt. Served at /security.txt and /.well-known/security.txt
 * (see next.config.mjs for the rewrite). Contact is the real address from the
 * profile data — nothing here is invented.
 */
export const dynamic = "force-static";

export async function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);

  const body = [
    `Contact: mailto:${profile.email}`,
    `Expires: ${expires.toISOString().replace(/\.\d+Z$/, "Z")}`,
    "Preferred-Languages: en",
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
