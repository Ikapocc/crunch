/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source : "/genres",
      destination : "/",
      permanent : true
    }]
  },
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };

export default nextConfig;
