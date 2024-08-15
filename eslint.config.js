import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      // "no-unused-vars": "error",
      // "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];