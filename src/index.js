import readlineSync from 'readline-sync';

let userName = 'Sam';

const getName = () => {
  const user = readlineSync.question('May I have your name?: ');
  userName = `${user}`;
  console.log(`Hello, ${user}! \n`);
};

const numArray = [15, 6, 7];

const getLengthOfArray = array => {
  const len = numArray.length - 1;
  return len;
};

const isEven = (num) => {
  return num % 2 === 0;
};

const getAnswer = () => {
  const answer = readlineSync.question('Answer: ', {
    trueValue: ['yes'],
    falseValue: ['no']
  });
};

const hasCorrectAnswer = num => {
  if (isEven(num) === true) {
    return 'yes';
  } else if (isEven(num) === false) {return 'no';}
};

const Questions = (num) => {
  for (let i = 0; i <= getLengthOfArray(); i++) {
    const question = readlineSync.question(`Question: ${numArray[i]}`);
    const answer = readlineSync.question('Answer: ');
    if (isEven(numArray[i]) === true && answer === 'yes') {
      console.log('Correct!');
    } else if (isEven(numArray[i]) === false && answer === 'no') {
      console.log('Correct!');
    } else {console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hasCorrectAnswer(numArray[i])}'. Let's try again, ${userName}!`); break;}
    if (i === getLengthOfArray()) {
        console.log(`Congratulations, ${userName}!`);
    }
  }
};

export { getName, Questions, getAnswer, hasCorrectAnswer };
