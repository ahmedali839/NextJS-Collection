// "use client";

// import React from "react";
// import { sendGAEvent } from "@next/third-parties/google";

// export default function EventButton() {
//   const handleClick = () => {
//     sendGAEvent("event", "buttonClicked", { value: "xyz" });
//   };

//   return (
//     <div>
//       <button className="cursor-pointer" onClick={handleClick}>
//         Send Event(Click)
//       </button>
//     </div>
//   );
// }

// import { useEffect } from "react";

// export default function MyComponent() {
//   useEffect(() => {
//     // Check if gtag is ready
//     if (window.gtag) {
//       window.gtag("event", "button_click", {
//         event_category: "Interaction",
//         event_label: "My Button",
//       });
//     } else {
//       console.log("gtag is not ready yet");
//     }
//   }, []);

//   return (
//     <button
//       onClick={() => {
//         /* your click logic */
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { sendGAEvent } from '@next/third-parties/google';

// export default function EventButton() {
//   const [gaReady, setGaReady] = useState(false);

//   // Check if GA is ready
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.gtag) {
//       setGaReady(true);
//     }
//   }, []);

//   const handleClick = () => {
//     if (gaReady) {
//       sendGAEvent('event', 'buttonClicked', { value: 'xyz' });
//     } else {
//       console.log('GA not ready yet, event not sent.');
//     }
//   };

//   return (
//     <div>
//       <button className="cursor-pointer" onClick={handleClick}>
//         Send Event (Click)
//       </button>
//     </div>
//   );
// }

"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function EventButton() {
  const handleClick = () => {
    // sendGTMEvent safely queues the event. No need to check if GTM is ready!
    sendGTMEvent({ event: "buttonClicked", value: "xyz" });
    if (!sendGTMEvent) {
      console.log("Not working.");
    }
  };

  return (
    <div>
      <button
        className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleClick}
      >
        Send Event (Click)
      </button>
    </div>
  );
}
