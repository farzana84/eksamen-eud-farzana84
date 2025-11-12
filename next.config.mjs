/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:
      process.env.NODE_ENV === "development"
        ? [
            // Development Pattern
            {
              protocol: "http",
              hostname: "localhost", 
              port:"4000" , // local development server port
              pathname: "/**",
            },
          ]
        : [
            // Production Pattern
            {
              protocol: "https",
              hostname: "swaphub-api.onrender.com",
              pathname: "/**",
            },
          ],
  },
};

export default nextConfig;
