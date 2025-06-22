// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: { AudioWorkletGlobalScope: true, "window": true, "document": true, "navigator": true} } },
  tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
      env: {
        browser: true, // Specify that the code will run in the browser
      },
      rules: {
        'react/react-in-jsx-scope': 'off', // Disable the rule for React in JSX scope
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
