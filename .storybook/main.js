// eslint-disable-next-line no-undef
const path = require('path')

// eslint-disable-next-line no-undef
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    'builder': 'storybook-builder-vite',
  },
  port: 26000,
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },
}
