// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const {i18n} = require('./next-i18next.config')
const withImages = require('next-images')
const ESLintPlugin = require('eslint-webpack-plugin')
const ESLintConfig = require('./.eslintrc')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = withImages({
  typescript: {
    ignoreBuildErrors: false,
  },
  inlineImageLimit: 16384,
  webpack: (config) => {
    config.plugins.push(
      new ESLintPlugin({
        // Plugin options
        extensions: ['ts', 'tsx'],
        eslintPath: require.resolve('eslint'),
        context: resolveApp('src'),
        cache: true,
        cacheLocation: path.resolve(resolveApp('node_modules'), '.cache/.eslintcache'),
        // ESLint class options
        cwd: resolveApp('.'),
        resolvePluginsRelativeTo: __dirname,
        baseConfig: ESLintConfig,
      })
    )
    return config
  },
  i18n,
  reactStrictMode: true,
})
