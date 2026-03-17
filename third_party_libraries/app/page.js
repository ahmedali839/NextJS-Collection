// import { GoogleTagManager } from "@next/third-parties/google";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <GoogleTagManager gtmId="GTM-XYZ" />
//       <h2>
//         Hello Yar! Working with third-party-libraries in Next.JS on the
//         16-March-2026{" "}
//       </h2>
//     </div>
//   );
// }

// 'use client';

// import EventButton from './components/sendGAEvent';

// export default function Page() {
//   return (
//     <div>
//       <h2>Welcome to the Event Tracker</h2>
//       <EventButton />
//     </div>
//   );
// }

// 'use client';

// import { useEffect } from 'react';
// import EventButton from './components/sendGAEvent';

// export default function Page() {
//   useEffect(() => {
//     // Only run GA setup on client side
//     if (typeof window !== 'undefined' && window.gtag) {
//       window.gtag('config', 'GTM-5ZHL2HQ9'); // Ensure it runs on client
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to the Event Tracker</h2>
//       <EventButton />
//     </div>
//   );
// }

import EventButton from "./components/sendGAEvent";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="mb-4 text-2xl font-bold">Welcome to the Event Tracker</h2>
      <EventButton />
    </div>
  );
}
