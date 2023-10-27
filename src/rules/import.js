module.exports = {
  'import/extensions': [
    'warn',
    'never',
    {
      json: 'always',
      css: 'always',
      scss: 'always',
    },
  ],
  'import/no-cycle': 'error',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/no-import-module-exports': 'off',
  'import/no-named-as-default': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
};
