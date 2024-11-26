/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

export default nextConfig;
