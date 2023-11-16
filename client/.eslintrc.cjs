/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": 1
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/component-name-in-template-casing": ["error", "kebab-case",]
  }

}
