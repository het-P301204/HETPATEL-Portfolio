import { ImageResponse } from "next/og";

export const alt = "Het Patel — Cybersecurity Analyst. VAPT, security engineering, risk and compliance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The share card is the hero, reduced to what survives at thumbnail size. */
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
          background: "#f5f4f1",
          color: "#0d0d0c",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            color: "#78766f",
          }}
        >
          <span>SECURITY PROFILE / 2026</span>
          <span>SURAT, INDIA</span>
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
          <div style={{ display: "flex", height: 3, background: "#1436e8", width: 220 }} />
          <span style={{ fontSize: 24, letterSpacing: 3, color: "#3b3a37" }}>
            VULNERABILITY ASSESSMENT · SECURITY ENGINEERING · RISK &amp; COMPLIANCE
          </span>
        </div>
      </div>
    ),
    size,
  );
}
