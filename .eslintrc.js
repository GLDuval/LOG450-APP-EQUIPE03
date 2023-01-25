module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@react-native-community',
  ],
  rules: {
    indent: 'off',
    'spaced-comment': ['error', 'always'],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-single-element-style-arrays': ['error'],
    'react-native/no-color-literals': ['error'],
    'no-undef': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
