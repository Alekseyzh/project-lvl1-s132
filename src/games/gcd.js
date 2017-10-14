import { cons } from 'hexlet-pairs';
import brainGames from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const randomNumber = maxNumber => Math.floor(Math.random() * ((maxNumber - 2) + 1)) + 2;

const gcdCalculate = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdCalculate(b, a % b);
};

const task = () => {
  const firstNumber = randomNumber(110);
  const secondNumber = randomNumber(150);
  const gcd = gcdCalculate(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd;
  const taskJob = cons(question, String(answer));
  return taskJob;
};

export default () => brainGames(rules, task);
