import React from "react";

export const viewport = {
  themeColor: "orange",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// export function generateViewport() {
//   return { themeColor: "orange" };
// }

const Page = () => {
  return (
    <div className="md:text-5xl font-serif justify-center items-center flex min-h-screen">
      ViewPort Page(it's properties only apply to browser. not to UI / pages
    </div>
  );
};

export default Page;
