function isPalindrome(phrase) {
  // reverse the string
  reversePhrase = "";

  for (let i = phrase.length - 1; i >= 0; i--) {
    reversePhrase += phrase[i];
  }

  if (reversePhrase == phrase) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("DAD"));
console.log(isPalindrome("MAD"));

