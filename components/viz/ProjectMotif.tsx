import type { MotifCaption, ProjectMotif as Motif } from "@/data/projects";

/**
 * Every project draws its own diagram. No photography, no stock imagery, no
 * dashboard screenshots — a portfolio about systems should render systems.
 * Geometry is deterministic so server and client always agree, and each figure
 * is built from the same vocabulary: hairlines, ticks, nodes, one accent mark.
 *
 * ── why the words are a prop ───────────────────────────────────────────────
 * There are seven shapes and fifteen cases, so shapes get reused, and that is
 * fine: a time series is a time series. The words were not fine. Every label
 * was hardcoded inside its shape, so reusing a shape silently reused another
 * project's vocabulary.
 *
 * The results were not subtle. SUNSET, a post-quantum migration planner, was
 * captioned DETECTION / CONTAINMENT / RECOVERY and "THE RECORD IS WRITTEN
 * DURING, NOT AFTER" — incident-response language on a tool about migration
 * deadlines. PINGMASTER, a latency monitor, carried those same three words.
 * AFTERLIFE is a case about a session outliving the reset meant to kill it,
 * and it drew the cloud-identity figure while the ISSUE / SIGN / VERIFY /
 * EXPIRE figure described it exactly. On a site whose whole claim is that it
 * is written to be checked, a figure asserting the wrong discipline is worse
 * than no figure at all.
 *
 * So the geometry stays shared and the vocabulary comes from the case. Each
 * figure declares defaults for its own slots; `data/projects.ts` overrides the
 * ones that would otherwise be untrue.
 */

type Caption = MotifCaption;

/** Prefer the case's word, fall back to the figure's own. */
const pick = (a: string | undefined, b: string) => a ?? b;
const pickList = (a: string[] | undefined, b: string[]) =>
  a && a.length === b.length ? a : b;

const SCAN_BARS = [18, 42, 26, 64, 12, 88, 30, 52, 20, 74, 34, 46];
const SCAN_FLAGS = [3, 5, 9];

function Scan({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      {/* port / host map — bar height is response, flagged bars are followed up */}
      {SCAN_BARS.map((h, i) => {
        const x = 24 + i * 29;
        const flagged = SCAN_FLAGS.includes(i);
        return (
          <g key={i}>
            <line
              x1={x}
              y1={214}
              x2={x}
              y2={214 - h * 1.55}
              className={flagged ? "mv-accent" : "mv-stroke"}
            />
            {flagged ? (
              <rect
                x={x - 3}
                y={214 - h * 1.55 - 6}
                width={6}
                height={6}
                className="mv-accent-fill"
              />
            ) : null}
          </g>
        );
      })}
      <line x1={12} y1={214} x2={388} y2={214} className="mv-stroke" />
      {Array.from({ length: 25 }).map((_, i) => (
        <line
          key={i}
          x1={12 + i * 15.6}
          y1={214}
          x2={12 + i * 15.6}
          y2={i % 4 === 0 ? 222 : 218}
          className="mv-hair"
        />
      ))}
      <text x={12} y={244} className="mv-label">
        {pick(c.lead, "HOSTS 001—012")}
      </text>
      <text x={388} y={244} className="mv-label" textAnchor="end">
        {pick(c.trail, "VERIFIED 03")}
      </text>
    </>
  );
}

function Vector({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      {/* delivery path, and the branch that is the actual attack */}
      <path d="M40 70 C 130 70, 150 118, 240 118" className="mv-stroke" />
      <path
        d="M240 118 C 300 118, 310 176, 360 176"
        className="mv-dash mv-accent"
      />
      <path d="M240 118 C 300 118, 300 62, 360 62" className="mv-dash" />
      {(() => {
        const n = pickList(c.items, ["SOURCE", "PRETEXT", "CAPTURE", "IGNORED"]);
        return [
          [40, 70, n[0]],
          [240, 118, n[1]],
          [360, 176, n[2]],
          [360, 62, n[3]],
        ] as [number, number, string][];
      })().map(([x, y, label], li) => (
        <g key={label as string}>
          <rect
            x={(x as number) - 4}
            y={(y as number) - 4}
            width={8}
            height={8}
            className={li === 2 ? "mv-accent-fill" : "mv-fill"}
          />
          {/* Labels sit above their node so nothing crosses an edge. */}
          <text
            x={x as number}
            y={(y as number) - 12}
            className="mv-label"
            textAnchor={
              (x as number) > 320 ? "end" : (x as number) < 80 ? "start" : "middle"
            }
          >
            {label as string}
          </text>
        </g>
      ))}
      <line x1={12} y1={224} x2={388} y2={224} className="mv-hair" />
      <text x={12} y={244} className="mv-label">
        {pick(c.foot, "CLOSED ENVIRONMENT")}
      </text>
    </>
  );
}

