"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();  // its mostly used in client comps

  return (
    <div>
      <h2>useRouter have: </h2>
      <button
        className="cursor-pointer text-orange-500"
        onClick={() => {
          router.push("/useRouterr/electronics", { scroll: false });
        }}
      >
        Electronics
      </button>
    </div>
  );
}
