import { cons } from 'hexlet-pairs';
import brainGames from '..';
import randomNumber from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdCalculate = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdCalculate(b, a % b);
};

const task = () => {
  const firstNumber = randomNumber(110, 2);
  const secondNumber = randomNumber(150, 2);
  const gcd = gcdCalculate(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd;
  const taskJob = cons(question, String(answer));
  return taskJob;
};

export default () => brainGames(rules, task);
