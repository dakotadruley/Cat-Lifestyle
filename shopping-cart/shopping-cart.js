import cart from '../data/cart.js';
import catAccessories from '../data/cat-lifestyle.js';
import updateCatItem from '../products/render-cat-lifestyle.js';
import { calcLineItemimport, findById } from '../common/utils.js';


const table = document.getElementById('tableBody');

cart.forEach(cartItem => {
    findById(cartItem.id, catAccessories);
    updateCatItem(catItem)
    // check out what findById returns
}) 