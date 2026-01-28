"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { POST } from "@/app/api/notes/route";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      return setErr(data.error || "Signup Failed");
    }
    router.push("/dashboard");
  }

  return (
    <main className="p-24">
      <h2>Signup</h2>
      <form onSubmit={onSubmit} className="grid gap-8 max-w-{360}">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Password (min 6)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
        />
        <button disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
        {err ? <p className="text-red-500">{err}</p> : null}
      </form>
    </main>
  );
}
