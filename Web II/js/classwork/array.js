// let numbers = [ 1, 2, 3, "four", 5 ];

// console.log(numbers[0]);
// console.log(numbers[1]);

// console.log(numbers);

// // arrays are mutable
// numbers[0] = true;

// console.log(numbers);

// numbers.push(7);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.slice(1, 4);
// console.log(numbers);

// numbers.splice(2, 1);
// console.log(numbers);

// const numbers = [10,20,30,40,50];
// // numbers.splice(2, 3);

// console.log(numbers);
// console.log(`${numbers.splice(2, 3)}`)

// let numbers = [ 1, 2, 3, 4, 5];

// console.log(numbers.includes(4));
// console.log(numbers.includes(6));

// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(3));

// ! about split

// let a = "asdf";
// a.split();

// console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for of loops
// for (let num of numbers)
//     console.log(num);

// // ? Average of numbers in an array
// let numbers = [ 1, 2, 3, 4, 5];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// let average = sum / numbers.length;

// console.log(`Average: ${average}`);

// // ? Maximum and minimum
// let max = numbers[0];
// let min = numbers[0];

// for(let i = 0; i < numbers.length; i++) {
//     if(max < numbers[i]) {
//         max = numbers[i];
//     }

//     if(min > numbers[i]) {
//         min = numbers[i];
//     }
// }

// console.log(`Max: ${max}, Min: ${min}`);

// let numbers = [ 1, 2, 3, 4 ];

// numbers.forEach( (numbers) => {
//     console.log(numbers ** 2);
// });

// let numbers = [ 1, 2, 3, 4 ];

// let sqnumbers = numbers.map((numbers) => numbers ** 2);

// console.log(sqnumbers);

// let numbers = [ 1, 2, 3, 4, 5 ];
// let evenNumbers = numbers.filter((numbers) => numbers % 2 == 0).map((numbers) => numbers ** 2);

// console.log(evenNumbers);

// let evenNumbers = numbers.filter((numbers) => {
//     return numbers % 2 == 0;
// });

// let numbers = [ 1, 2, 3, 4, 5 ];
// //                                                      initial value of acc     
// //                                                             |
// //                                                             V
// let result = numbers.reduce((sum, numbers) => (sum + numbers), 5);

// console.log(result);

// let numbers = [ 1, 2, 3, 4, 5];
// let newNumbers = [...numbers, 5, 6, 7]; // repitition is allowed

// console.log(newNumbers);
