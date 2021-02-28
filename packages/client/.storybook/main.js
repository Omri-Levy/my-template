module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  webpackFinal: async (config) => {
    const {
      module: {
        rules: [, , , , , { oneOf }]
      }
    } = config;
    const babelLoader = oneOf.find(({ test }) => (
      new RegExp(test).test('.ts'))
    );

    babelLoader.include = [
      /packages\/shared\/src/,
      /src/,
      /\.storybook/
    ];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react'
        }
      }
    };
  }
};
