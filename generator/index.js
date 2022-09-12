module.exports = api => {
    api.render('./template')
    
    api.extendPackage({
        // 向项目中添加额外的依赖
        // dependencies:{
        //     // css相关的依赖
        //     "less-loader": "4.1.0",
        //     "stylus-loader": "3.0.2",
        // },
        // devDependencies: {
        //     // storybook相关的依赖
        //     "@babel/core": "7.19.0",
        //     "@storybook/addon-actions": "6.5.10",
        //     "@storybook/addon-essentials": "6.5.10",
        //     "@storybook/addon-interactions": "6.5.10",
        //     "@storybook/addon-links": "6.5.10",
        //     "@storybook/builder-webpack5": "6.5.10",
        //     "@storybook/manager-webpack5": "6.5.10",
        //     "@storybook/testing-library": "0.0.13",
        //     "@storybook/vue": "6.5.10",
        //     "babel-loader": "8.2.5",
        //     "vue-loader": "15.10.0",
        //     // css相关的依赖
        //     "postcss-loader": "2.1.4",
        //     // 创建模板相关的依赖
        //     "plop": "3.1.1",

        // },
        // // 添加新的 npm 任务到项目中
        // scripts: {
        //     "create": "plop --force",
        //     // storybook 启动
        //     "sb": "start-storybook -p 6006",
        //     // storybook 构建
        //     "sb-build": "build-storybook"
        // }
    })
}