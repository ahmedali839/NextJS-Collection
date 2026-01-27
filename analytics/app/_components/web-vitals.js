"use client";

import { useReportWebVitals } from "next/web-vitals";

// Keep a stable function reference to avoid duplicated reporting
function postWebVitals(metric) {
  // 1) See it in browser DevTools
  console.log("[WebVitals metric]", metric);

  // 2) Send to any endpoint (here: your Next.js backend route handler)
  const body = JSON.stringify({
    ...metric,
    page: window.location.pathname,
    ts: Date.now(),
  });

  const url = "/api/vitals";

  // Use sendBeacon if available; otherwise fall back to fetch(keepalive)
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, {
      method: "POST",
      body,
      keepalive: true,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export function WebVitals() {
  useReportWebVitals(postWebVitals);
  return null;
}
