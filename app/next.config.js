/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cf.shopee.vn', 'deo.shopeemobile.com', 'dummyjson.com'],
  },
}

module.exports = nextConfig
