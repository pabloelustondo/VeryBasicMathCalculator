/* eslint-disable no-undef */
const { ErrorMessage } = require("../src/errors");
const chai = require("chai");
const expect = chai.expect;
const BasicCalculator = require("../src/calculator");
describe("calculate", function () {
  const calculator = new BasicCalculator(300);
  describe("Iteration 0: No Operations", function () {
    it("returns 5 from What is 5?", () => {
      const result = calculator.calculate("What is 5?");
      expect(result.toString()).to.be.equal("5");
    });

    it("returns 5 from What     is      5?", () => {
      const result = calculator.calculate("What     is      5?");
      expect(result.toString()).to.be.equal("5");
    });

    it("throws error if no *What is* is provided", () => {
      let error = null;
      try {
        calculator.calculate("5?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(
        ErrorMessage.Syntax.MustStartWithWhatIs
      );
    });
    it("throws error if not *is* is provided", () => {
      let error = null;
      try {
        calculator.calculate("What 5?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(
        ErrorMessage.Syntax.MustStartWithWhatIs
      );
    });
    it("throws error if no valid number is provided", () => {
      let error = null;
      try {
        calculator.calculate("What is a?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(
        ErrorMessage.Syntax.CannotParseFirstNumber
      );
    });
  });

  describe("Iteration 1: Addition", function () {
    it("returns 7 from What is 5 plus 2?", () => {
      const result = calculator.calculate("What is 5 plus 2?");
      expect(result.toString()).to.be.equal("7");
    });

    it("adds two very big numbers with absolute precision ", () => {
      const bigNumber =
        "1000000000000000000000000000000000000000000000000000000000000000000000";
      const expectedResult =
        "1.000000000000000000000000000000000000000000000000000000000000000000001e+69";
      const result = calculator
        .calculate(`What is ${bigNumber} plus 1?`)
        .toString();
      expect(result.toString()).to.be.equal(expectedResult);
    });
  });
});
