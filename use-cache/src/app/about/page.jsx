import { Suspense } from "react";
import AboutContent from "./AboutContent";
import { refreshAboutCache } from "../lib/actions";

export default function About() {
  return (
    <main className="p-10 font-sans">
      <h2 className="text-2xl font-bold">About Us</h2> // function

      <Suspense fallback={<p>Loading...</p>}>
        <AboutContent />
      </Suspense>

      <form action={refreshAboutCache} className="mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Force Refresh Cache (revalidateTag)
        </button>
      </form>
    </main>
  );
}
