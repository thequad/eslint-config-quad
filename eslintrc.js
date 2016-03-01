module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  globals: {
    jest: false,
  },

  rules: {
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs'],
    'camelcase': 0,
    'comma-dangle': [2, 'always-multiline'],
    'curly': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': 2,
    'max-depth': [2, 5],
    'max-statements': [2, 30],
    'max-len': [2, 100, 2, {
      'ignoreComments': true,
      'ignorePattern': '^import|:\\srequire(\\s*)'
    }],
    'newline-after-var': [2, 'always'],
    'new-cap': 0,
    'no-alert': 0,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-shadow': 0,
    'no-trailing-spaces': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-unary-ops': 2,
    'space-before-blocks': 2,
  },
};
