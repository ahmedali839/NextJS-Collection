"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(!window.navigator.onLine);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    async function fetchData() {
      try {
        const res = await fetch("/api");
        if (!res.ok) {
          throw new Error("Fetch Failed.");
        }

        const data = await res.json();
        validateResponse(data);
        setMessage(data.message ?? "Message not found");
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <div>Request Page: {message}</div>
      {isOffline && <div>You're Offlie.</div>}
    </>
  );
}

function validateResponse(data) {
  if (!data || typeof data.message !== "string") {
    throw new Error("Invalid API Response");
  }

  return data;
}
