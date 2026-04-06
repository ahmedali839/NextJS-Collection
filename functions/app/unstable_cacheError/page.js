import { Suspense } from "react";
import { getNormalData } from "./normal-error.js";
import { getCachedData } from "./cache-error.js";

async function NormalData() {
  try {
    const data = await getNormalData();
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  } catch (e) {
    return (
      <pre>{JSON.stringify({ error: "Normal function crashed" }, null, 2)}</pre>
    );
  }
}

async function CachedData() {
  try {
    const data = await getCachedData();
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  } catch (e) {
    return (
      <pre>{JSON.stringify({ error: "Cached function crashed" }, null, 2)}</pre>
    );
  }
}

export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <h1>unstable_cache experiment</h1>

      <h2>Normal Function (No Cache)</h2>
      <Suspense fallback={<div>Loading normal data...</div>}>
        <NormalData />
      </Suspense>

      <h2>Cached Function</h2>
      <Suspense fallback={<div>Loading cached data...</div>}>
        <CachedData />
      </Suspense>

      <p>Refresh page many times</p>
    </div>
  );
}
