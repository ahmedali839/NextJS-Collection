export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await res.json();

  return data;
}
