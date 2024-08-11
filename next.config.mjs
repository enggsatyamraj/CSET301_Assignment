/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/blogs-banner/:image*", // Match all images under the blogs-banner folder
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for one year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
