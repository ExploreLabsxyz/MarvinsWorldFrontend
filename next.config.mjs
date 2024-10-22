/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Wildcard to allow any hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  