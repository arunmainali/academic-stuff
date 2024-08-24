let numbers = [1, 2, 3, 4, 5];

function maximumElement(number) {
  let maximum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (maximum < numbers[i]) {
      maximum = numbers[i];
    }
  }

  return maximum;
}

console.log(`Maximum: ${maximumElement(numbers)}`);

