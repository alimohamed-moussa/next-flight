module.exports = {
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'standard-with-typescript',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    '**/public/',
    '**/.next/',
    '**/node_modules/',
    '**/yarn.lock',
    '**/next-env.d.ts',
    '**/next.config.js',
    '.eslintrc.js',
  ],
  rules: {
    'multiline-ternary': 0,
    'max-len': [
      2,
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    semi: 'off',
    'comma-dangle': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
};