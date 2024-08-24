
// url
function checkValidURL(url) {
    let regexUrl = /^https?:\/\/[\w.-]+\.[a-zA-Z]{2,5}(\/[a-zA-Z0-9.-]*)*\/?$/
    return (regexUrl.test(url));
}

let url1 = "https://www.google.com"
let url2 = "lol://www.hello%hi"

console.log(checkValidURL(url1));
console.log(checkValidURL(url2));

// password
function checkValidStrongPassword(password) {
    let regexPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
    return (regexPassword.test(password));
}

let password1 = "lol"
let password2 = "aAd78*dj"

console.log(checkValidStrongPassword(password1));
console.log(checkValidStrongPassword(password2));
