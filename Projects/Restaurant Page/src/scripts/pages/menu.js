import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    let pageTitle = buildElement('div', 'pageTitle', '');
    pageTitle.textContent = 'Menu';
    menu.appendChild(pageTitle);

    const menuItems = {
        food: [
            {
                name: 'Donut',
                calories: 120,
            },
            {
                name: 'Chocolate Donut',
                calories: 200,
            },
            {
                name: 'Strawberry Donut',
                calories: 185,
            },
            {
                name: 'Glazed Donut',
                calories: 190,
            },
            {
                name: 'Kolache',
                calories: 480,
            },
            {
                name: 'Croissant',
                calories: 230,
            },
        ],
        drinks: [
            {
                name: 'Coffee',
                calories: 10,
            },
            {
                name: 'Orange Juice',
                calories: 170,
            },
            {
                name: 'Water',
                calories: 0,
            }
        ],
    };

    let categories = Object.getOwnPropertyNames(menuItems);

    /* Dynamically generate the menu using the menuItems dictionary */
    for (let category of categories) {
        let categoryDiv = buildElement('div', '', 'category', category);
        let categoryName = category.slice(0, 1).toUpperCase() + category.slice(1);
        let categoryNameDiv = buildElement('div', '', 'category-name', categoryName);

        categoryNameDiv.textContent = categoryName;
        categoryDiv.appendChild(categoryNameDiv);

        let itemsDiv = buildElement('div', '', 'items');

        for (let item of menuItems[category]) {
            let itemName = item['name'].toLowerCase().replace(/\s/g, '-');
            let itemDiv = buildElement('div', '', 'item', itemName);
            let itemInfo = Object.getOwnPropertyNames(item);

            for (let info of itemInfo) {
                let infoDiv = buildElement('div', '', 'info', info);
                if (info != 'name') {
                    infoDiv.textContent = `${item[info]} ${info.slice(0,3)}`;
                }
                else {
                    infoDiv.textContent = item[info];
                }

                itemDiv.appendChild(infoDiv);
            }

            itemsDiv.appendChild(itemDiv);
        }

        categoryDiv.appendChild(itemsDiv);
        menu.appendChild(categoryDiv);
    }

    return menu;
}