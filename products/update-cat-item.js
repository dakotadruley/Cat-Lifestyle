import { findById } from '../common/utils.js';

export default function updateCatItem(catItem) {
    
    const li = document.createElement('li');
    li.classList.add(catItem.category);
    li.title = catItem.description;

    const h3 = document.createElement('h3');
    h3.textContent = catItem.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + catItem.image;
    img.alt = catItem.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    const ItemPrice = '$ ' + catItem.price.toFixed(2);    
    p.textContent = ItemPrice;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = catItem.id;
    addButton.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }

        let cartItem = findById(catItem.id, cart);

        if (!cartItem) {
            cartItem = {
                id: catItem.id,
                quantity: 1
            };

            cart.push(cartItem);
        } else {
            cartItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + catItem.name + ' added to cart');
    });

    p.appendChild(addButton);

    li.appendChild(p);

    return li;
}


// $ + could be it's own function. Then only change in one place. 