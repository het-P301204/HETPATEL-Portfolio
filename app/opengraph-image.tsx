import { ImageResponse } from "next/og";

export const alt = "Het Patel — Cybersecurity Analyst. VAPT, security engineering, risk and compliance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The share card is the hero, reduced to what survives at thumbnail size.
 *
 * No location, here or anywhere else public — the same rule the copy, the
 * metadata and the structured data all follow. This is the most republished
 * surface the site has, so it is the one place a leak is hardest to take back.
 *
 * The colours are the light theme's real tokens rather than approximations:
 * this file cannot read CSS, so the values are duplicated by hand, and a
 * duplicate that is close but wrong is how a share card stops looking like the
 * site it belongs to.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f6f3",
          color: "#0b0b0b",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            color: "#5c5a54",
          }}
        >
          <span>SECURITY PROFILE / 2026</span>
          <span>VAPT · RISK &amp; COMPLIANCE</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 190,
              fontWeight: 800,
              letterSpacing: -8,
              lineHeight: 0.84,
            }}
          >
            HET
          </span>
          <span
            style={{
              fontSize: 190,
              fontWeight: 800,
              letterSpacing: -8,
              lineHeight: 0.84,
              marginLeft: 160,
            }}
          >
            PATEL
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", height: 3, background: "#3157ff", width: 220 }} />
          <span style={{ fontSize: 24, letterSpacing: 3, color: "#35342f" }}>
            VULNERABILITY ASSESSMENT · SECURITY ENGINEERING · RISK &amp; COMPLIANCE
          </span>
        </div>
      </div>
    ),
    size,
  );
}
