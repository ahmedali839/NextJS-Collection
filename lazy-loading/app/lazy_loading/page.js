"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("../componets/a"), {
  loading: () => <p>Loading...</p>,
});
// const ComponentB = dynamic(() => import("../componets/b"));
const ComponentB = dynamic(() => import("../componets/b"), {
  loading: () => <p>Loading...</p>,
});
const ComponentC = dynamic(() => import("../componets/c"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);

  const res = fetch("https://jsonplaceholder.typicode.com/users/4", {
    cache: "force-cache",
  })
    .then((r) => r.json())
    .then((result) => setData(result.name));

  return (
    <div style={{ padding: 20 }}>
      <h1>Dynamic Client Components Demo</h1>

      {/* Load immediately, but in a separate client bundle */}
      {data && <h3>Data: {data} </h3>}
      <ComponentA />
      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore((v) => !v)}>Toggle</button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  );
}
