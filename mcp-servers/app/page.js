// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     if (!input.trim()) return;

//     setLoading(true);
//     setOutput("Thinking...");

//     try {
//       const res = await fetch("/api/ai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await res.json();
//       setOutput(JSON.stringify(data, null, 2));
//     } catch (error) {
//       setOutput(`Error: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex w-full max-w-3xl flex-col items-center justify-between py-16 px-8 bg-white dark:bg-zinc-900 rounded-xl shadow-lg sm:items-start">
//         <h2 className="text-xl font-bold mb-4 dark:text-white">
//           Hey Yarr..., let's learn Tool Calling (Foundation of MCP) in Next.js!
//         </h2>
//         <h4 className="text-gray-600 dark:text-gray-300 mb-6">
//           Ask "What time is it?" The Gemini AI will detect the intent, call your
//           backend getTime() function, and return the response.
//         </h4>

//         <div className="flex gap-4 w-full mb-8">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 p-2 border rounded text-black"
//             placeholder="Ask about the time..."
//             onKeyDown={(e) => e.key === "Enter" && askAI()}
//           />
//           <button
//             onClick={askAI}
//             disabled={loading}
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//           >
//             {loading ? "Asking..." : "Ask"}
//           </button>
//         </div>

//         <pre className="w-full bg-gray-100 dark:bg-black text-sm p-4 rounded overflow-auto dark:text-green-400">
//           {output || "Output will appear here..."}
//         </pre>
//       </main>
//     </div>
//   );
// }

export default function HomePage() {
  // thisIsABrokenVariableThatDoesNotMakeSense; // Add this line!
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Next.js 16 MCP Test",
    description: "A test page for Next.js 16 MCP Server capabilities.",
  };

  // A simple server action for the agent to discover
  async function myServerAction(formData) {
    "use server";
    const name = formData.get("name");
    console.log(`Development Log: Server action triggered by ${name}`);
  }

  // A deliberate error you can ask your agent to diagnose
  // Uncomment the line below to test the get_errors tool
  // const triggerError = undefinedVariable;

  return (
    <main style={{ padding: "2rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Next.js 16 MCP Test</h1>
      <form action={myServerAction}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Trigger Server Action</button>
      </form>
    </main>
  );
}

// // // Before adding JSON-ID
// {"success":true,"port":3000,"toolName":"get_project_metadata","result":{"content":[{"type":"text","text":"{\"projectPath\":\"C:\\\\Users\\\\sania\\\\Downloads\\\\code\\\\Projects\\\\NextS_Learning\\\\mcp-servers\",\"devServerUrl\":\"http://localhost:3000\"}"}]}}

// // // After adding JSON-ID
// {"success":true,"port":3000,"toolName":"get_project_metadata","result":{"content":[{"type":"text","text":"{\"projectPath\":\"C:\\\\Users\\\\sania\\\\Downloads\\\\code\\\\Projects\\\\NextS_Learning\\\\mcp-servers\",\"devServerUrl\":\"http://localhost:3000\"}"}]}}
