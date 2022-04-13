module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@screens': './source/screens',
          '@components': './source/components',
          '@services': './source/services',
          '@routes': './source/routes',
          '@locales': './source/locales',
          '@styles': './source/styles',
          '@utils': './source/utils'
        }
      }
    ],
    'jest-hoist'
  ]
};
