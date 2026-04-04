/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
