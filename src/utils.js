const randomNumber = (max, min = 1) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export default randomNumber;
