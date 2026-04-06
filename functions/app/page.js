export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900 sm:px-10">
      <main className="mx-auto w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Functions Module - Quick Route Guide
        </h1>
        <p className="mt-2 text-zinc-600">
          Short reference for what each route does and which problem it solves.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">How to run</h2>
          <p className="mt-2 text-zinc-700">npm install ; npm run dev</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Route map</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
            <li>/ : Home route. Problem solved: gives a fast project index.</li>
            <li>/dashboard : Uses cacheLife + cacheTag + Suspense. Problem solved: reduce repeated fetch cost and handle slow data with loading UI.</li>
            <li>/cookies : Reads and sets cookies with server actions. Problem solved: keep lightweight auth/session data per user.</li>
            <li>/posts/[id] : Dynamic post page using after() to log views. Problem solved: run background analytics after response.</li>
            <li>/unstable_cacheError : Compares normal vs cached function error behavior. Problem solved: understand how caching changes failure patterns.</li>
            <li>/api/log (POST) : Stores post view logs in MongoDB. Problem solved: persistent analytics tracking.</li>
            <li>/api (GET) : Basic API route example. Problem solved: demonstrates route handler shape.</li>
          </ul>
        </section>

        <p className="mt-8 text-sm text-zinc-500">
          If you come back after months, read this page first, then open the route you need.
        </p>
      </main>
    </div>
  );
}
