const importRules = {
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
  'import/prefer-default-export': 'off',
};

const reactRules = {
  'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
  'react/jsx-filename-extension': 'off',
  'react/jsx-fragments': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': ['warn', { reservedFirst: true }],
  'react/no-array-index-key': 'warn',
  'react/no-unescaped-entities': 'off',
  'react/prefer-stateless-function': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',
};

const typescriptRules = {
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
  '@typescript-eslint/explicit-module-boundary-types': 'off',
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
};

const unicornRules = {
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/custom-error-definition': 'warn',
  'unicorn/empty-brace-spaces': 'warn',
  'unicorn/no-array-push-push': 'warn',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'warn',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-unsafe-regex': 'warn',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/number-literal-case': 'warn',
  'unicorn/prefer-array-find': 'warn',
  'unicorn/prefer-array-some': 'warn',
  'unicorn/prefer-code-point': 'error',
  'unicorn/prefer-date-now': 'warn',
  'unicorn/prefer-default-parameters': 'warn',
  'unicorn/prefer-export-from': 'error',
  'unicorn/prefer-includes': 'warn',
  'unicorn/prefer-object-from-entries': 'warn',
  'unicorn/prefer-optional-catch-binding': 'warn',
  'unicorn/prefer-spread': 'warn',
  'unicorn/prefer-switch': 'warn',
  'unicorn/prefer-ternary': 'warn',
  'unicorn/prefer-top-level-await': 'warn',
  'unicorn/prefer-type-error': 'warn',
  'unicorn/prevent-abbreviations': [
    'warn',
    {
      replacements: {
        acc: false,
        db: false,
        dev: false,
        el: false,
        env: false,
        fn: false,
        param: false,
        params: false,
        prod: false,
        prop: false,
        props: false,
        ref: false,
        refs: false,
        src: false,
        temp: false,
        var: false,
        vars: false,
      },
    },
  ],
  'unicorn/template-indent': 'warn',
  'unicorn/throw-new-error': 'warn',
};

module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
  ],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  plugins: ['@babel', 'react-hooks', 'simple-import-sort', 'sort-destructure-keys', 'unicorn'],
  parserOptions: {
    ecmaVersion: 2021,
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
        ...typescriptRules,
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
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for events
          'event', // for events / AWS Lambdas
          'el', // for HTMLElements
          'element', // for HTMLElements
          'ctx', // for Koa routing
          'context', // for Koa routing
          'draft', // for immer
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
        ],
      },
    ],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'never', prev: 'case', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'jsx-a11y/control-has-associated-label': 'warn',
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
          ['^(src/)?modules'],
          ['^(src/)?config', '^(src/)?literals'],
          ['^(src/)?actions', '^(src/)?reducers', '^(src/)?sagas'],
          ['^(src/)?components', '^(src/)?containers', '^(src/)?routes'],
          ['^(src/)?types'],
          ['^test'],
          ['^\\./[^.]'], // './*'
          ['^\\.\\./'], // '../*'
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    ...importRules,
    ...reactRules,
    ...unicornRules,
  },
};
