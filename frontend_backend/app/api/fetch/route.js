export async function Data() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  const data = await response.json();

  if (!data.ok) {
    return [];
  }

  return data ? data[0] : [];
}
