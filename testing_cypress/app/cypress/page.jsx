"use client";

import React from "react";

export default function Page() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
