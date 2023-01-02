const { BcSyntaxError, BcExecutionError, ErrorMessage } = require("./errors");
const Decimal = require("decimal.js");

/**
Basic Calculator is a simple math calculator that
accepts questions based on an english-like math grammar.
It uses the library Decimal.js for very large number 
and very large precision calculations. 

You can ask questions such as:
What is 5?  or What is 5 plus 7?

Grammar:

MathQuestion := 'What' 'is' MathExpression '?'
MathExpression := Number | Number Operator Number
Operator = 'plus' | 'minus' | 'divided by' | 'multiplied by'

Examples :

What is 5?  =>  5
What is 5 plus 1 ? => 6
*/
class BasicCalculator {
  /**
   * @param {number} mathPrecision - This number represents the amount of significate digits to be use in calculations. For more information on math precision please visit https://www.npmjs.com/package/decimal.js?activeTab=readme
   */
  constructor(mathPrecision) {
    this.mathPrecision = mathPrecision;
    // initialized an instance of Decimal with the desired precision
    this.Decimal = Decimal.clone({ precision: this.mathPrecision });
  }

  /**
   * @param {string} mathExpression
   * @return {number}
   */
  calculateMathExpression(mathExpression) {
    // get first number
    let firstNumber;
    try {
      firstNumber = this.Decimal(mathExpression[0]);
    } catch (e) {
      // TODO not sure this try/catch is necessary
      throw new BcSyntaxError(ErrorMessage.Syntax.CannotParseFirstNumber);
    }

    if (isNaN(firstNumber)) {
      throw new BcSyntaxError(ErrorMessage.Syntax.CannotParseFirstNumber);
    }

    if (mathExpression[mathExpression.length - 1] !== "?") {
      throw new BcSyntaxError(ErrorMessage.Syntax.MustHaveQuestionMark);
    }

    if (mathExpression[1] === "?") {
      // we got a *no operation* question, so we return the first number
      return firstNumber;
    }

    // If we are here we seems to have another operator

    const operator = mathExpression[1];
    let secondNumberToken;

    if (operator === "plus") {
      secondNumberToken = mathExpression[2];
    } else if (mathExpression[1] === "minus") {
      secondNumberToken = mathExpression[2];
    } else if (mathExpression[1] === "divided" && mathExpression[2] === "by") {
      secondNumberToken = mathExpression[3];
    } else if (
      mathExpression[1] === "multiplied" &&
      mathExpression[2] === "by"
    ) {
      secondNumberToken = mathExpression[3];
    } else {
      throw new BcSyntaxError(ErrorMessage.Syntax.CannotIdentifyOperator);
    }

    // Get the second number
    let secondNumber;
    try {
      secondNumber = this.Decimal(secondNumberToken);
    } catch (e) {
      throw new BcSyntaxError(ErrorMessage.Syntax.CannotParseSecondNumber);
    }

    //Calculate resulting number after applying operation

    try {
      switch (operator) {
        case "plus":
          return firstNumber.plus(secondNumber);
        case "minus":
          return firstNumber - secondNumber; // TODO
        case "multiplied":
          return firstNumber * secondNumber; // TODO
        case "divided":
          if (secondNumber > 0) {
            return firstNumber / secondNumber; // TODO
          } else {
          }
      }
    } catch (e) {
      throw new BcExecutionError(
        ErrorMessage.Execution.CannotExecuteMathematicalOperation
      );
    }
  }

  removeEmptyTokens(listOfTokens) {
    const nonEmptyTokens = [];
    for (let token of listOfTokens) {
      if (token !== "") {
        nonEmptyTokens.push(token);
      }
    }
    console.log();
    return nonEmptyTokens;
  }

  parseMathQuestion(mathQuestion) {
    const sanitizedMathQUestion = mathQuestion.replace("?", " ?");
    const mathQuestionRawTokens = sanitizedMathQUestion.split(" ");
    const mathQuestionTokens = this.removeEmptyTokens(mathQuestionRawTokens);

    // consume/parse the 'What is' tokens
    if (
      mathQuestionTokens.length < 2 ||
      mathQuestionTokens[0] != "What" ||
      mathQuestionTokens[1] != "is"
    ) {
      throw new BcSyntaxError(ErrorMessage.Syntax.MustStartWithWhatIs);
    }
    // return the rest of the string
    return mathQuestionTokens.slice(2);
  }

  calculate(mathQuestion) {
    const mathExpression = this.parseMathQuestion(mathQuestion);
    return this.calculateMathExpression(mathExpression);
  }
}

module.exports = BasicCalculator;
