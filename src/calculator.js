const { BcSyntaxError, Errors } = require("./errors");
/**
Basic Calculator is a simple math calculator that
accepts questions based on an english-like math grammar

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
   * @param {string} mathExpression
   * @return {number}
   */
  calculateMathExpression(mathExpression) {
    // get first number
    let firstNumber;
    try {
      firstNumber = Number(mathExpression[0]);
    } catch (e) {
      throw new BcSyntaxError(Errors.CannotParseFirstNumber);
    }

    if (isNaN(firstNumber)) {
      throw new BcSyntaxError(Errors.CannotParseFirstNumber);
    }

    if (mathExpression[mathExpression.length - 1] !== "?") {
      throw new BcSyntaxError(Errors.MustHaveQuestionMark);
    }

    if (mathExpression[1] === "?") {
      //get operator
      return firstNumber;
    } else if (mathExpression[1] === "plus") {
      return firstNumber;
    } else if (mathExpression[1] === "minus") {
      return firstNumber;
    } else if (mathExpression[1] === "divided") {
      return firstNumber;
    } else if (mathExpression[1] === "multiplied") {
      return firstNumber;
    } else {
      throw new BcSyntaxError(Errors.CannotIdentifyOperator);
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
      throw new BcSyntaxError(Errors.MustStartWithWhatIs);
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
