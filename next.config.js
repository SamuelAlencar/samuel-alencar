/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.app.goo.gl",
      },
    ],
  },
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
