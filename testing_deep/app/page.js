import Image from "next/image";
import { Poppins, ABeeZee, Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({
  weight: "400", // beautifull fonts for website
});
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h5 className={` ${cursive.className} text-6xl mb-6`}>Hello, Yar!</h5>
      <p>Today We will learn Testing functionalites!</p>
      <Link href="/about" className="cursor-alias text-blue-500">
        About
      </Link>
    </div>
  );
}
