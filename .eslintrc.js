const base = require('./src/index')

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
}
