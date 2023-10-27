const reactRules = require('./rules/react');

module.exports = {
  extends: ['airbnb/rules/react', 'airbnb/rules/react-a11y'],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      rules: {
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  rules: reactRules,
};