function Identity({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      {/* nested boundaries; the permission that was refused stays dashed */}
      <rect x={16} y={26} width={368} height={186} className="mv-stroke" />
      <rect x={52} y={52} width={296} height={134} className="mv-hair" />
      <rect x={100} y={80} width={200} height={78} className="mv-hair" />
      <rect x={188} y={110} width={16} height={16} className="mv-fill" />
      {[
        [72, 68],
        [330, 68],
        [72, 172],
        [330, 172],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect
            x={x - 4}
            y={y - 4}
            width={8}
            height={8}
            className={i === 3 ? "mv-accent-fill" : "mv-fill"}
          />
          <line
            x1={x}
            y1={y}
            x2={196}
            y2={118}
            className={i === 3 ? "mv-dash mv-accent" : "mv-hair"}
          />
        </g>
      ))}
      <text x={16} y={244} className="mv-label">
        {pick(c.lead, "ROLE · SCOPE · DEFAULT")}
      </text>
      <text x={384} y={244} className="mv-label" textAnchor="end">
        {pick(c.trail, "ONE PATH REFUSED")}
      </text>
    </>
  );
}

function Token({ caption: c = {} }: { caption?: Caption }) {
  const steps = pickList(c.items, ["ISSUE", "SIGN", "VERIFY", "EXPIRE"]);
  return (
    <>
      {steps.map((s, i) => {
        const x = 40 + i * 106;
        return (
          <g key={s}>
            <rect
              x={x - 26}
              y={92}
              width={52}
              height={38}
              className={i === 2 ? "mv-accent" : "mv-stroke"}
            />
            <text x={x} y={116} className="mv-label" textAnchor="middle">
              {s}
            </text>
            {i < steps.length - 1 ? (
              <line
                x1={x + 26}
                y1={111}
                x2={x + 80}
                y2={111}
                className="mv-hair"
              />
            ) : null}
          </g>
        );
      })}
      <line x1={14} y1={176} x2={386} y2={176} className="mv-stroke" />
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={i}
          x1={14 + i * 31}
          y1={176}
          x2={14 + i * 31}
          y2={i % 3 === 0 ? 186 : 181}
          className="mv-hair"
        />
      ))}
      <text x={14} y={206} className="mv-label">
        {pick(c.lead, "T0")}
      </text>
      <text x={386} y={206} className="mv-label" textAnchor="end">
        {pick(c.trail, "SESSION LIFETIME")}
      </text>
      <text x={252} y={78} className="mv-label" textAnchor="middle">
        {pick(c.note, "THE HARD PART")}
      </text>
    </>
  );
}

const EVENTS = [30, 58, 74, 96, 150, 178, 206, 248, 300, 322, 356];

function Timeline({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      <line x1={14} y1={130} x2={386} y2={130} className="mv-stroke" />
      {EVENTS.map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={130}
          x2={x}
          y2={i === 4 ? 96 : 130 - (i % 3) * 7 - 7}
          className={i === 4 ? "mv-accent" : "mv-hair"}
        />
      ))}
      <rect x={14} y={130} width={136} height={0.5} className="mv-fill" />
      {(() => {
        const n = pickList(c.items, ["DETECTION", "CONTAINMENT", "RECOVERY"]);
        return [
          [14, 150, n[0]],
          [150, 236, n[1]],
          [292, 386, n[2]],
        ] as [number, number, string][];
      })().map(([a, b, label]) => (
        <g key={label as string}>
          <line
            x1={a as number}
            y1={162}
            x2={b as number}
            y2={162}
            className="mv-stroke"
          />
          <line
            x1={a as number}
            y1={158}
            x2={a as number}
            y2={166}
            className="mv-stroke"
          />
          <line
            x1={b as number}
            y1={158}
            x2={b as number}
            y2={166}
            className="mv-stroke"
          />
          <text x={a as number} y={184} className="mv-label">
            {label as string}
          </text>
        </g>
      ))}
      <text x={150} y={88} className="mv-label">
        {pick(c.note, "FIRST SIGNAL")}
      </text>
      <text x={14} y={222} className="mv-label">
        {pick(c.foot, "THE RECORD IS WRITTEN DURING, NOT AFTER")}
      </text>
    </>
  );
}

