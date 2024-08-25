import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import lottie from "astro-integration-lottie";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [lottie(), tailwind(), icon(), react(), mdx()],
});
