"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("../componets/a"));
const ComponentB = dynamic(() => import("../componets/b"));
const ComponentC = dynamic(() => import("../componets/c"), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dynamic Client Components Demo</h1>

      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore((v) => !v)}>Toggle</button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  );
}
