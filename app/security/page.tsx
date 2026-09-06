import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import SecurityDoc from "@/components/sections/SecurityDoc";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Responsible disclosure for this site: how to report a security issue, where the machine-readable security.txt lives, and what to expect back.",
  alternates: { canonical: "/security" },
};

/**
 * The human-facing half of RFC 9116.
 *
 * `/security.txt` and `/.well-known/security.txt` stay exactly what they are —
 * raw, machine-readable, unchanged. This page is for the person who followed
 * one of them and wants to know what happens next. Everything on it is read
 * from the same `profile` data the raw file is generated from, so the two can
 * never disagree, and nothing is claimed that the policy does not contain:
 * there is no bounty, no SLA and no PGP key, so none is advertised.
 */
export default function SecurityPage() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);

  return (
    <main className="doc sec-doc shell" id="main">
      <SecurityDoc
        email={profile.email}
        expires={expires.toISOString().slice(0, 10)}
      />

      <p className="doc__back t-mono">
        <Link className="link" href="/">
          ← BACK TO THE SITE
        </Link>
      </p>
    </main>
  );
}
