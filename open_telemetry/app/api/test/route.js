// export async function GET() {
//   // Simulate a database call or external API fetch
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await res.json();
//   return Response.json({ success: true, data });
// }

import { NextResponse } from "next/server";
import { trace } from "@opentelemetry/api";

export async function GET() {
  const tracer = trace.getTracer("test-tracer");

  // Start a manual "Span" to track our suspected slow code
  return await tracer.startActiveSpan("SlowProcessingBlock", async (span) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",
      });
      const data = await res.json();

      // The suspected delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      span.setAttribute("posts.count", data.length); // Add proof data
      return NextResponse.json({ success: true, count: data.length });
    } finally {
      span.end(); // Stop the timer
    }
  });
}
