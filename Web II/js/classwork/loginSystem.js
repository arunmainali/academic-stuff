let users = [
    {
        username: "Arun Mainali",
        password: "password",
    },
    {
        username: "Hari Prasad",
        password: "12345",
    },
];

let inputUsername1 = "Hari Prasad";
let inputPassword1 = "12345";

// ? hint: use the "find" method
function validLogIn(inputUsername_p, inputPassword_p) {
    if (users.length == 0) {
        console.log(`Database is empty!`);
        return false;
    }

    let user = users.find(user => user.username === inputUsername_p);

    if (user && user.password === inputPassword_p) {
        console.log(`Login Successful!`);
        return true;
    } else {
        console.log(`Login not successful!`);
        return false;
    }
}
