module.exports = {
  'jsx-a11y/control-has-associated-label': 'warn',
  'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
  'react/jsx-filename-extension': 'off',
  'react/jsx-fragments': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': ['warn', { reservedFirst: true }],
  'react/jsx-wrap-multilines': 'off',
  'react/no-array-index-key': 'warn',
  'react/no-unescaped-entities': 'off',
  'react/no-unused-prop-types': 'warn',
  'react/prefer-stateless-function': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/sort-comp': [
    'error',
    {
      order: [
        'constructor',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        '/^on.+$/',
        'render',
      ],
    },
  ],
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': [
    'warn',
    {
      additionalHooks: 'useUpdateEffect',
    },
  ],
};
