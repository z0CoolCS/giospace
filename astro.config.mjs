import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant


// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  integrations: [
    tailwind(),
    mdx(), sitemap()
  ],
    markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    }
});