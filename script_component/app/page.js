"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Script from "next/script";

export default function Home() {
  const [afterLoaded, setAfterLoaded] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    const worker = new Worker("/scripts/worker.js");

    worker.postMessage("start");

    worker.onmessage = (event) => {
      const el = document.createElement("div");
      el.innerText = event.data;
      el.style.fontSize = "40px";
      el.style.color = "purple";
      el.style.marginTop = "20px";

      document.body.appendChild(el);
    };
  }, []);

  return (
    <>
      <div>
        <div ref={mapRef}></div>
        <Script
          id="google-maps"
          src="https://maps.googleapis.com/maps/api/js"
          onReady={() => {
            new google.maps.Map(mapRef.current, {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
            });
          }}
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          onLoad={(e) => {
            console.log("Succesfully everything Loaded");
          }}
        />
        <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
          <h1>Next.js Script Strategy Demo</h1>

          <p>Open the browser console to see execution order.</p>
          <p>
            Navigate /freezing_page. Worker strategy. 1B loop performance
            comparison.
          </p>

          {/* Runs BEFORE page becomes interactive */}
          <Script
            src="/scripts/before.js"
            strategy="beforeInteractive"
            onLoad={() => {
              console.log("beforeInteractive loaded");
              setAfterLoaded(true);
            }}
          />

          {/* Runs AFTER page becomes interactive */}
          <Script
            src="/scripts/after.js"
            strategy="afterInteractive"
            onLoad={() => {
              console.log("afterInteractive loaded");
              setAfterLoaded(true);
            }}
          />
          {/* THIRD */}
          <Script src="/scripts/worker.js" strategy="worker" />
          {/* Fourth */}
          <Script src="/scripts/lazy.js" strategy="lazyOnload" />
        </div>
      </div>
    </>
  );
}
