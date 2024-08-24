// WAP in JS to generate multiplication table for given range of numbers. 
// For eg if num1 = 2 and num2  = 8, your code should generate the tables from 2 to 8.

let number1 = 2;
let number2 = 8;

for (let i = number1; i <= number2; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
}