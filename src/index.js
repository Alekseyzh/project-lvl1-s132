import readlineSync from 'readline-sync';
import { cdr, car } from 'hexlet-pairs';

const numberAttempt = 3;

const brainGames = (rules, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}`);
  console.log('\n');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}!`);
  console.log('\n');
  for (let i = 1; i <= numberAttempt; i += 1) {
    const taskValue = task();
    const question = car(taskValue);
    const answer = cdr(taskValue);
    console.log(readlineSync.question(`Question: ${question}`));
    const answerUser = readlineSync.question('Answer: ');
    if (answer === answerUser) {
      console.log('Correct!');
    } else { console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${nameUser}!`); return; }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default brainGames;
