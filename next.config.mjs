/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "https://visota13.ru/api",
    // BACK_URL: "https://visota13.ru",
    // BASE_URL: "http://localhost:3000",
    // SITE_URL: "https://visota13.ru",

    BI_SCRIPT_PREFIX: "bi_script_",

    API_URL: "http://localhost:8000/api",
    BACK_URL: "http://localhost:8000",
    SITE_URL: "http://localhost:3000",
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "visota13.ru",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
