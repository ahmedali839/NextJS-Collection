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
  const handleMouse = () => {
    // sendGTMEvent safely queues the event. No need to check if GTM is ready!
    sendGTMEvent({ event: "buttonMoused", value: "abc" });
    if (!sendGTMEvent) {
      console.log("Not working.");
    }
  };

  return (
    <div>
      <button
        className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleClick}
        onMouseEnter={handleMouse}
      >
        Send Event (Click)
      </button>
    </div>
  );
}
