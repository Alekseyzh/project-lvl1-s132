import cons from 'hexlet-pairs';
import brainGames from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const task = () => {
  const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const question = randomNumber;
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const answer = isEven(question);
  const taskJob = cons(question, answer);
  return taskJob;
};

export default () => brainGames(rules, task);
