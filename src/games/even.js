import { cons } from 'hexlet-pairs';
import brainGames from '..';
import randomNumber from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const task = () => {
  const question = randomNumber(100);
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const answer = isEven(question);
  const taskJob = cons(question, answer);
  return taskJob;
};

export default () => brainGames(rules, task);
