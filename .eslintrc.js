// eslint-disable-next-line no-undef
module.exports = {
  'env': { 'browser': true, 'es2021': true, 'jest/globals': true },
  'extends': [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': { 'jsx': true },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': ['react', '@typescript-eslint', 'import', 'jest'],
  'ignorePatterns': ['.git', 'node_modules', 'dist', 'package-lock.json', 'yarn.lock'],
  'rules': {
    // semi coron
    'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'never' }],
    'semi-spacing': ['error', { 'after': true, 'before': false }],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',

    // import
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        'pathGroups': [
          { pattern: '@alias/**', group: 'parent', position: 'before' },
        ],
        'alphabetize': { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'import/no-absolute-path': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'no-restricted-imports': ['error', { 'patterns': ['../*', './*', '~/*'] }],

    'no-undef': 'warn',
    'quotes': ['error', 'single'],
    'space-before-blocks': ['warn', { 'functions': 'always' }],
    'require-jsdoc': 'off',
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],

    'no-console': ['error'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-unused-vars': [2, { 'args': 'none' }],
  },
  'overrides': [
    {
      'files': ['**/*.json'],
      'rules': {
        'quotes': [2, 'double'],
        'comma-dangle': ['error', 'never'],
      },
    },
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      'typescript': {},
      'alias': {
        'map': [
          ['@/', './src/'],
        ],
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'react': {
      'version': 'detect',
    } },
}
