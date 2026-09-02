/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The legacy Resend package bundles an ESM renderer incompatible with React 18.2.
    serverComponentsExternalPackages: ["resend"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.app.goo.gl",
      },
    ],
  },
};

module.exports = nextConfig;
