import { cacheLife } from "next/cache";
import { Widget } from "./widget";

export default async function Dashboard() {
  "use cache";
  cacheLife("weeks");

  console.log("Dashboard executed");

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard Time: {new Date().toLocaleTimeString()}</p>
      <Widget />
    </div>
  );
}
