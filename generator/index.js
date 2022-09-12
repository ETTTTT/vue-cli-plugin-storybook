module.exports = api => {
    api.render('./template')
    
    api.extendPackage({
        // 向项目中添加额外的依赖
        dependencies:{
        },
        devDependencies: {
            // storybook相关的依赖
            "@babel/core": "7.19.0",
            "@storybook/addon-actions": "6.5.10",
            "@storybook/addon-essentials": "6.5.10",
            "@storybook/addon-interactions": "6.5.10",
            "@storybook/addon-links": "6.5.10",
            "@storybook/builder-webpack5": "6.5.10",
            "@storybook/manager-webpack5": "6.5.10",
            "@storybook/testing-library": "0.0.13",
            "@storybook/vue": "6.5.10",
            "babel-loader": "8.2.5",
            "vue-loader": "15.10.0",
            // 创建模板相关的依赖
            "plop": "3.1.1",
            // css相关的依赖
            "sass-loader": "13.0.2",
            "sass": "1.54.9",
            "style-loader": "3.3.1",
            "css-loader": "6.7.1",
        },
        // 添加新的 npm 任务到项目中
        scripts: {
            "create": "plop --force",
            // storybook 启动
            "sb": "start-storybook -p 6006",
            // storybook 构建
            "sb-build": "build-storybook"
        }
    })
}