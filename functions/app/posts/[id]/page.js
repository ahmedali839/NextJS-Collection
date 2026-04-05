import { after } from "next/server";

export default async function PostPage({ params }) {
  const { id } = await params;

  after(async () => {
    // Simulate a logging function to an analytics API
    await logPageView(id);
  });

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Here is the content of the post...</p>
    </div>
  );
}

async function logPageView(postId) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    const response = await fetch(`${baseUrl}/api/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Log API failed (${response.status}): ${text}`);
    }

    console.log(`Logged view for post ${postId}`);
  } catch (error) {
    console.error(`Failed to log view for post ${postId}:`, error);
  }
}
