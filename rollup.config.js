import babel from 'rollup-plugin-babel';

export default {
  "entry"     : 'path/to/myapp/temptest.js',
  "dest"      : 'path/to/myapp/temptest.min.js',
  "format"    : 'iife',
  "moduleName": 'TempTest',
  "plugins"   : [
    babel( {
      "babelrc": false, // Ignore the .babelrc file which is there for mocha tests
      "presets": [ 'es2015-rollup' ],
      "plugins": [
        [ "module-resolver", {
          "alias": { "myapp": "./path/to/myapp" }
        } ],
        "transform-html-import-to-string"
      ]
    } )
  ]
};
