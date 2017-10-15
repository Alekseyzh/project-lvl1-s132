import { cons } from 'hexlet-pairs';
import brainGames from '..';
import randomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const task = () => {
  const question = randomNumber(100);
  const answer = isEven(question);
  const taskJob = cons(question, answer);
  return taskJob;
};

export default () => brainGames(descriptionGame, task);
