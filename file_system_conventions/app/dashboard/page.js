import { forbidden } from "next/navigation";
import React from "react";

const Page = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    forbidden();
  }

  return (
    <>
      <h3>Main Dashboard Content</h3>
      <p>This is the default dashboard page.</p>
    </>
  );
};

export default Page;
