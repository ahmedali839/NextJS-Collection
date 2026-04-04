import { forbidden } from "next/navigation";
import React from "react";

const Page = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    forbidden();
  }

  return <div>Dashboard Page</div>;
};

export default Page;
