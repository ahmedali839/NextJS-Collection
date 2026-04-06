import { cookies } from "next/headers";
import React, { Suspense } from "react";

async function GetCookies() {
  const cookieStore = await cookies();

  const cookieData = cookieStore.get("auth");

  return (
    <div>
      <h5>
        Cookies of "{cookieData?.name}": "{cookieData?.value}"
      </h5>
    </div>
  );
}

async function SetCookies() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set("auth2", "auth222");

  console.log(cookieStore.getAll());
}
export default async function Page() {
  return (
    <div>
      <h2>Cookies Example</h2>

      <form action={SetCookies}>
        <button className="border border-amber-400" type="submit">
          Set Cookie
        </button>
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <GetCookies />
      </Suspense>
    </div>
  );
}
