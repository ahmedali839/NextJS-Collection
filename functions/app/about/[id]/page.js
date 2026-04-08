import React, { Suspense } from "react";

export const metadata = {
//   title: {
    // absolute: "About",
//   },
  title: "About",
};

export default function About({ params }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ParamsFunc params={params} />
      </Suspense>
    </div>
  );
}

export async function ParamsFunc({ params }) {
  const { id } = await params;
  return <div>About Page, Params: {id}</div>;
}
