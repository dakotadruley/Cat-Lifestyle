export default function getCart() {
    const json = localStorage.getItem('CART');
    let cart;
    if (json) {
        cart = JSON.parse(json);
    }
    else {
        cart = [];
    }
    return cart;
}
