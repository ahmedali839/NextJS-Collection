import Image from "next/image";
import vercel from "../public/image.png";
import { Poppins } from "next/font/google";

const pop = Poppins({
  weight: ["200"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className={pop.className}>Hello Yar</h1>
      <Image src={vercel} alt="Vercel Image" width={100} height={100} />{" "}
      {/* size of image KB */}
      {/* <img src={vercel.src} alt="Vercel img" />  size of image 641 KB */}
    </div>
  );
}
