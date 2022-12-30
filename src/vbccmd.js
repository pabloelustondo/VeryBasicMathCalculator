const readline = require('readline');
const VeryBasicCalculator = require('./VeryBasicCalculator')
console.log("===== Very Basic Calculator - Command Line ====")
console.log("----- Enter a question following the examples below")
console.log("----- What is 5? =>  5")
console.log("----- What    is    5? =>  5")
console.log("----- What 5? =>  error")
console.log("----- type exit to exit ")

const calculator = new VeryBasicCalculator();

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}




async function run(){
    while (true){
        const mathQuestion = await askQuestion("ENTER MATH QUESTION: ");
        if (mathQuestion === 'exit') break;
        let answer;
        try {
            answer = calculator.calculate(mathQuestion);
        } catch (e) {
            answer = e;
        }
        console.log(answer)
    }
}

run();