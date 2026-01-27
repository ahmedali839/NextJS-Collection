"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/external/todos/1")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>Hello Yar! Let's learn analytics in Next.js as: </h2>
      <main style={{ padding: 20 }}>
        <h1>Next.js Proxy Demo (rewrites)</h1>
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
      </main>
    </div>
  );
}
