import { Suspense } from "react";

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      { cache: "no-cache" },
    );
    if (!response.ok) {
      return new Error("Failed to fetch data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetch: ", error);
    return null;
  }
}

export async function FetchData() {
  const data = await fetchData();

  if (!data) {
    return <div>Data not found</div>;
  }
  return (
    <div className="flex-col">
      <h2>userId: {data.userId}</h2>
      <h2>Username: {data.title}</h2>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex justify-center items-center py-auto m-auto">
      <h2 className="font-extrabold text-3xl mt-20">Hello Yar!</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
}
