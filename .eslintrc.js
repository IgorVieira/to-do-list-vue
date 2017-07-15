// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "semi": 2,
    "indent": [2, "tab"],
    "no-param-reassign": [2, {"props": false}],
    "no-console":0,
    "no-useless-constructor":0,
    "no-empty-function":0,
    "no-tabs":0,
    "no-unused-vars":0,
    "no-unused-expressions":0,
    "no-prototype-builtins":0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle":0,
    "no-plusplus":0,
    "radix": 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}