import catAccessories from '../data/cat-lifestyle.js';
import updateCatItem from './update-cat-item.js';

const ul = document.getElementById('catAccessories');

for (let i = 0; i < catAccessories.length; i++) {
    const catAccessory = catAccessories[i];
    const update = updateCatItem(catAccessory);
    ul.appendChild(update);
}