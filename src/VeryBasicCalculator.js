/*
This ia a very simple calculator based on the requirements your can find in /docs 

The calculator acceptes some simple mathematical question based on a simple grammar
YOu can ask questions such as:
What is 5?  or What is 5 plus 7?

More generically: 

MathQuestion := 'What' 'is' MathExpression '?'
MathExpression := Number | Number Operator Number
Operator = 'plus' | 'minus' | 'divided by' | 'multiplied by'
*/

class BasicCalculator {

    constructor() {
    }


    calculateMathExpression(mathExpression){
      //get first number
      let firstNumber;
      try {
        firstNumber = Number(mathExpression[0])
      } catch (e) {
        throw "Cannot parse the first number provided"
      }

      if (isNaN(firstNumber))   throw "Cannot parse the first number provided";

      //get operator
      if (mathExpression[1] === '?'){
        return firstNumber;
   
      } else
      if (mathExpression[1] === 'plus'){
        return firstNumber;

      } else
      if (mathExpression[1] === 'minus'){
        return firstNumber;
       
      } else 
      if (mathExpression[1] === 'divided'){
        return firstNumber;       
      } else 
      if (mathExpression[1] === 'multiplied'){
        
      } else {
      throw "Cannot identify a valid operator: no operator | plus | minus | divided by | multiplied by"
      }

    }

    removeEmptyTokens( listOfTokens ) {
      const nonEmptyTokens = [];
      for( let token of listOfTokens){
        if (token !== ''){
          nonEmptyTokens.push(token)
        }
      }
      return nonEmptyTokens;
    }

    parseMathQuestion(mathQuestion){
      const sanitizedMathQUestion = mathQuestion.replace('?',' ?');
      const mathQuestionRawTokens =  sanitizedMathQUestion.split(' ');
      const mathQuestionTokens = this.removeEmptyTokens(mathQuestionRawTokens)

      // consume/parse the 'What is' tokens
      if (mathQuestionTokens.length < 3) throw "No enough words necessary for syntax: What is <expression> ?"
      if ((mathQuestionTokens[0] != 'What') ||(mathQuestionTokens[1] != 'is')) {
        throw "Expression needs to start with 'What is' "
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