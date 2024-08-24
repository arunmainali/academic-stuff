// a reference is assigned to 'add
// const {sum, diff} = require('./calculator');

// console.log(sum(1, 2));
// console.log(diff(1, 2));

let user = {
    email: "abc@gmail.com",
    password: "password",
};

console.log(user.email);
console.log(user.password);

// let email = user.email;
// let password = user.password;

let {email, password} = user;
console.log(email, password);
