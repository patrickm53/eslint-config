module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: '**/*/tsconfig.json',
      },
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
};
