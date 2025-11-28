/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.format-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'format.creatorcdn.com',
      },
    ],
  },
};

export default nextConfig;
