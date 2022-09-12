module.exports = function (plop) {
  plop.setGenerator('controller', {
    description: '业务组件模板',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名，比如MyComponent：',
      },
    ],
    actions: (data) => {
      const { name } = data; // 拿到终端输入的文件名
      const storiesTitle = name.replace(name[0], name[0].toLowerCase());
      return [
        {
          type: 'add',
          path: 'src/components/{{name}}/index.scss',
          templateFile: '.storybook/plop-templates/componentTemplate/Component.scss.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{name}}/index.stories.js',
          templateFile:
            '.storybook/plop-templates/componentTemplate/Component.stories.js.hbs',
          data: {
            name,
            storiesTitle,
          },
        },
        {
          type: 'add',
          path: 'src/components/{{name}}/index.vue',
          templateFile: '.storybook/plop-templates/componentTemplate/Component.vue.hbs',
        },
        {
          type: 'add',
          path: 'src/components/Playground.vue',
          templateFile: '.storybook/plop-templates/componentTemplate/Playground.vue.hbs',
        },
      ];
    },
  });
};
