import chalk from "chalk";
import { generateRandomNumber } from "./services/generateRandomNumber.js";

const luckyNumber = generateRandomNumber(2, 12);
const firstDice = generateRandomNumber(1, 6);
const secondDice = generateRandomNumber(1, 6);
const sum = firstDice + secondDice;

console.clear();
console.log(chalk.blue(`Your lucky number is: ${luckyNumber}`));
console.log(`\nRolling dices...`);

setTimeout(() => {
  console.log(`\nYou rolled ${firstDice} on the first dice`);
}, 2000);
setTimeout(() => {
  console.log(`You rolled ${secondDice} on the second dice\n`);
}, 4000);
setTimeout(() => {
  if (sum === luckyNumber || firstDice === secondDice) {
    console.log(chalk.green(`You won!`));
    return;
  }

  console.log(chalk.red(`You lost!`));
}, 5000);
