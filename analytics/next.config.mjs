/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Anything you call at /api/external/* will be proxied to JSONPlaceholder
      {
        source: "/api/external/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*",
      },
    ];
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
