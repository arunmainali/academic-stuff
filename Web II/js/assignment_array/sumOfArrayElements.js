let numbers = [1, 2, 3, 4, 5];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(`Sum of elements: ${sumArray(numbers)}`);

