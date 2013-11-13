/*global define: true */
define(['jquery'], function () {
  return (function () {
    return {
      init: function () { console.log('hello'); },
      doJqueryStuff: function () { $('header h1').text('Check1!'); }
    };
  }());
});