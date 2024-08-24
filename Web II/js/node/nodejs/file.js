const fs = require('fs');

// fs.writeFile("test.txt", "Hello, world!", (err) => {
//     if(err) console.log(err.message)
//     else console.log("Data written!");
// });

fs.readFile("test.txt", (err, data) => {
    if(err) console.log(err.message);
    else console.log(data.toString());
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    if(err) console.log(err.message);
    else console.log(data);
});

fs.unlink("text.txt", (err) => {
    if(err) console.log(err.message);
});