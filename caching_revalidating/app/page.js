import Image from "next/image";

export default async function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div className="">
      <h1 className="bg-green-600">Hello Yar </h1>
      <h3>Navigate to:</h3>
      <div className="text-orange-500">
        /cache-checking to see cache working
      </div>

      <div className="text-orange-500">
        /revalidate-checking to see reavalide working
      </div>

      <div className="text-orange-500">
        <h4> Clearly Explained.</h4>
      </div>
    </div>
  );
}
