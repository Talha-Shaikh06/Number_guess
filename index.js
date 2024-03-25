#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tHi, Welcome to the guessing number game\n");
// just because of this Math.random you'll get the random generate number
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your any guess number(Number limit is from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congo you guess a correct number.");
}
else {
    console.log("Sorry, babe you haven't guess correct number!");
}
// we have to update our version when ever we do changes
