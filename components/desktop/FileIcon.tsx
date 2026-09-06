import type { NodeKind } from "@/data/desktop";

/**
 * ONE ICON SET, for the desk and the dock both.
 *
 * The desk used to draw its objects out of CSS pseudo-elements and the dock out
 * of a second, unrelated SVG set, so nothing on screen looked like it came from
 * the same system. These are all one family: the familiar tabbed folder, the
 * document with a folded corner, the black terminal with a prompt — drawn at
 * 48 units on a shared grid, with a flat fill and a single darker edge, the way
 * a Linux icon theme is built.
 *
 * They are deliberately *like* a Linux icon theme rather than copies of one.
 * Nothing here reproduces Yaru, Adwaita or any other shipped artwork.
 */

const FOLDER_BACK = "M4 12a3 3 0 013-3h11l3.6 4H41a3 3 0 013 3v3H4z";
const FOLDER_BODY = "M4 17h40v20a3 3 0 01-3 3H7a3 3 0 01-3-3z";

function Folder({ locked }: { locked?: boolean }) {
  return (
    <>
      {/* the tab behind, then the drawer in front — the shape everyone reads
          as "folder" without being told */}
      <path d={FOLDER_BACK} className="fi-shade" />
      <path d={FOLDER_BODY} className="fi-body" />
      <path d="M4 17h40" className="fi-edge" />
      {locked ? (
        <>
          {/* an open case, not a padlock: the CTF folder is the one with
              something live in it */}
          <rect x="19" y="26" width="10" height="8" rx="1" className="fi-mark" />
          <path d="M21 26v-2a3 3 0 016 0v2" className="fi-mark-stroke" />
        </>
      ) : null}
    </>
  );
}

function Document() {
  return (
    <>
      <path
        d="M10 5h19l9 9v29a3 3 0 01-3 3H13a3 3 0 01-3-3V8a3 3 0 013-3z"
        className="fi-body"
      />
      {/* the folded corner */}
      <path d="M29 5l9 9h-9z" className="fi-shade" />
      <path d="M16 22h16M16 28h16M16 34h10" className="fi-rule" />
    </>
  );
}

function Certificate() {
  return (
    <>
      <path
        d="M8 8h32a3 3 0 013 3v20a3 3 0 01-3 3H8a3 3 0 01-3-3V11a3 3 0 013-3z"
        className="fi-body"
      />
      <circle cx="24" cy="21" r="6" className="fi-mark-stroke" />
      {/* the ribbon */}
      <path d="M20 32v11l4-3 4 3V32z" className="fi-shade" />
    </>
  );
}

function Terminal() {
  return (
    <>
      <rect x="4" y="8" width="40" height="32" rx="4" className="fi-term" />
      <rect x="4" y="8" width="40" height="7" rx="4" className="fi-term-bar" />
      <path d="M12 24l5 4-5 4" className="fi-prompt" />
      <path d="M21 32h11" className="fi-prompt" />
    </>
  );
}

function Link() {
  return (
    <>
      <path
        d="M10 5h19l9 9v29a3 3 0 01-3 3H13a3 3 0 01-3-3V8a3 3 0 013-3z"
        className="fi-body"
      />
      <path d="M29 5l9 9h-9z" className="fi-shade" />
      {/* a shortcut arrow, the way a symlink is badged */}
      <path d="M18 32l12-12M22 20h8v8" className="fi-mark-stroke" />
    </>
  );
}

function App() {
  return (
    <>
      <rect x="6" y="6" width="36" height="36" rx="6" className="fi-body" />
      <rect x="14" y="14" width="20" height="20" rx="2" className="fi-shade" />
    </>
  );
}

const ICONS: Record<NodeKind, () => React.JSX.Element> = {
  folder: () => <Folder />,
  "folder-locked": () => <Folder locked />,
  document: Document,
  certificate: Certificate,
  terminal: Terminal,
  link: Link,
  app: App,
};

export default function FileIcon({
  kind,
  className,
}: {
  kind: NodeKind;
  className?: string;
}) {
  const Icon = ICONS[kind];
  return (
    <svg
      className={`fi ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <Icon />
    </svg>
  );
}
