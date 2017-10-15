import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';
import randomNumber from '../utils';

const descriptionGame = 'What is the result of the expression?';

const getRandomOperator = (a, b) => {
  const operatorCase = randomNumber(3);

  switch (operatorCase) {
    case 1:
      return cons(`${a} + ${b}`, a + b);
    case 2:
      return cons(`${a} - ${b}`, a - b);
    case 3:
      return cons(`${a} * ${b}`, Math.floor(a * b));
    default:
      return cons(`${a} + ${b}`, a + b);
  }
};

const task = () => {
  const firstOperand = randomNumber(30);
  const secondOperand = randomNumber(15);
  const operator = getRandomOperator(firstOperand, secondOperand);
  const question = `${car(operator)}`;
  const answer = cdr(operator);
  const taskJob = cons(question, String(answer));
  return taskJob;
};

export default () => brainGames(descriptionGame, task);
