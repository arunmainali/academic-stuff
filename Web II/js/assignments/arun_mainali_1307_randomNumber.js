let min = 10;
let max = 50;

let randomNumber = Math.random() * (max - min + 1) + min;

randomNumber = Math.floor(randomNumber);

console.log(`A random number between ${min} and ${max} is ${randomNumber}.`);