#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt ([
    {message: "Enter Your First Number", type : "number", name : "firstNumber"},
    {message: "Enter Your Second Number", type : "number", name : "secondNumber"},
    {message: "Please Select One Of The Operator To Perfom Action", type : "list", name : "operator",
     choices: ["Addition","Subtraction","Multiplication","Division","Modulus","Exponentiation"], },
]);

//Here We Use Conditional Statement (If, else if & else)

if (answer.operator === "Addition"){
    console.log("Your Output Result is =", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction"){
    console.log("Your Output Result is =", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication"){
    console.log("Your Output Result is =", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log("Your Output Result is =", answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus"){
    console.log("Your Output Result is =", answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Exponentiation"){
    console.log("Your Output Result is =", answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Something Is Wrong, Please Select Valid Operators OR Valid Input Number");
}