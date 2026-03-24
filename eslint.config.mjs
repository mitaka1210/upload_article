import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. Глобални игнорирания (трябва да са в самостоятелен обект без други ключове)
  {
    ignores: [
      "**/node_modules/",
      "server/node_modules/",
      "build/",
      "server/build/",
      "dist/",
      "**/*.log",
      "assets/",
      "docs-AI/",
    ],
  },
  // 2. Основна конфигурация
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    // Добавяме това, за да оправим Warning-а от скрийншота ти
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // Обикновено е нужно за нови React версии
    },
  },
];
