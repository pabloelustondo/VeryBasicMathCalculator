const readline = require("readline");
const BasicCalculator = require("./calculator");
console.log("===== Very Basic Calculator - Command Line ====");
console.log("----- Enter a question following the examples below");
console.log("----- What is 5? =>  5");
console.log("----- What    is    5? =>  5");
console.log("----- What 5? =>  error");
console.log("----- type exit to exit ");

const calculator = new BasicCalculator();

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function run() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mathQuestion = await askQuestion("ENTER MATH QUESTION: ");
    if (mathQuestion === "exit") break;
    try {
      const answer = calculator.calculate(mathQuestion);
      console.log(answer);
    } catch (e) {
      console.log(e.message);
    }
  }
}

run();
