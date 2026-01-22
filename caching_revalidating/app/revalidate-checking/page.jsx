export default async function RevalidatePage() {
  // 1. Fetch data with 'next: { revalidate: 5 }'
  // This means: "Cache this for 5 seconds, then update it."
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new",
    {
      next: { revalidate: 20 }, // 5 seconds
      // cache: "no-cache", // un-comment to see the nextJs will not cache the above fetch data, so, it's changing on every request
    },
  );

  const randomNumber = await res.text();
  const time = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: "50px" }}>
      <h1>⏱️ Revalidation Demo (5 Seconds)</h1>
      <p>Refresh quickly: Number stays same.</p>
      <p>Wait 5s and refresh: Number changes.</p>

      <div style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}>
        Random Number: {randomNumber}
      </div>
      <p>Fetched at: {time}</p>
    </div>
  );
}
