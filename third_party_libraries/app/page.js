import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <h2>
        Hello Yar! Working with third-party-libraries in Next.JS on the
        16-March-2026{" "}
      </h2>
    </div>
  );
}
