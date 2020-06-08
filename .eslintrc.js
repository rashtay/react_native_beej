module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-await-in-loop': 2,
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
      },
    ],
    'no-console': [1, { allow: ['warn', 'info', 'error'] }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],

    'no-use-before-define': [2, { functions: false }],
    'prefer-const': 2,

    quotes: ['error', 'single', 'avoid-escape'],
    'import/prefer-default-export': 0,
  },
};
