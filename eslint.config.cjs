const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const astroParser = require("astro-eslint-parser");
const eslintPluginAstro = require("eslint-plugin-astro");

module.exports = defineConfig([
  // Global recommended JavaScript rules
  js.configs.recommended,

  // Astro files
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser, // nested parser for TypeScript inside Astro
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro: eslintPluginAstro,
    },
    rules: {
      // Keep rules light, only warn
      "no-unused-vars": "warn",
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // <--- recommended rules directly
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
