module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/recommended',
  ],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['react-hooks', 'simple-import-sort', 'sort-destructure-keys'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jxs', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parser: 'babel-eslint',
      rules: {
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:typescript-sort-keys/recommended',
      ],
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        'valid-jsdoc': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
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
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'all'],
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 5 }],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-plusplus': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'never', prev: 'case', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
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
    'import/prefer-default-export': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['warn', { reservedFirst: true }],
    'react/no-array-index-key': 'warn',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useUpdateEffect',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'], // Side effect imports
          ['^react$', '^react-dom$', '^react', '^@?\\w'],
          ['^src/modules'],
          ['^src/config', '^src/literals'],
          ['^src/components', '^src/containers', '^src/routes'],
          ['^src/types'],
          ['^test'],
          ['^\\./[^.]'], // './*'
          ['^\\.\\./'], // '../*'
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
  },
};
