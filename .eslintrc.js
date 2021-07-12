module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-security', 'no-unsanitized'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:security/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  env: {
    commonjs: true,
    node: true,
  },
  rules: {
    // Regular ESLint rules
    curly: 'error',
    'no-loss-of-precision': 'error',
    'consistent-return': 'error',
    'default-param-last': 'error',
    'no-new': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error',

    'no-magic-numbers': [
      'warn',
      {
        ignoreDefaultValues: true,
      },
    ],

    'no-shadow': 'off',

    // ESLint rules overrides by TypeScript ESLint
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error', {capIsConstructor: false}],

    // TypeScript ESLint specific rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'error',

    // Off for now, might warn later
    '@typescript-eslint/no-shadow': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off', {assertionStyle: 'never'}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React rules
    'react/jsx-sort-props': [
      'warn',
      {reservedFirst: true, callbacksLast: true, shorthandLast: true, ignoreCase: true},
    ],
    'react/jsx-curly-brace-presence': ['warn', {props: 'never', children: 'never'}],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '"',
            alternatives: ['&quot;', '&ldquo;', '&#34;', '&rdquo;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
        ],
      },
    ],
    // Can be disabled to speed up development
    'react/jsx-no-literals': [
      'off',
      {noStrings: true, ignoreProps: true, noAttributeStrings: true, allowedStrings: []},
    ],

    // We don't need it with typescript
    'react/display-name': 'off',
    'react/prop-types': 'off',
    // Don't need using next.js
    'react/react-in-jsx-scope': 'off',
    // Security
    'react-security/no-dangerously-set-innerhtml': 'warn',
    'react-security/no-find-dom-node': 'warn',
    'react-security/no-javascript-urls': 'warn',
    'react-security/no-refs': 'warn',
    'react/no-danger': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/jsx-no-script-url': 'warn',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-props-no-spreading': 'warn',
    // https://github.com/mozilla/eslint-plugin-no-unsanitized
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
    // next/core-web-vitals
    '@next/next/no-sync-scripts': 2,
    '@next/next/no-html-link-for-pages': 2,
  },
}
