module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['security', 'react-security', 'no-unsanitized'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  env: {
    commonjs: true,
    node: true,
  },
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-security/no-dangerously-set-innerhtml': 'warn',
    'react-security/no-find-dom-node': 'warn',
    'react-security/no-javascript-urls': 'warn',
    'react-security/no-refs': 'warn',
    'react/no-danger': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/jsx-no-script-url': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    // https://github.com/mozilla/eslint-plugin-no-unsanitized
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
  },
}
