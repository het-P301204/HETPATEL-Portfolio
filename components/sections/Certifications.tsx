"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionLabel } from "@/components/primitives/Section";
import IssuerMark from "@/components/primitives/IssuerMark";
import {
  certifications,
  certificationStats,
  type Certification,
} from "@/data/certifications";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

/**
 * CERTIFICATION ARCHIVE.
 *
 * Credentials are filed as evidence artifacts rather than listed as rows: each
 * one is a sheet with an issuer mark, an archive reference, and a verification
 * line that states its own truth. The sheets are laid in two staggered columns
 * so the archive reads as a pile that has been worked through, not a table.
 *
 * Verification is the point of the section, so it is never hidden behind a
 * hover: `credentialUrl` decides, at render, whether an entry shows a working
 * external link or an explicit unavailable state. Filling the field in
 * `data/certifications.ts` is the only change needed to publish one.
 */

function CredentialLine({ cert }: { cert: Certification }) {
  if (cert.credentialUrl) {
    return (
      <a
        className="cert__cred cert__cred--live t-mono-sm"
        href={cert.credentialUrl}
        target="_blank"
        rel="noreferrer noopener"
        data-cursor="link"
      >
        VIEW CREDENTIAL <i aria-hidden="true">↗</i>
        <span className="sr-only"> — opens {cert.provider} in a new tab</span>
      </a>
    );
  }
  return (
    <span className="cert__cred cert__cred--none t-mono-sm">
      <i className="cert__cred-slash" aria-hidden="true" />
      CREDENTIAL LINK UNAVAILABLE
    </span>
  );
}

export default function Certifications() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el || reduced) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Each entry is written into the register as it is reached — a short
      // rise, nothing else. The old version tilted each one a fraction of a
      // degree, which is what made nine of them read as a deck of cards.
      gsap.utils.toArray<HTMLElement>(".cert__sheet").forEach((sheet) => {
        gsap.fromTo(
          sheet,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "expo.out",
            scrollTrigger: { trigger: sheet, start: "top 92%", once: true },
          },
        );
      });

      // The archive rule draws itself across the section as it is read.
      gsap.fromTo(
        "[data-cert-spine]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.4,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  const { total, pending, linked } = certificationStats;

  return (
    <Section id="certifications" className="cert">
      <SectionLabel
        marker="certifications"
        label="CERTIFICATION ARCHIVE"
        note={`${total} ARTIFACTS · ${pending} IN PROGRESS · ${linked} VERIFIABLE`}
      />

      <div className="cert__archive" ref={root}>
        <span className="cert__spine" data-cert-spine aria-hidden="true" />

        <ul className="cert__sheets">
          {certifications.map((c, i) => {
            const pendingEntry = c.status === "IN PROGRESS";
            return (
              <li
                key={c.name}
                className={cn(
                  "cert__sheet",
                  pendingEntry && "is-pending",
                  c.credentialUrl && "is-linked",
                )}
                data-cursor="analyze"
                data-cursor-label={pendingEntry ? "PENDING" : "ISSUED"}
              >
                <span className="cert__stamp" aria-hidden="true">
                  <IssuerMark logo={c.logo} className="cert__mark" />
                </span>

                <span className="cert__ref t-mono-sm" aria-hidden="true">
                  CERT / {String(i + 1).padStart(3, "0")}
                </span>

                <h3 className="cert__name">
                  {c.nameLines.map((l) => (
                    <span key={l} className="t-display cert__line">
                      {l}
                    </span>
                  ))}
                </h3>

                <p className="cert__provider t-mono">{c.provider}</p>

                <dl className="cert__facts">
                  <div>
                    <dt className="t-mono-sm text-grey-soft">TYPE</dt>
                    <dd className="t-mono-sm">{c.category}</dd>
                  </div>
                  {c.ref ? (
                    <div>
                      <dt className="t-mono-sm text-grey-soft">REF</dt>
                      <dd className="t-mono-sm">{c.ref}</dd>
                    </div>
                  ) : null}
                  {c.year ? (
                    <div>
                      <dt className="t-mono-sm text-grey-soft">YEAR</dt>
                      <dd className="t-mono-sm">{c.year}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="t-mono-sm text-grey-soft">STATUS</dt>
                    <dd className="t-mono-sm cert__status">
                      <i className="cert__status-dot" aria-hidden="true" />
                      {c.status}
                    </dd>
                  </div>
                </dl>

                {c.note ? (
                  <p className="cert__note t-mono-sm">{c.note}</p>
                ) : null}

                <CredentialLine cert={c} />
              </li>
            );
          })}
        </ul>
      </div>

      {linked === 0 ? (
        <p className="cert__archive-note t-mono-sm text-grey">
          NO CREDENTIAL URLS HAVE BEEN SUPPLIED FOR THIS ARCHIVE YET. EACH ENTRY
          STATES ITS OWN VERIFICATION STATUS RATHER THAN LINKING SOMEWHERE THAT
          DOES NOT RESOLVE.
        </p>
      ) : null}
    </Section>
  );
}
