export default async function CachePage() {
  // 1. Fetch data with 'force-cache' (Default in Next.js)
  // We use a random number API to prove it doesn't change
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new",
    {
      cache: "force-cache", // explicitly tells Next.js to cache this forever
      //   next: { revalidate: 5 }, // un-comment it, to see cache lists refreshes and cause to change the number from cache's memory
    },
  );

  const randomNumber = await res.text();
  const time = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: "50px" }}>
      <h1>🔒 Caching Demo</h1>
      <p>
        This number should <strong>STAY THE SAME</strong> even if you refresh.
      </p>

      <div style={{ fontSize: "30px", fontWeight: "bold", color: "blue" }}>
        Random Number: {randomNumber}
      </div>
      <p>Fetched at: {time}</p>
    </div>
  );
}
