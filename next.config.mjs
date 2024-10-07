/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io",
    ],
  },
};

export default nextConfig;
