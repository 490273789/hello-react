import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importOrder from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsEslint from "typescript-eslint";

const baseConfig = [
  { ignores: ["dist", "build", "src/assets", "public", "node_modules/**"] },
  {
    files: ["**/*.{ts,tsx,js}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      import: importOrder,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js 内置模块
            "external", // npm 包
            "internal", // 内部别名路径 (@/...)
            "parent", // 父级目录导入 (../)
            "sibling", // 同级目录导入 (./)
            "index", // 当前目录 index
            "object", // object imports
            "type", // 类型导入
          ],
          pathGroups: [
            // React 相关包优先级最高
            { pattern: "react", group: "external", position: "before" },
            { pattern: "react-**", group: "external", position: "before" },
            // 内部路径分组，按功能模块排序
            {
              pattern: "@/components/**",
              group: "internal",
              position: "before",
            },
            { pattern: "@/hooks/**", group: "internal", position: "before" },
            { pattern: "@/utils/**", group: "internal", position: "after" },
            { pattern: "@/services/**", group: "internal", position: "after" },
            { pattern: "@/store/**", group: "internal", position: "after" },
            { pattern: "@/types/**", group: "internal", position: "after" },
            { pattern: "@/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always", // 分组之间添加空行
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true, // 对未分组的导入发出警告
        },
      ],
    },
  },
];

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...baseConfig,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
