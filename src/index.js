const path = require('path')

const jsRules = require('./jsRules')

const tsRules = require('./tsRules')

module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: jsRules,
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        requireConfigFile: false,
        tsconfigRootDir: path.resolve(__dirname, '..'),
      },
      rules: {
        ...jsRules,
        ...tsRules,
      },
    },
  ],
}
