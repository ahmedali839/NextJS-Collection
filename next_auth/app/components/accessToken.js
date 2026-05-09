"use client";

import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading access token...</div>;
  }

  return <div>Access Token: {session?.accessToken ?? "Not available"}</div>;
}