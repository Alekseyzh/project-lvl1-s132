import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberAttempt = 3;

const brainGames = (rules, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}`);
  console.log('');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}!`);
  console.log('');

  function questionsCount(attemptCount) {
    if (attemptCount === numberAttempt) {
      return console.log(`Congratulations, ${nameUser}!`);
    }

    const taskValue = task();
    const question = car(taskValue);
    const answer = cdr(taskValue);
    console.log(readlineSync.question(`Question: ${question}`));
    const answerUser = readlineSync.question('Answer: ');

    if (answer === answerUser) {
      console.log('Correct!');
      questionsCount(attemptCount + 1);
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${nameUser}!`);
    }
    return questionsCount;
  }
  return questionsCount(0);
};

export default brainGames;
