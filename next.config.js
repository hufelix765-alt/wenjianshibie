/** @type {import('next').NextConfig} */
const repoName = "wenjianshibie";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    if (isServer) {
      config.externals = [...(config.externals || []), "tesseract.js"];
    }
    return config;
  },
};

module.exports = nextConfig;
