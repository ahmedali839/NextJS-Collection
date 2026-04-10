"use client";

import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();

  if (!pending) {
    return null;
  }

  return (
    <span
      aria-live="polite"
      className="ml-3 inline-flex items-center animate-pulse rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
    >
      Loading...
    </span>
  );
}
