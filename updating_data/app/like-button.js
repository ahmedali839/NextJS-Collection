"use client";

import { incrementLike } from "./action";
import { useState } from "react";

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  console.log(likes);
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike();
          setLikes(updatedLikes);
        }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Like
      </button>
    </>
  );
}
