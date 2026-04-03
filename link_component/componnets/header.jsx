"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  const isAuthed = false;
  const path = isAuthed ? "/dashboard" : "/about";

  const handleOnNavigate = (e) => {
    const IsAuthenticated = false; // handle Authentication, only authenticated users can route
    if (!IsAuthenticated) {
      alert("You're not logged-In, Login first");
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 gap-10 w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link
          href={"/"}
          className={`link ${pathname === "/" ? "text-blue-500" : ""}`}
        >
          Home
        </Link>
        <Link
          href={{
            pathname: "/about",
            query: { name: "Ali" },
          }}
          // replace
          // scroll={false}
          className={`link ${pathname === "/about" ? "text-blue-500" : ""}`}
        >
          About
        </Link>
        {/*  */}
        <Link
          as="/dashboard"
          href={path}
          // onNavigate={(e) => {
          //   // Only executes during SPA navigation
          //   console.log("Navigating...");
          //   handleOnNavigate();

          //   // Optionally prevent navigation
          //   // e.preventDefault()
          // }}
          className={`link ${pathname === "/dashboard" ? "text-blue-500" : ""}`}
        >
          Dashboard
        </Link>
      </main>
    </div>
  );
};

export default Header;
