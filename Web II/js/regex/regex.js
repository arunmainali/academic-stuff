
const pattern = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}(\/[a-zA-Z0-9.-]*)*\/?$/

let url1 = "https://www.google.com";
let url2 = "www.youtube.com";

console.log(pattern.test(url1));
console.log(pattern.test(url2));

