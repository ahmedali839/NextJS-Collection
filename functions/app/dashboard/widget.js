import { cacheLife } from "next/cache";

export async function Widget() {
  "use cache";
  cacheLife("minutes");

  console.log("Widget executed");

  return <div>Widget Time: {new Date().toLocaleTimeString()}</div>;
}
