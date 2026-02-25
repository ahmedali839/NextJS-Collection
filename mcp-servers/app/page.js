"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const askAI = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>
          Hey Yarr..., let's learn MCP(Model-Context-Preview) in Next.js v16+
        </h2>
        <h4>
          Enter "getTime" in input. AI-Assistant will call getTime() from
          backend and give it's response here{" "}
        </h4>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "300px" }}
          placeholder="Ask Something..."
        />
        <button onClick={askAI}>Ask</button>

        <pre>{output}</pre>
      </main>
    </div>
  );
}
