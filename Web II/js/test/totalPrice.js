let Products = [
    {
        id: 1,
        name: "Mobile",
        unitPrice: 10000,
        quantity: 2,
    },
    {
        id: 2,
        name: "Laptop",
        unitPrice: 20000,
        quantity: 3,
    },
    {
        id: 3,
        name: "Camera",
        unitPrice: 30000,
        quantity: 5,
    },
]

// let totalPrice = Products.map((unitPrice, quantity) => unitPrice * quantity);

// console.log(`Total Price: ${totalPrice}`);

// let prices = Products.map((a) => a.unitPrice * a.quantity);
// let grandTotal = 0;

// for (x of prices) {
//     grandTotal += x;
// }

// console.log(prices);
// console.log(`Total Price: ${grandTotal}`);

let a = [ 1, 2, 3, 4, 5];

let times2 = a.map((x) => x*2);

for(x in a) {
    return x * 2;
}

console.log(times2);
