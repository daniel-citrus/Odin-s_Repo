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
        ]
    };

    let items = Object.getOwnPropertyNames(menuItems);
    
    for (let item of items) {
        console.log(menuItems[item]);
    }

    return menu;
}