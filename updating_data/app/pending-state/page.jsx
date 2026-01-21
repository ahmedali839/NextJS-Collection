"use client";

import { useActionState, startTransition, useState, useEffect } from "react";
import { createPost } from "./actions";
import { LoadingSpinner } from "../ui/loading-spinner";

export default function Button() {
  const [state, action, pending] = useActionState(createPost, false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <button onClick={() => startTransition(action)}>
      {pending ? <div>Loading...</div> : "Create Post"}
      <br />
      {showMessage && <p className="text-green-400">{state.message}</p>}
    </button>
  );
}
