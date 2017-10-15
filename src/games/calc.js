import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';
import randomNumber from '../utils';

const rules = 'What is the result of the expression?';

const getRandomOperator = (a, b) => {
  const operatorCase = randomNumber(4, 2);

  switch (operatorCase) {
    case 2:
      return cons('+', a + b);
    case 3:
      return cons('-', a - b);
    case 4:
      return cons('*', Math.floor(a * b));
    default:
      return cons('+', a + b);
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
