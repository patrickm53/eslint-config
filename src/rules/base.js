module.exports = {
  curly: ['error', 'all'],
  'global-require': 'off',
  '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  '@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 5 }],
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
  '@stylistic/padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    { blankLine: 'always', prev: 'block-like', next: '*' },
    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'never', prev: 'case', next: 'block-like' },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^\\u0000'], // Side effect imports
        ['^node', `^(${require('module').builtinModules.join('|')})(/|$)`],
        ['^react$', '^react-dom$', '^react', '^@?(?!test/)\\w'],
        ['^~$'],
        ['^~/config'],
        ['^~/hooks'],
        ['^~/modules'],
        ['^~/actions', '^~/literals', '^~/reducers', '^~/services', '^~/sagas'],
        ['^~/components', '^~/containers', '^~/routes'],
        ['^~', '^src'],
        ['^test/\\w'],
        ['^\\./[^.]'], // './*'
        ['^\\.\\./'], // '../*'
      ],
    },
  ],
  'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
};
