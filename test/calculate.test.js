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
    it("throws error if no valid first number is provided", () => {
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
    it("(basic plus) returns 7 from What is 5 plus 2?", () => {
      const result = calculator.calculate("What is 5 plus 2?");
      expect(result.toString()).to.be.equal("7");
    });

    it("(big numbers) adds two very big numbers with absolute precision ", () => {
      const bigNumber =
        "1000000000000000000000000000000000000000000000000000000000000000000000";
      const expectedResult =
        "1.000000000000000000000000000000000000000000000000000000000000000000001e+69";
      const result = calculator
        .calculate(`What is ${bigNumber} plus 1?`)
        .toString();
      expect(result.toString()).to.be.equal(expectedResult);
    });

    it("(negatives 1) returns 5 from What is 10 plus -5?", () => {
      const result = calculator.calculate("What is 10 plus -5?");
      expect(result.toString()).to.be.equal("5");
    });

    it("(negatives 2) returns -15 from What is -10 plus -5?", () => {
      const result = calculator.calculate("What is -10 plus -5?");
      expect(result.toString()).to.be.equal("-15");
    });

    it("throws error if no valid second number provided", () => {
      let error = null;
      try {
        calculator.calculate("What is 5 plus?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(
        ErrorMessage.Syntax.CannotParseSecondNumber
      );
    });
  });

  describe("Iteration 2: Subtraction", function () {
    it("(basic minus) returns 7 from What is 9 minus 2?", () => {
      const result = calculator.calculate("What is 9 minus 2?");
      expect(result.toString()).to.be.equal("7");
    });
  });

  describe("Iteration 2: Multiplication", function () {
    it("(basic multiply ) returns 18 from What is 9 multiplied by 2?", () => {
      const result = calculator.calculate("What is 9 multiplied by 2?");
      expect(result.toString()).to.be.equal("18");
    });
  });

  describe("Iteration 2: Division", function () {
    it("(basic division) returns 9 from What is 18 divided by 2?", () => {
      const result = calculator.calculate("What is 18 divided by 2?");
      expect(result.toString()).to.be.equal("9");
    });

    it("(divided by 0) throws error from What is 18 divided by 0?", () => {
      let error = null;
      try {
        calculator.calculate("What is 18 divided by 0?");
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(error.message).to.be.equal(
        ErrorMessage.Execution.CannotDivideByZero
      );
    });
  });
});
