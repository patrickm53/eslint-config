# @gilbarbara/eslint-config

[![npm version](https://badge.fury.io/js/%40gilbarbara%2Feslint-config.svg)](https://badge.fury.io/js/%40gilbarbara%2Feslint-config)

Shared [ESLint](https://eslint.org/) configuration.

## Setup

Install the package:

```sh
$ npm install -D @gilbarbara/eslint-config prettier
```

Update your eslint configuration:

```json
{
  "extends": ["@gilbarbara/eslint-config"]
}
```

[Read more on shared configurations.](https://eslint.org/docs/user-guide/configuring/#extending-configuration-files)

---

This configuration is intended to provide consistent rules and pairs well with the [@gilbarbara/prettier-config](https://github.com/gilbarbara/prettier-config) package.

If you want to use it with TypeScript, you can use the [@gilbarbara/tsconfig](https://github.com/gilbarbara/tsconfig) package.

```sh

## Extras

If you want to get stricter TypeScript rules, this package also exports a `type-checking` module that you can use to extends your config:

```json
{
  "extends": [
    "@gilbarbara/eslint-config",
    "@gilbarbara/eslint-config/type-checking"
  ]
}
```
