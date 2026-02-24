"use client";

import { useEffect, useState } from "react";

export default function C() {
  const [mounted, setMounted] = useState(false);
  const [mounted1, setMounted1] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setMounted1(true);
      }, 2000);
    }
  }, [mounted]);

  return (
    <>
      <div>Component C (client-only). Mounted: {mounted ? "yes" : "no"}</div>
      <div>Component C1 (client-only). Mounted: {mounted1 ? "yes" : "no"}</div>
    </>
  );
}
