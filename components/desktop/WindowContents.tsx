"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { projects, projectsByGroup } from "@/data/projects";
import { practice, stack } from "@/data/skills";
import { certifications, certificationStats } from "@/data/certifications";
import { experience } from "@/data/experience";
import { coursework, education, journey } from "@/data/education";
import { directions, entries } from "@/data/lab";
import ProjectMotif from "@/components/viz/ProjectMotif";
import IssuerMark from "@/components/primitives/IssuerMark";
import Terminal from "@/components/desktop/Terminal";
import { cn } from "@/lib/cn";

/** Everything below reads the same data files the editorial site reads. */
export default function WindowContents({ id }: { id: string }) {
  switch (id) {
    case "security-lab":
      return <SecurityLab />;
    case "project-files":
      return <ProjectFiles />;
    case "certification-archive":
      return <CertificationArchive />;
    case "field-notes":
      return <FieldNotes />;
    case "academic-record":
      return <AcademicRecord />;
    case "toolkit":
      return <Toolkit />;
    case "github":
      return <Github />;
    case "about":
      return <AboutHet />;
    case "contact":
      return <Contact />;
    case "terminal":
      return <Terminal />;
    default:
      return null;
  }
}

/* ---------------------------------------------------------------- lab ---- */
function SecurityLab() {
  const [open, setOpen] = useState(0);
  return (
    <div className="wc">
      <p className="wc__lede t-body">
        Six domains, each carrying the basis it rests on — internship, lab,
        coursework or self-study. That distinction is the honest part.
      </p>
      <ul className="wc__accordion">
        {practice.map((d, i) => (
          <li key={d.number} className={cn(i === open && "is-open")}>
            <button type="button" onClick={() => setOpen(i)} data-cursor="link">
              <span className="t-mono wc__n">{d.number}</span>
              <span className="wc__row-title t-display">{d.name}</span>
              <span className="t-mono-sm text-grey">{d.basis}</span>
            </button>
            {i === open ? (
              <ul className="wc__caps">
                {d.capabilities.map((c) => (
                  <li key={c} className="t-body">
                    {c}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
      {entries.length === 0 ? (
        <p className="wc__note t-mono-sm">
          LAB LOG — NO ENTRIES PUBLISHED YET · {directions.length} DIRECTIONS
          UNDER CONSIDERATION, NONE STARTED
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------ projects ---- */
function ProjectFiles() {
  const [sel, setSel] = useState<number | null>(null);
  const p = sel === null ? null : projects[sel];

  if (p) {
    return (
      <div className="wc">
        <button
          type="button"
          className="wc__back t-mono"
          onClick={() => setSel(null)}
          data-cursor="link"
        >
          ← ALL FILES
        </button>
        <h3 className="wc__file-title t-display">{p.title}</h3>
        <ProjectMotif motif={p.motif} className="wc__motif" />
        <dl className="wc__meta">
          <div>
            <dt className="t-mono text-grey-soft">DOMAIN</dt>
            <dd className="t-mono">{p.domain}</dd>
          </div>
          <div>
            <dt className="t-mono text-grey-soft">STATUS</dt>
            <dd className="t-mono">{p.status}</dd>
          </div>
          <div>
            <dt className="t-mono text-grey-soft">TOOLS</dt>
            <dd className="t-mono">{p.tools.join(" · ")}</dd>
          </div>
          <div>
            <dt className="t-mono text-grey-soft">SOURCE</dt>
            <dd className="t-mono">
              {p.repoUrl ? (
                <a
                  className="link"
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="link"
                >
                  VIEW REPOSITORY ↗
                </a>
              ) : (
                "NOT PUBLISHED"
              )}
            </dd>
          </div>
        </dl>
        <p className="t-mono text-grey wc__label">PROBLEM</p>
        <p className="t-body">{p.problem}</p>
        <p className="t-mono text-grey wc__label">APPROACH</p>
        <ol className="wc__steps">
          {p.approach.map((s, i) => (
            <li key={s}>
              <span className="t-mono text-grey-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="t-body">{s}</span>
            </li>
          ))}
        </ol>
        <p className="t-mono text-grey wc__label">OUTCOME</p>
        <p className="t-body">{p.outcome}</p>
        <div className="wc__limits">
          <p className="t-mono">LIMITATIONS</p>
          <p className="t-body">{p.limitations}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wc">
      <p className="wc__lede t-body">
        {projects.length} files, filed by stratum. Each one states what it is —
        engagement, build, lab or competition — and what it does not prove.
      </p>
      {projectsByGroup.map((g) => (
        <div key={g.id} className="wc__file-group">
          <p className="t-mono-sm text-grey-soft wc__label">{g.label}</p>
          <ul className="wc__files">
            {g.items.map((pr) => (
              <li key={pr.id}>
                <button
                  type="button"
                  onClick={() => setSel(projects.indexOf(pr))}
                  data-cursor="inspect"
                  data-cursor-label="OPEN"
                >
                  <span className="wc__file-icon" aria-hidden="true" />
                  <span className="wc__file-name t-mono">
                    {pr.title.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}
                  </span>
                  <span className="t-mono-sm text-grey">{pr.status}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- certs ---- */
function CertificationArchive() {
  return (
    <div className="wc">
      <p className="wc__lede t-body">
        {certificationStats.completed} issued, {certificationStats.pending} in
        progress. The one in progress is labelled everywhere it appears.
      </p>
      <ul className="wc__certs">
        {certifications.map((c) => (
          <li
            key={c.name}
            className={cn(c.status === "IN PROGRESS" && "is-pending")}
          >
            <span className="wc__seal" aria-hidden="true">
              <IssuerMark logo={c.logo} />
            </span>
            <span className="wc__cert-body">
              <span className="wc__cert-title t-display">{c.name}</span>
              <span className="t-mono-sm text-grey">{c.provider}</span>
              {c.note ? (
                <span className="t-mono-sm wc__cert-note">{c.note}</span>
              ) : null}
              {c.credentialUrl ? (
                <a
                  className="t-mono-sm link"
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="link"
                >
                  VIEW CREDENTIAL ↗
                </a>
              ) : (
                <span className="t-mono-sm text-grey-soft">
                  CREDENTIAL LINK UNAVAILABLE
                </span>
              )}
            </span>
            <span className="t-mono-sm wc__cert-state">{c.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- field notes ---- */
function FieldNotes() {
  const role = experience[0];
  return (
    <div className="wc">
      <div className="wc__stamp t-mono-sm">{role.status}</div>
      <h3 className="wc__file-title t-display">{role.org}</h3>
      <p className="t-mono text-grey">
        {role.title} · {role.discipline}
      </p>
      <p className="t-mono text-grey-soft">
        {role.start} — {role.end}
      </p>
      <p className="t-body wc__lede">{role.summary}</p>
      <ol className="wc__chain">
        {role.tracks.map((track) => (
          <li key={track.id}>
            <span className="wc__chain-node" aria-hidden="true" />
            <span className="t-mono">{track.label}</span>
            {track.tools?.length ? (
              <span className="t-mono-sm text-grey">
                {track.tools.join(" · ")}
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------ academic ---- */
function AcademicRecord() {
  return (
    <div className="wc">
      <div className="wc__record-head">
        <span className="t-mono text-grey">RECORD · EDUCATION</span>
        <span className="t-mono-sm text-grey-soft">
          {[education.end, education.endQualifier].filter(Boolean).join(" ")}
        </span>
      </div>
      <h3 className="wc__file-title t-display">{education.degree}</h3>
      <p className="t-mono text-grey">{education.institution}</p>
      <p className="t-mono-sm text-grey-soft">
        {education.start} — {education.end}
      </p>
      <ol className="wc__journey">
        {journey.map((j) => (
          <li key={j.year} data-state={j.state}>
            <span className="t-display wc__year">{j.year}</span>
            <span>
              <span className="t-mono">{j.label}</span>
              <span className="t-body">{j.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="t-mono text-grey wc__label">RELEVANT COURSEWORK</p>
      <ul className="wc__course">
        {coursework.map((c) => (
          <li key={c.label}>
            <span className="t-mono">{c.label}</span>
            <span className="t-mono-sm text-grey">{c.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------- toolkit ---- */
function Toolkit() {
  const [read, setRead] = useState(stack[0].items[0]);
  return (
    <div className="wc wc--toolkit">
      <div className="wc__tool-readout">
        <span className="t-mono text-grey-soft">FUNCTION</span>
        <span className="t-display wc__tool-name">{read.name}</span>
        <span className="t-mono">{read.lines[0]}</span>
        <span className="t-mono text-grey">{read.lines[1]}</span>
      </div>
      <div className="wc__tool-grid">
        {stack.map((g) => (
          <div key={g.key}>
            <p className="t-mono text-grey-soft">{g.label}</p>
            <ul>
              {g.items.map((it) => (
                <li key={it.name}>
                  <button
                    type="button"
                    className={cn(read.name === it.name && "is-live")}
                    onMouseEnter={() => setRead(it)}
                    onFocus={() => setRead(it)}
                    onClick={() => setRead(it)}
                    data-cursor="analyze"
                    data-cursor-label="READ"
                  >
                    {it.name}
                    <span className="sr-only">
                      {" "}
                      — {it.lines[0]}, {it.lines[1]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- github ---- */
function Github() {
  return (
    <div className="wc">
      {profile.githubUrl ? (
        <>
          <p className="wc__lede t-body">
            Source, labs and write-ups live here. Nothing is mirrored into this
            window, so nothing here can go stale or overstate what is there.
          </p>
          <a
            className="wc__big-link t-display"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="link"
          >
            VIEW SECURITY WORK →
          </a>
        </>
      ) : (
        <>
          <p className="wc__lede t-body">
            No GitHub account is linked on the résumé this site was built from,
            so nothing is claimed here. Adding{" "}
            <code className="t-mono-sm">githubUrl</code> to the profile data
            turns this window, the contact row and the footer link on.
          </p>
          <p className="wc__empty t-display">NOT LINKED</p>
          <p className="t-mono-sm text-grey">
            NO REPOSITORY COUNT · NO CONTRIBUTION GRAPH · NOTHING SYNTHESISED
          </p>
        </>
      )}
    </div>
  );
}

/* --------------------------------------------------------------- about ---- */
function AboutHet() {
  return (
    <div className="wc">
      <h3 className="wc__file-title t-display">{profile.name}</h3>
      <p className="t-mono text-grey">{profile.role}</p>
      {profile.about.map((para) => (
        <p key={para.slice(0, 20)} className="t-body wc__para">
          {para}
        </p>
      ))}
      <dl className="wc__meta">
        <div>
          <dt className="t-mono text-grey-soft">FOCUS</dt>
          <dd className="t-mono">{profile.focus}</dd>
        </div>
        <div>
          <dt className="t-mono text-grey-soft">CURRENTLY</dt>
          <dd className="t-mono">
            {profile.currentTitle.toUpperCase()}, {profile.currentOrg}
          </dd>
        </div>
      </dl>
    </div>
  );
}

/* ------------------------------------------------------------- contact ---- */
function Contact() {
  return (
    <div className="wc">
      <p className="wc__lede t-body">Open to junior security roles.</p>
      <ul className="wc__contact">
        <li>
          <span className="t-mono text-grey-soft">EMAIL</span>
          <a
            className="t-display wc__contact-value"
            href={`mailto:${profile.email}`}
            data-cursor="inspect"
            data-cursor-label="CONTACT"
          >
            {profile.email}
          </a>
        </li>
        <li>
          <span className="t-mono text-grey-soft">LINKEDIN</span>
          <a
            className="t-display wc__contact-value"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="link"
          >
            {profile.linkedinHandle}
          </a>
        </li>
        <li>
          <span className="t-mono text-grey-soft">GITHUB</span>
          {profile.githubUrl ? (
            <a
              className="t-display wc__contact-value"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="link"
            >
              VIEW SECURITY WORK →
            </a>
          ) : (
            <span className="t-display wc__contact-value is-unavailable">
              NOT LINKED
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}
