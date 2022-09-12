const path = require('path');

module.exports = {
  // 用来描述你的故事相对于配置文件的位置，从默认的配置可以知道，故事的文件名称格式为：*.stories.js。
  stories: [
    './Introduction.stories.mdx', 
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // 引入的插件
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '../src'),
    });
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    });
    return config;
  },
};
