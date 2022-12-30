const chai = require('chai');
const expect = chai.expect;
const VeryBasicCalculator = require('../../src/VeryBasicCalculator')
describe('VBC Tokenize', function () {
  const calculator = new VeryBasicCalculator();
  describe('remove empty tokens / spaces', function () {
    it('returns array of non empty tokens',  () => {
        const result = calculator.removeEmptyTokens(['a','','b'])
        expect(result.length).to.be.equal(2);
    });
  
  });
});