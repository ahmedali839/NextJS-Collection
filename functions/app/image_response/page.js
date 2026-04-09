export default function Page() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Next.js ImageResponse Demo</h1>

      <p>Click the link below to generate an image:</p>

      <a href="/api/image_response" target="_blank">
        Generate Image
      </a>
    </div>
  );
}