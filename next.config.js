/** @type {import('next').NextConfig} */
const nextConfig = {
    runtime: 'nodejs',
    images: {
        domains: ['localhost'],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
