module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-dom/recommended'],
  env: {
    jest: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
};
