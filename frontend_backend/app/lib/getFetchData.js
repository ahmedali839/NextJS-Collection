export async function getFetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  
  if (!response.ok) {
      return [];
    }
    const data = await response.json();

  return data ? data : [];
}
