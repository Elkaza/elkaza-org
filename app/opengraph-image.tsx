import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          padding: "64px",
          fontSize: 48,
          fontFamily: "Inter, system-ui, Segoe UI, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 800, marginBottom: 16 }}>Elkaza</div>
        <div style={{ fontSize: 36, opacity: 0.9 }}>
          Digital Transformation • Enterprise Architecture • AI
        </div>
        <div style={{ fontSize: 26, marginTop: 8, opacity: 0.7 }}>elkaza.org</div>
      </div>
    ),
    size
  );
}

