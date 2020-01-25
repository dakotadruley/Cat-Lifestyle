import getCart from './get-cart.js';
import catAccessories from '../data/cat-lifestyle.js';
import { findById, calcOrderItem } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const table = document.getElementById('tableBody');
const total = document.getElementById('total');
const placeOrder = document.getElementById('placeOrder');

let cart = getCart();

cart.forEach(cartItem => {
    const catItem = findById(cartItem.id, catAccessories);
    const update = renderLineItem(cartItem, catItem);

    table.appendChild(update);
});

const orderTotal = calcOrderItem(cart, catAccessories);
total.textContent = orderTotal;

if (cart.length === 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });

}


