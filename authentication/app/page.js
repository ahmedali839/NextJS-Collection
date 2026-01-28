import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="p-24">
        <h1>Next.js Custom JWT + MongoDB</h1>
        <p>
          {" "}
          <Link href={"/signup"} />
          Signup |
          <Link href={"/login"} />
          Login |
          <Link href={"/dashboard"} />
          Dashboard |
        </p>
      </main>
    </div>
  );
}
