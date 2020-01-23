import myCart from '../data/cart.js';
import catAccessories from '../data/cat-lifestyle.js';
import { calcLineItem, findById, calcOrderItem} from '../common/utils.js';
import renderLineItem from './render-line-item.js';


const table = document.getElementById('tableBody');
const total = document.getElementById('total');

myCart.forEach(cartItem => {
    const catItem = findById(cartItem.id, catAccessories);
    const update = renderLineItem(myCart, catItem);

    table.appendChild(update);
});

total.textContent = calcLineItem(myCart, catAccessories);

const orderTotal = calcOrderItem(myCart, catAccessories);
total.textContent = orderTotal;

// check out what findById(id, array)
// returns match true else null

//updateCatItem(catItem) 
//returns an li