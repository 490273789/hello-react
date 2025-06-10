// import { browserslistToTargets } from 'lightningcss';
import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint2";
// import browserslist from 'browserslist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 以命令行的方式展示出代码中的规范问题，并能够直接定位到原文件。
    eslint(),
    tailwindcss(),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vandor";
          }
        },
      },
    },
  },
  // css相关配置
  css: {
    modules: {
      // name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },

  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "src/assets"),
      "@components": path.join(__dirname, "src/components"),
    },
  },
});
