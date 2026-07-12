import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,cjs,mjs,ts,tsx}'],
    ignores: ['node_modules/**', 'dist/**', '.turbo/**'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
