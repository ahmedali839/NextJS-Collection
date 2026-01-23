export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-10">
      <h1 className="text-2xl font-bold mb-4">Hello Yar,</h1>

      <h3 className="w-full text-center mb-2">
        Navigate to check how it's working:
      </h3>

      <h4 className="w-full text-center">
        /error-checking/crash --to-- to see error.js(custom error UI) <br />
        /error-checking/notfound --to-- see the not-found.js(notfound error UI){" "}
        <br />
        these are built-in next.js files handled.
      </h4>
    </div>
  );
}
