/* eslint-disable no-undef */
const chai = require("chai");
const expect = chai.expect;
const VeryBasicCalculator = require("../../src/calculator");
describe("tokenize", function () {
  const calculator = new VeryBasicCalculator();
  describe("remove empty tokens / spaces", function () {
    it("returns array of non empty tokens", () => {
      const result = calculator.removeEmptyTokens(["a", "", "b"]);
      expect(result.length).to.be.equal(2);
    });
  });
});
