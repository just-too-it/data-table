module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
          extensions: ['.js', '.jsx'],
          moduleDirectory: ['node_modules', 'src/'],
      },
  },
  },
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'promise', 'prettier'],
  rules: {
    curly: 'error',
    eqeqeq: 'warn',
    'no-debugger': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/named': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'warn',
    'import/namespace': 'warn',
    'import/default': 'warn',
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        endOfLine: 'auto',
        printWidth: 120,
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-multi-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
  },
};
