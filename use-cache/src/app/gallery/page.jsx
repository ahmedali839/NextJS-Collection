import { Suspense } from "react";
import GalleryContent from "./galleryContent";
import RefreshButton from "../lib/RefreshButton";

export default function GallerPage() {
  return (
    <main className="p-10 bg-zinc-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-black font-sans text-5xl text-center font-bold">
          AICY Digital Media Hub
        </h1>
        <p className="text-gray-500">Cached Image Meta-Data & AI Analysis</p>
      </header>

      {/* The Loading state ensures the user isn't starting at a blank and its' manadatory for async functions as well */}
      <Suspense
        fallback={
          <div>
            {[1, 2, 3].map((i) => (
              <div
                key={`loading-${i}`}
                className="h-64 bg-gray-200 animate-pulse rounded-xl"
              />
            ))}
          </div>
        }
      >
        <GalleryContent />
        <RefreshButton />
      </Suspense>
    </main>
  );
}
