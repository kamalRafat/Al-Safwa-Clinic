import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossy: true, quality: 80 },
      avif: { quality: 60 },
    }),
  ],
  build: {
    target: "esnext", // Use modern JS features for smaller bundles
    minify: "esbuild", // Faster and effective minification
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-f";
            if (id.includes("lucide-react")) return "vendor-u";
            if (id.includes("react")) return "vendor-r";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
