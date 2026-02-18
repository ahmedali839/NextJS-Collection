export const revalidate = 60; // cache entire page for 60 sec

export default function Home() {
  console.log("Rendering Home Page...");

  return (
    <div className="block  p-40 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hi, Yar! let's dive deep to Cache topic </h1>
      <p>
        <b>/: Explains Full route Cache "Entire HTML rendered page" </b> It's
        client page, using current time but not updating on page refresh cause
        this HTML page cached for next 10s {new Date().toISOString()}
      </p>
      <p>
        {" "}
        <b>/dashboard: Explains Data fetch</b> fetching current time from server
        but it cached for 10s, after cached time it'll get current data from
        server
      </p>
      <p>
        {" "}
        <b>/products: Explains route-component cache</b> Navigating to back page
        'already rendered' more smoothness, user feel like not-navigated, not it
        is navigated but fast and smooth
      </p>
    </div>
  );
}
