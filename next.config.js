/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const repoName = "wenjianshibie";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  webpack: (config, { isServer, dev }) => {
    config.resolve.alias.canvas = false;
    if (isServer) {
      config.externals = [...(config.externals || []), "tesseract.js"];
    }
    // GitHub Pages 常只上传 index.html；合并 JS 分块便于内联成单文件
    if (isGithubPages && !isServer && !dev) {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
