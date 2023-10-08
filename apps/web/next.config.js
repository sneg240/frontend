/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sneg240/ui"],
  compress: false,
  experimental: {
    mdxRs: true,
    /** Disabled until support in turbopack */
    // typedRoutes: true,
    // webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
    // instrumentationHook: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
