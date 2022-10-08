/* eslint-env node */
'use strict';

module.exports = {
  name: 'my-test',

  rules: {

  },

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'eol-last': 'never',
        'no-trailing-spaces': true,
        'quotes': 'double',
        'simple-unless': false
      }
    }
  }
};