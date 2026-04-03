"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const ArrayForQuery = [
  {
    id: 1,
    name: "Ahmed",
    title: "Software Engineeer",
  },
  {
    id: 2,
    name: "Ali",
    title: "QA teams",
  },
  {
    id: 3,
    name: "Aqib",
    title: "Manager",
  },
];

function PageContext() {
  const params = useSearchParams();
  const searchName = params.get("name");

  const foundItem = ArrayForQuery.find((item) => item.name === searchName);

  return (
    <>
      <div>
        <h1>
          Searched for:{" "}
          <span className="text-blue-600"> {searchName} </span>{" "}
        </h1>
        {foundItem ? (
          <div>
            <h2>ID: {foundItem.id}</h2>
            <h5>Name: {foundItem.name}</h5>
            <p>Title: {foundItem.title}</p>
          </div>
        ) : (
          <p>Value not found for: {searchName || "Name not provided"} </p>
        )}
      </div>
    </>
  );
}

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PageContext />
    </Suspense>
  );
}
