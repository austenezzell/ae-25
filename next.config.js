/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae-25.vercel.app',
      },
    ],
    unoptimized: false,
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig; 