import React from "react";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { slug } = await params;
  if (slug === "crash") {
    throw new Error("This is a simulated crash!"); // This triggers error.js
  }
  if (slug === "notfound") {
    notFound();
  }
  return (
    <div>
      <h1>HEllo Yar, you entered in URL: {slug}</h1>
    </div>
  );
};

export default page;
