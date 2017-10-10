import readlineSync from 'readline-sync';

export const NameUser = (name) => {
 name = readlineSync.question('May I have your name?: ');
 console.log('Hello, ', name);
};
