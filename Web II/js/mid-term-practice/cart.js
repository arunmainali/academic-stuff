let cart = [];

function addItem(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id == item.id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }
}

function removeItem(itemId) {
    cart = cart.filter(cartItem => cartItem.id !== itemId);
}

const item1 = { id: 1, name: "Apple", price: 0.5, quantity: 5};
