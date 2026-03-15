import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Remote Image Example</h1>

      <Image
        src="https://images.pexels.com/photos/7358/startup-photos.jpg"
        alt="Startup Workspace"
        width={800}
        height={500}
      />
    </div>
  );
}
