let numbers = [1, 2, 3, 4, 5];

function reverseArray(numbers) {
  let reverseArray = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reverseArray.push(numbers[i]);
  }

  return reverseArray;
}

console.log(`Reverse: ${reverseArray(numbers)}`);

