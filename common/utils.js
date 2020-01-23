// this function takes quanity and amount and returns a total

export function calcLineItem(quanity, price) {
    const amount = quanity * price;
    return Math.round(amount * 100) / 100;
}

// this function takes an array and an id and returns the first ...
// found item that has an .id property that matches the passed in id.
// Will return null if no match is found

export function findById(id, array) {
    array.forEach(arrayItem => {
        if (id === arrayItem) {
            return true; } 
            
        else return null;
    });
}

// This function takes the cart array and products array.
// Calculate the total of your cart data as the expected value.
export function calcOrderItem(myCart, catAccessories) {
    let orderTotal = 0;

    myCart.forEach(cartItem => {
        const catItem = findById(catAccessories, cartItem.id);
        const cartItemTotal = calcLineItem(cartItem.quanity, catItem.price);
        orderTotal += cartItemTotal;
        
    });
    return orderTotal;
}