"use client";

import { useCallback, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionLabel } from "@/components/primitives/Section";
import ScrollReveal from "@/components/primitives/ScrollReveal";
import ProjectMotif from "@/components/viz/ProjectMotif";
import WorkReel from "@/components/sections/WorkReel";
import { projects, projectsByGroup, type Project } from "@/data/projects";
import { directions } from "@/data/lab";
import { useIsomorphicLayoutEffect, useReducedMotion } from "@/lib/hooks";
import { useOverlay } from "@/lib/useOverlay";
import { cn } from "@/lib/cn";

/**
 * PROJECTS — the security case archive.
 *
 * Not a card grid and not one long list: the archive is stratified, because
 * different kinds of claim are being made and they are not equally strong.
 * Work built alone and work done in a lab are separated in the structure
 * itself, so a reviewer can weigh them without reading a word of body copy.
 * Engagement work is not here at all — it lives once, in WORK — and
 * competition credentials live once, in the certification archive.
 *
 * Each stratum lays its cases asymmetrically — the archive reads as a pile that
 * has been worked through rather than a table that was generated. Opening a
 * case replaces the page with the record: problem, approach, tools, outcome,
 * status, and the limitation that bounds all four.
 */

function CaseRecord({
  record,
  onClose,
  onStep,
}: {
  record: Project;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  const panel = useRef<HTMLDivElement>(null);
  useOverlay({ open: true, onClose, owner: "case-record", ref: panel });

  return (
    <div
      className="record is-open"
      role="dialog"
      aria-modal="true"
      aria-label={`${record.title} — case record`}
    >
      <div className="record__inner shell" ref={panel} tabIndex={-1}>
        <header className="record__head">
          <span className="t-mono text-grey">
            CASE / {record.number} — {record.status}
          </span>
          <button
            type="button"
            className="record__close t-mono"
            onClick={onClose}
            data-cursor="link"
          >
            CLOSE ✕
          </button>
        </header>

        <div className="record__title-row">
          <span className="record__n t-display">{record.number}</span>
          <h3 className="record__title t-display">
            {record.titleLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h3>
        </div>

        {record.confidential ? (
          <p className="record__seal t-mono-sm">
            <i aria-hidden="true" />
            CLIENT ENGAGEMENT · SCOPE, FINDINGS AND EVIDENCE WITHHELD
          </p>
        ) : null}

        <div className="record__grid">
          <div className="record__col">
            <p className="t-mono text-grey">PROBLEM</p>
            <p className="t-body record__para">{record.problem}</p>

            <p className="t-mono text-grey record__label">APPROACH</p>
            <ol className="record__approach">
              {record.approach.map((step, si) => (
                <li key={step}>
                  <span className="t-mono text-grey-soft">
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <span className="t-body">{step}</span>
                </li>
              ))}
            </ol>

            <p className="t-mono text-grey record__label">OUTCOME</p>
            <p className="t-body record__para">{record.outcome}</p>
          </div>

          <div className="record__col">
            <ProjectMotif
              motif={record.motif}
              caption={record.motifCaption}
              className="record__motif"
            />
            <dl className="record__meta">
              <div>
                <dt className="t-mono text-grey-soft">DOMAIN</dt>
                <dd className="t-mono">{record.domain}</dd>
              </div>
              <div>
                <dt className="t-mono text-grey-soft">STATUS</dt>
                <dd className="t-mono">{record.status}</dd>
              </div>
              <div>
                <dt className="t-mono text-grey-soft">TOOLS</dt>
                <dd className="t-mono">{record.tools.join(" · ")}</dd>
              </div>
              <div>
                <dt className="t-mono text-grey-soft">SOURCE</dt>
                <dd className="t-mono">
                  {record.repoUrl ? (
                    <a
                      className="link"
                      href={record.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-cursor="link"
                    >
                      VIEW REPOSITORY ↗
                    </a>
                  ) : (
                    <span className="record__unavailable">
                      NOT PUBLISHED
                    </span>
                  )}
                </dd>
              </div>
            </dl>

            <div className="record__limits">
              <p className="t-mono">LIMITATIONS</p>
              <p className="t-body record__para">{record.limitations}</p>
            </div>
          </div>
        </div>

        <nav className="record__nav t-mono" aria-label="Other cases">
          <button type="button" onClick={() => onStep(-1)} data-cursor="link">
            ← PREVIOUS CASE
          </button>
          <button type="button" onClick={() => onStep(1)} data-cursor="link">
            NEXT CASE →
          </button>
        </nav>
      </div>
    </div>
  );
}

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((delta: number) => {
    setOpen((current) => {
      const i = projects.findIndex((p) => p.id === current);
      if (i < 0) return current;
      return projects[(i + delta + projects.length) % projects.length].id;
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el || reduced) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Each stratum's rule draws across as the stratum is reached: the archive
      // opening a drawer, rather than content fading in.
      gsap.utils.toArray<HTMLElement>("[data-stratum-rule]").forEach((rule) => {
        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: { trigger: rule, start: "top 88%", once: true },
          },
        );
      });

      // Cases settle into the stratum from the side they are indented toward.
      gsap.utils.toArray<HTMLElement>(".dossier").forEach((c, i) => {
        gsap.fromTo(
          c,
          { y: 30, opacity: 0, x: i % 2 === 0 ? -12 : 12 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "expo.out",
            scrollTrigger: { trigger: c, start: "top 90%", once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  const record = projects.find((p) => p.id === open) ?? null;

  /* Featured cases drive the pinned reel. The fallback is not defensive
     decoration: `featured` is an optional field, so a future edit that clears
     every flag would otherwise pin an empty stage for one screen. */
  const featured = projects.filter((p) => p.featured);
  const reelItems = featured.length > 0 ? featured : projects.slice(0, 5);

  return (
    <Section id="projects" className="cases">
      <div ref={root as never}>
        <SectionLabel
          marker="projects"
          label="PROJECTS"
          note={`SECURITY CASE ARCHIVE · ${projects.length} CASES · ${projectsByGroup.length} STRATA`}
        />

        {/* The reel is the moment; the strata below are the record. Same
            action — one is scrolled through, one is read.

            The reel is pinned and costs one screen of scroll per case, so it
            carries the featured selection rather than the whole archive: at
            full length it would be sixteen screens of held scroll before the
            record even begins. The strata below lose nothing — every case is
            there, and the archive is the place to read them all. If nothing is
            marked featured the reel falls back to the first five, so the
            section can never render empty. */}
        <WorkReel items={reelItems} onOpen={setOpen} />

        {/* Professional engagement work is described once, in WORK. Pointed at
            rather than restated. */}
        {/* Everything that lives elsewhere is pointed at, never restated. */}
        <p className="cases__crossref t-mono-sm text-grey">
          ENGAGEMENT WORK IS IN{" "}
          <a href="#work" className="link" data-cursor="link">
            WORK ↑
          </a>
          . COMPETITION AND GUIDED-LAB CREDENTIALS ARE IN{" "}
          <a href="#certifications" className="link" data-cursor="link">
            THE CERTIFICATION ARCHIVE ↓
          </a>
          .
        </p>

        {projectsByGroup.map((group, gi) => (
          <div className="stratum" key={group.id} data-group={group.id}>
            <header className="stratum__head">
              <span className="stratum__rule" data-stratum-rule aria-hidden="true" />
              <h3 className="stratum__label t-display">{group.label}</h3>
              <p className="t-mono-sm text-grey stratum__note">{group.note}</p>
              <p className="t-mono-sm text-grey-soft stratum__count">
                {String(group.items.length).padStart(2, "0")}
              </p>
            </header>

            <ul className="stratum__cases">
              {group.items.map((p, i) => (
                <li
                  key={p.id}
                  className={cn(
                    "dossier",
                    p.featured && "is-featured",
                    p.confidential && "is-sealed",
                  )}
                  /* Alternating indent per stratum, offset by the stratum's own
                     index — the archive never falls into a repeating rhythm. */
                  data-lane={(i + gi) % 3}
                >
                  <button
                    type="button"
                    className="dossier__open"
                    onClick={() => setOpen(p.id)}
                    data-cursor="inspect"
                    data-cursor-label="OPEN CASE"
                    data-cursor-index={p.number}
                  >
                    <span className="dossier__n t-mono-sm">{p.number}</span>
                    <span className="dossier__title t-display">
                      {p.titleLines.map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </span>
                    <span className="dossier__meta t-mono-sm">
                      <span>{p.domain}</span>
                      <span className="dossier__status">{p.status}</span>
                      {/* Half this archive is now backed by a public
                          repository and half is not, and that difference is
                          the strongest thing the list can tell a reader. It
                          was only visible after opening a case, so it is
                          stated on the row. The URL itself stays inside the
                          record — this marks that evidence exists. */}
                      {p.repoUrl ? (
                        <span className="dossier__code">SOURCE AVAILABLE</span>
                      ) : null}
                    </span>
                    <span className="dossier__problem t-body">{p.problem}</span>
                    <span className="dossier__cta t-mono-sm">
                      OPEN CASE <i aria-hidden="true">→</i>
                    </span>
                  </button>

                  <span className="dossier__figure" aria-hidden="true">
                    <ProjectMotif motif={p.motif} caption={p.motifCaption} />
                  </span>

                  {p.confidential ? (
                    <span className="dossier__seal t-mono-sm" aria-hidden="true">
                      SEALED
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            {/* Research directions belong to the lab stratum and nowhere else:
                they are intent, and they are labelled as intent. */}
            {group.id === "lab" ? (
              <div className="stratum__directions">
                <div className="stratum__directions-head">
                  <p className="t-mono">RESEARCH DIRECTIONS</p>
                  <p className="t-mono-sm text-grey">
                    NOT STARTED · LISTED AS INTENT, NOT AS WORK
                  </p>
                </div>
                <ul>
                  {directions.map((d, i) => (
                    <ScrollReveal
                      as="li"
                      key={d.number}
                      delay={i * 0.03}
                      className="dir"
                    >
                      {/* Prefixed REF. These are catalogue ids carried over from the
                          strategy document, not a sequence: read bare and in
                          priority order they run 099, 100, 101, 016, 098 —
                          which looks like a numbering bug rather than a
                          reference. The order is deliberate (selected first),
                          so the label is what had to change. */}
                      <span className="t-mono-sm dir__n">REF {d.number}</span>
                      <span className="dir__body">
                        <span className="dir__title t-mono">{d.title}</span>
                        <span className="t-body dir__premise">{d.premise}</span>
                      </span>
                      <span className="dir__tags">
                        <span className="t-mono-sm dir__state" data-state={d.state}>
                          {d.state === "SELECTED" ? "SELECTED · NEXT" : "CONSIDERED"}
                        </span>
                        <span className="t-mono-sm text-grey">{d.domain}</span>
                      </span>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {record ? (
        <CaseRecord record={record} onClose={close} onStep={step} />
      ) : null}
    </Section>
  );
}
