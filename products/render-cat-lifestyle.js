export default function updateCatItem(catItem) {
    const li = document.createElement('li');
    li.className = catItem.category;
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
    const ItemPrice = '$' + catItem.price.toFixed(2);    
    p.textContent = ItemPrice;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = catItem.code;
    p.appendChild(addButton);

    li.appendChild(p);

    return li;
}
