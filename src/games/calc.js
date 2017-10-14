import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';

const rules = 'What is the result of the expression?\n';

const randomNumber = maxNumber => Math.floor(Math.random() * ((maxNumber - 2) + 1)) + 2;

const getRandomOperator = (a, b) => {
  const randomOperator = randomNumber(4);
  const operatorCase = randomOperator;

  const summation = a + b;
  const subtraction = a - b;
  const multiplication = Math.floor(a * b);

  const sum = cons('+', summation);
  const subtract = cons('-', subtraction);
  const multiple = cons('*', multiplication);

  switch (operatorCase) {
    case 2:
      return sum;
    case 3:
      return subtract;
    case 4:
      return multiple;
    default:
      return sum;
  }
};

const task = () => {
  const firstOperand = randomNumber(30);
  const secondOperand = randomNumber(15);
  const operator = getRandomOperator(firstOperand, secondOperand);
  const question = `${firstOperand} ${car(operator)} ${secondOperand}`;
  const answer = cdr(operator);
  const taskJob = cons(question, String(answer));
  return taskJob;
};

export default () => brainGames(rules, task);
