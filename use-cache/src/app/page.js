import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>Welcome Yar!</h2>
        <p>Let's Learn caching in Next.JS e.g "use cache"</p>
      </main>
    </div>
  );
}
