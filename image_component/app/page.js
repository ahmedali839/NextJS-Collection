import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>Hey, Yar...,</h2>
        <h5>Let's Learn Image Component in NextJS</h5>
        <Image
          sizes={300}
          height={300}
          width={300}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnJAbhL9nlViJJTfngOT2DCfU0HGibfJn3A&s"
          }
          alt="Main Image"
        />
        <Image
          sizes={300}
          height={300}
          width={300}
          src={"https://www.pexels.com/video/isparta-highlands-1-18990796/"}
          alt="Main Image"
        />
      </main>
    </div>
  );
}
