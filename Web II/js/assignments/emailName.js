let email = "John.Doe@gmail.com"

function getName(email) {
    let parts = email.split("@");

    return parts[0];
}

console.log(`Name: ${getName(email)}`);