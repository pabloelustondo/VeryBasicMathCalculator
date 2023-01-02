const ErrorMessage = {
  Syntax: {
    CannotParseFirstNumber: "Cannot parse the first number provided",
    CannotParseSecondNumber: "Cannot parse the second number provided",
    CannotIdentifyOperator:
      "Cannot identify a valid operator: no operator | plus | minus | divided by | multiplied by",
    MustHaveQuestionMark: "A Math question must end with a question mark",
    MustStartWithWhatIs: "A Math question must start with *What is*",
  },

  Configuration: {
    CannotReadPrecisionFromEnv:
      "Cannot read the desired precision from the .env file",
  },

  Execution: {
    CannotDivideByZero:
      "A division operation cannot be performed using zero as second argument",
    CannotExecuteMathematicalOperation:
      "Cannot execute mathematical operation. This may be due to an unexpected error in underlying math library or code. Please, report this error.",
  },
};

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
    this.name = "SyntaxError";
  }
}

/**
 * VbcSyntaxError represents an error during the execution of the parsed expression
 * This error may be caused by error in Decimal.js
 */
class BcExecutionError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "ExecutionError";
  }
}

/**
 * VbcConfigurationError: for example,
 * not finding a valid number for the math precision in the .env file.
 */
class BcConfigurationError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "ConfigurationError";
  }
}

module.exports = {
  ErrorMessage,
  BcSyntaxError,
  BcConfigurationError,
  BcExecutionError,
};
