import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberAttempt = 3;

const questionsCount = (task, attemptCount) => {
  if (attemptCount === numberAttempt) {
    return true;
  }

  const taskValue = task();
  const question = car(taskValue);
  const answer = cdr(taskValue);
  console.log(readlineSync.question(`Question: ${question}`));
  const answerUser = readlineSync.question('Answer: ');

  if (answer === answerUser) {
    console.log('Correct!');
    questionsCount(task, attemptCount + 1);
  } else { console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`); return false; }

  return questionsCount;
};

const brainGames = (descriptionGame, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}`);
  console.log('');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}!`);
  console.log('');

  const isCorrect = questionsCount(task, 0);
  if (isCorrect) {
    console.log(`Congratulations, ${nameUser}!`);
  } else {
    console.log(`Let's try again, ${nameUser}!`);
  }
};

export default brainGames;
