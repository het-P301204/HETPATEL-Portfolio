"use client";

import { useEffect, useRef, useState } from "react";
import Section, { SectionLabel } from "@/components/primitives/Section";
import AnimatedText from "@/components/primitives/AnimatedText";
import MagneticElement from "@/components/primitives/MagneticElement";
import CopyEmail from "@/components/sections/CopyEmail";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

/**
 * The terminal point of the journey. No form, no card — the two words that
 * matter at the size they deserve, and three channels you can actually act on.
 *
 * A channel is a surface, not a row: pointing at one raises it, brings its
 * address forward and starts the signal running along its rule. The signal is
 * the only ambient motion on the page and it stops when nothing is being
 * pointed at, so the section is still at rest.
 *
 * GitHub stays in the list whether or not there is a URL. Hiding it would be a
 * quieter kind of dishonesty than saying there isn't one — and the moment
 * `githubUrl` is filled in, the same row becomes a working link.
 */

type Channel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  /** Rendered instead of a link when there is nothing to link to. */
  unavailable?: string;
  cursorLabel: string;
};

export default function Contact() {
  const reduced = useReducedMotion();
  const [live, setLive] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);

  /* The signal only runs while a channel is being pointed at. */
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    el.dataset.signal = live && !reduced ? "on" : "off";
  }, [live, reduced]);

  const channels: Channel[] = [
    {
      id: "email",
      label: "EMAIL",
      value: profile.email,
      href: `mailto:${profile.email}`,
      cursorLabel: "MAIL",
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: profile.linkedinHandle,
      href: profile.linkedinUrl,
      external: true,
      cursorLabel: "NETWORK",
    },
    {
      id: "github",
      label: "GITHUB",
      value: profile.githubUrl ? "VIEW SECURITY WORK" : "NOT LINKED",
      href: profile.githubUrl || undefined,
      external: true,
      unavailable: profile.githubUrl
        ? undefined
        : "NO REPOSITORY IS LINKED FROM THE SOURCE THIS SITE WAS BUILT FROM. NOTHING IS CLAIMED IN ITS PLACE.",
      cursorLabel: "CODE",
    },
    /**
     * Practice profiles. Both follow the same contract as the GitHub row above:
     * present only when the URL is set, so an empty field removes the row
     * rather than rendering a dead one. Neither carries a count in its label —
     * the streak and the badge total live on the profiles themselves, where
     * they are current by definition and cannot go stale here.
     */
    ...(profile.tryHackMeUrl
      ? [
          {
            id: "tryhackme",
            label: "TRYHACKME",
            value: profile.tryHackMeHandle,
            href: profile.tryHackMeUrl,
            external: true,
            cursorLabel: "PRACTICE",
          } satisfies Channel,
        ]
      : []),
    ...(profile.credlyUrl
      ? [
          {
            id: "credly",
            label: "CREDLY",
            value: "VERIFY BADGES",
            href: profile.credlyUrl,
            external: true,
            cursorLabel: "VERIFY",
          } satisfies Channel,
        ]
      : []),
  ];

  return (
    <Section id="contact" className="contact">
      <SectionLabel
        marker="contact"
        label="CONTACT"
        note="OPEN TO JUNIOR ROLES"
      />

      {/* Two short lines, and the second one shorter than the first so the
          offset indent has somewhere to go. The size is `clamp(2.9rem, 14vw,
          12rem)`, which only works because neither line is long: a replacement
          phrased as "TELL ME WHAT / YOU'RE BUILDING." was tried here and broke
          to four lines and off the right edge at the same viewport. Anything
          set here has to be about this short. */}
      <h2 className="contact__title t-display" aria-label="Let's talk security">
        <AnimatedText text="LET'S TALK" as="span" className="contact__line" />
        <AnimatedText
          text="SECURITY."
          as="span"
          className="contact__line contact__line--offset"
          delay={0.08}
        />
      </h2>

      <div className="contact__channels" ref={root} data-signal="off">
        {channels.map((c) => {
          const open = live === c.id;
          const enter = () => setLive(c.id);
          const leave = () => setLive((v) => (v === c.id ? null : v));

          return (
            <div
              key={c.id}
              className={cn(
                "channel",
                open && "is-live",
                !c.href && "is-unavailable",
              )}
              onPointerEnter={enter}
              onPointerLeave={leave}
              onFocus={enter}
              onBlur={leave}
            >
              <span className="channel__rule" aria-hidden="true">
                <i className="channel__pulse" />
              </span>

              <span className="t-mono text-grey-soft channel__label">
                {c.label}
              </span>

              {c.href ? (
                <MagneticElement strength={0.14}>
                  <a
                    href={c.href}
                    className="link channel__value"
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer noopener" : undefined}
                    data-cursor="inspect"
                    data-cursor-label={c.cursorLabel}
                  >
                    {c.value}
                    {c.external ? <i aria-hidden="true"> ↗</i> : null}
                  </a>
                </MagneticElement>
              ) : (
                <span className="channel__value channel__value--none">
                  {c.value}
                </span>
              )}

              {c.id === "email" ? <CopyEmail /> : null}

              {c.unavailable ? (
                <p className="channel__note t-mono-sm">{c.unavailable}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
