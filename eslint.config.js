export default [
  {
    extends: [
      'plugin:svelte/recommended',
      'airbnb-base',
      'airbnb-typescript/base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      extraFileExtensions: ['.svelte']
    },
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser'
        }
      }
    ]
  }
]
