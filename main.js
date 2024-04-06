#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        { message: "Enter first number", type: "number", name: "FirstNumber" },
        { message: "Enter Second number", type: "number", name: "SecondNumber" },
        {
            message: "Choose one of the following operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    if (answer.operator === "Addition") {
        console.log(answer.FirstNumber + answer.SecondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log(answer.FirstNumber - answer.SecondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.FirstNumber * answer.SecondNumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.FirstNumber / answer.SecondNumber);
    }
    else {
        console.log("Please select a valid Operator.");
    }
    let ConfirmationMessage = await inquirer.prompt([{
            name: "confirmation",
            type: "confirm",
            message: "Do you want to do more calculation?",
            default: "true",
        }]);
    condition = ConfirmationMessage.confirmation;
}
