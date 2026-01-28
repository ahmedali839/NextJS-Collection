"use client";

import { useEffect, useState } from "react";

export default function NotesClient() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    const res = await fetch("/api/notes");
    const data = await res.json();
    if (!res.ok) return setErr(data.error || "Failed to load");
    setNotes(data.notes);
  }

  useEffect(() => {
    load();
  }, []);

  async function addNotes(e) {
    e.preventDefault();
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const data = await res.json();
    if (!res.ok) return setErr(data.error || "Failed to create");
    setTitle("");
    setBody("");
    load();
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <section className="mt-16">
      <button onClick={logout}>Logout</button>

      <h3 className="mt-16">Create note</h3>
      <form onSubmit={addNotes} className="grid gap-8 max-w-[420]">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Add</button>
      </form>

      {err ? <p className="text-red-500">{err}</p> : null}

      <h3>Your notes</h3>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </section>
  );
}
