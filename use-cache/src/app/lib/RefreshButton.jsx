"use client";

import { useTransition } from "react";
import { refreshMediaHubCache } from "./actions";

export default function RefreshButton() {
  const [isPending, startTransation] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => startTransation(() => refreshMediaHubCache())}
      className="text-orange-300 border py-4 px-6 border-orange-900"
    >
      {isPending
        ? "Refreshing Server Cache..."
        : "Force the Hard Refresh for Cached Images"}
    </button>
  );
}
