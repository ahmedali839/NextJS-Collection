import React, { Suspense } from "react";

export default async function Page({ params }) {
  return (
    <div>
      <h2>JSONPlaceHolder APIs</h2>
      <p>The detialed about them is below: </p>
      <Suspense fallback={<p>Loading...</p>}>
        <Content params={params} />
      </Suspense>
    </div>
  );
}

export async function Content({ params }) {
  const slug = Array.isArray((await params)?.slug)
    ? (await params)?.slug[0]
    : (await params)?.slug;
  if (!slug) {
    return (
      <div>
        <h2>Please provide a slug, to see specific user.</h2>
      </div>
    );
  }
  const post = await GetPost(slug);

  return (
    <div>
      <div>
        <h2>Name: {post.name}</h2>
        <h5>
          Contact: <span className="text-blue-500">{post.phone}</span> /{" "}
          <span className="text-blue-500">{post.email}</span>{" "}
        </h5>
      </div>
    </div>
  );
}

export async function GetPost(slug) {
  "use cache"; // Comment it, to see every browser refresh takes 3s to load

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`https://jsonplacehodlder.typicode.com/users/${slug}`);
  const post = await res.json();
  console.log("Hitted the fetch request");

  return post;
}
