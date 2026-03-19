"use client";

import { sendGTMEvent, YouTubeEmbed } from "@next/third-parties/google";

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

      <div className="flex justify-center items-center">
        <YouTubeEmbed
          videoid="ogfYd705cRs"
          width={600}
          height={600}
          params="control=1"
        />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8YHBJdPK6eY?si=qvMQF0S_lY4W4nFm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
