let numbers = [1, 2, 3, 4, 4, 5, 5];

function removeDuplicates(numbers) {
  let noDuplicates = [];

  for (let i = 0; i < numbers.length; i++) {
    let isNotDuplicate = true;

    for (let j = 0; j < noDuplicates.length; j++) {
      if (numbers[i] === noDuplicates[j]) {
        isNotDuplicate = false;
        break; // No need to continue checking if a duplicate is found
      }
    }

    if (isNotDuplicate) {
      noDuplicates.push(numbers[i]);
    }
  }

  return noDuplicates;
}

console.log(`No duplicates: ${removeDuplicates(numbers)}`);
