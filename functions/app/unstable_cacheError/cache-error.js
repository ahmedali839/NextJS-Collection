import { unstable_cache } from "next/cache";

async function fetchData() {
  console.log("CACHED FUNCTION EXECUTED");

  await new Promise((r) => setTimeout(r, 1000));

  if (Math.random() < 0.5) {
    throw new Error("Random cached error");
  }

  return {
    time: Date.now(),
  };
}

export const getCachedData = unstable_cache(fetchData, ["demo-cache"]);
