const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    switch(req.url) {
        case '/':
            res.setHeader("Content-type", "text/html");
            fs.readFile("index.html", "utf8", (err, data) => {
                res.end(data);
            });
            break;
        case '/profile':
            res.setHeader("Content-type", "text/html");
            fs.readFile("profile.html", "utf8", (err, data) => {
                res.end(data);
            });
            break;
        case '/about':
            res.setHeader("Content-type", "text/html");
            fs.readFile("about.html", "utf8", (err, data) => {
                res.end(data);
            });
            break;
        default:
            res.setHeader("Content-type", "text/html");
            res.statusCode = 404;
            res.end("404 Not Found!");
    }

//     res.setHeader("Content-Type", "text/html");
//     res.write("<p style=color:red;>Hello</p>");
//     res.end();
});

server.listen(3000, () => console.log("Server is running"));