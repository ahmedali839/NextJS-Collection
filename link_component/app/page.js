"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./componenets/nav";
import Form from "./componenets/form";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h3>Home</h3>

      <div>
        <Nav />
        <main>
          <h1>Welcome to the Dashboard</h1>
          <Form />
        </main>
      </div>
    </div>
  );
}
