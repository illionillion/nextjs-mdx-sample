// next.config.mjs (notice the filename change)

import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
};

// Merge MDX config with Next.js config
export default withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, this configuration remains the same.
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})(nextConfig);