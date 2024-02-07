module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['promise', 'import', 'node', 'sonarjs'],
  extends: [
    'standard',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:sonarjs/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'import/order': 'error',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed'],
    'import/no-useless-path-segments': ['error'],
    'import/no-unresolved': ['error'],
    'node/no-unpublished-require': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'no-console': 0,
    indent: ['error', 2],
    'eol-last': ['error', 'always'],
    'no-process-exit': 'off',
    'promise/always-return': 'off'
  },
  overrides: [
    {
      files: ['src/**/**.*'],
      rules: {
        'node/no-unpublished-require': 'error'
      }
    },
    {
      files: ['test/**/**.*'],
      env: {
        mocha: true
      }
    }
  ]
}
