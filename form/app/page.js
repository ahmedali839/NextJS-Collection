import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello Yar..., </h1>

      <h2 className="ml-10">
        {" "}
        "/login" to fill login form and see the code flow in code{" "}
      </h2>
    </div>
  );
}
