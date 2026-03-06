import bundleAnalyzer from '@next/bundle-analyzer';

// This checks if we passed the "ANALYZE=true" command
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you had any other config options (like images, domains), they stay here
};

// We wrap the config and export it
export default withBundleAnalyzer(nextConfig);