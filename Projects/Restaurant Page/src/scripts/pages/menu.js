import { info } from 'sass';
import { buildElement } from '../tools/accessories';

/**
 * Generate menu page content
 */

export default () => {
    let menu = buildElement('div', 'menu', '');

    const menuItems = [
        [
            'food',
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
        [
            'drinks',
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
    ];

    for (let item of menuItems) {
        let menuCategoryDiv = buildElement('div', '', item[0], 'menu-category');
        menuCategoryDiv.textContent = item[0].slice(0, 1).toUpperCase() + item[0].slice(1);
        menu.appendChild(menuCategoryDiv);

        item.slice(1).forEach((info)=> {
            console.log(info);
        });
    }

    return menu;
}