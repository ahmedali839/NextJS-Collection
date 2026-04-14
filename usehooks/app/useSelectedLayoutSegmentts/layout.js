import React from "react";

export const metadata = {
  title: "Outer setting title",
  // description: "It's outer setting description",
  description: "@a | It's outer setting description",
};

const layout = ({ children }) => {
  return (
    // this is separate layout for route("setting")
    <div>{children}</div>
  );
};

export default layout;
