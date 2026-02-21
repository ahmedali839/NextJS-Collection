"use client";

import { useState } from "react";

export default function Home(val) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  let data = 1;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello Yar...{data}</h1>
      <h1 className="block-40">Count: {count}</h1>
      <h1 className="block-40">Count2: {count2}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Click Count</button>
      <button onClick={() => setCount2(count2 + 1)}>Click Count</button>
    </div>
  );
}
