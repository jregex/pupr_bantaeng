/** @type {import('next').NextConfig} */
const nextConfig = {
    runtime: 'nodejs',
    images: {
        domains: ['ticketorder.site'],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
