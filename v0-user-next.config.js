/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  trailingSlash: true,
}

module.exports = nextConfig

