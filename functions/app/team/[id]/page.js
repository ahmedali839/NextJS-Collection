import { permanentRedirect, redirect, RedirectType } from "next/navigation";

async function fetchMember(id) {
  const memberId = Number(id);
  if (!Number.isInteger(memberId) || memberId <= 0) return undefined;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${memberId}`,
  );
  if (!res.ok) return undefined;

  return res.json();
}

export default async function Page({ params }) {
  const { id } = await params;
  const data = await fetchMember(id);
  if (!data) {
    // permanentRedirect("/login", RedirectType.replace);
    redirect("/login", RedirectType.replace);
  }
  return (
    <>
      <div>
        <h2>Team Member info: </h2>
        <h2>Name: {data.name}</h2>
        <h2>Id: {data.id}</h2>
        <h2>Contact: {data.email}</h2>
        <h2>Address(city): {data.address.city}</h2>
      </div>
    </>
  );
}
