import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site:"https://nardiyansah-tj.github.io",
  base: '/nardiyansah-tj',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
