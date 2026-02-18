export const revalidate = 60; // cache entire page for 60 sec

export default function Home() {
  console.log("Rendering Home Page...");

  return (
    <div className="block  p-40 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hi, Yar! let's dive deep to Cache topic </h1>
      <p className="m-5">
        <b>
          /: Explains Full route Cache "Entire HTML rendered page" Only work in
          production mode not npm run dev{" "}
        </b>{" "}
        Actually It's client page, using current time but not updating on page
        refresh cause this HTML page cached for next 10s:{" "}
        {new Date().toISOString()}
      </p>
      <p className="m-5">
        {" "}
        <b>/dashboard: Explains Data fetch </b> Fetching current time from
        server but it cached for 10s, after cached time it'll get current data
        from server
      </p>
      <p className="m-5">
        {" "}
        <b>/products: Explains route-component cache</b> Navigating to back page
        'already rendered' more smoothness, user feel like not-navigated, but it
        is navigated but fast and smooth
      </p>
    </div>
  );
}
