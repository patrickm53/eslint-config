const baseRules = require('./rules/base');
const importRules = require('./rules/import');
const typescriptRules = require('./rules/typescript');
const unicornRules = require('./rules/unicorn');

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['@babel', 'simple-import-sort', 'sort-destructure-keys', 'unicorn'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jxs', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './', './src'],
      },
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: typescriptRules,
    },
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    ...baseRules,
    ...importRules,
    ...unicornRules,
  },
};
