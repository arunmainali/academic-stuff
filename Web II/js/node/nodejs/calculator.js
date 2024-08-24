
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

// default export
// passes the reference of add
exports.sum = add;
exports.diff = sub;
