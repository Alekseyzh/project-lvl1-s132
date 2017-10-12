import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const numberAttempt = 3;

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}! \n`);
  for (let i = 1; i <= numberAttempt; i += 1) {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    readlineSync.question(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Answer: ');
    if (isEven(randomNumber) === answer) {
      console.log('Correct!');
    } else { console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'. Let's try again, ${nameUser}!`); return; }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default brainGames;
