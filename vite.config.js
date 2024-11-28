import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // drop console and debugger in production
  terserOptions: {
    compress: {
      // otomatis
      drop_console: true,
      drop_debugger: true,
    },
  },
  build: {
    minify: "esbuild", // mendukung tree shaking, untuk minification (otomatis)
  },
});
