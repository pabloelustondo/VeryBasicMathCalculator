const chai = require('chai');
const expect = chai.expect;
const VeryBasicCalculator = require('../../src/VeryBasicCalculator')
describe('VBC Calculate', function () {
  const calculator = new VeryBasicCalculator();
  describe('Iteration 1: No Operations', function () {
    it('returns 5 from "What is 5?',  () => {
        const result = calculator.calculate("What is 5?")
        expect(result).to.be.equal(5);
    });

    it('returns 5 from "What     is      5?',  () => {
      const result = calculator.calculate("What     is      5?")
      expect(result).to.be.equal(5);
    });

    it('throws error if no "What is" is provided ',  () => {
      let error = null;
      try{
        const result = calculator.calculate("5?")
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;

    });
    it('throws error if not "is" is provided ',  () => {
      let error = null;
      try{
        const result = calculator.calculate("What 5?")
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;

    });
    it('throws error if no valid number is provided ',  () => {
      let error = null;
      try{
        const result = calculator.calculate("What is a?")
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;

    });
  });
});