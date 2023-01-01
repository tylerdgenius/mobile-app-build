module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          '@components': './src/components/*',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
