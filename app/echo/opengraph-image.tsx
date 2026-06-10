import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Echo: Stream Your Mind - daily AI reflection app by Stage5";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#07060c",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(139,92,246,0.35), transparent 55%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.18), transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}
        >
          Echo · by Stage5
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          One question a day. Write before you overthink it.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "#d1d5db",
          }}
        >
          Daily AI reflection app for iPhone — free on the App Store
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
