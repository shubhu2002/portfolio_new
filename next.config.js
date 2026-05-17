/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      { hostname: "fmpociaoebgngvtsbqdz.supabase.co" },
      { hostname: "rrbfojudfjqzfcmturcz.supabase.co" },
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "qniqjhhdtnjercjspgst.supabase.co" },
    ],
  },
};

export default config;
