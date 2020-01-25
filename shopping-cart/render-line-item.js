// This function takes both cart line item, and 
// the corresponding product, and returens DOM that 
// matches static your static HTML
import { calcLineItem } from '../common/utils.js';

function renderLineItem(cartItem, catItem) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = catItem.name;
    tdName.classList.add('name');
    tr.appendChild(tdName);

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    tdQuantity.classList.add('quantity');
    tr.appendChild(tdQuantity); 

    const tdTotal = document.createElement('td');
    const total = calcLineItem(cartItem.quantity, catItem.price);
    tdTotal.textContent = total;
    tdTotal.classList.add('total');
    tr.appendChild(tdTotal);

    return tr;
}

export default renderLineItem;
