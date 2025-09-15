/** @type {import('next').NextConfig} */
const nextConfig = {

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
