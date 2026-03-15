export default function pexelsLoader({ src, width, quality }) {
  const url = new URL(src);

  url.searchParams.set("w", width);
  url.searchParams.set("auto", "compress");
  url.searchParams.set("cs", "tinysrgb");

  if (quality) {
    url.searchParams.set("q", quality);
  }

  return url.href;
}