import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Use modern JS features for smaller bundles
    minify: "esbuild", // Faster and effective minification
    cssMinify: true,
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-ui": ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
