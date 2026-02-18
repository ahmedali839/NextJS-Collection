import next from "next";
import Link from "next/link";
import React from "react";

export default async function Dashboard() {
  const respose = await fetch("http://localhost:3000/api/time", {
    next: { revalidate: 10 },
  });
  const time = await respose.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Time: {time.time}</h3>
      <Link href={"/products"}>Navigate to products page</Link>
    </div>
  );
}
