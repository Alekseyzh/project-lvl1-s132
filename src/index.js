import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const numAttempt = 3;

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const getName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${getName}! \n`);
  for (let i = 0; i <= numAttempt; i += 1) {
    if (i === numAttempt) {
      console.log(`Congratulations, ${getName}!`);
      return;
    }
    const getNumArrayRandom = Math.floor(Math.random() * (100 - 1)) + 1;
    readlineSync.question(`Question: ${getNumArrayRandom}`);
    const getAnswer = readlineSync.question('Answer: ');
    if (isEven(getNumArrayRandom) === getAnswer) {
      console.log('Correct!');
    } else { console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${isEven(getNumArrayRandom)}'. Let's try again, ${getName}!`); break; }
  }
};

export default brainGames;
