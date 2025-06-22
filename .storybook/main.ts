import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],
  "webpackFinal": async (config) => {
  if (!config.resolve) {
    config.resolve = {};
  }
  config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json"
      })
    ];
    return config;
  }
};

export default config;