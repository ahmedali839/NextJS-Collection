/** @type {import('next').NextConfig} */
const nextConfig = {
  // No experimental key needed here anymore!
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
