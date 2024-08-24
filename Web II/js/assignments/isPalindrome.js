function isPalindrome(input) {
    let string = input.toString();

    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }
    
    return true;
}

console.log(isPalindrome(123));
console.log(isPalindrome(12321));
console.log(isPalindrome("arun"));
console.log(isPalindrome("eye"));
