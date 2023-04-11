const jsBaseRules = {
  'import/extensions': [
    'error',
    {
      css: 'always',
      json: 'always',
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.config.{js,jsx,ts,tsx}',
        '**/*.setup.{js,jsx,ts,tsx}',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/tests/**/*.{js,jsx,ts,tsx}',
      ],
    },
  ],
  'import/prefer-default-export': ['off'],
}

module.exports = jsBaseRules
