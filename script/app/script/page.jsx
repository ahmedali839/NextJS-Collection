"use client";

import Script from "next/script";

const page = () => {
  return (
    <div>
      <Script id="navbar">
        {`document.getElementById("navbar").classList.add("text-orange-500")`}
      </Script>
      <Script
        // 1. Used a real URL so it actually succeeds
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        // 2. Changed strategy to work inside a page component
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Analytics script failed to load", e);
        }}
        onLoad={() => {
          console.log("Hello Yar! The script loaded successfully.");
        }}
      />
    </div>
  );
};

export default page;
