"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FreshImage() {
  const [freshSrc, setFreshSrc] = useState("");
  const [freshSrc2, setFreshSrc2] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate unique query param on mount (page refresh) for fresh fetch
    setFreshSrc(`https://picsum.photos/500/300?t=${Date.now()}`);
    setFreshSrc2(`https://picsum.photos/500/300?t=${Date.now()}`);
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <figure>
        <h1>Fresh Image on Refresh</h1>

        <p>Refresh page to see new random image + blur load.</p>
        {freshSrc && (
          <Image
            src={freshSrc}
            alt="Random image"
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
          />
        )}
        <figcaption>A scenic mountain view</figcaption>
      </figure>

      {loading && <p>Loading image...</p>}

      {freshSrc2 && (
        <Image
          src={freshSrc2}
          alt="Random image"
          width={500}
          height={300}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </div>
  );
}
