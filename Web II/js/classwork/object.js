
let user = {
    username: "Arun Mainali",
    password: "12345",
    age: 19,
    getUsername: function () {
        console.log(this.username);
    },
    getPassword: () => {
        console.log(user.password)
    },
};

// console.log(user.username);
// user.username = "Hari Prasad";
// console.log(user.username);
// console.log(user["username"]);

let property = "username";

console.log(user.username);
console.log(user["username"]);

// console.log(user.property);
console.log(user[property]);

console.log(Object.keys(user));
console.log(Object.values(user));

if(Object.keys(user).length == 0) {
    console.log("Empty");
} else {
    console.log("Not empty");
}

// console.log(Object.keys(user).length == 0);

// let users = [
//     {
//         username: "Arun Mainali",
//         password: "password",
//     },
//     {
//         username: "Hari Prasad",
//         password: "12345",
//     },
// ];

// let userlol = users.filter(u => u.username == "Arun Mainali");
// console.log(userlol);
