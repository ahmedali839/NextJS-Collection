"use client";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screexn w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <h2>Hello, Yar...!</h2>
//         <h4>Today, Yar is learning Optimized Script in Next.JS  </h4>
//       </main>
//     </div>
//   );
// }

import Script from "next/script";
import { log } from "node:console";

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Script
        src="https://example.com/analytics.js"
        strategy="beforeInteractive" // Load after page is interactive
        onError={(e) => {
          console.error("Analytics script failed to load", e);
        }}
        onLoad={() => {
          console.log("Hello Yar.");
        }}
      />
    </div>
  );
}
