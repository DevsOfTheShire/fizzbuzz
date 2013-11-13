/*global requirejs: true */

var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 250;

var htmlReporter = new jasmine.HtmlReporter();
jasmineEnv.addReporter(htmlReporter);

jasmineEnv.specFilter = function (spec) {
  return htmlReporter.specFilter(spec);
};

var specs = [];
specs.push('app/fizzbuzzSpec');
$(function () {
    jasmineEnv.execute();
});
