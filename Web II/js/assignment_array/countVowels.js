let phrase = "Hello, world!";

function countVowels(phrase) {
  phrase = phrase.toUpperCase();
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == 'A' || phrase[i] == 'E' || phrase[i] == 'I' || phrase[i] == 'O' || phrase[i] == 'U') {
      count++;
    }
  }

  return count;
}

console.log(`Number of vowels: ${countVowels(phrase)}`);

