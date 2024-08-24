const os = require('os')

console.log(os.platform());
console.log(os.arch());

console.log(os.totalmem() / 100000024);
console.log(os.freemem() / 100000024);

console.log(os.cpus());
