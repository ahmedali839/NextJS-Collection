import { cacheLife, cacheTag, updateTag } from "next/cache";
import { getTimeData } from "../lib/actions";

export default async function AboutContent() {
  "use cache";
  cacheLife("minutes");
  cacheTag("about-page");

  const res = await getTimeData();
  const data = await res.json();

  return (
    <div className="p-4 bg-purple-500 rounded-lg border">
      <p className="font-bold">Fetched Time: {data.time}</p>
      <p className="font-bold">Random Number: {data.randomNumber}</p>
    </div>
  );
}
