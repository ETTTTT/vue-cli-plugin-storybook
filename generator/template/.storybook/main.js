const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.styl(us)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, '../src'),
      }
    );

    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '../src'),
    });
    return config;
  },
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
  features: {
    postcss: false,
    storyStoreV7: true
  },
};
