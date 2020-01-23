// This function takes both cart line item, and 
// the corresponding product, and returens DOM that 
// matches static your static HTML
import { calcLineItem } from '../common/utils.js';

function renderLineItem(cartItem, catItem) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = cartItem.name;
    tr.appendChild(tdName);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    tr.appendChild(tdQuantity); 

    const tdPrice = document.createElement('td');
    tdPrice.textContent = cartItem.price;
    tr.appendChild(tdPrice);

    const tdTotal = document.createElement('td');
    const total = calcLineItem(cartItem.quantity, catItem.price);
    tdTotal.textContent = total;
    tr.appendChild(tdTotal);

    return tr;
}

export default renderLineItem;
