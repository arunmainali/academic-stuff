
// email
function checkValidEmail(email) {
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return (regexEmail.test(email))
}

let email1 = "arunmainali@gmail.com";
let email2 = "%%lololol.yoo@jaja";

console.log(checkValidEmail(email1));
console.log(checkValidEmail(email2));

// password
function checkValidStrongPassword(password) {
    let regexPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
    return (regexPassword.test(password));
}

let password1 = "AA1b2!cd"
let password2 = "lol"

console.log(checkValidStrongPassword(password1));
console.log(checkValidStrongPassword(password2));
