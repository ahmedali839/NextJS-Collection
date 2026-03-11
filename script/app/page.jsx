"use client";

import Script from "next/script";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screexn w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>Hello, Yar...!</h2>
        <h4>Today, Yar is learning Optimized Script in Next.JS </h4>
        <Script id="navbar">
          {document.getElementById("#navbar").classList.add("text-orange-500")}
        </Script>
      </main>
    </div>
  );
}
