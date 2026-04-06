const path = require("path");

const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
    resolveAlias: {
      // Ensure tailwindcss resolves from your project, not parent
      tailwindcss: path.resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
  images: {
    qualities: [25, 50, 75, 88],
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