/* Controls down the side, evidence across: a coverage matrix where the honest
   answer is that one cell is asserted and not demonstrated. */
const CONTROL_ROWS = 5;
const CONTROL_COLS = 8;
const CONTROL_GAP = [2, 5] as const; // row, column of the cell that is only claimed

function Control({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      {Array.from({ length: CONTROL_ROWS }).map((_, r) =>
        Array.from({ length: CONTROL_COLS }).map((__, c) => {
          const x = 60 + c * 40;
          const y = 44 + r * 30;
          const gap = r === CONTROL_GAP[0] && c === CONTROL_GAP[1];
          // Deterministic: evidence thins out toward the right of the matrix.
          const held = (r * 7 + c * 5) % 4 !== 0 && c < 6;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width={14}
              height={14}
              className={
                gap ? "mv-dash mv-accent" : held ? "mv-fill" : "mv-hair"
              }
            />
          );
        }),
      )}
      <line x1={48} y1={32} x2={48} y2={200} className="mv-stroke" />
      <line x1={48} y1={200} x2={388} y2={200} className="mv-stroke" />
      <text x={12} y={52} className="mv-label">
        {pick(c.note, "CTRL")}
      </text>
      <text x={48} y={224} className="mv-label">
        {pick(c.lead, "EVIDENCE →")}
      </text>
      <text x={388} y={224} className="mv-label" textAnchor="end">
        {pick(c.trail, "ONE CONTROL ASSERTED, NOT SHOWN")}
      </text>
    </>
  );
}

/* Three sources, one moment where they agree. Correlation, drawn. */
const TRACE_LANES = [
  { y: 70, label: "ACCESS", hit: 6 },
  { y: 122, label: "AUTH", hit: 6 },
  { y: 174, label: "NETWORK", hit: 6 },
];

function Trace({ caption: c = {} }: { caption?: Caption }) {
  return (
    <>
      {TRACE_LANES.map((lane, li) => (
        <g key={lane.label}>
          <line
            x1={86}
            y1={lane.y}
            x2={386}
            y2={lane.y}
            className="mv-hair"
          />
          <text x={12} y={lane.y + 4} className="mv-label">
            {
              pickList(
                c.items,
                TRACE_LANES.map((l) => l.label),
              )[li]
            }
          </text>
          {Array.from({ length: 13 }).map((_, i) => {
            const x = 96 + i * 22;
            const hit = i === lane.hit;
            return (
              <rect
                key={i}
                x={x - 3}
                y={lane.y - 3}
                width={6}
                height={6}
                className={hit ? "mv-accent-fill" : "mv-fill"}
              />
            );
          })}
        </g>
      ))}
      {/* the vertical the three lanes share */}
      <line x1={228} y1={54} x2={228} y2={190} className="mv-dash mv-accent" />
      <text x={228} y={44} className="mv-label" textAnchor="middle">
        {pick(c.note, "CORRELATED")}
      </text>
      <text x={12} y={224} className="mv-label">
        {pick(c.foot, "SYNTHETIC DATA · FICTIONAL SCENARIO")}
      </text>
    </>
  );
}

/* `compete` was here too, and nothing referenced it: the Kryptech CTF moved to
   the certification archive, because a credential someone else issued belongs
   with the other credentials rather than among work Het authored. */
const FIGURES: Record<
  Motif,
  (p: { caption?: Caption }) => React.JSX.Element
> = {
  scan: Scan,
  vector: Vector,
  identity: Identity,
  token: Token,
  timeline: Timeline,
  control: Control,
  trace: Trace,
};

export default function ProjectMotif({
  motif,
  caption,
  className,
  ambient = false,
}: {
  motif: Motif;
  /** The case's own words for this figure's slots. */
  caption?: Caption;
  className?: string;
  /** Fill a whole stage instead of sitting in a column: the same figure,
      cropped to the frame and dropped back to a background weight. */
  ambient?: boolean;
}) {
  const Figure = FIGURES[motif];
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio={ambient ? "xMidYMid slice" : undefined}
      className={`motif ${ambient ? "motif--ambient" : ""} ${className ?? ""}`}
      /* Decorative. It also carried `role="img"`, which contradicted the
         aria-hidden beside it and named nothing anyway — the figure has no
         title or label. What it depicts is stated in the case record's prose. */
      aria-hidden="true"
      focusable="false"
    >
      <Figure caption={caption} />
    </svg>
  );
}
