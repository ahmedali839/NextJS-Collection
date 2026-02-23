// "use client";

// import { useState, useOptimistic } from "react";

// export default function Signup() {
//   const [count, setCount] = useState(0);

//   const [optimisticCount, setOptimisticCount] = useOptimistic(
//     count,
//     (prevCount, newCount) => [...prevCount, newCount],
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setOptimisticCount(optimisticCount + 1);

//     fetch("/api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ count: optimisticCount + 1 }),
//     }).catch((err) => {
//       console.error(err);
//       // revert the optimistic state when error
//       setOptimisticCount(optimisticCount - 1);
//     });
//   };

//   return (
//     <div>
//       <h1>Signup Page</h1>
//       <p>Count: {optimisticCount}</p>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }




"use client";

import { useState, useOptimistic, startTransition } from "react";

export default function Signup() {
  const [count, setCount] = useState(0);

  const [optimisticCount, addOptimistic] = useOptimistic(
    count,
    (currentState, value) => currentState + value
  );

  const handleSubmit = async () => {
    // ✅ Optimistically increase immediately inside a transition
    startTransition(() => {
      addOptimistic(1);
    });

    try {
      // simulate slow server
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // ✅ update real state after success
      setCount((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <p>Count: {optimisticCount}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}