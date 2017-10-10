import readlineSync from 'readline-sync';

const NameUser = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello, ', name);
};

export { NameUser as default };
