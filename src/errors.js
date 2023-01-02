/**
 * VbcSyntaxError represents an error during the parsing of
 * a mathematical expression according the the grammar explained
 * in the VeryBasicCalculator class
 */
class BcSyntaxError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const Errors = {
  CannotParseFirstNumber: "Cannot parse the first number provided",
  CannotIdentifyOperator:
    "Cannot identify a valid operator: no operator | plus | minus | divided by | multiplied by",
  MustHaveQuestionMark: "A Math question must end with a question mark",
  MustStartWithWhatIs: "A Math question must start with *What is*",
};

module.exports = { BcSyntaxError, Errors };
