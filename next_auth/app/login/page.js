import Link from "next/link";
import Login from "../components/login";

export default function LoginPage() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "4rem auto",
        padding: 24,
        display: "grid",
        gap: 24,
      }}
    >
      <div>
        <p style={{ marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>
          Authentication
        </p>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Login</h1>
        <p style={{ marginTop: 12, color: "#555" }}>
          This page now follows the shared NextAuth session flow used by the rest of
          the app.
        </p>
      </div>

      <section style={{ padding: 24, border: "1px solid #e6e6e6", borderRadius: 12 }}>
        <Login />
      </section>

      <Link href="/">Back to home</Link>
    </main>
  );
}
