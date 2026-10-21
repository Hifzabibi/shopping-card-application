import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "https://dummyjson.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

      "/product-cdn": {
        target: "https://cdn.dummyjson.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/product-cdn/, ""),
      },
    },
  },
});