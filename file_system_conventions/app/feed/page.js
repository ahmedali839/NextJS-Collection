import Link from "next/link";
import { photos } from "../../lib/photos";

export default function Feed() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Photo Feed</h1>

      {photos.map((photo) => (
        <div key={photo.id} style={{ margin: 20 }}>
          <Link href={`/photo/${photo.id}`}>Open Photo {photo.id}</Link>
        </div>
      ))}
    </div>
  );
}