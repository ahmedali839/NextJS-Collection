import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h3>Home</h3>
      <p>This is not a paragraph ?</p>
      <Link href="/about">About</Link>
    </div>
  );
}
