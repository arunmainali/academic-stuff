
function sum(num1, num2) {
    return num1 + num2;
}

// arrow functions are annonymys
const sum = (num1, num2) => num1 + num2;

const difference = (num1, num2) => {
    return num1 - num2;
}

console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);
console.log(`${num1} - ${num2} = ${difference(num1, num2)}`);
