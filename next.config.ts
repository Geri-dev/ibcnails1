import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow images and static assets from the public folder to display
  images: {
    unoptimized: true,
  },
}

export default nextConfig
