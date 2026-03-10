/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig
