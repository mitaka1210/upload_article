import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // За браузърната среда
        ...globals.node, // За Node.js средата
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Добавяне на Prettier
    plugins: {
      prettier: pluginPrettier,
    },
    env: {
      browser: true, // Ако сте във фронтенд
      node: true, // За Node.js
    },
    rules: {
      // Приложете Prettier като ESLint правило
      "prettier/prettier": "error",
    },
  },
];
