/*global define: true, describe: true, it: true, expect: true, toBe: true */

define(function () {
  describe('Test Script Module', function () {
    it('should pick up a simple assert', function () {
      expect(1).toBe(1);
    });
  });
});