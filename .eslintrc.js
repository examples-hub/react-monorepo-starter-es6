module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', 'react-hooks'],
  // ESLint extends configurations recursively
  extends: [
    'alloy',
    'alloy/react',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  // 自定义规则，可以覆盖掉extends的配置,0-off,1-warn,2-error
  rules: {
    'no-param-reassign': 1,
    'no-invalid-this': 1,
    'no-unused-vars': 1,
    'no-empty': 1,
    'no-return-assign': 1,
    'guard-for-in': 1,
    complexity: 1,
    'prefer-const': 1,
    'prefer-spread': 1,
    'prefer-rest-params': 1,
    radix: 1,
    'max-nested-callbacks': 1,
    'max-params': 1,
    'react/no-find-dom-node': 1,
    'react/no-deprecated': 1,
    'react/jsx-no-useless-fragment': 1,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-key': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prefer-es6-class': 0,
    'react/sort-comp': 1,
    'prettier/prettier': 1,
  },
};
