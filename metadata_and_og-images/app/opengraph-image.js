import { ImageResponse } from "next/og";

// 1. Force Edge Runtime (Recommended for ImageResponse)
export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  // logic to fetch data if inside a dynamic route like [slug]
  // const post = await getPost(params.slug);

  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Blog Image
    </div>,
    {
      ...size,
    },
  );
}
