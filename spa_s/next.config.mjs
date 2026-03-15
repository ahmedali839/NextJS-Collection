/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    loader: "custom",
    loaderFile: "./loaders/pexelsLoader.js"
  }
};

export default nextConfig;