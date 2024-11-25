import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/static/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);