/*global requirejs: true */

requirejs.config({
  //baseUrl relative to index page
  baseUrl: 'js',
  paths: {
    jasmine: 'lib/jasmine.min',
    'jasmine-html': 'lib/jasmine-html.min',
    'jquery': 'lib/jquery-2.0.3.min',
    'json2': 'lib/json2.min'
  },
  shim: {
    json2: {
      exports: 'json2'
    },
    jquery: {
      deps: ['json2'],
      exports: 'jquery'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }

});