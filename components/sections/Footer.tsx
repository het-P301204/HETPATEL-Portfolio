import { profile } from "@/data/profile";

/**
 * Identity, discipline, year, links. No location — by instruction, and because
 * a footer is exactly where a temporary fact would quietly become permanent.
 *
 * GitHub keeps its place in the row whether or not there is a URL: when there
 * is none it renders as a disabled item that says so, rather than disappearing.
 */
export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer__top">
        <p className="footer__mark t-display">HET PATEL</p>
        <ul className="footer__disciplines t-mono">
          <li>SECURITY</li>
          <li>SYSTEMS</li>
          <li>INVESTIGATION</li>
        </ul>
      </div>

      <div className="footer__base">
        <span className="t-mono text-grey footer__legal">
          © 2026 {profile.name.toUpperCase()} · ALL RIGHTS RESERVED
          <span className="footer__session"> · SECURE SESSION CLOSED</span>
        </span>

        <nav className="footer__links t-mono" aria-label="Elsewhere">
          <a
            href={profile.linkedinUrl}
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="link"
          >
            LINKEDIN
          </a>

          {profile.githubUrl ? (
            <a
              href={profile.githubUrl}
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="link"
            >
              GITHUB
            </a>
          ) : (
            <span
              className="footer__disabled"
              title="No GitHub URL is recorded in the source this site was built from"
            >
              GITHUB
              <span className="sr-only"> — not linked</span>
            </span>
          )}

          <a
            href={`mailto:${profile.email}`}
            className="link"
            data-cursor="link"
          >
            EMAIL
          </a>

          <a href="/security" className="link" data-cursor="link">
            SECURITY
          </a>

          <a href="/accessibility" className="link" data-cursor="link">
            ACCESSIBILITY
          </a>
        </nav>
      </div>
    </footer>
  );
}
