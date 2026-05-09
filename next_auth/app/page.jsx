import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "4rem auto",
        padding: 24,
        display: "grid",
        gap: 16,
      }}
    >
      <p style={{ textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>
        NextAuth workflow
      </p>
      <h1 style={{ margin: 0, fontSize: "2.5rem" }}>App Router auth flow</h1>
      <p style={{ margin: 0, color: "#555" }}>
        The shared session provider now lives in the root layout, and the login page
        uses the same NextAuth component as the other auth examples.
      </p>
      <Link href="/login">Open login</Link>
    </main>
  );
}
