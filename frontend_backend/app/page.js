// import { Data } from "./lib/getFetchData";

// export default async function Home() {
//   const data = await Data();

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <h1>Hello, Yar! </h1> <br /> {data.name}
//     </div>
//   );
// }


// File: app/page.js
import { getFetchData } from "@/app/lib/getFetchData"; 
// Note: "@/app" is an alias that points to your root app folder

export default async function Home() {
  // Call the function directly (Server Component capability)
  const data = await getFetchData();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4">Hello, Yar!</h1>
        
        {/* Check if we actually have data to display */}
        {data && data.name ? (
          <div className="p-4 border rounded shadow-md">
            <p className="text-xl">User: {data.name}</p>
            <p className="text-gray-500">Email: {data.email}</p>
          </div>
        ) : (
          <p className="text-red-500">No user data found.</p> // df
        )}
      </main>
    </div>
  );
}
