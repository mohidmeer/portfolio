/** @type {import('next').NextConfig} */
const nextConfig = {

    basePath: "/portfolio",   // 👈 match your repo name
    assetPrefix: "/portfolio/",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mohidmeer.github.io',
                port: '',
                pathname: '/**',
              },
        ]
    }
};

export default nextConfig;
