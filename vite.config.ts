import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    vike(),
    mdx(),
    react({}),
    tailwindcss(),
  ],
  build: {
    target: "es2022",
  },
});
