import { cacheLife, cacheTag } from "next/cache";
import { Widget } from "./widget";
import { Suspense } from "react";

export async function FetchData() {
  "use cache";
  cacheTag("json-data");
  // no 3s waiting, bcz it's cached but for first time only
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");

  if (!res.ok) {
    return <p>Failed to load user data.</p>;
  }

  const user = await res.json();

  return <p>User: {user?.name ?? "Unknown"}</p>;
}

export default async function Dashboard() {
  "use cache";
  cacheLife("weeks");

  console.log("Dashboard executed");

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard Time: {new Date().toLocaleTimeString()}</p>
      <Widget />

      <Suspense fallback={<div>Loading...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
}
