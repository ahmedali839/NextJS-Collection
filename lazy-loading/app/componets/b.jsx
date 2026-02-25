// "use client";

// export default function B() {
//   return <div>Component B (loaded when you click Toggle)</div>;
// }

"use client";

import { useEffect, useState } from "react";

export default function B() {
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
      <div>
        Component B (loaded when you click Toggle). Mounted:{" "}
        {mounted ? "yes" : "no"}
      </div>
      <div>
        Component B (loaded when you click Toggle). Mounted:{" "}
        {mounted1 ? "yes" : "no"}
      </div>
    </>
  );
}
