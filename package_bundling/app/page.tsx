export default function Home() {
  return (
    <div className="mx-auto justify-center items-center">
      <h1 className="block w-screen">
        Run the `npx next experimental-analyze` in terminal to view it's
        bundle analyzer UI{" "}
      </h1>
      <br />
      <h2 className="block w-screen">
        Another Alternative is to run `npm run analyze` so, it'll redirect
        next.js default webpack to see it's performance.
      </h2>
    </div>
  );
}
