"use client";

import { useActionState, startTransition } from "react";
import { createPost } from "../pending-state/actions"; // Correct relative path
import { LoadingSpinner } from "./loading-spinner";

export function Button() {
  // useActionState takes: (actionFn, initialState)
  // It returns: [state, dispatchAction, isPending]
  const [state, action, pending] = useActionState(createPost, null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <button
        onClick={() => startTransition(() => action())}
        disabled={pending}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: pending ? "not-allowed" : "pointer",
          opacity: pending ? 0.7 : 1,
        }}
      >
        {pending ? <LoadingSpinner /> : "Create Post"}
      </button>

      {/* Show the success message returned from server */}
      {state?.message && <p style={{ color: "green" }}>{state.message}</p>}
    </div>
  );
}
