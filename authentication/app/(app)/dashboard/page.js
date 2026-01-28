import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/lib/currentUser";
import NotesClient from "./NotesClient";

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  // Server-side fetch to your own API (optional) or load directly from DB
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/notes`,
    { cache: "no-store" },
  );
  // In dev, you can skip this fetch and render from DB directly; notes API already enforces auth.
  // If this fetch fails due to base URL, just call /api/notes from client instead.

  return (
    <main className="p-24">
      <h2>Dashboard</h2>
      <p>
        Logged in as: {user.name} ({user.email}){" "}
      </p>

      <form
        action={async (formData) => {
          "use server";
          // keeping this demo simple: use the API from the client for note creation
        }}
      />
      <LogoutButton />
      <NotesClient />
    </main>
  );
}

function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
      }}
    >
      {/* client alternatives below (NotesClient includes logout)*/}
    </form>
  );
}

{
  /* Simple client widget to visualize requests in Network tab */
}
// function NotesClient() {
//   return null;
// }
