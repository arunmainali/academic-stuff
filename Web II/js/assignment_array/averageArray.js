let numbers = [1, 2, 3, 4, 5];

function averageArray(numbers) {

  let sumOfElements = 0;
  for (i = 0; i < numbers.length; i++) {
    sumOfElements += numbers[i];
  }

  return (sumOfElements / numbers.length);
}

console.log(`Average: ${averageArray(numbers)}`);

