import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importOrder from "eslint-plugin-import";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsEslint from "typescript-eslint";

const baseConfig = [
  { ignores: ["dist", "build", "node_modules/**"] },
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
      "react-refresh": reactRefresh,
      import: importOrder,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "warn",
        {
          //按照分组顺序进行排序
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "internal",
            "object",
            "type",
          ],
          //通过路径自定义分组
          pathGroups: [
            {
              pattern: "react*", //对含react的包进行匹配
              group: "builtin", //将其定义为builtin模块
              position: "before", //定义在builtin模块中的优先级
            },
            {
              pattern: "@/components/**",
              group: "parent",
              position: "before",
            },
            {
              pattern: "@/utils/**",
              group: "parent",
              position: "after",
            },
            {
              pattern: "@/service/**",
              group: "parent",
              position: "after",
            },
          ],
          //将react包不进行排序，并放在前排，可以保证react包放在第一行
          pathGroupsExcludedImportTypes: ["react"],
          // 'newlines-between': 'always', //每个分组之间换行
          //根据字母顺序对每个组内的顺序进行排序
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
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
  // eslintPluginPrettierRecommended,
];
