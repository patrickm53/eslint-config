module.exports = {
  // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
  'default-case': 'off',
  'valid-jsdoc': 'off',
  'no-dupe-class-members': 'off',
  'no-undef': 'off',
  'no-use-before-define': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        '{}': false,
      },
      extendDefaults: true,
    },
  ],
  '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/consistent-type-assertions': 'warn',
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: { order: 'as-written' },
      classes: { order: 'as-written' },
      interfaces: { memberTypes: ['signature', 'field'], order: 'natural' },
      typeLiterals: { order: 'natural' },
    },
  ],
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'warn',
  '@typescript-eslint/no-use-before-define': [
    'warn',
    { functions: false, classes: false, variables: false, typedefs: false },
  ],
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
  ],
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'warn',
};
