module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@containers': './src/containers',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
