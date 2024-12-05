export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const menuDiv = document.createElement('div');
    menuDiv.style.display = 'grid';
    menuDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    menuDiv.style.gap = '20px';
    menuDiv.style.margin = '20px';
    menuDiv.style.padding = '20px';
    menuDiv.style.backgroundColor = '#fffbe0';

    const items = [
        { name: 'Pasta', price: '$12' },
        { name: 'Pizza', price: '$15' },
        { name: 'Salad', price: '$10' },
        { name: 'Dessert', price: '$8' }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.style.border = '1px solid #ccc';
        menuItem.style.padding = '10px';
        menuItem.style.textAlign = 'center';

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        itemName.style.color = '#555';

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.style.fontSize = '16px';

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuDiv.appendChild(menuItem);
    });

    content.appendChild(menuDiv);
}