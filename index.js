const readlineSync = require('readline-sync');

const chalk = require('chalk');

const username = readlineSync.question(
  chalk.blue('Hello User, What is your name? ')
);

console.log(chalk.cyan('Hello ' + username));

const number = parseInt(
  readlineSync.question(chalk.yellow('Enter your favourite number: '))
);

let check = true;

if (number === 0 || number === 1) {
  check = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      check = false;
      break;
    }
  }
}

check
  ? console.log(chalk.green('Your favourite number is a  prime number'))
  : console.log(chalk.green('Your favourite number is not a prime number'));
