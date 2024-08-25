import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import lottie from "astro-integration-lottie";
import mdx from "@astrojs/mdx";
import remarkCodeTitles from "remark-code-titles";
import { remarkReadingTime } from "./remark-reading-time";
import rehypeExpressiveCode from 'rehype-expressive-code';

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
import expressiveCode from "astro-expressive-code";
const rehypeExpressiveCodeOptions = {
  // You can add configuration options here
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkCodeTitles],
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
    extendDefaultPlugins: true
  },
  integrations: [expressiveCode({
    themes:['material-theme-darker']
  }), lottie(), tailwind(), icon({
    include: {
      "ant-design": ["*"],
      uil: ["*"],
      mdi: ["*"]
    }
  }), react(), mdx()]
});