import Data from "/api/fetch";

export default async function Home() {
  const data = await Data();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello, Yar!</h1>
      {data.name}
    </div>
  );
}
