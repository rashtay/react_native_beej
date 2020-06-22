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
          '@routes': './src/routes',
          '@services': './src/services',
          '@types': './src/types',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
