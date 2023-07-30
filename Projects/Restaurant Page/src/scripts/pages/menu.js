import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    const menuItems = {
        food: [
            {
                name: 'Original Glazed Donut',
                calories: 190,
                protein: 0,
            },
            {
                name: 'Kolache',
                calories: 480,
                protein: 0,
            },
            {
                name: 'Croissant',
                calories: 230,
                protein: 0
            },
        ],
        drinks: [
            {
                name: 'Coffee',
                calories: 10,
                protein: 0,
            },
            {
                name: 'Orange Juice',
                calories: 170,
                protein: 2,
            }
        ],
    };

    let categories = Object.getOwnPropertyNames(menuItems);

    for (let category of categories) {
        let categoryDiv = buildElement('div', '', 'category', category);
        categoryDiv.textContent = category.slice(0,1).toUpperCase() + category.slice(1);

        for (let item of menuItems[category]) {
            let itemName = item['name'].toLowerCase().replace(/\s/g, '-');
            let itemDiv = buildElement('div', '', 'item', itemName);
            let itemInfo = Object.getOwnPropertyNames(item);

            for (let info of itemInfo) {
                let infoDiv = buildElement('div', '', 'info', info);
                infoDiv.textContent = item[info];
                itemDiv.appendChild(infoDiv);
            }

            categoryDiv.appendChild(itemDiv);
        }

        menu.appendChild(categoryDiv);
    }

    return menu;
}