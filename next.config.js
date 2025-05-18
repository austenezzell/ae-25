/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae-25.vercel.app',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 