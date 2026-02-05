// import { getFetchData } from "@/app/lib/getFetchData";

export async function getData() {
  const response = await fetch(`http://localhost:3000/api/fetch`);
  console.log(response);

  if (!response.ok) {
    throw new Error("Faileded to fetch data");
  }

  const data = await response.json();

  return data.data;
}


export default async function Home() {
  const data = await getData();

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
