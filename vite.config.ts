// import { browserslistToTargets } from 'lightningcss';
import path from "path"
import eslint from "@nabla/vite-plugin-eslint"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
// import browserslist from 'browserslist';

// https://vitejs.dev/config/
export default defineConfig({
  // css相关配置
  css: {
    modules: {
      // name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    }
  },
  plugins: [
    react(),
    // 以命令行的方式展示出代码中的规范问题，并能够直接定位到原文件。
    eslint()
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "src/assets"),
      "@components": path.join(__dirname, "src/components")
    }
  }
})
