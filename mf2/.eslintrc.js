module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
    mocha: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./', 'node_modules'],
      },
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          src: './src',
          '@types': './@types',
        },
      },
    },
  },
  rules: {
    'default-param-last': 0,
    'import/extensions': 0,
    'import/no-import-module-exports': 0 /* fix bug - index.tsx. Also can be renamed to index.ts but why should it have to be? */,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'no-restricted-globals': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/no-var-requires': 0, // webpack allow require
  },
};
