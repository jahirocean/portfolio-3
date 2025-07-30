/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                protocol: 'https', 
                hostname: 'images.pexels.com', // The domain name
                // port: '', // Optional: if a specific port is needed
                // pathname: '/path/to/images/**', // Optional: if you want to restrict to specific paths
            },
        ],
    },
};

export default nextConfig;