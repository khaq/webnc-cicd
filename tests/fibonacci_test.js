const chai = require('chai');
const fibonacci = require('../fibonacci');

chai.should();

describe('#fibonacci', function () {
  context('n = 0', function () {
    it('should return 0', function () {
      fibonacci(0).should.equals(0);
    });
  });
  context('n = 1', function () {
    it('should return 1', function () {
      fibonacci(1).should.equals(1);
    });
  });
  context('n = 7', function () {
    it('should return 13', function () {
      fibonacci(7).should.equals(13);
    });
  });
});
