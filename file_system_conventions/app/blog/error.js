"use client";

import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.error("Error Name:", error?.name);
    console.error("Error Message:", error?.message);
    console.error("Error Digest:", error?.digest);
    console.error("Error Stack:", error?.stack);
  }, [error]);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "red" }}>🚨 Something went wrong</h1>

      <p>
        <strong>Error Message:</strong> {error?.message}
      </p>

      <p>
        <strong>Error Name:</strong> {error?.name}
      </p>

      <p>
        <strong>Error Digest (Next.js production id):</strong>{" "}
        {error?.digest || "No digest available"}
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          border: "1px solid gray",
          cursor: "pointer",
        }}
      >
        Toggle Stack Trace
      </button>

      {showDetails && (
        <pre
          style={{
            marginTop: "20px",
            background: "#111",
            color: "#0f0",
            padding: "15px",
            overflow: "auto",
          }}
        >
          {error?.stack}
        </pre>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          🔁 Try Again
        </button>
      </div>
    </div>
  );
}