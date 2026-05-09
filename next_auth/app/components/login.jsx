"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Checking your session...</p>;
  }

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email ?? session.user?.name}</p>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn("github", { callbackUrl: "/" })} className="cursor-pointer border-2">
        Sign in
      </button>
    </>
  )
}