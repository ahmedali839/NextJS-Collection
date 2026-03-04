/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true, // This is the "On" switch
  },
};

module.exports = nextConfig;