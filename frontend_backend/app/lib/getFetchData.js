export async function getFetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");

  if (!response.ok) {
    return [];
  }
  const data = await response.json();

  return data ? data : [];
}
export async function getFetchData2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/4");

  if (!response.ok) {
    throw new Error("Failed to fetch data"); // better to throw here
  }
  const data = await response.json();

  return data ? data : [];
}
