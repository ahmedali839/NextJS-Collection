"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import { POST } from "@/app/api/notes/route";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const from = sp.get("from") || "/dashboard";

  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);

    if (!res.ok) return setErr(data.error || "Login failed");
    router.push(from);
    // router.push("/dashboard");
  }
  return (
    <main className="p-24">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="grid gap-8 max-w-[360]">
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button disabled={loading}> {loading ? "Logging-in" : "Login"}</button>
        {err ? <p className="text-red-500">{err}</p> : null}
      </form>
    </main>
  );
}
