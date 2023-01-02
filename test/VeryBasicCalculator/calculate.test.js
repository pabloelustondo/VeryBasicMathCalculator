/* eslint-disable no-undef */
const { Errors } = require("../../src/errors");
const chai = require("chai");
const expect = chai.expect;
const VeryBasicCalculator = require("../../src/calculator");
describe("calculate", function () {
  const calculator = new VeryBasicCalculator();
  describe("Iteration 1: No Operations", function () {
    it("returns 5 from What is 5?", () => {
      const result = calculator.calculate("What is 5?");
      expect(result).to.be.equal(5);
    });

    it("returns 5 from What     is      5?", () => {
      const result = calculator.calculate("What     is      5?");
      expect(result).to.be.equal(5);
    });

    it("throws error if no *What is* is provided", () => {
      let error = null;
      try {
        calculator.calculate("5?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(Errors.MustStartWithWhatIs);
    });
    it("throws error if not *is* is provided", () => {
      let error = null;
      try {
        calculator.calculate("What 5?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(Errors.MustStartWithWhatIs);
    });
    it("throws error if no valid number is provided", () => {
      let error = null;
      try {
        calculator.calculate("What is a?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(Errors.CannotParseFirstNumber);
    });
  });
});
