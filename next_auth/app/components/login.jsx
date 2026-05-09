"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const errorMessages = {
  OAuthSignin:
    "GitHub sign-in could not start. Check your OAuth app credentials and redirect URL.",
  OAuthCallback:
    "GitHub rejected the callback. Verify the callback URL in GitHub and NEXTAUTH_URL.",
  OAuthAccountNotLinked:
    "This GitHub account is already linked to a different sign-in method.",
  Configuration: "NextAuth is missing required configuration.",
  AccessDenied: "Access was denied during sign-in.",
  Default: "Sign-in failed. Please try again.",
};

export default function Component() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const error = searchParams.get("error");

  if (status === "loading") {
    return <p>Checking your session...</p>;
  }

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email ?? session.user?.name}</p>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in</p>
      {error ? (
        <p role="alert">{errorMessages[error] ?? errorMessages.Default}</p>
      ) : null}
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="cursor-pointer border-2"
      >
        Continue with GitHub
      </button>
    </>
  );
}
