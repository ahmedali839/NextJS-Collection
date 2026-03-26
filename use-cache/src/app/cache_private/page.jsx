import { Suspense } from "react";
import CachePrivateBilling from "./cache_private_content";

export default function BillingVault() {
  return (
    <main className="p-10 bg-zinc-950 max-h-screen">
      <h1 className="text-2xl font-bold text-white mb-8">
        AICY Secured Billing Dashboard{" "}
      </h1>

      <Suspense
        fallback={
          <div className="h-32 w-64 bg-zinc-900 animate-pulse rounded-xl border border-zinc-800" />
        }
      >
        <CachePrivateBilling />
      </Suspense>
    </main>
  );
}
