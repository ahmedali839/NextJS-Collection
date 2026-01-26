import Image from "next/image";
import { getCachedNumber, getNumber, getPosts } from "./api/route";

export default async function Home() {
  const data = await getPosts();
  const number = await getNumber();
  const cachedNumber = await getCachedNumber();

  return (
    <div className="p-10 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="">
        Got Data from backend using /api/route.js <br />
      </h1>
      <div className="">
        Name: <span className="text-green-500"> {data.name}</span>
      </div>
      <div className="">
        non-cached Number: <span className="text-yellow-500"> {number}</span>
      </div>
      <div className="">
        Cached Number: <span className="text-purple-500"> {cachedNumber}</span>
      </div>
      <div className="">
        Refresh the page to see non-cached will change but cached not.
      </div>
    </div>
  );
}
