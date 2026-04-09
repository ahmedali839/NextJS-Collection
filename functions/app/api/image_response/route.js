import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        background: "orange",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      Hello Ahmed 🚀
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
