/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "placehold.co",
      "openai.com",
      "www.anthropic.com",
      "nlp-eb.cdn.bcebos.com",
      "www.gstatic.com",
      "www.perplexity.ai",
      "www.moonshot.cn",
      "www.notion.so",
      "assets-global.website-files.com",
      "rytr.me",
      "www.midjourney.com",
      "stability.ai",
      "www.adobe.com",
      "runwayml.com",
      "fliki.ai",
      "assets-global.website-files.com",
      "www.synthesia.io",
      "elevenlabs.io",
      "murf.ai",
      "www.resemble.ai",
      "github.githubassets.com",
      "cursor.sh",
      "www.tabnine.com",
      "aws.amazon.com",
      "cdn.prod.website-files.com",
      "tome.app",
      "www.beautiful.ai",
      "gamma.app",
      "mem.ai",
      "otter.ai",
      "www.dropbox.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/favicon.png",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/images/favicon.ico",
      },
    ],
  },
};

export default nextConfig;
