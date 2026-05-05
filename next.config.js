const path = require("path");

const nextConfig = {
  experimental: {},
  images: {
    qualities: [25, 50, 75, 88, 32],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wltzasxcaoajcymrivml.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
