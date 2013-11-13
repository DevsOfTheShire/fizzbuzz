/*global requirejs: true */
requirejs.config({
  //baseUrl relative to index page
  baseUrl: 'js',
  paths: {
  //paths relative to baseUrl
    lib: 'lib',
    app: 'app',
    jquery: 'lib/jquery-2.0.3.min'
  }
});

requirejs(['app/testmodule'], function (Test) {
  Test.init();
  Test.doJqueryStuff();
});