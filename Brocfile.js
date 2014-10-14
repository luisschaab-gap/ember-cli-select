/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var mergeTrees = require('brocolli-merge-trees');

var appTree = mergeTrees(['app', 'app-addon'], {overwrite: true});

var EmberApp = require('ember-cli/lib/brocolli/ember-app');

var app = new EmberApp({
  trees: {
    app: appTree
  }
});

app.import('bower_components/es5-shim/es5-shim.js');
app.import('bower_components/es5-shim/es5-sham.js');

module.exports = app.toTree();
