import { cacheLife, cacheTag } from "next/cache";
import { getProcessedMedia, refreshMediaHubCache } from "../lib/actions";
import Image from "next/image";
import RefreshButton from "../lib/RefreshButton";

export default async function GalleryContent() {
  "use cache";
  cacheLife("days");
  cacheTag("media-hub");

  const photos = await getProcessedMedia();
  console.log(photos);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div
          key={photo}
          className="border rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <div className="relative h-48 w-full">
            <Image
              src={photo.url}
              alt={photo.theme}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-4">
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full uppercase font-bold">
              {photo.aiCategory}
            </span>
            <p className="text-xs text-gray-400 mt-2">{photo.processedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
