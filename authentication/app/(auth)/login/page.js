// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// // import { POST } from "@/app/api/notes/route";

// export default function LoginPage() {
//   const router = useRouter();
//   const sp = useSearchParams();
//   const from = sp.get("from") || "/dashboard";

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function onSubmit(e) {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);

//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     console.log(data);
//     setLoading(false);

//     if (!res.ok) return setErr(data.error || "Login failed");
//     router.push(from);
//     // router.push("/dashboard");
//   }
//   return (
//     <main className="p-24">
//       <h2>Login</h2>
//       <form onSubmit={onSubmit} className="grid gap-8 max-w-[360]">
//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           placeholder="Password"
//           type="password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button disabled={loading}> {loading ? "Logging-in" : "Login"}</button>
//         {err ? <p className="text-red-500">{err}</p> : null}
//       </form>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // If server returned HTML (500/404), don't call res.json blindly
      const contentType = res.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await res.json()
        : { error: await res.text() };

      if (!res.ok) {
        setErr(payload.error || "Login failed");
        return;
      }

      router.push(from);
    } catch (e) {
      setErr("Network/Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-24">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="grid gap-8 max-w-[360px]">
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
        <button disabled={loading}>{loading ? "Logging-in" : "Login"}</button>
        {err ? <p className="text-red-500">{err}</p> : null}
      </form>
    </main>
  );
}
