import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Marketing imagery is shipped as static PNGs in /public/assets and used
    // with plain styling, matching the original site (no Image optimization).
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
