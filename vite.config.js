import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), imagetools()],
  base: "/portfolio/", // for git published website
});
